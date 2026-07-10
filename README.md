# UniDev Portfolio — unidev.space

Главная портфолио-страница для unidev.space с проектами Web3, блокчейн и корпоративных решений.

## 🎯 Что внутри

- **Главная** (`/`) — обзор экспертизы, технологий и проектов
- **Blockchain ID** (`/projects/blockchain-id`) — архитектура системы ID + Кошелёк + Ачивки на Polygon
- **Zoho Books** (`/projects/zoho-books`) — перенаправление на существующий проект

## 🚀 Быстрый старт

### Разработка

```bash
npm install
npm run dev
```

Откройте http://localhost:5173

### Сборка

```bash
npm run build
```

Результат в папке `dist/`.

### Деплой на VPS

```cmd
.\deploy.cmd
```

Скрипт безопасно загружает файлы на https://unidev.space, сохраняя существующий проект Zoho Books и не трогая соседей на VPS.

## 📁 Структура

```
src/
├── pages/
│   ├── Home.tsx                 # Главная портфолио
│   ├── BlockchainIdProject.tsx  # Проект: Blockchain ID
│   └── ZohoBooksProject.tsx     # Редирект на /zoho-books/
├── main.tsx                     # React Router
└── index.css                    # Tailwind CSS
```

## 🛠️ Стек

- React 19 + TypeScript
- React Router 7
- Tailwind CSS 4
- Vite 7

## 🌐 SEO & Мета-теги

Настроены Open Graph и Twitter Card для корректного отображения при расшаривании:
- **Title:** UniDev — Разработка Web3, блокчейн и корпоративных решений
- **Description:** Профессиональная разработка блокчейн-приложений, Web3 dApps, интеграции с Zoho Books, Unity SDK и корпоративные решения.

## ⚠️ Важно для деплоя

- На VPS живут другие проекты (ai.aliterra.space, web3.aliterra.space и т.д.) — **не трогать!**
- Папка `/zoho-books/` должна остаться нетронутой
- Скрипт `deploy.cmd` делает автоматический бэкап перед загрузкой

Подробнее: [DEPLOY.md](./DEPLOY.md)
