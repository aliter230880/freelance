@echo off
chcp 65001 >nul
REM ============================================================================
REM  ИСПРАВЛЕНИЕ РОУТИНГА ДЛЯ REACT ROUTER
REM ============================================================================

color 0E
echo.
echo ╔════════════════════════════════════════════════════════════════╗
echo ║                                                                ║
echo ║          🔧 ИСПРАВЛЕНИЕ РОУТИНГА UNIDEV.SPACE                 ║
echo ║                                                                ║
echo ╚════════════════════════════════════════════════════════════════╝
echo.
echo Проблема: /projects/vfs-visa-bot показывает пустую страницу
echo Решение: Добавить try_files для React Router
echo.
echo ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
echo.

cd /d "%~dp0"

REM Проверка SSH
echo [1/4] 🔌 Проверка подключения...
plink -ssh -batch -pw "ShAVSu2ZM57U7jFB" root@168.222.143.103 "echo OK" >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo ❌ ERROR: Не могу подключиться к VPS!
    echo.
    echo ОТКЛЮЧИ VPN и запусти снова!
    echo.
    pause
    exit /b 1
)
echo ✅ Подключение OK
echo.

REM Бэкап Caddyfile
echo [2/4] 💾 Создание бэкапа Caddyfile...
plink -ssh -batch -pw "ShAVSu2ZM57U7jFB" root@168.222.143.103 "cp /etc/caddy/Caddyfile /etc/caddy/Caddyfile.bak.routing"
echo ✅ Бэкап создан
echo.

REM Обновление конфигурации
echo [3/4] 📝 Обновление конфигурации Caddy...
plink -ssh -batch -pw "ShAVSu2ZM57U7jFB" root@168.222.143.103 "cat > /tmp/caddy_fix.sh << 'SCRIPT'
#!/bin/bash
# Удаляем старую секцию unidev.space
sed -i '/^unidev\.space {/,/^}/d' /etc/caddy/Caddyfile

# Добавляем правильную секцию с try_files
cat >> /etc/caddy/Caddyfile << 'EOF'

unidev.space {
    root * /var/www/unidev.space
    encode gzip
    
    # SPA routing - все запросы идут на index.html
    try_files {path} /index.html
    
    file_server
}
EOF
SCRIPT
chmod +x /tmp/caddy_fix.sh && /tmp/caddy_fix.sh && rm /tmp/caddy_fix.sh"

if %ERRORLEVEL% NEQ 0 (
    echo ❌ ERROR: Не удалось обновить конфиг!
    pause
    exit /b 1
)
echo ✅ Конфигурация обновлена
echo.

REM Валидация и reload
echo [4/4] 🔄 Применение изменений...
plink -ssh -batch -pw "ShAVSu2ZM57U7jFB" root@168.222.143.103 "caddy validate --config /etc/caddy/Caddyfile"
if %ERRORLEVEL% NEQ 0 (
    echo ❌ ERROR: Ошибка валидации!
    echo Восстанавливаю бэкап...
    plink -ssh -batch -pw "ShAVSu2ZM57U7jFB" root@168.222.143.103 "cp /etc/caddy/Caddyfile.bak.routing /etc/caddy/Caddyfile"
    pause
    exit /b 1
)

plink -ssh -batch -pw "ShAVSu2ZM57U7jFB" root@168.222.143.103 "systemctl reload caddy"
timeout /t 2 /nobreak >nul
echo ✅ Caddy перезагружен
echo.

echo ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
echo.
echo ╔════════════════════════════════════════════════════════════════╗
echo ║                                                                ║
echo ║               ✅ РОУТИНГ ИСПРАВЛЕН!                           ║
echo ║                                                                ║
echo ╚════════════════════════════════════════════════════════════════╝
echo.
echo 🌐 Теперь проверь:
echo.
echo    https://unidev.space/projects/vfs-visa-bot
echo.
echo Должна открыться полная страница с VFS Visa Bot!
echo.
echo ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
echo.
pause
