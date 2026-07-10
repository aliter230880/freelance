# Отключаем VPN для этой сессии
$env:NO_PROXY = "*"

$password = "ShAVSu2ZM57U7jFB"
$host = "168.222.143.103"

Write-Host "Исправление роутинга unidev.space..." -ForegroundColor Cyan

# Создаём временный скрипт исправления
$fixScript = @"
#!/bin/bash
echo "Создание бэкапа..."
cp /etc/caddy/Caddyfile /etc/caddy/Caddyfile.bak.fix

echo "Удаление старой секции unidev.space..."
sed -i '/^unidev\.space {/,/^}/d' /etc/caddy/Caddyfile

echo "Добавление новой секции с try_files..."
cat >> /etc/caddy/Caddyfile << 'ENDCADDY'

unidev.space {
    root * /var/www/unidev.space
    encode gzip
    try_files {path} /index.html
    file_server
}
ENDCADDY

echo "Валидация конфигурации..."
if caddy validate --config /etc/caddy/Caddyfile; then
    echo "Перезагрузка Caddy..."
    systemctl reload caddy
    echo "Готово!"
else
    echo "ОШИБКА в конфигурации! Восстанавливаю бэкап..."
    cp /etc/caddy/Caddyfile.bak.fix /etc/caddy/Caddyfile
    exit 1
fi
"@

# Подключаемся и выполняем
try {
    $fixScript | plink -ssh -batch -pw $password root@$host "cat > /tmp/fix.sh && chmod +x /tmp/fix.sh && bash /tmp/fix.sh && rm /tmp/fix.sh"
    
    Write-Host ""
    Write-Host "✅ УСПЕХ! Проверь: https://unidev.space/projects/vfs-visa-bot" -ForegroundColor Green
    Write-Host ""
} catch {
    Write-Host ""
    Write-Host "❌ ОШИБКА: $_" -ForegroundColor Red
    Write-Host ""
    Write-Host "Отключи VPN и запусти FIX_ROUTING.cmd" -ForegroundColor Yellow
    Write-Host ""
}

pause
