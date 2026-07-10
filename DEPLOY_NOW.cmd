@echo off
chcp 65001 >nul
REM ============================================================================
REM  ДЕПЛОЙ UNIDEV.SPACE - ПРОСТО ЗАПУСТИ ЭТОТ ФАЙЛ
REM ============================================================================

color 0A
echo.
echo ╔════════════════════════════════════════════════════════════════╗
echo ║                                                                ║
echo ║          🚀 ДЕПЛОЙ UNIDEV.SPACE + VFS VISA BOT                ║
echo ║                                                                ║
echo ╚════════════════════════════════════════════════════════════════╝
echo.
echo ⚠️  ВНИМАНИЕ: Этот скрипт НЕ ТРОГАЕТ соседей на VPS:
echo    - ai.aliterra.space
echo    - web3.aliterra.space  
echo    - trade.aliterra.space
echo    - matrix.aliterra.space
echo.
echo ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
echo.

cd /d "%~dp0"

REM Шаг 1: Проверка архива
echo [1/10] 📦 Проверка архива...
if not exist "unidev-deploy-*.tar.gz" (
    echo ❌ ERROR: Архив не найден!
    pause
    exit /b 1
)
for %%f in (unidev-deploy-*.tar.gz) do set ARCHIVE=%%f
echo ✅ Найден: %ARCHIVE%
echo.

REM Шаг 2: Проверка SSH
echo [2/10] 🔌 Проверка подключения к VPS...
plink -ssh -batch -pw "ShAVSu2ZM57U7jFB" root@168.222.143.103 "echo OK" >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo ❌ ERROR: Не могу подключиться к VPS!
    echo.
    echo Возможные причины:
    echo  - VPN мешает подключению
    echo  - SSH daemon не запущен
    echo  - Firewall блокирует
    echo.
    echo Попробуйте:
    echo  1. Отключить VPN
    echo  2. Перезапустить этот скрипт
    echo.
    pause
    exit /b 1
)
echo ✅ SSH подключение работает
echo.

REM Шаг 3: Бэкап
echo [3/10] 💾 Создание бэкапа...
plink -ssh -batch -pw "ShAVSu2ZM57U7jFB" root@168.222.143.103 "cd /var/www/unidev.space 2>/dev/null && tar -czf ~/backup_unidev_$(date +%%Y%%m%%d_%%H%%M%%S).tar.gz . 2>/dev/null || mkdir -p /var/www/unidev.space"
echo ✅ Бэкап создан
echo.

REM Шаг 4: Загрузка архива
echo [4/10] ⬆️  Загрузка файлов на VPS...
pscp -batch -pw "ShAVSu2ZM57U7jFB" "%ARCHIVE%" root@168.222.143.103:/tmp/
if %ERRORLEVEL% NEQ 0 (
    echo ❌ ERROR: Не удалось загрузить файлы!
    pause
    exit /b 1
)
echo ✅ Файлы загружены
echo.

REM Шаг 5: Распаковка
echo [5/10] 📂 Распаковка на сервере...
plink -ssh -batch -pw "ShAVSu2ZM57U7jFB" root@168.222.143.103 "cd /var/www/unidev.space && rm -rf * && tar -xzf /tmp/%ARCHIVE% && rm /tmp/%ARCHIVE%"
if %ERRORLEVEL% NEQ 0 (
    echo ❌ ERROR: Не удалось распаковать!
    pause
    exit /b 1
)
echo ✅ Файлы распакованы
echo.

REM Шаг 6: Права доступа
echo [6/10] 🔐 Установка прав доступа...
plink -ssh -batch -pw "ShAVSu2ZM57U7jFB" root@168.222.143.103 "chown -R www-data:www-data /var/www/unidev.space && chmod -R 755 /var/www/unidev.space"
echo ✅ Права установлены
echo.

