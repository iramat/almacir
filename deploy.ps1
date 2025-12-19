# Script de déploiement Hugo pour almacir

Write-Host "--- 1. Nettoyage et Préparation ---" -ForegroundColor Cyan
# Supprime le contenu actuel de public pour éviter les fichiers fantômes
if (Test-Path public) { Remove-Item -Recurse -Force public\* }

Write-Host "--- 2. Génération du site avec Hugo ---" -ForegroundColor Cyan
hugo --minify

Write-Host "--- 3. Déploiement vers la branche gh-pages ---" -ForegroundColor Cyan
cd public

# On force l'ajout car le .gitignore parent ignore souvent le dossier 'public'
git add -A
$commitMessage = "Site mis à jour le $(Get-Date -Format 'yyyy-MM-dd HH:mm')"
git commit -m $commitMessage
git push origin gh-pages

cd ..

Write-Host "--- Terminé ! Le site est en ligne. ---" -ForegroundColor Green
