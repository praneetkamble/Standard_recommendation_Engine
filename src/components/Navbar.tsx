import React from 'react';
import { 
  Search, 
  Database, 
  BarChart3, 
  Cpu, 
  Sparkles, 
  FileText, 
  History, 
  ShieldCheck
} from 'lucide-react';

interface NavbarProps {
  activeTab: 'search' | 'catalogue' | 'analytics' | 'judge' | 'ai' | 'pitch';
  setActiveTab: (tab: 'search' | 'catalogue' | 'analytics' | 'judge' | 'ai' | 'pitch') => void;
  historyCount: number;
  onOpenHistory: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  historyCount,
  onOpenHistory
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-xs">
      {/* Top National Portal Sub-Banner */}
      <div className="bg-slate-950 text-slate-300 text-[11px] px-4 sm:px-8 py-1.5 flex items-center justify-between border-b border-slate-900 font-mono">
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-1.5 font-semibold text-white">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
            <span className="uppercase tracking-wider">GVHAX 2026 / Acharya Hackathon</span>
          </div>
          <span className="text-slate-700">|</span>
          <span className="text-slate-400 uppercase tracking-tight">Problem Statement #42 (SIH26108)</span>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 bg-slate-900 px-2.5 py-0.5 rounded-full border border-slate-800">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-emerald-400 text-[10px] font-bold uppercase tracking-wider">Engine Online (&lt;2ms)</span>
          </div>
        </div>
      </div>

      {/* Main Header & Editorial Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between">
        {/* Brand & Title */}
        <div 
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => setActiveTab('search')}
        >
          <div className="w-10 h-10 bg-slate-900 flex items-center justify-center rounded-xs shadow-xs group-hover:bg-slate-800 transition-colors">
            <span className="text-white font-serif font-bold text-xl">S.</span>
          </div>
          <div>
            <h1 className="text-base sm:text-lg font-bold tracking-tight uppercase text-slate-900 leading-none">
              Standards Recommend <span className="text-amber-600 font-serif italic lowercase font-normal">v1.0</span>
            </h1>
            <p className="text-[10px] uppercase tracking-widest text-slate-400 font-semibold mt-1">
              Indian Standards (IS/BIS) Recommendation Engine
            </p>
          </div>
        </div>

        {/* Editorial Navigation Tabs */}
        <nav className="hidden lg:flex items-center gap-6 text-xs font-bold uppercase tracking-widest">
          <button
            id="tab-search"
            onClick={() => setActiveTab('search')}
            className={`transition-colors pb-1 cursor-pointer ${
              activeTab === 'search'
                ? 'text-slate-900 border-b-2 border-slate-900'
                : 'text-slate-400 hover:text-slate-700 border-b-2 border-transparent'
            }`}
          >
            Recommender
          </button>

          <button
            id="tab-catalogue"
            onClick={() => setActiveTab('catalogue')}
            className={`transition-colors pb-1 cursor-pointer ${
              activeTab === 'catalogue'
                ? 'text-slate-900 border-b-2 border-slate-900'
                : 'text-slate-400 hover:text-slate-700 border-b-2 border-transparent'
            }`}
          >
            Catalogue
          </button>

          <button
            id="tab-analytics"
            onClick={() => setActiveTab('analytics')}
            className={`transition-colors pb-1 cursor-pointer ${
              activeTab === 'analytics'
                ? 'text-slate-900 border-b-2 border-slate-900'
                : 'text-slate-400 hover:text-slate-700 border-b-2 border-transparent'
            }`}
          >
            Analytics
          </button>

          <button
            id="tab-judge"
            onClick={() => setActiveTab('judge')}
            className={`transition-colors pb-1 cursor-pointer ${
              activeTab === 'judge'
                ? 'text-slate-900 border-b-2 border-slate-900'
                : 'text-slate-400 hover:text-slate-700 border-b-2 border-transparent'
            }`}
          >
            Judge &amp; ML Inspector
          </button>

          <button
            id="tab-ai"
            onClick={() => setActiveTab('ai')}
            className={`transition-colors pb-1 cursor-pointer flex items-center gap-1 ${
              activeTab === 'ai'
                ? 'text-slate-900 border-b-2 border-slate-900'
                : 'text-slate-400 hover:text-slate-700 border-b-2 border-transparent'
            }`}
          >
            <Sparkles className="w-3 h-3 text-amber-600" />
            <span>AI Advisor</span>
          </button>

          <button
            id="tab-pitch"
            onClick={() => setActiveTab('pitch')}
            className={`transition-colors pb-1 cursor-pointer ${
              activeTab === 'pitch'
                ? 'text-slate-900 border-b-2 border-slate-900'
                : 'text-slate-400 hover:text-slate-700 border-b-2 border-transparent'
            }`}
          >
            Pitch Deck
          </button>
        </nav>

        {/* Right Action: Search History & System Pill */}
        <div className="flex items-center gap-3">
          <button
            id="btn-search-history"
            onClick={onOpenHistory}
            className="flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 rounded-xs shadow-xs transition-colors cursor-pointer"
            title="View Search History"
          >
            <History className="w-3.5 h-3.5 text-slate-500" />
            <span className="hidden sm:inline">History</span>
            {historyCount > 0 && (
              <span className="bg-slate-900 text-white text-[9px] px-1.5 py-0.2 rounded-xs font-mono">
                {historyCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Row */}
      <div className="flex lg:hidden overflow-x-auto px-4 py-2 bg-slate-50 border-t border-slate-200 space-x-2 scrollbar-none text-[11px] font-bold uppercase tracking-wider">
        {[
          { id: 'search', label: 'Recommender', icon: Search },
          { id: 'catalogue', label: 'Catalogue', icon: Database },
          { id: 'analytics', label: 'Analytics', icon: BarChart3 },
          { id: 'judge', label: 'ML Inspector', icon: Cpu },
          { id: 'ai', label: 'AI Advisor', icon: Sparkles },
          { id: 'pitch', label: 'Pitch', icon: FileText }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`px-3 py-1.5 whitespace-nowrap rounded-xs transition-colors cursor-pointer ${
              activeTab === tab.id
                ? 'bg-slate-900 text-white'
                : 'text-slate-600 hover:bg-slate-200'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </header>
  );
};
