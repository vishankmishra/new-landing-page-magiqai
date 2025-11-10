# Quick Deploy Checklist

Follow these steps in order to deploy your project to GitHub and Vercel.

## ⚡ Quick Start (Copy & Paste Commands)

### 1. Fix Git Ownership (WSL - Run this first)
```bash
git config --global --add safe.directory '//wsl.localhost/Ubuntu/home/vishank/new-landing-page-magiqai'
```

### 2. Check Git Status
```bash
git status
```

### 3. Stage and Commit (if needed)
```bash
git add .
git commit -m "Initial commit: MagiqAI landing page"
```

### 4. Create GitHub Repository
- Go to: https://github.com/new
- Repository name: `new-landing-page-magiqai`
- Choose Public or Private
- **Don't** check any boxes (no README, .gitignore, license)
- Click **Create repository**

### 5. Connect and Push to GitHub
Replace `YOUR_USERNAME` with your actual GitHub username:

```bash
git remote add origin https://github.com/YOUR_USERNAME/new-landing-page-magiqai.git
git branch -M main
git push -u origin main
```

**If you get authentication errors:**
- Use a Personal Access Token: https://github.com/settings/tokens
- Generate token with `repo` permissions
- Use token as password when pushing

### 6. Deploy to Vercel

**Option A: Via Dashboard (Easiest)**
1. Go to: https://vercel.com/dashboard
2. Click **Add New Project**
3. Click **Import Git Repository**
4. Authorize GitHub if needed
5. Select `new-landing-page-magiqai`
6. Click **Import**
7. Click **Deploy** (settings are auto-detected)

**Option B: Via CLI**
```bash
npm i -g vercel
vercel login
vercel
```

### 7. Connect Repository in Vercel (if used CLI)
1. Go to project in Vercel dashboard
2. Settings → Git → Connect Git Repository
3. Select your GitHub repo
4. Click Connect

## ✅ Verification

After deployment:
- [ ] Code is on GitHub
- [ ] Vercel deployment succeeded
- [ ] Site is live at `your-project.vercel.app`
- [ ] GitHub repo is connected in Vercel settings
- [ ] Future pushes auto-deploy

## 🆘 Troubleshooting

**Git push fails?**
- Use Personal Access Token instead of password
- Or set up SSH keys

**Vercel build fails?**
- Check build logs in Vercel dashboard
- Ensure `package.json` has all dependencies
- Verify Node.js version (Vercel uses 18.x)

**Need help?**
- See `DEPLOYMENT_GUIDE.md` for detailed instructions

