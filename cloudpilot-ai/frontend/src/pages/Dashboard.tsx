import { useMemo, useState } from "react";
import {
  Bell,
  Cloud,
  Copy,
  Download,
  Search,
  Send,
  Shield,
  DollarSign,
  FileCode2,
  Server,
  Database,
  Globe2,
  CheckCircle2,
  X,
} from "lucide-react";
import { analyzePrompt } from "../ai/analyzer";

const history = [
  "portfolio website",
  "secure banking payment application",
  "AI chatbot with GPU and Docker",
  "e-commerce app with MySQL and CDN",
];

const notifications = [
  "Architecture generated successfully",
  "Terraform files are ready",
  "Security score updated",
  "Cost estimate calculated",
];

export function Dashboard() {
  const [prompt, setPrompt] = useState("");
  const [generated, setGenerated] = useState(false);
  const [bellOpen, setBellOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [result, setResult] = useState(analyzePrompt("portfolio website"));

  const filteredHistory = useMemo(() => {
    return history.filter((item) =>
      item.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const handleGenerate = () => {
    if (!prompt.trim()) {
      alert("Enter a cloud requirement first");
      return;
    }

    const analysis = analyzePrompt(prompt);
    setResult(analysis);
    setGenerated(true);
  };

  const copyTerraform = () => {
    navigator.clipboard.writeText(result.terraformCode);
    alert("Terraform copied");
  };

  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(99,102,241,.16),transparent_35%)]" />

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-6">
        <nav className="mb-8 flex items-center justify-between rounded-3xl border border-white/10 bg-white/[0.04] px-5 py-4 backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-cyan-300 p-3 text-slate-950">
              <Cloud />
            </div>
            <div>
              <h1 className="text-xl font-bold">CloudPilot AI</h1>
              <p className="text-xs text-slate-400">AI Cloud Command Center</p>
            </div>
          </div>

          <div className="relative flex items-center gap-3">
            <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-slate-900 px-4 py-3 md:flex">
              <Search size={16} className="text-slate-400" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search projects..."
                className="bg-transparent text-sm outline-none placeholder:text-slate-500"
              />
            </div>

            <button
              onClick={() => setBellOpen(!bellOpen)}
              className="relative rounded-full border border-white/10 bg-slate-900 p-3"
            >
              <Bell size={18} />
              <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-cyan-300" />
            </button>

            {bellOpen && (
              <div className="absolute right-0 top-14 w-80 rounded-3xl border border-white/10 bg-slate-950 p-4 shadow-2xl">
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="font-semibold">Notifications</h3>
                  <X size={16} onClick={() => setBellOpen(false)} />
                </div>
                {notifications.map((note) => (
                  <div
                    key={note}
                    className="mb-2 rounded-2xl bg-white/5 p-3 text-sm text-slate-300"
                  >
                    {note}
                  </div>
                ))}
              </div>
            )}
          </div>
        </nav>

        {search && (
          <div className="mb-6 rounded-3xl border border-white/10 bg-white/[0.04] p-4">
            <p className="mb-3 text-sm text-slate-400">Search results</p>
            <div className="flex flex-wrap gap-3">
              {filteredHistory.map((item) => (
                <button
                  key={item}
                  onClick={() => setPrompt(item)}
                  className="rounded-full bg-cyan-300/10 px-4 py-2 text-sm text-cyan-200"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}

        <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl">
            <p className="mb-3 text-sm text-cyan-300">Describe your infrastructure</p>

            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Example: Deploy an AI chatbot with GPU, Docker, PostgreSQL, Redis and monitoring..."
              className="min-h-44 w-full resize-none rounded-3xl border border-white/10 bg-[#0b1224] p-5 text-lg outline-none placeholder:text-slate-500"
            />

            <button
              onClick={handleGenerate}
              className="mt-4 flex items-center gap-2 rounded-full bg-cyan-300 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-200"
            >
              Generate Infrastructure <Send size={16} />
            </button>
          </div>

          <div className="grid gap-4">
            <Stat icon={<Shield />} label="Security" value={generated ? result.securityScore : "--"} />
            <Stat icon={<DollarSign />} label="Cost" value={generated ? result.cost : "--"} />
            <Stat icon={<FileCode2 />} label="Terraform" value={generated ? result.terraformFiles : "--"} />
          </div>
        </section>

        {generated && (
          <section className="mt-6 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
              <p className="text-sm text-cyan-300">Detected type</p>
              <h2 className="mt-1 text-3xl font-bold">{result.appType}</h2>

              <div className="mt-6 rounded-3xl bg-[#071326] p-5">
                <h3 className="mb-4 font-semibold">Architecture diagram</h3>
                <Architecture services={result.services} />
              </div>
            </div>

            <div className="space-y-6">
              <Panel title="AWS Recommendation">
                <div className="grid gap-3 sm:grid-cols-2">
                  {result.services.map((service) => (
                    <Item key={service} text={service} />
                  ))}
                </div>
              </Panel>

              <Panel title="Terraform Output">
                <div className="mb-3 flex gap-3">
                  <button onClick={copyTerraform} className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm">
                    <Copy size={15} /> Copy
                  </button>
                  <button className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm">
                    <Download size={15} /> Export
                  </button>
                </div>
                <pre className="overflow-x-auto rounded-3xl bg-[#060b16] p-5 text-sm text-cyan-200">
                  {result.terraformCode}
                </pre>
              </Panel>

              <Panel title="Security Analysis">
                {result.securityChecks.map((check) => (
                  <Item key={check} text={check} />
                ))}
              </Panel>
            </div>
          </section>
        )}
      </section>
    </main>
  );
}

function Stat({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
      <div className="mb-4 text-cyan-300">{icon}</div>
      <p className="text-sm text-slate-400">{label}</p>
      <h3 className="mt-1 text-3xl font-bold">{value}</h3>
    </div>
  );
}

function Panel({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
      <h3 className="mb-4 text-lg font-semibold">{title}</h3>
      {children}
    </div>
  );
}

function Item({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl bg-white/5 p-3 text-sm text-slate-300">
      <CheckCircle2 size={16} className="text-cyan-300" />
      {text}
    </div>
  );
}

function Architecture({ services }: { services: string[] }) {
  const icons = [Globe2, Server, Database, Shield];

  return (
    <div className="space-y-3">
      <div className="mx-auto w-fit rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-cyan-200">
        Internet
      </div>
      <div className="mx-auto h-8 w-px bg-cyan-300/40" />

      {services.slice(0, 5).map((service, index) => {
        const Icon = icons[index % icons.length];
        return (
          <div key={service}>
            <div className="mx-auto flex w-fit items-center gap-3 rounded-2xl border border-white/10 bg-slate-900 px-5 py-3">
              <Icon size={18} className="text-cyan-300" />
              {service}
            </div>
            {index !== services.slice(0, 5).length - 1 && (
              <div className="mx-auto h-6 w-px bg-cyan-300/30" />
            )}
          </div>
        );
      })}
    </div>
  );
}