import React from 'react';
import { Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mx-auto mt-10 max-w-7xl px-6 pb-10">
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-violet-500 via-fuchsia-500 to-amber-400" />
            <div>
              <div className="text-white/90">Aura Automations</div>
              <div className="text-xs text-white/50">Operational Excellence with AI</div>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-sm">
            <a href="mailto:hello@aura-automations.com" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-white hover:bg-white/10">
              <Mail className="h-4 w-4" /> hello@aura-automations.com
            </a>
            <a href="tel:+10000000000" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-white hover:bg-white/10">
              <Phone className="h-4 w-4" /> +1 (000) 000‑0000
            </a>
          </div>
        </div>
        <div className="mt-6 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Aura Automations. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white/80">Privacy</a>
            <a href="#" className="hover:text-white/80">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
