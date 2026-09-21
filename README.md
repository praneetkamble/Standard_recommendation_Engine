# MANAKSETU — STANDARDS RECOMMENDATION ENGINE

GVHAX 2026 / Acharya Hackathon
Problem Statement #42
SIH Reference: SIH26108

============================================================
1. PROJECT OBJECTIVE
============================================================

Build a polished, functional 3-hour hackathon MVP called "ManakSetu".

Problem Statement:

Given a product name, category, or product description, recommend the most relevant Indian Standards by matching the user's input against a structured standards catalogue using a similarity/recommendation model.

The MVP must demonstrate this complete workflow:

User Product Description
        ↓
Text Preprocessing
        ↓
TF-IDF Vectorization
        ↓
Weighted Field Matching
        ↓
Cosine Similarity
        ↓
Rank Standards
        ↓
Apply Similarity Threshold
        ↓
Explain Why Each Result Matched
        ↓
Display Recommendations


============================================================
2. IMPORTANT MVP CONSTRAINT
============================================================

This is a 3-hour college-level hackathon.

DO NOT build a production-scale system.

Prioritize:

1. Working search
2. Working recommendation engine
3. Working FastAPI backend
4. Working React frontend
5. Working mock catalogue
6. Clear recommendation results
7. Professional UI

Only add secondary features after the core workflow is stable.

If time is running out, STOP adding features and make the core search/recommendation flow reliable.


============================================================
3. PRODUCT CONCEPT
============================================================

ManakSetu is an intelligent standards discovery tool.

The user should be able to enter natural language such as:

"PVC insulated electrical cable for domestic wiring"

"industrial safety helmet"

"TMT steel reinforcement bar"

"packaged drinking water"

"photovoltaic solar inverter"

The system searches the demo standards catalogue and returns ranked results.

Each result must show:

- Standard code
- Standard title
- Product
- Category
- Similarity score
- Short description
- Matching keywords
- Why it was recommended
- Related products
- Testing information where available
- Certification information where available


============================================================
4. IMPORTANT DATA DISCLAIMER
============================================================

The MVP must NOT claim that the demo catalogue represents the complete
official BIS database.

Clearly display:

"DEMO / MOCK STANDARDS CATALOGUE"

Also display:

"Prototype Notice: Recommendations are generated from the project's
demo/mock catalogue and are intended for demonstration only. They do not
constitute legal, regulatory, or certification advice."

DO NOT fabricate official IS codes and present them as verified official
requirements.

For mock records, use clearly identifiable demo codes such as:

DEMO-EL-001
DEMO-EL-002
DEMO-CV-001
DEMO-FD-001

If verified real standards are added later, include:

data_source = VERIFIED

Otherwise:

data_source = MOCK


============================================================
5. TECHNOLOGY STACK
============================================================

FRONTEND:

- React
- TypeScript
- Vite
- Tailwind CSS
- Recharts
- Lucide React

BACKEND:

- Python
- FastAPI
- Pydantic
- Uvicorn

RECOMMENDATION ENGINE:

- scikit-learn
- NumPy
- Pandas
- TF-IDF
- Cosine Similarity

DATABASE:

- SQLite
- SQLAlchemy

TESTING:

- Pytest
- FastAPI TestClient


============================================================
6. ARCHITECTURE
============================================================

Use a simple monolithic architecture.

React Frontend
       ↓
FastAPI REST API
       ↓
Recommendation Service
       ↓
TF-IDF + Cosine Similarity
       ↓
SQLite Standards Catalogue
       ↓
Ranked Recommendations
       ↓
React Results UI


IMPORTANT:

The recommendation engine must exist ONLY in Python.

DO NOT implement a second TF-IDF engine in TypeScript.

The frontend should call the backend API and display the returned results.

Python must be the single source of truth for recommendation scoring.


============================================================
7. FINAL PROJECT STRUCTURE
============================================================

