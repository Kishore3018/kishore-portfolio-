# 🚀 Automatic Deployment Setup Guide

## What's Been Set Up

A GitHub Actions workflow has been created that will **automatically deploy** your portfolio to Vercel every time you push code.

## ⚙️ Required Setup (One-Time Only)

### Step 1: Get Vercel Tokens

1. **Create Vercel Account**
   - Go to https://vercel.com
   - Sign in with GitHub
   - Click "Import Project"
   - Select `kishore-portfolio-`
   - Click "Deploy" (this creates your project)

2. **Get VERCEL_TOKEN**
   - Go to https://vercel.com/account/tokens
   - Click "Create New Token"
   - Name: `GITHUB_DEPLOYMENT`
   - Copy the token

3. **Get VERCEL_ORG_ID & VERCEL_PROJECT_ID**
   - Go to https://vercel.com/dashboard
   - Click on your `kishore-portfolio-` project
   - Go to **Settings** → **General**
   - Copy:
     - **Project ID**
     - **Team ID** (or use your username)

### Step 2: Add GitHub Secrets

1. Go to your GitHub repo: https://github.com/Kishore3018/kishore-portfolio-
2. Click **Settings** → **Secrets and variables** → **Actions**
3. Click **"New repository secret"** and add:

| Secret Name | Value |
|-------------|-------|
| `VERCEL_TOKEN` | Your token from Step 1.2 |
| `VERCEL_ORG_ID` | Your Team ID from Step 1.3 |
| `VERCEL_PROJECT_ID` | Your Project ID from Step 1.3 |

### Step 3: Test the Workflow

Make any small change and push:
```bash
git add .
git commit -m "Test: Trigger automatic deployment"
git push origin main
```

Check GitHub Actions tab to see deployment progress! ✅

## ✨ Now You Have:

✅ **Automatic deployment** on every push
✅ **Pull request previews** for testing changes
✅ **Zero manual deployment steps**
✅ **Production site always in sync** with your code

## 📊 Monitor Deployments

- **GitHub**: https://github.com/Kishore3018/kishore-portfolio-/actions
- **Vercel**: https://vercel.com/dashboard

---

**Your portfolio will automatically deploy in 2-3 minutes after each push! 🎉**
