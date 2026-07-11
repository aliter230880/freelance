# Контекст сессии — 0xStudio + unidev.space

## Дата
11 июля 2026

---

## Проект 1: 0xStudio — белый лейбл крипто-продуктов

### Репо
https://github.com/aliter230880/freelance
- Ветка: `main`, деплой на GitHub Pages

### Сайт
https://aliter230880.github.io/freelance/ (если настроен gh-pages)
Локальный артефакт: `artifacts/wallet-whitelabel/`

### Каталог продуктов (9 штук, EN+RU)
1. Crypto Wallet — мобильный кошелёк
2. Staking Platform — платформа стейкинга
3. NFT Marketplace — маркетплейс NFT
4. Token Presale — ICO/IDO лендинг
5. Token Contract — ERC-20 токен
6. Telegram Bot — Web3 бот
7. DEX Exchange — децентрализованная биржа
8. Smart Contract — кастомные контракты
9. Website Creation — создание Web3 сайтов

### CTA
Все кнопки «Buy Code» → `https://t.me/LUXury_CEO`

### Сборка
```bash
PORT=3001 BASE_PATH="/" pnpm --filter @workspace/wallet-whitelabel run build
```
Файлы: `artifacts/wallet-whitelabel/dist/`

---

## Проект 2: unidev.space — портфолио

### VPS
- IP: `168.222.143.103`
- Пользователь: `root`
- Web-сервер: Caddy
- Конфиг: `/etc/caddy/Caddyfile`

### Структура сайта
```
/var/www/unidev.space/
├── index.html          ← (кастомный: compact CSS + VFS Bot card injection)
├── assets/
│   ├── index-fFmYlizI.js   ← React SPA (email заменён на 2504612@mail.ru)
│   └── index-qM28w_GI.css
├── projects/
│   └── vfs-visa-bot/
│       └── index.html   ← страница проекта VFS Visa Bot
└── demo/
    └── blockchain-id/
        ├── index.html   ← интерактивная демо-система
        ├── styles.css
        └── app.js
```

### Маршруты Caddy (unidev.space)
```
/demo/*                 → static file_server
/projects/vfs-visa-bot* → static file_server
/zoho-books/*           → rewrite /index.html (отдельный SPA)
/*                      → try_files SPA fallback
```

### Активные проекты на unidev.space
| Путь | Проект |
|------|--------|
| `/` | React SPA (портфолио) |
| `/projects/vfs-visa-bot/` | VFS Visa Bot — автозапись на визу |
| `/demo/blockchain-id/` | Blockchain ID System — интерактивная демо |

### Email на сайте
`2504612@mail.ru` (заменено в JS бандле через sed)

---

## Карточка VFS Visa Bot на главной

Инжектируется через JS в `index.html` (MutationObserver после рендера React):
- Иконка: 🤖, янтарная цветовая схема
- Бейдж «Готово»: inline styles (amber, Tailwind не в бандле)
- «Смотреть детали»: `color:#f59e0b` (inline)
- Ссылка: `/projects/vfs-visa-bot/`

---

## Compact CSS (добавлен в index.html)
```css
.py-32 { padding-top:4rem!important; padding-bottom:4rem!important }
.py-24 { padding-top:3rem!important; padding-bottom:3rem!important }
.py-16 { padding-top:2.25rem!important; padding-bottom:2.25rem!important }
@media(min-width:1024px){.lg\:py-32{padding-top:4.5rem!important;padding-bottom:4.5rem!important}}
```

---

## Прочие сервисы на VPS

| Домен | Сервис | Порт |
|-------|--------|------|
| `trade.aliterra.space` | FastAPI backend | 8000 |
| `web3.aliterra.space` | Web3 dashboard + PHP | static+8765 |
| `ai.aliterra.space` | Character Platform (FastAPI) | 8001 |
| `matrix.aliterra.space` | Matrix landing | static |
| `promo.aliterra.space` | Autoposter | 3000 |
| `parser.unidev.space` | Lead Hunter dashboard | 8011 |

⚠️ Сервис `leadhunter-collect.service` запускает Playwright и съедает ~1.1GB RAM. 
Остановлен: `systemctl stop leadhunter-collect.service leadhunter-web.service`
При необходимости восстановить: `systemctl start leadhunter-web.service`

---

## Стек (Replit Workspace)

```
pnpm monorepo, TypeScript 5.9, Node 24
artifacts/wallet-whitelabel/  ← React + Vite (0xStudio)
artifacts/api-server/         ← Express 5 + Drizzle ORM
lib/                          ← shared libs
```

---

## Ключевые контакты/ссылки
- Telegram: `t.me/LUXury_CEO`
- Email: `2504612@mail.ru`
- GitHub: `aliter230880/freelance`
