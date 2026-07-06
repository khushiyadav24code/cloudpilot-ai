import { Bell, Search } from "lucide-react";

export function Topbar() {
  return (
    <header className="flex items-center justify-between border-b border-white/10 bg-slate-950/60 px-6 py-4 backdrop-blur">
      <div>
        <h2 className="text-xl font-semibold">Dashboard</h2>
        <p className="text-sm text-slate-400">Create and manage AI-generated cloud infrastructure.</p>
      </div>

      <div className="flex items-center gap-3">
        <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 md:flex">
          <Search size={16} className="text-slate-400" />
          <span className="text-sm text-slate-500">Search deployments...</span>
        </div>
        <button className="rounded-full border border-white/10 p-3">
          <Bell size={18} />
        </button>
      </div>
    </header>
  );
}