manaksetu/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── SearchBar.tsx
│   │   │   ├── ResultCard.tsx
│   │   │   ├── SimilarityGauge.tsx
│   │   │   ├── FilterPanel.tsx
│   │   │   ├── StandardModal.tsx
│   │   │   ├── StatCard.tsx
│   │   │   ├── LoadingState.tsx
│   │   │   └── EmptyState.tsx
│   │   │
│   │   ├── pages/
│   │   │   ├── SearchPage.tsx
│   │   │   ├── CataloguePage.tsx
│   │   │   ├── AnalyticsPage.tsx
│   │   │   ├── HistoryPage.tsx
│   │   │   └── JudgeDemoPage.tsx
│   │   │
│   │   ├── services/
│   │   │   └── api.ts
│   │   │
│   │   ├── types/
│   │   │   └── index.ts
│   │   │
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css
│   │
│   ├── package.json
│   ├── vite.config.ts
│   ├── tailwind.config.js
│   └── tsconfig.json
│
├── backend/
│   ├── main.py
│   │
│   ├── api/
│   │   ├── recommend.py
│   │   ├── standards.py
│   │   ├── history.py
│   │   └── analytics.py
│   │
│   ├── services/
│   │   ├── recommendation_engine.py
│   │   ├── preprocessing.py
│   │   └── explanation.py
│   │
│   ├── database/
│   │   ├── database.py
│   │   ├── models.py
│   │   └── seed.py
│   │
│   ├── schemas/
│   │   └── schemas.py
│   │
│   ├── data/
│   │   └── mock_standards.json
│   │
│   ├── tests/
│   │   ├── test_recommendation.py
│   │   ├── test_api.py
│   │   └── test_edge_cases.py
│   │
│   ├── requirements.txt
│   └── README.md
│
├── README.md
├── .gitignore
└── LICENSE


============================================================
8. DATABASE SCHEMA
============================================================

Create a SQLite database.

TABLE: standards

Fields:

id
standard_code
title
category
product
description
keywords
industry
status
related_products
testing_parameters
certification_info
data_source
created_at

Example:

{
  "standard_code": "DEMO-EL-001",
  "title": "PVC Insulated Electrical Cables",
  "category": "Electrical",
  "product": "PVC insulated electrical cable",
  "description": "Electrical cables intended for domestic and general wiring applications.",
  "keywords": [
    "PVC",
    "cable",
    "electrical",
    "wiring",
    "domestic",
    "insulated"
  ],
  "industry": "Electrical",
  "status": "Demo",
  "related_products": [
    "house wiring",
    "power cable",
    "insulated conductor"
  ],
  "testing_parameters": [
    "insulation",
    "conductor resistance",
    "voltage withstand"
  ],
  "certification_info": "Demo information only",
  "data_source": "MOCK"
}


TABLE: search_history

Fields:

id
query
category
result_count
top_result_id
created_at


============================================================
9. MOCK DATASET
============================================================

Create approximately 48 realistic MOCK records.

Cover these categories:

Electrical:
7 records

Construction:
7 records

Food and Water:
6 records

Mechanical:
5 records

Automotive:
4 records

Safety / PPE:
5 records

Textiles:
4 records

Consumer Products:
4 records

Agriculture:
3 records

Industrial:
3 records

TOTAL:
48 records

The dataset must contain enough different vocabulary to produce meaningful
TF-IDF rankings.

Use demo standard identifiers such as:

DEMO-EL-001
DEMO-EL-002
DEMO-CV-001
DEMO-FW-001
DEMO-SF-001

Do NOT invent real IS numbers and label them as official.


============================================================
10. TEXT PREPROCESSING
============================================================

Implement lightweight preprocessing.

Steps:

1. Convert text to lowercase
2. Normalize whitespace
3. Remove unnecessary punctuation
4. Tokenize
5. Remove common English stopwords
6. Preserve technical terms
7. Normalize simple variations where useful

Do NOT spend hackathon time building a complicated NLP pipeline.

Use:

TfidfVectorizer(
    lowercase=True,
    stop_words="english",
    sublinear_tf=True,
    smooth_idf=True,
    norm="l2",
    ngram_range=(1, 2)
)


============================================================
11. RECOMMENDATION ENGINE
============================================================

The recommendation engine must compare the user's query against:

- product
- keywords
- category
- title
- related_products
- description
- industry

Use weighted field importance.

