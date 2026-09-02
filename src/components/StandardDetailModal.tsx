import React, { useState } from 'react';
import { Standard } from '../types/standards';
import { 
  X, 
  CheckCircle2, 
  ShieldCheck, 
  Copy, 
  Check, 
  Sparkles, 
  Printer, 
  ExternalLink,
  BookOpen,
  FlaskConical,
  Layers,
  FileCheck,
  Tag,
  Building,
  Calendar
} from 'lucide-react';

interface StandardDetailModalProps {
  standard: Standard | null;
  onClose: () => void;
  onOpenAiAdvisor: (standard: Standard) => void;
}

export const StandardDetailModal: React.FC<StandardDetailModalProps> = ({
  standard,
  onClose,
  onOpenAiAdvisor
}) => {
  const [copied, setCopied] = useState(false);

  if (!standard) return null;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(standard.standard_code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in">
      <div 
        className="bg-white rounded-xs shadow-2xl border border-slate-300 max-w-3xl w-full max-h-[90vh] flex flex-col overflow-hidden animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-slate-900 text-white p-6 border-b border-slate-800 flex items-start justify-between">
          <div className="space-y-2 pr-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono text-xl font-bold text-amber-400">
                {standard.standard_code}
              </span>
              <button
                onClick={handleCopyCode}
                className="p-1 text-slate-400 hover:text-white rounded-xs transition-colors cursor-pointer"
                title="Copy Standard Code"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>

              <span className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-xs font-mono ${
                standard.status === 'Mandatory ISI Mark' 
                  ? 'bg-red-500/20 text-red-300 border border-red-500/40' 
                  : standard.status === 'Compulsory Registration (CRS)'
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                  : 'bg-slate-800 text-slate-300 border border-slate-700'
              }`}>
                {standard.status}
              </span>
            </div>

            <h2 className="text-lg sm:text-xl font-serif font-bold text-slate-100 leading-snug">
              {standard.title}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-2 rounded-xs hover:bg-slate-800 transition-colors cursor-pointer shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm text-slate-700 divide-y divide-slate-100">
          {/* Key Meta Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-0">
            <div className="bg-[#fafaf7] p-3.5 rounded-xs border border-slate-200">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">
                Category
              </span>
              <span className="font-serif font-bold text-slate-900 text-xs sm:text-sm">
                {standard.category}
              </span>
            </div>

            <div className="bg-[#fafaf7] p-3.5 rounded-xs border border-slate-200">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">
                Industry Sector
              </span>
              <span className="font-serif font-bold text-slate-900 text-xs sm:text-sm">
                {standard.industry}
              </span>
            </div>

            <div className="bg-[#fafaf7] p-3.5 rounded-xs border border-slate-200">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">
                Published Year
              </span>
              <span className="font-mono font-bold text-slate-900 text-xs sm:text-sm">
                {standard.publication_year}
              </span>
            </div>

            <div className="bg-[#fafaf7] p-3.5 rounded-xs border border-slate-200">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">
                Harmonization
              </span>
              <span className="font-mono text-slate-800 text-xs font-bold truncate block">
                {standard.harmonized_standard || 'National BIS'}
              </span>
            </div>
          </div>

          {/* Applicable Product Scope */}
          <div className="pt-4">
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-widest font-mono flex items-center gap-1.5 mb-2">
              <BookOpen className="w-4 h-4 text-slate-800" />
              <span>Standard Scope &amp; Applicable Products</span>
            </h3>
            <p className="text-slate-700 leading-relaxed text-xs sm:text-sm bg-[#fafaf7] p-4 rounded-xs border border-slate-200 mb-2 font-serif">
              {standard.scope || standard.description}
            </p>
            <div className="text-xs text-slate-600">
              <span className="font-semibold text-slate-800">Primary Product Names: </span>
              <span>{standard.product}</span>
            </div>
          </div>

          {/* Mandatory Laboratory Testing Parameters */}
          <div className="pt-4">
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-widest font-mono flex items-center gap-1.5 mb-2.5">
              <FlaskConical className="w-4 h-4 text-emerald-700" />
              <span>Mandatory Testing &amp; Quality Parameters</span>
            </h3>
            {standard.test_parameters && standard.test_parameters.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {standard.test_parameters.map((test, index) => (
                  <div key={index} className="flex items-start gap-2 bg-[#fafaf7] border border-slate-200 p-2.5 rounded-xs text-xs">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 mt-0.5 shrink-0" />
                    <span className="text-slate-800 font-medium">{test}</span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-xs text-slate-500 italic">Standard testing protocol per BIS Scheme of Inspection and Testing (SIT).</p>
            )}
          </div>

          {/* Keywords & Related Standards */}
          <div className="pt-4">
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-widest font-mono flex items-center gap-1.5 mb-2">
              <Tag className="w-4 h-4 text-slate-800" />
              <span>Indexing Keywords &amp; Vocabulary</span>
            </h3>
            <div className="flex flex-wrap gap-1.5 mb-3">
              {standard.keywords.map((kw, i) => (
                <span key={i} className="bg-slate-100 text-slate-800 text-[11px] px-2.5 py-1 rounded-xs font-mono border border-slate-200">
                  {kw}
                </span>
              ))}
            </div>

            {standard.related_products && standard.related_products.length > 0 && (
              <div>
                <span className="text-xs font-semibold text-slate-700 block mb-1">
                  Related Products in Ecosystem:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {standard.related_products.map((rp, i) => (
                    <span key={i} className="bg-amber-50 text-amber-900 text-xs px-2 py-0.5 rounded-xs border border-amber-200">
                      {rp}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Academic & Hackathon Notice */}
          <div className="pt-4 text-[11px] text-slate-600 bg-amber-50/70 p-3.5 rounded-xs border border-amber-200">
            <strong>Hackathon Evaluation Notice:</strong> This record is part of the demonstration catalogue for SIH26108 / GVHAX 2026. For statutory industrial production, refer to the official Bureau of Indian Standards (manakonline.in) documentation.
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-[#fafaf7] px-6 py-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={() => onOpenAiAdvisor(standard)}
            className="inline-flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-amber-400 text-[10px] font-bold uppercase tracking-wider px-4 py-2 rounded-xs shadow-xs transition-colors cursor-pointer border border-slate-800"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Ask AI Compliance Advisor</span>
          </button>

          <div className="flex items-center space-x-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-700 hover:text-slate-900 bg-white border border-slate-300 hover:bg-slate-50 px-3 py-2 rounded-xs transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print Specification</span>
            </button>

            <button
              onClick={onClose}
              className="text-[10px] font-bold uppercase tracking-wider text-slate-700 hover:bg-slate-200 bg-slate-100 px-4 py-2 rounded-xs transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
