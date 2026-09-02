import React, { useState, useRef, useEffect } from 'react';
import { 
  Search, 
  Database, 
  BarChart3, 
  Cpu, 
  Sparkles, 
  FileText, 
  History, 
  ShieldCheck,
  Globe,
  ChevronDown,
  Check
} from 'lucide-react';
import { useI18n } from '../context/I18nContext';
import { LanguageCode } from '../types/i18n';

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
  const { language, setLanguage, t, languages } = useI18n();
  const [isLangOpen, setIsLangOpen] = useState(false);
  const langDropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (langDropdownRef.current && !langDropdownRef.current.contains(event.target as Node)) {
        setIsLangOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentLangObj = languages.find(l => l.code === language) || languages[0];

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-xs">
      {/* Top National Portal Sub-Banner */}
      <div className="bg-slate-950 text-slate-300 text-[11px] px-4 sm:px-8 py-1.5 flex items-center justify-between border-b border-slate-900 font-mono">
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-1.5 font-semibold text-white">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
            <span className="uppercase tracking-wider">{t.hackathonTag}</span>
          </div>
          <span className="text-slate-700 hidden sm:inline">|</span>
          <span className="text-slate-400 uppercase tracking-tight hidden sm:inline">{t.problemStatement}</span>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 bg-slate-900 px-2.5 py-0.5 rounded-full border border-slate-800">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-emerald-400 text-[10px] font-bold uppercase tracking-wider">{t.engineOnline}</span>
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
              {t.portalTitle} <span className="text-amber-600 font-serif italic lowercase font-normal">v1.0</span>
            </h1>
            <p className="text-[10px] uppercase tracking-widest text-slate-400 font-semibold mt-1">
              {t.portalSubtitle}
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
            {t.tabRecommender}
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
            {t.tabCatalogue}
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
            {t.tabAnalytics}
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
            {t.tabInspector}
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
            <span>{t.tabAiAdvisor}</span>
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
            {t.tabPitch}
          </button>
        </nav>

        {/* Right Actions: Language Switcher & Search History */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Multi-Language Selector Dropdown */}
          <div className="relative" ref={langDropdownRef}>
            <button
              id="btn-language-selector"
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center gap-1.5 px-2.5 py-1.5 text-[11px] font-bold text-slate-800 bg-[#fafaf7] hover:bg-slate-100 border border-slate-200 rounded-xs shadow-xs transition-colors cursor-pointer"
              title="Change Interface Language"
            >
              <Globe className="w-3.5 h-3.5 text-amber-600 shrink-0" />
              <span className="font-sans font-bold">{currentLangObj.nativeName}</span>
              <ChevronDown className={`w-3 h-3 text-slate-400 transition-transform ${isLangOpen ? 'rotate-180' : ''}`} />
            </button>

            {isLangOpen && (
              <div className="absolute right-0 mt-1.5 w-60 bg-white border border-slate-200 shadow-xl rounded-xs py-1 z-50 animate-in fade-in zoom-in-95">
                <div className="px-3 py-1.5 border-b border-slate-100 flex items-center justify-between text-[10px] font-mono uppercase tracking-wider text-slate-400">
                  <span>{t.selectLanguage}</span>
                  <span className="text-amber-600 font-bold">8 Indian Languages</span>
                </div>
                <div className="max-h-64 overflow-y-auto py-1">
                  {languages.map((lang) => {
                    const isSelected = language === lang.code;
                    return (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code as LanguageCode);
                          setIsLangOpen(false);
                        }}
                        className={`w-full px-3 py-2 text-left flex items-center justify-between text-xs transition-colors cursor-pointer ${
                          isSelected
                            ? 'bg-amber-50/80 text-amber-950 font-bold'
                            : 'text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        <div className="flex flex-col">
                          <div className="flex items-center gap-1.5">
                            <span className="font-bold text-slate-900">{lang.nativeName}</span>
                            <span className="text-[10px] text-slate-400">({lang.name})</span>
                          </div>
                          <span className="text-[9px] text-slate-400 truncate">{lang.region}</span>
                        </div>
                        {isSelected && <Check className="w-3.5 h-3.5 text-amber-600 shrink-0" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          <button
            id="btn-search-history"
            onClick={onOpenHistory}
            className="flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 rounded-xs shadow-xs transition-colors cursor-pointer"
            title="View Search History"
          >
            <History className="w-3.5 h-3.5 text-slate-500" />
            <span className="hidden sm:inline">{t.historyBtn}</span>
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
          { id: 'search', label: t.tabRecommender, icon: Search },
          { id: 'catalogue', label: t.tabCatalogue, icon: Database },
          { id: 'analytics', label: t.tabAnalytics, icon: BarChart3 },
          { id: 'judge', label: t.tabInspector, icon: Cpu },
          { id: 'ai', label: t.tabAiAdvisor, icon: Sparkles },
          { id: 'pitch', label: t.tabPitch, icon: FileText }
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

