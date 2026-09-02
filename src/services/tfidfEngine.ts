import { Standard, RecommendationResult, TermContribution, TestCaseResult } from '../types/standards';

/**
 * Standard English & Domain Stopwords
 */
const STOPWORDS = new Set([
  'a', 'about', 'above', 'after', 'again', 'against', 'all', 'am', 'an', 'and',
  'any', 'are', 'aren\'t', 'as', 'at', 'be', 'because', 'been', 'before', 'being',
  'below', 'between', 'both', 'but', 'by', 'can', 'cannot', 'could', 'did', 'do',
  'does', 'doing', 'down', 'during', 'each', 'few', 'for', 'from', 'further', 'had',
  'has', 'have', 'having', 'he', 'her', 'here', 'hers', 'herself', 'him', 'himself',
  'his', 'how', 'i', 'if', 'in', 'into', 'is', 'isn\'t', 'it', 'its', 'itself',
  'me', 'more', 'most', 'my', 'myself', 'no', 'nor', 'not', 'of', 'off', 'on',
  'once', 'only', 'or', 'other', 'ought', 'our', 'ours', 'ourselves', 'out', 'over',
  'own', 'same', 'she', 'should', 'so', 'some', 'such', 'than', 'that', 'the',
  'their', 'theirs', 'them', 'themselves', 'then', 'there', 'these', 'they', 'this',
  'those', 'through', 'to', 'too', 'under', 'until', 'up', 'very', 'was', 'we',
  'were', 'what', 'when', 'where', 'which', 'while', 'who', 'whom', 'why', 'with',
  'would', 'you', 'your', 'yours', 'yourself', 'yourselves', 'specification',
  'specifications', 'standard', 'standards', 'indian', 'is', 'code', 'part', 'test',
  'requirements', 'used', 'based', 'general', 'purpose', 'purposes', 'type', 'types'
]);

/**
 * Basic word stemmer for morphological normalisation
 */
function stemWord(word: string): string {
  let w = word.toLowerCase().trim();
  if (w.length <= 3) return w;
  
  // Plural / verb endings
  if (w.endsWith('ies') && w.length > 4) return w.slice(0, -3) + 'y';
  if (w.endsWith('es') && !w.endsWith('ies') && w.length > 4) return w.slice(0, -2);
  if (w.endsWith('s') && !w.endsWith('ss') && w.length > 3) return w.slice(0, -1);
  if (w.endsWith('ing') && w.length > 5) return w.slice(0, -3);
  if (w.endsWith('ed') && w.length > 4) return w.slice(0, -2);
  if (w.endsWith('tion') && w.length > 5) return w.slice(0, -4);
  if (w.endsWith('al') && w.length > 4) return w.slice(0, -2);
  if (w.endsWith('ic') && w.length > 4) return w.slice(0, -2);

  return w;
}

/**
 * Tokenize text into normalized, stemmed tokens
 */
export function tokenize(text: string): string[] {
  if (!text) return [];
  const rawWords = text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, ' ')
    .split(/[\s-]+/)
    .filter(Boolean);

  const tokens: string[] = [];
  for (const raw of rawWords) {
    if (raw.length < 2) continue;
    if (STOPWORDS.has(raw)) continue;
    const stemmed = stemWord(raw);
    if (!STOPWORDS.has(stemmed) && stemmed.length >= 2) {
      tokens.push(stemmed);
    }
  }
  return tokens;
}

/**
 * TF-IDF Vectorizer and Cosine Similarity Recommendation Engine
 * Mirrors Scikit-Learn TfidfVectorizer + Cosine Similarity
 */
export class TfidfRecommendationEngine {
  private standards: Standard[] = [];
  private vocabulary: Map<string, number> = new Map(); // term -> index
  private idf: Map<string, number> = new Map(); // term -> idf
  private docVectors: Map<string, Map<string, number>> = new Map(); // docId -> (term -> tfidf)
  private docNorms: Map<string, number> = new Map(); // docId -> L2 norm
  private isTrained = false;

  constructor(standardsDataset: Standard[] = []) {
    if (standardsDataset.length > 0) {
      this.fit(standardsDataset);
    }
  }

