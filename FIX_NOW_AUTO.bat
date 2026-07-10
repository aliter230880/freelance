@echo off
chcp 65001 >nul
echo ═══════════════════════════════════════════
echo  АВТОИСПРАВЛЕНИЕ РОУТИНГА
echo ═══════════════════════════════════════════
echo.

REM Создаём временный bash-скрипт
echo #!/bin/bash > %TEMP%\fix_caddy.sh
echo cp /etc/caddy/Caddyfile /etc/caddy/Caddyfile.bak.autofix >> %TEMP%\fix_caddy.sh
echo sed -i '/^unidev\.space {/,/^}/d' /etc/caddy/Caddyfile >> %TEMP%\fix_caddy.sh
echo echo '' ^>^> /etc/caddy/Caddyfile >> %TEMP%\fix_caddy.sh
echo echo 'unidev.space {' ^>^> /etc/caddy/Caddyfile >> %TEMP%\fix_caddy.sh
echo echo '    root * /var/www/unidev.space' ^>^> /etc/caddy/Caddyfile >> %TEMP%\fix_caddy.sh
echo echo '    encode gzip' ^>^> /etc/caddy/Caddyfile >> %TEMP%\fix_caddy.sh
echo echo '    try_files {path} /index.html' ^>^> /etc/caddy/Caddyfile >> %TEMP%\fix_caddy.sh
echo echo '    file_server' ^>^> /etc/caddy/Caddyfile >> %TEMP%\fix_caddy.sh
echo echo '}' ^>^> /etc/caddy/Caddyfile >> %TEMP%\fix_caddy.sh
echo caddy validate --config /etc/caddy/Caddyfile ^&^& systemctl reload caddy >> %TEMP%\fix_caddy.sh

echo [1/3] Подключение к серверу...
echo.

REM Загружаем и выполняем скрипт
pscp -batch -pw "ShAVSu2ZM57U7jFB" %TEMP%\fix_caddy.sh root@168.222.143.103:/tmp/fix_caddy.sh
if %ERRORLEVEL% NEQ 0 (
    echo.
    echo ❌ Не удалось подключиться!
    echo.
    echo ОТКЛЮЧИ VPN и запусти снова!
    echo.
    del %TEMP%\fix_caddy.sh
    pause
    exit /b 1
)

echo [2/3] Выполнение исправлений...
echo.
plink -ssh -batch -pw "ShAVSu2ZM57U7jFB" root@168.222.143.103 "chmod +x /tmp/fix_caddy.sh && bash /tmp/fix_caddy.sh && rm /tmp/fix_caddy.sh"

if %ERRORLEVEL% NEQ 0 (
    echo.
    echo ❌ Ошибка при исправлении!
    echo.
    del %TEMP%\fix_caddy.sh
    pause
    exit /b 1
)

echo [3/3] Проверка...
timeout /t 2 /nobreak >nul

del %TEMP%\fix_caddy.sh

echo.
echo ═══════════════════════════════════════════
echo  ✅ ГОТОВО!
echo ═══════════════════════════════════════════
echo.
echo Проверь: https://unidev.space/projects/vfs-visa-bot
echo.
pause
