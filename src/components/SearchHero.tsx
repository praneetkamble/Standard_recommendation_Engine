import React, { useState } from 'react';
import { 
  Search, 
  X, 
  SlidersHorizontal, 
  ArrowRight, 
  Info, 
  Zap,
  Sliders
} from 'lucide-react';
import { SAMPLE_QUERIES } from '../data/mockStandardsCatalogue';

interface SearchHeroProps {
  query: string;
  setQuery: (q: string) => void;
  onSearch: (q: string) => void;
  minScore: number;
  setMinScore: (score: number) => void;
  topK: number;
  setTopK: (k: number) => void;
  isSearching: boolean;
  totalMatches: number;
  executionTimeMs: number;
}

export const SearchHero: React.FC<SearchHeroProps> = ({
  query,
  setQuery,
  onSearch,
  minScore,
  setMinScore,
  topK,
  setTopK,
  isSearching,
  totalMatches,
  executionTimeMs
}) => {
  const [showSettings, setShowSettings] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  const handleSelectSample = (sampleText: string) => {
    setQuery(sampleText);
    onSearch(sampleText);
  };

  return (
    <div className="max-w-4xl w-full mx-auto mb-10 pt-4">
      {/* Editorial Eyebrow / Hackathon Indicator */}
      <div className="flex items-center justify-between gap-2 mb-4 pb-2 border-b border-slate-200">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
            SIH26108 • Sublinear TF-IDF + Cosine Metric
          </span>
        </div>
        {totalMatches > 0 && (
          <span className="text-[11px] font-mono text-slate-500 font-semibold">
            Query Latency: <strong className="text-slate-900">{executionTimeMs}ms</strong> • {totalMatches} Matched
          </span>
        )}
      </div>

      {/* Main Editorial Serif Headline */}
      <h2 className="text-3xl sm:text-5xl font-serif font-light text-slate-900 mb-6 leading-tight italic">
        Identify the standard for <span className="border-b-4 border-amber-400 font-bold not-italic">your product.</span>
      </h2>

      {/* Search Input Box */}
      <form onSubmit={handleSubmit} className="relative">
        <div className="relative flex items-center border-2 border-slate-900 bg-white shadow-[6px_6px_0px_0px_rgba(30,41,59,0.1)] focus-within:shadow-none focus-within:translate-x-0.5 focus-within:translate-y-0.5 transition-all">
          <div className="pl-4 sm:pl-6 pr-2 text-slate-400">
            <Search className="w-5 h-5 text-slate-900" />
          </div>

          <input
            id="input-product-search"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="e.g. Electrical cable for domestic use, Portland cement, packaged drinking water..."
            className="w-full h-16 sm:h-20 pl-2 pr-32 sm:pr-48 text-base sm:text-xl text-slate-900 font-medium placeholder-slate-400 bg-transparent outline-none"
          />

          {query && (
            <button
              type="button"
              onClick={() => { setQuery(''); onSearch(''); }}
              className="p-2 text-slate-400 hover:text-slate-700 transition-colors mr-2 cursor-pointer"
              title="Clear input"
            >
              <X className="w-4 h-4" />
            </button>
          )}

          <div className="absolute right-2 sm:right-3 flex items-center gap-1.5">
            <button
              type="button"
              onClick={() => setShowSettings(!showSettings)}
              className={`p-2.5 sm:px-3 text-xs font-bold uppercase tracking-wider border rounded-xs transition-colors flex items-center gap-1 cursor-pointer ${
                showSettings || minScore > 0.05
                  ? 'bg-amber-100 text-amber-900 border-amber-300'
                  : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
              }`}
              title="Vector Weights & Algorithm Settings"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Settings</span>
            </button>

            <button
              id="btn-recommend-submit"
              type="submit"
              disabled={isSearching}
              className="h-11 sm:h-14 px-4 sm:px-8 bg-slate-900 text-white font-bold uppercase tracking-widest text-xs hover:bg-slate-800 transition-colors flex items-center gap-2 disabled:opacity-50 cursor-pointer shadow-xs"
            >
              {isSearching ? (
                <>
                  <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                  <span className="hidden sm:inline">Matching...</span>
                </>
              ) : (
                <>
                  <span>Analyze Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </>
              )}
            </button>
          </div>
        </div>
      </form>

      {/* Engine Settings (Collapsible) */}
      {showSettings && (
        <div className="mt-4 p-5 bg-white border border-slate-200 shadow-sm animate-in fade-in slide-in-from-top-2">
          <div className="flex items-center justify-between pb-2 mb-4 border-b border-slate-100">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-900">
              Vector Space &amp; Ranking Parameters
            </h4>
            <span className="text-[10px] font-mono text-slate-400">Cosine Thresholding</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <div className="flex justify-between items-center mb-1 text-slate-700">
                <span className="text-xs font-bold uppercase tracking-wider">Min. Cosine Similarity</span>
                <span className="font-mono text-slate-900 font-bold bg-slate-100 px-2 py-0.5 rounded-xs text-xs">
                  {(minScore * 100).toFixed(0)}%
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="0.80"
                step="0.05"
                value={minScore}
                onChange={(e) => setMinScore(parseFloat(e.target.value))}
                className="w-full accent-slate-900 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] font-mono text-slate-400 mt-1">
                <span>0% (Broad)</span>
                <span>{(minScore * 100).toFixed(0)}%</span>
                <span>80% (Strict)</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-1 text-slate-700">
                <span className="text-xs font-bold uppercase tracking-wider">Top-K Recommendations</span>
                <span className="font-mono text-slate-900 font-bold bg-slate-100 px-2 py-0.5 rounded-xs text-xs">
                  {topK} Standards
                </span>
              </div>
              <input
                type="range"
                min="3"
                max="20"
                step="1"
                value={topK}
                onChange={(e) => setTopK(parseInt(e.target.value))}
                className="w-full accent-slate-900 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] font-mono text-slate-400 mt-1">
                <span>3 Items</span>
                <span>{topK}</span>
                <span>20 Items</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Editorial Quick Sample Chips */}
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-4 text-xs">
        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest self-center">
          Quick Samples:
        </span>
        {SAMPLE_QUERIES.slice(0, 6).map((sample, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => handleSelectSample(sample.query)}
            className="text-[11px] font-bold text-slate-600 hover:text-slate-900 border-b border-dotted border-slate-400 hover:border-slate-900 transition-colors pb-0.5 cursor-pointer"
          >
            {sample.label}
          </button>
        ))}
      </div>
    </div>
  );
};
