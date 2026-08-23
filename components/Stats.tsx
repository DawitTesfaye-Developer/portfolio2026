'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { stats } from '@/lib/data';

function Counter({ target }: { target: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });

  useEffect(() => {
    if (!inView || !ref.current) return;
    const controls = animate(0, target, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = Math.round(v).toString();
      }
    });
    return () => controls.stop();
  }, [inView, target]);

  return <span ref={ref}>0</span>;
}

export default function Stats() {
  return (
    <section className="relative border-y border-slate-800 bg-slate-900/30 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:pl-24 lg:pr-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-gradient-anim mb-1">
                {s.value !== null ? <Counter target={s.value} /> : s.text}
                {s.suffix}
              </div>
              <div className="text-xs font-mono uppercase tracking-wider text-slate-500">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
