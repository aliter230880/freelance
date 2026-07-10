import { Link } from 'react-router-dom'

export default function BlockchainIdProject() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-4 pb-16 pt-8 sm:px-6 lg:px-8 lg:pt-12">
        {/* Back button */}
        <Link
          to="/"
          className="inline-flex w-fit items-center gap-2 text-sm text-slate-400 transition-colors hover:text-violet-300"
        >
          <span>←</span>
          <span>Назад к портфолио</span>
        </Link>

        {/* Hero */}
        <header className="flex flex-col gap-6 border-b border-slate-800 pb-10">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-300">
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-violet-400" />
              <span>Архитектура: ID + Кошелёк + Ачивки на Polygon</span>
            </div>
            <div className="space-y-3">
              <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                Система идентификации, токенов и заслуг
                <span className="block bg-gradient-to-r from-violet-300 to-fuchsia-300 bg-clip-text text-transparent">
                  на блокчейне Polygon
                </span>
              </h1>
              <p className="max-w-3xl text-sm text-slate-300 sm:text-base">
                Полная архитектура децентрализованной системы: неизменяемые цифровые паспорта (ID),
                кошельки для расчётов и токены заслуг (ачивки) как зарплата/взаимозачёты. 
                Смарт-контракты на Polygon, данные в IPFS, индексация в PostgreSQL.
              </p>
            </div>
            
            {/* Demo Button */}
            <div className="pt-4">
              <a
                href="/demo/blockchain-id/index.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-600 px-8 py-4 font-semibold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-violet-500/50 active:scale-95"
              >
                <span className="text-2xl">🎮</span>
                <span>Посмотреть интерактивную демонстрацию</span>
                <svg className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <p className="mt-2 text-xs text-slate-400">
                ✨ Попробуйте систему прямо в браузере: создайте личность, получите токены, протестируйте ZK-Proofs и стейкинг
              </p>
            </div>
          </div>
        </header>

        {/* Архитектура: Слои системы */}
        <section className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
              🏗️ Архитектура: 4 слоя системы
            </h2>
            <p className="max-w-4xl text-sm text-slate-300 sm:text-base">
              Система построена на принципе разделения ответственности: блокчейн хранит критичные данные 
              (ID, владение, транзакции), off-chain инфраструктура обрабатывает бизнес-логику и хранит 
              изменяемые данные, фронтенд предоставляет интерфейс пользователю.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-4">
            {[
              {
                num: 1,
                title: 'Polygon Blockchain',
                desc: 'Смарт-контракты (Solidity): ID NFT, Payment Token, Achievement Tokens. Неизменяемое хранилище транзакций и владения активами.',
                items: ['ERC-721 (Identity)', 'ERC-20 (Currency)', 'ERC-1155 (Achievements)'],
                color: 'violet'
              },
              {
                num: 2,
                title: 'Backend API',
                desc: 'Node.js + ethers.js: индексация событий блокчейна, бизнес-логика начисления ачивок, интеграции с внешними системами (KYC, HR).',
                items: ['REST / GraphQL API', 'Event Indexer', 'Achievement Engine'],
                color: 'blue'
              },
              {
                num: 3,
                title: 'Storage Layer',
                desc: 'PostgreSQL для индексации и аналитики, IPFS для документов ID (паспорта, фото), Redis для кеширования балансов.',
                items: ['PostgreSQL', 'IPFS / S3', 'Redis Cache'],
                color: 'amber'
              },
              {
                num: 4,
                title: 'Frontend',
                desc: 'React PWA: личный кабинет, кошелёк, просмотр ачивок, отправка токенов. Подключение через MetaMask или WalletConnect.',
                items: ['React + Vite', 'wagmi / ethers.js', 'MetaMask / WC'],
                color: 'emerald'
              }
            ].map(layer => (
              <div
                key={layer.num}
                className={`group space-y-2 rounded-2xl border border-${layer.color}-500/30 bg-${layer.color}-500/10 p-6 shadow-xl transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl active:scale-[0.98]`}
              >
                <div className="flex items-center gap-2">
                  <div className={`flex h-8 w-8 items-center justify-center rounded-lg bg-${layer.color}-500/20 text-sm font-bold text-${layer.color}-300`}>
                    {layer.num}
                  </div>
                  <h3 className={`text-sm font-semibold text-${layer.color}-200`}>{layer.title}</h3>
                </div>
                <p className="text-xs text-slate-300">{layer.desc}</p>
                <div className="pt-2 text-xs text-slate-400">
                  {layer.items.map((item, i) => (
                    <p key={i} className="font-mono">→ {item}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Три основных модуля */}
        <section className="space-y-6">
          <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
            🧩 Три основных модуля
          </h2>

          <div className="grid gap-6 lg:grid-cols-3">
            {[
              {
                emoji: '🪪',
                title: 'Цифровой паспорт (ID)',
                subtitle: 'ERC-721 Soulbound NFT',
                desc: 'Неотчуждаемый токен личности. Базовые анкетные данные, привязка к кошельку и хэши документов. Изменяемые данные — off-chain, критичные атрибуты и хэши — on-chain.',
                features: ['Один адрес = один ID', 'Нельзя передать другому', 'IPFS для документов', 'KYC-провайдер']
              },
              {
                emoji: '💰',
                title: 'Кошелёк',
                subtitle: 'ERC-20 Payment Token',
                desc: 'Управление балансом токенов, история транзакций и переводы между участниками. Можно использовать как внешний кошелёк (MetaMask) или кастодиальный.',
                features: ['Перевод между участниками', 'Начисление зарплаты', 'Требование наличия ID', 'Интеграция с MetaMask']
              },
              {
                emoji: '🏆',
                title: 'Токены заслуг (Ачивки)',
                subtitle: 'ERC-1155 Multi-token',
                desc: 'Токены, которые отражают заслуги, KPI или объём выполненных работ. Могут быть переводимыми (fungible) или непередаваемыми (soulbound).',
                features: ['4 типа ачивок', 'Автоначисление', 'Обмен на Payment Token', 'Leaderboard']
              }
            ].map((module, i) => (
              <div
                key={i}
                className="group space-y-3 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-xl transition-all duration-300 hover:scale-[1.02] hover:border-violet-500/50 hover:shadow-2xl active:scale-[0.98]"
              >
                <div className="text-4xl">{module.emoji}</div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-50">{module.title}</h3>
                  <p className="text-xs text-slate-400">{module.subtitle}</p>
                </div>
                <p className="text-sm text-slate-300">{module.desc}</p>
                <ul className="space-y-1 text-xs text-slate-400">
                  {module.features.map((feat, j) => (
                    <li key={j}>• {feat}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Технологический стек */}
        <section className="space-y-6">
          <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
            🛠️ Технологический стек
          </h2>

          <div className="grid gap-4 lg:grid-cols-5">
            {[
              { title: 'Блокчейн', items: ['Polygon PoS', 'Solidity', 'Hardhat', 'OpenZeppelin', 'Infura RPC'] },
              { title: 'Backend', items: ['Node.js 20', 'NestJS', 'ethers.js v6', 'Bull Queue', 'TypeScript'] },
              { title: 'Frontend', items: ['React 18', 'wagmi v2', 'TanStack Query', 'Tailwind CSS', 'Zustand'] },
              { title: 'Storage', items: ['PostgreSQL 16', 'Redis 7', 'IPFS', 'S3 backup', 'Prisma ORM'] },
              { title: 'Инфраструктура', items: ['Docker + K8s', 'GitHub Actions', 'Prometheus', 'Sentry', 'AWS/GCP'] }
            ].map((stack, i) => (
              <div
                key={i}
                className="group space-y-2 rounded-2xl border border-slate-800 bg-slate-900/60 p-4 shadow-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl active:scale-[0.98]"
              >
                <h3 className="text-sm font-semibold text-slate-50">{stack.title}</h3>
                <ul className="space-y-1 text-xs text-slate-400">
                  {stack.items.map((item, j) => (
                    <li key={j}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Roadmap */}
        <section className="space-y-6">
          <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
            🗓️ Roadmap: от MVP до Production
          </h2>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              { phase: 'Фаза 1', time: '2-4 нед', title: 'Аналитика и проектирование', color: 'violet' },
              { phase: 'Фаза 2', time: '4-6 нед', title: 'Разработка смарт-контрактов', color: 'blue' },
              { phase: 'Фаза 3', time: '4-8 нед', title: 'Backend и инфраструктура', color: 'cyan' },
              { phase: 'Фаза 4', time: '4-6 нед', title: 'Frontend и UX', color: 'emerald' },
              { phase: 'Фаза 5', time: '2-4 нед', title: 'Тестирование и аудит', color: 'amber' },
              { phase: 'Фаза 6', time: '1-2 нед', title: 'Production deployment', color: 'fuchsia' }
            ].map((item, i) => (
              <div
                key={i}
                className={`group rounded-2xl border border-${item.color}-500/30 bg-${item.color}-500/10 p-5 shadow-xl transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl active:scale-[0.98]`}
              >
                <div className="mb-2 flex items-center gap-2">
                  <span className={`rounded-full bg-${item.color}-500 px-2.5 py-0.5 text-xs font-bold text-white`}>
                    {item.phase}
                  </span>
                  <span className={`text-sm text-${item.color}-300`}>{item.time}</span>
                </div>
                <h3 className="text-base font-semibold text-slate-50">{item.title}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Итоговая оценка */}
        <section className="space-y-6">
          <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
            💰 Итоговая оценка
          </h2>

          <div className="grid gap-4 lg:grid-cols-2">
            <div className="group rounded-2xl border border-slate-800 bg-gradient-to-br from-violet-500/10 to-blue-500/10 p-6 shadow-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl active:scale-[0.98]">
              <h3 className="mb-4 text-lg font-semibold text-slate-50">MVP (Минимальный продукт)</h3>
              <div className="mb-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Срок разработки:</span>
                  <span className="font-semibold text-slate-50">2-3 месяца</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Рыночная стоимость:</span>
                  <span className="font-semibold text-emerald-300">$80,000 - $120,000</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Команда:</span>
                  <span className="font-semibold text-slate-50">3-4 человека</span>
                </div>
              </div>
            </div>

            <div className="group rounded-2xl border border-slate-800 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 p-6 shadow-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl active:scale-[0.98]">
              <h3 className="mb-4 text-lg font-semibold text-slate-50">Production (Полный продукт)</h3>
              <div className="mb-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Срок разработки:</span>
                  <span className="font-semibold text-slate-50">6-9 месяцев</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Рыночная стоимость:</span>
                  <span className="font-semibold text-emerald-300">$150,000 - $250,000+</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Команда:</span>
                  <span className="font-semibold text-slate-50">5-8 человек</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Back to portfolio */}
        <div className="pt-8 text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full bg-violet-600 px-6 py-3 font-semibold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:bg-violet-500 active:scale-95"
          >
            <span>←</span>
            <span>Вернуться к портфолио</span>
          </Link>
        </div>

        {/* Footer */}
        <footer className="border-t border-slate-800 pt-8 text-center text-xs text-slate-500">
          <p>Архитектура: ID + Кошелёк + Ачивки на Polygon • UniDev 2026</p>
        </footer>
      </div>
    </div>
  )
}
