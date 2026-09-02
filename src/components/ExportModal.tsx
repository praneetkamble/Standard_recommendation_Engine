import React from 'react';
import { RecommendationResult } from '../types/standards';
import { StorageService } from '../services/storageService';
import { 
  X, 
  Download, 
  FileSpreadsheet, 
  FileText, 
  Printer, 
  Check, 
  Copy 
} from 'lucide-react';
import { useI18n } from '../context/I18nContext';

interface ExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  query: string;
  results: RecommendationResult[];
}

export const ExportModal: React.FC<ExportModalProps> = ({
  isOpen,
  onClose,
  query,
  results
}) => {
  const [copied, setCopied] = React.useState(false);
  const { t } = useI18n();

  if (!isOpen) return null;

  const handleDownloadCsv = () => {
    const csvData = StorageService.exportToCsv(results, query);
    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `standards_recommendation_${query.slice(0, 15).replace(/\s+/g, '_')}_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  const handlePrintReport = () => {
    window.print();
  };

  const handleCopyJson = () => {
    navigator.clipboard.writeText(JSON.stringify(results, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in">
      <div 
        className="bg-white rounded-xs shadow-2xl border border-slate-300 max-w-lg w-full overflow-hidden animate-in zoom-in-95"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-slate-900 text-white p-5 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2">
            <Download className="w-4 h-4 text-amber-400" />
            <h3 className="font-serif font-bold text-base">{t.exportDossier}</h3>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-white p-1 rounded-xs hover:bg-slate-800 cursor-pointer">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-4 text-xs text-slate-700">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 font-mono block mb-1">Active Query:</span>
            <div className="bg-[#fafaf7] p-3 rounded-xs border border-slate-200 font-serif font-bold text-slate-900 text-sm">
              "{query}"
            </div>
          </div>

          <div className="text-slate-600">
            Exporting <strong>{results.length} ranked Indian Standards</strong> recommendations along with similarity scores, test parameters, and justifications.
          </div>

          <div className="grid grid-cols-1 gap-2.5 pt-2">
            <button
              onClick={handleDownloadCsv}
              className="flex items-center justify-between p-3.5 bg-[#fafaf7] hover:bg-white border border-slate-200 hover:border-slate-400 rounded-xs transition-all cursor-pointer group text-left"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xs bg-slate-100 text-slate-800 flex items-center justify-center border border-slate-200">
                  <FileSpreadsheet className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-serif font-bold text-slate-900 block text-xs">
                    {t.downloadCsv}
                  </span>
                  <span className="text-[11px] text-slate-500">
                    Tabular report for Excel / Google Sheets
                  </span>
                </div>
              </div>
              <Download className="w-4 h-4 text-slate-400 group-hover:text-slate-900" />
            </button>

            <button
              onClick={handlePrintReport}
              className="flex items-center justify-between p-3.5 bg-[#fafaf7] hover:bg-white border border-slate-200 hover:border-slate-400 rounded-xs transition-all cursor-pointer group text-left"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xs bg-slate-100 text-slate-800 flex items-center justify-center border border-slate-200">
                  <Printer className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-serif font-bold text-slate-900 block text-xs">
                    {t.printSpec}
                  </span>
                  <span className="text-[11px] text-slate-500">
                    Formatted standards compliance dossier
                  </span>
                </div>
              </div>
              <Download className="w-4 h-4 text-slate-400 group-hover:text-slate-900" />
            </button>

            <button
              onClick={handleCopyJson}
              className="flex items-center justify-between p-3.5 bg-[#fafaf7] hover:bg-white border border-slate-200 hover:border-slate-400 rounded-xs transition-all cursor-pointer group text-left"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xs bg-slate-100 text-slate-800 flex items-center justify-center border border-slate-200">
                  <FileText className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-serif font-bold text-slate-900 block text-xs">
                    {t.copyJson}
                  </span>
                  <span className="text-[11px] text-slate-500">
                    Full programmatic API payload
                  </span>
                </div>
              </div>
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-slate-400" />}
            </button>
          </div>
        </div>

        <div className="bg-[#fafaf7] px-6 py-3.5 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="text-[10px] font-bold uppercase tracking-wider bg-slate-200 hover:bg-slate-300 text-slate-800 px-4 py-2 rounded-xs cursor-pointer transition-colors"
          >
            {t.closeModal}
          </button>
        </div>
      </div>
    </div>
  );
};
