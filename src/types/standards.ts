export type ComplianceStatus = 
  | 'Mandatory ISI Mark' 
  | 'Voluntary Standard' 
  | 'Compulsory Registration (CRS)' 
  | 'Under Revision';

export interface Standard {
  id: string;
  standard_code: string;
  title: string;
  category: string;
  product: string;
  description: string;
  keywords: string[];
  industry: string;
  status: ComplianceStatus;
  related_products: string[];
  publication_year: number;
  scope: string;
  test_parameters: string[];
  harmonized_standard?: string;
  is_custom?: boolean;
}

export interface TermContribution {
  term: string;
  queryWeight: number;
  docWeight: number;
  contribution: number;
}

export interface RecommendationResult {
  standard: Standard;
  score: number;
  percentage: number;
  rank: number;
  matchedKeywords: string[];
  explanation: string;
  tfidfBreakdown: TermContribution[];
}

export interface SearchHistoryItem {
  id: string;
  query: string;
  timestamp: string;
  resultsCount: number;
  topStandardCode: string;
  topStandardTitle: string;
  topScore: number;
  categoryFilter?: string;
}

export interface FilterState {
  category: string;
  industry: string;
  status: string;
  minScore: number;
  searchFilter: string;
}

export interface RecommendationRequest {
  query: string;
  category?: string;
  industry?: string;
  min_score?: number;
  top_k?: number;
}

export interface RecommendationResponse {
  query: string;
  total_matches: number;
  execution_time_ms: number;
  results: RecommendationResult[];
}

export interface TestCaseResult {
  id: string;
  name: string;
  type: 'exact' | 'partial' | 'multi' | 'unrelated' | 'empty' | 'edge';
  query: string;
  expectedStandardCode?: string;
  expectedMinScore?: number;
  expectedMaxScore?: number;
  expectedCount?: number;
  actualTopCode?: string;
  actualTopScore?: number;
  actualCount?: number;
  passed: boolean;
  notes: string;
  executionTimeMs: number;
}
