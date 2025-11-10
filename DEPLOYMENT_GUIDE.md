# Deployment Guide: Vercel + GitHub

This guide will help you deploy your MagiqAI landing page to Vercel and connect it to a GitHub repository.

## Prerequisites

- GitHub account
- Vercel account (sign up at https://vercel.com)
- Git installed on your system

## Step 1: Fix Git Ownership Issue (WSL)

If you're using WSL, you may need to fix the git ownership issue first:

```bash
git config --global --add safe.directory '%(prefix)///wsl.localhost/Ubuntu/home/vishank/new-landing-page-magiqai'
```

Or alternatively:
```bash
git config --global --add safe.directory '//wsl.localhost/Ubuntu/home/vishank/new-landing-page-magiqai'
```

## Step 2: Initialize Git Repository (if needed)

Check if git is already initialized:
```bash
git status
```

If not initialized, run:
```bash
git init
```

## Step 3: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `new-landing-page-magiqai` (or your preferred name)
3. Choose **Public** or **Private**
4. **DO NOT** initialize with README, .gitignore, or license (we already have these)
5. Click **Create repository**

## Step 4: Add All Files and Commit

```bash
# Stage all files
git add .

# Create initial commit
git commit -m "Initial commit: MagiqAI landing page

- Next.js 14 with App Router
- Tailwind CSS styling
- Framer Motion animations
- Responsive design
- Production-ready components"
```

## Step 5: Connect to GitHub and Push

Replace `YOUR_USERNAME` with your GitHub username:

```bash
# Add remote repository
git remote add origin https://github.com/YOUR_USERNAME/new-landing-page-magiqai.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

If you encounter authentication issues, you may need to:
- Use a Personal Access Token instead of password
- Or set up SSH keys

## Step 6: Deploy to Vercel

### Option A: Deploy via Vercel Dashboard (Recommended)

1. Go to https://vercel.com/dashboard
2. Click **Add New Project**
3. Click **Import Git Repository**
4. Select your GitHub account if prompted
5. Find and select `new-landing-page-magiqai` repository
6. Click **Import**

### Vercel Project Settings

Vercel will auto-detect Next.js settings, but verify:
- **Framework Preset**: Next.js
- **Root Directory**: `./` (default)
- **Build Command**: `npm run build` (auto-detected)
- **Output Directory**: `.next` (auto-detected)
- **Install Command**: `npm install` (auto-detected)

7. Click **Deploy**

### Option B: Deploy via Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Login to Vercel
vercel login

# Deploy (from project root)
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? Select your account
# - Link to existing project? No (for first deployment)
# - Project name? new-landing-page-magiqai
# - Directory? ./
# - Override settings? No
```

## Step 7: Connect Repository in Vercel (After Deployment)

If you deployed via CLI first, connect the GitHub repo:

1. Go to your project in Vercel dashboard
2. Click **Settings** tab
3. Click **Git** in the sidebar
4. Click **Connect Git Repository**
5. Select your GitHub account
6. Choose `new-landing-page-magiqai` repository
7. Click **Connect**

## Step 8: Configure Automatic Deployments

Once connected, Vercel will automatically:
- Deploy on every push to `main` branch
- Create preview deployments for pull requests
- Show deployment status in GitHub

## Step 9: Custom Domain (Optional)

1. In Vercel project settings, go to **Domains**
2. Add your custom domain
3. Follow DNS configuration instructions

## Troubleshooting

### Git Authentication Issues

If `git push` fails:
- Use Personal Access Token: https://github.com/settings/tokens
- Or set up SSH: https://docs.github.com/en/authentication/connecting-to-github-with-ssh

### Build Errors on Vercel

Common issues:
- Check Node.js version (Vercel uses Node 18.x by default)
- Ensure all dependencies are in `package.json`
- Check build logs in Vercel dashboard

### Environment Variables

If you need environment variables:
1. Go to Vercel project **Settings** → **Environment Variables**
2. Add your variables
3. Redeploy

## Quick Reference Commands

```bash
# Git workflow
git add .
git commit -m "Your commit message"
git push origin main

# Vercel CLI
vercel              # Deploy to preview
vercel --prod       # Deploy to production
vercel env add      # Add environment variable
```

## Post-Deployment Checklist

- [ ] Repository is pushed to GitHub
- [ ] Vercel deployment is successful
- [ ] GitHub repository is connected in Vercel
- [ ] Automatic deployments are working
- [ ] Site is accessible at vercel.app domain
- [ ] All images and assets load correctly
- [ ] Mobile responsiveness works
- [ ] Custom domain is configured (if needed)

## Next Steps

After deployment:
1. Update content in `data/content.ts` with real copy
2. Add actual logo and images to `public/images/`
3. Configure analytics (Google Analytics, etc.)
4. Set up monitoring and error tracking
5. Optimize images and performance
6. Add SEO meta tags if needed

---

**Need Help?**
- Vercel Docs: https://vercel.com/docs
- GitHub Docs: https://docs.github.com
- Next.js Deployment: https://nextjs.org/docs/deployment

