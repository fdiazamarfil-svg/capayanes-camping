#!/bin/bash

echo "🚀 Preparando build para producción..."

cd /app/frontend

# Instalar dependencias
echo "📦 Instalando dependencias..."
yarn install

# Build de producción
echo "🏗️  Compilando React app..."
yarn build

echo "✅ Build completado!"
echo ""
echo "📁 Archivos listos en: /app/frontend/build"
echo ""
echo "📤 Para deployar en Netlify:"
echo "   1. Sube el contenido de /app/frontend/build a Netlify"
echo "   2. O conecta tu repositorio de GitHub y Netlify lo hará automáticamente"
echo ""
echo "📖 Ver /app/DEPLOY_NETLIFY.md para instrucciones completas"
