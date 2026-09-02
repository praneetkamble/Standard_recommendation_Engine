import { LanguageCode } from '../types/i18n';

export interface TranslationDictionary {
  // Common & Navigation
  portalTitle: string;
  portalSubtitle: string;
  hackathonTag: string;
  problemStatement: string;
  engineOnline: string;
  tabRecommender: string;
  tabCatalogue: string;
  tabAnalytics: string;
  tabInspector: string;
  tabAiAdvisor: string;
  tabPitch: string;
  historyBtn: string;
  selectLanguage: string;
  language: string;

  // Search Hero
  heroEyebrow: string;
  heroHeadline: string;
  heroHeadlineHighlight: string;
  searchPlaceholder: string;
  searchBtn: string;
  searchingBtn: string;
  clearInput: string;
  latencyLabel: string;
  matchedCountLabel: string;
  sampleQueriesTitle: string;
  engineSettings: string;
  minConfidenceLabel: string;
  topKLabel: string;
  closeSettings: string;
  samplePvcCable: string;
  sampleWater: string;
  sampleSolar: string;
  sampleCement: string;
  sampleHelmet: string;
  sampleLed: string;
  sampleBattery: string;
  sampleSteel: string;

  // Filter Sidebar
  refineTitle: string;
  resetAll: string;
  filterCategory: string;
  filterIndustry: string;
  filterStatus: string;
  allCategories: string;
  allIndustries: string;
  allStatuses: string;
  totalStandardsBadge: string;

  // Results & Recommendation Card
  resultsSummary: string;
  sortByRelevance: string;
  sortByCode: string;
  sortByYear: string;
  exportDossier: string;
  noResultsTitle: string;
  noResultsSubtitle: string;
  matchScore: string;
  highMatch: string;
  mediumMatch: string;
  lowMatch: string;
  mandatoryMark: string;
  crsMark: string;
  voluntaryMark: string;
  harmonizationLabel: string;
  viewDetails: string;
  askAi: string;
  copyCode: string;
  copied: string;
  keyTestingParams: string;
  whyRecommended: string;
  topTokens: string;

  // Standard Detail Modal
  modalScopeTitle: string;
  modalTestingTitle: string;
  modalKeywordsTitle: string;
  modalYear: string;
  modalHarmonization: string;
  modalNotice: string;
  printSpec: string;
  closeModal: string;

  // Analytics Dashboard
  metricCorpus: string;
  metricCorpusSub: string;
  metricCategories: string;
  metricCategoriesSub: string;
  metricQueries: string;
  metricQueriesSub: string;
  metricLatency: string;
  metricLatencySub: string;
  chartCategoryTitle: string;
  chartComplianceTitle: string;
  recentQueriesTitle: string;
  coverageSectorTitle: string;

  // Judge Inspector
  inspectorTitle: string;
  inspectorSubtitle: string;
  runAllTests: string;
  runningTests: string;
  tabAutomatedTests: string;
  tabLiveVector: string;
  tabFormulas: string;
  allTestsPassed: string;
  avgLatency: string;
  statusCol: string;
  queryCol: string;
  expectedCol: string;
  scoreCol: string;
  executionCol: string;

  // AI Compliance Assistant
  aiTitle: string;
  aiSubtitle: string;
  aiSelectStandard: string;
  btnFactoryChecklist: string;
  btnFactoryChecklistDesc: string;
  btnLabProtocol: string;
  btnLabProtocolDesc: string;
  btnBisRoadmap: string;
  btnBisRoadmapDesc: string;
  customQueryLabel: string;
  customQueryPlaceholder: string;
  analyzeBtn: string;
  analyzingBtn: string;
  aiOutputTitle: string;
  clearAnalysis: string;
  aiPlaceholderPrompt: string;
  aiPlaceholderSub: string;

  // Team Pitch
  pitchTitle: string;
  pitchSubtitle: string;
  teamMatrixTitle: string;
  presentationScriptTitle: string;

  // Search History Drawer
  historyTitle: string;
  noHistory: string;
  noHistorySub: string;
  exportJson: string;
  clearHistory: string;
  rerunSearch: string;

  // Export Modal
  exportTitle: string;
  activeQueryLabel: string;
  exportSummary: string;
  exportCsv: string;
  exportCsvSub: string;
  exportPdf: string;
  exportPdfSub: string;
  exportJsonOption: string;
  exportJsonOptionSub: string;

  // Catalogue Admin
  adminTitle: string;
  adminSubtitle: string;
  addNewStandard: string;
  searchCataloguePlaceholder: string;
  codeCol: string;
  titleCol: string;
  categoryCol: string;
  industryCol: string;
  actionsCol: string;

  // Shortcuts and Aliases
  rankedStandards: string;
  sortRelevance: string;
  sortCode: string;
  sortYear: string;
  noResults: string;
  noResultsSub: string;
  resetFilters: string;
  downloadCsv: string;
  copyJson: string;
  voluntaryStandard: string;
  topMatch: string;
  resultsFound: string;
}

