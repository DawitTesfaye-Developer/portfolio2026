'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useRole } from '@/lib/RoleContext';
import { roleMeta } from '@/lib/data';
import { Role } from '@/lib/types';

const sections = [
  { id: 'hero', label: 'whoami', icon: 'lucide:terminal' },
  { id: 'workspace', label: 'workspace', icon: 'lucide:image' },
  { id: 'pillars', label: 'expertise', icon: 'lucide:layout-grid' },
  { id: 'skills', label: 'skills', icon: 'lucide:bar-chart-2' },
  { id: 'experience', label: 'history', icon: 'lucide:git-commit' },
  { id: 'projects', label: 'projects', icon: 'lucide:folder-git-2' },
  { id: 'contact', label: 'connect', icon: 'lucide:send' }
];

const roles: Role[] = ['dev', 'edtech', 'sysadmin'];

export default function ConsoleDock() {
  const { role, setRole, meta } = useRole();
  const [active, setActive] = useState('hero');
  const [time, setTime] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const tick = () =>
      setTime(
        new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', hour12: false, timeZone: 'Africa/Addis_Ababa' })
      );
    tick();
    const id = setInterval(tick, 30000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -50% 0px' }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMobileOpen(false);
  };

  return (
    <>
      {/* Desktop: fixed vertical dock */}
      <nav
        className="console-dock hidden lg:flex fixed left-4 top-1/2 -translate-y-1/2 z-50 flex-col items-center gap-1 rounded-2xl px-2.5 py-4"
        aria-label="Primary"
      >
        <button
          onClick={() => scrollTo('hero')}
          className="mb-3 w-9 h-9 rounded-lg overflow-hidden ring-1 ring-brand-500/30 hover:ring-brand-500/70 transition-all"
          aria-label="Back to top"
        >
          <Image src="/images/logo.png" alt="DaWit.dev logo" width={36} height={36} className="w-full h-full object-cover" />
        </button>
        <div className="line-gradient w-6 mb-3" />
        {sections.map((s) => (
          <button
            key={s.id}
            onClick={() => scrollTo(s.id)}
            className="group relative w-9 h-9 rounded-lg flex items-center justify-center transition-colors"
            aria-label={s.label}
          >
            <span
              className="absolute inset-0 rounded-lg transition-opacity"
              style={{
                background: active === s.id ? `${meta.color}22` : 'transparent',
                border: active === s.id ? `1px solid ${meta.color}55` : '1px solid transparent'
              }}
            />
            <iconify-icon
              icon={s.icon}
              width="16"
              style={{ color: active === s.id ? meta.color : '#64748b', position: 'relative' }}
            />
            <span className="pointer-events-none absolute left-11 whitespace-nowrap rounded-md bg-ink-900 border border-slate-800 px-2 py-1 text-[10px] font-mono text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity">
              ./{s.label}
            </span>
          </button>
        ))}
        <div className="line-gradient w-6 my-3" />
        {roles.map((r) => (
          <button
            key={r}
            onClick={() => setRole(r)}
            className="console-dot w-2.5 h-2.5 rounded-full mb-2 transition-transform"
            style={{
              background: role === r ? roleMeta[r].color : '#1e1e1e',
              transform: role === r ? 'scale(1.3)' : 'scale(1)'
            }}
            aria-label={`Switch to ${roleMeta[r].label} view`}
            title={roleMeta[r].label}
          />
        ))}
        <span className="text-[9px] font-mono text-slate-600 mt-2">{time}</span>
      </nav>

      {/* Mobile: bottom bar */}
      <nav className="console-dock lg:hidden fixed bottom-4 left-4 right-4 z-50 rounded-2xl px-4 py-3 flex items-center justify-between">
        <button onClick={() => scrollTo('hero')} className="w-8 h-8 rounded-lg overflow-hidden ring-1 ring-brand-500/40">
          <Image src="/images/logo.png" alt="DaWit.dev logo" width={32} height={32} className="w-full h-full object-cover" />
        </button>
        <div className="flex items-center gap-3">
          {sections.slice(1, 5).map((s) => (
            <button key={s.id} onClick={() => scrollTo(s.id)} aria-label={s.label}>
              <iconify-icon
                icon={s.icon}
                width="16"
                style={{ color: active === s.id ? meta.color : '#64748b' }}
              />
            </button>
          ))}
        </div>
        <button onClick={() => setMobileOpen((v) => !v)} aria-label="More">
          <iconify-icon icon={mobileOpen ? 'lucide:x' : 'lucide:more-horizontal'} width="18" className="text-slate-400" />
        </button>
      </nav>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="console-dock lg:hidden fixed bottom-20 left-4 right-4 z-50 rounded-2xl p-4 flex flex-col gap-3"
        >
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              className="flex items-center gap-3 text-sm font-mono text-slate-300"
            >
              <iconify-icon icon={s.icon} width="16" style={{ color: active === s.id ? meta.color : '#64748b' }} />
              ./{s.label}
            </button>
          ))}
          <div className="line-gradient" />
          <div className="flex items-center gap-3">
            {roles.map((r) => (
              <button
                key={r}
                onClick={() => setRole(r)}
                className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider"
                style={{ color: role === r ? roleMeta[r].color : '#64748b' }}
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: roleMeta[r].color }} />
                {roleMeta[r].label}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </>
  );
}
