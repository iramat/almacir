# Stop on error
$ErrorActionPreference = "Stop"

Write-Host "▶ Generating site with Hugo..."
hugo --minify

Write-Host "▶ Removing remote gh-pages branch (if it exists)..."
git push origin --delete gh-pages 2>$null

Write-Host "▶ Entering public/ folder..."
Set-Location public

Write-Host "▶ Initializing temporary Git repo..."
git init
git add -A
git commit -m "Deploy Hugo site"

Write-Host "▶ Connecting to remote..."
git branch -M gh-pages
git remote add origin https://github.com/iramat/almacir.git

Write-Host "▶ Pushing to gh-pages..."
git push -u origin gh-pages --force

Write-Host "▶ Cleaning up..."
Set-Location ..
Remove-Item -Recurse -Force public\.git

Write-Host "✅ Deployment complete!"