REM Шаг 7: Проверка Caddyfile
echo [7/10] 📝 Проверка Caddyfile...
plink -ssh -batch -pw "ShAVSu2ZM57U7jFB" root@168.222.143.103 "grep -q 'unidev.space' /etc/caddy/Caddyfile"
if %ERRORLEVEL% NEQ 0 (
    echo Секция не найдена, добавляю безопасно...
    
    REM Бэкап Caddyfile
    plink -ssh -batch -pw "ShAVSu2ZM57U7jFB" root@168.222.143.103 "cp /etc/caddy/Caddyfile /etc/caddy/Caddyfile.bak.unidev"
    
    REM Добавление секции с поддержкой React Router
    plink -ssh -batch -pw "ShAVSu2ZM57U7jFB" root@168.222.143.103 "cat >> /etc/caddy/Caddyfile << 'EOF'

unidev.space {
    root * /var/www/unidev.space
    encode gzip
    
    # SPA routing - все запросы идут на index.html
    try_files {path} /index.html
    
    file_server
}
EOF"
    
    echo ✅ Секция добавлена
) else (
    echo ✅ Секция уже существует
)
echo.

REM Шаг 8: Валидация
echo [8/10] ✓ Валидация Caddy...
plink -ssh -batch -pw "ShAVSu2ZM57U7jFB" root@168.222.143.103 "caddy validate --config /etc/caddy/Caddyfile" >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo ❌ ERROR: Ошибка в Caddyfile!
    echo Восстанавливаю бэкап...
    plink -ssh -batch -pw "ShAVSu2ZM57U7jFB" root@168.222.143.103 "cp /etc/caddy/Caddyfile.bak.unidev /etc/caddy/Caddyfile"
    pause
    exit /b 1
)
echo ✅ Конфигурация валидна
echo.

REM Шаг 9: Reload Caddy
echo [9/10] 🔄 Перезагрузка Caddy (reload, НЕ restart)...
plink -ssh -batch -pw "ShAVSu2ZM57U7jFB" root@168.222.143.103 "systemctl reload caddy"
if %ERRORLEVEL% NEQ 0 (
    echo ❌ ERROR: Не удалось перезагрузить Caddy!
    pause
    exit /b 1
)
timeout /t 3 /nobreak >nul
echo ✅ Caddy перезагружен
echo.

REM Шаг 10: Проверка соседей
echo [10/10] 👥 Проверка что соседи не пострадали...
echo.
echo Проверка ai.aliterra.space...
plink -ssh -batch -pw "ShAVSu2ZM57U7jFB" root@168.222.143.103 "curl -s -o /dev/null -w '%%{http_code}' https://ai.aliterra.space 2>/dev/null" | findstr "200 301 302" >nul
if %ERRORLEVEL% EQU 0 (echo ✅ OK) else (echo ⚠️  Не отвечает)

echo Проверка web3.aliterra.space...
plink -ssh -batch -pw "ShAVSu2ZM57U7jFB" root@168.222.143.103 "curl -s -o /dev/null -w '%%{http_code}' https://web3.aliterra.space 2>/dev/null" | findstr "200 301 302" >nul
if %ERRORLEVEL% EQU 0 (echo ✅ OK) else (echo ⚠️  Не отвечает)

echo Проверка trade.aliterra.space...
plink -ssh -batch -pw "ShAVSu2ZM57U7jFB" root@168.222.143.103 "curl -s -o /dev/null -w '%%{http_code}' https://trade.aliterra.space 2>/dev/null" | findstr "200 301 302" >nul
if %ERRORLEVEL% EQU 0 (echo ✅ OK) else (echo ⚠️  Не отвечает)

echo.
echo ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
echo.
echo ╔════════════════════════════════════════════════════════════════╗
echo ║                                                                ║
echo ║               🎉 ДЕПЛОЙ УСПЕШНО ЗАВЕРШЁН!                     ║
echo ║                                                                ║
echo ╚════════════════════════════════════════════════════════════════╝
echo.
echo 🌐 Проверьте сайты:
echo.
echo    ✓ https://unidev.space/
echo    ✓ https://unidev.space/projects/vfs-visa-bot
echo    ✓ https://unidev.space/projects/blockchain-id
echo    ✓ https://unidev.space/projects/zoho-books
echo.
echo 👥 Соседи (должны работать):
echo.
echo    ✓ https://ai.aliterra.space
echo    ✓ https://web3.aliterra.space
echo    ✓ https://trade.aliterra.space
echo.
echo ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
echo.
pause
