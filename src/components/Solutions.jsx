import React from 'react';
import { Bot, Shield, Zap, Rocket, Check, Building } from 'lucide-react';

const solutions = [
  {
    icon: Bot,
    title: 'AI Voice Agents',
    desc: '24/7 inbound and outbound calling with CRM logging, appointment booking, and lead qualification.',
    highlights: ['Natural speech', 'CRM sync', 'Call summaries'],
  },
  {
    icon: Zap,
    title: 'Workflow Automations',
    desc: 'Automate repetitive back-office tasks across Slack, Notion, Sheets, HubSpot, and custom tools.',
    highlights: ['No-code + custom', 'Human-in-the-loop', 'Error handling'],
  },
  {
    icon: Shield,
    title: 'Governed AI Assistants',
    desc: 'Secure, role-aware AI assistants for support, sales, and operations with compliance controls.',
    highlights: ['RBAC & logs', 'PII safe', 'SLA monitoring'],
  },
  {
    icon: Rocket,
    title: 'Custom Integrations',
    desc: 'Robust integrations and APIs tailored to your stack for dependable, scalable automation.',
    highlights: ['Scalable infra', 'Metrics first', 'Vendor agnostic'],
  },
];

const SolutionCard = ({ icon: Icon, title, desc, highlights }) => (
  <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-white/20 hover:bg-white/[0.07]">
    <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-violet-500/30 via-fuchsia-500/20 to-amber-300/20 blur-3xl" />
    <div className="relative z-10">
      <div className="mb-4 inline-flex rounded-xl bg-white/10 p-3">
        <Icon className="h-6 w-6 text-white" />
      </div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm text-white/70">{desc}</p>
      <ul className="mt-4 space-y-2">
        {highlights.map((h) => (
          <li key={h} className="flex items-center gap-2 text-sm text-white/70">
            <Check className="h-4 w-4 text-emerald-300" /> {h}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default function Solutions() {
  return (
    <section id="solutions" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <span className="text-xs uppercase tracking-widest text-white/60">Workflows</span>
        <h2 className="mt-2 text-3xl font-semibold text-white md:text-4xl">Prebuilt Automations That Ship Results</h2>
        <p className="mt-3 text-white/70">Choose from proven, ready-to-deploy workflows or let us tailor a solution for your stack and KPIs.</p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {solutions.map((s) => (
          <SolutionCard key={s.title} {...s} />
        ))}
      </div>

      <div className="mt-12 flex flex-col items-center justify-between gap-4 rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-6 sm:flex-row">
        <div className="flex items-center gap-3 text-white/80">
          <Building className="h-5 w-5 text-amber-300" />
          <p className="text-sm">Enterprise? We offer SSO, on-prem options, and white-glove support.</p>
        </div>
        <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white hover:bg-white/10">
          Book a discovery call
        </a>
      </div>
    </section>
  );
}
