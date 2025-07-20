@echo off
echo 🔧 Iniciando o build do React...
call npm run build

echo 🧹 Limpando a pasta /docs...
rmdir /s /q docs
mkdir docs

echo 📁 Copiando arquivos da pasta build/ para docs/...
xcopy build\* docs\ /E /I /Y >nul

echo 📦 Commitando e enviando para o GitHub...
git add .
git commit -m "Deploy automático para GitHub Pages"
git push origin main

echo ✅ Deploy concluído com sucesso!
pause
