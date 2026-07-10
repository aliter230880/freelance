@echo off
echo ===================================
echo Deploying Blockchain ID Demo
echo ===================================

REM Собираем React проект
echo Building React app...
cd /d E:\AI\AI_folder\unidev-portfolio
call npm run build

REM Копируем демо в dist
echo Copying demo files...
xcopy /E /I /Y E:\AI\AI_folder\blockchain-id-demo E:\AI\AI_folder\unidev-portfolio\dist\demo\blockchain-id

REM Читаем пароль
set /p VPS_PASS=<E:\AI\AI_folder\character-platform\deploy\vps_pass.txt

REM Создаём архив
echo Creating archive...
tar -czf unidev-full.tar.gz -C dist .

REM Загружаем на VPS
echo Uploading to VPS...
pscp -pw %VPS_PASS% unidev-full.tar.gz root@168.222.143.103:/tmp/

REM Разворачиваем на VPS
echo Deploying on VPS...
plink -pw %VPS_PASS% root@168.222.143.103 "cd /var/www/unidev.space && rm -rf * && tar -xzf /tmp/unidev-full.tar.gz && rm /tmp/unidev-full.tar.gz && systemctl reload caddy"

echo ===================================
echo Deployment complete!
echo Demo: https://unidev.space/demo/blockchain-id/
echo ===================================
pause
