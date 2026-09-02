import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { SearchHero } from './components/SearchHero';
import { RecommendationCard } from './components/RecommendationCard';
import { FilterSidebar } from './components/FilterSidebar';
import { StandardDetailModal } from './components/StandardDetailModal';
import { SearchHistoryDrawer } from './components/SearchHistoryDrawer';
import { CatalogueAdmin } from './components/CatalogueAdmin';
import { AnalyticsDashboard } from './components/AnalyticsDashboard';
import { JudgeInspector } from './components/JudgeInspector';
import { AiComplianceAssistant } from './components/AiComplianceAssistant';
import { TeamPitch } from './components/TeamPitch';
import { ExportModal } from './components/ExportModal';

import { globalRecommendationEngine } from './services/tfidfEngine';
import { StorageService } from './services/storageService';
import { 
  Standard, 
  RecommendationResult, 
  SearchHistoryItem 
} from './types/standards';

import { 
  ArrowUpDown, 
  Download, 
  SlidersHorizontal, 
  Sparkles, 
  ShieldCheck, 
  AlertCircle,
  HelpCircle,
  Clock,
  Layers,
  Search,
  Filter
} from 'lucide-react';

export function App() {
  // Navigation State
  const [activeTab, setActiveTab] = useState<'search' | 'catalogue' | 'analytics' | 'judge' | 'ai' | 'pitch'>('search');

  // Search & Recommendation State
  const [query, setQuery] = useState('domestic electrical cable');
  const [minScore, setMinScore] = useState(0.05);
  const [topK, setTopK] = useState(10);
  const [sortBy, setSortBy] = useState<'relevance' | 'code' | 'year'>('relevance');

  // Filter States
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedIndustry, setSelectedIndustry] = useState('All Industries');
  const [selectedStatus, setSelectedStatus] = useState('All Statuses');

  // Modals & Drawers
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const [isExportOpen, setIsExportOpen] = useState(false);
  const [detailModalStandard, setDetailModalStandard] = useState<Standard | null>(null);
  const [aiSelectedStandard, setAiSelectedStandard] = useState<Standard | null>(null);

  // Data Store
  const [standards, setStandards] = useState<Standard[]>(() => StorageService.loadStandards());
  const [history, setHistory] = useState<SearchHistoryItem[]>(() => StorageService.loadHistory());
  const [isSearching, setIsSearching] = useState(false);
  const [recommendations, setRecommendations] = useState<RecommendationResult[]>([]);
  const [executionTimeMs, setExecutionTimeMs] = useState(0);

  // Initialize engine with loaded standards
  useEffect(() => {
    globalRecommendationEngine.fit(standards);
  }, [standards]);

  // Execute recommendation
  const handlePerformSearch = useCallback((searchQuery: string) => {
    if (!searchQuery.trim()) {
      setRecommendations([]);
      setExecutionTimeMs(0);
      return;
    }

    setIsSearching(true);
    const startTime = performance.now();

    const output = globalRecommendationEngine.recommend(searchQuery, {
      category: selectedCategory !== 'All Categories' ? selectedCategory : undefined,
      industry: selectedIndustry !== 'All Industries' ? selectedIndustry : undefined,
      status: selectedStatus !== 'All Statuses' ? selectedStatus : undefined,
      minScore: minScore,
      topK: topK
    });

    const elapsed = Math.round(performance.now() - startTime);
    setRecommendations(output.results);
    setExecutionTimeMs(elapsed || 1);
    setIsSearching(false);

    // Save to search history
    if (output.results.length > 0) {
      StorageService.addHistoryEntry(
        searchQuery,
        output.results.length,
        output.results[0].standard.standard_code,
        output.results[0].standard.title,
        output.results[0].score,
        selectedCategory !== 'All Categories' ? selectedCategory : undefined
      );
      setHistory(StorageService.loadHistory());
    }
  }, [selectedCategory, selectedIndustry, selectedStatus, minScore, topK]);

  // Initial search on mount
  useEffect(() => {
    handlePerformSearch(query);
  }, []);

  // Filter & Sort Results
  const filteredAndSortedResults = useMemo(() => {
    let list = [...recommendations];

    // Filter by category
    if (selectedCategory !== 'All Categories') {
      list = list.filter(r => r.standard.category === selectedCategory);
    }

    // Filter by industry
    if (selectedIndustry !== 'All Industries') {
      list = list.filter(r => r.standard.industry === selectedIndustry);
    }

    // Filter by status
    if (selectedStatus !== 'All Statuses') {
      list = list.filter(r => r.standard.status === selectedStatus);
    }

    // Filter by minScore
    if (minScore > 0) {
      list = list.filter(r => r.score >= minScore);
    }

    // Sorting
    if (sortBy === 'code') {
      list.sort((a, b) => a.standard.standard_code.localeCompare(b.standard.standard_code));
    } else if (sortBy === 'year') {
      list.sort((a, b) => b.standard.publication_year - a.standard.publication_year);
    } else {
      list.sort((a, b) => b.score - a.score);
    }

    return list;
  }, [recommendations, selectedCategory, selectedIndustry, selectedStatus, minScore, sortBy]);

  // Category counts for sidebar
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    standards.forEach(s => {
      counts[s.category] = (counts[s.category] || 0) + 1;
    });
    return counts;
  }, [standards]);

  // Handlers for Catalogue Admin
  const handleAddStandard = (newStdData: Omit<Standard, 'id'>) => {
    StorageService.addStandard(newStdData);
    const updated = StorageService.loadStandards();
    setStandards(updated);
    globalRecommendationEngine.fit(updated);
    if (query) handlePerformSearch(query);
  };

  const handleUpdateStandard = (id: string, updatedFields: Partial<Standard>) => {
    StorageService.updateStandard(id, updatedFields);
    const updated = StorageService.loadStandards();
    setStandards(updated);
    globalRecommendationEngine.fit(updated);
    if (query) handlePerformSearch(query);
  };

  const handleDeleteStandard = (id: string) => {
    StorageService.deleteStandard(id);
    const updated = StorageService.loadStandards();
    setStandards(updated);
    globalRecommendationEngine.fit(updated);
    if (query) handlePerformSearch(query);
  };

  const handleResetCatalogue = () => {
    if (confirm('Reset catalogue back to initial 45 mock standards?')) {
      const reset = StorageService.resetCatalogue();
      setStandards(reset);
      globalRecommendationEngine.fit(reset);
      if (query) handlePerformSearch(query);
    }
  };

  const handleClearHistory = () => {
    if (confirm('Clear all search query history?')) {
      StorageService.clearHistory();
      setHistory([]);
    }
  };

  const handleOpenAiAdvisor = (std: Standard) => {
    setAiSelectedStandard(std);
    setActiveTab('ai');
    setDetailModalStandard(null);
  };

  const handleResetFilters = () => {
    setSelectedCategory('All Categories');
    setSelectedIndustry('All Industries');
    setSelectedStatus('All Statuses');
    setMinScore(0.05);
  };

  return (
    <div className="min-h-screen bg-[#fcfcf9] flex flex-col text-slate-900 font-sans">
      {/* Top Navigation Bar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        historyCount={history.length}
        onOpenHistory={() => setIsHistoryOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Tab 1: Recommender Search View */}
        {activeTab === 'search' && (
          <div>
            {/* Search Hero Section */}
            <SearchHero
              query={query}
              setQuery={setQuery}
              onSearch={handlePerformSearch}
              minScore={minScore}
              setMinScore={setMinScore}
              topK={topK}
              setTopK={setTopK}
              isSearching={isSearching}
              totalMatches={filteredAndSortedResults.length}
              executionTimeMs={executionTimeMs}
            />

            {/* Results & Filter Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
              {/* Left Column: Filter Sidebar */}
              <div className="lg:col-span-1">
                <FilterSidebar
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                  selectedIndustry={selectedIndustry}
                  setSelectedIndustry={setSelectedIndustry}
                  selectedStatus={selectedStatus}
                  setSelectedStatus={setSelectedStatus}
                  minScore={minScore}
                  setMinScore={setMinScore}
                  totalFilteredCount={filteredAndSortedResults.length}
                  categoryCounts={categoryCounts}
                  onReset={handleResetFilters}
                />
              </div>

              {/* Right Column: Ranked Recommendations List */}
              <div className="lg:col-span-3 space-y-4">
                {/* Results Header Bar (Editorial Style) */}
                <div className="flex flex-wrap items-end justify-between pb-3 border-b border-slate-200 gap-3">
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-slate-900">
                      Ranked Recommendations ({filteredAndSortedResults.length})
                    </h3>
                    <p className="text-[11px] font-mono text-slate-500 uppercase mt-0.5">
                      Algorithm: Sublinear TF-IDF + Cosine Similarity
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    {/* Sort Selector */}
                    <div className="flex items-center gap-1.5 text-xs text-slate-700 bg-white border border-slate-200 px-2.5 py-1.5 rounded-xs shadow-xs">
                      <ArrowUpDown className="w-3.5 h-3.5 text-slate-400" />
                      <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value as any)}
                        className="bg-transparent font-bold uppercase text-[10px] tracking-wider text-slate-800 outline-none cursor-pointer"
                      >
                        <option value="relevance">Sort: Relevance</option>
                        <option value="code">Sort: Code (A-Z)</option>
                        <option value="year">Sort: Year (Newest)</option>
                      </select>
                    </div>

                    {/* Export Button */}
                    {filteredAndSortedResults.length > 0 && (
                      <button
                        onClick={() => setIsExportOpen(true)}
                        className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 px-3 py-1.5 rounded-xs shadow-xs transition-colors cursor-pointer"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>Export</span>
                      </button>
                    )}
                  </div>
                </div>

                {/* Cards List */}
                {filteredAndSortedResults.length === 0 ? (
                  <div className="bg-white border border-slate-200 p-12 text-center shadow-xs rounded-xs">
                    <AlertCircle className="w-10 h-10 text-amber-500 mx-auto mb-3" />
                    <h3 className="text-lg font-serif font-bold text-slate-900 mb-1">
                      No Standards Met the Similarity Threshold
                    </h3>
                    <p className="text-xs text-slate-500 max-w-md mx-auto mb-4 leading-relaxed">
                      Try lowering the confidence threshold slider or using broader keywords like "cable", "water", "pump", "cement", "mask", or "bulb".
                    </p>
                    <button
                      onClick={handleResetFilters}
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest bg-slate-900 text-white px-5 py-2.5 rounded-xs hover:bg-slate-800 cursor-pointer transition-colors"
                    >
                      Reset All Filters
                    </button>
                  </div>
                ) : (
                  filteredAndSortedResults.map((result) => (
                    <RecommendationCard
                      key={result.standard.id}
                      result={result}
                      onOpenDetails={(std) => setDetailModalStandard(std)}
                      onOpenAi={(std) => handleOpenAiAdvisor(std)}
                    />
                  ))
                )}
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Standards Catalogue & Admin */}
        {activeTab === 'catalogue' && (
          <CatalogueAdmin
            standards={standards}
            onAddStandard={handleAddStandard}
            onUpdateStandard={handleUpdateStandard}
            onDeleteStandard={handleDeleteStandard}
            onResetCatalogue={handleResetCatalogue}
            onViewDetails={(std) => setDetailModalStandard(std)}
          />
        )}

        {/* Tab 3: Recharts Analytics Dashboard */}
        {activeTab === 'analytics' && (
          <AnalyticsDashboard
            standards={standards}
            history={history}
          />
        )}

        {/* Tab 4: Judge & ML Inspector */}
        {activeTab === 'judge' && (
          <JudgeInspector />
        )}

        {/* Tab 5: AI Compliance Advisor */}
        {activeTab === 'ai' && (
          <AiComplianceAssistant
            standards={standards}
            selectedStandard={aiSelectedStandard}
            onSelectStandard={setAiSelectedStandard}
          />
        )}

        {/* Tab 6: Hackathon Team & Presentation Pitch */}
        {activeTab === 'pitch' && (
          <TeamPitch />
        )}
      </main>

      {/* Detail Modal */}
      <StandardDetailModal
        standard={detailModalStandard}
        onClose={() => setDetailModalStandard(null)}
        onOpenAiAdvisor={handleOpenAiAdvisor}
      />

      {/* Search History Drawer */}
      <SearchHistoryDrawer
        isOpen={isHistoryOpen}
        onClose={() => setIsHistoryOpen(false)}
        history={history}
        onSelectQuery={(q) => {
          setQuery(q);
          handlePerformSearch(q);
        }}
        onClearHistory={handleClearHistory}
      />

      {/* Export Modal */}
      <ExportModal
        isOpen={isExportOpen}
        onClose={() => setIsExportOpen(false)}
        query={query}
        results={filteredAndSortedResults}
      />

      {/* Editorial Footer */}
      <footer className="border-t border-slate-200 bg-white py-4 px-4 sm:px-8 text-[10px] font-bold uppercase tracking-widest text-slate-400 mt-12">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-4">
            <span className="text-slate-900 font-bold">Standards Recommend</span>
            <span>Problem Statement #42 (SIH26108)</span>
            <span className="hidden md:inline">• Acharya Hackathon / GVHAX 2026</span>
          </div>
          <div className="flex items-center gap-4 font-mono text-[10px] text-slate-500">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              TF-IDF In-Memory Matrix
            </span>
            <span className="text-slate-300">|</span>
            <span>FastAPI + Scikit + SQLite</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
