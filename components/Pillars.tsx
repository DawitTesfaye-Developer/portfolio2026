import Reveal from './Reveal';
import { pillars, roleMeta } from '@/lib/data';

const barByRole: Record<string, string> = {
  dev: 'from-brand-600 to-brand-400',
  edtech: 'from-edtech-600 to-edtech-400',
  sysadmin: 'from-sysadmin-600 to-sysadmin-400'
};

const tagByRole: Record<string, string> = {
  dev: 'pillar-tag-dev',
  edtech: 'pillar-tag-edtech',
  sysadmin: 'pillar-tag-sys'
};

export default function Pillars() {
  return (
    <section id="pillars" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-10" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:pl-24 lg:pr-8">
        <div className="text-center mb-16">
          <Reveal y={16}>
            <span className="text-xs font-mono uppercase tracking-widest text-brand-500 mb-4 block">
              Three Pillars of Expertise
            </span>
          </Reveal>
          <Reveal y={24} delay={0.1}>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">
              What I <span className="text-gradient-anim">Do</span>
            </h2>
          </Reveal>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((p, i) => (
            <Reveal key={p.role} delay={i * 0.15} y={50}>
              <div className="group h-full flex flex-col rounded-xl border border-slate-800 bg-slate-900/30 overflow-hidden card-glow hover:-translate-y-2 transition-transform duration-500">
                <div className="p-8 pb-0 flex-1">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                    style={{ background: `${roleMeta[p.role].color}1a`, border: `1px solid ${roleMeta[p.role].color}33` }}
                  >
                    <iconify-icon icon={p.icon} width="32" style={{ color: roleMeta[p.role].color }} />
                  </div>
                  <span className={`pillar-tag ${tagByRole[p.role]} mb-4`}>{p.tagline}</span>
                  <h3 className="text-xl font-bold mt-3 mb-3 text-white">{p.title}</h3>
                  <p className="text-sm font-mono text-slate-400 leading-relaxed mb-6">{p.description}</p>
                </div>
                <div className="px-8 pb-8">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {p.stack.map((s) => (
                      <span key={s} className="px-2.5 py-1 rounded-md bg-slate-800 text-[10px] font-mono text-slate-400">
                        {s}
                      </span>
                    ))}
                  </div>
                  <div className="line-gradient mb-6" />
                  <ul className="space-y-2.5">
                    {p.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2.5 text-xs font-mono text-slate-300">
                        <iconify-icon
                          icon="lucide:check"
                          width="14"
                          style={{ color: roleMeta[p.role].color, marginTop: '2px', flexShrink: 0 }}
                        />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`h-1 bg-gradient-to-r ${barByRole[p.role]}`} />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
