import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft, ArrowRight, ArrowUpRight, Check, X, Zap, BarChart3, DollarSign,
  Target, TrendingUp, ShieldCheck, Cog, FileText, GraduationCap, Sparkles,
  Database, Plug, Bot, Mail
} from 'lucide-react';
import ParticleSphere from './ParticleSphere';
import ThreeCanvas from './ThreeCanvas';

/* ---------- Small primitives ---------- */
const MonoLabel = ({ children, dot = true, className = '' }) => (
  <div className={`inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-500 ${className}`}>
    {dot && <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />}
    {children}
  </div>
);

const PillBadge = ({ children, tone = 'green' }) => (
  <span className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-[10.5px] uppercase tracking-[0.14em] ${
    tone === 'green'
      ? 'border-emerald-500/25 bg-emerald-500/[0.06] text-emerald-300'
      : 'border-orange-500/25 bg-orange-500/[0.06] text-orange-300'
  }`}>
    <span className={`h-1.5 w-1.5 rounded-full ${tone === 'green' ? 'bg-emerald-400 animate-pulse' : 'bg-orange-500'}`} />
    {children}
  </span>
);

/* ---------- Hero ---------- */
function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center border-b border-white/[0.06] overflow-visible">
      {/* Fullscreen ambient + sphere */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Faint grid */}
        <div className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.5) 1px,transparent 1px)',
            backgroundSize: '56px 56px',
            maskImage: 'radial-gradient(ellipse at 50% 40%, black 40%, transparent 75%)'
          }} />
        {/* Orange glow behind sphere */}
        <div className="absolute right-[-6%] top-1/2 -translate-y-1/2 h-[520px] w-[520px] rounded-full bg-orange-500/[0.10] blur-[130px]" />
        <div className="absolute left-[-6%] top-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-amber-500/[0.05] blur-[130px]" />
      </div>

      {/* Particle sphere layer removed from here; rendered at page-root so it tucks under the top nav */}

      <div className="relative w-full max-w-[1280px] mx-auto px-8 py-24 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 relative z-10">
          <MonoLabel>Financial Operations / Case Study</MonoLabel>
          <h1 className="mt-6 text-[80px] leading-[0.95] font-semibold tracking-[-0.03em] text-white">
            Automate<br />
            <span className="text-zinc-600">the Ledger.</span>
          </h1>
          <p className="mt-8 max-w-lg text-zinc-400 leading-relaxed">
            От хаоса в бухгалтерии до чистой финансовой архитектуры. Настраиваем Zoho Books с
            разделением по ЦФУ, автоматизацией отчётов и полной документацией под ключ.
          </p>
          <div className="mt-10 flex items-center gap-3">
            <a
              href="mailto:admin@aliterra.space"
              className="group inline-flex items-center gap-2 rounded-full bg-white text-black font-medium px-5 py-3 text-sm hover:bg-zinc-200 transition-colors"
            >
              Initialize System
              <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <PillBadge>System Online</PillBadge>
          </div>

          <div className="mt-16 flex items-end gap-8 font-mono text-[11px] text-zinc-600">
            <div>
              <div className="text-zinc-500">Protocol</div>
              <div className="text-zinc-400">v6.2.1 · Zoho Books</div>
            </div>
            <div>
              <div className="text-zinc-500">Deployment</div>
              <div className="text-zinc-400">UAE · IFRS · VAT</div>
            </div>
          </div>
        </div>

        {/* Floating ledger card - overlay on sphere bottom-right */}
        <div className="lg:col-span-5 relative z-10 lg:mt-40 lg:ml-auto lg:max-w-[360px] w-full">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}

function HeroVisual() {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const i = setInterval(() => setTick((t) => (t + 1) % 100), 800);
    return () => clearInterval(i);
  }, []);
  const rows = [
    { code: 'B2B_1001', label: 'Wholesale Rev', val: '$142,320', flow: 'in' },
    { code: 'ECOM_2001', label: 'Retail Online', val: '$89,540', flow: 'in' },
    { code: 'CRYPTO_9001', label: 'USDT Wallet', val: '$18,200', flow: 'in' },
    { code: 'VAT_3050', label: 'Output VAT 5%', val: '−$12,493', flow: 'out' },
    { code: 'OPEX_4020', label: 'Operational', val: '−$41,880', flow: 'out' },
  ];

  return (
    <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 backdrop-blur-sm relative overflow-hidden">
      <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-orange-500/10 blur-3xl" />
      <div className="flex items-center justify-between relative">
        <div className="flex items-center gap-2 font-mono text-[11px] text-zinc-400">
          <Database className="h-3.5 w-3.5 text-orange-400" />
          CHART_OF_ACCOUNTS.live
        </div>
        <div className="flex items-center gap-1.5 font-mono text-[10px] text-zinc-500">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Sync
        </div>
      </div>

      <div className="mt-4 space-y-1.5 relative">
        {rows.map((r, i) => {
          const active = i === tick % rows.length;
          return (
            <div
              key={r.code}
              className={`flex items-center justify-between rounded-lg px-3 py-2.5 border transition-colors duration-300 ${
                active
                  ? 'border-orange-500/30 bg-orange-500/[0.05]'
                  : 'border-white/[0.05] bg-white/[0.015]'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className={`font-mono text-[10px] px-1.5 py-0.5 rounded ${
                  r.flow === 'in' ? 'bg-emerald-500/10 text-emerald-300' : 'bg-rose-500/10 text-rose-300'
                }`}>
                  {r.code}
                </span>
                <span className="text-sm text-zinc-300">{r.label}</span>
              </div>
              <span className={`font-mono text-xs tabular-nums ${
                r.flow === 'in' ? 'text-emerald-300' : 'text-rose-300'
              }`}>{r.val}</span>
            </div>
          );
        })}
      </div>

      <div className="mt-4 pt-4 border-t border-white/[0.05] grid grid-cols-3 gap-3 font-mono text-[10.5px]">
        <div>
          <div className="text-zinc-500">Balance</div>
          <div className="text-white mt-0.5 text-sm">$195,687</div>
        </div>
        <div>
          <div className="text-zinc-500">CFU B2B</div>
          <div className="text-white mt-0.5 text-sm">62%</div>
        </div>
        <div>
          <div className="text-zinc-500">Automation</div>
          <div className="text-orange-300 mt-0.5 text-sm">80%</div>
        </div>
      </div>
    </div>
  );
}

