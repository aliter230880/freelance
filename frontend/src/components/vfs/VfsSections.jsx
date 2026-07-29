import React from 'react';
import { Link } from 'react-router-dom';
import {
  AlertTriangle, Check, Cookie, Globe2, Lock, ShieldCheck, ShieldAlert,
  Bot, Zap, Cpu, Boxes, Workflow, FileText, KeyRound, Terminal,
  Folder, ChevronsRight, Layers, Clock, ArrowRight, Sparkles,
} from 'lucide-react';
import { SectionEyebrow, SectionTitle, TechChip, GOLD, CYAN, PANEL_A, PANEL_B } from './VfsShared';

/* ============= 1. TASK ============= */
export function TaskSection() {
  const bullets = [
    'Обход защиты Cloudflare (галочка «Я не робот»)',
    'Автоматический ввод логина и пароля',
    'Работа с cookies для сохранения сессии',
    'Поддержка прокси для смены геолокации',
    'Возможность работы в headless-режиме',
    'Автоматический клик кнопки «Согласие»',
  ];
  return (
    <section id="task" className="w-full max-w-6xl mx-auto px-6 py-24">
      <SectionEyebrow>01 · Задача</SectionEyebrow>
      <SectionTitle>Проблема клиента</SectionTitle>

      <p className="mt-8 text-lg text-slate-400 max-w-3xl leading-relaxed">
        Клиент из Беларуси хотел автоматизировать процесс записи на визу в Польшу через{' '}
        <a
          href="https://visa.vfsglobal.com/blr/ru/pol/login"
          target="_blank"
          rel="noreferrer"
          className="font-mono text-sm px-1.5 py-0.5 rounded transition-colors"
          style={{
            background: 'rgba(127,219,255,0.06)',
            border: '1px solid rgba(127,219,255,0.2)',
            color: CYAN,
          }}
        >
          visa.vfsglobal.com/blr/ru/pol/login
        </a>{' '}
        для вывоза семьи, находясь в другой стране.
      </p>

      <div className="mt-12 grid md:grid-cols-2 gap-4">
        {/* Ключевые требования */}
        <div className="rounded-3xl p-8 border relative overflow-hidden"
          style={{
            background: `linear-gradient(180deg, ${PANEL_A}, ${PANEL_B})`,
            borderColor: 'rgba(255,255,255,0.06)',
          }}>
          <div className="absolute inset-x-8 top-0 h-px pointer-events-none"
            style={{ background: `linear-gradient(90deg, transparent, ${CYAN}55, transparent)`, opacity: 0.5 }} />
          <div className="flex items-center gap-3 mb-6">
            <div className="w-9 h-9 rounded-xl grid place-items-center border"
              style={{ background: 'rgba(127,219,255,0.1)', borderColor: 'rgba(127,219,255,0.2)' }}>
              <Zap className="h-4 w-4" style={{ color: CYAN }} />
            </div>
            <div className="font-manrope text-lg font-medium text-white tracking-tight">Ключевые требования</div>
          </div>
          <ul className="space-y-3">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-3 text-slate-300 text-sm leading-relaxed">
                <div className="mt-1.5 h-1 w-1 rounded-full shrink-0" style={{ background: CYAN, boxShadow: `0 0 4px ${CYAN}` }} />
                {b}
              </li>
            ))}
          </ul>
        </div>

        {/* Важно alert */}
        <div className="rounded-3xl p-8 border relative overflow-hidden"
          style={{
            background: `linear-gradient(180deg, rgba(214,191,163,0.06), transparent)`,
            borderColor: 'rgba(214,191,163,0.2)',
          }}>
          <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full blur-3xl pointer-events-none"
            style={{ background: 'rgba(214,191,163,0.15)' }} />
          <div className="relative">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-xl grid place-items-center border"
                style={{ background: 'rgba(214,191,163,0.1)', borderColor: 'rgba(214,191,163,0.3)' }}>
                <AlertTriangle className="h-4 w-4" style={{ color: GOLD }} />
              </div>
              <div className="font-manrope text-lg font-medium tracking-tight" style={{ color: GOLD }}>Важно</div>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              Это <span className="font-semibold text-white">НЕ взлом</span>, а автоматизация действий обычного пользователя.
              Все данные предоставлены клиентом для его личного использования.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <TechChip tone="gold">Ethical Automation</TechChip>
              <TechChip>User-provided credentials</TechChip>
              <TechChip>Personal use only</TechChip>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============= 2. SOLUTION ============= */
