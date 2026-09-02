import React, { useState } from 'react';
import { Standard } from '../types/standards';
import { 
  Sparkles, 
  Send, 
  FileCheck, 
  CheckCircle2, 
  Shield, 
  AlertCircle,
  HelpCircle,
  BookOpen,
  ArrowRight,
  RefreshCw,
  Cpu
} from 'lucide-react';

interface AiComplianceAssistantProps {
  standards: Standard[];
  selectedStandard: Standard | null;
  onSelectStandard: (std: Standard | null) => void;
}

export const AiComplianceAssistant: React.FC<AiComplianceAssistantProps> = ({
  standards,
  selectedStandard,
  onSelectStandard
}) => {
  const [selectedStdId, setSelectedStdId] = useState<string>(selectedStandard?.id || standards[0]?.id || '');
  const [question, setQuestion] = useState('');
  const [loading, setLoading] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<string | null>(null);

  const currentStandard = standards.find(s => s.id === selectedStdId) || standards[0];

  const handleGenerateAdvisor = async (type: 'checklist' | 'testing' | 'roadmap' | 'custom') => {
    setLoading(true);

    // Simulate AI synthesis or call API if available
    setTimeout(() => {
      let output = '';
      if (!currentStandard) {
        setLoading(false);
        return;
      }

      if (type === 'checklist') {
        output = `### 📋 Manufacturing & Factory Compliance Checklist for ${currentStandard.standard_code}
**Product:** ${currentStandard.product}  
**Mandate Scheme:** ${currentStandard.status}

1. **Raw Material Control:** Verify test certificates for all incoming raw materials according to ${currentStandard.standard_code} clause requirements.
2. **In-House Laboratory Setup:** Ensure factory has calibrated testing equipment for:
   ${currentStandard.test_parameters.map(t => `   - ${t}`).join('\n')}
3. **Quality Control Personnel:** Appoint dedicated Quality Assurance engineer responsible for Scheme of Testing and Inspection (STI).
4. **Marking & Packaging:** Product packaging must prominently display the Standard Mark (ISI / CRS logo), License Number (CM/L), and batch tracking identifiers.
5. **Surveillance Audit Readiness:** Maintain 6-month log of in-house routine test results and sample retention racks.`;
      } else if (type === 'testing') {
        output = `### 🧪 Laboratory Testing Protocol Breakdown (${currentStandard.standard_code})
**Title:** ${currentStandard.title}

- **Primary Test Objectives:**
  ${currentStandard.test_parameters.map((t, idx) => `  ${idx + 1}. **${t}:** Mandatory verification under ambient standard testing conditions (27°C ± 2°C).`).join('\n')}

- **Acceptance Quality Limit (AQL):** Standard batch sampling per IS 2500 sampling plan.
- **Harmonized International Standard:** ${currentStandard.harmonized_standard || 'National BIS Standard'}
- **Failure Protocol:** Any failure in high-voltage / impact / toxicity tests leads to immediate batch rejection and quarantine.`;
      } else if (type === 'roadmap') {
        output = `### 🚀 Step-by-Step BIS Certification Roadmap for ${currentStandard.product.split(',')[0]}

1. **Step 1 - Standard Gap Analysis:** Compare existing production specifications against ${currentStandard.standard_code}.
2. **Step 2 - Online Portal Application:** Submit Form-V on the BIS Manakonline portal with technical drawings and raw material test reports.
3. **Step 3 - Factory Audit:** BIS inspection officer visits manufacturing premises to verify manufacturing machinery, quality control, and laboratory test capabilities.
4. **Step 4 - Independent Sample Testing:** Official samples drawn during audit are sent to BIS-approved NABL accredited third-party test labs.
5. **Step 5 - Grant of License (ISI / CRS):** Upon satisfactory test results, BIS issues the official CM/L license allowing standard marking.`;
      } else {
        output = `### 💡 Compliance Assessment for: "${question}"
**Applicable Standard:** ${currentStandard.standard_code} (${currentStandard.title})

- **Applicability:** The query aligns with ${currentStandard.category} regulatory standards.
- **Key Requirement:** Manufacturers must comply with mandatory ${currentStandard.status} provisions before commercial retail distribution in India.
- **Recommended Next Step:** Review ${currentStandard.test_parameters[0] || 'specification parameters'} with certified NABL test partner.`;
      }

      setAnalysisResult(output);
      setLoading(false);
    }, 450);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-xs border border-slate-200 p-6 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-amber-600 text-[10px] font-bold mb-1 uppercase tracking-widest font-mono">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>AI Regulatory &amp; Compliance Advisor</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-900 tracking-tight">
            Standards Compliance &amp; Testing Guide
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Synthesizes statutory testing requirements, factory quality checklists, and BIS licensing roadmaps for any standard.
          </p>
        </div>

        <div className="flex items-center gap-2 bg-[#fafaf7] p-2 rounded-xs border border-slate-200 text-xs">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 font-mono">Select Standard:</span>
          <select
            value={selectedStdId}
            onChange={(e) => {
              setSelectedStdId(e.target.value);
              setAnalysisResult(null);
            }}
            className="bg-white border border-slate-200 rounded-xs px-2.5 py-1 text-xs font-mono font-bold text-slate-900 focus:outline-hidden focus:border-slate-900 cursor-pointer"
          >
            {standards.map((s) => (
              <option key={s.id} value={s.id}>
                {s.standard_code} - {s.product.split(',')[0]}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Action Quick Prompts */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <button
          onClick={() => handleGenerateAdvisor('checklist')}
          disabled={loading}
          className="bg-white hover:bg-[#fafaf7] border border-slate-200 hover:border-slate-400 p-5 rounded-xs text-left transition-all shadow-xs cursor-pointer group"
        >
          <div className="flex items-center gap-2 text-slate-900 font-serif font-bold text-sm mb-1">
            <FileCheck className="w-4 h-4 text-slate-800" />
            <span>Factory Quality Checklist</span>
          </div>
          <p className="text-xs text-slate-500">
            Generate in-house inspection and raw material verification points.
          </p>
        </button>

        <button
          onClick={() => handleGenerateAdvisor('testing')}
          disabled={loading}
          className="bg-white hover:bg-[#fafaf7] border border-slate-200 hover:border-slate-400 p-5 rounded-xs text-left transition-all shadow-xs cursor-pointer group"
        >
          <div className="flex items-center gap-2 text-slate-900 font-serif font-bold text-sm mb-1">
            <CheckCircle2 className="w-4 h-4 text-emerald-700" />
            <span>Laboratory Testing Protocol</span>
          </div>
          <p className="text-xs text-slate-500">
            Detailed breakdown of compulsory physical &amp; chemical test methods.
          </p>
        </button>

        <button
          onClick={() => handleGenerateAdvisor('roadmap')}
          disabled={loading}
          className="bg-white hover:bg-[#fafaf7] border border-slate-200 hover:border-slate-400 p-5 rounded-xs text-left transition-all shadow-xs cursor-pointer group"
        >
          <div className="flex items-center gap-2 text-slate-900 font-serif font-bold text-sm mb-1">
            <ArrowRight className="w-4 h-4 text-amber-600" />
            <span>BIS Licensing Roadmap</span>
          </div>
          <p className="text-xs text-slate-500">
            Step-by-step regulatory certification roadmap for manufacturers.
          </p>
        </button>
      </div>

      {/* Custom Query Input */}
      <div className="bg-white rounded-xs border border-slate-200 p-5 shadow-xs">
        <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-2 font-mono">
          Specific compliance inquiry for {currentStandard?.standard_code}:
        </label>
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="e.g. What are the mandatory testing requirements for conductor resistance?"
            className="flex-1 bg-slate-50 border border-slate-200 rounded-xs px-3 py-2 text-xs text-slate-900 outline-none focus:border-slate-900"
          />
          <button
            onClick={() => handleGenerateAdvisor('custom')}
            disabled={loading || !question.trim()}
            className="bg-slate-900 hover:bg-slate-800 text-amber-400 text-[10px] font-bold uppercase tracking-wider px-4 py-2 rounded-xs shadow-xs flex items-center gap-1.5 transition-colors disabled:opacity-50 cursor-pointer border border-slate-800"
          >
            {loading ? <RefreshCw className="w-3.5 h-3.5 animate-spin text-amber-400" /> : <Send className="w-3.5 h-3.5 text-amber-400" />}
            <span>Analyze</span>
          </button>
        </div>
      </div>

      {/* Output Display Card */}
      {analysisResult ? (
        <div className="bg-white rounded-xs border border-slate-200 p-6 sm:p-8 shadow-xs animate-in fade-in">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
              <span className="font-serif font-bold text-sm text-slate-900">
                Compliance Advisor Output ({currentStandard?.standard_code})
              </span>
            </div>
            <span className="text-[10px] text-slate-400 font-mono uppercase tracking-wider">Status: {currentStandard?.status}</span>
          </div>

          <div className="text-xs sm:text-sm text-slate-800 space-y-3 whitespace-pre-wrap leading-relaxed font-sans">
            {analysisResult}
          </div>

          <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-400 font-mono uppercase tracking-wider">
            <span>Generated using SIH26108 Regulatory Knowledge Base</span>
            <button
              onClick={() => setAnalysisResult(null)}
              className="text-slate-800 hover:text-black font-bold cursor-pointer"
            >
              Clear Analysis
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-[#fafaf7] border border-dashed border-slate-300 rounded-xs p-8 text-center text-slate-500 text-xs">
          <Sparkles className="w-6 h-6 text-slate-400 mx-auto mb-2" />
          <p className="font-serif font-bold text-slate-800 text-sm">Select a prompt above to generate compliance analysis</p>
          <p className="text-slate-400 text-xs mt-1">
            Provides instant testing checklists and factory quality requirements for {currentStandard?.standard_code}.
          </p>
        </div>
      )}
    </div>
  );
};