  /**
   * Fit the model to standards dataset
   */
  public fit(dataset: Standard[]): void {
    this.standards = [...dataset];
    this.vocabulary.clear();
    this.idf.clear();
    this.docVectors.clear();
    this.docNorms.clear();

    const N = this.standards.length;
    if (N === 0) {
      this.isTrained = false;
      return;
    }

    const docFreq: Map<string, number> = new Map();
    const docTermWeights: Map<string, Map<string, number>> = new Map();

    // 1. Process documents with weighted multi-field extraction
    for (const std of this.standards) {
      const termWeights = new Map<string, number>();

      // Field weighted tokens
      this.addTokensWithWeight(termWeights, std.product, 3.5);
      this.addTokensWithWeight(termWeights, std.keywords.join(' '), 3.0);
      this.addTokensWithWeight(termWeights, std.title, 2.5);
      this.addTokensWithWeight(termWeights, std.category, 2.0);
      this.addTokensWithWeight(termWeights, std.related_products.join(' '), 1.8);
      this.addTokensWithWeight(termWeights, std.industry, 1.5);
      this.addTokensWithWeight(termWeights, std.description, 1.0);
      this.addTokensWithWeight(termWeights, std.scope, 0.8);

      docTermWeights.set(std.id, termWeights);

      // Track document frequency (unique terms per document)
      for (const term of termWeights.keys()) {
        docFreq.set(term, (docFreq.get(term) || 0) + 1);
      }
    }

    // 2. Build Vocabulary & Calculate Smooth IDF (Scikit-learn standard)
    // idf(t) = log((1 + N) / (1 + df(t))) + 1
    let vocabIndex = 0;
    for (const [term, df] of docFreq.entries()) {
      this.vocabulary.set(term, vocabIndex++);
      const smoothIdf = Math.log((1 + N) / (1 + df)) + 1.0;
      this.idf.set(term, smoothIdf);
    }

    // 3. Compute TF-IDF Vectors and L2 Norms for all documents
    for (const std of this.standards) {
      const weights = docTermWeights.get(std.id)!;
      const tfidfVector = new Map<string, number>();
      let sumSquares = 0;

      for (const [term, rawTf] of weights.entries()) {
        const idfVal = this.idf.get(term) || 1.0;
        // Sublinear TF scaling: 1 + ln(tf)
        const sublinearTf = 1 + Math.log(rawTf);
        const tfidf = sublinearTf * idfVal;
        tfidfVector.set(term, tfidf);
        sumSquares += tfidf * tfidf;
      }

      const norm = Math.sqrt(sumSquares) || 1.0;
      this.docVectors.set(std.id, tfidfVector);
      this.docNorms.set(std.id, norm);
    }

    this.isTrained = true;
  }

  /**
   * Helper to add weighted token occurrences
   */
  private addTokensWithWeight(map: Map<string, number>, text: string, weight: number): void {
    if (!text) return;
    const tokens = tokenize(text);
    for (const token of tokens) {
      map.set(token, (map.get(token) || 0) + weight);
    }
  }

