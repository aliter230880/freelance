import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles, Bot, ArrowLeft, ArrowRight, ArrowUpRight, ChevronDown, ChevronRight,
  Cpu, Activity, Network, Database, LayoutDashboard, Play, Pause, Terminal,
  Shield, AlertTriangle, Check, ShieldAlert, Cookie, Globe2, Lock, FileCode,
  Clock, Zap, ScrollText, User, Mail, Boxes, Rocket, Workflow, KeyRound,
  ChevronsRight, Folder, FileText, Copy, ExternalLink
} from 'lucide-react';

/* ---------- Design tokens ---------- */
const GOLD = '#D6BFA3';
const CYAN = '#7FDBFF';
const PANEL_A = '#1E1E1E';
const PANEL_B = '#121212';

/* ---------- Small primitives ---------- */
const KeycapBadge = ({ children, dot = true, tone = 'gold' }) => (
  <div
    className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 border shadow-[0_0_20px_rgba(214,191,163,0.15)] backdrop-blur-sm"
    style={{ background: 'rgba(30,30,30,0.6)', borderColor: 'rgba(214,191,163,0.2)' }}
  >
    {dot && (
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping"
          style={{ background: tone === 'gold' ? GOLD : CYAN }} />
        <span className="relative inline-flex rounded-full h-2 w-2"
          style={{ background: tone === 'gold' ? GOLD : CYAN }} />
      </span>
    )}
    <span className="text-[10px] uppercase font-bold tracking-[0.2em]"
      style={{ color: tone === 'gold' ? GOLD : CYAN }}>
      {children}
    </span>
  </div>
);

const TechChip = ({ children, tone = 'default' }) => {
  const styles = tone === 'cyan'
    ? { bg: 'rgba(127,219,255,0.08)', border: 'rgba(127,219,255,0.2)', color: CYAN }
    : tone === 'gold'
      ? { bg: 'rgba(214,191,163,0.08)', border: 'rgba(214,191,163,0.2)', color: GOLD }
      : { bg: 'rgba(255,255,255,0.03)', border: 'rgba(255,255,255,0.08)', color: '#cbd5e1' };
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-medium tracking-wide backdrop-blur-sm"
      style={{ background: styles.bg, borderColor: styles.border, borderWidth: 1, color: styles.color }}
    >
      {children}
    </span>
  );
};

/* ---------- Sticky Nav (with collapse-on-scroll) ---------- */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 flex items-center justify-between mx-auto w-full max-w-7xl px-4 sm:px-8 py-3 border transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        scrolled ? 'max-w-5xl mt-4 rounded-full backdrop-blur-xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.7)]' : 'border-transparent'
      }`}
      style={scrolled ? {
        background: 'rgba(30,30,30,0.8)',
        borderColor: 'rgba(214,191,163,0.2)',
      } : {}}
    >
      <Link to="/" className="flex items-center gap-3 shrink-0">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="drop-shadow-[0_0_8px_rgba(127,219,255,0.6)]">
          <path d="M16 2L29 9.5V22.5L16 30L3 22.5V9.5L16 2Z" fill={PANEL_A} stroke={CYAN} strokeWidth="1.5" strokeOpacity="0.3" />
          <path d="M25 7H13L7 16H25L19 25H7" stroke={GOLD} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="font-manrope font-light text-xl sm:text-2xl tracking-tight" style={{ color: GOLD }}>UniDev</span>
      </Link>

      <div
        className={`hidden md:flex gap-8 items-center transition-all duration-500 ${
          scrolled ? 'bg-transparent border-transparent shadow-none' : 'rounded-full px-8 py-3 shadow-2xl backdrop-blur-xl'
        }`}
        style={!scrolled ? {
          background: 'rgba(30,30,30,0.6)',
          borderColor: 'rgba(214,191,163,0.1)',
          borderWidth: 1,
        } : {}}
      >
        {['Capabilities', 'Solutions', 'Resources', 'Company'].map((label) => (
          <button
            key={label}
            className="flex items-center gap-1.5 text-xs uppercase tracking-widest font-medium transition-colors"
            style={{ color: 'rgba(214,191,163,0.7)' }}
            onMouseOver={(e) => (e.currentTarget.style.color = GOLD)}
            onMouseOut={(e) => (e.currentTarget.style.color = 'rgba(214,191,163,0.7)')}
          >
            {label}
            <ChevronDown className="h-3 w-3 opacity-60" />
          </button>
        ))}
      </div>

      <button
        className="hidden md:inline-flex px-6 py-2.5 rounded-full border text-xs font-medium uppercase tracking-wider transition-all shadow-lg active:translate-y-[1px]"
        style={{
          background: 'rgba(30,30,30,0.8)',
          borderColor: 'rgba(214,191,163,0.2)',
          color: GOLD,
        }}
      >
        Contact Sales
      </button>
    </nav>
  );
}

/* ---------- Section header ---------- */
const SectionEyebrow = ({ children, tone = 'gold' }) => (
  <div className="inline-flex items-center gap-2 mb-4">
    <div className="h-px w-8" style={{ background: tone === 'gold' ? GOLD : CYAN, opacity: 0.5 }} />
    <span className="text-[10px] uppercase tracking-[0.28em] font-semibold" style={{ color: tone === 'gold' ? GOLD : CYAN }}>
      {children}
    </span>
  </div>
);

const SectionTitle = ({ children, accent }) => (
  <h2 className="font-manrope font-light text-4xl sm:text-5xl md:text-6xl leading-[1.02] tracking-tight text-white">
    {children}
    {accent && <span className="opacity-70 block mt-1 sm:inline sm:mt-0 sm:ml-2" style={{ color: GOLD }}>{accent}</span>}
  </h2>
);

export { KeycapBadge, TechChip, Nav, SectionEyebrow, SectionTitle, GOLD, CYAN, PANEL_A, PANEL_B };
