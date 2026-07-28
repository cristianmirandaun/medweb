#!/bin/bash
# Auto-deploy: commit nuevo contenido y push a GitHub → Cloudflare Pages despliega automático
cd "$(dirname "$0")"
git add src/content/
CHANGED=$(git diff --cached --name-only)
if [ -z "$CHANGED" ]; then
  echo "   ℹ️  Sin contenido nuevo para desplegar"
  exit 0
fi
DATE=$(date +%Y-%m-%d)
git commit -m "content: artículos del $DATE"
git push origin main
echo "   ✅ Desplegado en Cloudflare Pages"
