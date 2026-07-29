import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Hero } from './vfs/VfsHero';
import AnimatedBackdrop from './vfs/AnimatedBackdrop';
import {
  TaskSection, SolutionSection, ArchitectureSection,
  ResultsSection, DemoSection, TechDetailsSection, CtaSection, VfsFooter,
} from './vfs/VfsSections';

/* ---------- UnicornStudio WebGL layer (loaded lazily; if WebGL fails, we still have AnimatedBackdrop) ---------- */
function UnicornBackground() {
  useEffect(() => {
    if (window.__unicornInit) return;
    window.__unicornInit = true;
    if (!window.UnicornStudio) {
      window.UnicornStudio = { isInitialized: false };
      const s = document.createElement('script');
      s.src = 'https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js';
      s.onload = () => {
        try {
          if (window.UnicornStudio && !window.UnicornStudio.isInitialized) {
            window.UnicornStudio.init();
            window.UnicornStudio.isInitialized = true;
          }
        } catch (e) { /* silent fallback */ }
      };
      (document.head || document.body).appendChild(s);
    }
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-full h-screen -z-[5] pointer-events-none saturate-50 blur-md brightness-75 mix-blend-screen opacity-30"
      style={{
        maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)',
      }}
    >
      <div
        className="absolute top-0 left-0 w-full h-screen saturate-150"
        style={{
          maskImage: 'linear-gradient(transparent, black 0%, black 80%, transparent)',
          WebkitMaskImage: 'linear-gradient(transparent, black 0%, black 80%, transparent)',
        }}
      >
        <div data-us-project="vi5SxDwDvEJMwkyTdyH8" className="absolute top-0 left-0 w-full h-full" />
      </div>
    </div>
  );
}

export default function VfsVisaBotPage() {
  return (
    <div className="min-h-screen text-slate-300 antialiased overflow-x-hidden relative synqor-style"
      style={{ background: '#000000', fontFamily: "'Inter', ui-sans-serif, system-ui" }}>

      {/* Always-on animated Canvas 2D backdrop (works without WebGL) */}
      <AnimatedBackdrop />

      {/* Optional Unicorn Studio WebGL layer on top of it (works in real browsers with WebGL) */}
      <UnicornBackground />

      {/* Back to portfolio floating bar */}
      <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-40">
        <Link to="/"
          className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest transition-colors"
          style={{ color: 'rgba(214,191,163,0.6)' }}
          onMouseOver={(e) => (e.currentTarget.style.color = '#D6BFA3')}
          onMouseOut={(e) => (e.currentTarget.style.color = 'rgba(214,191,163,0.6)')}>
          <ArrowLeft className="h-3.5 w-3.5" />
          Портфолио
        </Link>
      </div>

      <Hero />
      <TaskSection />
      <SolutionSection />
      <ArchitectureSection />
      <ResultsSection />
      <DemoSection />
      <TechDetailsSection />
      <CtaSection />
      <VfsFooter />
    </div>
  );
}
