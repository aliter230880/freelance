#!/bin/bash
# Обновление секции unidev.space в Caddyfile

# Бэкап
cp /etc/caddy/Caddyfile /etc/caddy/Caddyfile.backup_$(date +%s)

# Удаляем старую секцию unidev.space
sed -i '/^unidev.space,/,/^}/d' /etc/caddy/Caddyfile

# Добавляем новую секцию в конец
cat >> /etc/caddy/Caddyfile << 'EOF'

unidev.space, www.unidev.space {
    encode gzip zstd
    
    root * /var/www/unidev.space
    
    # React Router (SPA)
    try_files {path} /index.html
    file_server
    
    header {
        Strict-Transport-Security "max-age=31536000; includeSubDomains"
        X-Content-Type-Options "nosniff"
        Referrer-Policy "strict-origin-when-cross-origin"
        Cache-Control "public, max-age=3600"
        -Server
    }
}
EOF

# Перезагружаем Caddy
caddy reload --config /etc/caddy/Caddyfile

echo "✅ Caddyfile updated and reloaded"
