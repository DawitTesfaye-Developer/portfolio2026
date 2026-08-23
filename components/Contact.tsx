'use client';

import { FormEvent, useState } from 'react';
import Reveal from './Reveal';
import Ambient from './Ambient';
import { contactMethods } from '@/lib/data';
import { sendContactMessage } from '@/lib/api';

type Status = 'idle' | 'sending' | 'success' | 'error';

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    setStatus('sending');
    setErrorMsg('');

    try {
      await sendContactMessage({
        name: String(data.get('name') || ''),
        email: String(data.get('email') || ''),
        subject: String(data.get('subject') || ''),
        message: String(data.get('message') || '')
      });
      setStatus('success');
      form.reset();
      setTimeout(() => setStatus('idle'), 3000);
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    }
  }

  return (
    <section id="contact" className="relative py-24 border-t border-slate-800 overflow-hidden">
      <Ambient />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:pl-24 lg:pr-8">
        <div className="text-center mb-16">
          <Reveal y={16}>
            <span className="text-xs font-mono uppercase tracking-widest text-brand-500 mb-4 block">Let&apos;s Connect</span>
          </Reveal>
          <Reveal y={24} delay={0.08}>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4">
              Get In <span className="text-gradient-anim">Touch</span>
            </h2>
          </Reveal>
          <Reveal y={20} delay={0.15}>
            <p className="text-sm font-mono text-slate-400 max-w-lg mx-auto">
              Looking for a developer, EdTech specialist, or system admin? I bring all three.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactMethods.map((c, i) => (
            <Reveal key={c.label} delay={i * 0.08} y={30}>
              <a
                href={c.href}
                className="group block p-6 rounded-xl border border-slate-800 bg-slate-900/30 text-center card-glow"
              >
                <div className="w-12 h-12 rounded-lg bg-brand-500/10 border border-brand-500/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <iconify-icon icon={c.icon} width="24" style={{ color: '#bf6a45' }} />
                </div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-2">{c.label}</h4>
                <p className="text-sm font-mono text-slate-300 break-all">{c.value}</p>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} y={40} className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="p-8 rounded-xl border border-slate-800 bg-slate-900/30 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-500 mb-2">
                  Your Name
                </label>
                <input
                  name="name"
                  type="text"
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-800 text-sm font-mono text-white placeholder-slate-600 focus:outline-none focus:border-brand-500 transition-all duration-300"
                />
              </div>
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-500 mb-2">
                  Your Email
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="john@company.com"
                  className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-800 text-sm font-mono text-white placeholder-slate-600 focus:outline-none focus:border-brand-500 transition-all duration-300"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-slate-500 mb-2">Subject</label>
              <input
                name="subject"
                type="text"
                required
                placeholder="Job Opportunity"
                className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-800 text-sm font-mono text-white placeholder-slate-600 focus:outline-none focus:border-brand-500 transition-all duration-300"
              />
            </div>
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-slate-500 mb-2">Message</label>
              <textarea
                name="message"
                rows={5}
                required
                placeholder="Tell me about your project..."
                className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-800 text-sm font-mono text-white placeholder-slate-600 focus:outline-none focus:border-brand-500 transition-all duration-300 resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-3.5 bg-brand-500 text-slate-950 text-sm font-bold uppercase tracking-wide rounded-lg hover:shadow-[0_0_30px_rgba(191,106,69,0.5)] transition-all duration-300 disabled:opacity-60"
            >
              <iconify-icon icon={status === 'sending' ? 'lucide:loader-2' : 'lucide:send'} width="16" className={status === 'sending' ? 'animate-spin' : ''} />
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && (
              <p className="flex items-center gap-2 text-sm font-mono text-green-400">
                <iconify-icon icon="lucide:check-circle" width="16" />
                Message sent! I&apos;ll get back to you soon.
              </p>
            )}
            {status === 'error' && (
              <p className="flex items-center gap-2 text-sm font-mono text-red-400">
                <iconify-icon icon="lucide:alert-circle" width="16" />
                {errorMsg}
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
