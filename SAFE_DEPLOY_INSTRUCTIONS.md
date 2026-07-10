# ✅ БЕЗОПАСНЫЙ ДЕПЛОЙ VFS Visa Bot на unidev.space

## 🎯 Что готово

- ✅ Страница `/projects/vfs-visa-bot` создана
- ✅ Роут добавлен в `main.tsx`
- ✅ Карточка на главной добавлена
- ✅ Локальная сборка успешна (`npm run build`)
- ✅ Dist готов к деплою

## 🚨 КРИТИЧНО: Соседи на VPS

На `168.222.143.103` живут:
- `web3.aliterra.space` (PHP, web3gram-relay на 8765)
- `trade.aliterra.space` (grid-bot на 8000)
- `ai.aliterra.space` (character-platform)
- `autoposter` (Node.js на 3000)

**НЕ ТРОГАТЬ:**
- `/var/www/web3.aliterra.space/`
- Контейнеры: `web3gram-relay`, `grid-bot`, `cp-qdrant`
- Caddyfile полностью (только добавить свою секцию)
- Процесс `node /root/autoposter/server.js`

## 📦 Безопасный процесс деплоя

### Шаг 1: Проверка доступа SSH

Когда SSH станет доступен, проверь:

```cmd
cd e:\AI\AI_folder\character-platform\deploy
sshk.cmd "echo SSH OK"
```

Если работает — переходи к Шагу 2.

### Шаг 2: Создание архива

```cmd
cd e:\AI\AI_folder\unidev-portfolio
npm run build
tar -czf dist/unidev-full.tar.gz -C dist .
```

### Шаг 3: Создание бэкапа на VPS

```cmd
cd e:\AI\AI_folder\character-platform\deploy
sshk.cmd "cd /var/www/unidev.space && sudo tar -czf ~/backup_unidev_$(date +%%Y%%m%%d_%%H%%M%%S).tar.gz ."
```

### Шаг 4: Заливка новых файлов

```cmd
cd e:\AI\AI_folder\character-platform\deploy
scpk.cmd e:\AI\AI_folder\unidev-portfolio\dist\unidev-full.tar.gz root@168.222.143.103:/tmp/
```

### Шаг 5: Распаковка на VPS

```cmd
sshk.cmd "cd /var/www/unidev.space && sudo tar -xzf /tmp/unidev-full.tar.gz && sudo rm /tmp/unidev-full.tar.gz"
```

### Шаг 6: Проверка прав доступа

```cmd
sshk.cmd "sudo chown -R www-data:www-data /var/www/unidev.space && sudo chmod -R 755 /var/www/unidev.space"
```

### Шаг 7: Проверка Caddyfile (НЕ МЕНЯТЬ!)

```cmd
sshk.cmd "cat /etc/caddy/Caddyfile | grep unidev.space"
```

Должно быть что-то типа:
```
unidev.space {
    root * /var/www/unidev.space
    file_server
    encode gzip
}
```

**Если секции нет** — добавь:

```cmd
sshk.cmd "sudo cp /etc/caddy/Caddyfile /etc/caddy/Caddyfile.bak.unidev.$(date +%%s)"
sshk.cmd "echo '' | sudo tee -a /etc/caddy/Caddyfile"
sshk.cmd "echo 'unidev.space {' | sudo tee -a /etc/caddy/Caddyfile"
sshk.cmd "echo '    root * /var/www/unidev.space' | sudo tee -a /etc/caddy/Caddyfile"
sshk.cmd "echo '    file_server' | sudo tee -a /etc/caddy/Caddyfile"
sshk.cmd "echo '    encode gzip' | sudo tee -a /etc/caddy/Caddyfile"
sshk.cmd "echo '}' | sudo tee -a /etc/caddy/Caddyfile"
```

### Шаг 8: Валидация Caddy

```cmd
sshk.cmd "sudo caddy validate --config /etc/caddy/Caddyfile"
```

Если ошибка — восстанови бэкап:
```cmd
sshk.cmd "sudo cp /etc/caddy/Caddyfile.bak.unidev.TIMESTAMP /etc/caddy/Caddyfile"
```

### Шаг 9: Reload Caddy (НЕ restart!)

```cmd
sshk.cmd "sudo systemctl reload caddy"
```

### Шаг 10: Проверка статуса

```cmd
sshk.cmd "sudo systemctl status caddy"
```

Должно быть `active (running)`.

### Шаг 11: Проверка сайта

Открой в браузере:
- https://unidev.space/
- https://unidev.space/projects/vfs-visa-bot

## 🔍 Проверка что соседи живы

```cmd
sshk.cmd "curl -s -o /dev/null -w '%%{http_code}' https://web3.aliterra.space"
sshk.cmd "curl -s -o /dev/null -w '%%{http_code}' https://trade.aliterra.space"
sshk.cmd "curl -s -o /dev/null -w '%%{http_code}' https://ai.aliterra.space"
```

Все должны вернуть `200` или `301`.

## 🐳 Проверка Docker-контейнеров

```cmd
sshk.cmd "docker ps --format 'table {{.Names}}\t{{.Status}}'"
```

Должны быть запущены:
- `web3gram-relay`
- `grid-bot`
- `cp-qdrant`

## 🔧 Откат в случае проблем

### Откат файлов

```cmd
sshk.cmd "cd /var/www/unidev.space && sudo tar -xzf ~/backup_unidev_TIMESTAMP.tar.gz"
```

### Откат Caddyfile

```cmd
sshk.cmd "sudo cp /etc/caddy/Caddyfile.bak.unidev.TIMESTAMP /etc/caddy/Caddyfile"
sshk.cmd "sudo systemctl reload caddy"
```

## 📊 Мониторинг после деплоя

```cmd
# Логи Caddy
sshk.cmd "sudo journalctl -u caddy -n 50 --no-pager"

# Доступность сайтов
sshk.cmd "curl -I https://unidev.space"
sshk.cmd "curl -I https://web3.aliterra.space"
sshk.cmd "curl -I https://ai.aliterra.space"
```

## 🎉 Готово!

После успешного деплоя:
1. Проверь https://unidev.space/projects/vfs-visa-bot
2. Убедись что все соседи работают
3. Готово к демонстрации заказчику! 🚀

---

## 📝 Альтернативный метод (если SSH работает)

Используй готовый скрипт `deploy.cmd` из корня проекта:

```cmd
cd e:\AI\AI_folder\unidev-portfolio
deploy.cmd
```

Но **ТОЛЬКО** если уверен что скрипт безопасный (проверь код).

---

**Создано**: 2026-07-10  
**Статус**: Готово к деплою когда SSH заработает
