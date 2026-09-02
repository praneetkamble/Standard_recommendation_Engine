from fastapi import FastAPI, HTTPException, Query
from fastapi.middleware.cors import CORSMiddleware
from typing import Optional, List
import json
import os

from models.schemas import (
    RecommendationRequest,
    RecommendationResponse,
    StandardOut,
    StandardCreate,
    SearchHistoryOut,
    SearchHistoryCreate,
    AnalyticsSummary
)
from services.recommendation_engine import PythonTfidfEngine
from database.sqlite_db import (
    init_db,
    insert_standard,
    get_all_standards,
    get_standard_by_id,
    log_search,
    get_search_history
)

app = FastAPI(
    title="Indian Standards Recommendation Engine API",
    description="Problem Statement #42 (SIH Reference: SIH26108) - Product to Indian Standards Recommendation Engine using TF-IDF and Cosine Similarity.",
    version="1.0.0"
)

# Enable CORS for React Frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

engine = PythonTfidfEngine()

@app.on_event("startup")
def startup_event():
    init_db()
    # Check if standards exist in SQLite, if not seed from catalogue JSON
    standards = get_all_standards()
    if not standards:
        json_path = os.path.join(os.path.dirname(__file__), "data", "standards_catalogue.json")
        if os.path.exists(json_path):
            with open(json_path, "r", encoding="utf-8") as f:
                data = json.load(f)
                for item in data:
                    insert_standard(item)
            standards = get_all_standards()
    engine.fit(standards)

@app.get("/")
def root():
    return {
        "service": "Standards Recommendation Engine (SIH26108)",
        "status": "online",
        "model": "TF-IDF + Cosine Similarity",
        "catalogue_size": len(engine.standards)
    }

@app.get("/api/standards", response_model=List[StandardOut])
def list_standards(category: Optional[str] = None):
    standards = get_all_standards()
    if category and category != "All Categories":
        standards = [s for s in standards if s.get("category") == category]
    return standards

@app.get("/api/standards/{standard_id}", response_model=StandardOut)
def get_standard(standard_id: str):
    std = get_standard_by_id(standard_id)
    if not std:
        raise HTTPException(status_code=404, detail="Standard not found")
    return std

@app.post("/api/standards", response_model=StandardOut)
def create_standard(standard_in: StandardCreate):
    import uuid
    new_id = f"std-{uuid.uuid4().hex[:6]}"
    data = standard_in.dict()
    data["id"] = new_id
    insert_standard(data)
    # Refresh engine
    engine.fit(get_all_standards())
    return data

@app.post("/api/recommend", response_model=RecommendationResponse)
def get_recommendations(req: RecommendationRequest):
    if not req.query.strip():
        return RecommendationResponse(
            query="",
            total_matches=0,
            execution_time_ms=0.0,
            results=[]
        )

    res = engine.recommend(
        query=req.query,
        category=req.category,
        industry=req.industry,
        status=req.status,
        min_score=req.min_score,
        top_k=req.top_k
    )

    # Log search in SQLite
    top_code = res["results"][0]["standard"]["standard_code"] if res["results"] else None
    top_title = res["results"][0]["standard"]["title"] if res["results"] else None
    top_score = res["results"][0]["score"] if res["results"] else 0.0

    log_search(
        query=req.query,
        results_count=res["total_matches"],
        top_code=top_code,
        top_title=top_title,
        top_score=top_score,
        category=req.category
    )

    return res

@app.get("/api/search-history", response_model=List[SearchHistoryOut])
def search_history(limit: int = 50):
    return get_search_history(limit=limit)

@app.get("/api/categories")
def get_categories():
    standards = get_all_standards()
    categories = sorted(list(set(s.get("category") for s in standards if s.get("category"))))
    industries = sorted(list(set(s.get("industry") for s in standards if s.get("industry"))))
    return {
        "categories": ["All Categories"] + categories,
        "industries": ["All Industries"] + industries
    }

@app.get("/api/analytics", response_model=AnalyticsSummary)
def get_analytics():
    standards = get_all_standards()
    history = get_search_history(limit=100)

    category_counts = {}
    for s in standards:
        c = s.get("category", "General")
        category_counts[c] = category_counts.get(c, 0) + 1

    category_dist = [{"category": k, "count": v} for k, v in category_counts.items()]

    query_counts = {}
    for h in history:
        q = h.get("query", "").strip()
        if q:
            query_counts[q] = query_counts.get(q, 0) + 1

    top_queries = sorted([{"query": k, "count": v} for k, v in query_counts.items()], key=lambda x: x["count"], reverse=True)[:10]

    return {
        "total_standards": len(standards),
        "total_searches": len(history),
        "categories_count": len(category_counts),
        "top_searched_terms": top_queries,
        "category_distribution": category_dist
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
