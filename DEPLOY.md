# 🚀 Деплой портфолио на unidev.space

## Что делает этот проект

Это главная портфолио-страница для unidev.space с переходами на проекты:
- **Главная** (`/`) — обзор экспертизы и проектов
- **Blockchain ID** (`/projects/blockchain-id`) — архитектура системы ID + Кошелёк + Ачивки
- **Zoho Books** (`/projects/zoho-books`) — перенаправление на `/zoho-books/`

## Структура на VPS

```
/var/www/unidev.space/
├── index.html                    ← Главная (портфолио)
├── assets/                       ← CSS, JS
├── projects/
│   └── blockchain-id/
│       └── index.html            ← Страница проекта
└── zoho-books/
    └── index.html                ← Существующий Zoho Books (не трогать!)
```

## ⚠️ ВАЖНО: Не удалить соседей на VPS!

На VPS `168.222.143.103` живут другие проекты:
- `ai.aliterra.space` (Character Platform)
- `web3.aliterra.space` (Dashboard)
- `trade.aliterra.space` (Grid Bot)
- `chat.aliterra.space` (Web3Gram)

**НЕЛЬЗЯ:**
- Удалять `/var/www/` целиком
- Перезаписывать Caddyfile полностью
- Трогать папки других проектов

**МОЖНО:**
- Заменять только `/var/www/unidev.space/` (кроме `/zoho-books/`)
- Добавлять секцию в Caddyfile (если её ещё нет)

## Шаг 1: Локальная сборка

```cmd
cd E:\AI\AI_folder\unidev-portfolio
npm run build
```

Результат: папка `dist/` с готовыми файлами.

## Шаг 2: Загрузка на VPS (безопасно!)

### Вариант A: Через deploy.cmd (автоматически)

```cmd
.\deploy.cmd
```

Скрипт сделает:
1. Бэкап текущего `/var/www/unidev.space/` → `~/backup_unidev_<timestamp>.tar.gz`
2. Удалит старые файлы (кроме `/zoho-books/`)
3. Загрузит новые из `dist/`
4. Проверит права доступа

### Вариант B: Вручную (через SCP)

```bash
# 1. Создать бэкап
ssh root@168.222.143.103 "cd /var/www && tar -czf ~/backup_unidev_$(date +%Y%m%d_%H%M%S).tar.gz unidev.space"

# 2. Удалить старое (кроме zoho-books)
ssh root@168.222.143.103 "cd /var/www/unidev.space && find . -maxdepth 1 ! -name '.' ! -name 'zoho-books' -exec rm -rf {} +"

# 3. Загрузить новое
scp -r dist/* root@168.222.143.103:/var/www/unidev.space/

# 4. Проверить права
ssh root@168.222.143.103 "chown -R www-data:www-data /var/www/unidev.space && chmod -R 755 /var/www/unidev.space"
```

## Шаг 3: Проверка Caddy

Убедиться, что в `/etc/caddy/Caddyfile` есть секция:

```caddyfile
unidev.space, www.unidev.space {
    encode gzip zstd
    root * /var/www/unidev.space
    
    # React Router (SPA)
    try_files {path} /index.html
    file_server
    
    header {
        Strict-Transport-Security "max-age=31536000; includeSubDomains"
        X-Content-Type-Options "nosniff"
        Referrer-Policy "strict-origin-when-cross-origin"
        Cache-Control "public, max-age=3600"
        -Server
    }
}
```

Если секции нет — добавить в конец файла, затем:

```bash
caddy reload --config /etc/caddy/Caddyfile
```

## Шаг 4: Проверка

1. Открыть https://unidev.space — должна быть главная портфолио
2. Перейти https://unidev.space/projects/blockchain-id — страница проекта
3. Перейти https://unidev.space/projects/zoho-books — редирект на `/zoho-books/`
4. Проверить https://unidev.space/zoho-books/ — старый проект должен работать

## Откат (если что-то сломалось)

```bash
# Посмотреть список бэкапов
ssh root@168.222.143.103 "ls -lh ~/*.tar.gz"

# Восстановить из бэкапа
ssh root@168.222.143.103 "cd /var/www && rm -rf unidev.space && tar -xzf ~/backup_unidev_<timestamp>.tar.gz"
```

## Полезные команды

```bash
# Проверить размер папок
ssh root@168.222.143.103 "du -sh /var/www/unidev.space/*"

# Логи Caddy
ssh root@168.222.143.103 "journalctl -u caddy -f"

# Перезапуск Caddy
ssh root@168.222.143.103 "systemctl restart caddy"
```

## DNS (должно быть уже настроено)

```
A     @       168.222.143.103
A     www     168.222.143.103
```

## Мета-теги для соцсетей

Уже настроены в `index.html`:
- **Title:** UniDev — Разработка Web3, блокчейн и корпоративных решений
- **Description:** Профессиональная разработка блокчейн-приложений, Web3 dApps, интеграции с Zoho Books, Unity SDK и корпоративные решения. Polygon, Ethereum, смарт-контракты.

При расшаривании ссылки в соцсетях/мессенджерах будет отображаться это описание.
