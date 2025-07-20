#!/bin/bash

# InspectX Deployment Script for cPanel
# This script builds the React app and prepares it for cPanel deployment

echo "🚀 Starting InspectX deployment process..."

# Step 1: Install dependencies
echo "📦 Installing dependencies..."
npm install

# Step 2: Build the production version
echo "🏗️ Building production version..."
npm run build

# Step 3: Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo "📁 Build files are ready in the 'build' directory"
    echo ""
    echo "🔧 Next steps for cPanel deployment:"
    echo "1. Commit and push your changes to your Git repository"
    echo "2. In cPanel, go to Git Version Control"
    echo "3. Pull the latest changes"
    echo "4. The .cpanel.yml file will automatically deploy the build files"
    echo ""
    echo "📋 Deployment checklist:"
    echo "- ✓ .cpanel.yml file created"
    echo "- ✓ Build files generated"
    echo "- ✓ Ready for Git deployment"
else
    echo "❌ Build failed! Please check the errors above."
    exit 1
fi
