import { Cloud } from "lucide-react";
import { NavLink } from "react-router-dom";
import { navItems } from "../data/navItems";

export function Sidebar() {
  return (
    <aside className="hidden min-h-screen w-72 border-r border-white/10 bg-slate-950/80 p-6 lg:block">
      <div className="mb-10 flex items-center gap-3">
        <div className="rounded-2xl bg-cyan-300 p-3 text-slate-950">
          <Cloud />
        </div>
        <div>
          <h1 className="text-xl font-bold">CloudPilot AI</h1>
          <p className="text-xs text-slate-400">Autonomous Cloud Engineer</p>
        </div>
      </div>

      <nav className="space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.label}
              to={item.path}
              className={({ isActive }) =>
                `flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left transition ${
                  isActive
                    ? "bg-cyan-300 text-slate-950"
                    : "text-slate-300 hover:bg-white/10 hover:text-white"
                }`
              }
            >
              <Icon size={18} />
              {item.label}
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
}