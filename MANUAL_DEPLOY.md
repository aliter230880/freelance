# 🚀 Ручной деплой UniDev Portfolio с VFS Visa Bot

## 📦 Готовый архив

Архив уже создан и находится здесь:
```
e:\AI\AI_folder\unidev-portfolio\unidev-deploy-YYYYMMDD-HHMMSS.tar.gz
```

## 🎯 Два способа деплоя

### Способ 1: Через SSH (когда заработает)

```cmd
cd e:\AI\AI_folder\character-platform\deploy

REM 1. Создать бэкап на VPS
sshk.cmd "cd /var/www/unidev.space && sudo tar -czf ~/backup_unidev_$(date +%%Y%%m%%d_%%H%%M%%S).tar.gz ."

REM 2. Загрузить архив
scpk.cmd e:\AI\AI_folder\unidev-portfolio\unidev-deploy-*.tar.gz root@168.222.143.103:/tmp/

REM 3. Распаковать
sshk.cmd "cd /var/www/unidev.space && sudo rm -rf * && sudo tar -xzf /tmp/unidev-deploy-*.tar.gz && sudo rm /tmp/unidev-deploy-*.tar.gz"

REM 4. Права доступа
sshk.cmd "sudo chown -R www-data:www-data /var/www/unidev.space && sudo chmod -R 755 /var/www/unidev.space"

REM 5. Проверка Caddyfile (должен быть блок для unidev.space)
sshk.cmd "cat /etc/caddy/Caddyfile | grep -A 5 unidev.space"

REM 6. Если блока нет - добавить (БЕЗОПАСНО)
sshk.cmd "sudo cp /etc/caddy/Caddyfile /etc/caddy/Caddyfile.bak.unidev"
sshk.cmd "echo '' | sudo tee -a /etc/caddy/Caddyfile"
sshk.cmd "echo 'unidev.space {' | sudo tee -a /etc/caddy/Caddyfile"
sshk.cmd "echo '    root * /var/www/unidev.space' | sudo tee -a /etc/caddy/Caddyfile"
sshk.cmd "echo '    file_server' | sudo tee -a /etc/caddy/Caddyfile"
sshk.cmd "echo '    encode gzip' | sudo tee -a /etc/caddy/Caddyfile"
sshk.cmd "echo '}' | sudo tee -a /etc/caddy/Caddyfile"

REM 7. Валидация Caddy
sshk.cmd "sudo caddy validate --config /etc/caddy/Caddyfile"

REM 8. Reload Caddy (НЕ restart!)
sshk.cmd "sudo systemctl reload caddy"

REM 9. Проверка
sshk.cmd "sudo systemctl status caddy"
```

### Способ 2: Через панель reg.ru (если SSH недоступен)

#### Шаг 1: Войти в панель
1. Открыть https://www.reg.ru/user/account
2. Войти под своим аккаунтом
3. Перейти в VPS/VDS → Управление

#### Шаг 2: Использовать VNC/Console
1. Нажать "Консоль" или "VNC"
2. Залогиниться как `root` с паролем `ShAVSu2ZM57U7jFB`

#### Шаг 3: Загрузить архив
Варианты:
- **Вариант A**: Использовать `wget` если есть временный хостинг
- **Вариант B**: Открыть File Manager в панели reg.ru
- **Вариант C**: Использовать встроенный upload в VNC консоли

#### Шаг 4: В консоли выполнить

```bash
# Перейти в директорию
cd /var/www/unidev.space

# Бэкап текущих файлов
sudo tar -czf ~/backup_unidev_$(date +%Y%m%d_%H%M%S).tar.gz .

# Очистить папку
sudo rm -rf *

# Распаковать новый архив (предполагается что загружен в /tmp)
sudo tar -xzf /tmp/unidev-deploy-*.tar.gz

# Права доступа
sudo chown -R www-data:www-data /var/www/unidev.space
sudo chmod -R 755 /var/www/unidev.space

# Проверить Caddyfile
cat /etc/caddy/Caddyfile | grep -A 5 "unidev.space"

# Если блока нет - добавить
sudo nano /etc/caddy/Caddyfile
# Добавить в конец:
# unidev.space {
#     root * /var/www/unidev.space
#     file_server
#     encode gzip
# }

# Валидация
sudo caddy validate --config /etc/caddy/Caddyfile

# Reload
sudo systemctl reload caddy

# Проверка
sudo systemctl status caddy
```

## ✅ Проверка после деплоя

### 1. Проверка файлов
```bash
ls -la /var/www/unidev.space/
# Должны быть: index.html, assets/, vite.svg и т.д.
```

### 2. Проверка Caddy
```bash
sudo systemctl status caddy
# Должно быть: active (running)

journalctl -u caddy -n 20 --no-pager
# Проверить нет ли ошибок
```

### 3. Проверка сайтов в браузере
- https://unidev.space/
- https://unidev.space/projects/vfs-visa-bot
- https://unidev.space/projects/blockchain-id
- https://unidev.space/projects/zoho-books

### 4. Проверка соседей (КРИТИЧНО!)
```bash
# Проверить что все работают
curl -I https://ai.aliterra.space
curl -I https://web3.aliterra.space
curl -I https://trade.aliterra.space
curl -I https://matrix.aliterra.space

# Проверить Docker контейнеры
docker ps --format 'table {{.Names}}\t{{.Status}}'
# Должны работать: cp-qdrant, web3gram-relay, grid-bot
```

## 🔧 Откат в случае проблем

### Откат файлов
```bash
cd /var/www/unidev.space
sudo rm -rf *
sudo tar -xzf ~/backup_unidev_TIMESTAMP.tar.gz
```

### Откат Caddyfile
```bash
sudo cp /etc/caddy/Caddyfile.bak.unidev /etc/caddy/Caddyfile
sudo systemctl reload caddy
```

## 📊 Содержимое деплоя

Архив содержит:
- `index.html` — главная страница
- `assets/` — JS, CSS бандлы
- Все статические файлы React-приложения

### Новые страницы:
- **Главная**: 3 карточки проектов (Blockchain ID, Zoho Books, VFS Visa Bot)
- **VFS Visa Bot**: `/projects/vfs-visa-bot` — полное case study

## 🎯 Цель

После деплоя страница **https://unidev.space/projects/vfs-visa-bot** должна работать и показывать:
- Описание проекта VFS Visa Bot
- Технический стек
- Архитектуру решения
- Результаты тестирования
- Визуальную демонстрацию

## ⚠️ Безопасность

**НЕ ТРОГАТЬ:**
- `/var/www/web3.aliterra.space/`
- `/var/www/ai.aliterra.space/` (это симлинк на /opt/character-platform/web/)
- Секции других доменов в Caddyfile
- Docker контейнеры кроме своих

**ВСЕГДА:**
- Делать бэкап перед изменениями
- Проверять соседей после деплоя
- Использовать `reload` вместо `restart`

---

**Создано**: 2026-07-10  
**Статус**: Готово к ручному деплою