const RAW_TRANSLATIONS: Record<LanguageCode, Omit<TranslationDictionary, 'rankedStandards' | 'sortRelevance' | 'sortCode' | 'sortYear' | 'noResults' | 'noResultsSub' | 'resetFilters' | 'downloadCsv' | 'copyJson' | 'voluntaryStandard' | 'topMatch' | 'resultsFound'>> = {
  en: {
    portalTitle: 'Standards Recommend',
    portalSubtitle: 'Indian Standards (IS/BIS) Recommendation Engine',
    hackathonTag: 'GVHAX 2026 / Acharya Hackathon',
    problemStatement: 'Problem Statement #42 (SIH26108)',
    engineOnline: 'Engine Online (<2ms)',
    tabRecommender: 'Recommender',
    tabCatalogue: 'Catalogue',
    tabAnalytics: 'Analytics',
    tabInspector: 'Judge & ML Inspector',
    tabAiAdvisor: 'AI Advisor',
    tabPitch: 'Pitch Deck',
    historyBtn: 'History',
    selectLanguage: 'Select Language',
    language: 'Language',

    heroEyebrow: 'SIH26108 • Sublinear TF-IDF + Cosine Metric',
    heroHeadline: 'Identify the standard for',
    heroHeadlineHighlight: 'your product.',
    searchPlaceholder: "e.g. Electrical cable for domestic use, Portland cement, packaged drinking water...",
    searchBtn: 'Search',
    searchingBtn: 'Matching...',
    clearInput: 'Clear search input',
    latencyLabel: 'Query Latency',
    matchedCountLabel: 'Standards Matched',
    sampleQueriesTitle: 'Frequent Product Searches:',
    engineSettings: 'Algorithm Parameters',
    minConfidenceLabel: 'Min Match Confidence Score',
    topKLabel: 'Max Recommendations (Top-K)',
    closeSettings: 'Close Settings',
    samplePvcCable: 'PVC Insulated Cable',
    sampleWater: 'Packaged Drinking Water',
    sampleSolar: 'Solar PV Modules',
    sampleCement: 'Ordinary Portland Cement',
    sampleHelmet: 'Industrial Safety Helmet',
    sampleLed: 'LED Self-Ballasted Lamps',
    sampleBattery: 'Lithium-ion Battery Pack',
    sampleSteel: 'Structural Steel Bars (TMT)',

    refineTitle: 'Refine Recommendations',
    resetAll: 'Reset All',
    filterCategory: 'Product Category',
    filterIndustry: 'Industry Sector',
    filterStatus: 'BIS Certification Scheme',
    allCategories: 'All Categories',
    allIndustries: 'All Industries',
    allStatuses: 'All Statuses',
    totalStandardsBadge: 'Standards in Corpus',

    resultsSummary: 'Ranked Indian Standards',
    sortByRelevance: 'Sort: Highest Relevance',
    sortByCode: 'Sort: Standard Code (IS)',
    sortByYear: 'Sort: Publication Year',
    exportDossier: 'Export Dossier',
    noResultsTitle: 'No Matching Indian Standards Found',
    noResultsSubtitle: 'Try adjusting your search terms, lowering the minimum confidence threshold, or clearing active category filters.',
    matchScore: 'Match Score',
    highMatch: 'Strong Match',
    mediumMatch: 'Moderate Match',
    lowMatch: 'Partial Overlap',
    mandatoryMark: 'Mandatory ISI Mark',
    crsMark: 'Compulsory Registration (CRS)',
    voluntaryMark: 'Voluntary Standard',
    harmonizationLabel: 'Harmonization',
    viewDetails: 'View Specification & Test Protocol',
    askAi: 'AI Quality Advisor',
    copyCode: 'Copy Standard Code',
    copied: 'Copied!',
    keyTestingParams: 'Key Laboratory Testing Parameters',
    whyRecommended: 'Why was this standard matched?',
    topTokens: 'Weighted query tokens',

    modalScopeTitle: 'Standard Scope & Applicable Products',
    modalTestingTitle: 'Mandatory Testing & Quality Parameters',
    modalKeywordsTitle: 'Indexing Keywords & Vocabulary',
    modalYear: 'Published Year',
    modalHarmonization: 'Harmonization',
    modalNotice: 'Hackathon Evaluation Notice: This record is part of the demonstration catalogue for SIH26108 / GVHAX 2026. For statutory industrial production, refer to official Bureau of Indian Standards documentation.',
    printSpec: 'Print Specification',
    closeModal: 'Close',

    metricCorpus: 'Standards in Corpus',
    metricCorpusSub: 'Full BIS Mock Dataset',
    metricCategories: 'Product Categories',
    metricCategoriesSub: 'Electrical, Civil, Safety & More',
    metricQueries: 'Queries Processed',
    metricQueriesSub: 'SQLite Audit Store',
    metricLatency: 'TF-IDF Latency',
    metricLatencySub: 'In-Memory Vector Space',
    chartCategoryTitle: 'Standards by Product Category',
    chartComplianceTitle: 'Compliance Scheme Distribution',
    recentQueriesTitle: 'Recent & Frequent Search Queries',
    coverageSectorTitle: 'Corpus Coverage by Sector',

    inspectorTitle: 'Problem Statement #42 (SIH26108) Inspector',
    inspectorSubtitle: 'Deterministic verification of TF-IDF vectorization, Cosine similarity metric, and automated test cases.',
    runAllTests: 'Run All Unit Tests',
    runningTests: 'Running Suite...',
    tabAutomatedTests: 'Automated Test Suite',
    tabLiveVector: 'Live Vector & Token Inspector',
    tabFormulas: 'TF-IDF Mathematical Formulas',
    allTestsPassed: 'All 7 Test Scenarios Validated Deterministically',
    avgLatency: 'Avg Latency: ~1.2ms',
    statusCol: 'Status',
    queryCol: 'Test Case & Query',
    expectedCol: 'Expected Target',
    scoreCol: 'Cosine Score',
    executionCol: 'Latency',

    aiTitle: 'Standards Compliance & Testing Guide',
    aiSubtitle: 'Instant factory checklists, compulsory testing protocols, and BIS licensing roadmaps.',
    aiSelectStandard: 'Select Standard:',
    btnFactoryChecklist: 'Factory Quality Checklist',
    btnFactoryChecklistDesc: 'Generate in-house inspection and raw material verification points.',
    btnLabProtocol: 'Laboratory Testing Protocol',
    btnLabProtocolDesc: 'Detailed breakdown of compulsory physical & chemical test methods.',
    btnBisRoadmap: 'BIS Licensing Roadmap',
    btnBisRoadmapDesc: 'Step-by-step regulatory certification roadmap for manufacturers.',
    customQueryLabel: 'Specific compliance inquiry for',
    customQueryPlaceholder: 'e.g. What are the mandatory testing requirements for conductor resistance?',
    analyzeBtn: 'Analyze',
    analyzingBtn: 'Analyzing...',
    aiOutputTitle: 'Compliance Advisor Output',
    clearAnalysis: 'Clear Analysis',
    aiPlaceholderPrompt: 'Select a prompt above to generate compliance analysis',
    aiPlaceholderSub: 'Provides instant testing checklists and factory quality requirements.',

    pitchTitle: 'Standards Recommendation Engine (SIH26108)',
    pitchSubtitle: 'Official Hackathon Presentation & Jury Evaluation Dossier',
    teamMatrixTitle: 'Hackathon Team Collaboration & Module Ownership',
    presentationScriptTitle: '2–3 Minute Presentation Script for the Jury',

    historyTitle: 'Search History',
    noHistory: 'No past search queries yet.',
    noHistorySub: 'Search for any product to build SQLite search history.',
    exportJson: 'Export History JSON',
    clearHistory: 'Clear History',
    rerunSearch: 'Rerun Search',

    exportTitle: 'Export Recommendation Dossier',
    activeQueryLabel: 'Active Query:',
    exportSummary: 'Exporting ranked Indian Standards recommendations along with similarity scores, test parameters, and justifications.',
    exportCsv: 'Download CSV Spreadsheet',
    exportCsvSub: 'Tabular report with IS codes, titles, scores, test parameters, and schemes.',
    exportPdf: 'Print / Save as PDF',
    exportPdfSub: 'Pre-formatted print-ready statutory compliance report layout.',
    exportJsonOption: 'Copy Structured JSON',
    exportJsonOptionSub: 'Machine-readable payload with complete mathematical vector breakdown.',

    adminTitle: 'Indian Standards (BIS) Repository',
    adminSubtitle: 'Explore, manage, and expand the underlying standards dataset.',
    addNewStandard: 'Add New Standard',
    searchCataloguePlaceholder: 'Search catalogue by code, title, or category...',
    codeCol: 'IS Code',
    titleCol: 'Title & Product Scope',
    categoryCol: 'Category',
    industryCol: 'Sector',
    actionsCol: 'Actions'
  },

  hi: {
    portalTitle: 'मानक अनुशंसा (Standards Recommend)',
    portalSubtitle: 'भारतीय मानक (IS/BIS) अनुशंसा प्रणाली',
    hackathonTag: 'GVHAX 2026 / आचार्य हैकाथॉन',
    problemStatement: 'समस्या विवरण #42 (SIH26108)',
    engineOnline: 'इंजन ऑनलाइन (<2ms)',
    tabRecommender: 'मानक खोज',
    tabCatalogue: 'मानक सूची',
    tabAnalytics: 'एनालिटिक्स',
    tabInspector: 'जज व एमएल सत्यापन',
    tabAiAdvisor: 'एआई अनुपालन सलाहकार',
    tabPitch: 'टीम प्रस्तुति (Pitch)',
    historyBtn: 'इतिहास',
    selectLanguage: 'भाषा चुनें',
    language: 'भाषा',

    heroEyebrow: 'SIH26108 • सबलीनियर TF-IDF + कोसाइन सिमिलैरिटी',
    heroHeadline: 'अपने उत्पाद के लिए सही मानक',
    heroHeadlineHighlight: 'पहचानें।',
    searchPlaceholder: 'उदा. घरेलू बिजली का तार, पोर्टलैंड सीमेंट, पैकेज्ड पीने का पानी, हेलमेट...',
    searchBtn: 'खोजें',
    searchingBtn: 'मैचिंग जारी...',
    clearInput: 'खोज हटाएं',
    latencyLabel: 'क्वेरी लेटेंसी',
    matchedCountLabel: 'प्रासंगिक मानक मिले',
    sampleQueriesTitle: 'लोकप्रिय उत्पाद खोज:',
    engineSettings: 'एल्गोरिदम सेटिंग्स',
    minConfidenceLabel: 'न्यूनतम मैच स्कोर सीमा',
    topKLabel: 'अधिकतम अनुशंसाएं (Top-K)',
    closeSettings: 'सेटिंग्स बंद करें',
    samplePvcCable: 'पीवीसी विद्युत तार (PVC Cable)',
    sampleWater: 'पैकेज्ड पेयजल (Drinking Water)',
    sampleSolar: 'सौर पैनल (Solar PV)',
    sampleCement: 'पोर्टलैंड सीमेंट (Cement)',
    sampleHelmet: 'सुरक्षा हेलमेट (Safety Helmet)',
    sampleLed: 'एलईडी बल्ब (LED Lamps)',
    sampleBattery: 'लिथियम बैटरी (Li-ion Battery)',
    sampleSteel: 'स्टील टीएमटी सरिया (Steel Bar)',

    refineTitle: 'फ़िल्टर एवं शुद्धीकरण',
    resetAll: 'सभी रीसेट करें',
    filterCategory: 'उत्पाद श्रेणी',
    filterIndustry: 'उद्योग क्षेत्र',
    filterStatus: 'बीआईएस प्रमाणन योजना',
    allCategories: 'सभी श्रेणियां',
    allIndustries: 'सभी उद्योग',
    allStatuses: 'सभी योजनाएं',
    totalStandardsBadge: 'कुल मानक डेटाबेस में',

    resultsSummary: 'प्रासंगिक भारतीय मानक (Ranked IS Standards)',
    sortByRelevance: 'क्रम: उच्चतम प्रासंगिकता',
    sortByCode: 'क्रम: मानक कोड (IS Code)',
    sortByYear: 'क्रम: प्रकाशन वर्ष',
    exportDossier: 'रिपोर्ट निर्यात करें',
    noResultsTitle: 'कोई प्रासंगिक भारतीय मानक नहीं मिला',
    noResultsSubtitle: 'कृपया अन्य उत्पाद नाम आज़माएँ या न्यूनतम स्कोर सीमा कम करें।',
    matchScore: 'मैच स्कोर',
    highMatch: 'उत्कृष्ट मैच',
    mediumMatch: 'मध्यम मैच',
    lowMatch: 'आंशिक मैच',
    mandatoryMark: 'अनिवार्य आईएसआई मार्क (ISI)',
    crsMark: 'अनिवार्य पंजीकरण (CRS)',
    voluntaryMark: 'स्वैच्छिक मानक',
    harmonizationLabel: 'अंतर्राष्ट्रीय सामंजस्य',
    viewDetails: 'पूर्ण विनिर्देश एवं परीक्षण देखें',
    askAi: 'एआई गुणवत्ता सलाहकार',
    copyCode: 'मानक कोड कॉपी करें',
    copied: 'कॉपी हुआ!',
    keyTestingParams: 'अनिवार्य प्रयोगशाला परीक्षण मापदंड',
    whyRecommended: 'यह मानक क्यों अनुशंसित किया गया?',
    topTokens: 'मैच हुए कीवर्ड टोकन',

    modalScopeTitle: 'मानक का दायरा एवं लागू उत्पाद',
    modalTestingTitle: 'अनिवार्य परीक्षण एवं गुणवत्ता मानक',
    modalKeywordsTitle: 'इंडेक्सिंग कीवर्ड्स व शब्दावली',
    modalYear: 'प्रकाशन वर्ष',
    modalHarmonization: 'अंतर्राष्ट्रीय मानक',
    modalNotice: 'हैकाथॉन मूल्यांकन सूचना: यह रिकॉर्ड SIH26108 / GVHAX 2026 के प्रदर्शन के लिए है। वैधानिक उत्पादन हेतु भारतीय मानक ब्यूरो (BIS) के आधिकारिक पोर्टल का संदर्भ लें।',
    printSpec: 'विनिर्देश प्रिंट करें',
    closeModal: 'बंद करें',

    metricCorpus: 'डेटाबेस में कुल मानक',
    metricCorpusSub: 'संपूर्ण बीआईएस डेटासेट',
    metricCategories: 'उत्पाद श्रेणियां',
    metricCategoriesSub: 'विद्युत, सिविल, सुरक्षा एवं अन्य',
    metricQueries: 'प्रसंस्कृत खोजें',
    metricQueriesSub: 'SQLite ऑडिट लॉग',
    metricLatency: 'TF-IDF लेटेंसी',
    metricLatencySub: 'इन-मेमोरी वेक्टर गणना',
    chartCategoryTitle: 'उत्पाद श्रेणी अनुसार मानक',
    chartComplianceTitle: 'प्रमाणन योजना वितरण',
    recentQueriesTitle: 'हाल ही में खोजी गई क्वेरी',
    coverageSectorTitle: 'उद्योग क्षेत्र कवरेज',

    inspectorTitle: 'समस्या विवरण #42 (SIH26108) विश्लेषक',
    inspectorSubtitle: 'TF-IDF वेक्टराइजेशन, कोसाइन सिमिलैरिटी और 7 यूनिट टेस्ट केस का सत्यापन।',
    runAllTests: 'सभी यूनिट टेस्ट चलाएं',
    runningTests: 'टेस्ट चल रहे हैं...',
    tabAutomatedTests: 'स्वचालित टेस्ट सुइट',
    tabLiveVector: 'लाइव वेक्टर व टोकन विश्लेषक',
    tabFormulas: 'TF-IDF गणितीय सूत्र',
    allTestsPassed: 'सभी 7 टेस्ट परिदृश्य सफलतापूर्वक उत्तीर्ण (Passed)',
    avgLatency: 'औसत लेटेंसी: ~1.2ms',
    statusCol: 'स्थिति',
    queryCol: 'टेस्ट केस व क्वेरी',
    expectedCol: 'अपेक्षित मानक',
    scoreCol: 'कोसाइन स्कोर',
    executionCol: 'लेटेंसी',

    aiTitle: 'मानक अनुपालन एवं परीक्षण गाइड',
    aiSubtitle: 'फैक्ट्री चेकलिस्ट, अनिवार्य परीक्षण और बीआईएस लाइसेंसिंग प्रक्रिया गाइड।',
    aiSelectStandard: 'मानक चुनें:',
    btnFactoryChecklist: 'फैक्ट्री गुणवत्ता चेकलिस्ट',
    btnFactoryChecklistDesc: 'इन-हाउस निरीक्षण एवं कच्चा माल सत्यापन बिंदु प्राप्त करें।',
    btnLabProtocol: 'प्रयोगशाला परीक्षण प्रोटोकॉल',
    btnLabProtocolDesc: 'अनिवार्य भौतिक और रासायनिक परीक्षण विधियों का विवरण।',
    btnBisRoadmap: 'बीआईएस लाइसेंसिंग रोडमैप',
    btnBisRoadmapDesc: 'निर्माताओं के लिए चरण-दर-चरण प्रमाणन प्रक्रिया।',
    customQueryLabel: 'विशिष्ट अनुपालन प्रश्न पूछें:',
    customQueryPlaceholder: 'उदा. कंडक्टर प्रतिरोध के लिए अनिवार्य परीक्षण क्या हैं?',
    analyzeBtn: 'विश्लेषण करें',
    analyzingBtn: 'विश्लेषण जारी...',
    aiOutputTitle: 'एआई अनुपालन सलाहकार परिणाम',
    clearAnalysis: 'परिणाम हटाएं',
    aiPlaceholderPrompt: 'अनुपालन विश्लेषण प्राप्त करने के लिए ऊपर दिए गए विकल्प चुनें',
    aiPlaceholderSub: 'चयनित मानक के लिए तत्काल गुणवत्ता चेकलिस्ट और अनिवार्य परीक्षण दिशानिर्देश प्रदान करता है।',

    pitchTitle: 'भारतीय मानक अनुशंसा इंजन (SIH26108)',
    pitchSubtitle: 'हैकाथॉन प्रस्तुति एवं जूरी मूल्यांकन दस्तावेज',
    teamMatrixTitle: 'हैकाथॉन टीम सहयोग एवं मॉड्यूल विवरण',
    presentationScriptTitle: 'जूरी के लिए 2-3 मिनट की प्रस्तुति स्क्रिप्ट',

    historyTitle: 'खोज इतिहास (Search History)',
    noHistory: 'अभी तक कोई खोज इतिहास नहीं है।',
    noHistorySub: 'SQLite में इतिहास बनाने के लिए किसी उत्पाद की खोज करें।',
    exportJson: 'इतिहास JSON डाउनलोड करें',
    clearHistory: 'इतिहास साफ करें',
    rerunSearch: 'पुनः खोजें',

    exportTitle: 'अनुशंसा रिपोर्ट निर्यात करें',
    activeQueryLabel: 'सक्रिय खोज क्वेरी:',
    exportSummary: 'रैंक किए गए भारतीय मानक, मैच स्कोर, परीक्षण मापदंड और विवरण निर्यात किया जा रहा है।',
    exportCsv: 'CSV स्प्रेडशीट डाउनलोड करें',
    exportCsvSub: 'आईएस कोड, शीर्षक, स्कोर और परीक्षण मापदंडों वाली तालिका।',
    exportPdf: 'प्रिंट / PDF के रूप में सहेजें',
    exportPdfSub: 'वैधानिक अनुपालन के लिए प्रिंट-रेडी प्रारूप।',
    exportJsonOption: 'JSON पेलोड कॉपी करें',
    exportJsonOptionSub: 'गणितीय वेक्टर विवरण सहित मशीन-रीडेबल डेटा।',

    adminTitle: 'भारतीय मानक (BIS) रिपॉजिटरी',
    adminSubtitle: 'मानक डेटासेट देखें, प्रबंधित करें और नए मानक जोड़ें।',
    addNewStandard: 'नया मानक जोड़ें',
    searchCataloguePlaceholder: 'कोड, शीर्षक या श्रेणी द्वारा खोजें...',
    codeCol: 'आईएस कोड',
    titleCol: 'शीर्षक व उत्पाद दायरा',
    categoryCol: 'श्रेणी',
    industryCol: 'उद्योग',
    actionsCol: 'कार्रवाई'
  },

  mr: {
    portalTitle: 'मानक शिफारस प्रणाली (Standards Recommend)',
    portalSubtitle: 'भारतीय मानक (IS/BIS) शिफारस इंजिन',
    hackathonTag: 'GVHAX 2026 / आचार्य हॅकाथॉन',
    problemStatement: 'समस्या विवरण #42 (SIH26108)',
    engineOnline: 'इंजिन कार्यरत (<2ms)',
    tabRecommender: 'मानक शोध',
    tabCatalogue: 'कॅटलॉग',
    tabAnalytics: 'अॅनालिटिक्स',
    tabInspector: 'परीक्षक व ML पडताळणी',
    tabAiAdvisor: 'AI अनुपालन सल्लागार',
    tabPitch: 'सादरीकरण (Pitch)',
    historyBtn: 'इतिहास',
    selectLanguage: 'भाषा निवडा',
    language: 'भाषा',

    heroEyebrow: 'SIH26108 • सबलिनियर TF-IDF + कोसाइन सिमिलॅरिटी',
    heroHeadline: 'आपल्या उत्पादनासाठी अचूक मानक',
    heroHeadlineHighlight: 'शोधा.',
    searchPlaceholder: 'उदा. घरगुती विजेची वायर, सिमेंट, बाटलीबंद पाणी, हेल्मेट, सौर पॅनेल...',
    searchBtn: 'शोधा',
    searchingBtn: 'शोधत आहे...',
    clearInput: 'शोध मजकूर पुसा',
    latencyLabel: 'क्वेरी वेळ',
    matchedCountLabel: 'प्रासंगिक मानके',
    sampleQueriesTitle: 'वारंवार शोधली जाणारी उत्पादने:',
    engineSettings: 'अल्गोरिदम पॅरामीटर्स',
    minConfidenceLabel: 'किमान अचूकता मर्यादा (Min Score)',
    topKLabel: 'कमाल शिफारसी (Top-K)',
    closeSettings: 'सेटिंग्ज बंद करा',
    samplePvcCable: 'पीव्हीसी वायर (PVC Cable)',
    sampleWater: 'पॅक केलेले पिण्याचे पाणी (Water)',
    sampleSolar: 'सौर पॅनेल (Solar PV)',
    sampleCement: 'पोर्टलँड सिमेंट (Cement)',
    sampleHelmet: 'सुरक्षा हेल्मेट (Safety Helmet)',
    sampleLed: 'एलईडी दिवे (LED Lamp)',
    sampleBattery: 'लिथियम बॅटरी (Battery)',
    sampleSteel: 'टीएमटी स्टील बार (Steel)',

    refineTitle: 'फिल्टर व वर्गीकरण',
    resetAll: 'सर्व रीसेट करा',
    filterCategory: 'उत्पादन वर्ग',
    filterIndustry: 'उद्योग क्षेत्र',
    filterStatus: 'बीआयएस प्रमाणन योजना',
    allCategories: 'सर्व वर्ग',
    allIndustries: 'सर्व उद्योग',
    allStatuses: 'सर्व योजना',
    totalStandardsBadge: 'एकूण उपलब्ध मानके',

    resultsSummary: 'प्रासंगिक भारतीय मानके (Ranked IS Standards)',
    sortByRelevance: 'क्रम: सर्वोच्च प्रासंगिकता',
    sortByCode: 'क्रम: मानक कोड (IS Code)',
    sortByYear: 'क्रम: प्रकाशन वर्ष',
    exportDossier: 'अहवाल डाउनलोड करा',
    noResultsTitle: 'कोणतेही जुळणारे मानक सापडले नाही',
    noResultsSubtitle: 'कृपया वेगळे शब्द वापरून शोधा किंवा स्कोअर मर्यादा कमी करा.',
    matchScore: 'मॅच स्कोअर',
    highMatch: 'उत्तम जुळणी',
    mediumMatch: 'मध्यम जुळणी',
    lowMatch: 'अंशतः जुळणी',
    mandatoryMark: 'अनिवार्य आयएसआय मार्क (ISI)',
    crsMark: 'अनिवार्य नोंदणी (CRS)',
    voluntaryMark: 'ऐच्छिक मानक',
    harmonizationLabel: 'आंतरराष्ट्रीय सुसंगतता',
    viewDetails: 'तपशील व चाचणी पद्धती पहा',
    askAi: 'AI गुणवत्ता सल्लागार',
    copyCode: 'मानक कोड कॉपी करा',
    copied: 'कॉपी झाले!',
    keyTestingParams: 'अनिवार्य प्रयोगशाळा चाचणी निकष',
    whyRecommended: 'हे मानक का शिफारस केले गेले?',
    topTokens: 'जुळलेले कीवर्ड्स',

    modalScopeTitle: 'मानकाची व्याप्ती व उत्पादने',
    modalTestingTitle: 'अनिवार्य चाचणी व गुणवत्ता निकष',
    modalKeywordsTitle: 'इंडेक्सिंग कीवर्ड्स',
    modalYear: 'प्रकाशन वर्ष',
    modalHarmonization: 'आंतरराष्ट्रीय मानक',
    modalNotice: 'हॅकाथॉन मूल्यमापन सूचना: हा डेटा SIH26108 / GVHAX 2026 प्रात्यक्षिकासाठी आहे. अधिकृत उत्पादन नियमांसाठी बीआयएस (BIS) च्या अधिकृत संकेतस्थळास भेट द्या.',
    printSpec: 'तपशील प्रिंट करा',
    closeModal: 'बंद करा',

    metricCorpus: 'एकूण मानके',
    metricCorpusSub: 'संपूर्ण बीआयएस डेटासेट',
    metricCategories: 'उत्पादन वर्ग',
    metricCategoriesSub: 'विद्युत, सिव्हिल, सुरक्षा व इतर',
    metricQueries: 'प्रक्रिया केलेले शोध',
    metricQueriesSub: 'SQLite डेटाबेस',
    metricLatency: 'TF-IDF लेटन्सी',
    metricLatencySub: 'अतिजलद गणना',
    chartCategoryTitle: 'उत्पादन वर्गानुसार मानके',
    chartComplianceTitle: 'प्रमाणन योजना वितरण',
    recentQueriesTitle: 'अलीकडील शोध क्वेरीज',
    coverageSectorTitle: 'उद्योग क्षेत्र विस्तार',

    inspectorTitle: 'समस्या #42 (SIH26108) मूल्यमापन प्रणाली',
    inspectorSubtitle: 'TF-IDF, कोसाइन सिमिलॅरिटी व युनिट टेस्ट केसेसची पडताळणी.',
    runAllTests: 'सर्व युनिट टेस्ट चालवा',
    runningTests: 'चाचण्या सुरू आहेत...',
    tabAutomatedTests: 'स्वयंचलित चाचणी संच',
    tabLiveVector: 'लाइव्ह व्हेक्टर विश्लेषक',
    tabFormulas: 'TF-IDF गणितीय सूत्रे',
    allTestsPassed: 'सर्व 7 चाचण्या यशस्वीरित्या उत्तीर्ण (Passed)',
    avgLatency: 'सरासरी वेळ: ~1.2ms',
    statusCol: 'स्थिती',
    queryCol: 'चाचणी क्वेरी',
    expectedCol: 'अपेक्षित मानक',
    scoreCol: 'कोसाइन स्कोअर',
    executionCol: 'वेळ',

    aiTitle: 'मानक अनुपालन व चाचणी मार्गदर्शक',
    aiSubtitle: 'फॅक्टरी तपासणी सूची, चाचणी पद्धती आणि बीआयएस परवाना मार्गदर्शक.',
    aiSelectStandard: 'मानक निवडा:',
    btnFactoryChecklist: 'फॅक्टरी गुणवत्ता चेकलिस्ट',
    btnFactoryChecklistDesc: 'कच्चा माल तपासणी व इन-हाउस गुणवत्ता मुद्दे मिळवा.',
    btnLabProtocol: 'प्रयोगशाळा चाचणी पद्धती',
    btnLabProtocolDesc: 'अनिवार्य भौतिक व रासायनिक चाचण्यांचे तपशील.',
    btnBisRoadmap: 'बीआयएस परवाना प्रक्रिया',
    btnBisRoadmapDesc: 'उत्पादकांसाठी टप्प्याटप्प्याने प्रमाणन मार्गदर्शक.',
    customQueryLabel: 'अनुपालनाबाबत विशिष्ट प्रश्न विचारा:',
    customQueryPlaceholder: 'उदा. कंडक्टर रेझिस्टन्स चाचणीसाठी काय निकष आहेत?',
    analyzeBtn: 'विश्लेषण करा',
    analyzingBtn: 'विश्लेषण सुरू आहे...',
    aiOutputTitle: 'AI अनुपालन अहवाल',
    clearAnalysis: 'माहिती पुसा',
    aiPlaceholderPrompt: 'मार्गदर्शन मिळवण्यासाठी वरील पर्यायांवर क्लिक करा',
    aiPlaceholderSub: 'निवडलेल्या मानकासाठी गुणवत्ता निकष व अनिवार्य चाचण्यांची माहिती मिळवा.',

    pitchTitle: 'भारतीय मानक शिफारस प्रणाली (SIH26108)',
    pitchSubtitle: 'हॅकाथॉन सादरीकरण व ज्युरी मूल्यमापन अहवाल',
    teamMatrixTitle: 'संघ सहकार्य व मॉड्यूल वाटप',
    presentationScriptTitle: 'परीक्षकांसाठी २-३ मिनिटांची सादरीकरण स्क्रिप्ट',

    historyTitle: 'शोध इतिहास (Search History)',
    noHistory: 'अजून कोणताही शोध इतिहास नाही.',
    noHistorySub: 'इतिहास तयार करण्यासाठी उत्पादनाचा शोध घ्या.',
    exportJson: 'इतिहास JSON स्वरूपात घ्या',
    clearHistory: 'इतिहास साफ करा',
    rerunSearch: 'पुन्हा शोधा',

    exportTitle: 'अहवाल निर्यात करा',
    activeQueryLabel: 'सध्याचा शोध:',
    exportSummary: 'निवडलेली मानके, स्कोअर आणि चाचणी निकषांचा अहवाल डाउनलोड करा.',
    exportCsv: 'CSV स्प्रेडशीट डाउनलोड करा',
    exportCsvSub: 'सर्व मानके आणि स्कोअरची टेबल फाइल.',
    exportPdf: 'प्रिंट / PDF सेव्ह करा',
    exportPdfSub: 'औपचारिक वापरासाठी प्रिंट-रेडी अहवाल.',
    exportJsonOption: 'JSON कॉपी करा',
    exportJsonOptionSub: 'प्रोग्रॅमॅटिक डेटा पेलोड.',

    adminTitle: 'भारतीय मानके (BIS) डेटाबेस',
    adminSubtitle: 'मानके तपासा, व्यवस्थापित करा व नवीन जोडा.',
    addNewStandard: 'नवीन मानक जोडा',
    searchCataloguePlaceholder: 'कोड, शीर्षक किंवा वर्गाने शोधा...',
    codeCol: 'IS कोड',
    titleCol: 'शीर्षक व व्याप्ती',
    categoryCol: 'वर्ग',
    industryCol: 'उद्योग',
    actionsCol: 'क्रिया'
  },

  gu: {
    portalTitle: 'માનક ભલામણ સિસ્ટમ (Standards Recommend)',
    portalSubtitle: 'ભારતીય ધોરણો (IS/BIS) ભલામણ એન્જિન',
    hackathonTag: 'GVHAX 2026 / આચાર્ય હેકાથોન',
    problemStatement: 'સમસ્યા વિવરણ #42 (SIH26108)',
    engineOnline: 'એન્જિન ઓનલાઇન (<2ms)',
    tabRecommender: 'માનક શોધ',
    tabCatalogue: 'સૂચિ (Catalogue)',
    tabAnalytics: 'એનાલિટિક્સ',
    tabInspector: 'જજ અને ML ચકાસણી',
    tabAiAdvisor: 'AI અનુપાલન સલાહકાર',
    tabPitch: 'પીચ ડેક',
    historyBtn: 'ઇતિહાસ',
    selectLanguage: 'ભાષા પસંદ કરો',
    language: 'ભાષા',

    heroEyebrow: 'SIH26108 • સબલીનિયર TF-IDF + કોસાઇન સિમિલારિટી',
    heroHeadline: 'તમારા ઉત્પાદન માટે યોગ્ય ધોરણ',
    heroHeadlineHighlight: 'શોધો.',
    searchPlaceholder: 'દા.ત. ઇલેક્ટ્રિકલ વાયર, પોર્ટલેન્ડ સિમેન્ટ, પેકેજ્ડ પીવાનું પાણી, હેલ્મેટ...',
    searchBtn: 'શોધો',
    searchingBtn: 'શોધ ચાલુ છે...',
    clearInput: 'શોધ સાફ કરો',
    latencyLabel: 'ક્વેરી સમય',
    matchedCountLabel: 'મેળ ખાતા ધોરણો',
    sampleQueriesTitle: 'લોકપ્રિય ઉત્પાદન શોધ:',
    engineSettings: 'અલ્ગોરિધમ સેટિંગ્સ',
    minConfidenceLabel: 'ન્યૂનતમ મેચ સ્કોર મર્યાદા',
    topKLabel: 'મહત્તમ ભલામણો (Top-K)',
    closeSettings: 'સેટિંગ્સ બંધ કરો',
    samplePvcCable: 'પીવીસી ઇલેક્ટ્રિક કેબલ (PVC Cable)',
    sampleWater: 'પેકેજ્ડ પીવાનું પાણી (Water)',
    sampleSolar: 'સોલાર પેનલ (Solar PV)',
    sampleCement: 'પોર્ટલેન્ડ સિમેન્ટ (Cement)',
    sampleHelmet: 'સેફ્ટી હેલ્મેટ (Safety Helmet)',
    sampleLed: 'એલઇડી લેમ્પ (LED Lamp)',
    sampleBattery: 'લિથિયમ બેટરી (Battery)',
    sampleSteel: 'ટીએમટી સ્ટીલ સળિયા (Steel)',

    refineTitle: 'ફિલ્ટર અને શુદ્ધિકરણ',
    resetAll: 'બધું રીસેટ કરો',
    filterCategory: 'ઉત્પાદન શ્રેણી',
    filterIndustry: 'ઉદ્યોગ ક્ષેત્ર',
    filterStatus: 'બીઆઇએસ પ્રમાણીકરણ યોજના',
    allCategories: 'બધી શ્રેણીઓ',
    allIndustries: 'બધા ઉદ્યોગો',
    allStatuses: 'બધી યોજનાઓ',
    totalStandardsBadge: 'કુલ ધોરણો ડેટાબેઝમાં',

    resultsSummary: 'સંબંધિત ભારતીય ધોરણો (Ranked IS Standards)',
    sortByRelevance: 'ક્રમ: ઉચ્ચતમ સુસંગતતા',
    sortByCode: 'ક્રમ: સ્ટાન્ડર્ડ કોડ (IS Code)',
    sortByYear: 'ક્રમ: પ્રકાશન વર્ષ',
    exportDossier: 'અહેવાલ ડાઉનલોડ કરો',
    noResultsTitle: 'કોઈ મેળ ખાતું ધોરણ મળ્યું નથી',
    noResultsSubtitle: 'કૃપા કરીને અન્ય શબ્દો અજમાવો અથવા સ્કોર મર્યાદા ઓછી કરો.',
    matchScore: 'મેચ સ્કોર',
    highMatch: 'ઉત્તમ મેળ',
    mediumMatch: 'મધ્યમ મેળ',
    lowMatch: 'આંશિક મેળ',
    mandatoryMark: 'ફરજિયાત ISI માર્ક',
    crsMark: 'ફરજિયાત નોંધણી (CRS)',
    voluntaryMark: 'સ્વૈચ્છિક ધોરણ',
    harmonizationLabel: 'આંતરરાષ્ટ્રીય સુમેળ',
    viewDetails: 'વિગતો અને પરીક્ષણ પદ્ધતિઓ જુઓ',
    askAi: 'AI ગુણવત્તા સલાહકાર',
    copyCode: 'કોડ કોપી કરો',
    copied: 'કોપી થયું!',
    keyTestingParams: 'ફરજિયાત પ્રયોગશાળા પરીક્ષણ પરિમાણો',
    whyRecommended: 'આ ધોરણ શા માટે ભલામણ કરવામાં આવ્યું?',
    topTokens: 'મેળ ખાતા કીવર્ડ્સ',

    modalScopeTitle: 'ધોરણનો વ્યાપ અને ઉત્પાદનો',
    modalTestingTitle: 'ફરજિયાત પરીક્ષણ અને ગુણવત્તા પરિમાણો',
    modalKeywordsTitle: 'કીવર્ડ્સ અને શબ્દભંડોળ',
    modalYear: 'પ્રકાશન વર્ષ',
    modalHarmonization: 'આંતરરાષ્ટ્રીય ધોરણ',
    modalNotice: 'હેકાથોન મૂલ્યાંકન સૂચના: આ ડેટા SIH26108 / GVHAX 2026 ડેમો માટે છે. કાનૂની ઉત્પાદન માટે બીઆઇએસ (BIS) ની સત્તાવાર વેબસાઇટનો સંદર્ભ લો.',
    printSpec: 'પ્રિન્ટ કરો',
    closeModal: 'બંધ કરો',

    metricCorpus: 'કુલ ધોરણો',
    metricCorpusSub: 'સંપૂર્ણ બીઆઇએસ ડેટાસેટ',
    metricCategories: 'ઉત્પાદન શ્રેણીઓ',
    metricCategoriesSub: 'ઇલેક્ટ્રિકલ, સિવિલ, સુરક્ષા વગેરે',
    metricQueries: 'પ્રોસેસ થયેલ પ્રશ્નો',
    metricQueriesSub: 'SQLite ડેટાબેઝ',
    metricLatency: 'TF-IDF સમય',
    metricLatencySub: 'અતિ ઝડપી ગણતરી',
    chartCategoryTitle: 'શ્રેણી અનુસાર ધોરણો',
    chartComplianceTitle: 'પ્રમાણીકરણ યોજના વિતરણ',
    recentQueriesTitle: 'તાજેતરની શોધ',
    coverageSectorTitle: 'ઉદ્યોગ ક્ષેત્ર કવરેજ',

    inspectorTitle: 'સમસ્યા #42 (SIH26108) ઇન્સ્પેક્ટર',
    inspectorSubtitle: 'TF-IDF અને કોસાઇન મેટ્રિકનું ચોક્કસ મૂલ્યાંકન.',
    runAllTests: 'બધા યુનિટ ટેસ્ટ ચલાવો',
    runningTests: 'ટેસ્ટ ચાલી રહ્યા છે...',
    tabAutomatedTests: 'ઓટોમેટેડ ટેસ્ટ સ્યુટ',
    tabLiveVector: 'લાઇવ વેક્ટર વિશ્લેષક',
    tabFormulas: 'ગણિતીય સૂત્રો',
    allTestsPassed: 'તમામ 7 ટેસ્ટ પાસ થયા (Passed)',
    avgLatency: 'સરેરાશ સમય: ~1.2ms',
    statusCol: 'સ્થિતિ',
    queryCol: 'ટેસ્ટ કેસ અને ક્વેરી',
    expectedCol: 'અપેક્ષિત ધોરણ',
    scoreCol: 'કોસાઇન સ્કોર',
    executionCol: 'સમય',

    aiTitle: 'માનક અનુપાલન અને પરીક્ષણ માર્ગદર્શિકા',
    aiSubtitle: 'ફેક્ટરી ચેકલિસ્ટ, પરીક્ષણ પ્રોટોકોલ અને બીઆઇએસ લાઇસન્સિંગ રોડમેપ.',
    aiSelectStandard: 'ધોરણ પસંદ કરો:',
    btnFactoryChecklist: 'ફેક્ટરી ગુણવત્તા ચેકલિસ્ટ',
    btnFactoryChecklistDesc: 'કાચા માલની ચકાસણી અને ઇન-હાઉસ નિરીક્ષણ મુદ્દાઓ મેળવો.',
    btnLabProtocol: 'લેબોરેટરી પરીક્ષણ પ્રોટોકોલ',
    btnLabProtocolDesc: 'ફરજિયાત ભૌતિક અને રાસાયણિક પરીક્ષણ પદ્ધતિઓની વિગતો.',
    btnBisRoadmap: 'બીઆઇએસ લાઇસન્સિંગ રોડમેપ',
    btnBisRoadmapDesc: 'ઉત્પાદકો માટે સ્ટેપ-બાય-સ્ટેપ સર્ટિફિકેશન પ્રક્રિયા.',
    customQueryLabel: 'ચોક્કસ પ્રશ્ન પૂછો:',
    customQueryPlaceholder: 'દા.ત. કંડક્ટર રેઝિસ્ટન્સ ટેસ્ટિંગની જરૂરિયાતો શું છે?',
    analyzeBtn: 'વિશ્લેષણ કરો',
    analyzingBtn: 'વિશ્લેષણ ચાલુ છે...',
    aiOutputTitle: 'AI અનુપાલન પરિણામ',
    clearAnalysis: 'સાફ કરો',
    aiPlaceholderPrompt: 'વિશ્લેષણ માટે ઉપરના વિકલ્પોમાંથી પસંદ કરો',
    aiPlaceholderSub: 'પસંદ કરેલા ધોરણ માટે ગુણવત્તા ચેકલિસ્ટ અને ટેસ્ટિંગ માર્ગદર્શિકા પ્રદાન કરે છે.',

    pitchTitle: 'ભારતીય ધોરણો ભલામણ સિસ્ટમ (SIH26108)',
    pitchSubtitle: 'હેકાથોન પ્રસ્તુતિ અને જ્યુરી મૂલ્યાંકન અહેવાલ',
    teamMatrixTitle: 'ટીમ સહયોગ અને મોડ્યુલ વિતરણ',
    presentationScriptTitle: 'જ્યુરી માટે 2-3 મિનિટની પ્રસ્તુતિ સ્ક્રિપ્ટ',

    historyTitle: 'શોધ ઇતિહાસ (Search History)',
    noHistory: 'હજુ સુધી કોઈ શોધ ઇતિહાસ નથી.',
    noHistorySub: 'ઇતિહાસ બનાવવા માટે ઉત્પાદનની શોધ કરો.',
    exportJson: 'ઇતિહાસ JSON ડાઉનલોડ કરો',
    clearHistory: 'ઇતિહાસ સાફ કરો',
    rerunSearch: 'ફરીથી શોધો',

    exportTitle: 'અહેવાલ નિકાસ કરો',
    activeQueryLabel: 'સક્રિય શોધ:',
    exportSummary: 'રેન્ક કરેલા ભારતીય ધોરણો, સ્કોર અને ટેસ્ટિંગ પરિમાણો ડાઉનલોડ કરો.',
    exportCsv: 'CSV સ્પ્રેડશીટ ડાઉનલોડ કરો',
    exportCsvSub: 'કોષ્ટક સ્વરૂપમાં તમામ માહિતી.',
    exportPdf: 'પ્રિન્ટ / PDF સાચવો',
    exportPdfSub: 'પ્રિન્ટ-રેડી સત્તાવાર અહેવાલ.',
    exportJsonOption: 'JSON કોપી કરો',
    exportJsonOptionSub: 'મશીન-રીડેબલ ડેટા.',

    adminTitle: 'ભારતીય ધોરણો (BIS) ભંડાર',
    adminSubtitle: 'ધોરણો જુઓ, સંચાલિત કરો અને નવા ઉમેરો.',
    addNewStandard: 'નવું ધોરણ ઉમેરો',
    searchCataloguePlaceholder: 'કોડ, શીર્ષક અથવા શ્રેણી દ્વારા શોધો...',
    codeCol: 'IS કોડ',
    titleCol: 'શીર્ષક અને વ્યાપ',
    categoryCol: 'શ્રેણી',
    industryCol: 'ઉદ્યોગ',
    actionsCol: 'ક્રિયાઓ'
  },

  ta: {
    portalTitle: 'தரநிலைகள் பரிந்துரைப்பான் (Standards Recommend)',
    portalSubtitle: 'இந்திய தரநிலைகள் (IS/BIS) பரிந்துரை இயந்திரம்',
    hackathonTag: 'GVHAX 2026 / ஆச்சார்யா ஹேக்கத்தான்',
    problemStatement: 'பிரச்சனை அறிக்கை #42 (SIH26108)',
    engineOnline: 'இயந்திரம் ஆன்லைனில் (<2ms)',
    tabRecommender: 'தரநிலை தேடல்',
    tabCatalogue: 'அட்டவணை',
    tabAnalytics: 'பகுப்பாய்வு',
    tabInspector: 'ML சரிபார்ப்பு',
    tabAiAdvisor: 'AI இணக்க ஆலோசகர்',
    tabPitch: 'குழு விளக்கக்காட்சி',
    historyBtn: 'வரலாறு',
    selectLanguage: 'மொழியைத் தேர்ந்தெடுக்கவும்',
    language: 'மொழி',

    heroEyebrow: 'SIH26108 • சப்லீனியர் TF-IDF + கொசைன் அளவீடு',
    heroHeadline: 'உங்கள் தயாரிப்புக்கான சரியான தரநிலையை',
    heroHeadlineHighlight: 'கண்டறியவும்.',
    searchPlaceholder: 'எ.கா. வீட்டு மின்சார கம்பி, சிமெண்ட், குடிநீர் பாட்டில், ஹெல்மெட், சோலார் பேனல்...',
    searchBtn: 'தேடுக',
    searchingBtn: 'தேடுகிறது...',
    clearInput: 'தேடலை அழிக்கவும்',
    latencyLabel: 'தேடல் வேகம்',
    matchedCountLabel: 'பொருந்திய தரநிலைகள்',
    sampleQueriesTitle: 'அடிக்கடி தேடப்படும் தயாரிப்புகள்:',
    engineSettings: 'அல்காரிதம் அமைப்புகள்',
    minConfidenceLabel: 'குறைந்தபட்ச பொருத்தம் வரம்பு',
    topKLabel: 'அதிகபட்ச பரிந்துரைகள் (Top-K)',
    closeSettings: 'அமைப்புகளை மூடுக',
    samplePvcCable: 'பிவிசி மின் கம்பி (PVC Cable)',
    sampleWater: 'பாட்டில் குடிநீர் (Drinking Water)',
    sampleSolar: 'சூரிய ஒளி பேனல் (Solar PV)',
    sampleCement: 'போர்ட்லேண்ட் சிமெண்ட் (Cement)',
    sampleHelmet: 'பாதுகாப்பு ஹெல்மெட் (Helmet)',
    sampleLed: 'எல்இடி விளக்குகள் (LED Lamp)',
    sampleBattery: 'லித்தியம் பேட்டரி (Battery)',
    sampleSteel: 'டிஎம்டி எஃகு கம்பி (Steel Bar)',

    refineTitle: 'வடிகட்டுதல் மற்றும் சீரமைத்தல்',
    resetAll: 'அனைத்தையும் மீட்டமை',
    filterCategory: 'தயாரிப்பு வகை',
    filterIndustry: 'தொழில்துறை பிரிவு',
    filterStatus: 'BIS சான்றிதழ் திட்டம்',
    allCategories: 'அனைத்து வகைகள்',
    allIndustries: 'அனைத்து தொழில்கள்',
    allStatuses: 'அனைத்து திட்டங்கள்',
    totalStandardsBadge: 'மொத்த தரநிலைகள்',

    resultsSummary: 'பரிந்துரைக்கப்பட்ட இந்திய தரநிலைகள் (Ranked IS Standards)',
    sortByRelevance: 'வரிசை: அதிக பொருத்தம்',
    sortByCode: 'வரிசை: தரநிலை குறியீடு (IS Code)',
    sortByYear: 'வரிசை: வெளியிடப்பட்ட ஆண்டு',
    exportDossier: 'அறிக்கையை பதிவிறக்கு',
    noResultsTitle: 'பொருந்தும் தரநிலைகள் எதுவும் கிடைக்கவில்லை',
    noResultsSubtitle: 'தயவுசெய்து வேறு தயாரிப்பு பெயரைப் பயன்படுத்தி மீண்டும் முயற்சிக்கவும்.',
    matchScore: 'பொருத்த மதிப்பெண்',
    highMatch: 'சிறந்த பொருத்தம்',
    mediumMatch: 'மிதமான பொருத்தம்',
    lowMatch: 'பகுதி பொருத்தம்',
    mandatoryMark: 'கட்டாய ISI முத்திரை',
    crsMark: 'கட்டாய பதிவு (CRS)',
    voluntaryMark: 'விருப்ப தரநிலை',
    harmonizationLabel: 'சர்வதேச இணக்கம்',
    viewDetails: 'முழு விவரங்கள் மற்றும் சோதனையைக் காண்க',
    askAi: 'AI தர ஆலோசகர்',
    copyCode: 'குறியீட்டை நகலெடு',
    copied: 'நகலெடுக்கப்பட்டது!',
    keyTestingParams: 'கட்டாய ஆய்வக சோதனை அளவுருக்கள்',
    whyRecommended: 'இந்த தரநிலை ஏன் பரிந்துரைக்கப்பட்டது?',
    topTokens: 'பொருந்திய முக்கிய வார்த்தைகள்',

    modalScopeTitle: 'தரநிலையின் நோக்கம் மற்றும் தயாரிப்புகள்',
    modalTestingTitle: 'கட்டாய சோதனை மற்றும் தர அளவுருக்கள்',
    modalKeywordsTitle: 'முக்கிய வார்த்தைகள்',
    modalYear: 'வெளியிடப்பட்ட ஆண்டு',
    modalHarmonization: 'சர்வதேச தரநிலை',
    modalNotice: 'ஹேக்கத்தான் மதிப்பீட்டு அறிவிப்பு: இந்த தகவல் SIH26108 / GVHAX 2026 செயல்விளக்கத்திற்கானது. அதிகாரப்பூர்வ தகவலுக்கு BIS தளத்தைப் பார்க்கவும்.',
    printSpec: 'அச்சிடுக',
    closeModal: 'மூடுக',

    metricCorpus: 'தரவுத்தளத்தில் உள்ள தரநிலைகள்',
    metricCorpusSub: 'முழு BIS தரவுத்தொகுப்பு',
    metricCategories: 'தயாரிப்பு பிரிவுகள்',
    metricCategoriesSub: 'மின்சாரம், சிவில், பாதுகாப்பு மற்றும் பல',
    metricQueries: 'செயலாக்கப்பட்ட தேடல்கள்',
    metricQueriesSub: 'SQLite தரவுத்தளம்',
    metricLatency: 'TF-IDF வேகம்',
    metricLatencySub: 'நினைவகத்தில் அதிவேக கணக்கீடு',
    chartCategoryTitle: 'வகை வாரியாக தரநிலைகள்',
    chartComplianceTitle: 'சான்றிதழ் திட்ட விநியோகம்',
    recentQueriesTitle: 'சமீபத்திய தேடல்கள்',
    coverageSectorTitle: 'தொழில்துறை பிரிவு கவரேஜ்',

    inspectorTitle: 'பிரச்சனை #42 (SIH26108) ஆய்வாளர்',
    inspectorSubtitle: 'TF-IDF மற்றும் கொசைன் அல்காரிதம் துல்லிய சரிபார்ப்பு.',
    runAllTests: 'அனைத்து யூனிட் சோதனைகளையும் இயக்கு',
    runningTests: 'சோதனைகள் இயங்குகின்றன...',
    tabAutomatedTests: 'தானியங்கி சோதனை தொகுப்பு',
    tabLiveVector: 'நேரலை திசையன் ஆய்வாளர்',
    tabFormulas: 'கணித சூத்திரங்கள்',
    allTestsPassed: 'அனைத்து 7 சோதனைகளும் தேர்ச்சி பெற்றன (Passed)',
    avgLatency: 'சராசரி வேகம்: ~1.2ms',
    statusCol: 'நிலை',
    queryCol: 'சோதனை வழக்கு மற்றும் வினவல்',
    expectedCol: 'எதிர்பார்க்கப்படும் தரநிலை',
    scoreCol: 'கொசைன் மதிப்பெண்',
    executionCol: 'வேகம்',

    aiTitle: 'தரநிலைகள் இணக்கம் மற்றும் சோதனை வழிகாட்டி',
    aiSubtitle: 'தொழிற்சாலை சரிபார்ப்பு பட்டியல், சோதனை நெறிமுறைகள் மற்றும் BIS உரிம வரைபடம்.',
    aiSelectStandard: 'தரநிலையைத் தேர்ந்தெடுக்கவும்:',
    btnFactoryChecklist: 'தொழிற்சாலை தர சரிபார்ப்பு பட்டியல்',
    btnFactoryChecklistDesc: 'உள் தணிக்கை மற்றும் மூலப்பொருள் சரிபார்ப்பு புள்ளிகளைப் பெறுங்கள்.',
    btnLabProtocol: 'ஆய்வக சோதனை நெறிமுறை',
    btnLabProtocolDesc: 'கட்டாய இயற்பியல் மற்றும் வேதியியல் சோதனை முறைகளின் விவரங்கள்.',
    btnBisRoadmap: 'BIS உரிம செயல்முறை வரைபடம்',
    btnBisRoadmapDesc: 'உற்பத்தியாளர்களுக்கான படிப்படியான சான்றிதழ் வழிகாட்டுதல்.',
    customQueryLabel: 'குறிப்பிட்ட இணக்கக் கேள்வியைக் கேளுங்கள்:',
    customQueryPlaceholder: 'எ.கா. கடத்தி எதிர்ப்பு சோதனைக்கான கட்டாய தேவைகள் யாவை?',
    analyzeBtn: 'பகுப்பாய்வு செய்',
    analyzingBtn: 'பகுப்பாய்வு செய்கிறது...',
    aiOutputTitle: 'AI இணக்க ஆலோசகர் முடிவு',
    clearAnalysis: 'அழிக்கவும்',
    aiPlaceholderPrompt: 'பகுப்பாய்வு பெற மேலே உள்ள விருப்பங்களைத் தேர்ந்தெடுக்கவும்',
    aiPlaceholderSub: 'தேர்ந்தெடுக்கப்பட்ட தரநிலைக்கு தர சரிபார்ப்பு பட்டியல் மற்றும் வழிகாட்டுதலை வழங்குகிறது.',

    pitchTitle: 'இந்திய தரநிலைகள் பரிந்துரை இயந்திரம் (SIH26108)',
    pitchSubtitle: 'ஹேக்கத்தான் விளக்கக்காட்சி மற்றும் நடுவர் மதிப்பீட்டு ஆவணம்',
    teamMatrixTitle: 'குழு ஒத்துழைப்பு மற்றும் தொகுதி விவரங்கள்',
    presentationScriptTitle: 'நடுவர்களுக்கான 2-3 நிமிட விளக்கக் குறிப்பு',

    historyTitle: 'தேடல் வரலாறு (Search History)',
    noHistory: 'இன்னும் தேடல் வரலாறு இல்லை.',
    noHistorySub: 'வரலாற்றை உருவாக்க ஒரு தயாரிப்பைத் தேடுங்கள்.',
    exportJson: 'JSON பதிவிறக்கு',
    clearHistory: 'வரலாற்றை அழி',
    rerunSearch: 'மீண்டும் தேடு',

    exportTitle: 'அறிக்கையை ஏற்றுமதி செய்',
    activeQueryLabel: 'செயலில் உள்ள தேடல்:',
    exportSummary: 'பரிந்துரைக்கப்பட்ட இந்திய தரநிலைகள், மதிப்பெண்கள் மற்றும் சோதனை அளவுருக்களைப் பதிவிறக்கவும்.',
    exportCsv: 'CSV விரிதாளைப் பதிவிறக்கு',
    exportCsvSub: 'அனைத்து தரநிலைகளின் அட்டவணை அறிக்கை.',
    exportPdf: 'அச்சிடுக / PDF ஆக சேமி',
    exportPdfSub: 'அதிகாரப்பூர்வ பயன்பாட்டிற்கான அச்சு அறிக்கை.',
    exportJsonOption: 'JSON நகலெடு',
    exportJsonOptionSub: 'கணினி படிக்கக்கூடிய தரவு.',

    adminTitle: 'இந்திய தரநிலைகள் (BIS) களஞ்சியம்',
    adminSubtitle: 'தரநிலைகளைப் பார்க்கவும், நிர்வகிக்கவும் மற்றும் புதியவற்றைச் சேர்க்கவும்.',
    addNewStandard: 'புதிய தரநிலையைச் சேர்க்கவும்',
    searchCataloguePlaceholder: 'குறியீடு, தலைப்பு அல்லது வகை மூலம் தேடுங்கள்...',
    codeCol: 'IS குறியீடு',
    titleCol: 'தலைப்பு மற்றும் தயாரிப்பு நோக்கம்',
    categoryCol: 'வகை',
    industryCol: 'பிரிவு',
    actionsCol: 'செயல்கள்'
  },

  te: {
    portalTitle: 'ప్రమాణాల సిఫార్సు వ్యవస్థ (Standards Recommend)',
    portalSubtitle: 'భారతీయ ప్రమాణాలు (IS/BIS) సిఫార్సు ఇంజిన్',
    hackathonTag: 'GVHAX 2026 / ఆచార్య హ్యాకథాన్',
    problemStatement: 'సమస్య వివరణ #42 (SIH26108)',
    engineOnline: 'ఇంజిన్ ఆన్‌లైన్ (<2ms)',
    tabRecommender: 'ప్రమాణాల శోధన',
    tabCatalogue: 'కేటలాగ్',
    tabAnalytics: 'విశ్లేషణలు',
    tabInspector: 'ML ధృవీకరణ',
    tabAiAdvisor: 'AI సలహాదారు',
    tabPitch: 'ప్రదర్శన (Pitch)',
    historyBtn: 'చరిత్ర',
    selectLanguage: 'భాషను ఎంచుకోండి',
    language: 'భాష',

    heroEyebrow: 'SIH26108 • సబ్‌లీనియర్ TF-IDF + కొసైన్ సిమిలారిటీ',
    heroHeadline: 'మీ ఉత్పత్తికి సరైన భారతీయ ప్రమాణాన్ని',
    heroHeadlineHighlight: 'గుర్తించండి.',
    searchPlaceholder: 'ఉదా. గృహ విద్యుత్ వైర్, సిమెంట్, త్రాగునీరు, హెల్మెట్, సోలార్ ప్యానెల్...',
    searchBtn: 'వెతకండి',
    searchingBtn: 'వెతుకుతోంది...',
    clearInput: 'శోధనను క్లియర్ చేయండి',
    latencyLabel: 'శోధన వేగం',
    matchedCountLabel: 'సరిపోలిన ప్రమాణాలు',
    sampleQueriesTitle: 'తరచుగా శోధించే ఉత్పత్తులు:',
    engineSettings: 'అల్గారిథమ్ సెట్టింగ్‌లు',
    minConfidenceLabel: 'కనిష్ట మ్యాచ్ స్కోరు పరిమితి',
    topKLabel: 'గరిష్ట సిఫార్సులు (Top-K)',
    closeSettings: 'సెట్టింగ్‌లను మూసివేయండి',
    samplePvcCable: 'పీవీసీ విద్యుత్ కేబుల్ (PVC Cable)',
    sampleWater: 'ప్యాక్ చేసిన తాగునీరు (Water)',
    sampleSolar: 'సోలార్ ప్యానెల్ (Solar PV)',
    sampleCement: 'పోర్ట్‌ల్యాండ్ సిమెంట్ (Cement)',
    sampleHelmet: 'భద్రతా హెల్మెట్ (Safety Helmet)',
    sampleLed: 'ఎల్‌ఈడీ బల్బులు (LED Lamp)',
    sampleBattery: 'లిథియం బ్యాటరీ (Battery)',
    sampleSteel: 'టీఎంటీ స్టీల్ రాడ్లు (Steel)',

    refineTitle: 'ఫిల్టర్లు & వర్గీకరణ',
    resetAll: 'అన్నీ రీసెట్ చేయండి',
    filterCategory: 'ఉత్పత్తి వర్గం',
    filterIndustry: 'పరిశ్రమ రంగం',
    filterStatus: 'BIS ధృవీకరణ పథకం',
    allCategories: 'అన్ని వర్గాలు',
    allIndustries: 'అన్ని పరిశ్రమలు',
    allStatuses: 'అన్ని పథకాలు',
    totalStandardsBadge: 'మొత్తం అందుబాటులో ఉన్న ప్రమాణాలు',

    resultsSummary: 'సిఫార్సు చేయబడిన భారతీయ ప్రమాణాలు (Ranked IS Standards)',
    sortByRelevance: 'క్రమం: అత్యధిక ఔచిత్యం',
    sortByCode: 'క్రమం: ప్రమాణ కోడ్ (IS Code)',
    sortByYear: 'క్రమం: ప్రచురణ సంవత్సరం',
    exportDossier: 'నివేదికను డౌన్‌లోడ్ చేయండి',
    noResultsTitle: 'సరిపోలే ప్రమాణాలు కనుగొనబడలేదు',
    noResultsSubtitle: 'దయచేసి ఇతర కీలకపదాలతో శోధించండి లేదా స్కోరు పరిమితిని తగ్గించండి.',
    matchScore: 'మ్యాచ్ స్కోరు',
    highMatch: 'అత్యుత్తమ సరిపోలిక',
    mediumMatch: 'మధ్యస్థ సరిపోలిక',
    lowMatch: 'పాక్షిక సరిపోలిక',
    mandatoryMark: 'తప్పనిసరి ISI గుర్తు',
    crsMark: 'తప్పనిసరి నమోదు (CRS)',
    voluntaryMark: 'స్వచ్ఛంద ప్రమాణం',
    harmonizationLabel: 'అంతర్జాతీయ అనుకూలత',
    viewDetails: 'పూర్తి వివరాలు మరియు పరీక్షలు చూడండి',
    askAi: 'AI నాణ్యత సలహాదారు',
    copyCode: 'కోడ్‌ను కాపీ చేయండి',
    copied: 'కాపీ చేయబడింది!',
    keyTestingParams: 'తప్పనిసరి ప్రయోగశాల పరీక్షా పారామితులు',
    whyRecommended: 'ఈ ప్రమాణం ఎందుకు సిఫార్సు చేయబడింది?',
    topTokens: 'సరిపోలిన కీలకపదాలు',

    modalScopeTitle: 'ప్రమాణం యొక్క పరిధి మరియు ఉత్పత్తులు',
    modalTestingTitle: 'తప్పనిసరి పరీక్ష మరియు నాణ్యతా పారామితులు',
    modalKeywordsTitle: 'కీలకపదాలు',
    modalYear: 'ప్రచురణ సంవత్సరం',
    modalHarmonization: 'అంతర్జాతీయ ప్రమాణం',
    modalNotice: 'హ్యాకథాన్ మూల్యాంకన సమాచారం: ఈ డేటా SIH26108 / GVHAX 2026 ప్రదర్శన కోసం మాత్రమే. అధికారిక నిబంధనల కోసం BIS సైట్‌ను సందర్శించండి.',
    printSpec: 'ప్రింట్ చేయండి',
    closeModal: 'మూసివేయండి',

    metricCorpus: 'మొత్తం ప్రమాణాలు',
    metricCorpusSub: 'పూర్తి BIS డేటాసెట్',
    metricCategories: 'ఉత్పత్తి వర్గాలు',
    metricCategoriesSub: 'ఎలక్ట్రికల్, సివిల్, భద్రత మొదలైనవి',
    metricQueries: 'ప్రాసెస్ చేయబడిన శోధనలు',
    metricQueriesSub: 'SQLite డేటాబేస్',
    metricLatency: 'TF-IDF వేగం',
    metricLatencySub: 'అతి వేగవంతమైన గణన',
    chartCategoryTitle: 'వర్గాల వారీగా ప్రమాణాలు',
    chartComplianceTitle: 'ధృవీకరణ పథకాల పంపిణీ',
    recentQueriesTitle: 'ఇటీవలి శోధనలు',
    coverageSectorTitle: 'పరిశ్రమ రంగాలు',

    inspectorTitle: 'సమస్య #42 (SIH26108) ఇన్‌స్పెక్టర్',
    inspectorSubtitle: 'TF-IDF మరియు కొసైన్ సిమిలారిటీ అల్గారిథమ్ ఖచ్చితత్వ ధృవీకరణ.',
    runAllTests: 'అన్ని యూనిట్ పరీక్షలను అమలు చేయండి',
    runningTests: 'పరీక్షలు నడుస్తున్నాయి...',
    tabAutomatedTests: 'ఆటోమేటెడ్ టెస్ట్ సూట్',
    tabLiveVector: 'లైవ్ వెక్టర్ విశ్లేషణ',
    tabFormulas: 'గణిత సూత్రాలు',
    allTestsPassed: 'అన్ని 7 పరీక్షలు విజయవంతంగా పాస్ అయ్యాయి (Passed)',
    avgLatency: 'సగటు వేగం: ~1.2ms',
    statusCol: 'స్థితి',
    queryCol: 'పరీక్ష కేసు & క్వెరీ',
    expectedCol: 'ఆశించిన ప్రమాణం',
    scoreCol: 'కొసైన్ స్కోరు',
    executionCol: 'వేగం',

    aiTitle: 'ప్రమాణాల సమ్మతి మరియు పరీక్ష మార్గదర్శి',
    aiSubtitle: 'ఫ్యాక్టరీ తనిఖీ జాబితా, పరీక్షా పద్ధతులు మరియు BIS లైసెన్సింగ్ రోడ్‌మ్యాప్.',
    aiSelectStandard: 'ప్రమాణాన్ని ఎంచుకోండి:',
    btnFactoryChecklist: 'ఫ్యాక్టరీ నాణ్యత తనిఖీ జాబితా',
    btnFactoryChecklistDesc: 'ముడి పదార్థాల తనిఖీ మరియు అంతర్గత నాణ్యతా పాయింట్లను పొందండి.',
    btnLabProtocol: 'ప్రయోగశాల పరీక్షా ప్రోటోకాల్',
    btnLabProtocolDesc: 'తప్పనిసరి భౌతిక మరియు రసాయన పరీక్షల పూర్తి వివరాలు.',
    btnBisRoadmap: 'BIS లైసెన్సింగ్ రోడ్‌మ్యాప్',
    btnBisRoadmapDesc: 'తయారీదారుల కోసం దశలవారీ ధృవీకరణ మార్గదర్శకం.',
    customQueryLabel: 'నిర్దిష్ట ప్రశ్నను అడగండి:',
    customQueryPlaceholder: 'ఉదా. కండక్టర్ రెసిస్టెన్స్ పరీక్ష కోసం నిబంధనలు ఏమిటి?',
    analyzeBtn: 'విశ్లేషించండి',
    analyzingBtn: 'విశ్లేషిస్తోంది...',
    aiOutputTitle: 'AI సలహాదారు ఫలితం',
    clearAnalysis: 'క్లియర్ చేయండి',
    aiPlaceholderPrompt: 'విశ్లేషణ పొందడానికి పై ఎంపికలను ఎంచుకోండి',
    aiPlaceholderSub: 'ఎంచుకున్న ప్రమాణం కోసం నాణ్యతా జాబితా మరియు మార్గదర్శకాలను అందిస్తుంది.',

    pitchTitle: 'భారతీయ ప్రమాణాల సిఫార్సు వ్యవస్థ (SIH26108)',
    pitchSubtitle: 'హ్యాకథాన్ ప్రదర్శన మరియు జ్యూరీ మూల్యాంకన పత్రం',
    teamMatrixTitle: 'జట్టు సహకారం మరియు మాడ్యూల్ వివరాలు',
    presentationScriptTitle: 'జ్యూరీ కోసం 2-3 నిమిషాల ప్రదర్శన స్క్రిప్ట్',

    historyTitle: 'శోధన చరిత్ర (Search History)',
    noHistory: 'ఇంకా శోధన చరిత్ర లేదు.',
    noHistorySub: 'చరిత్రను సృష్టించడానికి ఏదైనా ఉత్పత్తిని శోధించండి.',
    exportJson: 'చరిత్రను JSON రూపంలో డౌన్‌లోడ్ చేయండి',
    clearHistory: 'చరిత్రను క్లియర్ చేయండి',
    rerunSearch: 'మళ్ళీ శోధించండి',

    exportTitle: 'నివేదికను ఎగుమతి చేయండి',
    activeQueryLabel: 'ప్రస్తుత శోధన:',
    exportSummary: 'సిఫార్సు చేయబడిన ప్రమాణాలు, స్కోర్లు మరియు పరీక్షా వివరాలను డౌన్‌లోడ్ చేయండి.',
    exportCsv: 'CSV స్ప్రెడ్‌షీట్ డౌన్‌లోడ్ చేయండి',
    exportCsvSub: 'అన్ని వివరాలతో కూడిన పట్టిక.',
    exportPdf: 'ప్రింట్ / PDF గా సేవ్ చేయండి',
    exportPdfSub: 'అధికారిక ఉపయోగం కోసం ప్రింట్ నివేదిక.',
    exportJsonOption: 'JSON కాపీ చేయండి',
    exportJsonOptionSub: 'మెషిన్ రీడబుల్ డేటా.',

    adminTitle: 'భారతీయ ప్రమాణాల (BIS) డేటాబేస్',
    adminSubtitle: 'ప్రమాణాలను వీక్షించండి, నిర్వహించండి మరియు క్రొత్త వాటిని జోడించండి.',
    addNewStandard: 'కొత్త ప్రమాణాన్ని జోడించండి',
    searchCataloguePlaceholder: 'కోడ్, శీర్షిక లేదా వర్గం ద్వారా వెతకండి...',
    codeCol: 'IS కోడ్',
    titleCol: 'శీర్షిక & పరిధి',
    categoryCol: 'వర్గం',
    industryCol: 'రంగం',
    actionsCol: 'చర్యలు'
  },

  kn: {
    portalTitle: 'ಮಾನದಂಡಗಳ ಶಿಫಾರಸು ವ್ಯವಸ್ಥೆ (Standards Recommend)',
    portalSubtitle: 'ಭಾರತೀಯ ಮಾನದಂಡಗಳ (IS/BIS) ಶಿಫಾರಸು ಎಂಜಿನ್',
    hackathonTag: 'GVHAX 2026 / ಆಚಾರ್ಯ ಹ್ಯಾಕಥಾನ್',
    problemStatement: 'ಸಮಸ್ಯೆ ವಿವರಣೆ #42 (SIH26108)',
    engineOnline: 'ಎಂಜಿನ್ ಆನ್‌ಲೈನ್‌ನಲ್ಲಿದೆ (<2ms)',
    tabRecommender: 'ಮಾನದಂಡಗಳ ಹುಡುಕಾಟ',
    tabCatalogue: 'ಕ್ಯಾಟಲಾಗ್',
    tabAnalytics: 'ವಿಶ್ಲೇಷಣೆ',
    tabInspector: 'ML ಪರೀಕ್ಷಕ',
    tabAiAdvisor: 'AI ಗುಣಮಟ್ಟ ಸಲಹೆಗಾರ',
    tabPitch: 'ತಂಡದ ಪ್ರಸ್ತುತಿ (Pitch)',
    historyBtn: 'ಇತಿಹಾಸ',
    selectLanguage: 'ಭಾಷೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ',
    language: 'ಭಾಷೆ',

    heroEyebrow: 'SIH26108 • ಸಬ್‌ಲೀನಿಯರ್ TF-IDF + ಕೊಸೈನ್ ಮೆಟ್ರಿಕ್',
    heroHeadline: 'ನಿಮ್ಮ ಉತ್ಪನ್ನಕ್ಕೆ ಸೂಕ್ತವಾದ ಭಾರತೀಯ ಮಾನದಂಡವನ್ನು',
    heroHeadlineHighlight: 'ಗುರುತಿಸಿ.',
    searchPlaceholder: 'ಉದಾ. ಗೃಹಬಳಕೆಯ ವಿದ್ಯುತ್ ತಂತಿ, ಸಿಮೆಂಟ್, ಕುಡಿಯುವ ನೀರು, ಹೆಲ್ಮೆಟ್, ಸೋಲಾರ್ ಪ್ಯಾನಲ್...',
    searchBtn: 'ಹುಡುಕಿ',
    searchingBtn: 'ಹುಡುಕಲಾಗುತ್ತಿದೆ...',
    clearInput: 'ಹುಡುಕಾಟ ತೆರವುಗೊಳಿಸಿ',
    latencyLabel: 'ಹುಡುಕಾಟ ವೇಗ',
    matchedCountLabel: 'ಹೊಂದಾಣಿಕೆಯ ಮಾನದಂಡಗಳು',
    sampleQueriesTitle: 'ಹೆಚ್ಚು ಹುಡುಕಲಾದ ಉತ್ಪನ್ನಗಳು:',
    engineSettings: 'ಅಲ್ಗಾರಿದಮ್ ಸೆಟ್ಟಿಂಗ್‌ಗಳು',
    minConfidenceLabel: 'ಕನಿಷ್ಠ ಸ್ಕೋರ್ ಮಿತಿ (Min Score)',
    topKLabel: 'ಗರಿಷ್ಠ ಶಿಫಾರಸುಗಳು (Top-K)',
    closeSettings: 'ಸೆಟ್ಟಿಂಗ್‌ಗಳನ್ನು ಮುಚ್ಚಿ',
    samplePvcCable: 'ಪಿವಿಸಿ ವಿದ್ಯುತ್ ಕೇಬಲ್ (PVC Cable)',
    sampleWater: 'ಬಾಟಲ್ ಕುಡಿಯುವ ನೀರು (Water)',
    sampleSolar: 'ಸೌರ ಫಲಕ (Solar PV)',
    sampleCement: 'ಪೋರ್ಟ್‌ಲ್ಯಾಂಡ್ ಸಿಮೆಂಟ್ (Cement)',
    sampleHelmet: 'ಸುರಕ್ಷತಾ ಹೆಲ್ಮೆಟ್ (Safety Helmet)',
    sampleLed: 'ಎಲ್ಇಡಿ ಬಲ್ಬ್ಗಳು (LED Lamp)',
    sampleBattery: 'ಲಿಥಿಯಂ ಬ್ಯಾಟರಿ (Battery)',
    sampleSteel: 'ಟಿಎಂಟ್ ಸ್ಟೀಲ್ ರಾಡ್ (Steel)',

    refineTitle: 'ಫಿಲ್ಟರ್ ಮತ್ತು ವಿಂಗಡಣೆ',
    resetAll: 'ಎಲ್ಲವನ್ನೂ ಮರುಹೊಂದಿಸಿ',
    filterCategory: 'ಉತ್ಪನ್ನ ವರ್ಗ',
    filterIndustry: 'ಉದ್ಯಮ ವಲಯ',
    filterStatus: 'BIS ಪ್ರಮಾಣೀಕರಣ ಯೋಜನೆ',
    allCategories: 'ಎಲ್ಲಾ ವರ್ಗಗಳು',
    allIndustries: 'ಎಲ್ಲಾ ಉದ್ಯಮಗಳು',
    allStatuses: 'ಎಲ್ಲಾ ಯೋಜನೆಗಳು',
    totalStandardsBadge: 'ಒಟ್ಟು ಲಭ್ಯವಿರುವ ಮಾನದಂಡಗಳು',

    resultsSummary: 'ಶಿಫಾರಸು ಮಾಡಲಾದ ಭಾರತೀಯ ಮಾನದಂಡಗಳು (Ranked IS Standards)',
    sortByRelevance: 'ಶ್ರೇಣಿ: ಗರಿಷ್ಠ ಪ್ರಸ್ತುತತೆ',
    sortByCode: 'ಶ್ರೇಣಿ: ಮಾನದಂಡ ಕೋಡ್ (IS Code)',
    sortByYear: 'ಶ್ರೇಣಿ: ಪ್ರಕಟಣೆಯ ವರ್ಷ',
    exportDossier: 'ವರದಿ ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ',
    noResultsTitle: 'ಯಾವುದೇ ಹೊಂದಾಣಿಕೆಯ ಮಾನದಂಡ ಕಂಡುಬಂದಿಲ್ಲ',
    noResultsSubtitle: 'ದಯವಿಟ್ಟು ಬೇರೆ ಪದಗಳನ್ನು ಬಳಸಿ ಹುಡುಕಿ ಅಥವಾ ಸ್ಕೋರ್ ಮಿತಿಯನ್ನು ಕಡಿಮೆ ಮಾಡಿ.',
    matchScore: 'ಹೊಂದಾಣಿಕೆ ಸ್ಕೋರ್',
    highMatch: 'ಉತ್ತಮ ಹೊಂದಾಣಿಕೆ',
    mediumMatch: 'ಮಧ್ಯಮ ಹೊಂದಾಣಿಕೆ',
    lowMatch: 'ಭಾಗಶಃ ಹೊಂದಾಣಿಕೆ',
    mandatoryMark: 'ಕಡ್ಡಾಯ ISI ಮಾರ್ಕ್',
    crsMark: 'ಕಡ್ಡಾಯ ನೋಂದಣಿ (CRS)',
    voluntaryMark: 'ಐಚ್ಛಿಕ ಮಾನದಂಡ',
    harmonizationLabel: 'ಅಂತರರಾಷ್ಟ್ರೀಯ ಹೊಂದಾಣಿಕೆ',
    viewDetails: 'ವಿವರಗಳು ಮತ್ತು ಪರೀಕ್ಷೆಗಳನ್ನು ವೀಕ್ಷಿಸಿ',
    askAi: 'AI ಗುಣಮಟ್ಟ ಸಲಹೆಗಾರ',
    copyCode: 'ಕೋಡ್ ನಕಲಿಸಿ',
    copied: 'ನಕಲಿಸಲಾಗಿದೆ!',
    keyTestingParams: 'ಕಡ್ಡಾಯ ಪ್ರಯೋಗಾಲಯ ಪರೀಕ್ಷಾ ನಿಯತಾಂಕಗಳು',
    whyRecommended: 'ಈ ಮಾನದಂಡವನ್ನು ಏಕೆ ಶಿಫಾರಸು ಮಾಡಲಾಗಿದೆ?',
    topTokens: 'ಹೊಂದಾಣಿಕೆಯ ಕೀವರ್ಡ್ಗಳು',

    modalScopeTitle: 'ಮಾನದಂಡದ ವ್ಯಾಪ್ತಿ ಮತ್ತು ಉತ್ಪನ್ನಗಳು',
    modalTestingTitle: 'ಕಡ್ಡಾಯ ಪರೀಕ್ಷೆ ಮತ್ತು ಗುಣಮಟ್ಟ ನಿಯತಾಂಕಗಳು',
    modalKeywordsTitle: 'ಕೀವರ್ಡ್ಗಳು ಮತ್ತು ಶಬ್ದಕೋಶ',
    modalYear: 'ಪ್ರಕಟಣೆಯ ವರ್ಷ',
    modalHarmonization: 'ಅಂತರರಾಷ್ಟ್ರೀಯ ಮಾನದಂಡ',
    modalNotice: 'ಹ್ಯಾಕಥಾನ್ ಮೌಲ್ಯಮಾಪನ ಸೂಚನೆ: ಈ ಡೇಟಾ SIH26108 / GVHAX 2026 ಪ್ರದರ್ಶನಕ್ಕಾಗಿ ಮಾತ್ರ. ಅಧಿಕೃತ ಮಾಹಿತಿಗಾಗಿ BIS ತಾಣವನ್ನು ನೋಡಿ.',
    printSpec: 'ಮುದ್ರಿಸಿ',
    closeModal: 'ಮುಚ್ಚಿ',

    metricCorpus: 'ಒಟ್ಟು ಮಾನದಂಡಗಳು',
    metricCorpusSub: 'ಸಂಪೂರ್ಣ BIS ಡೇಟಾಸೆಟ್',
    metricCategories: 'ಉತ್ಪನ್ನ ವರ್ಗಗಳು',
    metricCategoriesSub: 'ವಿದ್ಯುತ್, ಸಿವಿಲ್, ಸುರಕ್ಷತೆ ಮತ್ತು ಇತರೆ',
    metricQueries: 'ಸಂಸ್ಕರಿಸಿದ ಹುಡುಕಾಟಗಳು',
    metricQueriesSub: 'SQLite ಡೇಟಾಬೇಸ್',
    metricLatency: 'TF-IDF ವೇಗ',
    metricLatencySub: 'ಅತಿ ವೇಗದ ಲೆಕ್ಕಾಚಾರ',
    chartCategoryTitle: 'ವರ್ಗವಾರು ಮಾನದಂಡಗಳು',
    chartComplianceTitle: 'ಪ್ರಮಾಣೀಕರಣ ಯೋಜನೆಗಳ ವಿತರಣೆ',
    recentQueriesTitle: 'ಇತ್ತೀಚಿನ ಹುಡುಕಾಟಗಳು',
    coverageSectorTitle: 'ಉದ್ಯಮ ವಲಯಗಳು',

    inspectorTitle: 'ಸಮಸ್ಯೆ #42 (SIH26108) ಇನ್‌ಸ್ಪೆಕ್ಟರ್',
    inspectorSubtitle: 'TF-IDF ಮತ್ತು ಕೊಸೈನ್ ಸಿಮಿಲಾರಿಟಿ ನಿಖರತೆ ಪರಿಶೀಲನೆ.',
    runAllTests: 'ಎಲ್ಲಾ ಯೂನಿಟ್ ಪರೀಕ್ಷೆಗಳನ್ನು ಚಲಾಯಿಸಿ',
    runningTests: 'ಪರೀಕ್ಷೆಗಳು ನಡೆಯುತ್ತಿವೆ...',
    tabAutomatedTests: 'ಸ್ವಯಂಚಾಲಿತ ಪರೀಕ್ಷಾ ಸೂಟ್',
    tabLiveVector: 'ಲೈವ್ ವೆಕ್ಟರ್ ವಿಶ್ಲೇಷಕ',
    tabFormulas: 'ಗಣಿತ ಸೂತ್ರಗಳು',
    allTestsPassed: 'ಎಲ್ಲಾ 7 ಪರೀಕ್ಷೆಗಳು ಯಶಸ್ವಿಯಾಗಿ ತೇರ್ಗಡೆಯಾಗಿವೆ (Passed)',
    avgLatency: 'ಸರಾಸರಿ ವೇಗ: ~1.2ms',
    statusCol: 'ಸ್ಥಿತಿ',
    queryCol: 'ಪರೀಕ್ಷಾ ಪ್ರಶ್ನೆ',
    expectedCol: 'ನಿರೀಕ್ಷಿತ ಮಾನದಂಡ',
    scoreCol: 'ಕೊಸೈನ್ ಸ್ಕೋರ್',
    executionCol: 'ವೇಗ',

    aiTitle: 'ಮಾನದಂಡಗಳ ಅನುಸರಣೆ ಮತ್ತು ಪರೀಕ್ಷಾ ಮಾರ್ಗದರ್ಶಿ',
    aiSubtitle: 'ಫ್ಯಾಕ್ಟರಿ ತಪಾಸಣಾ ಪಟ್ಟಿ, ಪರೀಕ್ಷಾ ಪ್ರೋಟೋಕಾಲ್ ಮತ್ತು BIS ಪರವಾನಗಿ ಮಾರ್ಗಸೂಚಿ.',
    aiSelectStandard: 'ಮಾನದಂಡವನ್ನು ಆಯ್ಕೆಮಾಡಿ:',
    btnFactoryChecklist: 'ಫ್ಯಾಕ್ಟರಿ ಗುಣಮಟ್ಟ ತಪಾಸಣಾ ಪಟ್ಟಿ',
    btnFactoryChecklistDesc: 'ಕಚ್ಚಾ ವಸ್ತುಗಳ ತಪಾಸಣೆ ಮತ್ತು ಆಂತರಿಕ ಗುಣಮಟ್ಟ ಅಂಶಗಳನ್ನು ಪಡೆಯಿರಿ.',
    btnLabProtocol: 'ಪ್ರಯೋಗಾಲಯ ಪರೀಕ್ಷಾ ಪ್ರೋಟೋಕಾಲ್',
    btnLabProtocolDesc: 'ಕಡ್ಡಾಯ ಭೌತಿಕ ಮತ್ತು ರಾಸಾಯನಿಕ ಪರೀಕ್ಷಾ ವಿಧಾನಗಳ ವಿವರಗಳು.',
    btnBisRoadmap: 'BIS ಪರವಾನಗಿ ಪ್ರಕ್ರಿಯೆ',
    btnBisRoadmapDesc: 'ತಯಾರಕರಿಗೆ ಹಂತ-ಹಂತದ ಪ್ರಮಾಣೀಕರಣ ಮಾರ್ಗದರ್ಶನ.',
    customQueryLabel: 'ನಿರ್ದಿಷ್ಟ ಪ್ರಶ್ನೆಯನ್ನು ಕೇಳಿ:',
    customQueryPlaceholder: 'ಉದಾ. ಕಂಡಕ್ಟರ್ ಪ್ರತಿರೋಧ ಪರೀಕ್ಷೆಯ ಕಡ್ಡಾಯ ಅವಶ್ಯಕತೆಗಳೇನು?',
    analyzeBtn: 'ವಿಶ್ಲೇಷಿಸಿ',
    analyzingBtn: 'ವಿಶ್ಲೇಷಿಸಲಾಗುತ್ತಿದೆ...',
    aiOutputTitle: 'AI ಸಲಹೆಗಾರರ ಫಲಿತಾಂಶ',
    clearAnalysis: 'ತೆರವುಗೊಳಿಸಿ',
    aiPlaceholderPrompt: 'ವಿಶ್ಲೇಷಣೆ ಪಡೆಯಲು ಮೇಲಿನ ಆಯ್ಕೆಗಳನ್ನು ಕ್ಲಿಕ್ ಮಾಡಿ',
    aiPlaceholderSub: 'ಆಯ್ಕೆಮಾಡಿದ ಮಾನದಂಡಕ್ಕಾಗಿ ಗುಣಮಟ್ಟದ ಮಾರ್ಗಸೂಚಿಗಳನ್ನು ಒದಗಿಸುತ್ತದೆ.',

    pitchTitle: 'ಭಾರತೀಯ ಮಾನದಂಡಗಳ ಶಿಫಾರಸು ವ್ಯವಸ್ಥೆ (SIH26108)',
    pitchSubtitle: 'ಹ್ಯಾಕಥಾನ್ ಪ್ರಸ್ತುತಿ ಮತ್ತು ತೀರ್ಪುಗಾರರ ಮೌಲ್ಯಮಾಪನ ದಾಖಲೆ',
    teamMatrixTitle: 'ತಂಡದ ಸಹಯೋಗ ಮತ್ತು ಮಾಡ್ಯೂಲ್ ವಿವರಗಳು',
    presentationScriptTitle: 'ತೀರ್ಪುಗಾರರಿಗಾಗಿ 2-3 ನಿಮಿಷಗಳ ಪ್ರಸ್ತುತಿ ಸ್ಕ್ರಿಪ್ಟ್',

    historyTitle: 'ಹುಡುಕಾಟ ಇತಿಹಾಸ (Search History)',
    noHistory: 'ಇನ್ನೂ ಯಾವುದೇ ಹುಡುಕಾಟ ಇತಿಹಾಸವಿಲ್ಲ.',
    noHistorySub: 'ಇತಿಹಾಸ ರಚಿಸಲು ಯಾವುದೇ ಉತ್ಪನ್ನವನ್ನು ಹುಡುಕಿ.',
    exportJson: 'JSON ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ',
    clearHistory: 'ಇತಿಹಾಸ ತೆರವುಗೊಳಿಸಿ',
    rerunSearch: 'ಮತ್ತೆ ಹುಡುಕಿ',

    exportTitle: 'ವರದಿ ರಫ್ತು ಮಾಡಿ',
    activeQueryLabel: 'ಪ್ರಸ್ತುತ ಹುಡುಕಾಟ:',
    exportSummary: 'ಶಿಫಾರಸು ಮಾಡಲಾದ ಭಾರತೀಯ ಮಾನದಂಡಗಳು, ಸ್ಕೋರ್‌ಗಳು ಮತ್ತು ಪರೀಕ್ಷಾ ನಿಯತಾಂಕಗಳನ್ನು ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ.',
    exportCsv: 'CSV ಸ್ಪ್ರೆಡ್‌ಶೀಟ್ ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ',
    exportCsvSub: 'ಕೋಷ್ಟಕ ರೂಪದ ವರದಿ.',
    exportPdf: 'ಮುದ್ರಿಸಿ / PDF ಆಗಿ ಉಳಿಸಿ',
    exportPdfSub: 'ಅಧಿಕೃತ ಬಳಕೆಗಾಗಿ ಮುದ್ರಣ ವರದಿ.',
    exportJsonOption: 'JSON ನಕಲಿಸಿ',
    exportJsonOptionSub: 'ಯಂತ್ರ ಓದಬಹುದಾದ ಡೇಟಾ.',

    adminTitle: 'ಭಾರತೀಯ ಮಾನದಂಡಗಳ (BIS) ಭಂಡಾರ',
    adminSubtitle: 'ಮಾನದಂಡಗಳನ್ನು ವೀಕ್ಷಿಸಿ, ನಿರ್ವಹಿಸಿ ಮತ್ತು ಹೊಸದನ್ನು ಸೇರಿಸಿ.',
    addNewStandard: 'ಹೊಸ ಮಾನದಂಡ ಸೇರಿಸಿ',
    searchCataloguePlaceholder: 'ಕೋಡ್, ಶೀರ್ಷಿಕೆ ಅಥವಾ ವರ್ಗದ ಮೂಲಕ ಹುಡುಕಿ...',
    codeCol: 'IS ಕೋಡ್',
    titleCol: 'ಶೀರ್ಷಿಕೆ ಮತ್ತು ವ್ಯಾಪ್ತಿ',
    categoryCol: 'ವರ್ಗ',
    industryCol: 'ವಲಯ',
    actionsCol: 'ಕ್ರಮಗಳು'
  },

  bn: {
    portalTitle: 'মানক সুপারিশ ইঞ্জিন (Standards Recommend)',
    portalSubtitle: 'ভারতীয় মানক (IS/BIS) সুপারিশ ব্যবস্থা',
    hackathonTag: 'GVHAX 2026 / আচার্য হ্যাকাথন',
    problemStatement: 'সমস্যা বিবৃতি #42 (SIH26108)',
    engineOnline: 'ইঞ্জিন সক্রিয় (<2ms)',
    tabRecommender: 'মানক অনুসন্ধান',
    tabCatalogue: 'তালিকা (Catalogue)',
    tabAnalytics: 'অ্যানালিটিক্স',
    tabInspector: 'ML মূল্যায়ন',
    tabAiAdvisor: 'AI পরামর্শক',
    tabPitch: 'টিম প্রেজেন্টেশন (Pitch)',
    historyBtn: 'ইতিহাস',
    selectLanguage: 'ভাষা নির্বাচন করুন',
    language: 'ভাষা',

    heroEyebrow: 'SIH26108 • সাবলিনিয়ার TF-IDF + কোসাইন সিমিলারিটি',
    heroHeadline: 'আপনার পণ্যের জন্য সঠিক ভারতীয় মানক',
    heroHeadlineHighlight: 'চিহ্নিত করুন।',
    searchPlaceholder: 'উদাঃ গৃহস্থালি বৈদ্যুতিক তার, সিমেন্ট, বোতলজাত পানীয় জল, হেলমেট, সোলার প্যানেল...',
    searchBtn: 'অনুসন্ধান',
    searchingBtn: 'অনুসন্ধান চলছে...',
    clearInput: 'মুছে ফেলুন',
    latencyLabel: 'অনুসন্ধান গতি',
    matchedCountLabel: 'মিলে যাওয়া মানক',
    sampleQueriesTitle: 'জনপ্রিয় পণ্য অনুসন্ধান:',
    engineSettings: 'অ্যালগরিদম সেটিংস',
    minConfidenceLabel: 'ন্যূনতম ম্যাচ স্কোর সীমা',
    topKLabel: 'সর্বোচ্চ সুপারিশ (Top-K)',
    closeSettings: 'সেটিংস বন্ধ করুন',
    samplePvcCable: 'পিভিসি বৈদ্যুতিক তার (PVC Cable)',
    sampleWater: 'প্যাকেজড পানীয় জল (Water)',
    sampleSolar: 'সোলার প্যানেল (Solar PV)',
    sampleCement: 'পোর্টল্যান্ড সিমেন্ট (Cement)',
    sampleHelmet: 'সুরক্ষা হেলমেট (Safety Helmet)',
    sampleLed: 'এলইডি বাতি (LED Lamp)',
    sampleBattery: 'লিথিয়াম ব্যাটারি (Battery)',
    sampleSteel: 'টিএমটি রড (Steel Bar)',

    refineTitle: 'ফিল্টার এবং শ্রেণিবিন্যাস',
    resetAll: 'সব রিসেট করুন',
    filterCategory: 'পণ্য বিভাগ',
    filterIndustry: 'শিল্প খাত',
    filterStatus: 'বিআইএস শংসাপত্র স্কিম',
    allCategories: 'সমস্ত বিভাগ',
    allIndustries: 'সমস্ত শিল্প',
    allStatuses: 'সমস্ত স্কিম',
    totalStandardsBadge: 'মোট উপলব্ধ মানক',

    resultsSummary: 'সুপারিশকৃত ভারতীয় মানক (Ranked IS Standards)',
    sortByRelevance: 'ক্রম: সর্বোচ্চ প্রাসঙ্গিকতা',
    sortByCode: 'ক্রম: মানক কোড (IS Code)',
    sortByYear: 'ক্রম: প্রকাশনার বছর',
    exportDossier: 'রিপোর্ট ডাউনলোড করুন',
    noResultsTitle: 'কোনো মানক খুঁজে পাওয়া যায়নি',
    noResultsSubtitle: 'অনুগ্রহ করে অন্য শব্দ ব্যবহার করুন বা স্কোর সীমা হ্রাস করুন।',
    matchScore: 'ম্যাচ স্কোর',
    highMatch: 'উত্তম মিল',
    mediumMatch: 'মাঝারি মিল',
    lowMatch: 'আংশিক মিল',
    mandatoryMark: 'বাধ্যতামূলক ISI মার্ক',
    crsMark: 'বাধ্যতামূলক নিবন্ধন (CRS)',
    voluntaryMark: 'স্বেচ্ছাসেবী মানক',
    harmonizationLabel: 'আন্তর্জাতিক সামঞ্জস্য',
    viewDetails: 'সম্পূর্ণ বিবরণ ও পরীক্ষা দেখুন',
    askAi: 'AI গুণমান পরামর্শক',
    copyCode: 'কোড কপি করুন',
    copied: 'কপি হয়েছে!',
    keyTestingParams: 'বাধ্যতামূলক পরীক্ষাগার পরীক্ষার পরামিতি',
    whyRecommended: 'কেন এই মানকটি সুপারিশ করা হলো?',
    topTokens: 'মিলে যাওয়া কীওয়ার্ড',

    modalScopeTitle: 'মানকের পরিধি ও পণ্যসমূহ',
    modalTestingTitle: 'বাধ্যতামূলক পরীক্ষা ও গুণমান পরামিতি',
    modalKeywordsTitle: 'কীওয়ার্ড ও পরিভাষা',
    modalYear: 'প্রকাশনার বছর',
    modalHarmonization: 'আন্তর্জাতিক মানক',
    modalNotice: 'হ্যাকাথন মূল্যায়ন বিজ্ঞপ্তি: এই তথ্য SIH26108 / GVHAX 2026 প্রদর্শনের জন্য। বিধিবদ্ধ নির্দেশনার জন্য বিআইএস (BIS) পোর্টাল দেখুন।',
    printSpec: 'প্রিন্ট করুন',
    closeModal: 'বন্ধ করুন',

    metricCorpus: 'মোট মানক',
    metricCorpusSub: 'সম্পূর্ণ বিআইএস ডেটাসেট',
    metricCategories: 'পণ্য বিভাগসমূহ',
    metricCategoriesSub: 'বৈদ্যুতিক, সিভিল, নিরাপত্তা ও অন্যান্য',
    metricQueries: 'প্রক্রিয়াকৃত অনুসন্ধান',
    metricQueriesSub: 'SQLite ডেটাবেস',
    metricLatency: 'TF-IDF গতি',
    metricLatencySub: 'দ্রুততম গণনা',
    chartCategoryTitle: 'বিভাগ অনুযায়ী মানক',
    chartComplianceTitle: 'শংসাপত্র স্কিম বণ্টন',
    recentQueriesTitle: 'সাম্প্রতিক অনুসন্ধান',
    coverageSectorTitle: 'শিল্প খাত কভারেজ',

    inspectorTitle: 'সমস্যা #42 (SIH26108) পরিদর্শক',
    inspectorSubtitle: 'TF-IDF ও কোসাইন সিমিলারিটি সঠিকতা যাচাই।',
    runAllTests: 'সমস্ত ইউনিট টেস্ট চালান',
    runningTests: 'টেস্ট চলছে...',
    tabAutomatedTests: 'স্বয়ংক্রিয় টেস্ট স্যুট',
    tabLiveVector: 'লাইভ ভেক্টর বিশ্লেষক',
    tabFormulas: 'গাণিতিক সূত্রাবলী',
    allTestsPassed: 'সমস্ত 7টি টেস্ট সফলভাবে উত্তীর্ণ (Passed)',
    avgLatency: 'গড় গতি: ~1.2ms',
    statusCol: 'স্থিতি',
    queryCol: 'টেস্ট কেস ও প্রশ্ন',
    expectedCol: 'প্রত্যাশিত মানক',
    scoreCol: 'কোসাইন স্কোর',
    executionCol: 'গতি',

    aiTitle: 'মানক সম্মতি ও পরীক্ষার গাইড',
    aiSubtitle: 'কারখানা চেকলিস্ট, ল্যাব পরীক্ষা পদ্ধতি এবং বিআইএস লাইসেন্সিং নির্দেশিকা।',
    aiSelectStandard: 'মানক নির্বাচন করুন:',
    btnFactoryChecklist: 'কারখানা গুণমান চেকলিস্ট',
    btnFactoryChecklistDesc: 'কাঁচামাল যাচাই এবং ইন-হাউস গুণমান নির্দেশিকা পান।',
    btnLabProtocol: 'পরীক্ষাগার পরীক্ষা প্রোটোকল',
    btnLabProtocolDesc: 'বাধ্যতামূলক শারীরিক ও রাসায়নিক পরীক্ষা পদ্ধতির বিবরণ।',
    btnBisRoadmap: 'বিআইএস লাইসেন্সিং প্রক্রিয়া',
    btnBisRoadmapDesc: 'উৎপাদকদের জন্য ধাপে ধাপে শংসাপত্র নির্দেশিকা।',
    customQueryLabel: 'নির্দিষ্ট প্রশ্ন জিজ্ঞাসা করুন:',
    customQueryPlaceholder: 'উদাঃ কন্ডাক্টর রেজিস্ট্যান্স পরীক্ষার প্রয়োজনীয়তা কী?',
    analyzeBtn: 'বিশ্লেষণ করুন',
    analyzingBtn: 'বিশ্লেষণ চলছে...',
    aiOutputTitle: 'AI পরামর্শক ফলাফল',
    clearAnalysis: 'মুছে ফেলুন',
    aiPlaceholderPrompt: 'বিশ্লেষণ পেতে উপরের বিকল্পগুলি নির্বাচন করুন',
    aiPlaceholderSub: 'নির্বাচিত মানকের জন্য গুণমান চেকলিস্ট এবং নির্দেশিকা প্রদান করে।',

    pitchTitle: 'ভারতীয় মানক সুপারিশ ইঞ্জিন (SIH26108)',
    pitchSubtitle: 'হ্যাকাথন উপস্থাপনা ও জুরি মূল্যায়ন নথি',
    teamMatrixTitle: 'টিম সহযোগিতা ও মডিউল বণ্টন',
    presentationScriptTitle: 'জুরির জন্য ২-৩ মিনিটের উপস্থাপনা স্ক্রিপ্ট',

    historyTitle: 'অনুসন্ধানের ইতিহাস (Search History)',
    noHistory: 'এখনও কোনো অনুসন্ধানের ইতিহাস নেই।',
    noHistorySub: 'ইতিহাস তৈরি করতে যেকোনো পণ্য অনুসন্ধান করুন।',
    exportJson: 'JSON ডাউনলোড করুন',
    clearHistory: 'ইতিহাস মুছুন',
    rerunSearch: 'পুনরায় অনুসন্ধান',

    exportTitle: 'রিপোর্ট এক্সপোর্ট করুন',
    activeQueryLabel: 'সক্রিয় অনুসন্ধান:',
    exportSummary: 'সুপারিশকৃত ভারতীয় মানক, স্কোর এবং পরীক্ষার বিবরণ ডাউনলোড করুন।',
    exportCsv: 'CSV স্প্রেডশীট ডাউনলোড করুন',
    exportCsvSub: 'সারণী আকারে সমস্ত তথ্য।',
    exportPdf: 'প্রিন্ট / PDF হিসেবে সংরক্ষণ',
    exportPdfSub: 'অফিসিয়াল ব্যবহারের জন্য প্রিন্ট রিপোর্ট।',
    exportJsonOption: 'JSON কপি করুন',
    exportJsonOptionSub: 'মেশিন-পঠনযোগ্য ডেটা।',

    adminTitle: 'ভারতীয় মানক (BIS) ভাণ্ডার',
    adminSubtitle: 'মানক দেখুন, পরিচালনা করুন এবং নতুন মানক যোগ করুন।',
    addNewStandard: 'নতুন মানক যোগ করুন',
    searchCataloguePlaceholder: 'কোড, শিরোনাম বা বিভাগ দ্বারা অনুসন্ধান করুন...',
    codeCol: 'IS কোড',
    titleCol: 'শিরোনাম ও পরিধি',
    categoryCol: 'বিভাগ',
    industryCol: 'খাত',
    actionsCol: 'পদক্ষেপ'
  }
};

