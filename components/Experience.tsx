'use client';

import { motion } from 'framer-motion';
import Reveal from './Reveal';
import { timeline, roleMeta } from '@/lib/data';

const tagByRole: Record<string, string> = {
  dev: 'pillar-tag-dev',
  edtech: 'pillar-tag-edtech',
  sysadmin: 'pillar-tag-sys'
};

function TimelineCard({ item, align }: { item: (typeof timeline)[number]; align: 'left' | 'right' }) {
  const justify = align === 'right' ? 'md:justify-end' : 'md:justify-start';
  return (
    <>
      <span className="text-xs font-mono text-brand-500 uppercase tracking-wider">{item.period}</span>
      <div className={`flex flex-wrap items-center gap-1.5 mt-1 mb-2 ${justify}`}>
        <span className={`pillar-tag ${tagByRole[item.role]}`}>{roleMeta[item.role].label}</span>
        {item.badge && (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-brand-500/10 border border-brand-500/30">
            <iconify-icon icon={item.badgeIcon ?? 'lucide:trophy'} width="10" style={{ color: '#bf6a45' }} />
            <span className="text-[9px] font-mono text-brand-400 uppercase">{item.badge}</span>
          </span>
        )}
      </div>
      <h3 className="text-lg font-bold text-white">{item.title}</h3>
      <p className="text-sm font-mono text-brand-400 mt-1">{item.org}</p>
      <p className="text-sm font-mono text-slate-400 mt-3 leading-relaxed">{item.description}</p>
    </>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 border-t border-slate-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:pl-24 lg:pr-8">
        <div className="text-center mb-16">
          <Reveal y={16}>
            <span className="text-xs font-mono uppercase tracking-widest text-brand-500 mb-4 block">
              $ git log --graph
            </span>
          </Reveal>
          <Reveal y={24} delay={0.1}>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">
              Professional <span className="text-gradient-anim">Journey</span>
            </h2>
          </Reveal>
        </div>

        <div className="relative">
          <motion.div
            className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-slate-800 origin-top"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          />

          <div className="space-y-12">
            {timeline.map((item, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div key={item.title + item.period} className="relative flex flex-col md:flex-row gap-6 md:gap-8">
                  {/* Left slot */}
                  <div className={`md:w-1/2 md:pr-12 pl-10 md:pl-0 ${isLeft ? 'md:text-right' : ''}`}>
                    {isLeft && (
                      <Reveal delay={i * 0.06} y={28}>
                        <TimelineCard item={item} align="right" />
                      </Reveal>
                    )}
                  </div>

                  {/* Timeline dot */}
                  <span
                    className="timeline-dot absolute left-4 md:left-1/2 -translate-x-1/2 top-1 w-3.5 h-3.5 rounded-full border-4 border-ink-950 z-10"
                    style={{ background: roleMeta[item.role].color, color: roleMeta[item.role].color }}
                  />

                  {/* Right slot */}
                  <div className="md:w-1/2 md:pl-12 pl-10">
                    {!isLeft && (
                      <Reveal delay={i * 0.06} y={28}>
                        <TimelineCard item={item} align="left" />
                      </Reveal>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}