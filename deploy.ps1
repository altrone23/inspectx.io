# InspectX Deployment Script for cPanel (PowerShell)
# This script builds the React app and prepares it for cPanel deployment

Write-Host "🚀 Starting InspectX deployment process..." -ForegroundColor Green

# Step 1: Install dependencies
Write-Host "📦 Installing dependencies..." -ForegroundColor Yellow
npm install

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Failed to install dependencies!" -ForegroundColor Red
    exit 1
}

# Step 2: Build the production version
Write-Host "🏗️ Building production version..." -ForegroundColor Yellow
npm run build

# Step 3: Check if build was successful
if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Build successful!" -ForegroundColor Green
    Write-Host "📁 Build files are ready in the 'build' directory" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "🔧 Next steps for cPanel deployment:" -ForegroundColor Yellow
    Write-Host "1. Commit and push your changes to your Git repository" -ForegroundColor White
    Write-Host "2. In cPanel, go to Git Version Control" -ForegroundColor White
    Write-Host "3. Pull the latest changes" -ForegroundColor White
    Write-Host "4. The .cpanel.yml file will automatically deploy the build files" -ForegroundColor White
    Write-Host ""
    Write-Host "📋 Deployment checklist:" -ForegroundColor Cyan
    Write-Host "- ✓ .cpanel.yml file created" -ForegroundColor Green
    Write-Host "- ✓ Build files generated" -ForegroundColor Green
    Write-Host "- ✓ Ready for Git deployment" -ForegroundColor Green
} else {
    Write-Host "❌ Build failed! Please check the errors above." -ForegroundColor Red
    exit 1
}
