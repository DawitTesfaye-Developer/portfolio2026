import type { Metadata } from 'next';
import Script from 'next/script';
import { Space_Grotesk, Space_Mono } from 'next/font/google';
import './globals.css';

const grotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-grotesk'
});

const mono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-mono'
});

export const metadata: Metadata = {
  title: 'Dawit Tesfaye — Full-Stack Developer • EdTech Specialist • System Admin',
  description:
    'Portfolio of Dawit Tesfaye: full-stack developer, digital learning content designer, and systems administrator based in Addis Ababa.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`dark ${grotesk.variable} ${mono.variable}`}>
      <body className="bg-ink-950 text-white antialiased font-sans grain">
        {children}
        <Script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js" strategy="beforeInteractive" />
      </body>
    </html>
  );
}
