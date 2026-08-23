import { RoleProvider } from '@/lib/RoleContext';
import ConsoleDock from '@/components/ConsoleDock';
import Hero from '@/components/Hero';
import Workspace from '@/components/Workspace';
import Stats from '@/components/Stats';
import Pillars from '@/components/Pillars';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Credentials from '@/components/Credentials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <RoleProvider>
      <ConsoleDock />
      <main>
        <Hero />
        <Workspace />
        <Stats />
        <Pillars />
        <Skills />
        <Experience />
        <Projects />
        <Credentials />
        <Contact />
      </main>
      <Footer />
    </RoleProvider>
  );
}
