import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles, Bot, ArrowLeft, ArrowRight, ArrowUpRight, ChevronDown, ChevronRight,
  Cpu, Activity, Network, Database, LayoutDashboard, Play, Pause, Terminal,
  Shield, AlertTriangle, Check, Cookie, Globe2, Lock, FileCode,
  Clock, Zap, ScrollText, User, Mail, Boxes, Workflow, KeyRound,
  Folder, FileText, Copy, ExternalLink, Layers, CircleAlert, ShieldCheck
} from 'lucide-react';
import { KeycapBadge, TechChip, Nav, SectionEyebrow, SectionTitle, GOLD, CYAN, PANEL_A, PANEL_B } from './VfsShared';

/* ================= HERO ================= */
export function Hero() {
  const tags = [
    { label: 'Python', tone: 'cyan' },
    { label: 'Selenium', tone: 'default' },
    { label: 'Undetected ChromeDriver', tone: 'default' },
    { label: 'Cloudflare Bypass', tone: 'gold' },
    { label: 'Cookies', tone: 'default' },
    { label: 'Proxy', tone: 'default' },
  ];

  return (
    <div className="flex flex-col overflow-hidden min-h-[880px] w-full max-w-7xl mx-auto relative items-center">
      {/* Ambient background masked */}
      <div className="absolute inset-0 -z-0 opacity-60 pointer-events-none"
        style={{ maskImage: 'linear-gradient(transparent, black 15%, black 85%, transparent)' }}>
        <div className="absolute top-[15%] left-1/2 -translate-x-1/2 h-[520px] w-[900px] rounded-full blur-[130px]"
          style={{ background: 'radial-gradient(circle, rgba(127,219,255,0.10) 0%, transparent 60%)' }} />
        <div className="absolute top-[45%] left-[30%] h-[420px] w-[420px] rounded-full blur-[130px]"
          style={{ background: 'rgba(214,191,163,0.08)' }} />
        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.5) 1px,transparent 1px)',
            backgroundSize: '56px 56px',
            maskImage: 'radial-gradient(ellipse at 50% 30%, black 40%, transparent 75%)'
          }} />
      </div>

      <Nav />

      <div className="flex flex-col flex-1 z-10 text-center w-full max-w-5xl px-6 items-center justify-center pt-16 pb-8">
        <KeycapBadge tone="cyan">Automation Case • VFS Global</KeycapBadge>

        <h1 className="mt-10 font-manrope font-light text-5xl md:text-7xl lg:text-[100px] leading-[0.95] tracking-tighter text-white">
          VFS Visa Bot<br />
          <span className="opacity-80" style={{ color: GOLD }}>Bypass Cloudflare.</span>
        </h1>

        <p className="mt-8 text-lg md:text-xl font-light max-w-2xl leading-relaxed text-slate-300">
          Бот для автоматизации записи на визу через VFS Global. Обход защиты Cloudflare,
          работа с cookies, поддержка прокси и headless-режим.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-2 max-w-2xl">
          {tags.map((t) => <TechChip key={t.label} tone={t.tone}>{t.label}</TechChip>)}
        </div>

        <div className="mt-12">
          <CtaButton />
        </div>
      </div>

      {/* Dashboard preview */}
      <HeroPreview />
    </div>
  );
}