Recommended weights:

Product              = 3.5
Keywords             = 3.0
Category             = 2.5
Title                = 2.5
Related Products     = 2.0
Description          = 1.0
Industry             = 1.0

The purpose of weighting is to give more importance to high-signal
technical fields.

The implementation should use separate field representations or another
clear method that makes these weights explicit.

Do not simply create an unexplained giant text string.


============================================================
12. TF-IDF
============================================================

Use sublinear TF:

TF(t,d) =
    1 + log(count(t,d))   if count > 0
    0                     otherwise

Use smooth IDF:

IDF(t) =
    log((1 + N) / (1 + DF(t))) + 1

Use L2 normalization.

Cosine similarity:

cos(q,d) =
    (q · d) / (||q||₂ × ||d||₂)

The final recommendation score must be based on cosine similarity.


============================================================
13. RELEVANCE SCORE
============================================================

Do NOT artificially cap scores at 99.5%.

Use:

relevance_percent = round(similarity * 100)

Example:

similarity = 0.87

relevance_percent = 87


IMPORTANT:

The score represents textual similarity to the demo catalogue.

It is NOT:

- probability
- legal applicability
- certification probability
- regulatory confidence


Display:

"87% Similarity"

NOT:

"87% probability that this standard is legally required."


============================================================
14. SIMILARITY THRESHOLD
============================================================

Use a configurable minimum similarity threshold.

Default:

MIN_SIMILARITY = 0.15

Only return results where:

similarity >= MIN_SIMILARITY

If nothing passes the threshold, return:

"No sufficiently relevant standards found."

Also provide a suggestion:

"Try adding the product type, material, application, or industry."


============================================================
15. RECOMMENDATION RESPONSE
============================================================

POST /api/recommend

Request:

{
  "query": "PVC insulated electrical cable for domestic wiring",
  "category": "Electrical",
  "limit": 5,
  "threshold": 0.15
}

Response:

{
  "query": "PVC insulated electrical cable for domestic wiring",
  "results": [
    {
      "rank": 1,
      "standard_id": 1,
      "standard_code": "DEMO-EL-001",
      "title": "PVC Insulated Electrical Cables",
      "category": "Electrical",
      "product": "PVC insulated electrical cable",
      "similarity": 0.87,
      "relevance_percent": 87,
      "matched_keywords": [
        "PVC",
        "electrical",
        "cable",
        "domestic",
        "wiring"
      ],
      "why_recommended": "Strong matches were found in product, title,
      category and keyword fields."
    }
  ],
  "result_count": 1,
  "latency_ms": 35
}


============================================================
16. EXPLAINABILITY
============================================================

Every recommendation must explain why it was returned.

Example:

WHY THIS WAS RECOMMENDED

Matched terms:

✓ PVC
✓ electrical
✓ cable
✓ domestic
✓ wiring

Strongest matching fields:

✓ Product
✓ Keywords
✓ Category
✓ Title

Similarity:

87%


Do not use an external LLM for this.

Generate explanations deterministically from the matching fields and terms.


============================================================
17. SIMILARITY LABELS
============================================================

Use these labels:

80–100:
Very High Similarity

60–79:
High Similarity

40–59:
Moderate Similarity

15–39:
Low Similarity

Below 15:
Do not display


These labels describe textual similarity only.


============================================================
18. API ENDPOINTS
============================================================

GET /api/health

GET /api/standards

GET /api/standards/{id}

POST /api/recommend

GET /api/search-history

POST /api/search-history

GET /api/analytics


Do not create unnecessary APIs.


============================================================
19. API ERROR FORMAT
============================================================

Use a consistent error structure:

{
  "error": {
    "code": "INVALID_QUERY",
    "message": "Please enter a product description."
  }
}

Possible error codes:

INVALID_QUERY
STANDARD_NOT_FOUND
DATABASE_ERROR
INTERNAL_ERROR


============================================================
20. FRONTEND DESIGN
============================================================

The frontend must look like a professional technology/compliance platform,
NOT a basic college CRUD application.

Design language:

- Professional
- Modern
- Clean
- Government/standards oriented
- Technical
- High information clarity
- Responsive
- Accessible

