'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Reveal from './Reveal';
import Ambient from './Ambient';
import { useRole } from '@/lib/RoleContext';
import { pillars, roleMeta } from '@/lib/data';
import { Role } from '@/lib/types';

const taglines: Record<Role, string> = {
  dev: 'building interfaces and APIs that hold up in production.',
  edtech: 'designing digital learning that people actually finish.',
  sysadmin: 'keeping networks, servers, and uptime honest.'
};

export default function Hero() {
  const { role, meta } = useRole();
  const pillar = pillars.find((p) => p.role === role)!;

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-20 lg:pt-0">
      <Ambient />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:pl-24 lg:pr-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-800 bg-slate-900/50 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            <span className="text-xs font-mono text-slate-400">Available for opportunities</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tightest leading-[0.9] mb-6"
          >
            <span className="block">DAWIT</span>
            <span className="block text-gradient-anim">TESFAYE</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="max-w-xl mx-auto lg:mx-0 text-slate-300 font-mono text-sm leading-relaxed mb-10"
          >
            I operate at the intersection of{' '}
            <span className="text-brand-400">software development</span>,{' '}
            <span className="text-edtech-400">digital learning</span>, and{' '}
            <span className="text-sysadmin-400">infrastructure management</span> — building complete
            solutions from code to classroom to server room.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
          >
            <a
              href="#skills"
              className="inline-flex items-center gap-3 px-8 py-3.5 bg-brand-500 text-slate-950 text-sm font-bold uppercase tracking-wide rounded-lg hover:shadow-[0_0_30px_rgba(191,106,69,0.5)] transition-all duration-300"
            >
              Explore My Skills
              <iconify-icon icon="lucide:arrow-down" width="16" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-8 py-3.5 border border-slate-700 text-white text-sm font-bold uppercase tracking-wide rounded-lg hover:border-brand-500 hover:bg-slate-900 transition-all duration-300"
            >
              <iconify-icon icon="lucide:mail" width="16" />
              Get In Touch
            </a>
          </motion.div>
        </div>

        {/* Signature element: live terminal panel that reflects the dock's role switcher */}
        <Reveal delay={0.2} y={40}>
          <div className="rounded-2xl border border-slate-800 bg-slate-950/80 overflow-hidden shadow-2xl max-w-md mx-auto lg:ml-auto">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-800 bg-slate-900/60">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
              <span className="ml-3 text-[10px] font-mono text-slate-500">dawit@portfolio:~</span>
            </div>
            <div className="p-6 font-mono text-xs leading-relaxed min-h-[260px]">
              <p className="text-slate-500">$ whoami --role={role}</p>
              <AnimatePresence mode="wait">
                <motion.div
                  key={role}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="mt-3"
                >
                  <p style={{ color: meta.color }} className="font-bold text-sm mb-2">
                    {pillar.title}
                  </p>
                  <p className="text-slate-400 mb-4">&gt; {taglines[role]}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {pillar.stack.map((s) => (
                      <span
                        key={s}
                        className="px-2 py-1 rounded bg-slate-800/80 border border-slate-700 text-[10px] text-slate-300"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  <p className="text-slate-600">// switch role via the dock to your left ↞</p>
                </motion.div>
              </AnimatePresence>
              <span className="inline-block w-2 h-4 bg-brand-500 anim-blink align-middle mt-3" />
            </div>
          </div>
        </Reveal>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:block">
        <div className="w-6 h-10 rounded-full border-2 border-slate-700 flex items-start justify-center p-1.5 anim-float">
          <div className="w-1 h-2.5 bg-brand-500 rounded-full anim-blink" />
        </div>
      </div>
    </section>
  );
}