/* ---------- CTA button with layered glow ---------- */
function CtaButton() {
  return (
    <a
      href="#solution"
      className="group inline-flex items-center justify-center transition-all duration-500 hover:scale-105 active:scale-95 z-10 relative"
    >
      {/* Layered glow */}
      <div className="absolute -inset-4 group-hover:-inset-6 opacity-40 group-hover:opacity-80 rounded-full blur-2xl transition-all duration-700 pointer-events-none"
        style={{ background: `linear-gradient(90deg, rgba(214,191,163,0.5), rgba(127,219,255,0.5), rgba(214,191,163,0.5))` }} />
      <div className="absolute -inset-1 group-hover:-inset-2 opacity-50 group-hover:opacity-100 rounded-full blur-xl transition-all duration-500 pointer-events-none"
        style={{ background: `linear-gradient(90deg, rgba(127,219,255,0.4), rgba(214,191,163,0.4))` }} />

      <div
        className="overflow-hidden flex items-center gap-4 rounded-full py-4 px-10 relative backdrop-blur-xl transition-all duration-500"
        style={{
          background: 'rgba(30,30,30,0.9)',
          border: '1px solid rgba(214,191,163,0.3)',
          boxShadow: '0 20px 40px -10px rgba(0,0,0,0.8), inset 0 2px 2px rgba(214,191,163,0.3), inset 0 -4px 8px rgba(0,0,0,0.5), inset 0 0 20px rgba(214,191,163,0.1)',
        }}
      >
        <div className="absolute inset-0 -translate-x-[150%] skew-x-[30deg] group-hover:translate-x-[150%] transition-transform duration-1000 ease-out w-[150%] pointer-events-none"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)' }} />

        <div className="relative flex items-center justify-center">
          <Sparkles className="h-5 w-5 drop-shadow-[0_0_10px_rgba(127,219,255,0.8)] group-hover:rotate-180 transition-transform duration-700" style={{ color: CYAN }} />
        </div>

        <span
          className="relative z-10 text-base font-semibold tracking-[0.15em] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
          style={{
            background: `linear-gradient(180deg, ${GOLD}, ${GOLD}b3)`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          ВЗГЛЯНУТЬ НА РЕШЕНИЕ
        </span>

        <div className="relative flex items-center justify-center">
          <Bot className="h-5 w-5 drop-shadow-[0_0_10px_rgba(214,191,163,0.8)] group-hover:-rotate-12 transition-transform duration-500" style={{ color: GOLD }} />
        </div>
      </div>
    </a>
  );
}

/* ================= HERO PREVIEW (Dashboard mock) ================= */
function HeroPreview() {
  return (
    <div className="flex flex-col -translate-y-4 w-full max-w-[1280px] px-4 pt-0 pb-4 mx-auto items-center justify-center">
      <div
        className="w-full rounded-[1.5rem] sm:rounded-[2.5rem] p-2 relative shadow-[0_50px_100px_-20px_rgba(0,0,0,0.7)] border border-white/10"
        style={{ background: `linear-gradient(180deg, ${PANEL_A}, ${PANEL_B})` }}
      >
        {/* top hairline */}
        <div className="absolute inset-x-8 top-0 h-px z-50 pointer-events-none"
          style={{ background: `linear-gradient(90deg, transparent, ${GOLD}66, transparent)`, opacity: 0.7 }} />

        <div
          className="overflow-hidden flex flex-col sm:flex-row w-full h-auto min-h-[600px] sm:h-[720px] rounded-[1rem] sm:rounded-[2rem] relative"
          style={{
            background: PANEL_B,
            boxShadow: 'inset 0 2px 8px rgba(0,0,0,0.8)',
            border: '1px solid rgba(255,255,255,0.05)',
          }}
        >
          <div className="absolute inset-0 opacity-50 pointer-events-none"
            style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.02) 1px,transparent 1px)',
              backgroundSize: '40px 40px',
            }} />
          <div className="absolute top-0 inset-x-0 h-80 pointer-events-none"
            style={{ background: 'linear-gradient(180deg, rgba(127,219,255,0.05), transparent)' }} />

          <DashSidebar />
          <DashContent />
        </div>
      </div>
    </div>
  );
}

