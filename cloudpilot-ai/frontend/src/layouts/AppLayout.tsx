import type { ReactNode } from "react";
import { Sidebar } from "../components/Sidebar";
import { Topbar } from "../components/Topbar";

export function AppLayout({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="flex">
        <Sidebar />
        <section className="min-h-screen flex-1">
          <Topbar />
          <div className="p-6">{children}</div>
        </section>
      </div>
    </main>
  );
}