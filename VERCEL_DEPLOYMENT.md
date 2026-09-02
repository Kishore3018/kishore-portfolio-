# Vercel Deployment Guide

## Automatic Deployment Setup

This portfolio is pre-configured for automatic deployment to Vercel.

### One-Time Setup (Manual - takes 2 minutes)

1. **Go to [vercel.com](https://vercel.com)**
2. **Sign in with GitHub** (authorize if needed)
3. **Click "New Project"**
4. **Select this repository** (`Kishore3018/kishore-portfolio-`)
5. **Click "Import"** - Vercel auto-detects Next.js
6. **Click "Deploy"**

✅ **That's it! Your site is now live!**

---

### Automatic Deployments

Once connected:
- ✅ Every `git push` to `main` → Automatic production deployment
- ✅ Every pull request → Creates preview deployment
- ✅ Changes go live in ~2-3 minutes

---

### Your Live URL

After deployment, you'll get:
- Production: `https://kishore-portfolio-.vercel.app`
- Add custom domain: Go to Vercel Project Settings → Domains

---

### Environment Variables (if needed in future)

Add in Vercel Dashboard:
1. Project Settings → Environment Variables
2. Add key-value pairs
3. Redeploy with "Redeploy" button

---

### Rollback / View Deployments

- Vercel Dashboard → Deployments tab
- Click any deployment to view/rollback
- Check build logs for issues

---

### Disconnect from Vercel

If you want to stop auto-deployments:
1. Vercel Dashboard → Project Settings
2. Click "Git" → Remove connection

---

**Your project is ready! 🚀**