function DashSidebar() {
  return (
    <div className="hidden sm:flex flex-col shrink-0 z-10 w-[260px] border-r border-white/5 relative backdrop-blur-md">
      <div className="flex h-16 border-b border-white/5 px-4 items-center">
        <div className="flex items-center gap-3 text-slate-200 font-semibold font-manrope text-sm tracking-wide">
          <span>Vfs_Bot</span>
          <ChevronDown className="h-3 w-3" style={{ color: '#6b7280' }} />
        </div>
      </div>

      <div className="pt-4 px-3 pb-4 space-y-1">
        <SideItem icon={LayoutDashboard} active>Workflow Hub</SideItem>
        <SideItem icon={Activity}>Execution Monitor</SideItem>
        <SideItem icon={Network}>Graph Topology</SideItem>
        <SideItem icon={Database}>Cookies Store</SideItem>
      </div>

      <div className="mt-4 px-4 mb-2 flex items-center justify-between">
        <span className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: '#64748b' }}>Environments</span>
        <div className="w-5 h-5 rounded flex items-center justify-center border border-white/5" style={{ background: 'rgba(255,255,255,0.03)' }}>
          <span className="text-slate-400 text-xs">+</span>
        </div>
      </div>

      <div className="px-3 space-y-1">
        <EnvRow color={CYAN} label="Prod-BLR-PL" />
        <EnvRow color={GOLD} label="Stage-Cloud" />
      </div>

      <div className="mt-6 px-4 mb-2">
        <span className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: '#64748b' }}>Active Bots</span>
      </div>

      <div className="px-3 space-y-1">
        <div className="flex items-center gap-3 px-3 py-2 rounded-lg text-white border border-white/5"
          style={{ background: 'rgba(255,255,255,0.05)', boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.2)' }}>
          <Bot className="h-3.5 w-3.5" style={{ color: CYAN }} />
          <span className="text-xs">VFS-Selenium-01</span>
          <div className="ml-auto w-1 h-1 rounded-full"
            style={{ background: CYAN, boxShadow: `0 0 5px ${CYAN}` }} />
        </div>
        <div className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-400 border border-transparent">
          <ShieldCheck className="h-3.5 w-3.5" />
          <span className="text-xs">VFS-Playwright</span>
        </div>
      </div>

      <div className="mt-auto border-t border-white/5 p-4" style={{ background: 'rgba(255,255,255,0.02)' }}>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full flex items-center justify-center"
            style={{
              background: `linear-gradient(135deg, ${GOLD}, ${CYAN})`,
              ringOffsetColor: PANEL_B,
            }}>
            <User className="h-4 w-4 text-black" />
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-slate-200 font-semibold">Client</span>
            <span className="text-[10px]" style={{ color: '#64748b' }}>blr@family.migrate</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function SideItem({ icon: Icon, active = false, children }) {
  if (active) {
    return (
      <div className="flex items-center gap-3 px-3 py-2 rounded-xl relative overflow-hidden border cursor-pointer"
        style={{
          background: `linear-gradient(180deg, rgba(127,219,255,0.1), transparent)`,
          borderColor: 'rgba(127,219,255,0.2)',
          boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.05)',
          color: CYAN,
        }}>
        <div className="absolute left-0 top-0 bottom-0 w-0.5"
          style={{ background: CYAN, boxShadow: `0 0 10px ${CYAN}` }} />
        <Icon className="h-4 w-4 drop-shadow-[0_0_5px_rgba(127,219,255,0.5)]" />
        <span className="text-sm font-medium">{children}</span>
      </div>
    );
  }
  return (
    <div className="flex items-center gap-3 px-3 py-2 rounded-xl text-slate-400 border border-transparent hover:border-white/5 cursor-pointer transition-colors hover:text-slate-200 hover:bg-white/[0.05]">
      <Icon className="h-4 w-4" />
      <span className="text-sm">{children}</span>
    </div>
  );
}

function EnvRow({ color, label }) {
  return (
    <div className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-400 hover:bg-white/[0.05] cursor-pointer border border-transparent hover:border-white/5 transition-colors hover:text-slate-200">
      <div className="relative w-2 h-2">
        <div className="absolute inset-0 rounded-full blur-[2px]" style={{ background: color }} />
        <div className="relative w-2 h-2 rounded-full" style={{ background: color, border: `1px solid ${color}80` }} />
      </div>
      <span className="text-sm">{label}</span>
    </div>
  );
}

