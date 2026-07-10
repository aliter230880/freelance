@echo off
REM ============================================================================
REM  Auto-deploy UniDev Portfolio когда SSH станет доступен
REM ============================================================================

setlocal enabledelayedexpansion

echo ========================================
echo  AUTO-DEPLOY UNIDEV.SPACE
echo ========================================
echo.
echo Ожидание доступности SSH...
echo.

set MAX_ATTEMPTS=60
set ATTEMPT=0
set SSH_READY=0

:CHECK_SSH
set /a ATTEMPT+=1
echo [%ATTEMPT%/%MAX_ATTEMPTS%] Проверка SSH...

REM Попытка подключения
echo y | plink -ssh -batch -pw "ShAVSu2ZM57U7jFB" root@168.222.143.103 "echo OK" >nul 2>&1

if %ERRORLEVEL% EQU 0 (
    set SSH_READY=1
    goto :SSH_CONNECTED
)

if %ATTEMPT% GEQ %MAX_ATTEMPTS% (
    echo.
    echo ========================================
    echo  TIMEOUT: SSH не доступен после %MAX_ATTEMPTS% попыток
    echo ========================================
    echo.
    echo Используйте MANUAL_DEPLOY.md для ручного деплоя
    pause
    exit /b 1
)

REM Ждём 10 секунд перед следующей попыткой
timeout /t 10 /nobreak >nul
goto :CHECK_SSH

:SSH_CONNECTED
echo.
echo ========================================
echo  SSH ДОСТУПЕН! Начинаю деплой...
echo ========================================
echo.

cd /d %~dp0

REM 1. Проверка архива
echo [1/9] Проверка deployment-архива...
if not exist "unidev-deploy-*.tar.gz" (
    echo ERROR: Архив не найден!
    echo Запустите: npm run build
    pause
    exit /b 1
)
for %%f in (unidev-deploy-*.tar.gz) do set ARCHIVE=%%f
echo OK: %ARCHIVE%
echo.

REM 2. Бэкап на VPS
echo [2/9] Создание бэкапа на VPS...
cd /d e:\AI\AI_folder\character-platform\deploy
call sshk.cmd "cd /var/www/unidev.space && sudo tar -czf ~/backup_unidev_$(date +%%Y%%m%%d_%%H%%M%%S).tar.gz . 2>/dev/null || echo 'No files to backup'"
if %ERRORLEVEL% NEQ 0 (
    echo WARNING: Бэкап не удался, но продолжаем...
)
echo.

REM 3. Загрузка архива
echo [3/9] Загрузка архива на VPS...
cd /d %~dp0
call e:\AI\AI_folder\character-platform\deploy\scpk.cmd "%ARCHIVE%" root@168.222.143.103:/tmp/
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: Не удалось загрузить архив!
    pause
    exit /b 1
)
echo OK
echo.

REM 4. Распаковка
echo [4/9] Распаковка на VPS...
cd /d e:\AI\AI_folder\character-platform\deploy
call sshk.cmd "cd /var/www/unidev.space && sudo rm -rf * && sudo tar -xzf /tmp/%ARCHIVE% && sudo rm /tmp/%ARCHIVE%"
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: Не удалось распаковать!
    pause
    exit /b 1
)
echo OK
echo.

REM 5. Права доступа
echo [5/9] Установка прав доступа...
call sshk.cmd "sudo chown -R www-data:www-data /var/www/unidev.space && sudo chmod -R 755 /var/www/unidev.space"
echo OK
echo.

REM 6. Проверка Caddyfile
echo [6/9] Проверка Caddyfile...
call sshk.cmd "grep -q 'unidev.space' /etc/caddy/Caddyfile"
if %ERRORLEVEL% NEQ 0 (
    echo Секция unidev.space не найдена, добавляю...
    
    REM Бэкап Caddyfile
    call sshk.cmd "sudo cp /etc/caddy/Caddyfile /etc/caddy/Caddyfile.bak.unidev.%DATE:/=-%_%TIME::=-%"
    
    REM Добавление секции
    call sshk.cmd "echo '' | sudo tee -a /etc/caddy/Caddyfile"
    call sshk.cmd "echo 'unidev.space {' | sudo tee -a /etc/caddy/Caddyfile"
    call sshk.cmd "echo '    root * /var/www/unidev.space' | sudo tee -a /etc/caddy/Caddyfile"
    call sshk.cmd "echo '    file_server' | sudo tee -a /etc/caddy/Caddyfile"
    call sshk.cmd "echo '    encode gzip' | sudo tee -a /etc/caddy/Caddyfile"
    call sshk.cmd "echo '}' | sudo tee -a /etc/caddy/Caddyfile"
    
    echo Секция добавлена
) else (
    echo Секция уже существует
)
echo.

REM 7. Валидация Caddy
echo [7/9] Валидация Caddy...
call sshk.cmd "sudo caddy validate --config /etc/caddy/Caddyfile"
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: Ошибка в Caddyfile!
    echo Восстанавливаю бэкап...
    call sshk.cmd "sudo cp /etc/caddy/Caddyfile.bak.unidev.* /etc/caddy/Caddyfile"
    pause
    exit /b 1
)
echo OK
echo.

REM 8. Reload Caddy
echo [8/9] Reload Caddy...
call sshk.cmd "sudo systemctl reload caddy"
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: Не удалось перезагрузить Caddy!
    pause
    exit /b 1
)
timeout /t 2 /nobreak >nul
echo OK
echo.

REM 9. Проверка соседей
echo [9/9] Проверка соседей...
echo Проверка ai.aliterra.space...
call sshk.cmd "curl -s -o /dev/null -w '%%{http_code}' https://ai.aliterra.space" | findstr "200 301 302" >nul
if %ERRORLEVEL% NEQ 0 echo WARNING: ai.aliterra.space не отвечает!

echo Проверка web3.aliterra.space...
call sshk.cmd "curl -s -o /dev/null -w '%%{http_code}' https://web3.aliterra.space" | findstr "200 301 302" >nul
if %ERRORLEVEL% NEQ 0 echo WARNING: web3.aliterra.space не отвечает!

echo Проверка trade.aliterra.space...
call sshk.cmd "curl -s -o /dev/null -w '%%{http_code}' https://trade.aliterra.space" | findstr "200 301 302" >nul
if %ERRORLEVEL% NEQ 0 echo WARNING: trade.aliterra.space не отвечает!

echo.
echo ========================================
echo  ДЕПЛОЙ ЗАВЕРШЁН!
echo ========================================
echo.
echo Проверьте:
echo  - https://unidev.space/
echo  - https://unidev.space/projects/vfs-visa-bot
echo.
echo Проверка соседей:
echo  - https://ai.aliterra.space
echo  - https://web3.aliterra.space
echo  - https://trade.aliterra.space
echo.
pause
