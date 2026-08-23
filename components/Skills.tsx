'use client';

import { motion } from 'framer-motion';
import Reveal from './Reveal';
import SkillIcon from './Skillicon';
import { skillGroups, sharedTools, roleMeta } from '@/lib/data';

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 border-t border-slate-800 overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-10" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:pl-24 lg:pr-8">
        <div className="text-center mb-14">
          <Reveal y={16}>
            <span className="text-xs font-mono uppercase tracking-widest text-brand-500 mb-4 block">
              Technical Arsenal
            </span>
          </Reveal>
          <Reveal y={24} delay={0.1}>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">
              Skills by <span className="text-gradient-anim">Discipline</span>
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillGroups.map((group, i) => (
            <Reveal key={group.role} delay={i * 0.15} y={40}>
              <div
                className="h-full p-6 rounded-xl border border-slate-800 bg-slate-900/30 card-glow"
                style={{ boxShadow: `inset 0 1px 0 ${roleMeta[group.role].color}0d` }}
              >
                <div className="flex items-center gap-3 mb-8">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ background: `${roleMeta[group.role].color}1a`, border: `1px solid ${roleMeta[group.role].color}33` }}
                  >
                    <iconify-icon icon={group.icon} width="20" style={{ color: roleMeta[group.role].color }} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold font-mono text-white">{group.title}</h3>
                    <span className="text-[10px] font-mono uppercase tracking-wider" style={{ color: roleMeta[group.role].color }}>
                      {group.subtitle}
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap justify-center gap-x-3 gap-y-6">
                  {group.skills.map((skill, si) => (
                    <SkillIcon key={skill.name} skill={skill} color={roleMeta[group.role].color} index={si} />
                  ))}
                </div>

                {group.role === 'sysadmin' && (
                  <div className="mt-8 pt-5 border-t border-slate-800">
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider mb-3 block">
                      Shared Tools
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {sharedTools.map((t, ti) => (
                        <motion.span
                          key={t.name}
                          initial={{ opacity: 0, scale: 0.7 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true, amount: 0.6 }}
                          transition={{ duration: 0.35, delay: ti * 0.06, ease: [0.34, 1.56, 0.64, 1] }}
                          whileHover={{ scale: 1.08, y: -2 }}
                          className="px-2.5 py-1.5 rounded-md bg-slate-800/80 border border-slate-700 text-[10px] font-mono text-slate-400 hover:border-brand-500/50 hover:text-brand-400 transition-colors flex items-center gap-1.5"
                        >
                          <iconify-icon icon={t.icon} width="10" />
                          {t.name}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}