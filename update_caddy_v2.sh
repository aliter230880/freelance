#!/bin/bash
# Обновление секции unidev.space в Caddyfile с правильной обработкой /zoho-books/

# Бэкап
cp /etc/caddy/Caddyfile /etc/caddy/Caddyfile.backup_$(date +%s)

# Удаляем старую секцию unidev.space
sed -i '/^unidev.space,/,/^}/d' /etc/caddy/Caddyfile

# Добавляем новую секцию с правильной обработкой
cat >> /etc/caddy/Caddyfile << 'EOF'

unidev.space, www.unidev.space {
    encode gzip zstd
    
    root * /var/www/unidev.space
    
    # Zoho Books проект - отдельная обработка
    handle /zoho-books/* {
        root * /var/www/unidev.space/zoho-books
        rewrite * /index.html
        file_server
    }
    
    # React Router (SPA) для остальных путей
    handle {
        try_files {path} /index.html
        file_server
    }
    
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

echo "✅ Caddyfile updated with /zoho-books/ handling"
