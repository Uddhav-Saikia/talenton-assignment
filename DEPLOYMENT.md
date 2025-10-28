# Deployment Guide

**Project:** E-Commerce Web Application  
**Framework:** Next.js 14+  
**Date:** October 28, 2025

---

## Quick Start (Local Development)

```bash
# Clone the repository
git clone https://github.com/Uddhav-Saikia/talenton-assignment.git
cd talenton-assignment

# Install dependencies
npm install

# Run development server
npm run dev

# Open browser to http://localhost:3000
```

---

## Vercel Deployment (Recommended)

### Step 1: Prepare Repository

Ensure your code is pushed to GitHub:
```bash
git add .
git commit -m "Complete e-commerce application"
git push origin main
```

### Step 2: Deploy to Vercel

1. **Go to [Vercel](https://vercel.com)**
2. **Sign in with GitHub**
3. **Click "Add New Project"**
4. **Import your repository:**
   - Select `talenton-assignment` from your repositories
   - Click "Import"

5. **Configure Project:**
   - Framework Preset: **Next.js** (auto-detected)
   - Root Directory: `./` (default)
   - Build Command: `npm run build` (default)
   - Output Directory: `.next` (default)

6. **Add Environment Variables:**
   - Click "Environment Variables"
   - Add: `ADMIN_KEY` = `your-secure-production-key-here`
   - Click "Add"

7. **Deploy:**
   - Click "Deploy"
   - Wait for build to complete (2-3 minutes)
   - Your app is live! 🎉

### Step 3: Get Your Live URL

After deployment:
- Production URL: `https://talenton-assignment-xxx.vercel.app`
- Custom domain (optional): Configure in Vercel settings

### Step 4: Test Your Deployment

Visit all pages:
- Home: `https://your-url.vercel.app/`
- Product: `https://your-url.vercel.app/products/wireless-headphones`
- Dashboard: `https://your-url.vercel.app/dashboard`
- Admin: `https://your-url.vercel.app/admin`
- Recommendations: `https://your-url.vercel.app/recommendations`

---

## Environment Variables

### Development (.env.local)
```env
ADMIN_KEY=admin-secret-key-2025
```

### Production (Vercel Dashboard)
```env
ADMIN_KEY=super-secure-production-key-change-this
```

**Important:** Never commit `.env.local` to Git! It's already in `.gitignore`.

---

## Build & Production

### Build Locally
```bash
npm run build
```

Expected output:
```
Route (app)                    Size     First Load JS
┌ ○ /                         XXX kB         XXX kB
├ ● /products/[slug]          XXX kB         XXX kB
├ ƒ /dashboard                XXX kB         XXX kB
├ ƒ /admin                    XXX kB         XXX kB
└ ○ /recommendations          XXX kB         XXX kB

○  (Static)   prerendered as static content
●  (SSG)      prerendered as static HTML (uses generateStaticParams)
ƒ  (Dynamic)  server-rendered on demand
```

### Run Production Build Locally
```bash
npm start
```

Server runs on `http://localhost:3000`

---

## Alternative Deployments

### Netlify

1. **Connect Repository:**
   - Go to [Netlify](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect to GitHub and select repository

2. **Build Settings:**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Functions directory: (leave empty)

3. **Environment Variables:**
   - Add `ADMIN_KEY` in Netlify dashboard

4. **Deploy:**
   - Click "Deploy site"

### Railway

1. **Create New Project:**
   - Go to [Railway](https://railway.app)
   - Click "New Project" → "Deploy from GitHub repo"

2. **Configure:**
   - Select repository
   - Railway auto-detects Next.js

3. **Environment Variables:**
   - Add `ADMIN_KEY` in Railway variables

4. **Deploy:**
   - Railway automatically deploys on push

### DigitalOcean App Platform

1. **Create App:**
   - Go to DigitalOcean
   - Click "Apps" → "Create App"

2. **Connect GitHub:**
   - Authorize DigitalOcean
   - Select repository

3. **Configure:**
   - Name: `talenton-ecommerce`
   - Region: Choose closest to users
   - Build Command: `npm run build`
   - Run Command: `npm start`

4. **Environment Variables:**
   - Add `ADMIN_KEY`

5. **Deploy:**
   - Click "Create Resources"

---

## Custom Domain Setup (Vercel)

### Add Custom Domain

1. Go to Vercel project settings
2. Click "Domains"
3. Enter your domain (e.g., `shop.example.com`)
4. Click "Add"

### Configure DNS

Add these DNS records at your domain registrar:

**Option 1: CNAME Record (Recommended)**
```
Type: CNAME
Name: shop (or @)
Value: cname.vercel-dns.com
```

**Option 2: A Record**
```
Type: A
Name: @ (or shop)
Value: 76.76.21.21
```

### SSL Certificate

- Vercel automatically provisions SSL
- Your site will be `https://` in 24-48 hours

---

## Database Migration (For Production)

Currently using JSON file. For production, migrate to database:

### MongoDB (Recommended)

1. **Create MongoDB Atlas Account:**
   - Go to [MongoDB Atlas](https://mongodb.com/cloud/atlas)
   - Create free cluster

2. **Get Connection String:**
   ```
   mongodb+srv://username:password@cluster.mongodb.net/ecommerce
   ```

3. **Add to Vercel Environment:**
   ```env
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/ecommerce
   ```

4. **Update Code:**
   - Install: `npm install mongodb`
   - Replace file operations with MongoDB queries

### PostgreSQL (Alternative)

1. **Create Database:**
   - Use [Vercel Postgres](https://vercel.com/storage/postgres)
   - Or [Supabase](https://supabase.com)

2. **Get Connection String:**
   ```
   postgresql://user:password@host:5432/database
   ```

3. **Use Prisma ORM:**
   ```bash
   npm install prisma @prisma/client
   npx prisma init
   ```

---

## Performance Optimization

### Enable Caching

Vercel automatically caches:
- Static pages (SSG)
- ISR pages (with revalidation)
- Static assets

### Image Optimization

Use Next.js Image component:
```tsx
import Image from 'next/image';

<Image 
  src="/product.jpg" 
  alt="Product" 
  width={500} 
  height={500}
/>
```

### Bundle Analysis

```bash
npm install @next/bundle-analyzer
```

Add to `next.config.js`:
```js
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer(nextConfig);
```

Run analysis:
```bash
ANALYZE=true npm run build
```

---

## Monitoring & Analytics

### Vercel Analytics

1. Enable in Vercel dashboard
2. Add to `layout.tsx`:
```tsx
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

### Google Analytics

1. Get tracking ID from Google Analytics
2. Add to environment:
   ```env
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```
3. Install: `npm install @next/third-parties`

---

## Continuous Deployment

### Automatic Deployments

Vercel automatically deploys:
- **Production:** On push to `main` branch
- **Preview:** On pull requests

### Manual Deployment

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

---

## Rollback & Version Control

### Rollback to Previous Version

1. Go to Vercel dashboard
2. Click "Deployments"
3. Find previous successful deployment
4. Click "..." → "Promote to Production"

### Git Tags

```bash
# Tag release
git tag -a v1.0.0 -m "First release"
git push origin v1.0.0

# List tags
git tag
```

---

## Troubleshooting

### Build Fails

**Check:**
- All dependencies installed
- Environment variables set
- TypeScript errors resolved
- Build command is correct

**Solution:**
```bash
# Clean install
rm -rf node_modules .next
npm install
npm run build
```

### ISR Not Working

**Check:**
- `revalidate` is set correctly
- Not using `force-dynamic` on ISR pages
- Cache headers not overriding ISR

### API Routes 404

**Check:**
- Route file is in correct location
- Export name is correct (GET, POST, etc.)
- Dynamic routes have correct brackets `[id]`

---

## Security Checklist

Before deploying to production:

- [ ] Change `ADMIN_KEY` to secure random string
- [ ] Enable HTTPS (automatic on Vercel)
- [ ] Add rate limiting to API routes
- [ ] Validate all user inputs
- [ ] Sanitize data before saving
- [ ] Use environment variables for secrets
- [ ] Enable CORS only for trusted domains
- [ ] Add CSP headers
- [ ] Keep dependencies updated

---

## Maintenance

### Update Dependencies

```bash
# Check outdated packages
npm outdated

# Update all packages
npm update

# Update Next.js
npm install next@latest react@latest react-dom@latest
```

### Monitor Errors

Use Vercel Logs:
1. Go to Vercel dashboard
2. Click "Logs"
3. Filter by errors
4. Set up error alerts

---

## Cost Estimation

### Vercel (Hobby - Free)
- ✅ Perfect for this project
- 100GB bandwidth/month
- Unlimited deployments
- SSL included
- Analytics included

### Vercel (Pro - $20/month)
- 1TB bandwidth
- Team features
- Advanced analytics
- Password protection

### With Database
- MongoDB Atlas: Free tier (512MB)
- Vercel Postgres: $24/month (256MB)
- Supabase: Free tier (500MB)

---

## Support & Resources

- **Next.js Docs:** https://nextjs.org/docs
- **Vercel Docs:** https://vercel.com/docs
- **GitHub Issues:** https://github.com/Uddhav-Saikia/talenton-assignment/issues
- **Discord:** Next.js Discord Server

---

## Post-Deployment Checklist

- [ ] Test all pages on live URL
- [ ] Verify API routes work
- [ ] Test admin authentication
- [ ] Check mobile responsiveness
- [ ] Verify ISR revalidation works
- [ ] Test form submissions
- [ ] Check console for errors
- [ ] Run Lighthouse audit
- [ ] Add live URL to README
- [ ] Share with stakeholders

---

**Live URL After Deployment:**
```
https://talenton-assignment.vercel.app
```

Add this to your README.md after deployment!

---

*Deployment completed successfully! 🚀*
