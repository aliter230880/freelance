@echo off
echo Fixing routing...
echo.

REM Upload fix script
(
echo #!/bin/bash
echo cp /etc/caddy/Caddyfile /etc/caddy/Caddyfile.bak.fix
echo sed -i "/^unidev.space {/,/^}/d" /etc/caddy/Caddyfile
echo cat ^>^> /etc/caddy/Caddyfile ^<^< 'EOFmarker'
echo.
echo unidev.space {
echo     root * /var/www/unidev.space
echo     encode gzip
echo     try_files {path} /index.html
echo     file_server
echo }
echo EOFmarker
echo caddy validate --config /etc/caddy/Caddyfile ^&^& systemctl reload caddy
) > %TEMP%\fix.sh

pscp -batch -pw "ShAVSu2ZM57U7jFB" %TEMP%\fix.sh root@168.222.143.103:/tmp/fix.sh
if errorlevel 1 goto error

plink -ssh -batch -pw "ShAVSu2ZM57U7jFB" root@168.222.143.103 "chmod +x /tmp/fix.sh && bash /tmp/fix.sh"
if errorlevel 1 goto error

del %TEMP%\fix.sh
echo.
echo SUCCESS! Check: https://unidev.space/projects/vfs-visa-bot
echo.
pause
exit /b 0

:error
del %TEMP%\fix.sh 2>nul
echo.
echo ERROR! Disable VPN and try again!
echo.
pause
exit /b 1
