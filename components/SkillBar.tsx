'use client';

import { useEffect, useRef } from 'react';
import { useInView, animate } from 'framer-motion';
import { Skill } from '@/lib/types';

export default function SkillBar({ skill, gradient, color }: { skill: Skill; gradient: string; color: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const pctRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });

  useEffect(() => {
    if (!inView) return;
    if (barRef.current) {
      animate(barRef.current, { width: `${skill.level}%` }, { duration: 1.4, ease: [0.16, 1, 0.3, 1] });
    }
    if (pctRef.current) {
      animate(0, skill.level, {
        duration: 1.4,
        ease: [0.16, 1, 0.3, 1],
        onUpdate: (v) => {
          if (pctRef.current) pctRef.current.textContent = `${Math.round(v)}%`;
        }
      });
    }
  }, [inView, skill.level]);

  return (
    <div ref={ref}>
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2.5">
          <div
            className="w-7 h-7 rounded-md flex items-center justify-center"
            style={{ background: `${color}1a`, border: `1px solid ${color}33` }}
          >
            <iconify-icon icon={skill.icon} width="14" style={{ color }} />
          </div>
          <span className="text-xs font-mono text-slate-300">{skill.name}</span>
        </div>
        <span ref={pctRef} className="text-xs font-mono font-bold" style={{ color }}>
          0%
        </span>
      </div>
      <div className="skill-bar-track h-2 bg-slate-800 rounded-full">
        <div ref={barRef} className={`h-full bg-gradient-to-r ${gradient} rounded-full`} style={{ width: 0 }} />
      </div>
    </div>
  );
}
