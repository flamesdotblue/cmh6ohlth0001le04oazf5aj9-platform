import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, ArrowRight, Phone, Mail } from 'lucide-react';
import Spline from '@splinetool/react-spline';

const NavBar = () => {
  return (
    <div className="relative z-10">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-gradient-to-br from-violet-500 via-fuchsia-500 to-amber-400" />
          <span className="font-semibold tracking-tight text-white/90">Aura Automations</span>
        </div>
        <div className="hidden items-center gap-8 md:flex">
          <a href="#solutions" className="text-sm text-white/70 hover:text-white transition">Workflows</a>
          <a href="#pricing" className="text-sm text-white/70 hover:text-white transition">Pricing</a>
          <a href="#contact" className="text-sm text-white/70 hover:text-white transition">Contact</a>
        </div>
        <div className="hidden md:block">
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur transition hover:bg-white/20">
            <Phone className="h-4 w-4" /> Book a call
          </a>
        </div>
      </div>
    </div>
  );
};

export default function Hero() {
  return (
    <section className="relative isolate h-[90vh] w-full overflow-hidden rounded-b-[28px] border-b border-white/10">
      <div className="absolute inset-0"> 
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.25),rgba(0,0,0,0.6)_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black" />

      <NavBar />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <Rocket className="h-3.5 w-3.5 text-amber-300" /> Premium AI Automation
          </span>
          <h1 className="mt-5 bg-gradient-to-br from-white to-white/70 bg-clip-text text-4xl font-semibold tracking-tight text-transparent md:text-6xl">
            Deploy Revenue-Driving AI Workflows for Your Business
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base text-white/70 md:text-lg">
            We build, integrate, and maintain production-grade AI automations that reduce costs and unlock growth. No fluff—just measurable results delivered fast.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#pricing" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/90">
              Get Started <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur transition hover:bg-white/10">
              <Mail className="h-4 w-4" /> Talk to an expert
            </a>
          </div>
          <div className="mt-6 text-xs text-white/50">Trusted by modern teams in SaaS, E‑commerce, and Services</div>
        </motion.div>
      </div>
    </section>
  );
}
