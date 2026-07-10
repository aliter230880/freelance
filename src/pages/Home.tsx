import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Hero */}
      <section className="relative px-6 py-24 lg:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.1),transparent_50%)]" />
        
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-300">
            <span className="inline-flex h-2 w-2 rounded-full bg-violet-400 animate-pulse" />
            Разработка под ключ
          </div>
          
          <h1 className="mb-6 text-5xl font-bold tracking-tight text-white lg:text-7xl">
            <span className="bg-gradient-to-r from-violet-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
              UniDev
            </span>
          </h1>
          
          <p className="mb-8 text-xl text-slate-300 lg:text-2xl">
            Web3 & Blockchain • Интеграции • Корпоративные решения
          </p>
          
          <p className="mx-auto max-w-2xl text-base text-slate-400">
            Профессиональная разработка блокчейн-приложений на Polygon и Ethereum, 
            интеграции с бизнес-системами, Unity SDK для игр и автоматизация процессов.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-white">Экспертиза</h2>
          
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: '⛓️',
                title: 'Blockchain & Web3',
                items: ['Смарт-контракты (Solidity)', 'Polygon, Ethereum', 'ERC-20, ERC-721, ERC-1155', 'dApps, NFT, DeFi']
              },
              {
                icon: '🔧',
                title: 'Backend & Интеграции',
                items: ['Node.js, Python, FastAPI', 'PostgreSQL, Redis', 'REST/GraphQL API', 'Zoho Books, CRM']
              },
              {
                icon: '🎮',
                title: 'Frontend & Unity',
                items: ['React, TypeScript, Vite', 'Tailwind CSS', 'Unity SDK, C#', 'Mobile PWA']
              }
            ].map((skill, i) => (
              <div
                key={i}
                className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-2xl transition-all duration-300 hover:scale-[1.02] hover:border-violet-500/50 hover:shadow-violet-500/20 active:scale-[0.98]"
              >
                <div className="mb-4 text-4xl">{skill.icon}</div>
                <h3 className="mb-3 text-lg font-semibold text-white">{skill.title}</h3>
                <ul className="space-y-1 text-sm text-slate-400">
                  {skill.items.map((item, j) => (
                    <li key={j}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-white">Проекты</h2>
          
          <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
            {/* Blockchain ID Project */}
            <Link
              to="/projects/blockchain-id"
              className="group block rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900/80 to-slate-900/40 p-8 shadow-2xl transition-all duration-300 hover:scale-[1.02] hover:border-violet-500/50 hover:shadow-violet-500/20 active:scale-[0.98]"
            >
              <div className="mb-4 flex items-start justify-between">
                <div className="rounded-xl bg-violet-500/10 p-3">
                  <span className="text-3xl">🪪</span>
                </div>
                <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
                  Архитектура
                </span>
              </div>
              
              <h3 className="mb-3 text-2xl font-bold text-white">
                ID + Кошелёк + Ачивки на Polygon
              </h3>
              
              <p className="mb-4 text-sm text-slate-400">
                Полная архитектура децентрализованной системы идентификации, токенов расчётов и заслуг. 
                Смарт-контракты ERC-721/ERC-20/ERC-1155, интеграция с IPFS, KYC/AML.
              </p>
              
              <div className="flex flex-wrap gap-2">
                {['Polygon', 'Solidity', 'React', 'Node.js'].map(tag => (
                  <span key={tag} className="rounded-lg bg-slate-800/60 px-2 py-1 text-xs text-slate-300">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="mt-6 flex items-center text-violet-400 transition-transform group-hover:translate-x-2">
                <span className="text-sm font-medium">Смотреть детали</span>
                <span className="ml-2">→</span>
              </div>
            </Link>

            {/* Zoho Books Project */}
            <Link
              to="/projects/zoho-books"
              className="group block rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900/80 to-slate-900/40 p-8 shadow-2xl transition-all duration-300 hover:scale-[1.02] hover:border-blue-500/50 hover:shadow-blue-500/20 active:scale-[0.98]"
            >
              <div className="mb-4 flex items-start justify-between">
                <div className="rounded-xl bg-blue-500/10 p-3">
                  <span className="text-3xl">📊</span>
                </div>
                <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-300">
                  Готово
                </span>
              </div>
              
              <h3 className="mb-3 text-2xl font-bold text-white">
                Настройка плана счетов Zoho Books
              </h3>
              
              <p className="mb-4 text-sm text-slate-400">
                Аудит и настройка планов счетов для управленческого и бухгалтерского учёта. 
                Разбивка по ЦФУ B2B и Ecom, интеграция с внебанковскими платежами.
              </p>
              
              <div className="flex flex-wrap gap-2">
                {['Zoho Books', 'Учёт', 'Финансы', 'Отчёты'].map(tag => (
                  <span key={tag} className="rounded-lg bg-slate-800/60 px-2 py-1 text-xs text-slate-300">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="mt-6 flex items-center text-blue-400 transition-transform group-hover:translate-x-2">
                <span className="text-sm font-medium">Смотреть детали</span>
                <span className="ml-2">→</span>
              </div>
            </Link>

            {/* VFS Visa Bot Project */}
            <Link
              to="/projects/vfs-visa-bot"
              className="group block rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900/80 to-slate-900/40 p-8 shadow-2xl transition-all duration-300 hover:scale-[1.02] hover:border-amber-500/50 hover:shadow-amber-500/20 active:scale-[0.98]"
            >
              <div className="mb-4 flex items-start justify-between">
                <div className="rounded-xl bg-amber-500/10 p-3">
                  <span className="text-3xl">🤖</span>
                </div>
                <span className="rounded-full bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-300">
                  Автоматизация
                </span>
              </div>
              
              <h3 className="mb-3 text-2xl font-bold text-white">
                VFS Visa Bot
              </h3>
              
              <p className="mb-4 text-sm text-slate-400">
                Бот для автоматизации записи на визу через VFS Global. 
                Обход защиты Cloudflare, работа с cookies, поддержка прокси и headless-режим.
              </p>
              
              <div className="flex flex-wrap gap-2">
                {['Python', 'Selenium', 'Cloudflare', 'Automation'].map(tag => (
                  <span key={tag} className="rounded-lg bg-slate-800/60 px-2 py-1 text-xs text-slate-300">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="mt-6 flex items-center text-amber-400 transition-transform group-hover:translate-x-2">
                <span className="text-sm font-medium">Смотреть детали</span>
                <span className="ml-2">→</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-white">Готовы начать проект?</h2>
          <p className="mb-8 text-slate-400">
            Обсудим задачу, предложим решение, реализуем под ключ
          </p>
          <a
            href="mailto:hello@unidev.space"
            className="inline-block rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-8 py-4 font-semibold text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-violet-500/50 active:scale-95"
          >
            Написать на hello@unidev.space
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 px-6 py-8 text-center text-sm text-slate-500">
        <p>© 2026 UniDev • Web3, Blockchain & Corporate Solutions</p>
      </footer>
    </div>
  )
}
