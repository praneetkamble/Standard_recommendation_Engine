import React from 'react';
import { Standard, SearchHistoryItem } from '../types/standards';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer, 
  PieChart, 
  Pie, 
  Cell, 
  Legend 
} from 'recharts';
import { 
  BarChart3, 
  CheckCircle2, 
  Zap, 
  Database, 
  TrendingUp, 
  ShieldCheck, 
  Activity,
  Layers
} from 'lucide-react';

interface AnalyticsDashboardProps {
  standards: Standard[];
  history: SearchHistoryItem[];
}

const COLORS = ['#1e293b', '#475569', '#d97706', '#059669', '#dc2626', '#64748b', '#94a3b8', '#0f172a'];
const STATUS_COLORS: Record<string, string> = {
  'Mandatory ISI Mark': '#b91c1c',
  'Compulsory Registration (CRS)': '#d97706',
  'Voluntary Standard': '#334155',
  'Under Revision': '#94a3b8'
};

export const AnalyticsDashboard: React.FC<AnalyticsDashboardProps> = ({
  standards,
  history
}) => {
  // 1. Compute Category Distribution
  const categoryMap: Record<string, number> = {};
  standards.forEach((s) => {
    categoryMap[s.category] = (categoryMap[s.category] || 0) + 1;
  });

  const categoryData = Object.entries(categoryMap).map(([name, count]) => ({
    name: name.replace(' Products', '').replace(' Materials', ''),
    fullName: name,
    count
  })).sort((a, b) => b.count - a.count);

  // 2. Compute Compliance Status Distribution
  const statusMap: Record<string, number> = {};
  standards.forEach((s) => {
    statusMap[s.status] = (statusMap[s.status] || 0) + 1;
  });

  const statusData = Object.entries(statusMap).map(([name, value]) => ({
    name,
    value
  }));

  // 3. Search History Frequency
  const searchCounts: Record<string, number> = {};
  history.forEach((h) => {
    const q = h.query.trim();
    if (q) {
      searchCounts[q] = (searchCounts[q] || 0) + 1;
    }
  });

  const topSearches = Object.entries(searchCounts)
    .map(([query, count]) => ({ query, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 6);

  // 4. Industry Distribution
  const industryMap: Record<string, number> = {};
  standards.forEach((s) => {
    industryMap[s.industry] = (industryMap[s.industry] || 0) + 1;
  });

  const industryData = Object.entries(industryMap)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 7);

  return (
    <div className="space-y-6">
      {/* Metric Cards Top Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white border border-slate-200 p-6 shadow-xs rounded-xs flex items-center justify-between">
          <div>
            <span className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em] block">
              Standards in Corpus
            </span>
            <span className="text-3xl font-serif font-bold text-slate-900 mt-1 block">
              {standards.length}
            </span>
            <span className="text-[11px] text-emerald-700 font-semibold flex items-center gap-1 mt-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Full BIS Mock Dataset</span>
            </span>
          </div>
          <div className="w-12 h-12 rounded-xs bg-slate-50 border border-slate-200 text-slate-800 flex items-center justify-center">
            <Database className="w-5 h-5" />
          </div>
        </div>

        <div className="bg-white border border-slate-200 p-6 shadow-xs rounded-xs flex items-center justify-between">
          <div>
            <span className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em] block">
              Product Categories
            </span>
            <span className="text-3xl font-serif font-bold text-slate-900 mt-1 block">
              {Object.keys(categoryMap).length}
            </span>
            <span className="text-[11px] text-slate-600 font-medium mt-1 block">
              Electrical, Civil, Safety &amp; More
            </span>
          </div>
          <div className="w-12 h-12 rounded-xs bg-slate-50 border border-slate-200 text-slate-800 flex items-center justify-center">
            <Layers className="w-5 h-5" />
          </div>
        </div>

        <div className="bg-white border border-slate-200 p-6 shadow-xs rounded-xs flex items-center justify-between">
          <div>
            <span className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em] block">
              Queries Processed
            </span>
            <span className="text-3xl font-serif font-bold text-slate-900 mt-1 block">
              {history.length}
            </span>
            <span className="text-[11px] text-slate-500 font-mono mt-1 block">
              SQLite Audit Store
            </span>
          </div>
          <div className="w-12 h-12 rounded-xs bg-slate-50 border border-slate-200 text-slate-800 flex items-center justify-center">
            <TrendingUp className="w-5 h-5" />
          </div>
        </div>

        <div className="bg-white border border-slate-200 p-6 shadow-xs rounded-xs flex items-center justify-between">
          <div>
            <span className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em] block">
              TF-IDF Latency
            </span>
            <span className="text-3xl font-serif font-bold text-emerald-700 font-mono mt-1 block">
              &lt; 2.0 ms
            </span>
            <span className="text-[11px] text-slate-600 font-medium mt-1 block">
              In-Memory Vector Space
            </span>
          </div>
          <div className="w-12 h-12 rounded-xs bg-slate-50 border border-slate-200 text-slate-800 flex items-center justify-center">
            <Zap className="w-5 h-5 text-amber-500" />
          </div>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Category Breakdown Bar Chart */}
        <div className="bg-white border border-slate-200 p-6 shadow-xs rounded-xs">
          <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-slate-800" />
              <h3 className="font-serif font-bold text-slate-900 text-base">Standards by Product Category</h3>
            </div>
            <span className="text-[10px] text-slate-400 font-mono uppercase tracking-wider">Volume Distribution</span>
          </div>

          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={categoryData} margin={{ top: 10, right: 10, left: -20, bottom: 20 }}>
                <XAxis dataKey="name" tick={{ fontSize: 10 }} interval={0} angle={-25} textAnchor="end" />
                <YAxis allowDecimals={false} tick={{ fontSize: 11 }} />
                <Tooltip 
                  formatter={(value: any) => [`${value} Standards`, 'Count']}
                  labelFormatter={(label, payload) => payload[0]?.payload?.fullName || label}
                />
                <Bar dataKey="count" fill="#1e293b" radius={[2, 2, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Regulatory Compliance Breakdown Donut */}
        <div className="bg-white border border-slate-200 p-6 shadow-xs rounded-xs">
          <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-slate-800" />
              <h3 className="font-serif font-bold text-slate-900 text-base">Compliance Scheme Distribution</h3>
            </div>
            <span className="text-[10px] text-slate-400 font-mono uppercase tracking-wider">BIS Regulatory Status</span>
          </div>

          <div className="h-64 w-full flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={statusData}
                  cx="50%"
                  cy="50%"
                  innerRadius={55}
                  outerRadius={80}
                  paddingAngle={4}
                  dataKey="value"
                >
                  {statusData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={STATUS_COLORS[entry.name] || COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value: any) => [`${value} Standards`, 'Volume']} />
                <Legend 
                  layout="horizontal" 
                  verticalAlign="bottom" 
                  align="center"
                  wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Bottom Row: Top Queries & Industry Matrix */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Searched Queries */}
        <div className="bg-white border border-slate-200 p-6 shadow-xs rounded-xs">
          <div className="flex items-center gap-2 mb-4 pb-2 border-b border-slate-100">
            <Activity className="w-4 h-4 text-amber-600" />
            <h3 className="font-serif font-bold text-slate-900 text-base">Recent &amp; Frequent Search Queries</h3>
          </div>

          <div className="space-y-2.5">
            {topSearches.length === 0 ? (
              <p className="text-xs text-slate-400 py-6 text-center italic">No searches logged in this session yet.</p>
            ) : (
              topSearches.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between p-2.5 bg-[#fafaf7] rounded-xs border border-slate-200 text-xs">
                  <span className="font-semibold text-slate-800 truncate mr-2">"{item.query}"</span>
                  <span className="bg-slate-200 text-slate-800 text-[10px] font-bold px-2 py-0.5 rounded-xs font-mono uppercase shrink-0">
                    {item.count} query{item.count > 1 ? 's' : ''}
                  </span>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Industry Sector Breakdown */}
        <div className="bg-white border border-slate-200 p-6 shadow-xs rounded-xs">
          <div className="flex items-center gap-2 mb-4 pb-2 border-b border-slate-100">
            <Layers className="w-4 h-4 text-slate-800" />
            <h3 className="font-serif font-bold text-slate-900 text-base">Corpus Coverage by Sector</h3>
          </div>

          <div className="space-y-2.5">
            {industryData.map((ind, idx) => (
              <div key={idx} className="flex items-center justify-between text-xs">
                <span className="text-slate-700 font-medium truncate w-48">{ind.name}</span>
                <div className="flex-1 mx-3 bg-slate-100 h-2 rounded-xs overflow-hidden border border-slate-200">
                  <div 
                    className="bg-slate-900 h-full rounded-xs"
                    style={{ width: `${(ind.count / standards.length) * 100}%` }}
                  ></div>
                </div>
                <span className="font-mono font-bold text-slate-600 w-8 text-right">{ind.count}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
