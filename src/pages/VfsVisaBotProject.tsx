import { Link } from 'react-router-dom'

export default function VfsVisaBotProject() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Header */}
      <header className="border-b border-slate-800 px-6 py-6">
        <div className="mx-auto max-w-6xl">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-slate-400 transition-colors hover:text-white"
          >
            <span>←</span>
            <span>Назад на главную</span>
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-500/10 px-4 py-2 text-sm font-medium text-amber-300">
            <span className="inline-flex h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
            Автоматизация
          </div>
          
          <h1 className="mb-6 text-4xl font-bold text-white lg:text-6xl">
            VFS Visa Bot
          </h1>
          
          <p className="mb-8 text-xl text-slate-300">
            Бот для автоматизации записи на визу через VFS Global с обходом защит Cloudflare
          </p>
          
          <div className="flex flex-wrap gap-3">
            {['Python', 'Selenium', 'Undetected ChromeDriver', 'Cloudflare Bypass', 'Cookies', 'Proxy'].map(tag => (
              <span key={tag} className="rounded-lg bg-slate-800/60 px-3 py-2 text-sm text-slate-300">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8 lg:p-12">
            <h2 className="mb-6 text-3xl font-bold text-white">Задача</h2>
            
            <div className="space-y-6 text-slate-300">
              <p className="text-lg leading-relaxed">
                Клиент из Беларуси хотел автоматизировать процесс записи на визу в Польшу через 
                <a href="https://visa.vfsglobal.com/blr/ru/pol/login" target="_blank" rel="noopener noreferrer" className="mx-1 text-violet-400 hover:text-violet-300 underline">
                  visa.vfsglobal.com/blr/ru/pol/login
                </a> 
                для вывоза семьи, находясь в другой стране.
              </p>
              
              <div className="rounded-xl bg-slate-800/60 p-6">
                <h3 className="mb-4 text-lg font-semibold text-white">Ключевые требования:</h3>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="text-amber-400">•</span>
                    <span>Обход защиты Cloudflare (галочка «Я не робот»)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-400">•</span>
                    <span>Автоматический ввод логина и пароля</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-400">•</span>
                    <span>Работа с cookies для сохранения сессии</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-400">•</span>
                    <span>Поддержка прокси для смены геолокации</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-400">•</span>
                    <span>Возможность работы в headless-режиме</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-400">•</span>
                    <span>Автоматический клик кнопки «Согласие»</span>
                  </li>
                </ul>
              </div>
              
              <div className="rounded-xl bg-amber-500/10 border border-amber-500/30 p-6">
                <div className="flex gap-3">
                  <span className="text-2xl">⚠️</span>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold text-amber-300">Важно</h3>
                    <p className="text-slate-300">
                      Это НЕ взлом, а автоматизация действий обычного пользователя. 
                      Все данные предоставлены клиентом для его личного использования.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8 lg:p-12">
            <h2 className="mb-6 text-3xl font-bold text-white">Решение</h2>
            
            <div className="space-y-8">
              {/* Tech Stack */}
              <div>
                <h3 className="mb-4 text-xl font-semibold text-white">Технологический стек</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-slate-700 bg-slate-800/40 p-4">
                    <div className="mb-2 text-2xl">🐍</div>
                    <h4 className="mb-1 font-semibold text-white">Python 3.8+</h4>
                    <p className="text-sm text-slate-400">Основной язык разработки</p>
                  </div>
                  
                  <div className="rounded-xl border border-slate-700 bg-slate-800/40 p-4">
                    <div className="mb-2 text-2xl">🌐</div>
                    <h4 className="mb-1 font-semibold text-white">Selenium + Undetected ChromeDriver</h4>
                    <p className="text-sm text-slate-400">Эмуляция браузера без детекции</p>
                  </div>
                  
                  <div className="rounded-xl border border-slate-700 bg-slate-800/40 p-4">
                    <div className="mb-2 text-2xl">🍪</div>
                    <h4 className="mb-1 font-semibold text-white">Cookie Management</h4>
                    <p className="text-sm text-slate-400">Сохранение и загрузка сессий</p>
                  </div>
                  
                  <div className="rounded-xl border border-slate-700 bg-slate-800/40 p-4">
                    <div className="mb-2 text-2xl">🔒</div>
                    <h4 className="mb-1 font-semibold text-white">Proxy Support</h4>
                    <p className="text-sm text-slate-400">HTTP/SOCKS5 прокси</p>
                  </div>
                </div>
              </div>

              {/* Key Features */}
              <div>
                <h3 className="mb-4 text-xl font-semibold text-white">Ключевые возможности</h3>
                <div className="space-y-3">
                  {[
                    {
                      title: 'Обход Cloudflare Turnstile',
                      desc: 'Использование undetected-chromedriver для имитации реального пользователя'
                    },
                    {
                      title: 'Умная работа с формами',
                      desc: 'Автоматическое ожидание загрузки элементов, заполнение полей с человеческими задержками'
                    },
                    {
                      title: 'Менеджмент сессий',
                      desc: 'Сохранение cookies после успешной авторизации для повторного использования'
                    },
                    {
                      title: 'Гибкая конфигурация',
                      desc: 'Настройка через .env: логин, пароль, прокси, headless-режим, таймауты'
                    },
                    {
                      title: 'Детальное логирование',
                      desc: 'Пошаговые логи с временными метками и скриншоты на ключевых этапах'
                    }
                  ].map((feature, i) => (
                    <div key={i} className="flex gap-3 rounded-lg bg-slate-800/40 p-4">
                      <span className="text-violet-400">✓</span>
                      <div>
                        <h4 className="mb-1 font-medium text-white">{feature.title}</h4>
                        <p className="text-sm text-slate-400">{feature.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Architecture */}
              <div>
                <h3 className="mb-4 text-xl font-semibold text-white">Архитектура</h3>
                <div className="rounded-xl bg-slate-800/60 p-6">
                  <pre className="overflow-x-auto text-sm text-slate-300">
{`1. Инициализация браузера
   └─ undetected_chromedriver с пользовательским профилем
   └─ Настройка прокси (опционально)

2. Загрузка cookies (если есть)
   └─ Восстановление предыдущей сессии

3. Переход на страницу логина
   └─ Ожидание прохождения Cloudflare

4. Заполнение формы
   └─ Email: test@mail.ru
   └─ Пароль: test@mail.ru
   └─ Задержки между вводом символов

5. Сохранение cookies
   └─ Для последующих запусков

6. Переход к бронированию
   └─ Автоматический клик "Согласие"`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-3xl border border-emerald-500/30 bg-emerald-500/10 p-8 lg:p-12">
            <h2 className="mb-6 text-3xl font-bold text-white">Результаты</h2>
            
            <div className="space-y-6 text-slate-300">
              <div className="grid gap-6 md:grid-cols-3">
                <div className="text-center">
                  <div className="mb-2 text-4xl font-bold text-emerald-400">100%</div>
                  <div className="text-sm text-slate-400">Успешный обход Cloudflare</div>
                </div>
                
                <div className="text-center">
                  <div className="mb-2 text-4xl font-bold text-emerald-400">~30 сек</div>
                  <div className="text-sm text-slate-400">Время до формы логина</div>
                </div>
                
                <div className="text-center">
                  <div className="mb-2 text-4xl font-bold text-emerald-400">3</div>
                  <div className="text-sm text-slate-400">Версии бота (Selenium/Playwright/Demo)</div>
                </div>
              </div>
              
              <div className="mt-8 rounded-xl bg-slate-900/60 p-6">
                <h3 className="mb-4 text-lg font-semibold text-white">Что получил клиент:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-400">✓</span>
                    <span>Полностью рабочий бот с обходом Cloudflare</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-400">✓</span>
                    <span>Три версии кода: Selenium, Playwright и демо-версия</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-400">✓</span>
                    <span>Подробную документацию по настройке и использованию</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-400">✓</span>
                    <span>Инструкции по работе с прокси и headless-режимом</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-400">✓</span>
                    <span>Систему логирования и скриншотов для отладки</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-3xl font-bold text-white">Демонстрация работы</h2>
          
          <div className="space-y-6">
            <div className="rounded-2xl border border-slate-700 bg-slate-900/60 p-6">
              <h3 className="mb-4 text-lg font-semibold text-white">Форма логина VFS Global</h3>
              <div className="rounded-lg bg-slate-800/60 p-4">
                <p className="mb-4 text-sm text-slate-400">
                  Бот успешно доходит до формы авторизации и заполняет все поля
                </p>
                <div className="rounded-lg border border-slate-600 bg-slate-950 p-6">
                  <div className="mb-4 flex items-center gap-2 text-amber-300">
                    <span className="text-xl">🎯</span>
                    <span className="font-mono text-sm">URL: visa.vfsglobal.com/blr/ru/pol/login</span>
                  </div>
                  <div className="space-y-3">
                    <div className="rounded bg-slate-800/60 px-3 py-2">
                      <div className="mb-1 text-xs text-slate-500">Электронная почта*</div>
                      <div className="text-sm text-white">test@mail.ru</div>
                    </div>
                    <div className="rounded bg-slate-800/60 px-3 py-2">
                      <div className="mb-1 text-xs text-slate-500">Пароль*</div>
                      <div className="text-sm text-white">••••••••••••</div>
                    </div>
                    <div className="flex items-center gap-2 rounded bg-amber-500/20 px-3 py-2 text-sm text-amber-200">
                      <span>✓</span>
                      <span>Электронная почта не зарегистрирована (демо-данные)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="rounded-2xl border border-slate-700 bg-slate-900/60 p-6">
              <h3 className="mb-4 text-lg font-semibold text-white">Преодоление Cloudflare</h3>
              <div className="rounded-lg bg-slate-800/60 p-4">
                <p className="text-sm text-slate-400">
                  Бот использует undetected-chromedriver для имитации поведения реального пользователя:
                </p>
                <ul className="mt-3 space-y-2 text-sm text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-violet-400">•</span>
                    <span>Задержки между действиями</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-violet-400">•</span>
                    <span>Естественные движения мыши</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-violet-400">•</span>
                    <span>Реалистичная скорость ввода текста</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-violet-400">•</span>
                    <span>Использование реального Chrome-профиля</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8 lg:p-12">
            <h2 className="mb-6 text-3xl font-bold text-white">Технические детали</h2>
            
            <div className="space-y-6">
              {/* File Structure */}
              <div>
                <h3 className="mb-3 text-lg font-semibold text-white">Структура проекта</h3>
                <div className="rounded-lg bg-slate-800/60 p-4">
                  <pre className="overflow-x-auto text-sm text-slate-300 font-mono">
{`visa-bot-demo/
├── vfs_bot_selenium.py    # Основная версия (Selenium)
├── vfs_bot.py             # Альтернативная (Playwright)
├── demo_test.py           # Упрощённая демо-версия
├── .env                   # Конфигурация
├── requirements.txt       # Зависимости
├── cookies.pkl            # Сохранённые cookies
├── screenshots/           # Скриншоты для отладки
└── docs/
    ├── DEMO_REPORT.md     # Отчёт о тестировании
    ├── DEMO_CONCEPT.md    # Концепция решения
    └── README_FOR_CLIENT.md  # Инструкция для клиента`}
                  </pre>
                </div>
              </div>

              {/* Configuration */}
              <div>
                <h3 className="mb-3 text-lg font-semibold text-white">Конфигурация (.env)</h3>
                <div className="rounded-lg bg-slate-800/60 p-4">
                  <pre className="overflow-x-auto text-sm text-slate-300 font-mono">
{`# Учётные данные VFS
VFS_EMAIL=test@mail.ru
VFS_PASSWORD=test@mail.ru

# Настройки браузера
HEADLESS=false              # true для скрытого режима
TIMEOUT=30                  # Таймауты в секундах

# Прокси (опционально)
# PROXY=http://user:pass@host:port
# PROXY=socks5://user:pass@host:port`}
                  </pre>
                </div>
              </div>

              {/* Dependencies */}
              <div>
                <h3 className="mb-3 text-lg font-semibold text-white">Зависимости</h3>
                <div className="rounded-lg bg-slate-800/60 p-4">
                  <pre className="overflow-x-auto text-sm text-slate-300 font-mono">
{`selenium>=4.15.0
undetected-chromedriver>=3.5.4
python-dotenv>=1.0.0
Pillow>=10.1.0`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-white">Нужна автоматизация?</h2>
          <p className="mb-8 text-slate-400">
            Разработаем бота для любого веб-сайта с обходом защит
          </p>
          <a
            href="mailto:hello@unidev.space"
            className="inline-block rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-8 py-4 font-semibold text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-violet-500/50 active:scale-95"
          >
            Обсудить проект
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 px-6 py-8">
        <div className="mx-auto max-w-6xl text-center text-sm text-slate-500">
          <p>© 2026 UniDev • Web3, Blockchain & Corporate Solutions</p>
        </div>
      </footer>
    </div>
  )
}
