@echo off
chcp 65001 > nul
echo.
echo ═══════════════════════════════════════════════════════════
echo   🚀 DEPLOY UNIDEV.SPACE (БЕЗОПАСНЫЙ)
echo ═══════════════════════════════════════════════════════════
echo.
echo ⚠️  ВНИМАНИЕ: Скрипт НЕ трогает:
echo    - /var/www/unidev.space/zoho-books/
echo    - Другие проекты на VPS (ai.aliterra.space, web3.aliterra.space и т.д.)
echo.

set VPS_HOST=168.222.143.103
set VPS_USER=root
set VPS_PATH=/var/www/unidev.space
set BACKUP_NAME=backup_unidev_%date:~-4,4%%date:~-7,2%%date:~-10,2%_%time:~0,2%%time:~3,2%%time:~6,2%
set BACKUP_NAME=%BACKUP_NAME: =0%

echo ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
echo Шаг 1/5: Проверка локальной сборки
echo ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

if not exist "dist\index.html" (
    echo ❌ ОШИБКА: Папка dist\ не найдена!
    echo.
    echo Выполните сборку:
    echo   npm run build
    echo.
    pause
    exit /b 1
)

echo ✅ Локальная сборка найдена: dist\

echo.
echo ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
echo Шаг 2/5: Создание бэкапа на VPS
echo ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

echo Бэкап: ~/%BACKUP_NAME%.tar.gz
ssh %VPS_USER%@%VPS_HOST% "cd /var/www && tar -czf ~/%BACKUP_NAME%.tar.gz unidev.space"

if errorlevel 1 (
    echo ❌ ОШИБКА при создании бэкапа!
    pause
    exit /b 1
)

echo ✅ Бэкап создан

echo.
echo ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
echo Шаг 3/5: Очистка старых файлов (кроме zoho-books)
echo ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

ssh %VPS_USER%@%VPS_HOST% "cd %VPS_PATH% && find . -maxdepth 1 ! -name '.' ! -name 'zoho-books' -exec rm -rf {} +"

if errorlevel 1 (
    echo ❌ ОШИБКА при очистке!
    echo.
    echo Восстановить из бэкапа?
    pause
    ssh %VPS_USER%@%VPS_HOST% "cd /var/www && rm -rf unidev.space && tar -xzf ~/%BACKUP_NAME%.tar.gz"
    exit /b 1
)

echo ✅ Старые файлы удалены (zoho-books сохранён)

echo.
echo ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
echo Шаг 4/5: Загрузка новых файлов
echo ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

scp -r dist\* %VPS_USER%@%VPS_HOST%:%VPS_PATH%/

if errorlevel 1 (
    echo ❌ ОШИБКА при загрузке файлов!
    echo.
    echo Восстановить из бэкапа?
    pause
    ssh %VPS_USER%@%VPS_HOST% "cd /var/www && rm -rf unidev.space && tar -xzf ~/%BACKUP_NAME%.tar.gz"
    exit /b 1
)

echo ✅ Файлы загружены

echo.
echo ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
echo Шаг 5/5: Проверка прав доступа
echo ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

ssh %VPS_USER%@%VPS_HOST% "chown -R www-data:www-data %VPS_PATH% && chmod -R 755 %VPS_PATH%"

if errorlevel 1 (
    echo ⚠️  ВНИМАНИЕ: Не удалось установить права доступа
    echo    Сайт может не работать!
    pause
) else (
    echo ✅ Права доступа настроены
)

echo.
echo ═══════════════════════════════════════════════════════════
echo   ✅ ДЕПЛОЙ ЗАВЕРШЁН!
echo ═══════════════════════════════════════════════════════════
echo.
echo Проверьте сайт:
echo   🌐 https://unidev.space
echo   🌐 https://unidev.space/projects/blockchain-id
echo   🌐 https://unidev.space/zoho-books/ (должен работать!)
echo.
echo Бэкап сохранён в: ~/%BACKUP_NAME%.tar.gz
echo.
echo Для отката выполните:
echo   ssh %VPS_USER%@%VPS_HOST% "cd /var/www && rm -rf unidev.space && tar -xzf ~/%BACKUP_NAME%.tar.gz"
echo.
pause
