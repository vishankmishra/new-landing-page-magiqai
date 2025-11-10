#!/bin/bash

# Deployment Script for MagiqAI Landing Page
# This script helps set up Git and prepare for Vercel deployment

echo "🚀 MagiqAI Landing Page - Deployment Setup"
echo "=========================================="
echo ""

# Step 1: Fix Git ownership (WSL)
echo "📝 Step 1: Fixing Git ownership issue..."
git config --global --add safe.directory '%(prefix)///wsl.localhost/Ubuntu/home/vishank/new-landing-page-magiqai' 2>/dev/null || true
echo "✅ Git ownership configured"
echo ""

# Step 2: Check Git status
echo "📝 Step 2: Checking Git status..."
if ! git rev-parse --git-dir > /dev/null 2>&1; then
    echo "⚠️  Git not initialized. Initializing..."
    git init
    echo "✅ Git initialized"
else
    echo "✅ Git repository already initialized"
fi
echo ""

# Step 3: Check for uncommitted changes
echo "📝 Step 3: Checking for changes..."
if [ -n "$(git status --porcelain)" ]; then
    echo "📦 Staging all files..."
    git add .
    echo "✅ Files staged"
    
    echo ""
    echo "💬 Creating commit..."
    git commit -m "Initial commit: MagiqAI landing page

- Next.js 14 with App Router
- Tailwind CSS styling
- Framer Motion animations
- Responsive design
- Production-ready components"
    echo "✅ Commit created"
else
    echo "✅ No changes to commit"
fi
echo ""

# Step 4: Check for remote
echo "📝 Step 4: Checking for remote repository..."
if git remote | grep -q "origin"; then
    echo "✅ Remote 'origin' already exists"
    git remote -v
else
    echo "⚠️  No remote repository configured"
    echo ""
    echo "📋 Next steps:"
    echo "1. Create a repository on GitHub: https://github.com/new"
    echo "2. Then run:"
    echo "   git remote add origin https://github.com/YOUR_USERNAME/new-landing-page-magiqai.git"
    echo "   git branch -M main"
    echo "   git push -u origin main"
fi
echo ""

# Step 5: Check current branch
echo "📝 Step 5: Current branch information..."
CURRENT_BRANCH=$(git branch --show-current 2>/dev/null || echo "none")
echo "Current branch: $CURRENT_BRANCH"
echo ""

echo "✅ Setup complete!"
echo ""
echo "📋 Next Steps:"
echo "1. Create GitHub repository at: https://github.com/new"
echo "2. Add remote: git remote add origin <your-repo-url>"
echo "3. Push: git push -u origin main"
echo "4. Deploy to Vercel: https://vercel.com/dashboard"
echo ""
echo "📖 See DEPLOYMENT_GUIDE.md for detailed instructions"

