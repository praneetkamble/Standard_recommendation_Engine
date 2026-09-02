import { Standard, SearchHistoryItem } from '../types/standards';
import { INITIAL_STANDARDS_DATASET } from '../data/mockStandardsCatalogue';
import { globalRecommendationEngine } from './tfidfEngine';

const STANDARDS_STORAGE_KEY = 'sih_standards_catalogue_v1';
const HISTORY_STORAGE_KEY = 'sih_search_history_v1';

export class StorageService {
  /**
   * Initialize and load standards catalogue
   */
  public static loadStandards(): Standard[] {
    try {
      const stored = localStorage.getItem(STANDARDS_STORAGE_KEY);
      if (stored) {
        const parsed: Standard[] = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          globalRecommendationEngine.fit(parsed);
          return parsed;
        }
      }
    } catch (e) {
      console.warn('Could not read standards from local storage, falling back to initial mock dataset', e);
    }

    // Default to mock dataset
    globalRecommendationEngine.fit(INITIAL_STANDARDS_DATASET);
    this.saveStandards(INITIAL_STANDARDS_DATASET);
    return INITIAL_STANDARDS_DATASET;
  }

  /**
   * Save standards catalogue
   */
  public static saveStandards(standards: Standard[]): void {
    try {
      localStorage.setItem(STANDARDS_STORAGE_KEY, JSON.stringify(standards));
      globalRecommendationEngine.fit(standards);
    } catch (e) {
      console.error('Failed to save standards to storage', e);
    }
  }

  /**
   * Add a new standard to catalogue
   */
  public static addStandard(standard: Omit<Standard, 'id'>): Standard {
    const current = this.loadStandards();
    const newStandard: Standard = {
      ...standard,
      id: `custom-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
      is_custom: true
    };
    const updated = [newStandard, ...current];
    this.saveStandards(updated);
    return newStandard;
  }

  /**
   * Update existing standard
   */
  public static updateStandard(id: string, updates: Partial<Standard>): Standard | null {
    const current = this.loadStandards();
    const index = current.findIndex(s => s.id === id);
    if (index === -1) return null;

    current[index] = { ...current[index], ...updates };
    this.saveStandards(current);
    return current[index];
  }

  /**
   * Delete a standard from catalogue
   */
  public static deleteStandard(id: string): boolean {
    const current = this.loadStandards();
    const filtered = current.filter(s => s.id !== id);
    if (filtered.length === current.length) return false;

    this.saveStandards(filtered);
    return true;
  }

  /**
   * Reset catalogue to initial mock dataset
   */
  public static resetCatalogue(): Standard[] {
    this.saveStandards(INITIAL_STANDARDS_DATASET);
    return INITIAL_STANDARDS_DATASET;
  }

  /**
   * Load search history
   */
  public static loadHistory(): SearchHistoryItem[] {
    try {
      const stored = localStorage.getItem(HISTORY_STORAGE_KEY);
      if (stored) {
        const parsed: SearchHistoryItem[] = JSON.parse(stored);
        if (Array.isArray(parsed)) return parsed;
      }
    } catch (e) {
      console.warn('Failed to load search history', e);
    }

    // Default sample history for demonstration
    const sampleHistory: SearchHistoryItem[] = [
      {
        id: 'hist-1',
        query: 'Electrical cable for domestic house wiring',
        timestamp: new Date(Date.now() - 1000 * 60 * 12).toISOString(),
        resultsCount: 6,
        topStandardCode: 'IS 694:2010',
        topStandardTitle: 'PVC Insulated Cables for Working Voltages up to 1100V',
        topScore: 0.94,
        categoryFilter: 'Electrical Products'
      },
      {
        id: 'hist-2',
        query: 'Packaged drinking water 20L bottle',
        timestamp: new Date(Date.now() - 1000 * 60 * 45).toISOString(),
        resultsCount: 4,
        topStandardCode: 'IS 14543:2018',
        topStandardTitle: 'Packaged Drinking Water',
        topScore: 0.91,
        categoryFilter: 'Food & Packaging'
      },
      {
        id: 'hist-3',
        query: 'Industrial safety helmet with chin strap',
        timestamp: new Date(Date.now() - 1000 * 60 * 120).toISOString(),
        resultsCount: 5,
        topStandardCode: 'IS 2925:1984',
        topStandardTitle: 'Industrial Safety Helmets',
        topScore: 0.88,
        categoryFilter: 'Safety Equipment'
      }
    ];

    this.saveHistory(sampleHistory);
    return sampleHistory;
  }

  /**
   * Save history
   */
  public static saveHistory(history: SearchHistoryItem[]): void {
    try {
      localStorage.setItem(HISTORY_STORAGE_KEY, JSON.stringify(history.slice(0, 50)));
    } catch (e) {
      console.error('Failed to save search history', e);
    }
  }

  /**
   * Add query to search history
   */
  public static addHistoryEntry(
    query: string,
    resultsCount: number,
    topStandardCode = 'None',
    topStandardTitle = 'No match found',
    topScore = 0,
    categoryFilter?: string
  ): SearchHistoryItem {
    const history = this.loadHistory();
    const newEntry: SearchHistoryItem = {
      id: `hist-${Date.now()}`,
      query,
      timestamp: new Date().toISOString(),
      resultsCount,
      topStandardCode,
      topStandardTitle,
      topScore,
      categoryFilter
    };

    const updated = [newEntry, ...history.filter(h => h.query.toLowerCase() !== query.toLowerCase())];
    this.saveHistory(updated);
    return newEntry;
  }

  /**
   * Clear search history
   */
  public static clearHistory(): void {
    try {
      localStorage.removeItem(HISTORY_STORAGE_KEY);
    } catch (e) {
      console.error('Failed to clear search history', e);
    }
  }

  /**
   * Export recommendations as CSV string
   */
  public static exportToCsv(results: any[], query: string): string {
    const headers = ['Rank', 'Standard Code', 'Standard Title', 'Category', 'Relevance Score', 'Match %', 'Compliance Status', 'Applicable Product', 'Industry', 'Explanation'];
    const rows = results.map(r => [
      r.rank,
      `"${r.standard.standard_code}"`,
      `"${r.standard.title.replace(/"/g, '""')}"`,
      `"${r.standard.category}"`,
      r.score,
      `${r.percentage}%`,
      `"${r.standard.status}"`,
      `"${r.standard.product.replace(/"/g, '""')}"`,
      `"${r.standard.industry}"`,
      `"${r.explanation.replace(/"/g, '""')}"`
    ]);

    const csvContent = [
      `# Standards Recommendation Engine - Report for Query: "${query}"`,
      `# Generated: ${new Date().toLocaleString()}`,
      headers.join(','),
      ...rows.map(r => r.join(','))
    ].join('\n');

    return csvContent;
  }
}