/**
 * Cross-Lingual Query Translation & Synonym Dictionary for Indian Languages
 * Allows users to search in Hindi, Marathi, Gujarati, Tamil, Telugu, Kannada, Bengali
 * and matches the English standard corpus transparently.
 */
export const INDIC_SYNONYM_MAP: Record<string, string[]> = {
  // Cable / Electrical
  'तार': ['cable', 'wire', 'conductor', 'electrical'],
  'केबल': ['cable', 'wire', 'insulated', 'pvc'],
  'बिजली': ['electrical', 'electric', 'power', 'voltage'],
  'विद्युत': ['electrical', 'electric', 'cable', 'transformer'],
  'वायर': ['wire', 'cable', 'copper', 'aluminum'],
  'कंडक्टर': ['conductor', 'resistance', 'aluminum', 'copper'],
  'ಕೇಬಲ್': ['cable', 'wire', 'electrical'],
  'ತಂತಿ': ['wire', 'cable', 'electrical'],
  'వైరు': ['wire', 'cable', 'electrical'],
  'కేబుల్': ['cable', 'wire', 'electrical'],
  'கம்பி': ['wire', 'cable', 'electrical'],
  'கேபிள்': ['cable', 'wire', 'electrical'],
  'વાયર': ['wire', 'cable', 'electrical'],

  // Water / Food / Beverage
  'पानी': ['water', 'drinking', 'packaged', 'potable'],
  'પાણી': ['water', 'drinking', 'packaged'],
  'पाणी': ['water', 'drinking', 'packaged'],
  'நீர்': ['water', 'drinking', 'packaged'],
  'త్రాగునీరు': ['water', 'drinking', 'packaged'],
  'ಕುಡಿಯುವ ನೀರು': ['water', 'drinking', 'packaged'],
  'জল': ['water', 'drinking', 'packaged'],
  'पेयजल': ['drinking', 'water', 'packaged', 'bottled'],

  // Solar / Renewable
  'सौर': ['solar', 'photovoltaic', 'pv', 'panel', 'module'],
  'सोलर': ['solar', 'photovoltaic', 'pv', 'panel', 'module'],
  'સૂર્ય': ['solar', 'photovoltaic', 'panel'],
  'ಸೌರ': ['solar', 'photovoltaic', 'pv', 'panel'],
  'సౌర': ['solar', 'photovoltaic', 'pv', 'panel'],
  'சூரிய': ['solar', 'photovoltaic', 'panel'],
  'প্যানেল': ['solar', 'panel', 'photovoltaic'],

  // Cement / Construction / Civil
  'सीमेंट': ['cement', 'portland', 'concrete', 'construction'],
  'सिमेंट': ['cement', 'portland', 'concrete', 'construction'],
  'સિમેન્ટ': ['cement', 'portland', 'concrete'],
  'ಸಿಮೆಂಟ್': ['cement', 'portland', 'concrete'],
  'సిమెంట్': ['cement', 'portland', 'concrete'],
  'சிமெண்ட்': ['cement', 'portland', 'concrete'],
  'বিল্ডিং': ['building', 'construction', 'cement'],

  // Helmet / Safety / PPE
  'हेलमेट': ['helmet', 'safety', 'headgear', 'industrial'],
  'ಹೆಲ್ಮೆಟ್': ['helmet', 'safety', 'headgear'],
  'హెల్మెట్': ['helmet', 'safety', 'headgear'],
  'ஹெல்மெட்': ['helmet', 'safety', 'headgear'],
  'હેલ્મેટ': ['helmet', 'safety', 'headgear'],
  'सुरक्षा': ['safety', 'protective', 'ppe', 'hazard'],
  'ಸುರಕ್ಷತೆ': ['safety', 'protective', 'ppe'],
  'రక్షణ': ['safety', 'protective', 'ppe'],
  'பாதுகாப்பு': ['safety', 'protective', 'ppe'],

  // Steel / Rebar / Metallurgy
  'स्टील': ['steel', 'tmt', 'rebar', 'structural'],
  'स्टिल': ['steel', 'tmt', 'rebar', 'structural'],
  'ಲೋಹ': ['metal', 'steel', 'iron'],
  'ఉక్కు': ['steel', 'tmt', 'rebar', 'structural'],
  'எஃகு': ['steel', 'tmt', 'rebar', 'structural'],
  'ઇસ્પાત': ['steel', 'tmt', 'rebar'],
  'লোহা': ['iron', 'steel', 'metal'],

  // Lamps / Lighting / LED
  'एलईडी': ['led', 'lamp', 'bulb', 'lighting', 'luminaire'],
  'बल्ब': ['bulb', 'lamp', 'led', 'lighting'],
  'ದಿವ್ಯ': ['lamp', 'light', 'led'],
  'లైట్': ['light', 'lamp', 'led'],
  'விளக்கு': ['lamp', 'light', 'led'],

  // Battery / Storage
  'बैटरी': ['battery', 'lithium', 'accumulator', 'cell'],
  'બેટરી': ['battery', 'lithium', 'cell'],
  'ಬ್ಯಾಟರಿ': ['battery', 'lithium', 'cell'],
  'బ్యాటరీ': ['battery', 'lithium', 'cell'],
  'பேட்டரி': ['battery', 'lithium', 'cell'],

  // Transformer / Electronics
  'ट्रांसफॉर्मर': ['transformer', 'distribution', 'voltage', 'power'],
  'ट्रान्सफॉर्मर': ['transformer', 'distribution', 'power'],
  'மின்மாற்றி': ['transformer', 'electrical', 'power'],

  // Fire Safety / Extinguisher
  'अग्निशामक': ['fire', 'extinguisher', 'safety'],
  'आग': ['fire', 'extinguisher', 'safety', 'hazard'],
  'தீயணைப்பான்': ['fire', 'extinguisher', 'safety'],
  'ಅಗ್ನಿಶಾಮಕ': ['fire', 'extinguisher', 'safety'],
  'అగ్నిమాపక': ['fire', 'extinguisher', 'safety'],

  // Gas / LPG
  'गैस': ['gas', 'lpg', 'cylinder', 'petroleum'],
  'सिलेंडर': ['cylinder', 'lpg', 'gas', 'pressure'],
  'ഗ്യാസ്': ['gas', 'lpg', 'cylinder'],
  'ગેસ': ['gas', 'lpg', 'cylinder']
};

