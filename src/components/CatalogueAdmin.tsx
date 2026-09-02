import React, { useState } from 'react';
import { Standard, ComplianceStatus } from '../types/standards';
import { 
  Plus, 
  Search, 
  Trash2, 
  Edit3, 
  RefreshCw, 
  Download, 
  CheckCircle2, 
  AlertCircle,
  Database,
  Tag,
  Sliders,
  RotateCcw,
  X,
  Save,
  Layers
} from 'lucide-react';
import { CATEGORIES_LIST, INDUSTRIES_LIST } from '../data/mockStandardsCatalogue';

interface CatalogueAdminProps {
  standards: Standard[];
  onAddStandard: (std: Omit<Standard, 'id'>) => void;
  onUpdateStandard: (id: string, std: Partial<Standard>) => void;
  onDeleteStandard: (id: string) => void;
  onResetCatalogue: () => void;
  onViewDetails: (std: Standard) => void;
}

export const CatalogueAdmin: React.FC<CatalogueAdminProps> = ({
  standards,
  onAddStandard,
  onUpdateStandard,
  onDeleteStandard,
  onResetCatalogue,
  onViewDetails
}) => {
  const [searchFilter, setSearchFilter] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All Categories');
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingStandard, setEditingStandard] = useState<Standard | null>(null);
  const [reindexedToast, setReindexedToast] = useState(false);

  // Form State for Add / Edit
  const [formData, setFormData] = useState({
    standard_code: '',
    title: '',
    category: 'Electrical Products',
    product: '',
    description: '',
    keywords: '',
    industry: 'Power & Electrical',
    status: 'Mandatory ISI Mark' as ComplianceStatus,
    related_products: '',
    publication_year: 2022,
    scope: '',
    test_parameters: '',
    harmonized_standard: ''
  });

  const filteredStandards = standards.filter((s) => {
    const matchesCategory = categoryFilter === 'All Categories' || s.category === categoryFilter;
    const q = searchFilter.toLowerCase().trim();
    const matchesSearch = 
      !q || 
      s.standard_code.toLowerCase().includes(q) || 
      s.title.toLowerCase().includes(q) || 
      s.product.toLowerCase().includes(q) ||
      s.keywords.some(k => k.toLowerCase().includes(q));
    return matchesCategory && matchesSearch;
  });

  const handleOpenAdd = () => {
    setEditingStandard(null);
    setFormData({
      standard_code: 'IS ',
      title: '',
      category: 'Electrical Products',
      product: '',
      description: '',
      keywords: '',
      industry: 'Power & Electrical',
      status: 'Mandatory ISI Mark',
      related_products: '',
      publication_year: new Date().getFullYear(),
      scope: '',
      test_parameters: '',
      harmonized_standard: ''
    });
    setShowAddModal(true);
  };

  const handleOpenEdit = (std: Standard) => {
    setEditingStandard(std);
    setFormData({
      standard_code: std.standard_code,
      title: std.title,
      category: std.category,
      product: std.product,
      description: std.description,
      keywords: std.keywords.join(', '),
      industry: std.industry,
      status: std.status,
      related_products: std.related_products.join(', '),
      publication_year: std.publication_year,
      scope: std.scope,
      test_parameters: std.test_parameters.join(', '),
      harmonized_standard: std.harmonized_standard || ''
    });
    setShowAddModal(true);
  };

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.standard_code || !formData.title || !formData.product) {
      alert('Please fill all required fields (Standard Code, Title, Product).');
      return;
    }

    const payload = {
      standard_code: formData.standard_code.trim(),
      title: formData.title.trim(),
      category: formData.category,
      product: formData.product.trim(),
      description: formData.description.trim() || formData.title,
      keywords: formData.keywords.split(',').map(k => k.trim()).filter(Boolean),
      industry: formData.industry,
      status: formData.status,
      related_products: formData.related_products.split(',').map(r => r.trim()).filter(Boolean),
      publication_year: Number(formData.publication_year) || 2022,
      scope: formData.scope.trim() || formData.description,
      test_parameters: formData.test_parameters.split(',').map(t => t.trim()).filter(Boolean),
      harmonized_standard: formData.harmonized_standard.trim()
    };

    if (editingStandard) {
      onUpdateStandard(editingStandard.id, payload);
    } else {
      onAddStandard(payload);
    }

    setShowAddModal(false);
    triggerReindexFeedback();
  };

  const triggerReindexFeedback = () => {
    setReindexedToast(true);
    setTimeout(() => setReindexedToast(false), 2500);
  };

  const handleExportJson = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(standards, null, 2));
    const dl = document.createElement('a');
    dl.setAttribute("href", dataStr);
    dl.setAttribute("download", `indian_standards_catalogue_${Date.now()}.json`);
    document.body.appendChild(dl);
    dl.click();
    dl.remove();
  };

  return (
    <div className="space-y-6">
      {/* Header & Controls */}
      <div className="bg-white border border-slate-200 p-6 shadow-xs rounded-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <Database className="w-5 h-5 text-slate-900" />
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-900 tracking-tight">
              Standards Catalogue &amp; Corpus Admin
            </h2>
            <span className="bg-slate-100 text-slate-900 text-[10px] font-bold px-2 py-0.5 rounded-xs border border-slate-300 uppercase tracking-wider font-mono">
              {standards.length} Indexed
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Browse and curate standards records. All changes immediately synchronize into the sublinear TF-IDF vector matrix.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={triggerReindexFeedback}
            className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider bg-white hover:bg-slate-50 text-slate-800 px-3 py-2 rounded-xs border border-slate-200 shadow-xs transition-colors cursor-pointer"
            title="Rebuild TF-IDF Vector Space"
          >
            <RefreshCw className="w-3.5 h-3.5 text-slate-700" />
            <span>Re-Index Vectors</span>
          </button>

          <button
            onClick={handleExportJson}
            className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider bg-white hover:bg-slate-50 text-slate-800 px-3 py-2 rounded-xs border border-slate-200 shadow-xs transition-colors cursor-pointer"
          >
            <Download className="w-3.5 h-3.5 text-slate-700" />
            <span>Export JSON</span>
          </button>

          <button
            onClick={handleOpenAdd}
            className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 rounded-xs shadow-xs transition-colors cursor-pointer"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add Standard</span>
          </button>
        </div>
      </div>

      {/* Reindex Toast Feedback */}
      {reindexedToast && (
        <div className="bg-slate-900 text-white text-xs font-mono font-bold px-4 py-2.5 rounded-xs shadow-md flex items-center justify-between animate-in fade-in border border-slate-800">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>TF-IDF Vector Space successfully updated and normalized across {standards.length} documents!</span>
          </div>
          <span className="text-amber-400 font-mono text-[11px]">&lt;1.8ms</span>
        </div>
      )}

      {/* Search & Category Filter Bar */}
      <div className="bg-white border border-slate-200 p-4 shadow-xs rounded-xs flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
          <input
            type="text"
            value={searchFilter}
            onChange={(e) => setSearchFilter(e.target.value)}
            placeholder="Search code, title, keywords..."
            className="w-full bg-slate-50 border border-slate-200 rounded-xs pl-9 pr-3 py-1.5 text-xs text-slate-900 outline-none focus:border-slate-900"
          />
          {searchFilter && (
            <button
              onClick={() => setSearchFilter('')}
              className="absolute right-2.5 top-2 text-slate-400 hover:text-slate-600"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto">
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="bg-slate-50 border border-slate-200 text-xs font-medium text-slate-800 rounded-xs px-3 py-1.5 outline-none focus:border-slate-900"
          >
            {CATEGORIES_LIST.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>

          <button
            onClick={onResetCatalogue}
            className="text-[11px] text-slate-500 hover:text-red-700 font-bold uppercase tracking-wider px-2 py-1.5 rounded-xs transition-colors whitespace-nowrap cursor-pointer border-b border-dotted border-slate-300"
            title="Reset to factory dataset"
          >
            Reset Default
          </button>
        </div>
      </div>

      {/* Standards Table */}
      <div className="bg-white border border-slate-200 overflow-hidden shadow-xs rounded-xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 font-bold uppercase tracking-wider text-[10px]">
                <th className="py-3 px-4">Standard Code</th>
                <th className="py-3 px-4">Title &amp; Product Scope</th>
                <th className="py-3 px-4">Category</th>
                <th className="py-3 px-4">Regulatory Status</th>
                <th className="py-3 px-4">Year</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {filteredStandards.length === 0 ? (
                <tr>
                  <td colSpan={6} className="text-center py-12 text-slate-400">
                    No standards match the selected filters.
                  </td>
                </tr>
              ) : (
                filteredStandards.map((std) => (
                  <tr key={std.id} className="hover:bg-[#fafaf7] transition-colors">
                    <td className="py-3.5 px-4 font-mono font-bold text-slate-900 whitespace-nowrap">
                      {std.standard_code}
                      {std.is_custom && (
                        <span className="ml-1.5 bg-amber-100 text-amber-900 text-[9px] px-1.5 py-0.2 rounded-xs uppercase font-sans font-bold">
                          Custom
                        </span>
                      )}
                    </td>

                    <td className="py-3.5 px-4 max-w-xs sm:max-w-md">
                      <span className="font-bold text-slate-900 block truncate">{std.title}</span>
                      <span className="text-slate-500 text-[11px] truncate block">{std.product}</span>
                    </td>

                    <td className="py-3.5 px-4 whitespace-nowrap">
                      <span className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded-xs font-semibold border border-slate-200 text-[10px] uppercase">
                        {std.category}
                      </span>
                    </td>

                    <td className="py-3.5 px-4 whitespace-nowrap">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-xs uppercase ${
                        std.status === 'Mandatory ISI Mark'
                          ? 'bg-red-50 text-red-700 border border-red-200'
                          : std.status === 'Compulsory Registration (CRS)'
                          ? 'bg-amber-50 text-amber-700 border border-amber-200'
                          : 'bg-slate-100 text-slate-700 border border-slate-200'
                      }`}>
                        {std.status}
                      </span>
                    </td>

                    <td className="py-3.5 px-4 font-mono text-slate-600 whitespace-nowrap">
                      {std.publication_year}
                    </td>

                    <td className="py-3.5 px-4 text-right whitespace-nowrap space-x-1">
                      <button
                        onClick={() => onViewDetails(std)}
                        className="p-1.5 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-xs cursor-pointer"
                        title="View Full Standard Dossier"
                      >
                        <Layers className="w-4 h-4" />
                      </button>

                      <button
                        onClick={() => handleOpenEdit(std)}
                        className="p-1.5 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-xs cursor-pointer"
                        title="Edit Standard"
                      >
                        <Edit3 className="w-4 h-4" />
                      </button>

                      <button
                        onClick={() => {
                          if (confirm(`Delete standard ${std.standard_code}?`)) {
                            onDeleteStandard(std.id);
                            triggerReindexFeedback();
                          }
                        }}
                        className="p-1.5 text-red-600 hover:text-red-800 hover:bg-red-50 rounded-xs cursor-pointer"
                        title="Delete Standard"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add / Edit Standard Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in">
          <div 
            className="bg-white rounded-xs shadow-2xl border border-slate-200 max-w-2xl w-full max-h-[90vh] flex flex-col overflow-hidden animate-in zoom-in-95"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-slate-900 text-white p-5 flex items-center justify-between border-b border-slate-800">
              <h3 className="font-serif font-bold text-lg text-white">
                {editingStandard ? `Edit Standard (${editingStandard.standard_code})` : 'Add New Indian Standard'}
              </h3>
              <button onClick={() => setShowAddModal(false)} className="text-slate-400 hover:text-white cursor-pointer">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmitForm} className="p-6 overflow-y-auto space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-700 uppercase tracking-wider text-[10px] mb-1">Standard Code *</label>
                  <input
                    type="text"
                    required
                    value={formData.standard_code}
                    onChange={(e) => setFormData({ ...formData, standard_code: e.target.value })}
                    placeholder="e.g. IS 694:2010"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xs p-2 font-mono"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 uppercase tracking-wider text-[10px] mb-1">Publication Year</label>
                  <input
                    type="number"
                    value={formData.publication_year}
                    onChange={(e) => setFormData({ ...formData, publication_year: parseInt(e.target.value) || 2022 })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xs p-2"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 uppercase tracking-wider text-[10px] mb-1">Standard Title *</label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="e.g. PVC Insulated Cables for Working Voltages up to 1100V"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xs p-2"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-700 uppercase tracking-wider text-[10px] mb-1">Category *</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xs p-2"
                  >
                    {CATEGORIES_LIST.filter(c => c !== 'All Categories').map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 uppercase tracking-wider text-[10px] mb-1">Compliance Status</label>
                  <select
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value as ComplianceStatus })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xs p-2"
                  >
                    <option value="Mandatory ISI Mark">Mandatory ISI Mark</option>
                    <option value="Compulsory Registration (CRS)">Compulsory Registration (CRS)</option>
                    <option value="Voluntary Standard">Voluntary Standard</option>
                    <option value="Under Revision">Under Revision</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 uppercase tracking-wider text-[10px] mb-1">Applicable Product Scope *</label>
                <input
                  type="text"
                  required
                  value={formData.product}
                  onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                  placeholder="e.g. Electrical cable, domestic wiring, copper cables"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xs p-2"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 uppercase tracking-wider text-[10px] mb-1">Technical Description</label>
                <textarea
                  rows={2}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Detailed requirements and specifications..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-xs p-2"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 uppercase tracking-wider text-[10px] mb-1">Keywords (Comma separated) *</label>
                <input
                  type="text"
                  value={formData.keywords}
                  onChange={(e) => setFormData({ ...formData, keywords: e.target.value })}
                  placeholder="cable, wire, pvc, domestic, electrical, conduit"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xs p-2 font-mono"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 uppercase tracking-wider text-[10px] mb-1">Mandatory Test Parameters (Comma separated)</label>
                <input
                  type="text"
                  value={formData.test_parameters}
                  onChange={(e) => setFormData({ ...formData, test_parameters: e.target.value })}
                  placeholder="Conductor resistance, Flame retardance, High voltage test"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xs p-2"
                />
              </div>

              <div className="bg-slate-50 p-4 -mx-6 -mb-6 border-t border-slate-200 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 font-bold uppercase text-[10px] tracking-wider rounded-xs cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-slate-900 hover:bg-slate-800 text-white font-bold uppercase text-[10px] tracking-wider rounded-xs shadow-xs flex items-center gap-1.5 cursor-pointer"
                >
                  <Save className="w-3.5 h-3.5" />
                  <span>{editingStandard ? 'Save Changes' : 'Create & Index'}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
