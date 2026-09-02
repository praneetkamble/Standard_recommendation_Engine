import sqlite3
import json
import os
from datetime import datetime
from typing import List, Optional, Dict, Any

DB_PATH = os.path.join(os.path.dirname(__file__), "standards.db")

def get_db_connection():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn

def init_db():
    conn = get_db_connection()
    cursor = conn.cursor()

    # Standards Table
    cursor.execute("""
    CREATE TABLE IF NOT EXISTS standards (
        id TEXT PRIMARY KEY,
        standard_code TEXT NOT NULL,
        title TEXT NOT NULL,
        category TEXT NOT NULL,
        product TEXT NOT NULL,
        description TEXT NOT NULL,
        keywords TEXT NOT NULL,
        industry TEXT NOT NULL,
        status TEXT NOT NULL,
        related_products TEXT NOT NULL,
        publication_year INTEGER,
        scope TEXT,
        test_parameters TEXT,
        harmonized_standard TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
    """)

    # Search History Table
    cursor.execute("""
    CREATE TABLE IF NOT EXISTS search_history (
        id TEXT PRIMARY KEY,
        query TEXT NOT NULL,
        timestamp TEXT NOT NULL,
        results_count INTEGER DEFAULT 0,
        top_standard_code TEXT,
        top_standard_title TEXT,
        top_score REAL DEFAULT 0.0,
        category_filter TEXT
    );
    """)

    conn.commit()
    conn.close()

def insert_standard(std_dict: Dict[str, Any]):
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("""
    INSERT OR REPLACE INTO standards (
        id, standard_code, title, category, product, description,
        keywords, industry, status, related_products, publication_year,
        scope, test_parameters, harmonized_standard
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    """, (
        std_dict["id"],
        std_dict["standard_code"],
        std_dict["title"],
        std_dict["category"],
        std_dict["product"],
        std_dict["description"],
        json.dumps(std_dict.get("keywords", [])),
        std_dict["industry"],
        std_dict["status"],
        json.dumps(std_dict.get("related_products", [])),
        std_dict.get("publication_year", 2020),
        std_dict.get("scope", ""),
        json.dumps(std_dict.get("test_parameters", [])),
        std_dict.get("harmonized_standard", "")
    ))
    conn.commit()
    conn.close()

def get_all_standards() -> List[Dict[str, Any]]:
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM standards ORDER BY category, standard_code")
    rows = cursor.fetchall()
    conn.close()

    standards = []
    for r in rows:
        d = dict(r)
        d["keywords"] = json.loads(d["keywords"]) if d.get("keywords") else []
        d["related_products"] = json.loads(d["related_products"]) if d.get("related_products") else []
        d["test_parameters"] = json.loads(d["test_parameters"]) if d.get("test_parameters") else []
        standards.append(d)
    return standards

def get_standard_by_id(std_id: str) -> Optional[Dict[str, Any]]:
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM standards WHERE id = ?", (std_id,))
    row = cursor.fetchone()
    conn.close()
    if not row:
        return None
    d = dict(row)
    d["keywords"] = json.loads(d["keywords"]) if d.get("keywords") else []
    d["related_products"] = json.loads(d["related_products"]) if d.get("related_products") else []
    d["test_parameters"] = json.loads(d["test_parameters"]) if d.get("test_parameters") else []
    return d

def log_search(query: str, results_count: int, top_code: str = None, top_title: str = None, top_score: float = 0.0, category: str = None):
    import uuid
    conn = get_db_connection()
    cursor = conn.cursor()
    search_id = f"sh_{uuid.uuid4().hex[:8]}"
    now_str = datetime.utcnow().isoformat()
    cursor.execute("""
    INSERT INTO search_history (id, query, timestamp, results_count, top_standard_code, top_standard_title, top_score, category_filter)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    """, (search_id, query, now_str, results_count, top_code, top_title, top_score, category))
    conn.commit()
    conn.close()
    return search_id

def get_search_history(limit: int = 50) -> List[Dict[str, Any]]:
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM search_history ORDER BY timestamp DESC LIMIT ?", (limit,))
    rows = cursor.fetchall()
    conn.close()
    return [dict(r) for r in rows]
