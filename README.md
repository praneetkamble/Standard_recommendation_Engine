# Standards Recommendation Engine (SIH26108 / Problem Statement #42)
### College Hackathon Prototype — GVHAX 2026 / Acharya Hackathon

> **Problem Statement #42**: Given a product name, category, or specification, recommend applicable Indian Standards (IS/BIS) by matching the product against a national standards catalogue using Machine Learning (TF-IDF Vectorization and Cosine Similarity ranking).

---

## 🏛️ System Overview

The **Standards Recommendation Engine** bridges the gap between Indian manufacturers/startups and national regulatory compliance. By translating informal product descriptions into high-precision Indian Standard (IS) recommendations, it accelerates the compliance journey for MSMEs, quality auditors, and procurement officers.

```
+-------------------------------------------------------------+
|                      React 19 Frontend                      |
| (Search Console, Live Gauge, Filter Matrix, Judge Inspector) |
+------------------------------+------------------------------+
                               |
                        REST API (JSON)
                               |
+------------------------------v------------------------------+
|                    FastAPI Backend Service                  |
| (FastAPI REST Routes, CORS, Validation, SQLite Persistence) |
+------------------------------+------------------------------+
                               |
+------------------------------v------------------------------+
|              TF-IDF + Cosine Similarity Engine               |
| - Text Preprocessing (Tokenization, Stopwords, Stemming)     |
| - Multi-Field Weighting (Product 3.5x, Keywords 3.0x, etc.)  |
| - Smooth IDF: log((1+N)/(1+df)) + 1                          |
| - L2 Unit Normalization & Cosine Dot Product Ranking         |
+------------------------------+------------------------------+
                               |
+------------------------------v------------------------------+
|           Standards Dataset & SQLite Search History         |
| (45+ Mock Standards, IS Codes, Testing Parameters, Scope)    |
+-------------------------------------------------------------+
```

---

## 📐 Mathematical Formulation

### 1. Term Frequency (Sublinear TF)
To prevent lengthy descriptions from dominating concise, high-signal product keywords:
$$\text{TF}(t, d) = 1 + \ln(\text{count}(t, d)) \quad \text{for } \text{count} > 0$$

### 2. Smooth Inverse Document Frequency (IDF)
Penalizes generic words across the catalogue while magnifying high-specificity technical terms:
$$\text{IDF}(t) = \ln\left(\frac{1 + N}{1 + \text{DF}(t)}\right) + 1$$
Where $N$ is total standards in the catalogue and $\text{DF}(t)$ is number of standards containing term $t$.

### 3. Cosine Similarity Score
Measures the directional alignment (angle) between the query vector $\vec{q}$ and standard document vector $\vec{d}$:
$$\text{Cosine Similarity}(\vec{q}, \vec{d}) = \frac{\vec{q} \cdot \vec{d}}{\|\vec{q}\|_2 \cdot \|\vec{d}\|_2} = \frac{\sum_{i=1}^{V} q_i \cdot d_i}{\sqrt{\sum q_i^2} \cdot \sqrt{\sum d_i^2}}$$

The score is mapped to a percentage: $\text{Relevance \%} = \min(99.5\%, \text{Score} \times 100)$.

---

## 👥 Hackathon Team Collaboration Matrix

| Team Member | Module & Responsibility | Deliverable / Files |
|-------------|-------------------------|---------------------|
| **Member 1 (Frontend Lead)** | React 19 UI, Dashboard & Results Views | `src/App.tsx`, `src/components/` |
| **Member 2 (Backend Lead)** | FastAPI REST Endpoints & Routing | `backend/main.py`, `backend/models/schemas.py` |
| **Member 3 (ML Engineer)** | TF-IDF Vectorizer & Cosine Similarity | `src/services/tfidfEngine.ts`, `backend/services/recommendation_engine.py` |
| **Member 4 (Database Lead)** | SQLite Schemas, CRUD & Mock Dataset | `backend/database/sqlite_db.py`, `src/data/mockStandardsCatalogue.ts` |
| **Member 5 (UI/UX Designer)** | Design System, Visualizations & Modals | Tailwind CSS, Recharts analytics, Badges |
| **Member 6 (QA & Presentation)** | Unit Testing, Judge Demo & Documentation | `backend/test_engine.py`, Presentation script |

---

## 🧪 Automated Unit Test Scenarios

The engine includes 7 automated unit tests covering all edge conditions:
1. **Exact Product Match**: "PVC Insulated Cables for domestic wiring" $\rightarrow$ Ranked #1: `IS 694:2010` (Score > 0.85)
2. **Partial Product Match**: "drinking water bottle 20 litre jar" $\rightarrow$ Ranked #1: `IS 14543:2018`
3. **Multi-Domain Overlap**: "concrete reinforcement steel bar TMT Fe500" $\rightarrow$ Ranked #1: `IS 1786:2008`
4. **Safety & PPE**: "Industrial safety helmet with chin strap" $\rightarrow$ Ranked #1: `IS 2925:1984`
5. **Completely Unrelated Query**: "cryptocurrency blockchain interstellar" $\rightarrow$ Returns 0 results (Threshold filter)
6. **Empty / Whitespace Input**: `"   "` $\rightarrow$ Graceful empty response (Latency < 1ms)
7. **Fuzzy & Compound Terms**: "photovoltaic solar power inverters on-grid" $\rightarrow$ Ranked #1: `IS 16221:2015`

---

## 🎤 3-Minute Judge Demonstration Script

1. **The Hook (0:00 - 0:30)**:
   > *"Good morning respected judges. India has over 20,000 national standards, but MSME manufacturers struggle to identify which IS/BIS codes apply to their products. For Problem Statement #42 (SIH26108), our team built the Standards Recommendation Engine."*
2. **Live Search Demo (0:30 - 1:15)**:
   > *"Let's enter a real-world product: 'Electrical cable for domestic use'. Within 2 milliseconds, our TF-IDF cosine engine ranks IS 694:2010 at 94% relevance. Notice the 'Why Recommended' breakdown explaining exact token matches ('cable', 'domestic', 'pvc')."*
3. **Drill Down & Filters (1:15 - 1:45)**:
   > *"Clicking on IS 694 reveals technical testing parameters (Conductor resistance, Flame retardance) and Mandatory ISI Mark status. We can filter by industry or adjust minimum confidence thresholds."*
4. **Judge Inspector & Math (1:45 - 2:30)**:
   > *"In our 'Judge & ML Inspector' tab, we expose the exact TF-IDF term weights, matrix cosine angle calculation, and 7 live unit tests validating exact, partial, and negative matches."*
5. **Future Roadmap (2:30 - 3:00)**:
   > *"In Phase 2, this scales to all 20,000+ Bureau of Indian Standards using hybrid dense embeddings and multilingual voice search in 12 Indian regional languages."*

---

## ❓ Frequently Asked Judge Q&A

**Q1: Why did you choose TF-IDF + Cosine Similarity over an LLM API?**
- **A**: TF-IDF is 100% deterministic, ultra-fast (<2ms response time), requires zero external API costs, works completely offline without network latency, and prevents hallucination of fake standard numbers.

**Q2: How do you handle non-standard vocabulary or synonyms?**
- **A**: We apply custom morphological stemming, domain-specific synonym expansion in the catalogue schema (`keywords` and `related_products`), and weighted multi-field aggregation.

**Q3: How will this scale to 25,000+ Indian Standards?**
- **A**: The document matrix for 25,000 standards consumes less than 15 MB in memory. With inverted indexing and sparse matrices (Scipy / SQLite FTS5), cosine similarity runs in under 15ms at full national scale.
