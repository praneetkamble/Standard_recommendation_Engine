import re
import math
import time
from typing import List, Dict, Any, Optional

try:
    from sklearn.feature_extraction.text import TfidfVectorizer
    from sklearn.metrics.pairwise import cosine_similarity
    import numpy as np
    SKLEARN_AVAILABLE = True
except ImportError:
    SKLEARN_AVAILABLE = False
    import numpy as np

class PythonTfidfEngine:
    def __init__(self, standards_data: List[Dict[str, Any]] = None):
        self.standards = standards_data or []
        self.vectorizer = None
        self.doc_matrix = None
        self.doc_corpus = []
        if self.standards:
            self.fit(self.standards)

    def _prepare_corpus(self, standards: List[Dict[str, Any]]) -> List[str]:
        corpus = []
        for std in standards:
            # Weighted multi-field combination
            kw_str = " ".join(std.get("keywords", []))
            related_str = " ".join(std.get("related_products", []))
            # Repeat heavily weighted fields to mirror custom weights in TF-IDF
            combined_text = (
                f"{std.get('product', '')} {std.get('product', '')} {std.get('product', '')} "
                f"{kw_str} {kw_str} {kw_str} "
                f"{std.get('title', '')} {std.get('title', '')} "
                f"{std.get('category', '')} {std.get('category', '')} "
                f"{related_str} {std.get('industry', '')} "
                f"{std.get('description', '')} {std.get('scope', '')}"
            )
            corpus.append(combined_text.lower())
        return corpus

    def fit(self, standards: List[Dict[str, Any]]):
        self.standards = standards
        self.doc_corpus = self._prepare_corpus(standards)
        
        if SKLEARN_AVAILABLE and len(self.doc_corpus) > 0:
            self.vectorizer = TfidfVectorizer(
                stop_words='english',
                sublinear_tf=True,
                ngram_range=(1, 2)
            )
            self.doc_matrix = self.vectorizer.fit_transform(self.doc_corpus)
        return self

    def recommend(
        self,
        query: str,
        category: Optional[str] = None,
        industry: Optional[str] = None,
        status: Optional[str] = None,
        min_score: float = 0.05,
        top_k: int = 10
    ) -> Dict[str, Any]:
        start_time = time.time()
        
        if not query.strip() or not self.standards:
            return {
                "query": query,
                "total_matches": 0,
                "execution_time_ms": 0.0,
                "results": []
            }

        cleaned_query = query.lower().strip()

        if SKLEARN_AVAILABLE and self.vectorizer is not None:
            query_vec = self.vectorizer.transform([cleaned_query])
            similarities = cosine_similarity(query_vec, self.doc_matrix).flatten()
        else:
            # Fallback pure-python similarity if sklearn is not installed
            similarities = self._fallback_cosine(cleaned_query)

        scored_items = []
        for idx, sim in enumerate(similarities):
            std = self.standards[idx]
            
            # Filtering
            if category and category != "All Categories" and std.get("category") != category:
                continue
            if industry and industry != "All Industries" and std.get("industry") != industry:
                continue
            if status and status != "All Statuses" and std.get("status") != status:
                continue

            score = float(sim)
            # Code / exact match boost
            if std.get("standard_code", "").lower() in cleaned_query:
                score = min(1.0, score + 0.35)

            if score >= min_score:
                percentage = round(min(99.5, max(10.0, score * 100)), 1)
                
                # Identify matched keywords
                q_words = set(re.findall(r'\w+', cleaned_query))
                std_keywords = [k.lower() for k in std.get("keywords", [])]
                matched_kw = [k for k in std_keywords if any(qw in k or k in qw for qw in q_words)]

                explanation = self._generate_explanation(std, matched_kw, percentage)

                scored_items.append({
                    "standard": std,
                    "score": round(score, 4),
                    "percentage": percentage,
                    "matched_keywords": matched_kw,
                    "explanation": explanation
                })

        scored_items.sort(key=lambda x: x["score"], reverse=True)
        top_results = scored_items[:top_k]
        
        for r_idx, r in enumerate(top_results):
            r["rank"] = r_idx + 1

        exec_time = round((time.time() - start_time) * 1000, 2)
        return {
            "query": query,
            "total_matches": len(top_results),
            "execution_time_ms": exec_time,
            "results": top_results
        }

    def _generate_explanation(self, std: Dict[str, Any], matched_kw: List[str], percentage: float) -> str:
        kw_str = ", ".join(matched_kw[:3]) if matched_kw else "specifications"
        if percentage >= 80:
            return f"High confidence match ({percentage}%). Direct product alignment on '{std.get('product', '').split(',')[0]}' with strong keyword relevance ({kw_str})."
        elif percentage >= 50:
            return f"Strong relevance ({percentage}%). Standard covers safety & quality requirements for {std.get('category')} ({kw_str})."
        else:
            return f"Contextual relevance ({percentage}%). Matches general parameters for {std.get('industry')}."

    def _fallback_cosine(self, query: str) -> List[float]:
        q_tokens = set(re.findall(r'\w+', query))
        sims = []
        for text in self.doc_corpus:
            d_tokens = set(re.findall(r'\w+', text))
            intersection = q_tokens.intersection(d_tokens)
            if not q_tokens or not d_tokens:
                sims.append(0.0)
            else:
                sim = len(intersection) / (math.sqrt(len(q_tokens)) * math.sqrt(len(d_tokens)))
                sims.append(sim)
        return sims