/* ---------- Problem vs Solution ---------- */
function ProblemSolution() {
  const problems = [
    'План счетов не разделён по направлениям бизнеса (B2B / Ecom)',
    'Невозможно получить отчёты по каждому ЦФУ отдельно',
    'Внебанковские платежи (крипта, P2P) не учитываются',
    'Нет чёткой структуры для управленческого учёта',
    'Бухгалтер путается в счетах',
  ];
  const solutions = [
    'Полный аудит существующего плана счетов',
    'Разбивка по ЦФУ: B2B (опт) и Ecom (розница онлайн)',
    'Настройка счетов для внебанковских платежей',
    'Шаблоны отчётов для управленческого учёта',
    'Полная документация + обучение команды',
  ];

  return (
    <section id="capabilities" className="border-b border-white/[0.06] py-28">
      <div className="max-w-[1280px] mx-auto px-8">
        <MonoLabel>01 / Problem Statement</MonoLabel>
        <h2 className="mt-4 text-5xl md:text-6xl font-semibold tracking-[-0.02em] text-white leading-[1]">
          Проблема ясна.<br /><span className="text-zinc-600">Решение точнее.</span>
        </h2>

        <div className="mt-16 grid md:grid-cols-2 gap-4">
          {/* Problem card */}
          <div className="rounded-2xl border border-rose-500/15 bg-rose-500/[0.03] p-8 relative overflow-hidden">
            <div className="flex items-center justify-between">
              <MonoLabel dot={false} className="text-rose-300"><span className="h-1.5 w-1.5 rounded-full bg-rose-400 mr-2 inline-block" />Before</MonoLabel>
              <X className="h-4 w-4 text-rose-400/60" />
            </div>
            <div className="mt-5 text-xl font-semibold text-white tracking-tight">Хаос в бухгалтерии</div>
            <ul className="mt-6 space-y-3">
              {problems.map((p) => (
                <li key={p} className="flex gap-3 text-sm text-zinc-400 leading-relaxed">
                  <span className="mt-2 h-1 w-1 rounded-full bg-rose-500/60 shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
          </div>

          {/* Solution card */}
          <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.03] p-8 relative overflow-hidden">
            <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-emerald-500/10 blur-3xl" />
            <div className="relative">
              <div className="flex items-center justify-between">
                <MonoLabel dot={false} className="text-emerald-300"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400 mr-2 inline-block" />After</MonoLabel>
                <Check className="h-4 w-4 text-emerald-400/60" />
              </div>
              <div className="mt-5 text-xl font-semibold text-white tracking-tight">Финансовая архитектура под ключ</div>
              <ul className="mt-6 space-y-3">
                {solutions.map((s) => (
                  <li key={s} className="flex gap-3 text-sm text-zinc-300 leading-relaxed">
                    <Check className="h-4 w-4 text-emerald-400 mt-0.5 shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Process Timeline ---------- */
function Process() {
  const steps = [
    { n: '00', d: '2–3 дня', t: 'Экспресс-аудит', c: 'Точка Go/No-Go. Анализ текущего плана счетов, выявление критических проблем.' },
    { n: '01', d: '3–5 дней', t: 'Детальный аудит', c: 'Полный разбор всех счетов, транзакций, отчётов. Карта проблемных зон.' },
    { n: '02', d: '2–3 дня', t: 'План структуры', c: 'Проектирование нового плана счетов с разбивкой по ЦФУ B2B и Ecom.' },
    { n: '03', d: '3–5 дней', t: 'Настройка Zoho Books', c: 'Создание счетов, настройка ЦФУ, шаблоны транзакций, правила автоматизации.' },
    { n: '04', d: '2–3 дня', t: 'Миграция данных', c: 'Перенос исторических данных, сверка балансов, тестирование отчётов.' },
    { n: '05', d: '2–3 дня', t: 'Документация + обучение', c: 'Инструкции для бухгалтера, шпаргалки, видео-гайды, поддержка 30 дней.' },
  ];

  return (
    <section id="architecture" className="border-b border-white/[0.06] py-28 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-[30%] left-[-10%] h-[400px] w-[400px] rounded-full bg-orange-500/[0.05] blur-[130px]" />
      </div>
      <div className="relative max-w-[1280px] mx-auto px-8">
        <div className="flex items-end justify-between flex-wrap gap-6">
          <div>
            <MonoLabel>02 / Execution Protocol</MonoLabel>
            <h2 className="mt-4 text-5xl md:text-6xl font-semibold tracking-[-0.02em] text-white leading-[1]">
              6 шагов<br /><span className="text-zinc-600">до чистого баланса.</span>
            </h2>
          </div>
          <div className="font-mono text-xs text-zinc-500 max-w-xs">
            <div className="text-orange-400">TOTAL_DURATION</div>
            <div className="text-zinc-300 mt-1">≈ 14–22 рабочих дня</div>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {steps.map((s) => (
            <div key={s.n} className="group relative rounded-2xl border border-white/[0.06] bg-white/[0.015] p-6 hover:border-orange-500/25 hover:bg-white/[0.03] transition-colors">
              <div className="flex items-start justify-between">
                <div className="font-mono text-5xl font-semibold text-zinc-700 group-hover:text-orange-500/70 transition-colors tracking-tight">{s.n}</div>
                <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-500 rounded-full border border-white/[0.08] px-2.5 py-1">{s.d}</span>
              </div>
              <div className="mt-5 text-lg font-semibold text-white tracking-tight">{s.t}</div>
              <p className="mt-2 text-sm text-zinc-500 leading-relaxed">{s.c}</p>
              <div className="mt-6 h-px w-full bg-gradient-to-r from-orange-500/40 via-white/[0.05] to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- What's Included ---------- */
function Included() {
  const blocks = [
    {
      icon: Cog, title: 'Настройка системы', items: [
        'План счетов с разбивкой по ЦФУ',
        'Настройка центров финансового учёта (B2B, Ecom)',
        'Счета для внебанковских платежей (крипта, P2P)',
        'Шаблоны типовых транзакций',
        'Правила автоматизации',
        'Настройка VAT (НДС)',
      ]
    },
    {
      icon: BarChart3, title: 'Отчёты и аналитика', items: [
        'Отчёты по ЦФУ (B2B / Ecom отдельно)',
        'Управленческий баланс',
        'P&L (Прибыли и убытки) по направлениям',
        'Cash Flow Statement',
        'Кастомные дашборды',
        'Автоматическая рассылка отчётов',
      ]
    },
    {
      icon: FileText, title: 'Документация', items: [
        'Описание структуры плана счетов',
        'Инструкции по каждому счёту',
        'Чек-листы для бухгалтера',
        'FAQ (типовые вопросы)',
        'Видео-гайды по работе в Zoho Books',
        'Шаблоны документов',
      ]
    },
    {
      icon: GraduationCap, title: 'Обучение и поддержка', items: [
        'Онлайн-сессия для команды (2 часа)',
        'Индивидуальное обучение бухгалтера',
        'Поддержка в Telegram/WhatsApp 30 дней',
        'Доработки первые 30 дней',
        'Консультации по учёту',
      ]
    },
  ];
  return (
    <section className="border-b border-white/[0.06] py-28">
      <div className="max-w-[1280px] mx-auto px-8">
        <MonoLabel>03 / Deliverables</MonoLabel>
        <h2 className="mt-4 text-5xl md:text-6xl font-semibold tracking-[-0.02em] text-white leading-[1]">
          Что входит<br /><span className="text-zinc-600">в проект.</span>
        </h2>

        <div className="mt-16 grid md:grid-cols-2 gap-4">
          {blocks.map((b) => {
            const Icon = b.icon;
            return (
              <div key={b.title} className="rounded-2xl border border-white/[0.06] bg-white/[0.015] p-8 hover:border-white/[0.14] transition-colors">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-orange-500/10 border border-orange-500/20 grid place-items-center">
                    <Icon className="h-4.5 w-4.5 text-orange-400" />
                  </div>
                  <div className="text-lg font-semibold text-white tracking-tight">{b.title}</div>
                </div>
                <ul className="mt-6 space-y-2.5">
                  {b.items.map((i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-zinc-400">
                      <Check className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- Tech Stack ---------- */
function TechStack() {
  const cols = [
    { title: 'Zoho Books', icon: Database, items: ['Chart of Accounts', 'Cost Centers', 'Custom Fields', 'Automation Rules', 'Reports'] },
    { title: 'Интеграции', icon: Plug, items: ['Bank Feeds', 'Payment Gateways', 'Crypto Wallets', 'Excel Import/Export', 'API'] },
    { title: 'Отчётность', icon: BarChart3, items: ['IFRS', 'UAE VAT', 'Management Reports', 'Custom Dashboards', 'Scheduled Reports'] },
    { title: 'Автоматизация', icon: Bot, items: ['Transaction Rules', 'Recurring Entries', 'Workflows', 'Notifications', 'Reminders'] },
  ];
  return (
    <section className="border-b border-white/[0.06] py-28">
      <div className="max-w-[1280px] mx-auto px-8">
        <MonoLabel>04 / Tech Stack</MonoLabel>
        <h2 className="mt-4 text-5xl md:text-6xl font-semibold tracking-[-0.02em] text-white leading-[1]">
          Технологии<br /><span className="text-zinc-600">и интеграции.</span>
        </h2>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {cols.map((c) => {
            const Icon = c.icon;
            return (
              <div key={c.title} className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6">
                <Icon className="h-5 w-5 text-orange-400" />
                <div className="mt-4 font-mono text-[11px] uppercase tracking-[0.16em] text-zinc-500">Module</div>
                <div className="text-lg font-semibold text-white tracking-tight">{c.title}</div>
                <div className="mt-5 space-y-2">
                  {c.items.map((it) => (
                    <div key={it} className="flex items-center justify-between font-mono text-[12px] py-1.5 border-b border-white/[0.04] last:border-none">
                      <span className="text-zinc-400">{it}</span>
                      <span className="text-orange-400/70">·</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- Results ---------- */
function Results() {
  const items = [
    { icon: Zap, title: 'Скорость', v: '2–3 дня', d: 'Закрытие месяца вместо недели' },
    { icon: BarChart3, title: 'Прозрачность', v: '5 минут', d: 'Отчёты по каждому направлению' },
    { icon: DollarSign, title: 'Экономия', v: '30–40%', d: 'Снижение затрат на бухгалтерию' },
    { icon: Target, title: 'Точность', v: '80%', d: 'Автоматизация операций, ноль ручных ошибок' },
    { icon: TrendingUp, title: 'Аналитика', v: 'Real-time', d: 'Управленческие решения на данных' },
    { icon: ShieldCheck, title: 'Комплаенс', v: 'IFRS · VAT', d: 'Соответствие UAE требованиям' },
  ];
  return (
    <section id="pricing" className="border-b border-white/[0.06] py-28">
      <div className="max-w-[1280px] mx-auto px-8">
        <MonoLabel>05 / Business Outcomes</MonoLabel>
        <h2 className="mt-4 text-5xl md:text-6xl font-semibold tracking-[-0.02em] text-white leading-[1]">
          Результаты<br /><span className="text-zinc-600">в цифрах.</span>
        </h2>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((it) => {
            const Icon = it.icon;
            return (
              <div key={it.title} className="group relative rounded-2xl border border-white/[0.06] bg-white/[0.02] p-7 hover:border-orange-500/25 transition-colors overflow-hidden">
                <div className="absolute -top-14 -right-14 h-32 w-32 rounded-full bg-orange-500/[0.07] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <Icon className="h-5 w-5 text-orange-400" />
                    <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-600">Metric</span>
                  </div>
                  <div className="mt-6 text-4xl font-semibold text-white tracking-[-0.02em]">{it.v}</div>
                  <div className="mt-2 text-sm text-orange-300 font-medium">{it.title}</div>
                  <div className="mt-1 text-sm text-zinc-500">{it.d}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- CTA ---------- */
function CTA() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2 h-[500px] w-[900px] rounded-full bg-orange-500/[0.08] blur-[140px]" />
      </div>
      <div className="relative max-w-[900px] mx-auto px-8 text-center">
        <PillBadge tone="orange">Ready to deploy</PillBadge>
        <h2 className="mt-6 text-5xl md:text-7xl font-semibold tracking-[-0.03em] text-white leading-[0.98]">
          Хотите такую же<br /><span className="text-zinc-600">настройку?</span>
        </h2>
        <p className="mt-6 text-zinc-400 max-w-xl mx-auto leading-relaxed">
          Настроим план счетов в Zoho Books под ваш бизнес: разбивка по направлениям, автоматизация, отчёты.
          Первый этап (экспресс-аудит) — 2–3 дня, точка Go/No-Go.
        </p>

        <div className="mt-10 flex items-center justify-center gap-3 flex-wrap">
          <a
            href="mailto:admin@aliterra.space"
            className="group inline-flex items-center gap-2 rounded-full bg-white text-black font-medium px-5 py-3 text-sm hover:bg-zinc-200 transition-colors"
          >
            <Mail className="h-4 w-4" />
            admin@aliterra.space
          </a>
          <a
            href="https://unidev.space/zoho-books/"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-white/[0.15] text-white/90 hover:text-white hover:border-white/25 hover:bg-white/[0.04] font-medium px-5 py-3 text-sm transition-colors"
          >
            Посмотреть демо
            <ArrowUpRight className="h-4 w-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        <div className="mt-14 font-mono text-[10.5px] uppercase tracking-[0.18em] text-zinc-600">
          <span className="text-orange-400">◆</span> UAE · IFRS · VAT · Zoho Books Partner
        </div>
      </div>
    </section>
  );
}

/* ---------- Top Nav ---------- */
function TopNav() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl bg-black/60 border-b border-white/[0.06]">
      <div className="max-w-[1280px] mx-auto px-8 h-[64px] flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 text-white">
          <span className="h-7 w-7 rounded-md border border-white/15 grid place-items-center font-mono text-[11px] font-bold">UD</span>
          <span className="font-semibold tracking-tight">UniDev</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-400">
          <a href="#capabilities" className="hover:text-white transition-colors">Capabilities</a>
          <a href="#architecture" className="hover:text-white transition-colors">Architecture</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
        </nav>
        <a
          href="mailto:admin@aliterra.space"
          className="inline-flex items-center gap-2 rounded-full bg-white text-black text-sm font-medium px-4 py-2 hover:bg-zinc-200 transition-colors"
        >
          Book Demo
        </a>
      </div>
    </header>
  );
}

/* ---------- Breadcrumb / footer bar ---------- */
function Breadcrumb() {
  return (
    <div className="max-w-[1280px] mx-auto px-8 pt-6">
      <Link to="/" className="inline-flex items-center gap-1.5 text-xs text-zinc-500 hover:text-orange-300 transition-colors font-mono uppercase tracking-[0.14em]">
        <ArrowLeft className="h-3.5 w-3.5" /> Portfolio / Case
      </Link>
    </div>
  );
}

function FooterBar() {
  return (
    <footer className="border-t border-white/[0.06] py-8">
      <div className="max-w-[1280px] mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-[11px] uppercase tracking-[0.14em] text-zinc-600">
        <div>© UniDev · Zoho Books Implementation</div>
        <div className="flex items-center gap-6">
          <span><span className="text-orange-400">◆</span> Protocol v6.2.1</span>
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Encrypted Tunnel
          </span>
        </div>
      </div>
    </footer>
  );
}

/* ---------- Page ---------- */
export default function ZohoBooksPage() {
  return (
    <div className="min-h-screen bg-black text-white antialiased overflow-x-hidden zohopage relative">
      {/* Global sphere layer — sits between page background (z-0) and top nav (z-40),
          so it visually tucks UNDER the sticky nav with backdrop-blur */}
      <div className="pointer-events-none absolute left-0 right-0 top-0 h-[105vh] z-[5] overflow-hidden">
        <div className="absolute right-[2%] top-0 h-full w-[70%] max-w-[1100px]">
          <ThreeCanvas
            distortion={0.65}
            detail={0.95}
            speed={0.12}
            opacity={0.9}
            color="#e4e4e7"
            scale={1.12}
            offset={{ x: -1.8, y: 3.2, z: 0 }}
          />
        </div>
      </div>

      <TopNav />
      <Breadcrumb />
      <Hero />
      <ProblemSolution />
      <Process />
      <Included />
      <TechStack />
      <Results />
      <CTA />
      <FooterBar />
    </div>
  );
}
