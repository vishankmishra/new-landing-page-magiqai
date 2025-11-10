#!/bin/bash

# GitHub Setup Script for MagiqAI Landing Page
# Run this script to prepare and push to GitHub

echo "🚀 Setting up GitHub repository..."
echo ""

# Step 1: Add Zone.Identifier to gitignore (already done)
echo "✅ .gitignore updated"

# Step 2: Stage all files
echo "📦 Staging all files..."
git add .
echo "✅ Files staged"
echo ""

# Step 3: Create initial commit
echo "💬 Creating initial commit..."
git commit -m "Initial commit: MagiqAI landing page

- Next.js 14 with App Router
- Tailwind CSS styling
- Framer Motion animations
- Responsive design
- Production-ready components
- Multiple redesign variants
- Comprehensive documentation"
echo "✅ Commit created"
echo ""

# Step 4: Show status
echo "📋 Current status:"
git status
echo ""

echo "✅ Ready to push to GitHub!"
echo ""
echo "📝 Next steps:"
echo "1. Create a new repository on GitHub: https://github.com/new"
echo "   - Name: new-landing-page-magiqai"
echo "   - Choose Public or Private"
echo "   - DO NOT initialize with README, .gitignore, or license"
echo ""
echo "2. After creating the repo, run these commands (replace YOUR_USERNAME):"
echo "   git remote add origin https://github.com/YOUR_USERNAME/new-landing-page-magiqai.git"
echo "   git branch -M main"
echo "   git push -u origin main"
echo ""
echo "3. Then deploy to Vercel: https://vercel.com/dashboard"

