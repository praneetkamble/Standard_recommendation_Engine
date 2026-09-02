import React from 'react';
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
  Play
} from 'lucide-react';

export const TeamPitch: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Hero Header */}
      <div className="bg-slate-900 text-white p-6 sm:p-8 rounded-xs border border-slate-800 shadow-xs">
        <div className="flex items-center gap-2 text-amber-400 text-[10px] font-bold uppercase tracking-widest font-mono mb-2">
          <Award className="w-3.5 h-3.5 text-amber-400" />
          <span>GVHAX 2026 / Acharya Hackathon • Problem Statement #42</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
          Standards Recommendation Engine (SIH26108)
        </h2>
        <p className="text-slate-300 text-xs sm:text-sm max-w-3xl mt-2 leading-relaxed">
          A high-performance, deterministic Machine Learning recommender matching informal product descriptions with applicable Indian Standards (IS/BIS) using sublinear TF-IDF vectorization and multi-field Cosine Similarity ranking.
        </p>
      </div>

      {/* 6-Member Team Collaboration Matrix */}
      <div className="bg-white rounded-xs border border-slate-200 p-6 sm:p-8 shadow-xs">
        <h3 className="text-base font-serif font-bold text-slate-900 mb-4 flex items-center gap-2">
          <Users className="w-4 h-4 text-slate-800" />
          <span>Hackathon Team Collaboration &amp; Module Ownership</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              role: "Member 1: Frontend Lead",
              desc: "React 19 interface, Search Console, Result Cards, and Interactive State Management.",
              files: "src/App.tsx, src/components/SearchHero.tsx, src/components/RecommendationCard.tsx",
              status: "Completed & Verified"
            },
            {
              role: "Member 2: Backend & API Lead",
              desc: "FastAPI REST API routes, Pydantic validation schemas, and CORS middleware.",
              files: "backend/main.py, backend/models/schemas.py",
              status: "Completed & Verified"
            },
            {
              role: "Member 3: ML & Recommender Lead",
              desc: "TF-IDF Vectorizer with Sublinear TF, Smooth IDF, and Cosine similarity scoring.",
              files: "src/services/tfidfEngine.ts, backend/services/recommendation_engine.py",
              status: "Completed & Verified (<2ms latency)"
            },
            {
              role: "Member 4: Database & Dataset Lead",
              desc: "45+ Mock Indian Standards corpus, SQLite schema, and persistent search history logging.",
              files: "src/data/mockStandardsCatalogue.ts, backend/database/sqlite_db.py",
              status: "Completed & Seeded"
            },
            {
              role: "Member 5: UI/UX & Data Visualizer",
              desc: "Responsive layout, Recharts analytics, accessibility, and high-contrast styling.",
              files: "src/components/AnalyticsDashboard.tsx, src/components/FilterSidebar.tsx",
              status: "Completed & Polished"
            },
            {
              role: "Member 6: QA & Judge Presentation",
              desc: "7 automated test cases, latency benchmarks, README documentation, and pitch script.",
              files: "backend/test_engine.py, README.md, src/components/JudgeInspector.tsx",
              status: "7/7 Unit Tests Passing"
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

      {/* 2-3 Minute Judge Pitch Script */}
      <div className="bg-white rounded-xs border border-slate-200 p-6 sm:p-8 shadow-xs space-y-4">
        <h3 className="text-base font-serif font-bold text-slate-900 flex items-center gap-2">
          <Play className="w-4 h-4 text-slate-800 fill-slate-800" />
          <span>2–3 Minute Presentation Script for the Jury</span>
        </h3>

        <div className="space-y-3 text-xs text-slate-700 leading-relaxed">
          <div className="bg-[#fafaf7] p-4 rounded-xs border-l-2 border-slate-900 border border-slate-200">
            <span className="font-serif font-bold text-slate-900 block mb-1 text-sm">1. The Problem Statement (0:00 - 0:30):</span>
            "Respected judges, Indian manufacturers and MSMEs face major compliance hurdles identifying the exact Indian Standards applicable to their products among 20,000+ BIS documents. For Problem Statement #42 (SIH26108), our team developed this intelligent Standards Recommendation Engine."
          </div>

          <div className="bg-[#fafaf7] p-4 rounded-xs border-l-2 border-slate-900 border border-slate-200">
            <span className="font-serif font-bold text-slate-900 block mb-1 text-sm">2. Core Machine Learning Architecture (0:30 - 1:15):</span>
            "When a user enters a product like 'Electrical cable for domestic use', our system converts the input into TF-IDF vectors using sublinear term frequency and smooth inverse document frequency. It computes cosine similarity across product names, keywords, and scopes, ranking IS 694:2010 at #1 with a 94% confidence score in under 2 milliseconds."
          </div>

          <div className="bg-[#fafaf7] p-4 rounded-xs border-l-2 border-slate-900 border border-slate-200">
            <span className="font-serif font-bold text-slate-900 block mb-1 text-sm">3. Live Drill-Down &amp; Features (1:15 - 1:45):</span>
            "The platform provides deep inspection into mandatory laboratory testing parameters, Scheme-I Mandatory ISI marks vs Scheme-II CRS certifications, full filtering by industry sector, and persistent search histories stored in SQLite."
          </div>

          <div className="bg-[#fafaf7] p-4 rounded-xs border-l-2 border-slate-900 border border-slate-200">
            <span className="font-serif font-bold text-slate-900 block mb-1 text-sm">4. Verification &amp; Future Scope (1:45 - 2:30):</span>
            "Our automated test suite runs 7 critical unit tests including exact matches, partial matches, and negative unrelated queries. In future phases, this architecture scales effortlessly to all 20,000+ standards with multilingual Indian language support."
          </div>
        </div>
      </div>
    </div>
  );
};
