# VFS Visa Bot — Интеграция в портфолио unidev.space

## ✅ Что сделано

1. **Создана страница проекта**: `src/pages/VfsVisaBotProject.tsx`
   - Полное описание задачи клиента
   - Технический стек и архитектура решения
   - Ключевые возможности и результаты
   - Визуальная демонстрация работы бота
   - Структура проекта и конфигурация

2. **Добавлен роут**: `/projects/vfs-visa-bot` в `src/main.tsx`

3. **Добавлена карточка на главной**: новый проект в секции "Проекты" на `Home.tsx`
   - Эмодзи: 🤖
   - Цветовая схема: amber (янтарный)
   - Теги: Python, Selenium, Cloudflare, Automation
   - Статус: "Автоматизация"

## 🌐 Локальный просмотр

Dev-сервер запущен и доступен по адресам:
- **Local**: http://localhost:5173/
- **Network**: http://192.168.0.150:5173/

### Страницы для проверки:
1. Главная: http://localhost:5173/
2. VFS Visa Bot: http://localhost:5173/projects/vfs-visa-bot
3. Blockchain ID: http://localhost:5173/projects/blockchain-id
4. Zoho Books: http://localhost:5173/projects/zoho-books

## 📦 Деплой на продакшен

### 1. Сборка проекта
```cmd
cd e:\AI\AI_folder\unidev-portfolio
npm run build
```

### 2. Проверка билда
```cmd
npm run preview
```

### 3. Деплой на VPS
Используй готовый скрипт:
```cmd
e:\AI\AI_folder\unidev-portfolio\deploy.cmd
```

Или вручную:
```bash
# На VPS (168.222.143.103)
cd /var/www/unidev.space
sudo tar -xzf unidev-full.tar.gz
sudo systemctl reload caddy
```

## 🎨 Дизайн и структура

### Цветовая схема проекта VFS Visa Bot
- **Основной**: Amber (янтарный) — `amber-500/10`, `amber-400/30`
- **Акцент**: `amber-300`, `amber-400`
- **Hover**: `hover:border-amber-500/50`, `hover:shadow-amber-500/20`

### Секции страницы
1. **Header** — навигация назад
2. **Hero** — название, описание, теги
3. **Challenge** — задача клиента, требования
4. **Solution** — технический стек, возможности, архитектура
5. **Results** — метрики успеха, что получил клиент
6. **Screenshots** — визуальная демонстрация
7. **Technical Details** — структура, конфигурация, зависимости
8. **CTA** — призыв к действию
9. **Footer** — копирайт

## 📱 Адаптивность

Страница полностью адаптивна:
- Mobile: одна колонка
- Tablet (md): grid с двумя колонками
- Desktop (lg): grid с тремя колонками для карточек на главной
- Large Desktop (xl): оптимизированная раскладка

## 🔗 Внутренние ссылки

```typescript
// Главная → VFS Visa Bot
<Link to="/projects/vfs-visa-bot">

// VFS Visa Bot → Главная
<Link to="/">

// Внешние ссылки
<a href="https://visa.vfsglobal.com/blr/ru/pol/login" target="_blank" rel="noopener noreferrer">
```

## 📝 Технические детали

### Используемые технологии в странице
- **React** 18.3
- **TypeScript** 5.x
- **React Router** 6.x
- **Tailwind CSS** 3.x
- **Vite** 7.x

### Компоненты
- Никаких внешних компонентов
- Чистый JSX + Tailwind
- Все карточки и блоки — inline-стили через Tailwind

### Иконки
- Используются эмодзи (не нужны библиотеки иконок)
- 🤖 — основная иконка проекта
- ⚠️ — предупреждения
- ✓ — успешные пункты

## 🚀 Следующие шаги

1. Проверь локально на http://localhost:5173/projects/vfs-visa-bot
2. Если всё ОК — запусти `npm run build`
3. Задеплой на VPS через `deploy.cmd`
4. Проверь на https://unidev.space/projects/vfs-visa-bot

## 📧 Контакты в портфолио

Email для связи: hello@unidev.space

---

**Создано**: 2026-07-09  
**Статус**: ✅ Готово к деплою
