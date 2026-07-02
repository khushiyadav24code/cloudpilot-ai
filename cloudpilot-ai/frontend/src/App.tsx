import {
  ArrowRight,
  Cloud,
  DollarSign,
  Network,
  Shield,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

function App() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.22),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(99,102,241,0.18),transparent_35%)]" />

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-10">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-cyan-300 p-3 text-slate-950">
              <Cloud />
            </div>
            <h1 className="text-2xl font-bold">CloudPilot AI</h1>
          </div>

          <button className="flex items-center gap-2 rounded-full bg-cyan-300 px-5 py-2 text-sm font-semibold text-slate-950 hover:bg-cyan-200">
            Launch Dashboard <ArrowRight size={16} />
          </button>
        </nav>

        <div className="grid min-h-[80vh] items-center gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-200">
              <Sparkles size={16} />
              Autonomous Cloud Engineer
            </div>

            <h2 className="text-5xl font-bold leading-tight md:text-6xl">
              Turn natural language into cloud infrastructure.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              CloudPilot AI analyzes requirements, recommends AWS architecture,
              generates Terraform, estimates cost, and checks security risks.
            </p>

            <div className="mt-8 flex gap-4">
              <button className="rounded-full bg-white px-6 py-3 font-semibold text-slate-950">
                Start Building
              </button>
              <button className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white">
                View Demo
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur"
          >
            <div className="mb-5 rounded-2xl border border-white/10 bg-slate-900 p-4 text-slate-300">
              “Deploy a React app for 10,000 users with secure database.”
            </div>

            <div className="grid gap-4">
              <Card
                icon={<Network />}
                title="Architecture Plan"
                text="VPC, EC2, RDS, Load Balancer"
              />
              <Card
                icon={<DollarSign />}
                title="Cost Estimate"
                text="$120/month estimated AWS cost"
              />
              <Card
                icon={<Shield />}
                title="Security Score"
                text="86/100 with improvement suggestions"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

function Card({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="flex gap-4 rounded-2xl border border-white/10 bg-slate-900/80 p-4">
      <div className="text-cyan-300">{icon}</div>
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm text-slate-400">{text}</p>
      </div>
    </div>
  );
}

export default App;