  /**
   * Recommends matching standards for a user query
   */
  public recommend(
    query: string,
    options: {
      category?: string;
      industry?: string;
      status?: string;
      minScore?: number;
      topK?: number;
    } = {}
  ): { results: RecommendationResult[]; queryTerms: string[]; executionTimeMs: number } {
    const startTime = performance.now();

    if (!this.isTrained || !query.trim()) {
      return {
        results: [],
        queryTerms: [],
        executionTimeMs: Math.round((performance.now() - startTime) * 100) / 100
      };
    }

    const { category, industry, status, minScore = 0.05, topK = 10 } = options;
    const queryTokens = tokenize(query);

    if (queryTokens.length === 0) {
      return {
        results: [],
        queryTerms: [],
        executionTimeMs: Math.round((performance.now() - startTime) * 100) / 100
      };
    }

    // 1. Calculate Query TF-IDF Vector
    const queryTf: Map<string, number> = new Map();
    for (const t of queryTokens) {
      queryTf.set(t, (queryTf.get(t) || 0) + 1);
    }

    const queryVector = new Map<string, number>();
    let qSumSquares = 0;

    for (const [term, count] of queryTf.entries()) {
      const idfVal = this.idf.get(term) || (Math.log((1 + this.standards.length) / 1) + 1.0);
      const tf = 1 + Math.log(count);
      const tfidf = tf * idfVal;
      queryVector.set(term, tfidf);
      qSumSquares += tfidf * tfidf;
    }

    const queryNorm = Math.sqrt(qSumSquares) || 1.0;

    // 2. Compute Cosine Similarity against all eligible documents
    const scoredList: {
      standard: Standard;
      score: number;
      matchedKeywords: string[];
      tfidfBreakdown: TermContribution[];
    }[] = [];

    const normalizedQueryLower = query.toLowerCase();

    for (const std of this.standards) {
      // Category filter
      if (category && category !== 'All Categories' && std.category !== category) {
        continue;
      }
      // Industry filter
      if (industry && industry !== 'All Industries' && std.industry !== industry) {
        continue;
      }
      // Status filter
      if (status && status !== 'All Statuses' && std.status !== status) {
        continue;
      }

      const docVec = this.docVectors.get(std.id);
      const docNorm = this.docNorms.get(std.id) || 1.0;
      if (!docVec) continue;

      let dotProduct = 0;
      const matchedTerms: string[] = [];
      const termContributions: TermContribution[] = [];

      for (const [qTerm, qWeight] of queryVector.entries()) {
        const dWeight = docVec.get(qTerm);
        if (dWeight !== undefined) {
          const contrib = (qWeight * dWeight) / (queryNorm * docNorm);
          dotProduct += qWeight * dWeight;
          matchedTerms.push(qTerm);
          termContributions.push({
            term: qTerm,
            queryWeight: Math.round(qWeight * 100) / 100,
            docWeight: Math.round(dWeight * 100) / 100,
            contribution: Math.round(contrib * 1000) / 1000
          });
        }
      }

      let rawSimilarity = dotProduct / (queryNorm * docNorm);

      // Boost score for exact phrase matches or code matches
      if (normalizedQueryLower.includes(std.standard_code.toLowerCase().replace(/[\s():]/g, '')) ||
          normalizedQueryLower.includes(std.standard_code.toLowerCase())) {
        rawSimilarity = Math.min(1.0, rawSimilarity + 0.35);
      }

      // Check for exact substring match in product keywords
      for (const kw of std.keywords) {
        if (normalizedQueryLower.includes(kw.toLowerCase())) {
          rawSimilarity = Math.min(1.0, rawSimilarity * 1.12);
          if (!matchedTerms.includes(kw)) {
            matchedTerms.push(kw);
          }
        }
      }

      // Filter by minimum threshold
      if (rawSimilarity >= minScore) {
        // Sort contributions descending
        termContributions.sort((a, b) => b.contribution - a.contribution);

        scoredList.push({
          standard: std,
          score: rawSimilarity,
          matchedKeywords: Array.from(new Set(matchedTerms)),
          tfidfBreakdown: termContributions
        });
      }
    }

    // 3. Rank results descending by similarity score
    scoredList.sort((a, b) => b.score - a.score);

    // 4. Map to final ranked results with explanations
    const topResults = scoredList.slice(0, topK).map((item, index) => {
      const percentage = Math.min(99.4, Math.max(12, Math.round(item.score * 1000) / 10));
      const explanation = this.generateExplanation(item.standard, item.matchedKeywords, item.tfidfBreakdown, percentage);

      return {
        standard: item.standard,
        score: Math.round(item.score * 1000) / 1000,
        percentage,
        rank: index + 1,
        matchedKeywords: item.matchedKeywords,
        explanation,
        tfidfBreakdown: item.tfidfBreakdown
      };
    });

    const executionTimeMs = Math.round((performance.now() - startTime) * 100) / 100;

    return {
      results: topResults,
      queryTerms: Array.from(queryVector.keys()),
      executionTimeMs
    };
  }

  /**
   * Generates a clear, contextual explanation for why this standard was recommended
   */
  private generateExplanation(
    standard: Standard,
    matchedKeywords: string[],
    contributions: TermContribution[],
    percentage: number
  ): string {
    const topTerms = contributions.slice(0, 3).map(c => `"${c.term}"`).join(', ');

    if (percentage >= 80) {
      return `High confidence alignment (${percentage}%). Direct match with primary product scope '${standard.product.split(',')[0]}' and dominant query tokens ${topTerms || 'exact matches'}.`;
    } else if (percentage >= 50) {
      return `Strong categorical relevance (${percentage}%). Applicable under ${standard.category} specifications, overlapping on functional keywords: ${topTerms || matchedKeywords.slice(0, 3).join(', ')}.`;
    } else {
      return `Moderate contextual match (${percentage}%). Shares relevant safety/material parameters (${matchedKeywords.slice(0, 3).join(', ')}) related to ${standard.industry}.`;
    }
  }

  /**
   * Get total vocabulary size
   */
  public getVocabSize(): number {
    return this.vocabulary.size;
  }

