import { RecommendationResult, Standard } from '../types/standards';

const API_BASE_URL = (import.meta.env.VITE_API_URL || '').replace(/\/$/, '');

export const isApiConfigured = Boolean(API_BASE_URL);

interface BackendRecommendationResult {
  standard: Standard;
  score: number;
  percentage: number;
  rank: number;
  matched_keywords: string[];
  explanation: string;
  tfidf_breakdown?: RecommendationResult['tfidfBreakdown'];
}

const apiRequest = async <T>(path: string, init?: RequestInit): Promise<T> => {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...init,
    headers: {
      'Content-Type': 'application/json',
      ...init?.headers
    }
  });

  if (!response.ok) {
    throw new Error(`API request failed: ${response.status}`);
  }

  return response.json() as Promise<T>;
};

const normalizeRecommendation = (result: BackendRecommendationResult): RecommendationResult => ({
  standard: result.standard,
  score: result.score,
  percentage: result.percentage,
  rank: result.rank,
  matchedKeywords: result.matched_keywords || [],
  explanation: result.explanation,
  tfidfBreakdown: result.tfidf_breakdown || []
});

export const StandardsApi = {
  async listStandards(): Promise<Standard[]> {
    return apiRequest<Standard[]>('/api/standards');
  },

  async recommend(query: string, options: {
    category?: string;
    industry?: string;
    status?: string;
    minScore: number;
    topK: number;
  }): Promise<{ results: RecommendationResult[]; executionTimeMs: number }> {
    const response = await apiRequest<{
      results: BackendRecommendationResult[];
      execution_time_ms: number;
    }>('/api/recommend', {
      method: 'POST',
      body: JSON.stringify({
        query,
        category: options.category,
        industry: options.industry,
        status: options.status,
        min_score: options.minScore,
        top_k: options.topK
      })
    });

    return {
      results: response.results.map(normalizeRecommendation),
      executionTimeMs: response.execution_time_ms
    };
  }
};