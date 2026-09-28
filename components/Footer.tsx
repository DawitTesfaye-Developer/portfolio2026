import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:pl-24 lg:pr-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <a href="#hero" className="flex items-center gap-3">
            <span className="w-9 h-9 rounded-lg overflow-hidden ring-1 ring-brand-500/30">
              <Image src="/images/logo.png" alt="DaWit.dev logo" width={36} height={36} className="w-full h-full object-cover" />
            </span>
            <span className="text-lg font-bold tracking-tight">
              Dawit<span className="text-brand-500">.dev</span>
            </span>
          </a>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            {['pillars', 'skills', 'experience', 'projects', 'contact'].map((id) => (
              <a key={id} href={`#${id}`} className="text-xs font-mono text-slate-500 hover:text-brand-400 transition-colors capitalize">
                {id}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <a href="https://www.github.com/DawitTesfaye-Developer/" className="w-9 h-9 rounded-lg border border-slate-800 flex items-center justify-center text-slate-500 hover:text-brand-400 hover:border-brand-500/50 transition-all">
              <iconify-icon icon="lucide:github" width="16" />
            </a>
            <a href="https://www.linkedin.com/in/dawit-tesfaye-hatau-60a17b311/" className="w-9 h-9 rounded-lg border border-slate-800 flex items-center justify-center text-slate-500 hover:text-brand-400 hover:border-brand-500/50 transition-all">
              <iconify-icon icon="lucide:linkedin" width="16" />
            </a>
            <a href="mailto:dawit6825@gmail.com" className="w-9 h-9 rounded-lg border border-slate-800 flex items-center justify-center text-slate-500 hover:text-brand-400 hover:border-brand-500/50 transition-all">
              <iconify-icon icon="lucide:mail" width="16" />
            </a>
          </div>
        </div>
        <div className="line-gradient mt-8 mb-6" />
        <p className="text-center text-xs font-mono text-slate-600">
          © {new Date().getFullYear()} Dawit Tesfaye. Full-Stack Developer • EdTech Specialist • System Admin
        </p>
      </div>
    </footer>
  );
}