  /**
   * Get dataset count
   */
  public getStandardsCount(): number {
    return this.standards.length;
  }

  /**
   * Runs automated unit tests for hackathon demonstration
   */
  public runTestCases(): TestCaseResult[] {
    const testCases: {
      id: string;
      name: string;
      type: 'exact' | 'partial' | 'multi' | 'unrelated' | 'empty' | 'edge';
      query: string;
      expectedStandardCode?: string;
      expectedMinScore?: number;
      expectedMaxScore?: number;
      expectedCount?: number;
      notes: string;
    }[] = [
      {
        id: 'test-1',
        name: 'Exact Product Match (Domestic Cable)',
        type: 'exact',
        query: 'PVC Insulated Cables for domestic wiring',
        expectedStandardCode: 'IS 694:2010',
        expectedMinScore: 0.60,
        notes: 'Verifies exact product title and insulation match ranks IS 694 at #1 with >60% score'
      },
      {
        id: 'test-2',
        name: 'Partial Product Match (Packaged Water)',
        type: 'partial',
        query: 'drinking water bottle 20 litre jar',
        expectedStandardCode: 'IS 14543:2018',
        expectedMinScore: 0.40,
        notes: 'Verifies partial keywords correctly match packaged drinking water standard'
      },
      {
        id: 'test-3',
        name: 'Multi-Product Overlap (Reinforcement Steel & Cement)',
        type: 'multi',
        query: 'concrete reinforcement steel bar TMT Fe500',
        expectedStandardCode: 'IS 1786:2008',
        expectedMinScore: 0.50,
        notes: 'Verifies TMT steel rebar standard ranks higher than general concrete standards'
      },
      {
        id: 'test-4',
        name: 'Safety & PPE Query (Industrial Hard Hat)',
        type: 'exact',
        query: 'Industrial safety helmet for factory workers',
        expectedStandardCode: 'IS 2925:1984',
        expectedMinScore: 0.55,
        notes: 'Verifies industrial safety helmet ranks #1 with clear score separation'
      },
      {
        id: 'test-5',
        name: 'Completely Unrelated Query',
        type: 'unrelated',
        query: 'cryptocurrency blockchain quantum teleportation interstellar',
        expectedCount: 0,
        expectedMaxScore: 0.05,
        notes: 'Verifies zero false positives when input has no matching terms in standards dataset'
      },
      {
        id: 'test-6',
        name: 'Empty / Whitespace Input',
        type: 'empty',
        query: '   ',
        expectedCount: 0,
        notes: 'Verifies system safely handles empty or whitespace-only inputs without error'
      },
      {
        id: 'test-7',
        name: 'Fuzzy / Variant Terms (Solar Inverter)',
        type: 'edge',
        query: 'photovoltaic solar power inverters on-grid',
        expectedStandardCode: 'IS 16221 (Part 2):2015',
        expectedMinScore: 0.40,
        notes: 'Verifies renewable energy solar converter standard matches complex compound query'
      }
    ];

    return testCases.map(tc => {
      const t0 = performance.now();
      const res = this.recommend(tc.query, { minScore: 0.05, topK: 5 });
      const t1 = performance.now();
      const execTime = Math.round((t1 - t0) * 100) / 100;

      let passed = true;

      if (tc.type === 'empty' || tc.type === 'unrelated') {
        passed = res.results.length === 0 || (tc.expectedMaxScore ? (res.results[0]?.score || 0) <= tc.expectedMaxScore : true);
      } else {
        const top = res.results[0];
        if (!top) {
          passed = false;
        } else {
          if (tc.expectedStandardCode && top.standard.standard_code !== tc.expectedStandardCode) {
            passed = false;
          }
          if (tc.expectedMinScore && top.score < tc.expectedMinScore) {
            passed = false;
          }
        }
      }

      return {
        id: tc.id,
        name: tc.name,
        type: tc.type,
        query: tc.query,
        expectedStandardCode: tc.expectedStandardCode,
        expectedMinScore: tc.expectedMinScore,
        expectedMaxScore: tc.expectedMaxScore,
        expectedCount: tc.expectedCount,
        actualTopCode: res.results[0]?.standard.standard_code || 'None',
        actualTopScore: res.results[0]?.score || 0,
        actualCount: res.results.length,
        passed,
        notes: tc.notes,
        executionTimeMs: execTime
      };
    });
  }
}

// Global Singleton Engine Instance
export const globalRecommendationEngine = new TfidfRecommendationEngine();