export function SolutionSection() {
  const stack = [
    { icon: '🐍', title: 'Python 3.8+', sub: 'Основной язык разработки' },
    { icon: '🌐', title: 'Selenium + Undetected ChromeDriver', sub: 'Эмуляция браузера без детекции' },
    { icon: '🍪', title: 'Cookie Management', sub: 'Сохранение и загрузка сессий' },
    { icon: '🔒', title: 'Proxy Support', sub: 'HTTP / SOCKS5 прокси' },
  ];
  const features = [
    { title: 'Обход Cloudflare Turnstile', body: 'Использование undetected-chromedriver для имитации реального пользователя', icon: ShieldCheck },
    { title: 'Умная работа с формами', body: 'Автоматическое ожидание загрузки элементов, заполнение полей с человеческими задержками', icon: Workflow },
    { title: 'Менеджмент сессий', body: 'Сохранение cookies после успешной авторизации для повторного использования', icon: Cookie },
    { title: 'Гибкая конфигурация', body: 'Настройка через .env: логин, пароль, прокси, headless-режим, таймауты', icon: KeyRound },
    { title: 'Детальное логирование', body: 'Пошаговые логи с временными метками и скриншоты на ключевых этапах', icon: FileText },
  ];

  return (
    <section id="solution" className="w-full max-w-6xl mx-auto px-6 py-24 relative">
      <SectionEyebrow tone="cyan">02 · Решение</SectionEyebrow>
      <SectionTitle accent="и возможности">Технологический стек</SectionTitle>

      {/* Stack grid */}
      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3">
        {stack.map((s) => (
          <div key={s.title} className="rounded-2xl p-5 border transition-colors hover:border-white/15"
            style={{
              background: `linear-gradient(180deg, ${PANEL_A}, ${PANEL_B})`,
              borderColor: 'rgba(255,255,255,0.06)',
            }}>
            <div className="text-3xl mb-3">{s.icon}</div>
            <div className="text-white text-sm font-semibold font-manrope tracking-tight">{s.title}</div>
            <div className="text-slate-500 text-xs mt-1">{s.sub}</div>
          </div>
        ))}
      </div>

      {/* Features */}
      <div className="mt-16">
        <div className="mb-8 flex items-end justify-between flex-wrap gap-4">
          <div>
            <SectionEyebrow>Capabilities</SectionEyebrow>
            <h3 className="font-manrope font-light text-3xl md:text-4xl text-white tracking-tight">Ключевые возможности</h3>
          </div>
          <div className="text-[11px] font-mono uppercase tracking-widest" style={{ color: 'rgba(127,219,255,0.6)' }}>
            5 modules · production ready
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div key={f.title}
                className="rounded-2xl p-6 border relative overflow-hidden group hover:border-white/15 transition-colors"
                style={{
                  background: `linear-gradient(180deg, ${PANEL_A}, ${PANEL_B})`,
                  borderColor: 'rgba(255,255,255,0.06)',
                }}>
                <div className="absolute -top-16 -right-16 h-32 w-32 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                  style={{ background: i % 2 === 0 ? 'rgba(127,219,255,0.15)' : 'rgba(214,191,163,0.15)' }} />
                <div className="relative">
                  <div className="w-10 h-10 rounded-xl grid place-items-center border mb-4"
                    style={{
                      background: i % 2 === 0 ? 'rgba(127,219,255,0.08)' : 'rgba(214,191,163,0.08)',
                      borderColor: i % 2 === 0 ? 'rgba(127,219,255,0.2)' : 'rgba(214,191,163,0.2)',
                    }}>
                    <Icon className="h-4 w-4" style={{ color: i % 2 === 0 ? CYAN : GOLD }} />
                  </div>
                  <div className="font-manrope text-lg font-medium text-white tracking-tight">{f.title}</div>
                  <p className="mt-2 text-sm text-slate-400 leading-relaxed">{f.body}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ============= 3. ARCHITECTURE ============= */
export function ArchitectureSection() {
  const steps = [
    { n: '01', title: 'Инициализация браузера', body: 'undetected_chromedriver с пользовательским профилем. Настройка прокси (опционально).' },
    { n: '02', title: 'Загрузка cookies', body: 'Восстановление предыдущей сессии из cookies.pkl (если существует).' },
    { n: '03', title: 'Переход на страницу логина', body: 'Ожидание прохождения Cloudflare Turnstile.' },
    { n: '04', title: 'Заполнение формы', body: 'Email + Пароль с задержками между вводом символов.' },
    { n: '05', title: 'Сохранение cookies', body: 'Дамп текущей сессии в .pkl для последующих запусков.' },
    { n: '06', title: 'Переход к бронированию', body: 'Автоматический клик кнопки «Согласие» и переход к календарю слотов.' },
  ];

  return (
    <section id="architecture" className="w-full max-w-6xl mx-auto px-6 py-24">
      <SectionEyebrow>03 · Архитектура</SectionEyebrow>
      <SectionTitle accent="pipeline">Как это работает</SectionTitle>

      <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-3">
        {steps.map((s, i) => (
          <div key={s.n}
            className="rounded-2xl p-6 border relative group hover:border-white/15 transition-colors"
            style={{
              background: `linear-gradient(180deg, ${PANEL_A}, ${PANEL_B})`,
              borderColor: 'rgba(255,255,255,0.06)',
            }}>
            <div className="flex items-start justify-between">
              <div className="font-manrope font-light text-5xl tracking-tighter opacity-40 group-hover:opacity-100 transition-opacity"
                style={{ color: i % 2 === 0 ? CYAN : GOLD }}>
                {s.n}
              </div>
              <ChevronsRight className="h-4 w-4 text-slate-600" />
            </div>
            <div className="mt-5 font-manrope text-lg font-medium text-white tracking-tight">{s.title}</div>
            <p className="mt-2 text-sm text-slate-400 leading-relaxed">{s.body}</p>
            <div className="mt-6 h-px w-full"
              style={{ background: `linear-gradient(90deg, ${i % 2 === 0 ? CYAN : GOLD}60, transparent)` }} />
          </div>
        ))}
      </div>
    </section>
  );
}

/* ============= 4. RESULTS ============= */
export function ResultsSection() {
  const metrics = [
    { v: '100%', label: 'Успешный обход Cloudflare', color: CYAN },
    { v: '~30 сек', label: 'Время до формы логина', color: GOLD },
    { v: '3', label: 'Версии бота (Selenium / Playwright / Demo)', color: CYAN },
  ];
  const deliverables = [
    'Полностью рабочий бот с обходом Cloudflare',
    'Три версии кода: Selenium, Playwright и демо-версия',
    'Подробная документация по настройке и использованию',
    'Инструкции по работе с прокси и headless-режимом',
    'Система логирования и скриншотов для отладки',
  ];

  return (
    <section id="results" className="w-full max-w-6xl mx-auto px-6 py-24 relative">
      <SectionEyebrow tone="cyan">04 · Результаты</SectionEyebrow>
      <SectionTitle accent="в цифрах">Что было доставлено</SectionTitle>

      {/* Metrics */}
      <div className="mt-12 grid md:grid-cols-3 gap-3">
        {metrics.map((m) => (
          <div key={m.label}
            className="rounded-2xl p-7 border relative overflow-hidden"
            style={{
              background: `linear-gradient(180deg, ${PANEL_A}, ${PANEL_B})`,
              borderColor: 'rgba(255,255,255,0.06)',
            }}>
            <div className="absolute -top-14 -right-14 h-32 w-32 rounded-full blur-3xl pointer-events-none opacity-30"
              style={{ background: m.color }} />
            <div className="relative">
              <div className="font-manrope font-light text-6xl tracking-tighter" style={{ color: m.color }}>{m.v}</div>
              <div className="mt-3 text-sm text-slate-400">{m.label}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Deliverables */}
      <div className="mt-8 rounded-3xl p-8 border relative overflow-hidden"
        style={{
          background: `linear-gradient(180deg, ${PANEL_A}, ${PANEL_B})`,
          borderColor: 'rgba(255,255,255,0.06)',
        }}>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-9 h-9 rounded-xl grid place-items-center border"
            style={{ background: 'rgba(214,191,163,0.08)', borderColor: 'rgba(214,191,163,0.2)' }}>
            <Boxes className="h-4 w-4" style={{ color: GOLD }} />
          </div>
          <div className="font-manrope text-lg font-medium text-white tracking-tight">Что получил клиент</div>
        </div>
        <ul className="grid md:grid-cols-2 gap-x-8 gap-y-3">
          {deliverables.map((d) => (
            <li key={d} className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed">
              <div className="w-5 h-5 rounded-full grid place-items-center shrink-0 mt-0.5 border"
                style={{ background: 'rgba(127,219,255,0.1)', borderColor: 'rgba(127,219,255,0.25)' }}>
                <Check className="h-3 w-3" style={{ color: CYAN }} />
              </div>
              {d}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ============= 5. DEMO ============= */
export function DemoSection() {
  return (
    <section id="demo" className="w-full max-w-6xl mx-auto px-6 py-24">
      <SectionEyebrow>05 · Демонстрация работы</SectionEyebrow>
      <SectionTitle accent="в действии">Форма логина VFS Global</SectionTitle>

      <p className="mt-6 text-slate-400 max-w-2xl leading-relaxed">
        Бот успешно доходит до формы авторизации и заполняет все поля. Ниже — снимок реальной страницы,
        как её видит клиент после отработки скрипта.
      </p>

      <div className="mt-12 grid lg:grid-cols-5 gap-4">
        {/* Fake browser preview */}
        <div className="lg:col-span-3 rounded-3xl border overflow-hidden"
          style={{
            background: `linear-gradient(180deg, ${PANEL_A}, ${PANEL_B})`,
            borderColor: 'rgba(255,255,255,0.08)',
          }}>
          {/* Browser chrome */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-500/50" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-500/50" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/50" />
            </div>
            <div className="ml-3 flex-1 h-6 rounded-md flex items-center px-3 text-[10.5px] font-mono text-slate-400 border border-white/5"
              style={{ background: 'rgba(255,255,255,0.03)' }}>
              🔒 https://visa.vfsglobal.com/blr/ru/pol/login
            </div>
          </div>
          {/* Fake login form */}
          <div className="p-8 sm:p-12" style={{ background: 'radial-gradient(ellipse at top, rgba(127,219,255,0.06), transparent 60%)' }}>
            <div className="max-w-md mx-auto">
              <div className="text-center">
                <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[10px] font-mono uppercase tracking-widest border"
                  style={{ background: 'rgba(127,219,255,0.08)', borderColor: 'rgba(127,219,255,0.2)', color: CYAN }}>
                  🎯 Cloudflare bypassed
                </div>
                <h4 className="mt-4 font-manrope text-xl font-medium text-white">VFS Global · Poland</h4>
                <div className="text-xs text-slate-500 mt-1">Sign in to your account</div>
              </div>

              <div className="mt-8 space-y-4">
                <div>
                  <div className="text-[11px] uppercase tracking-widest text-slate-500 mb-1.5">Электронная почта*</div>
                  <div className="rounded-lg px-3 py-2.5 text-sm font-mono border"
                    style={{ background: 'rgba(255,255,255,0.03)', borderColor: 'rgba(214,191,163,0.2)', color: '#e2e8f0' }}>
                    test@mail.ru<span className="ml-0.5 inline-block w-0.5 h-3.5 align-middle animate-pulse" style={{ background: GOLD }} />
                  </div>
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-widest text-slate-500 mb-1.5">Пароль*</div>
                  <div className="rounded-lg px-3 py-2.5 text-sm font-mono border"
                    style={{ background: 'rgba(255,255,255,0.03)', borderColor: 'rgba(214,191,163,0.2)', color: '#e2e8f0' }}>
                    ••••••••••••
                  </div>
                </div>

                <button className="w-full py-2.5 rounded-lg text-sm font-medium tracking-wide transition-colors"
                  style={{
                    background: `linear-gradient(180deg, ${GOLD}, ${GOLD}bb)`,
                    color: '#0a0a0a',
                  }}>
                  Войти
                </button>

                <div className="flex items-center gap-2 rounded-lg px-3 py-2 text-xs border"
                  style={{
                    background: 'rgba(214,191,163,0.05)',
                    borderColor: 'rgba(214,191,163,0.15)',
                    color: '#cbd5e1',
                  }}>
                  <Check className="h-3.5 w-3.5 shrink-0" style={{ color: '#4ade80' }} />
                  Электронная почта не зарегистрирована <span className="text-slate-500">(демо-данные)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Explanation */}
        <div className="lg:col-span-2 rounded-3xl border p-8 relative overflow-hidden"
          style={{
            background: `linear-gradient(180deg, ${PANEL_A}, ${PANEL_B})`,
            borderColor: 'rgba(255,255,255,0.06)',
          }}>
          <div className="absolute -bottom-16 -right-16 h-40 w-40 rounded-full blur-3xl pointer-events-none opacity-30"
            style={{ background: CYAN }} />
          <div className="relative">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-xl grid place-items-center border"
                style={{ background: 'rgba(127,219,255,0.08)', borderColor: 'rgba(127,219,255,0.2)' }}>
                <ShieldCheck className="h-4 w-4" style={{ color: CYAN }} />
              </div>
              <div className="font-manrope text-lg font-medium text-white tracking-tight">Преодоление Cloudflare</div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Бот использует <span className="text-white font-medium">undetected-chromedriver</span> для имитации поведения реального пользователя:
            </p>
            <ul className="mt-5 space-y-3">
              {[
                'Задержки между действиями',
                'Естественные движения мыши',
                'Реалистичная скорость ввода текста',
                'Использование реального Chrome-профиля',
              ].map((s) => (
                <li key={s} className="flex items-start gap-3 text-sm text-slate-300">
                  <div className="mt-1.5 h-1 w-1 rounded-full shrink-0" style={{ background: CYAN, boxShadow: `0 0 4px ${CYAN}` }} />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============= 6. TECH DETAILS (code) ============= */
export function TechDetailsSection() {
  return (
    <section id="tech" className="w-full max-w-6xl mx-auto px-6 py-24">
      <SectionEyebrow tone="cyan">06 · Технические детали</SectionEyebrow>
      <SectionTitle accent="под капотом">Структура и конфигурация</SectionTitle>

      <div className="mt-12 grid lg:grid-cols-2 gap-4">
        {/* File tree */}
        <CodePanel title="visa-bot-demo/" icon={Folder}>
          <TreeNode name="vfs_bot_selenium.py" comment="# Основная версия (Selenium)" />
          <TreeNode name="vfs_bot.py" comment="# Альтернативная (Playwright)" />
          <TreeNode name="demo_test.py" comment="# Упрощённая демо-версия" />
          <TreeNode name=".env" comment="# Конфигурация" />
          <TreeNode name="requirements.txt" comment="# Зависимости" />
          <TreeNode name="cookies.pkl" comment="# Сохранённые cookies" />
          <TreeNode name="screenshots/" comment="# Скриншоты для отладки" folder />
          <TreeNode name="docs/" comment="" folder />
          <TreeNode name="├── DEMO_REPORT.md" comment="# Отчёт о тестировании" indent />
          <TreeNode name="├── DEMO_CONCEPT.md" comment="# Концепция решения" indent />
          <TreeNode name="└── README_FOR_CLIENT.md" comment="# Инструкция для клиента" indent last />
        </CodePanel>

        {/* .env config */}
        <CodePanel title=".env" icon={KeyRound} tone="cyan">
          <EnvLine comment="# Учётные данные VFS" />
          <EnvLine k="VFS_EMAIL" v="test@mail.ru" />
          <EnvLine k="VFS_PASSWORD" v="test@mail.ru" />
          <EnvLine blank />
          <EnvLine comment="# Настройки браузера" />
          <EnvLine k="HEADLESS" v="false" trail="# true для скрытого режима" />
          <EnvLine k="TIMEOUT" v="30" trail="# Таймауты в секундах" />
          <EnvLine blank />
          <EnvLine comment="# Прокси (опционально)" />
          <EnvLine commentEcho="# PROXY=http://user:pass@host:port" />
          <EnvLine commentEcho="# PROXY=socks5://user:pass@host:port" />
        </CodePanel>
      </div>

      {/* Dependencies */}
      <div className="mt-4">
        <CodePanel title="requirements.txt" icon={FileText}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 font-mono text-xs">
            {['selenium>=4.15.0', 'undetected-chromedriver>=3.5.4', 'python-dotenv>=1.0.0', 'Pillow>=10.1.0'].map((dep) => (
              <div key={dep} className="rounded-lg px-3 py-2 border" style={{ background: 'rgba(255,255,255,0.02)', borderColor: 'rgba(255,255,255,0.06)', color: '#cbd5e1' }}>
                {dep}
              </div>
            ))}
          </div>
        </CodePanel>
      </div>
    </section>
  );
}

function CodePanel({ title, icon: Icon, children, tone = 'gold' }) {
  const c = tone === 'cyan' ? CYAN : GOLD;
  return (
    <div className="rounded-3xl border overflow-hidden"
      style={{
        background: `linear-gradient(180deg, ${PANEL_A}, ${PANEL_B})`,
        borderColor: 'rgba(255,255,255,0.06)',
      }}>
      <div className="px-5 py-3 border-b border-white/5 flex items-center justify-between backdrop-blur-md"
        style={{ background: 'rgba(255,255,255,0.02)' }}>
        <div className="flex items-center gap-2.5">
          <Icon className="h-3.5 w-3.5" style={{ color: c }} />
          <span className="font-mono text-xs text-slate-300">{title}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full animate-pulse" style={{ background: c }} />
          <span className="text-[10px] font-mono uppercase tracking-widest" style={{ color: c, opacity: 0.7 }}>live</span>
        </div>
      </div>
      <div className="p-5 font-mono text-[12.5px] leading-relaxed">
        {children}
      </div>
    </div>
  );
}

function TreeNode({ name, comment, folder = false, indent = false, last = false }) {
  return (
    <div className="flex items-start gap-2">
      <span className="text-slate-600">{indent ? '   ' : ''}</span>
      <span className={`shrink-0 ${folder ? 'text-amber-300' : 'text-slate-300'}`}>{name}</span>
      {comment && <span className="text-slate-600 ml-auto">{comment}</span>}
    </div>
  );
}

function EnvLine({ k, v, comment, commentEcho, trail, blank }) {
  if (blank) return <div className="h-3" />;
  if (comment) return <div className="text-slate-600">{comment}</div>;
  if (commentEcho) return <div className="text-slate-600">{commentEcho}</div>;
  return (
    <div className="flex items-center gap-2">
      <span style={{ color: CYAN }}>{k}</span>
      <span className="text-slate-600">=</span>
      <span className="text-slate-200">{v}</span>
      {trail && <span className="text-slate-600 ml-2">{trail}</span>}
    </div>
  );
}

/* ============= 7. CTA ============= */
export function CtaSection() {
  return (
    <section id="cta" className="w-full max-w-5xl mx-auto px-6 py-24">
      <div className="relative rounded-[2rem] p-10 sm:p-16 border overflow-hidden text-center"
        style={{
          background: `linear-gradient(180deg, ${PANEL_A}, ${PANEL_B})`,
          borderColor: 'rgba(214,191,163,0.15)',
        }}>
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[400px] w-[700px] rounded-full blur-[100px] pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(214,191,163,0.15), transparent 60%)' }} />
        <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 h-[300px] w-[500px] rounded-full blur-[100px] pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(127,219,255,0.1), transparent 60%)' }} />

        <div className="relative">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 border"
            style={{ background: 'rgba(214,191,163,0.05)', borderColor: 'rgba(214,191,163,0.2)' }}>
            <Sparkles className="h-3 w-3" style={{ color: GOLD }} />
            <span className="text-[10px] uppercase tracking-[0.2em] font-semibold" style={{ color: GOLD }}>
              Ready to automate
            </span>
          </div>
          <h2 className="mt-6 font-manrope font-light text-4xl sm:text-6xl tracking-tight text-white leading-[1.02]">
            Нужна автоматизация?
          </h2>
          <p className="mt-6 max-w-xl mx-auto text-slate-400 leading-relaxed">
            Разработаем бота для любого веб-сайта с обходом защит: Cloudflare, reCAPTCHA, hCaptcha,
            фингерпринт-детекция. Legal &amp; ethical use only.
          </p>

          <div className="mt-10 flex items-center justify-center gap-3 flex-wrap">
            <a href="mailto:admin@aliterra.space"
              className="group inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-all"
              style={{
                background: GOLD,
                color: '#0a0a0a',
                boxShadow: '0 10px 30px -10px rgba(214,191,163,0.4)',
              }}>
              Обсудить проект
              <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <Link to="/"
              className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium border transition-colors"
              style={{
                background: 'rgba(255,255,255,0.03)',
                borderColor: 'rgba(255,255,255,0.1)',
                color: '#cbd5e1',
              }}>
              Смотреть другие кейсы
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============= 8. FOOTER ============= */
export function VfsFooter() {
  return (
    <footer className="w-full max-w-6xl mx-auto px-6 pt-8 pb-12 border-t"
      style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
            <path d="M16 2L29 9.5V22.5L16 30L3 22.5V9.5L16 2Z" fill={PANEL_A} stroke={CYAN} strokeWidth="1.5" strokeOpacity="0.3" />
            <path d="M25 7H13L7 16H25L19 25H7" stroke={GOLD} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="text-xs text-slate-500 font-mono uppercase tracking-widest">
            © 2026 UniDev · Web3, Blockchain &amp; Corporate Solutions
          </span>
        </div>
        <div className="flex items-center gap-4 text-[11px] font-mono uppercase tracking-widest" style={{ color: '#64748b' }}>
          <span>Protocol v2.4.0</span>
          <span>·</span>
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full animate-pulse" style={{ background: '#4ade80' }} />
            Encrypted Tunnel
          </span>
        </div>
      </div>
    </footer>
  );
}
