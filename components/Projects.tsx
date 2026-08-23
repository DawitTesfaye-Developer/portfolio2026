import Image from "next/image";
import Reveal from "./Reveal";
import { projects } from "@/lib/data";
import Link from "next/link";
export default function Projects() {
  return (
    <section id="projects" className="relative py-24 border-t border-slate-800">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-500/5 rounded-full blur-[100px]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:pl-24 lg:pr-8">
        <div className="text-center mb-16">
          <Reveal y={16}>
            <span className="text-xs font-mono uppercase tracking-widest text-brand-500 mb-4 block">
              Selected Work
            </span>
          </Reveal>
          <Reveal y={24} delay={0.1}>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">
              Notable <span className="text-gradient-anim">Projects</span>
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.15} y={50}>
              <div className="group rounded-xl border border-slate-800 bg-slate-900/30 overflow-hidden card-glow">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-all duration-700 group-hover:scale-108 group-hover:brightness-50"
                  />
                  <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <a
                      href={p.link} // 👈 use first link
                 
                      target="_blank" // 👈 opens new tab
                      rel="noopener noreferrer" // 👈 security
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-500 text-slate-950 text-xs font-bold uppercase tracking-wide rounded-lg"
                    >
                      View{" "}
                      <iconify-icon icon="lucide:external-link" width="14" />
                    </a>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="pillar-tag pillar-tag-dev">
                      Full-Stack
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2 group-hover:text-brand-400 transition-colors duration-300">
                    {p.title}
                  </h3>
                  <p className="text-sm font-mono text-slate-400 leading-relaxed mb-4">
                    {p.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="px-2 py-1 rounded bg-slate-800 text-[10px] font-mono text-slate-400"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} y={30} className="mt-12">
          <div className="relative rounded-xl border border-brand-500/30 bg-slate-950 p-8 md:p-12 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-edtech-500/5 rounded-full blur-[80px]" />
            <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-edtech-500/10 border border-edtech-500/20 flex items-center justify-center anim-float">
                <iconify-icon
                  icon="lucide:trophy"
                  width="32"
                  style={{ color: "#60a5fa" }}
                />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h3 className="text-xl font-bold text-white">
                    Zamzam Bank Learning Platform MVP
                  </h3>
                  <span className="pillar-tag pillar-tag-edtech">EdTech</span>
                  <span className="pillar-tag pillar-tag-dev">Lead</span>
                  <span className="px-2 py-0.5 rounded bg-brand-500/20 text-[10px] font-mono text-brand-400 uppercase">
                    Award Winner
                  </span>
                </div>
                <p className="text-sm font-mono text-slate-400 leading-relaxed">
                  Led Team Philia. 1st place out of 14 teams, GIZ recognized.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
