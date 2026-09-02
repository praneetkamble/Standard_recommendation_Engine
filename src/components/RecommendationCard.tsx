import React, { useState } from 'react';
import { 
  RecommendationResult, 
  Standard 
} from '../types/standards';
import { 
  CheckCircle2, 
  ChevronRight, 
  Sparkles, 
  Copy, 
  Check, 
  Layers,
  ArrowUpRight
} from 'lucide-react';

interface RecommendationCardProps {
  result: RecommendationResult;
  onOpenDetails: (standard: Standard) => void;
  onOpenAi: (standard: Standard) => void;
}

export const RecommendationCard: React.FC<RecommendationCardProps> = ({
  result,
  onOpenDetails,
  onOpenAi
}) => {
  const [copied, setCopied] = useState(false);
  const [showMath, setShowMath] = useState(false);
  const { standard, score, percentage, rank, matchedKeywords, explanation, tfidfBreakdown } = result;

  const handleCopyCode = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(standard.standard_code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getRankBadge = () => {
    if (rank === 1) {
      return (
        <span className="inline-block px-2.5 py-0.5 bg-emerald-50 text-emerald-800 text-[10px] font-bold border border-emerald-200 rounded-xs uppercase tracking-wider">
          ★ Top Match • Rank #1
        </span>
      );
    }
    if (percentage >= 50) {
      return (
        <span className="inline-block px-2.5 py-0.5 bg-slate-100 text-slate-700 text-[10px] font-bold border border-slate-200 rounded-xs uppercase tracking-wider">
          Rank #{rank} • High Similarity
        </span>
      );
    }
    return (
      <span className="inline-block px-2.5 py-0.5 bg-slate-50 text-slate-500 text-[10px] font-bold border border-slate-200 rounded-xs uppercase tracking-wider">
        Rank #{rank} • Partial Match
      </span>
    );
  };

  const getStatusDisplay = (status: string) => {
    if (status === 'Mandatory ISI Mark') {
      return (
        <span className="text-xs font-semibold text-red-700 uppercase flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>
          Mandatory ISI Mark
        </span>
      );
    }
    if (status === 'Compulsory Registration (CRS)') {
      return (
        <span className="text-xs font-semibold text-amber-700 uppercase flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-600"></span>
          CRS Scheme
        </span>
      );
    }
    return (
      <span className="text-xs font-semibold text-slate-600 uppercase flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
        Voluntary Standard
      </span>
    );
  };

  return (
    <div 
      id={`card-standard-${standard.id}`}
      className={`group relative bg-white border border-slate-200 p-6 shadow-xs hover:border-slate-900 transition-all rounded-xs ${
        rank === 1 ? 'border-slate-300' : ''
      }`}
    >
      {/* Left indicator bar for Top Match */}
      {rank === 1 && (
        <div className="absolute -left-1 top-6 bottom-6 w-1 bg-emerald-500 rounded-r-xs"></div>
      )}

      {/* Header Row: Standard Code + Relevance Score */}
      <div className="flex justify-between items-start mb-3 gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            {getRankBadge()}
            {standard.harmonized_standard && (
              <span className="text-[10px] font-mono text-slate-500 uppercase bg-slate-50 border border-slate-200 px-1.5 py-0.2 rounded-xs">
                ISO/IEC: {standard.harmonized_standard}
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            <h4 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 tracking-tight">
              {standard.standard_code}
            </h4>
            <button
              onClick={handleCopyCode}
              className="p-1 text-slate-400 hover:text-slate-900 transition-colors cursor-pointer"
              title="Copy Standard Code"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>
          <p className="text-sm sm:text-base text-slate-600 font-medium mt-1">
            {standard.title}
          </p>
        </div>

        {/* Large Serif Score display */}
        <div className="text-right shrink-0">
          <span className="block text-3xl sm:text-4xl font-serif font-bold text-slate-900 leading-none">
            {percentage}%
          </span>
          <span className="text-[10px] uppercase font-bold text-slate-400 tracking-widest block mt-1">
            Score: {score.toFixed(3)}
          </span>
        </div>
      </div>

      {/* Short Description */}
      <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-2">
        {standard.description}
      </p>

      {/* Editorial Metadata Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-3.5 border-t border-b border-slate-100 mb-3 text-xs">
        <div>
          <p className="text-[10px] uppercase font-bold text-slate-400 mb-1 tracking-wider">Product Category</p>
          <p className="text-xs font-semibold text-slate-800 uppercase truncate">{standard.category}</p>
        </div>
        <div>
          <p className="text-[10px] uppercase font-bold text-slate-400 mb-1 tracking-wider">Industry Sector</p>
          <p className="text-xs font-semibold text-slate-800 uppercase truncate">{standard.industry}</p>
        </div>
        <div>
          <p className="text-[10px] uppercase font-bold text-slate-400 mb-1 tracking-wider">Regulatory Scheme</p>
          <div>{getStatusDisplay(standard.status)}</div>
        </div>
        <div>
          <p className="text-[10px] uppercase font-bold text-slate-400 mb-1 tracking-wider">Publication Year</p>
          <p className="text-xs font-mono font-semibold text-slate-800">{standard.publication_year || 'Active'}</p>
        </div>
      </div>

      {/* Why Recommended Note */}
      <div className="bg-[#fafaf7] border border-slate-200 rounded-xs p-3 mb-3 text-xs">
        <p className="text-slate-700 leading-normal">
          <strong className="text-slate-900 uppercase text-[10px] tracking-widest mr-1 font-bold">Why Recommended:</strong>
          <span>{explanation}</span>
        </p>
      </div>

      {/* Matched Keywords & Math Inspector Toggle */}
      <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider mr-1">Matched terms:</span>
          {matchedKeywords.length > 0 ? (
            matchedKeywords.slice(0, 5).map((kw, i) => (
              <span key={i} className="bg-slate-100 text-slate-800 text-[10px] px-2 py-0.5 font-mono font-semibold border border-slate-200 rounded-xs">
                {kw}
              </span>
            ))
          ) : (
            <span className="text-slate-400 italic text-[11px]">Vector space semantic match</span>
          )}
        </div>

        <button
          type="button"
          onClick={() => setShowMath(!showMath)}
          className="text-[11px] font-bold text-slate-700 hover:text-slate-900 flex items-center gap-1 uppercase tracking-wider cursor-pointer"
        >
          <Layers className="w-3.5 h-3.5" />
          <span>{showMath ? 'Hide Math' : 'Inspect Vector Math'}</span>
        </button>
      </div>

      {/* Mathematical Term Contribution Breakdown (Collapsible) */}
      {showMath && tfidfBreakdown.length > 0 && (
        <div className="mt-3 p-4 bg-slate-950 text-slate-200 rounded-xs text-xs font-mono animate-in fade-in border border-slate-800">
          <div className="flex justify-between items-center text-slate-400 text-[10px] border-b border-slate-800 pb-1.5 mb-2 font-bold uppercase tracking-widest font-sans">
            <span>Token</span>
            <span>Query TF-IDF</span>
            <span>Doc TF-IDF</span>
            <span>Cosine Dot Product</span>
          </div>
          <div className="space-y-1.5 max-h-36 overflow-y-auto pr-1">
            {tfidfBreakdown.map((t, idx) => (
              <div key={idx} className="flex justify-between items-center text-[11px]">
                <span className="text-amber-400 font-bold">"{t.term}"</span>
                <span className="text-slate-400">{t.queryWeight.toFixed(2)}</span>
                <span className="text-slate-400">{t.docWeight.toFixed(2)}</span>
                <span className="text-emerald-400 font-bold">+{(t.contribution * 100).toFixed(1)}%</span>
              </div>
            ))}
          </div>
          <div className="mt-2.5 pt-2 border-t border-slate-800 text-[10px] text-slate-400 flex justify-between font-sans">
            <span>Cosine Metric: S(q, d) = (q · d) / (||q|| · ||d||)</span>
            <span className="text-amber-400">Sublinear Scaled</span>
          </div>
        </div>
      )}

      {/* Footer Action Bar */}
      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
        <button
          onClick={() => onOpenAi(standard)}
          className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-900 hover:text-amber-700 bg-amber-50 hover:bg-amber-100 border border-amber-200 px-3 py-1.5 rounded-xs transition-colors cursor-pointer"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-600" />
          <span>AI Compliance Roadmap</span>
        </button>

        <button
          onClick={() => onOpenDetails(standard)}
          className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-slate-900 hover:text-slate-700 transition-colors cursor-pointer group-hover:underline"
        >
          <span>Full Standard Dossier</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
