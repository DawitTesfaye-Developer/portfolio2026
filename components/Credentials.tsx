import Reveal from './Reveal';
import { certifications, education, languages, roleMeta } from '@/lib/data';

export default function Credentials() {
  return (
    <>
      <section id="education" className="relative py-24 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:pl-24 lg:pr-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <Reveal y={16}>
                <span className="text-xs font-mono uppercase tracking-widest text-brand-500 mb-4 block">Education</span>
              </Reveal>
              <Reveal y={24} delay={0.08}>
                <h2 className="text-3xl font-bold tracking-tight mb-10">
                  Academic <span className="text-gradient-anim">Background</span>
                </h2>
              </Reveal>
              <Reveal delay={0.15} y={40}>
                <div className="group p-6 rounded-xl border border-slate-800 bg-slate-900/30 card-glow">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-brand-500/10 border border-brand-500/20 flex items-center justify-center">
                      <iconify-icon icon="lucide:graduation-cap" width="24" style={{ color: '#bf6a45' }} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{education.degree}</h3>
                      <p className="text-sm font-mono text-brand-400 mt-1">{education.school}</p>
                      <p className="text-xs font-mono text-slate-500 mt-1">{education.period}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            <div>
              <Reveal y={16}>
                <span className="text-xs font-mono uppercase tracking-widest text-brand-500 mb-4 block">Credentials</span>
              </Reveal>
              <Reveal y={24} delay={0.08}>
                <h2 className="text-3xl font-bold tracking-tight mb-10">Certifications</h2>
              </Reveal>
              <div className="space-y-4">
                {certifications.map((c, i) => (
                  <Reveal key={c.title} delay={i * 0.08} y={20} className="">
                    <div className="group flex items-start gap-4 p-4 rounded-xl border border-slate-800 bg-slate-900/30 card-glow">
                      <div
                        className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                        style={{ background: `${roleMeta[c.role].color}1a`, border: `1px solid ${roleMeta[c.role].color}33` }}
                      >
                        <iconify-icon icon="lucide:badge-check" width="20" style={{ color: roleMeta[c.role].color }} />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white">{c.title}</h4>
                        <p className="text-xs font-mono text-slate-500 mt-1">
                          {c.issuer} • <span style={{ color: roleMeta[c.role].color }}>{roleMeta[c.role].label}</span>
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-16 border-t border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:pl-24 lg:pr-8">
          <div className="text-center mb-10">
            <Reveal y={16}>
              <span className="text-xs font-mono uppercase tracking-widest text-brand-500 mb-4 block">Communication</span>
            </Reveal>
            <Reveal y={24} delay={0.08}>
              <h2 className="text-2xl font-bold tracking-tight">Languages</h2>
            </Reveal>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {languages.map((l, i) => (
              <Reveal key={l.name} delay={i * 0.1} y={24}>
                <div className="text-center p-6 rounded-xl border border-slate-800 bg-slate-900/30 card-glow">
                  <div className="text-3xl mb-3">{l.flag}</div>
                  <h4 className="font-bold text-white">{l.name}</h4>
                  <p className="text-xs font-mono text-brand-400 mt-1">{l.level}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
