import React from 'react';
import { Check, Shield, Zap, Rocket } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    price: '$1,500',
    cadence: 'one-time setup',
    badge: 'Small teams',
    features: ['1 workflow', 'System design + setup', 'Basic integrations', 'Email support'],
    cta: 'Launch now',
    icon: Zap,
  },
  {
    name: 'Growth',
    price: '$3,500',
    cadence: 'setup + $750/mo',
    badge: 'Most popular',
    features: ['3+ workflows', 'Advanced integrations', 'Monitoring & analytics', 'Priority support'],
    cta: 'Scale with AI',
    icon: Rocket,
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    cadence: 'annual',
    badge: 'Security first',
    features: ['SSO & RBAC', 'SLAs & on-call', 'On-prem options', 'Dedicated engineer'],
    cta: 'Talk to sales',
    icon: Shield,
  },
];

const Card = ({ tier }) => {
  const Icon = tier.icon;
  return (
    <div className={`relative flex h-full flex-col rounded-2xl border bg-white/5 p-6 ${tier.highlight ? 'border-white/25 shadow-[0_0_0_1px_rgba(255,255,255,0.06)]' : 'border-white/10'}`}>
      {tier.highlight && (
        <div className="absolute right-4 top-4 rounded-full border border-amber-300/30 bg-amber-300/10 px-2 py-1 text-[10px] uppercase tracking-wider text-amber-200">
          {tier.badge}
        </div>
      )}
      {!tier.highlight && (
        <div className="absolute right-4 top-4 rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] uppercase tracking-wider text-white/70">
          {tier.badge}
        </div>
      )}
      <div className="mb-4 inline-flex rounded-xl bg-white/10 p-3">
        <Icon className="h-6 w-6 text-white" />
      </div>
      <h3 className="text-lg font-semibold text-white">{tier.name}</h3>
      <div className="mt-2 flex items-baseline gap-2">
        <span className="text-3xl font-semibold text-white">{tier.price}</span>
        <span className="text-sm text-white/60">{tier.cadence}</span>
      </div>
      <ul className="mt-5 space-y-2">
        {tier.features.map((f) => (
          <li key={f} className="flex items-center gap-2 text-sm text-white/80">
            <Check className="h-4 w-4 text-emerald-300" /> {f}
          </li>
        ))}
      </ul>
      <div className="mt-6">
        <a href="#contact" className={`inline-flex w-full items-center justify-center rounded-full px-4 py-2 text-sm font-medium transition ${tier.highlight ? 'bg-white text-black hover:bg-white/90' : 'border border-white/15 bg-white/5 text-white hover:bg-white/10'}`}>
          {tier.cta}
        </a>
      </div>
    </div>
  );
};

export default function Pricing() {
  return (
    <section id="pricing" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <span className="text-xs uppercase tracking-widest text-white/60">Pricing</span>
        <h2 className="mt-2 text-3xl font-semibold text-white md:text-4xl">Simple, transparent, ROI-first</h2>
        <p className="mt-3 text-white/70">Start with a focused workflow and expand as you see results. We handle design, integration, and maintenance.</p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
        {tiers.map((t) => (
          <Card key={t.name} tier={t} />
        ))}
      </div>

      <div id="contact" className="mt-12 rounded-2xl border border-white/10 bg-white/[0.04] p-6">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h3 className="text-lg font-semibold text-white">Not sure where to start?</h3>
            <p className="mt-1 text-sm text-white/70">Book a free 20‑minute audit. We’ll map high‑ROI automation opportunities for your business.</p>
          </div>
          <a href="mailto:hello@aura-automations.com" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black hover:bg-white/90">
            Email us: hello@aura-automations.com
          </a>
        </div>
      </div>
    </section>
  );
}
