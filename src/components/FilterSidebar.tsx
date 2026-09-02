import React from 'react';
import { 
  Filter, 
  RotateCcw
} from 'lucide-react';
import { CATEGORIES_LIST, INDUSTRIES_LIST } from '../data/mockStandardsCatalogue';
import { useI18n } from '../context/I18nContext';

interface FilterSidebarProps {
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
  selectedIndustry: string;
  setSelectedIndustry: (ind: string) => void;
  selectedStatus: string;
  setSelectedStatus: (status: string) => void;
  minScore: number;
  setMinScore: (score: number) => void;
  totalFilteredCount: number;
  categoryCounts: Record<string, number>;
  onReset: () => void;
}

export const FilterSidebar: React.FC<FilterSidebarProps> = ({
  selectedCategory,
  setSelectedCategory,
  selectedIndustry,
  setSelectedIndustry,
  selectedStatus,
  setSelectedStatus,
  minScore,
  setMinScore,
  totalFilteredCount,
  categoryCounts,
  onReset
}) => {
  const { t } = useI18n();

  const isFiltered = 
    selectedCategory !== 'All Categories' || 
    selectedIndustry !== 'All Industries' || 
    selectedStatus !== 'All Statuses' ||
    minScore > 0.05;

  const totalStandardsCount = (Object.values(categoryCounts) as number[]).reduce((a, b) => a + b, 0);
  const categoriesCount = Object.keys(categoryCounts).length;

  return (
    <aside className="bg-white border border-slate-200 p-6 shadow-xs rounded-xs flex flex-col gap-6 sticky top-24">
      {/* Header with Editorial Styling */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-200">
        <div>
          <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
            {t.refineTitle}
          </h3>
          <span className="text-xs font-bold text-slate-900 uppercase tracking-tight">
            Corpus Filtering
          </span>
        </div>

        {isFiltered && (
          <button
            onClick={onReset}
            className="text-[11px] font-bold uppercase tracking-wider text-slate-900 hover:text-amber-700 flex items-center gap-1 cursor-pointer border-b border-dotted border-slate-400"
          >
            <RotateCcw className="w-3 h-3" />
            <span>{t.resetAll}</span>
          </button>
        )}
      </div>

      {/* 1. Category Filter */}
      <div>
        <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-widest mb-2.5">
          {t.filterCategory}
        </label>
        <div className="space-y-1 max-h-52 overflow-y-auto pr-1">
          {CATEGORIES_LIST.map((cat) => {
            const count = categoryCounts[cat] || 0;
            const isSelected = selectedCategory === cat;
            const labelText = cat === 'All Categories' ? t.allCategories : cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`w-full text-left px-2.5 py-1.5 rounded-xs text-xs font-medium flex items-center justify-between transition-colors cursor-pointer ${
                  isSelected
                    ? 'bg-slate-900 text-white font-bold'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                <span className="truncate mr-2">{labelText}</span>
                {cat !== 'All Categories' && (
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-xs font-mono font-semibold ${
                    isSelected ? 'bg-slate-800 text-amber-300' : 'bg-slate-100 text-slate-500'
                  }`}>
                    {count}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Industry Sector Filter */}
      <div className="pt-4 border-t border-slate-100">
        <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-widest mb-2">
          {t.filterIndustry}
        </label>
        <select
          value={selectedIndustry}
          onChange={(e) => setSelectedIndustry(e.target.value)}
          className="w-full bg-slate-50 border border-slate-200 rounded-xs p-2 text-xs font-medium text-slate-900 outline-none focus:border-slate-900 cursor-pointer"
        >
          {INDUSTRIES_LIST.map((ind) => (
            <option key={ind} value={ind}>
              {ind === 'All Industries' ? t.allIndustries : ind}
            </option>
          ))}
        </select>
      </div>

      {/* 3. Compliance Scheme Filter */}
      <div className="pt-4 border-t border-slate-100">
        <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-widest mb-2">
          {t.filterStatus}
        </label>
        <div className="space-y-1.5">
          {[
            { id: 'All Statuses', label: t.allStatuses },
            { id: 'Mandatory ISI Mark', label: t.mandatoryMark },
            { id: 'Compulsory Registration (CRS)', label: t.crsMark },
            { id: 'Voluntary Standard', label: t.voluntaryStandard }
          ].map((st) => {
            const isSelected = selectedStatus === st.id;
            return (
              <label
                key={st.id}
                className={`flex items-center space-x-2 text-xs p-1.5 rounded-xs cursor-pointer transition-colors ${
                  isSelected ? 'bg-slate-100 text-slate-900 font-bold' : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                <input
                  type="radio"
                  name="compliance_status"
                  value={st.id}
                  checked={isSelected}
                  onChange={() => setSelectedStatus(st.id)}
                  className="accent-slate-900 w-3.5 h-3.5 cursor-pointer"
                />
                <span className="truncate">{st.label}</span>
              </label>
            );
          })}
        </div>
      </div>

      {/* 4. Min Relevance Slider */}
      <div className="pt-4 border-t border-slate-100">
        <div className="flex justify-between items-center mb-1.5">
          <label className="text-[11px] font-bold text-slate-700 uppercase tracking-widest">
            {t.minConfidenceLabel}
          </label>
          <span className="font-mono text-xs font-bold text-slate-900 bg-slate-100 px-1.5 py-0.2 rounded-xs">
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
          <span>0%</span>
          <span>{(minScore * 100).toFixed(0)}%</span>
          <span>80%</span>
        </div>
      </div>

      {/* Catalogue Quick Stats Box */}
      <div className="pt-4 border-t border-slate-100">
        <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-3">
          {t.metricCorpus}
        </h3>
        <div className="grid grid-cols-2 gap-2.5">
          <div className="p-3 bg-slate-50 rounded-xs border border-slate-200">
            <span className="block text-xl font-serif font-bold text-slate-900">{totalStandardsCount || 45}</span>
            <span className="text-[9px] uppercase font-bold text-slate-500 tracking-wider">{t.metricCorpus}</span>
          </div>
          <div className="p-3 bg-slate-50 rounded-xs border border-slate-200">
            <span className="block text-xl font-serif font-bold text-slate-900">{categoriesCount || 8}</span>
            <span className="text-[9px] uppercase font-bold text-slate-500 tracking-wider">{t.metricCategories}</span>
          </div>
        </div>
      </div>

      {/* MVP Disclaimer Box */}
      <div className="mt-auto p-3.5 bg-amber-50 rounded-xs border border-amber-200">
        <h4 className="text-xs font-bold text-amber-950 mb-1 font-serif italic">
          SIH26108 Compliance Engine
        </h4>
        <p className="text-[10px] leading-relaxed text-amber-900/90 uppercase tracking-tight font-medium">
          Multilingual cross-lingual sublinear TF-IDF + Cosine matching across 8 Indian languages.
        </p>
      </div>
    </aside>
  );
};
