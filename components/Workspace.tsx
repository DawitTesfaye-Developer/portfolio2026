import Image from 'next/image';
import Reveal from './Reveal';

const facts = [
  { label: 'Based in', value: 'Addis Ababa, Ethiopia', icon: 'lucide:map-pin' },
  { label: 'Currently', value: 'System & Network Administrator @ MTH MCH Center', icon: 'lucide:server' },
  { label: 'Consulting', value: 'Digital Learning Content Developer @ EdTech Hub ET', icon: 'lucide:graduation-cap' }
];

const floatingTags = [
  { label: 'Next.js', icon: 'simple-icons:nextdotjs', className: 'pillar-tag-dev', position: '-top-4 -left-4 md:-left-8' },
  { label: 'H5P', icon: 'lucide:puzzle', className: 'pillar-tag-edtech', position: 'top-1/3 -right-4 md:-right-8' },
  { label: 'Linux', icon: 'simple-icons:linux', className: 'pillar-tag-sys', position: '-bottom-3 left-6 md:left-10' }
];

export default function Workspace() {
  return (
    <section id="workspace" className="relative py-24 border-t border-slate-800 overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-10" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:pl-24 lg:pr-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <Reveal y={16}>
              <span className="text-xs font-mono uppercase tracking-widest text-brand-500 mb-4 block">
                $ pwd
              </span>
            </Reveal>
            <Reveal y={24} delay={0.08}>
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-6">
                Behind the <span className="text-gradient-anim">Screens</span>
              </h2>
            </Reveal>
            <Reveal y={20} delay={0.15}>
              <p className="text-sm font-mono text-slate-400 leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
                Most days split three ways: code editor open on one monitor, a learning module
                storyboard on the other, and an SSH session somewhere in between. This is the desk
                where the three disciplines actually meet.
              </p>
            </Reveal>
            <div className="space-y-4 max-w-md mx-auto lg:mx-0">
              {facts.map((f, i) => (
                <Reveal key={f.label} delay={0.2 + i * 0.08} y={16}>
                  <div className="flex items-center gap-3 justify-center lg:justify-start">
                    <div className="w-9 h-9 rounded-lg bg-brand-500/10 border border-brand-500/20 flex items-center justify-center flex-shrink-0">
                      <iconify-icon icon={f.icon} width="16" style={{ color: '#bf6a45' }} />
                    </div>
                    <p className="text-xs font-mono text-slate-400">
                      <span className="text-slate-500 uppercase tracking-wider">{f.label}:</span>{' '}
                      <span className="text-slate-200">{f.value}</span>
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <Reveal delay={0.15} y={40}>
              <div className="relative rounded-2xl border border-slate-800 bg-slate-950/80 overflow-hidden shadow-2xl">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-800 bg-slate-900/60">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                  <span className="ml-3 text-[10px] font-mono text-slate-500">~/workspace/addis-ababa</span>
                </div>
                <div className="relative aspect-[3/2]">
                  <Image
                    src="/images/workspace.jpg"
                    alt="Dawit at his desk, split view of two working sessions with code and EdTech tooling on screen"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {floatingTags.map((t) => (
                <span
                  key={t.label}
                  className={`pillar-tag ${t.className} absolute z-10 shadow-lg ${t.position}`}
                >
                  <iconify-icon icon={t.icon} width="10" />
                  {t.label}
                </span>
              ))}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}