Avoid excessive animations.

Use subtle transitions only where useful.


============================================================
21. MAIN NAVIGATION
============================================================

Sidebar/navbar:

MANAKSETU

Search
Catalogue
Analytics
History
Judge Demo


============================================================
22. SEARCH PAGE
============================================================

The first screen must immediately communicate:

"Describe Your Product.
Discover Relevant Standards."

Subtitle:

"Use natural language to find relevant standards from the demo catalogue."


Large search box:

"Describe your product, material, application or specification..."


Example queries:

Electrical cable
Safety helmet
TMT steel bar
Packaged drinking water
Solar inverter


Primary button:

"Analyze Standards →"


Show:

"Demo / Mock Standards Catalogue"


============================================================
23. SEARCH RESULTS
============================================================

Display:

Search query

Number of results

Search latency

Filters

Ranked recommendation cards


Each card:

Rank

Standard Code

Standard Title

Similarity percentage

Similarity gauge/bar

Category

Product

Description

Matched keywords

Why recommended

View Details button


Example:

------------------------------------------------
#1

DEMO-EL-001

PVC Insulated Electrical Cables

87% Similarity

██████████████████░░

Category:
Electrical

Matched:
PVC • cable • electrical • domestic • wiring

Why recommended:
Strong matches were found across product,
keyword and category fields.

[View Standard]
------------------------------------------------


============================================================
24. STANDARD DETAILS
============================================================

Create a modal or detail panel.

Display:

Standard Code
Title
Category
Product
Industry
Description
Keywords
Related Products
Testing Parameters
Certification Information
Data Source
Status


For mock records display:

"Demo / Mock Catalogue Entry"


============================================================
25. FILTERS
============================================================

Implement:

Category
Industry
Minimum Similarity
Data Source

Keep filters simple and reliable.


============================================================
26. CATALOGUE PAGE
============================================================

Display all standards in a searchable table/grid.

Columns:

Code
Title
Category
Product
Industry
Data Source

Allow:

Search
Category filter
Open details


Admin CRUD is OPTIONAL.

Do not waste core hackathon time implementing complicated admin
authentication or permissions.


============================================================
27. SEARCH HISTORY
============================================================

Store recent searches in SQLite.

Display:

Query
Category
Number of results
Top result
Timestamp


Allow the user to click a previous query and run it again.


============================================================
28. ANALYTICS
============================================================

Show:

Total standards
Total searches
Number of categories
Average recommendation latency


Charts:

Standards by category
Searches by category
Most recommended standards


Use Recharts.


============================================================
29. JUDGE DEMO
============================================================

Create a "Judge Demo" page.

Predefined test scenarios:

1. Electrical cable
2. Safety helmet
3. TMT steel bar
4. Packaged drinking water
5. Solar inverter
6. Textile product
7. Unrelated query
8. Empty query


Button:

"Run Test Suite"


Display:

8 / 8 scenarios passed

Average latency

Each test result

Expected category

Actual top category

Pass/Fail


This page is primarily for demonstration.


============================================================
30. AUTOMATED TESTS
============================================================

Create tests for:

TEST 1:
Exact Product Match

Query:
"PVC insulated electrical cable for domestic wiring"

Expected:
Top result belongs to Electrical category.


TEST 2:
Partial Product Match

Query:
"20 litre drinking water container"

Expected:
Top result belongs to Food/Water category.


TEST 3:
Multi-domain Query

Query:
"concrete reinforcement steel bar"

Expected:
Top result belongs to Construction category.


TEST 4:
Safety / PPE

Query:
"industrial safety helmet with chin strap"

Expected:
Top result belongs to Safety/PPE category.


TEST 5:
Unrelated Query

Query:
"cryptocurrency blockchain interstellar"

Expected:
No results above the threshold.


TEST 6:
Empty Query

Query:
"   "

Expected:
HTTP 400 with INVALID_QUERY.


TEST 7:
Compound Query

Query:
"photovoltaic solar power inverter"

Expected:
Top result belongs to Electrical/Solar category.


IMPORTANT:

Do NOT hardcode exact similarity scores into the tests.

