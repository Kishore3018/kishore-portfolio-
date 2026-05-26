# Deployment Guide

Complete guide for deploying your Kishore S portfolio to production.

## Option 1: Deploy to Vercel (Recommended)

Vercel is the creator of Next.js and offers the best integration and performance.

### Prerequisites
- GitHub account
- Vercel account (free at vercel.com)

### Steps

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Select your GitHub repository
   - Vercel will auto-detect Next.js
   - Click "Deploy"

3. **Custom Domain (Optional)**
   - Go to project Settings → Domains
   - Add your custom domain
   - Update DNS records following Vercel's instructions

### Environment Variables
1. Go to Settings → Environment Variables
2. Add any variables from `.env.example`
3. Redeploy after adding variables

## Option 2: Deploy to Netlify

### Steps

1. **Build Locally**
   ```bash
   npm run build
   ```

2. **Connect to Netlify**
   - Create a `netlify.toml` in root:
   ```toml
   [build]
   command = "npm run build"
   functions = "netlify/functions"
   
   [build.environment]
   NODE_VERSION = "18"
   ```

3. **Deploy**
   - Drag and drop the `.next` folder to Netlify
   - Or connect GitHub repository directly

## Option 3: Deploy to Railway

### Steps

1. **Create Railway Account**
   - Go to [railway.app](https://railway.app)
   - Sign up with GitHub

2. **New Project**
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose your repository

3. **Configure**
   - Set NODE_ENV to `production`
   - Vercel should auto-detect Next.js
   - Click Deploy

## Option 4: Deploy to AWS Amplify

### Steps

1. **Connect Repository**
   - Go to AWS Amplify
   - Connect your GitHub repository
   - Select branch

2. **Build Settings**
   - Framework: Next.js
   - Build command: `npm run build`
   - Start command: `npm start`

3. **Deploy**
   - Amplify will handle deployment automatically
   - Get a `.amplifyapp.com` domain or add custom domain

## Option 5: Self-Hosted (VPS/Server)

### Prerequisites
- VPS (DigitalOcean, Linode, AWS EC2, etc.)
- SSH access to server
- Node.js 18+ installed

### Steps

1. **SSH into Server**
   ```bash
   ssh user@your-server.com
   ```

2. **Clone Repository**
   ```bash
   git clone https://github.com/your-username/portfolio.git
   cd portfolio
   ```

3. **Install Dependencies**
   ```bash
   npm install
   npm run build
   ```

4. **Start Server**
   ```bash
   npm start
   ```

5. **Keep Running with PM2**
   ```bash
   npm install -g pm2
   pm2 start "npm start" --name "portfolio"
   pm2 startup
   pm2 save
   ```

6. **Setup Nginx Reverse Proxy**
   ```nginx
   server {
       listen 80;
       server_name your-domain.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

7. **Setup SSL with Let's Encrypt**
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d your-domain.com
   ```

## Post-Deployment Checklist

- [ ] Test all links and navigation
- [ ] Verify mobile responsiveness
- [ ] Check form submission (contact section)
- [ ] Test social media links
- [ ] Verify resume download works
- [ ] Check SEO metadata
- [ ] Test in different browsers
- [ ] Setup analytics (Google Analytics)
- [ ] Configure monitoring
- [ ] Setup backups
- [ ] Test performance with Lighthouse

## Analytics Setup

### Google Analytics

1. Go to [google.com/analytics](https://google.com/analytics)
2. Create a property
3. Get measurement ID
4. Add to environment variables:
   ```
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```

### Vercel Analytics

1. Go to project settings
2. Enable Web Analytics
3. Data available in Vercel Dashboard

## Performance Optimization

After deployment:

1. **Monitor Core Web Vitals**
   - Use Vercel Analytics Dashboard
   - Check Google PageSpeed Insights

2. **Optimize Images**
   - Ensure all project images are optimized
   - Use Next.js Image component

3. **Enable Caching**
   - Browser caching is auto-configured
   - CDN caching handled by platform

## Troubleshooting

### Build Fails
```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### Port Already in Use
```bash
# Find process using port 3000
lsof -i :3000
# Kill process
kill -9 <PID>
```

### Environment Variables Not Working
- Ensure variables are in `.env.local`
- Prefix with `NEXT_PUBLIC_` if needed on client
- Restart dev server after adding

### Memory Issues
- Increase Node memory: `NODE_OPTIONS=--max_old_space_size=4096 npm run build`

## Monitoring & Maintenance

### Regular Tasks
- Weekly: Check if site is up
- Monthly: Update content and projects
- Quarterly: Review analytics
- Annually: Update dependencies

### Update Dependencies
```bash
npm update
npm audit
npm audit fix
```

---

Need help? Check [Next.js Deployment Docs](https://nextjs.org/docs/deployment)
