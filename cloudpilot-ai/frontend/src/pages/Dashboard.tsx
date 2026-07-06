import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  DollarSign,
  FileCode2,
  Shield,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";
import { analyzePrompt } from "../ai/analyzer";

export function Dashboard() {
  const [prompt, setPrompt] = useState(
    "Deploy a React + FastAPI AI application with Docker, PostgreSQL, Redis, Terraform, monitoring and auto scaling for 20000 users."
  );

  const [generated, setGenerated] = useState(false);
  const [result, setResult] = useState(analyzePrompt(prompt));

  const handleGenerate = () => {
    if (!prompt.trim()) {
      alert("Please enter infrastructure requirement");
      return;
    }

    const analysis = analyzePrompt(prompt);
    setResult(analysis);
    setGenerated(true);
  };

  return (
    <div className="space-y-6">
      <section className="grid gap-6 xl:grid-cols-[1.3fr_0.7fr]">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-3xl border border-white/10 bg-white/5 p-6"
        >
          <div className="mb-4 flex items-center gap-2 text-cyan-300">
            <Zap size={18} />
            AI Infrastructure Prompt
          </div>

          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="min-h-40 w-full resize-none rounded-2xl border border-white/10 bg-slate-900 p-4 text-slate-200 outline-none"
            placeholder="Example: Deploy a MERN app with database and load balancer..."
          />

          <button
            onClick={handleGenerate}
            className="mt-4 flex items-center gap-2 rounded-full bg-cyan-300 px-5 py-3 font-semibold text-slate-950 hover:bg-cyan-200"
          >
            Generate Architecture <ArrowRight size={16} />
          </button>
        </motion.div>

        <div className="grid gap-4">
          <StatCard
            icon={<Shield />}
            label="Security Score"
            value={generated ? result.securityScore : "--"}
          />
          <StatCard
            icon={<DollarSign />}
            label="Estimated Cost"
            value={generated ? result.cost : "--"}
          />
          <StatCard
            icon={<FileCode2 />}
            label="Terraform Files"
            value={generated ? result.terraformFiles : "--"}
          />
        </div>
      </section>

      {generated ? (
        <section className="space-y-6">
          <div className="rounded-3xl border border-cyan-300/20 bg-cyan-300/10 p-5">
            <p className="text-sm text-cyan-200">Detected Application Type</p>
            <h2 className="mt-1 text-2xl font-bold">{result.appType}</h2>
          </div>

          <section className="grid gap-6 xl:grid-cols-3">
            <Panel title="AWS Recommendation">
              {result.services.map((service) => (
                <ListItem key={service} text={service} />
              ))}
            </Panel>

            <Panel title="Terraform Output">
              <pre className="overflow-x-auto rounded-2xl bg-slate-900 p-4 text-sm text-cyan-200">
                {result.terraformCode}
              </pre>
            </Panel>

            <Panel title="Security Checks">
              {result.securityChecks.map((check) => (
                <ListItem key={check} text={check} />
              ))}
            </Panel>
          </section>
        </section>
      ) : (
        <div className="rounded-3xl border border-dashed border-white/10 bg-white/5 p-10 text-center text-slate-400">
          Enter a prompt and click Generate Architecture to see AI output.
        </div>
      )}
    </div>
  );
}

function StatCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
      <div className="mb-4 text-cyan-300">{icon}</div>
      <p className="text-sm text-slate-400">{label}</p>
      <h3 className="mt-1 text-3xl font-bold">{value}</h3>
    </div>
  );
}

function Panel({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
      <h3 className="mb-4 text-lg font-semibold">{title}</h3>
      {children}
    </div>
  );
}

function ListItem({ text }: { text: string }) {
  return (
    <div className="mb-3 flex items-center gap-3 text-sm text-slate-300">
      <CheckCircle2 size={16} className="text-cyan-300" />
      {text}
    </div>
  );
}