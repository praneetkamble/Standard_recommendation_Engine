import React, { useState } from 'react';
import { 
  Users, 
  Award, 
  ShieldCheck, 
  Terminal, 
  Layers, 
  Cpu, 
  FileText, 
  CheckCircle2,
  ExternalLink,
  Code2,
  Play,
  ChevronLeft,
  ChevronRight,
  Presentation,
  Sparkles,
  ArrowRight,
  TrendingUp,
  BookOpen,
  Check
} from 'lucide-react';

interface SlideData {
  id: number;
  slideNumber: number;
  title: string;
  subtitle?: string;
  badge?: string;
  content: React.ReactNode;
  keyTakeaway: string;
}

export const TeamPitch: React.FC<{ onNavigateTab?: (tab: 'search' | 'catalogue' | 'analytics' | 'judge' | 'ai' | 'pitch') => void }> = ({ onNavigateTab }) => {
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const [viewMode, setViewMode] = useState<'slides' | 'overview' | 'script'>('slides');

  const slides: SlideData[] = [
    // Slide 1: Title Page
    {
      id: 1,
      slideNumber: 1,
      title: "SMART INDIA HACKATHON 2026",
      subtitle: "TITLE PAGE",
      badge: "Problem Statement No. – 42",
      content: (
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 py-4">
          <div className="space-y-4 flex-1">
            <div className="inline-block bg-amber-100 text-amber-900 border border-amber-300 px-3 py-1 text-xs font-mono font-bold uppercase tracking-wider rounded-xs">
              SIH 2026 • GV-HAX
            </div>
            
            <div className="space-y-2.5 text-left">
              <div className="flex items-center gap-3">
                <span className="text-slate-400 font-mono text-xs uppercase font-bold w-44">Problem Statement No.:</span>
                <span className="font-serif font-bold text-slate-900 text-base">42</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-slate-400 font-mono text-xs uppercase font-bold w-44">Problem Statement:</span>
                <span className="font-serif font-bold text-slate-900 text-base leading-snug">
                  Standards Recommendation Engine
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-slate-400 font-mono text-xs uppercase font-bold w-44">Domain:</span>
                <span className="font-mono font-bold text-slate-800 text-sm">Computer</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-slate-400 font-mono text-xs uppercase font-bold w-44">PS Category:</span>
                <span className="font-mono font-bold text-slate-800 text-sm">Software</span>
              </div>
              <div className="flex items-center gap-3 pt-2 border-t border-slate-200">
                <span className="text-slate-400 font-mono text-xs uppercase font-bold w-44">Team No.:</span>
                <span className="font-mono font-bold text-amber-700 text-base">18</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-slate-400 font-mono text-xs uppercase font-bold w-44">Team Name:</span>
                <span className="font-serif font-bold text-slate-900 text-lg tracking-wider text-emerald-800">
                  KAIROS
                </span>
              </div>
            </div>
          </div>

          <div className="w-64 h-64 bg-[#fafaf7] border-2 border-dashed border-slate-300 rounded-xs flex flex-col items-center justify-center p-6 text-center relative shadow-xs">
            <div className="w-20 h-20 rounded-full bg-slate-900 text-amber-400 flex items-center justify-center font-serif font-bold text-2xl shadow-md mb-3">
              SIH
            </div>
            <span className="font-serif font-bold text-slate-900 text-sm">SMART INDIA HACKATHON</span>
            <span className="font-mono font-bold text-amber-700 text-xs tracking-widest mt-0.5">2026</span>
            <span className="text-[10px] uppercase tracking-wider text-slate-400 mt-2 font-mono">Team KAIROS (#18)</span>
          </div>
        </div>
      ),
      keyTakeaway: "Official Hackathon Identification: Team KAIROS (Team #18) addressing PS #42 in the Computer / Software domain."
    },

    // Slide 2: Standard Recommendation Engine
    {
      id: 2,
      slideNumber: 2,
      title: "STANDARD RECOMMENDATION ENGINE",
      subtitle: "StandardsMatch – AI-Powered Indian Standards Recommendation Engine",
      badge: "Slide 2 • Executive Solution",
      content: (
        <div className="space-y-6 text-left py-2">
          <div className="border-l-4 border-slate-900 pl-4 py-1">
            <h4 className="font-serif font-bold text-lg text-slate-900">
              StandardsMatch – AI-Powered Indian Standards Recommendation Engine
            </h4>
            <p className="text-xs text-slate-500 font-mono mt-0.5">
              Instant, deterministic mapping from product description to Indian Standards (IS/BIS).
            </p>
          </div>

          <div className="space-y-3">
            {[
              {
                title: "Input & Catalog Matching",
                text: "Takes a product category as input, matches it against an Indian Standards catalog using a similarity model."
              },
              {
                title: "Replaces Manual Search for MSMEs",
                text: "Replaces slow, manual standards search with an instant, ranked lookup for MSMEs and exporters."
              },
              {
                title: "Semantic Similarity Ranking",
                text: "Uses semantic similarity, not keyword search, so it ranks results by relevance score."
              }
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-[#fafaf7] p-4 rounded-xs border border-slate-200">
                <span className="w-6 h-6 rounded-full bg-slate-900 text-white font-mono text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <div>
                  <h5 className="font-serif font-bold text-slate-900 text-sm">{item.title}</h5>
                  <p className="text-xs text-slate-700 mt-1 leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
      keyTakeaway: "Transforms hours of tedious manual lookup into sub-2ms algorithmic ranking for MSMEs and exporters."
    },

    // Slide 3: Technical Approach
    {
      id: 3,
      slideNumber: 3,
      title: "TECHNICAL APPROACH",
      subtitle: "Machine Learning Pipeline, Vectorization & Architecture",
      badge: "Slide 3 • ML & Tech Stack",
      content: (
        <div className="space-y-5 text-left py-2">
          <div className="bg-slate-900 text-white p-4 rounded-xs border border-slate-800">
            <span className="text-[10px] font-mono uppercase font-bold text-amber-400 tracking-wider block mb-1">
              Tech Stack &amp; Libraries
            </span>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-mono">
              • Python, scikit-learn / Sentence-Transformers for text similarity, a mock Indian Standards catalog (CSV/JSON), and a lightweight React JS, Tailwind for the frontend.
            </p>
          </div>

          <div>
            <span className="text-xs font-serif font-bold text-slate-900 uppercase tracking-wider block mb-2">
              End-to-End Recommender Flow:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 text-center">
              <div className="bg-[#fafaf7] p-3 rounded-xs border border-slate-200">
                <span className="text-[10px] font-mono font-bold text-slate-400 uppercase block">Step 1</span>
                <span className="text-xs font-bold text-slate-900 block mt-1">User Enters Query</span>
                <span className="text-[10px] text-slate-500 block mt-0.5">Product Category / Description</span>
              </div>
              <div className="bg-[#fafaf7] p-3 rounded-xs border border-slate-200">
                <span className="text-[10px] font-mono font-bold text-slate-400 uppercase block">Step 2</span>
                <span className="text-xs font-bold text-slate-900 block mt-1">Text Vectorized</span>
                <span className="text-[10px] text-slate-500 block mt-0.5">TF-IDF / Sublinear Term Weight</span>
              </div>
              <div className="bg-[#fafaf7] p-3 rounded-xs border border-slate-200">
                <span className="text-[10px] font-mono font-bold text-slate-400 uppercase block">Step 3</span>
                <span className="text-xs font-bold text-slate-900 block mt-1">Cosine Similarity</span>
                <span className="text-[10px] text-slate-500 block mt-0.5">Dot Product over Normalized Corpus</span>
              </div>
              <div className="bg-emerald-50 p-3 rounded-xs border border-emerald-200">
                <span className="text-[10px] font-mono font-bold text-emerald-700 uppercase block">Step 4</span>
                <span className="text-xs font-bold text-emerald-900 block mt-1">Top-N Ranked</span>
                <span className="text-[10px] text-emerald-700 block mt-0.5">Relevance Score &amp; Details</span>
              </div>
            </div>
          </div>
        </div>
      ),
      keyTakeaway: "Robust vectorization with mathematical cosine ranking delivers deterministic relevance scores."
    },

    // Slide 4: Feasibility and Viability
    {
      id: 4,
      slideNumber: 4,
      title: "FEASIBILITY AND VIABILITY",
      subtitle: "Implementation Roadmap & Accuracy Enhancements",
      badge: "Slide 4 • Viability & Scaling",
      content: (
        <div className="space-y-4 text-left py-2">
          <div className="space-y-3">
            <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-xs">
              <span className="text-xs font-serif font-bold text-emerald-900 block mb-1">
                ✓ Rapid MVP Feasibility
              </span>
              <p className="text-xs text-emerald-800 leading-relaxed">
                Achievable as a 3-hour MVP using a mock catalog and an off-the-shelf similarity model.
              </p>
            </div>

            <div className="bg-amber-50 border border-amber-200 p-4 rounded-xs">
              <span className="text-xs font-serif font-bold text-amber-900 block mb-1">
                ⚠ Known Challenges &amp; Edge Cases
              </span>
              <p className="text-xs text-amber-800 leading-relaxed">
                Limited mock catalog coverage; ambiguous category names can reduce match accuracy.
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 p-4 rounded-xs">
              <span className="text-xs font-serif font-bold text-blue-900 block mb-1">
                🚀 Mitigation &amp; Production Roadmap
              </span>
              <p className="text-xs text-blue-800 leading-relaxed">
                Curate categories, add synonym mapping, plan phased integration with the BIS API.
              </p>
            </div>
          </div>
        </div>
      ),
      keyTakeaway: "Addresses real-world ambiguities through synonym dictionaries and live BIS API scalability."
    },

    // Slide 5: Impact and Benefits
    {
      id: 5,
      slideNumber: 5,
      title: "IMPACT AND BENEFITS",
      subtitle: "Economic, Social & National Compliance Acceleration",
      badge: "Slide 5 • National Impact",
      content: (
        <div className="space-y-4 text-left py-2">
          <div className="bg-[#fafaf7] p-4 rounded-xs border border-slate-200">
            <span className="text-xs font-serif font-bold text-slate-900 block mb-1">
              Target Beneficiaries
            </span>
            <p className="text-xs text-slate-700 leading-relaxed">
              Helps manufacturers, MSMEs and exporters instantly find which Indian Standards apply to their product.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="bg-white p-4 rounded-xs border border-slate-200 shadow-xs">
              <div className="flex items-center gap-2 text-emerald-700 font-serif font-bold text-xs mb-1 uppercase tracking-wider">
                <TrendingUp className="w-4 h-4 text-emerald-700" />
                <span>Economic Impact</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Cuts compliance research time and costly third-party consulting fees for small enterprises.
              </p>
            </div>

            <div className="bg-white p-4 rounded-xs border border-slate-200 shadow-xs">
              <div className="flex items-center gap-2 text-blue-700 font-serif font-bold text-xs mb-1 uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-blue-700" />
                <span>Social Impact &amp; Safety</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Improves domestic product safety, reduces substandard goods, and scales into a national standards-discovery portal.
              </p>
            </div>
          </div>
        </div>
      ),
      keyTakeaway: "Empowers MSMEs while ensuring national product quality standards and public safety."
    },

    // Slide 6: Research and References
    {
      id: 6,
      slideNumber: 6,
      title: "RESEARCH AND REFERENCES",
      subtitle: "Standard Registries, Mathematical Models & Literature",
      badge: "Slide 6 • Research & Citations",
      content: (
        <div className="space-y-4 text-left py-2">
          <div className="space-y-3">
            {[
              {
                source: "Bureau of Indian Standards (BIS) Official Catalog",
                url: "bis.gov.in / manakonline.in",
                desc: "Official statutory repository of standard specifications, mandatory ISI marks, CRS schemes, and laboratory testing manuals."
              },
              {
                source: "Sentence-BERT & Cosine Similarity Techniques",
                url: "Reimers & Gurevych (EMNLP), scikit-learn TF-IDF",
                desc: "Sublinear term frequency algorithms and dense vector embedding cosine distances for semantic relevance ranking."
              },
              {
                source: "Existing Standards-Search Portals Benchmarking",
                url: "ISO / IEC / BIS Standards Portal Analysis",
                desc: "Competitive gap analysis showing need for instant ranked search over rigid boolean keyword query engines."
              }
            ].map((ref, idx) => (
              <div key={idx} className="bg-[#fafaf7] p-4 rounded-xs border border-slate-200 flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-slate-900 text-white font-mono text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <div className="flex-1">
                  <span className="font-serif font-bold text-slate-900 text-xs block">{ref.source}</span>
                  <span className="font-mono text-[10px] text-amber-700 font-bold block mb-1">{ref.url}</span>
                  <p className="text-xs text-slate-600">{ref.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
      keyTakeaway: "Grounded in official BIS standards data and proven information retrieval methodologies."
    }
  ];

  const currentSlide = slides[activeSlide];

  return (
    <div className="space-y-6">
      {/* Top Hackathon Banner */}
      <div className="bg-slate-900 text-white p-6 sm:p-8 rounded-xs border border-slate-800 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-amber-400 text-[10px] font-bold uppercase tracking-widest font-mono mb-2">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span>Smart India Hackathon 2026 • Team KAIROS (Team #18) • GV-HAX</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
            Problem Statement #42: Standards Recommendation Engine
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm max-w-3xl mt-1.5 leading-relaxed">
            SIH 2026 Official Pitch Deck &amp; Jury Presentation Companion for Team KAIROS.
          </p>
        </div>

        {/* View Switcher Tabs */}
        <div className="flex items-center bg-slate-800 p-1 rounded-xs border border-slate-700 shrink-0">
          <button
            onClick={() => setViewMode('slides')}
            className={`px-3 py-1.5 rounded-xs text-[11px] font-bold uppercase tracking-wider transition-colors cursor-pointer flex items-center gap-1.5 ${
              viewMode === 'slides' ? 'bg-amber-400 text-slate-950 shadow-xs' : 'text-slate-300 hover:text-white'
            }`}
          >
            <Presentation className="w-3.5 h-3.5" />
            <span>Slide Deck</span>
          </button>
          <button
            onClick={() => setViewMode('script')}
            className={`px-3 py-1.5 rounded-xs text-[11px] font-bold uppercase tracking-wider transition-colors cursor-pointer flex items-center gap-1.5 ${
              viewMode === 'script' ? 'bg-amber-400 text-slate-950 shadow-xs' : 'text-slate-300 hover:text-white'
            }`}
          >
            <Play className="w-3.5 h-3.5" />
            <span>Jury Pitch Script</span>
          </button>
          <button
            onClick={() => setViewMode('overview')}
            className={`px-3 py-1.5 rounded-xs text-[11px] font-bold uppercase tracking-wider transition-colors cursor-pointer flex items-center gap-1.5 ${
              viewMode === 'overview' ? 'bg-amber-400 text-slate-950 shadow-xs' : 'text-slate-300 hover:text-white'
            }`}
          >
            <Users className="w-3.5 h-3.5" />
            <span>Team Matrix</span>
          </button>
        </div>
      </div>

      {/* VIEW 1: INTERACTIVE SLIDE DECK */}
      {viewMode === 'slides' && (
        <div className="space-y-4">
          {/* Main Slide Card */}
          <div className="bg-white rounded-xs border-2 border-slate-900 shadow-md overflow-hidden">
            {/* Slide Header Bar (SIH Branding) */}
            <div className="bg-slate-900 text-white px-6 py-3 flex items-center justify-between border-b border-slate-800">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                <span className="font-serif font-bold text-sm tracking-wide">
                  SMART INDIA HACKATHON 2026
                </span>
                <span className="text-slate-500 font-mono text-xs hidden sm:inline">|</span>
                <span className="text-slate-400 font-mono text-xs uppercase hidden sm:inline">
                  {currentSlide.badge}
                </span>
              </div>
              <div className="flex items-center gap-3 font-mono text-xs">
                <span className="bg-slate-800 text-amber-400 font-bold px-2 py-0.5 rounded-xs border border-slate-700">
                  Slide {currentSlide.slideNumber} of {slides.length}
                </span>
                <span className="text-slate-400 font-bold uppercase hidden md:inline">Team KAIROS</span>
              </div>
            </div>

            {/* Slide Body */}
            <div className="p-6 sm:p-10 min-h-[380px] flex flex-col justify-between">
              <div>
                <div className="border-b border-slate-200 pb-3 mb-4">
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-900 tracking-tight">
                    {currentSlide.title}
                  </h3>
                  {currentSlide.subtitle && (
                    <p className="text-xs sm:text-sm text-slate-500 font-serif italic mt-0.5">
                      {currentSlide.subtitle}
                    </p>
                  )}
                </div>

                {currentSlide.content}
              </div>

              {/* Key Takeaway & Slide Footer */}
              <div className="pt-4 border-t border-slate-200 mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs bg-[#fafaf7] -mx-6 -mb-6 sm:-mx-10 sm:-mb-10 p-4 sm:px-10 border-t border-slate-200">
                <div className="flex items-center gap-2 text-slate-700">
                  <span className="font-mono uppercase font-bold text-slate-900 text-[10px] tracking-wider">Takeaway:</span>
                  <span className="font-serif italic text-slate-600">{currentSlide.keyTakeaway}</span>
                </div>
                <div className="font-mono text-[10px] text-slate-400 uppercase font-bold tracking-widest">
                  GV-HAX • SIH26108
                </div>
              </div>
            </div>
          </div>

          {/* Slide Navigation Controls */}
          <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-4 rounded-xs border border-slate-200 shadow-xs">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveSlide(prev => Math.max(0, prev - 1))}
                disabled={activeSlide === 0}
                className="flex items-center gap-1 text-xs font-bold uppercase tracking-wider bg-slate-100 hover:bg-slate-200 disabled:opacity-40 disabled:cursor-not-allowed text-slate-800 px-3 py-2 rounded-xs transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Prev Slide</span>
              </button>

              <button
                onClick={() => setActiveSlide(prev => Math.min(slides.length - 1, prev + 1))}
                disabled={activeSlide === slides.length - 1}
                className="flex items-center gap-1 text-xs font-bold uppercase tracking-wider bg-slate-900 hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed text-white px-3 py-2 rounded-xs transition-colors cursor-pointer"
              >
                <span>Next Slide</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Slide Indicator Pills */}
            <div className="flex items-center gap-1.5">
              {slides.map((slide, idx) => (
                <button
                  key={slide.id}
                  onClick={() => setActiveSlide(idx)}
                  className={`px-2.5 py-1 text-[10px] font-mono font-bold rounded-xs transition-all cursor-pointer ${
                    activeSlide === idx
                      ? 'bg-slate-900 text-amber-400 font-bold shadow-xs'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
                  }`}
                  title={slide.title}
                >
                  {slide.slideNumber}
                </button>
              ))}
            </div>

            {/* Quick Live Interactive Jump */}
            {onNavigateTab && (
              <button
                onClick={() => onNavigateTab('search')}
                className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider bg-emerald-50 text-emerald-800 hover:bg-emerald-100 border border-emerald-200 px-3 py-2 rounded-xs transition-colors cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                <span>Try Live App Now</span>
              </button>
            )}
          </div>
        </div>
      )}

      {/* VIEW 2: JURY PITCH SCRIPT */}
      {viewMode === 'script' && (
        <div className="bg-white rounded-xs border border-slate-200 p-6 sm:p-8 shadow-xs space-y-4">
          <div className="border-b border-slate-200 pb-3">
            <h3 className="text-lg font-serif font-bold text-slate-900 flex items-center gap-2">
              <Play className="w-4 h-4 text-slate-800 fill-slate-800" />
              <span>2–3 Minute Presentation Script for the SIH Jury</span>
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Synchronized slide-by-slide narrative for Team KAIROS (Team #18).
            </p>
          </div>

          <div className="space-y-3.5 text-xs text-slate-700 leading-relaxed">
            <div className="bg-[#fafaf7] p-4 rounded-xs border-l-4 border-slate-900 border border-slate-200">
              <div className="flex items-center justify-between mb-1">
                <span className="font-serif font-bold text-slate-900 text-sm">
                  1. Title &amp; Problem Statement (Slide 1 &amp; 2 • 0:00 - 0:35):
                </span>
                <span className="text-[10px] font-mono text-slate-400 font-bold uppercase">Slide 1 &amp; 2</span>
              </div>
              <p className="italic text-slate-800">
                "Respected jury, we are <strong>Team KAIROS (Team No. 18)</strong> presenting our solution for <strong>Problem Statement #42: Standards Recommendation Engine</strong>. Indian manufacturers, MSMEs, and exporters frequently struggle to determine which Bureau of Indian Standards (BIS) specifications govern their products. Finding the right standard among 20,000+ documents is slow and expensive. We built <strong>StandardsMatch</strong> — an intelligent, deterministic recommendation engine that takes informal product terms and instantly outputs ranked, high-confidence standards."
              </p>
            </div>

            <div className="bg-[#fafaf7] p-4 rounded-xs border-l-4 border-slate-900 border border-slate-200">
              <div className="flex items-center justify-between mb-1">
                <span className="font-serif font-bold text-slate-900 text-sm">
                  2. Technical Architecture &amp; Flow (Slide 3 • 0:35 - 1:20):
                </span>
                <span className="text-[10px] font-mono text-slate-400 font-bold uppercase">Slide 3</span>
              </div>
              <p className="italic text-slate-800">
                "Our technical approach combines sublinear TF-IDF vectorization with multi-field Cosine Similarity calculations across product titles, scopes, and keywords. When a user queries 'pvc insulated wiring', our engine tokenizes and computes exact cosine distance in under <strong>2 milliseconds</strong>, ranking <strong>IS 694:2010</strong> at #1 with a 94% relevance score. The application also supports cross-lingual query expansion in 8 Indian languages for Bharat MSMEs."
              </p>
            </div>

            <div className="bg-[#fafaf7] p-4 rounded-xs border-l-4 border-slate-900 border border-slate-200">
              <div className="flex items-center justify-between mb-1">
                <span className="font-serif font-bold text-slate-900 text-sm">
                  3. Feasibility, Impact &amp; Viability (Slide 4 &amp; 5 • 1:20 - 2:00):
                </span>
                <span className="text-[10px] font-mono text-slate-400 font-bold uppercase">Slide 4 &amp; 5</span>
              </div>
              <p className="italic text-slate-800">
                "Regarding feasibility, we have already indexed a curated corpus of 45+ comprehensive Indian Standards spanning ISI Mandatory Schemes, CRS Schemes, and voluntary standards. The economic impact is immense: it drastically reduces compliance turnaround time from weeks to seconds, preventing costly non-compliance and boosting the export competitiveness of Make-in-India goods."
              </p>
            </div>

            <div className="bg-[#fafaf7] p-4 rounded-xs border-l-4 border-slate-900 border border-slate-200">
              <div className="flex items-center justify-between mb-1">
                <span className="font-serif font-bold text-slate-900 text-sm">
                  4. Validation &amp; Live Inspection (Slide 6 • 2:00 - 2:30):
                </span>
                <span className="text-[10px] font-mono text-slate-400 font-bold uppercase">Slide 6</span>
              </div>
              <p className="italic text-slate-800">
                "We have verified our solution with 8 automated unit test scenarios in our Judge Inspector, checking exact matches, synonym expansion, and multi-lingual queries with 100% deterministic accuracy. Thank you, and we invite the jury to test any product live on our portal."
              </p>
            </div>
          </div>
        </div>
      )}

      {/* VIEW 3: TEAM COLLABORATION MATRIX */}
      {viewMode === 'overview' && (
        <div className="bg-white rounded-xs border border-slate-200 p-6 sm:p-8 shadow-xs">
          <div className="border-b border-slate-200 pb-3 mb-4">
            <h3 className="text-base font-serif font-bold text-slate-900 flex items-center gap-2">
              <Users className="w-4 h-4 text-slate-800" />
              <span>Team KAIROS (#18) — Hackathon Member Ownership Matrix</span>
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Full-stack and ML responsibilities distributed across all 6 team members.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                role: "Member 1: Frontend & UI Lead",
                desc: "React 19 interface, Search Console, Result Cards, and Interactive State Management.",
                files: "src/App.tsx, src/components/SearchHero.tsx, src/components/RecommendationCard.tsx",
                status: "Completed & Verified"
              },
              {
                role: "Member 2: Backend & REST API",
                desc: "FastAPI REST API routes, Pydantic validation schemas, and CORS middleware.",
                files: "backend/main.py, backend/models/schemas.py",
                status: "Completed & Verified"
              },
              {
                role: "Member 3: ML & Similarity Engine",
                desc: "TF-IDF Vectorizer with Sublinear TF, Smooth IDF, and Cosine similarity scoring.",
                files: "src/services/tfidfEngine.ts, backend/services/recommendation_engine.py",
                status: "Completed (<2ms latency)"
              },
              {
                role: "Member 4: Dataset & SQLite Persistence",
                desc: "45+ Curated Indian Standards corpus, SQLite schema, and persistent search history logging.",
                files: "src/data/mockStandardsCatalogue.ts, backend/database/sqlite_db.py",
                status: "Completed & Seeded"
              },
              {
                role: "Member 5: Multilingual & Analytics Lead",
                desc: "8 Indic language translations, cross-lingual keyword dictionary, and Recharts analytics.",
                files: "src/services/i18nService.ts, src/components/AnalyticsDashboard.tsx",
                status: "8 Languages Live"
              },
              {
                role: "Member 6: QA, Judge Inspector & PPT Lead",
                desc: "8 automated test cases, latency benchmarks, README documentation, and PPT pitch deck.",
                files: "src/components/JudgeInspector.tsx, src/components/TeamPitch.tsx, README.md",
                status: "8/8 Unit Tests Passing"
              }
            ].map((m, idx) => (
              <div key={idx} className="bg-[#fafaf7] border border-slate-200 p-5 rounded-xs flex flex-col justify-between">
                <div>
                  <span className="font-serif font-bold text-xs text-slate-900 block mb-1">{m.role}</span>
                  <p className="text-xs text-slate-600 mb-3">{m.desc}</p>
                  <div className="bg-white p-2 rounded-xs border border-slate-200 font-mono text-[10px] text-slate-700 truncate mb-2">
                    {m.files}
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] text-emerald-800 font-bold uppercase tracking-wider pt-2 border-t border-slate-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                  <span>{m.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
