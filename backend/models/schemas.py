from pydantic import BaseModel, Field
from typing import List, Optional

class StandardBase(BaseModel):
    standard_code: str = Field(..., example="IS 694:2010")
    title: str = Field(..., example="PVC Insulated Cables for Working Voltages up to 1100V")
    category: str = Field(..., example="Electrical Products")
    product: str = Field(..., example="Electrical cable, domestic wiring cables, flexible cords")
    description: str = Field(..., example="Specifies requirements and test methods for PVC insulated electric cables...")
    keywords: List[str] = Field(default_factory=list)
    industry: str = Field(..., example="Power & Electrical")
    status: str = Field(default="Mandatory ISI Mark")
    related_products: List[str] = Field(default_factory=list)
    publication_year: int = Field(default=2010)
    scope: Optional[str] = None
    test_parameters: List[str] = Field(default_factory=list)
    harmonized_standard: Optional[str] = None

class StandardCreate(StandardBase):
    pass

class StandardOut(StandardBase):
    id: str

class RecommendationRequest(BaseModel):
    query: str = Field(..., example="domestic electrical cable for house wiring")
    category: Optional[str] = None
    industry: Optional[str] = None
    status: Optional[str] = None
    min_score: float = Field(default=0.05, ge=0.0, le=1.0)
    top_k: int = Field(default=10, ge=1, le=50)

class TermContribution(BaseModel):
    term: str
    query_weight: float
    doc_weight: float
    contribution: float

class RecommendationResult(BaseModel):
    standard: StandardOut
    score: float
    percentage: float
    rank: int
    matched_keywords: List[str]
    explanation: str
    tfidf_breakdown: List[TermContribution] = []

class RecommendationResponse(BaseModel):
    query: str
    total_matches: int
    execution_time_ms: float
    results: List[RecommendationResult]

class SearchHistoryCreate(BaseModel):
    query: str
    results_count: int
    top_standard_code: Optional[str] = None
    top_standard_title: Optional[str] = None
    top_score: float = 0.0
    category_filter: Optional[str] = None

class SearchHistoryOut(SearchHistoryCreate):
    id: str
    timestamp: str

class AnalyticsSummary(BaseModel):
    total_standards: int
    total_searches: int
    categories_count: int
    top_searched_terms: List[dict]
    category_distribution: List[dict]