Test ranking/category/empty-result behavior instead.


============================================================
31. PERFORMANCE
============================================================

Measure actual recommendation latency.

Return:

latency_ms

Do NOT claim guaranteed <5 ms performance unless measured.

The UI can display:

"Analysis completed in 38 ms"


============================================================
32. FRONTEND STATES
============================================================

Implement:

Loading state

Empty state

No-results state

Error state

Success state

Network failure state


Example no-results message:

"No sufficiently relevant standards found."

"Try adding more product details, material, application,
or industry information."


============================================================
33. DEMO FLOW
============================================================

The complete 2–3 minute demo should be:

STEP 1:
Open ManakSetu.

STEP 2:
Explain the problem in 15–20 seconds.

STEP 3:
Enter:

"PVC insulated electrical cable for domestic wiring"

STEP 4:
Show ranked recommendations.

STEP 5:
Open the top result.

STEP 6:
Show:

Similarity score
Matched keywords
Why recommended
Catalogue information

STEP 7:
Search:

"industrial safety helmet"

Show a different domain.

STEP 8:
Search:

"cryptocurrency blockchain interstellar"

Show:

"No sufficiently relevant standards found."

STEP 9:
Open Judge Demo.

STEP 10:
Run the automated scenarios.

STEP 11:
Explain:

React
FastAPI
TF-IDF
Cosine Similarity
SQLite


============================================================
34. JUDGE EXPLANATION
============================================================

WHY DOES THIS MATTER?

Users may know what they are manufacturing but may not know
which terminology or standards to search for.

ManakSetu converts natural-language product descriptions into
ranked catalogue recommendations.


WHY TF-IDF?

TF-IDF is:

- lightweight
- deterministic
- fast
- interpretable
- suitable for technical text
- independent of external APIs


WHY COSINE SIMILARITY?

Cosine similarity measures how closely the query vector aligns
with each catalogue document.

This allows the system to rank standards by textual relevance.


WHY FIELD WEIGHTING?

A product name or technical keyword is more informative than a
generic description word.

Therefore:

Product and Keywords receive higher weights.


WHY NOT AN LLM?

The core recommendation engine must work without an external API.

An LLM can be added later for:

- query expansion
- natural-language explanations
- multilingual interaction
- semantic interpretation

But the core recommendation system remains deterministic.


============================================================
35. LIMITATIONS
============================================================

Clearly communicate:

1. Catalogue is a demo/mock dataset.
2. Similarity does not establish legal applicability.
3. TF-IDF primarily captures lexical similarity.
4. Synonyms and semantic relationships may be missed.
5. The prototype does not replace expert compliance review.
6. Real deployment requires verified and maintained standards data.


============================================================
36. FUTURE SCOPE
============================================================

Future versions can add:

- Verified BIS standards catalogue
- Multilingual search
- Semantic embeddings
- Hybrid BM25 + vector retrieval
- Domain-specific synonym dictionaries
- Expert validation
- Standards version tracking
- Standards update notifications
- PDF/document ingestion
- Manufacturer compliance workflows
- Expert feedback loops
- Advanced analytics


Future architecture:

Natural Language Query
        ↓
Query Understanding
        ↓
Hybrid Retrieval
        ↓
TF-IDF + BM25 + Embeddings
        ↓
Verified Standards Database
        ↓
Expert Validation
        ↓
Explainable Recommendation


============================================================
37. TEAM COLLABORATION
============================================================

MEMBER 1 — FRONTEND LEAD

Responsibilities:

React
Pages
Components
API integration
Search UI
Results UI


MEMBER 2 — BACKEND LEAD

Responsibilities:

FastAPI
API routes
Validation
Error handling
CORS


MEMBER 3 — ML ENGINEER

Responsibilities:

TF-IDF
Cosine similarity
Field weighting
Ranking
Thresholding
Explainability


MEMBER 4 — DATABASE / DATA

Responsibilities:

SQLite
SQLAlchemy
Mock dataset
Database seeding


MEMBER 5 — UI/UX

Responsibilities:

Tailwind design
Responsive layout
Charts
Similarity visualization
Visual consistency


MEMBER 6 — QA / PRESENTATION

