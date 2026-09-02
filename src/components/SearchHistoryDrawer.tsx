import React from 'react';
import { SearchHistoryItem } from '../types/standards';
import { 
  X, 
  History, 
  Trash2, 
  ArrowRight, 
  Calendar, 
  CheckCircle2, 
  Clock,
  Download
} from 'lucide-react';

interface SearchHistoryDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  history: SearchHistoryItem[];
  onSelectQuery: (query: string) => void;
  onClearHistory: () => void;
}

export const SearchHistoryDrawer: React.FC<SearchHistoryDrawerProps> = ({
  isOpen,
  onClose,
  history,
  onSelectQuery,
  onClearHistory
}) => {
  if (!isOpen) return null;

  const formatDate = (isoStr: string) => {
    try {
      const d = new Date(isoStr);
      return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) + ', ' + d.toLocaleDateString([], { month: 'short', day: 'numeric' });
    } catch {
      return isoStr;
    }
  };

  const handleExportHistoryJson = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(history, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `standards_search_history_${Date.now()}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-900/40 backdrop-blur-xs flex justify-end animate-in fade-in">
      <div 
        className="bg-white w-full max-w-md h-full shadow-2xl flex flex-col border-l border-slate-300 animate-in slide-in-from-right duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="p-5 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2">
            <History className="w-4 h-4 text-amber-400" />
            <h2 className="font-serif font-bold text-base">Search History ({history.length})</h2>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-white rounded-xs hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* History List Body */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {history.length === 0 ? (
            <div className="text-center py-12 text-slate-400 text-sm">
              <Clock className="w-8 h-8 mx-auto mb-2 text-slate-300" />
              <p className="font-serif font-bold text-slate-700">No past search queries yet.</p>
              <p className="text-xs text-slate-400 mt-1">Search for any product to build SQLite search history.</p>
            </div>
          ) : (
            history.map((item) => (
              <div 
                key={item.id}
                className="bg-[#fafaf7] hover:bg-white border border-slate-200 hover:border-slate-400 rounded-xs p-3.5 transition-all group"
              >
                <div className="flex items-start justify-between gap-2 mb-1.5">
                  <span className="font-serif font-bold text-xs sm:text-sm text-slate-900 leading-snug line-clamp-2">
                    "{item.query}"
                  </span>
                  <button
                    onClick={() => { onSelectQuery(item.query); onClose(); }}
                    className="shrink-0 p-1 text-slate-700 hover:text-white hover:bg-slate-900 rounded-xs transition-colors cursor-pointer"
                    title="Rerun Search"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="flex flex-wrap items-center justify-between text-[10px] text-slate-500 gap-1 pt-2 border-t border-slate-200">
                  <div className="flex items-center gap-1.5">
                    <span className="font-mono font-bold text-slate-800 bg-white px-1.5 py-0.5 rounded-xs border border-slate-200">
                      {item.topStandardCode || 'No match'}
                    </span>
                    {item.topScore > 0 && (
                      <span className="text-emerald-700 font-bold font-mono">
                        {Math.round(item.topScore * 100)}%
                      </span>
                    )}
                  </div>
                  <span className="text-slate-400 font-mono">{formatDate(item.timestamp)}</span>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Drawer Footer */}
        {history.length > 0 && (
          <div className="p-4 bg-[#fafaf7] border-t border-slate-200 flex items-center justify-between">
            <button
              onClick={handleExportHistoryJson}
              className="text-[10px] uppercase tracking-wider text-slate-700 hover:text-slate-900 font-bold flex items-center gap-1 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 text-slate-500" />
              <span>Export History JSON</span>
            </button>

            <button
              onClick={onClearHistory}
              className="text-[10px] uppercase tracking-wider text-red-700 hover:text-red-900 font-bold flex items-center gap-1 cursor-pointer"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Clear History</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
