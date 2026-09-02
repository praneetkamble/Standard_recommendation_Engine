"""
Automated Test Suite for Standards Recommendation Engine
SIH26108 / Problem Statement #42
"""

from services.recommendation_engine import PythonTfidfEngine
import json
import os

SAMPLE_DATA = [
    {
        "id": "is-694",
        "standard_code": "IS 694:2010",
        "title": "PVC Insulated Cables for Working Voltages up to and including 1100 V",
        "category": "Electrical Products",
        "product": "Electrical cable, domestic wiring cables, flexible cords, PVC insulated copper wire",
        "description": "Specifies requirements and test methods for PVC insulated electric cables and cords for fixed wiring.",
        "keywords": ["cable", "wire", "copper", "pvc", "domestic", "flexible", "wiring"],
        "industry": "Power & Electrical",
        "status": "Mandatory ISI Mark"
    },
    {
        "id": "is-14543",
        "standard_code": "IS 14543:2018",
        "title": "Packaged Drinking Water (Other than Natural Mineral Water)",
        "category": "Food & Packaging",
        "product": "Packaged drinking water, purified bottled water, mineral water bottle, 20L water jar",
        "description": "Prescribes quality and microbiological requirements for packaged drinking water.",
        "keywords": ["water", "packaged drinking water", "bottled water", "ro water", "purified"],
        "industry": "Food Processing & Beverages",
        "status": "Mandatory ISI Mark"
    },
    {
        "id": "is-2925",
        "standard_code": "IS 2925:1984",
        "title": "Industrial Safety Helmets - Specification",
        "category": "Safety Equipment",
        "product": "Safety helmet, hard hat, industrial head protection, construction helmet",
        "description": "Specifies physical and performance requirements for safety helmets against falling objects.",
        "keywords": ["helmet", "safety helmet", "hard hat", "head protection", "construction helmet"],
        "industry": "Occupational Safety & Health",
        "status": "Mandatory ISI Mark"
    }
]

def test_exact_match():
    engine = PythonTfidfEngine(SAMPLE_DATA)
    res = engine.recommend("domestic electrical cable wiring")
    assert res["total_matches"] > 0
    top = res["results"][0]
    assert top["standard"]["standard_code"] == "IS 694:2010"
    print("✅ Test 1 Passed: Exact Match")

def test_partial_match():
    engine = PythonTfidfEngine(SAMPLE_DATA)
    res = engine.recommend("bottled drinking water")
    assert res["total_matches"] > 0
    top = res["results"][0]
    assert top["standard"]["standard_code"] == "IS 14543:2018"
    print("✅ Test 2 Passed: Partial Match")

def test_unrelated_query():
    engine = PythonTfidfEngine(SAMPLE_DATA)
    res = engine.recommend("quantum supercomputer blockchain crypto")
    assert res["total_matches"] == 0
    print("✅ Test 3 Passed: Unrelated Query Handled Correctly")

def test_empty_query():
    engine = PythonTfidfEngine(SAMPLE_DATA)
    res = engine.recommend("   ")
    assert res["total_matches"] == 0
    print("✅ Test 4 Passed: Empty Query Handled Correctly")

if __name__ == "__main__":
    print("Running Python Unit Tests for Standards Recommendation Engine...")
    test_exact_match()
    test_partial_match()
    test_unrelated_query()
    test_empty_query()
    print("🎉 All test assertions passed successfully!")