Responsibilities:

Testing
Judge Demo
Performance measurements
README
Presentation
Demo script


============================================================
38. GIT WORKFLOW
============================================================

Use feature branches:

feature/frontend
feature/backend
feature/ml
feature/database
feature/ui
feature/testing


Keep commits small and descriptive.

Examples:

feat: add recommendation endpoint

feat: add TF-IDF recommendation engine

feat: add mock standards dataset

feat: add search results UI

test: add recommendation edge cases


============================================================
39. THREE-HOUR IMPLEMENTATION PLAN
============================================================

0:00–0:20

Project setup

Create React app
Create FastAPI app
Install dependencies
Create SQLite
Create health endpoint


0:20–0:55

Dataset + ML

Create mock catalogue
Seed SQLite
Implement preprocessing
Implement TF-IDF
Implement cosine similarity
Implement recommendation endpoint


0:55–1:35

Frontend Core

Search page
Search API integration
Loading state
Results
Standard details


1:35–2:00

Integration

Test:

React
↓
FastAPI
↓
Recommendation Engine
↓
SQLite


2:00–2:25

Polish

Filters
Similarity gauge
Matched keywords
Error states
Responsive design


2:25–2:40

Optional features

History
Analytics


2:40–2:50

Judge Demo

Predefined scenarios
Test suite


2:50–3:00

FREEZE

Run tests
Build frontend
Test backend
Run complete demo

DO NOT ADD NEW FEATURES.


============================================================
40. DESIGN REQUIREMENTS
============================================================

The interface should look like a serious technology/compliance platform.

Use:

- Clean typography
- Strong hierarchy
- Professional spacing
- Cards
- Subtle borders
- Clear badges
- Data visualization
- Responsive layout
- Dark/light contrast where appropriate
- Minimal animations

Avoid:

- Excessive gradients
- Excessive glassmorphism
- Huge animations
- Gaming-style UI
- Unnecessary 3D effects
- Clutter


============================================================
41. CORE SUCCESS CRITERIA
============================================================

The project is considered successful if:

1. Frontend starts successfully.
2. Backend starts successfully.
3. SQLite database initializes.
4. Mock catalogue loads.
5. User can enter a product query.
6. Query reaches FastAPI.
7. TF-IDF engine processes the query.
8. Cosine similarity ranks standards.
9. Results are returned.
10. Results display correctly.
11. Similarity score is visible.
12. Matching keywords are visible.
13. User can open standard details.
14. Unrelated queries return no strong results.
15. Empty queries are handled safely.
16. Automated tests pass.
17. The complete workflow can be demonstrated in under 3 minutes.


============================================================
42. FINAL ONE-LINE PITCH
============================================================

"ManakSetu turns a simple product description into explainable,
ranked standards recommendations using an intelligent similarity engine."


============================================================
43. DEMO TAGLINE
============================================================

DESCRIBE YOUR PRODUCT.
DISCOVER ITS STANDARDS.


============================================================
44. FINAL DEVELOPMENT INSTRUCTION
============================================================

Build the application as a COMPLETE, RUNNABLE MVP.

Do NOT provide pseudocode when actual implementation is possible.

Create all required files.

Ensure imports are correct.

Ensure frontend and backend APIs match exactly.

Ensure the SQLite database initializes automatically.

Ensure the mock dataset is automatically seeded.

Ensure the recommendation engine works without Gemini/OpenAI.

Ensure CORS is configured for local frontend development.

Ensure all API responses use valid JSON.

Ensure the frontend handles loading, errors and empty results.

Ensure the application can be started with simple commands.

Do not introduce microservices.

Do not introduce authentication unless absolutely necessary.

Do not introduce Docker unless specifically requested.

Do not introduce unnecessary cloud infrastructure.

Do not depend on external APIs for the core recommendation functionality.

Prioritize reliability and demoability over unnecessary features.

The most important workflow is:

PRODUCT DESCRIPTION
        ↓
SEARCH
        ↓
TF-IDF
        ↓
COSINE SIMILARITY
        ↓
RANKING
        ↓
EXPLAINABLE RESULTS

Everything else is secondary.