/**
 * Build complete TRANSLATIONS dictionary with aliases
 */
export const TRANSLATIONS = (Object.keys(RAW_TRANSLATIONS) as LanguageCode[]).reduce((acc, lang) => {
  const raw = RAW_TRANSLATIONS[lang];
  acc[lang] = {
    ...raw,
    rankedStandards: raw.resultsSummary,
    sortRelevance: raw.sortByRelevance,
    sortCode: raw.sortByCode,
    sortYear: raw.sortByYear,
    noResults: raw.noResultsTitle,
    noResultsSub: raw.noResultsSubtitle,
    resetFilters: raw.resetAll,
    downloadCsv: raw.exportCsv,
    copyJson: raw.exportJsonOption,
    voluntaryStandard: raw.voluntaryMark,
    topMatch: raw.highMatch,
    resultsFound: raw.matchedCountLabel
  };
  return acc;
}, {} as Record<LanguageCode, TranslationDictionary>);

/**
 * Expand multi-lingual query by looking up cross-lingual dictionary
 */
export function expandMultilingualQuery(query: string): string {
  if (!query || !query.trim()) return query;
  
  const words = query.trim().split(/\s+/);
  const expansions: string[] = [];

  for (const word of words) {
    const cleanWord = word.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, '');
    if (INDIC_SYNONYM_MAP[cleanWord]) {
      expansions.push(...INDIC_SYNONYM_MAP[cleanWord]);
    }
  }

  if (expansions.length > 0) {
    // Unique expansions
    const uniqueExpansions = Array.from(new Set(expansions));
    return `${query} ${uniqueExpansions.join(' ')}`;
  }

  return query;
}

/**
 * Helper to get active translation bundle
 */
export function getTranslation(lang: LanguageCode): TranslationDictionary {
  return TRANSLATIONS[lang] || TRANSLATIONS.en;
}