function DashContent() {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 700);
    return () => clearInterval(id);
  }, []);

  const logs = [
    { t: '00:01', label: 'Init undetected-chromedriver', ok: true },
    { t: '00:03', label: 'Load cookies.pkl', ok: true },
    { t: '00:07', label: 'GET visa.vfsglobal.com/blr/ru/pol/login', ok: true },
    { t: '00:12', label: 'Cloudflare Turnstile bypassed', ok: true },
    { t: '00:18', label: 'Fill email & password', ok: true },
    { t: '00:24', label: 'Click «Согласие»', ok: true },
    { t: '00:30', label: 'Session saved · Ready for booking', ok: true },
  ];
  const visible = logs.slice(0, Math.min(logs.length, Math.max(1, tick % (logs.length + 2))));

  return (
    <div className="flex-1 flex flex-col min-w-0 relative z-10">
      {/* Topbar */}
      <div className="hidden sm:flex h-16 border-b border-white/5 items-center justify-between px-8 backdrop-blur-md sticky top-0 z-20"
        style={{ background: 'rgba(18,18,18,0.8)' }}>
        <div className="flex items-center gap-2 text-slate-500 text-sm">
          <span>Prod-BLR-PL</span>
          <ChevronRight className="h-3 w-3 opacity-50" />
          <span className="text-slate-200">VFS-Selenium-01</span>
          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full ml-3"
            style={{ background: 'rgba(127,219,255,0.1)', border: '1px solid rgba(127,219,255,0.2)' }}>
            <div className="w-1 h-1 rounded-full animate-pulse" style={{ background: CYAN }} />
            <span className="text-[10px] font-semibold tracking-wider" style={{ color: CYAN }}>RUNNING</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/10 shadow-[0_2px_4px_rgba(0,0,0,0.3)]"
            style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))' }}>
            <Pause className="h-3 w-3 text-slate-400" />
            <span className="text-xs font-medium text-slate-400">Pause</span>
          </button>
          <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg shadow-[0_2px_4px_rgba(0,0,0,0.3)]"
            style={{
              background: 'linear-gradient(180deg, rgba(127,219,255,0.2), rgba(127,219,255,0.05))',
              border: '1px solid rgba(127,219,255,0.3)',
            }}>
            <Terminal className="h-3 w-3" style={{ color: CYAN }} />
            <span className="text-xs font-medium" style={{ color: CYAN }}>Console</span>
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="max-w-5xl mx-auto p-4 sm:p-8">
          {/* Title area */}
          <div className="mb-6 flex items-end justify-between gap-3">
            <div>
              <h1 className="text-lg sm:text-2xl font-semibold font-manrope text-white mb-1 tracking-tight">
                Cloudflare Bypass · Session Ingest
              </h1>
              <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                <span className="font-mono px-1.5 py-0.5 rounded text-slate-400 border border-white/5" style={{ background: 'rgba(255,255,255,0.05)' }}>
                  ID: WRK-VFS-001
                </span>
                <span className="hidden sm:inline w-1 h-1 rounded-full bg-slate-700" />
                <span>Last active: 2s ago</span>
              </div>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full backdrop-blur-md border border-white/5"
              style={{ background: 'rgba(255,255,255,0.05)' }}>
              <Cpu className="h-3 w-3" style={{ color: CYAN }} />
              <span className="text-xs font-mono text-slate-300">24% Load</span>
            </div>
          </div>

          {/* Chart / graph placeholder */}
          <div className="w-full h-40 sm:h-56 rounded-xl sm:rounded-2xl mb-6 relative overflow-hidden border border-white/5 backdrop-blur-md"
            style={{
              background: 'rgba(255,255,255,0.02)',
              boxShadow: 'inset 0 2px 10px rgba(0,0,0,0.2)',
            }}>
            <div className="absolute inset-0"
              style={{
                backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.02) 1px,transparent 1px)',
                backgroundSize: '20px 20px',
              }} />
            <FakeChart tick={tick} />
          </div>

          {/* Log stream */}
          <div className="rounded-2xl border border-white/5 backdrop-blur-md overflow-hidden"
            style={{ background: 'rgba(255,255,255,0.02)' }}>
            <div className="px-4 py-2.5 border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <ScrollText className="h-3.5 w-3.5" style={{ color: GOLD }} />
                <span className="font-mono">bot.log</span>
              </div>
              <span className="text-[10px] font-mono" style={{ color: 'rgba(127,219,255,0.7)' }}>live</span>
            </div>
            <div className="p-4 font-mono text-[11.5px] leading-relaxed space-y-1 min-h-[168px]">
              {visible.map((l, i) => (
                <div key={l.t} className="flex items-center gap-3">
                  <span className="text-slate-600 w-12">{l.t}</span>
                  <Check className="h-3 w-3 shrink-0" style={{ color: l.ok ? '#4ade80' : '#f87171' }} />
                  <span className="text-slate-300">{l.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FakeChart({ tick }) {
  // simple animated line
  const pts = Array.from({ length: 40 }, (_, i) => {
    const y = 50 + 15 * Math.sin((i + tick * 0.5) * 0.35) + 8 * Math.cos((i + tick * 0.3) * 0.9);
    return `${i * (100 / 39)},${y}`;
  }).join(' ');
  return (
    <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
      <defs>
        <linearGradient id="glow" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor={CYAN} stopOpacity="0.35" />
          <stop offset="1" stopColor={CYAN} stopOpacity="0" />
        </linearGradient>
      </defs>
      <polyline points={`0,100 ${pts} 100,100`} fill="url(#glow)" stroke="none" />
      <polyline points={pts} fill="none" stroke={CYAN} strokeWidth="0.4" style={{ filter: `drop-shadow(0 0 2px ${CYAN})` }} />
    </svg>
  );
}
