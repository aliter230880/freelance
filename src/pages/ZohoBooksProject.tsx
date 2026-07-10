import { Link } from 'react-router-dom'

export default function ZohoBooksProject() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-4 pb-16 pt-8 sm:px-6 lg:px-8 lg:pt-12">
        {/* Back button */}
        <Link
          to="/"
          className="inline-flex w-fit items-center gap-2 text-sm text-slate-400 transition-colors hover:text-blue-300"
        >
          <span>←</span>
          <span>Назад к портфолио</span>
        </Link>

        {/* Hero */}
        <header className="flex flex-col gap-6 border-b border-slate-800 pb-10">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-300">
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-blue-400" />
              <span>Готово к внедрению</span>
            </div>
            <div className="space-y-3">
              <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                Настройка плана счетов в Zoho Books
                <span className="block bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                  для управленческого и бухгалтерского учёта
                </span>
              </h1>
              <p className="max-w-3xl text-sm text-slate-300 sm:text-base">
                Аудит и настройка планов счетов для мебельного бизнеса в ОАЭ. 
                Разбивка по центрам финансового учёта (ЦФУ) B2B и Ecom, 
                интеграция с внебанковскими платежами, полная документация.
              </p>
            </div>
          </div>
        </header>

        {/* Проблема и решение */}
        <section className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
              🎯 Задача клиента
            </h2>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            <div className="group space-y-3 rounded-2xl border border-red-500/30 bg-red-500/10 p-6 shadow-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl active:scale-[0.98]">
              <div className="text-3xl">❌</div>
              <h3 className="text-lg font-semibold text-slate-50">Проблема</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>• План счетов не разделён по направлениям бизнеса (B2B / Ecom)</li>
                <li>• Невозможно получить отчёты по каждому ЦФУ отдельно</li>
                <li>• Внебанковские платежи (криптовалюта, P2P) не учитываются</li>
                <li>• Нет чёткой структуры для управленческого учёта</li>
                <li>• Бухгалтер путается в счетах</li>
              </ul>
            </div>

            <div className="group space-y-3 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-6 shadow-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl active:scale-[0.98]">
              <div className="text-3xl">✅</div>
              <h3 className="text-lg font-semibold text-slate-50">Решение</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>• Полный аудит существующего плана счетов</li>
                <li>• Разбивка по ЦФУ: B2B (оптовые продажи) и Ecom (розница онлайн)</li>
                <li>• Настройка счетов для внебанковских платежей</li>
                <li>• Создание шаблонов отчётов для управленческого учёта</li>
                <li>• Полная документация + обучение команды</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Этапы проекта */}
        <section className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
              📋 Этапы реализации (6 шагов)
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                num: 0,
                title: 'Экспресс-аудит',
                time: '2-3 дня',
                desc: 'Точка Go/No-Go. Анализ текущего плана счетов, выявление критических проблем.',
                color: 'violet'
              },
              {
                num: 1,
                title: 'Детальный аудит',
                time: '3-5 дней',
                desc: 'Полный разбор всех счетов, транзакций, отчётов. Карта проблемных зон.',
                color: 'blue'
              },
              {
                num: 2,
                title: 'План структуры',
                time: '2-3 дня',
                desc: 'Проектирование нового плана счетов с разбивкой по ЦФУ B2B и Ecom.',
                color: 'cyan'
              },
              {
                num: 3,
                title: 'Настройка Zoho Books',
                time: '3-5 дней',
                desc: 'Создание счетов, настройка ЦФУ, шаблоны транзакций, правила автоматизации.',
                color: 'emerald'
              },
              {
                num: 4,
                title: 'Миграция данных',
                time: '2-3 дня',
                desc: 'Перенос исторических данных, сверка балансов, тестирование отчётов.',
                color: 'amber'
              },
              {
                num: 5,
                title: 'Документация + обучение',
                time: '2-3 дня',
                desc: 'Инструкции для бухгалтера, шпаргалки, видео-гайды, поддержка 30 дней.',
                color: 'fuchsia'
              }
            ].map((stage) => (
              <div
                key={stage.num}
                className={`group space-y-2 rounded-2xl border border-${stage.color}-500/30 bg-${stage.color}-500/10 p-5 shadow-xl transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl active:scale-[0.98]`}
              >
                <div className="flex items-center gap-2">
                  <div className={`flex h-8 w-8 items-center justify-center rounded-lg bg-${stage.color}-500/20 text-sm font-bold text-${stage.color}-300`}>
                    {stage.num}
                  </div>
                  <span className={`text-xs text-${stage.color}-300`}>{stage.time}</span>
                </div>
                <h3 className="text-base font-semibold text-slate-50">{stage.title}</h3>
                <p className="text-xs text-slate-300">{stage.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Что входит */}
        <section className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
              📦 Что входит в проект
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="group space-y-3 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-xl transition-all duration-300 hover:scale-[1.02] hover:border-blue-500/50 hover:shadow-2xl active:scale-[0.98]">
              <div className="text-3xl">📊</div>
              <h3 className="text-lg font-semibold text-slate-50">Настройка системы</h3>
              <ul className="space-y-1 text-sm text-slate-400">
                <li>✓ План счетов с разбивкой по ЦФУ</li>
                <li>✓ Настройка центров финансового учёта (B2B, Ecom)</li>
                <li>✓ Счета для внебанковских платежей (крипта, P2P)</li>
                <li>✓ Шаблоны типовых транзакций</li>
                <li>✓ Правила автоматизации</li>
                <li>✓ Настройка VAT (НДС)</li>
              </ul>
            </div>

            <div className="group space-y-3 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-xl transition-all duration-300 hover:scale-[1.02] hover:border-cyan-500/50 hover:shadow-2xl active:scale-[0.98]">
              <div className="text-3xl">📈</div>
              <h3 className="text-lg font-semibold text-slate-50">Отчёты и аналитика</h3>
              <ul className="space-y-1 text-sm text-slate-400">
                <li>✓ Отчёты по ЦФУ (B2B / Ecom отдельно)</li>
                <li>✓ Управленческий баланс</li>
                <li>✓ P&L (Прибыли и убытки) по направлениям</li>
                <li>✓ Cash Flow Statement</li>
                <li>✓ Кастомные дашборды</li>
                <li>✓ Автоматическая рассылка отчётов</li>
              </ul>
            </div>

            <div className="group space-y-3 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-xl transition-all duration-300 hover:scale-[1.02] hover:border-emerald-500/50 hover:shadow-2xl active:scale-[0.98]">
              <div className="text-3xl">📚</div>
              <h3 className="text-lg font-semibold text-slate-50">Документация</h3>
              <ul className="space-y-1 text-sm text-slate-400">
                <li>✓ Описание структуры плана счетов</li>
                <li>✓ Инструкции по каждому счёту</li>
                <li>✓ Чек-листы для бухгалтера</li>
                <li>✓ FAQ (типовые вопросы)</li>
                <li>✓ Видео-гайды по работе в Zoho Books</li>
                <li>✓ Шаблоны документов</li>
              </ul>
            </div>

            <div className="group space-y-3 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-xl transition-all duration-300 hover:scale-[1.02] hover:border-amber-500/50 hover:shadow-2xl active:scale-[0.98]">
              <div className="text-3xl">🎓</div>
              <h3 className="text-lg font-semibold text-slate-50">Обучение и поддержка</h3>
              <ul className="space-y-1 text-sm text-slate-400">
                <li>✓ Онлайн-сессия для команды (2 часа)</li>
                <li>✓ Индивидуальное обучение бухгалтера</li>
                <li>✓ Поддержка в Telegram/WhatsApp 30 дней</li>
                <li>✓ Доработки и корректировки (первые 30 дней)</li>
                <li>✓ Консультации по учёту</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Технологии */}
        <section className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
              🛠️ Технологии и интеграции
            </h2>
          </div>

          <div className="grid gap-4 lg:grid-cols-4">
            {[
              { title: 'Zoho Books', items: ['Chart of Accounts', 'Cost Centers', 'Custom Fields', 'Automation Rules', 'Reports'] },
              { title: 'Интеграции', items: ['Bank Feeds', 'Payment Gateways', 'Crypto Wallets', 'Excel Import/Export', 'API'] },
              { title: 'Отчётность', items: ['IFRS', 'UAE VAT', 'Management Reports', 'Custom Dashboards', 'Scheduled Reports'] },
              { title: 'Автоматизация', items: ['Transaction Rules', 'Recurring Entries', 'Workflows', 'Notifications', 'Reminders'] }
            ].map((tech, i) => (
              <div
                key={i}
                className="group space-y-2 rounded-2xl border border-slate-800 bg-slate-900/60 p-4 shadow-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl active:scale-[0.98]"
              >
                <h3 className="text-sm font-semibold text-slate-50">{tech.title}</h3>
                <ul className="space-y-1 text-xs text-slate-400">
                  {tech.items.map((item, j) => (
                    <li key={j}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Результаты */}
        <section className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
              🎉 Результаты для клиента
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {[
              { emoji: '⚡', title: 'Скорость', desc: 'Закрытие месяца за 2-3 дня вместо недели' },
              { emoji: '📊', title: 'Прозрачность', desc: 'Отчёты по каждому направлению за 5 минут' },
              { emoji: '💰', title: 'Экономия', desc: 'Снижение затрат на бухгалтерию на 30-40%' },
              { emoji: '🎯', title: 'Точность', desc: 'Нет ручных ошибок, автоматизация 80% операций' },
              { emoji: '📈', title: 'Аналитика', desc: 'Управленческие решения на основе реальных данных' },
              { emoji: '🔒', title: 'Комплаенс', desc: 'Соответствие UAE VAT и IFRS требованиям' }
            ].map((result, i) => (
              <div
                key={i}
                className="group space-y-2 rounded-2xl border border-slate-800 bg-slate-900/60 p-5 text-center shadow-xl transition-all duration-300 hover:scale-[1.03] hover:border-blue-500/50 hover:shadow-2xl active:scale-[0.98]"
              >
                <div className="text-4xl">{result.emoji}</div>
                <h3 className="text-base font-semibold text-slate-50">{result.title}</h3>
                <p className="text-xs text-slate-400">{result.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="space-y-6 rounded-3xl border border-blue-500/30 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 p-8 text-center">
          <h2 className="text-2xl font-bold text-slate-50">Хотите такую же настройку?</h2>
          <p className="mx-auto max-w-2xl text-slate-300">
            Настроим план счетов в Zoho Books под ваш бизнес: разбивка по направлениям, 
            автоматизация, отчёты. Первый этап (экспресс-аудит) — 2-3 дня, точка Go/No-Go.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="mailto:hello@unidev.space"
              className="inline-block rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 px-8 py-4 font-semibold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-blue-500/50 active:scale-95"
            >
              Написать на hello@unidev.space
            </a>
            <a
              href="/zoho-books/"
              className="inline-block rounded-full border border-blue-500/50 bg-blue-500/10 px-8 py-4 font-semibold text-blue-300 transition-all duration-300 hover:scale-105 hover:border-blue-400 hover:bg-blue-500/20 active:scale-95"
            >
              Посмотреть демо →
            </a>
          </div>
        </section>

        {/* Back to portfolio */}
        <div className="pt-8 text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 font-semibold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:bg-blue-500 active:scale-95"
          >
            <span>←</span>
            <span>Вернуться к портфолио</span>
          </Link>
        </div>

        {/* Footer */}
        <footer className="border-t border-slate-800 pt-8 text-center text-xs text-slate-500">
          <p>Настройка плана счетов в Zoho Books • UniDev 2026</p>
        </footer>
      </div>
    </div>
  )
}
