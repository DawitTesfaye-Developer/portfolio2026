export default function Ambient() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-20" />
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-brand-500/10 rounded-full blur-[100px] anim-blob mix-blend-screen" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-brand-600/10 rounded-full blur-[100px] anim-blob-delay mix-blend-screen" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(191,106,69,0.3) 1px,transparent 1px),linear-gradient(90deg,rgba(191,106,69,0.3) 1px,transparent 1px)',
          backgroundSize: '60px 60px'
        }}
      />
    </div>
  );
}
