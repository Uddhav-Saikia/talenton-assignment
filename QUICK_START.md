# Quick Start Guide

## Installation (2 minutes)

```bash
# Clone the repository
git clone https://github.com/Uddhav-Saikia/talenton-assignment.git
cd talenton-assignment

# Install dependencies
npm install

# Start development server
npm run dev
```

Open browser to **http://localhost:3000** ✨

---

## Test All Features (5 minutes)

### 1. Home Page (SSG)
- Visit: http://localhost:3000/
- Try search: Type "wireless"
- Try filter: Select "Electronics"
- Click any product card

### 2. Product Detail (ISR)
- Visit: http://localhost:3000/products/wireless-headphones
- Note the "Last Updated" timestamp
- Check stock status and pricing

### 3. Dashboard (SSR)
- Visit: http://localhost:3000/dashboard
- View real-time statistics
- Check low stock alerts
- Refresh to see latest data

### 4. Admin Panel (CSR)
- Visit: http://localhost:3000/admin
- Click "+ Add New Product"
- Fill form:
  - Name: Test Product
  - Slug: test-product
  - Price: 99.99
  - Category: Electronics
  - Inventory: 25
  - Description: Test description
- Click "Add Product"
- See success message
- Click "Edit" on any product
- Change inventory to 5
- Click "Update Product"

### 5. Recommendations (RSC)
- Visit: http://localhost:3000/recommendations
- Find "Limited Stock" section
- Click "Add to Wishlist" on any product
- See button change to "In Wishlist"

---

## Test API Routes (2 minutes)

### Get All Products
```bash
curl http://localhost:3000/api/products
```

### Get Single Product
```bash
curl http://localhost:3000/api/products/wireless-headphones
```

### Add Product (Admin)
```bash
curl -X POST http://localhost:3000/api/products \
  -H "Content-Type: application/json" \
  -H "x-admin-key: admin-secret-key-2025" \
  -d '{
    "name": "API Test Product",
    "slug": "api-test-product",
    "description": "Created via API",
    "price": 79.99,
    "category": "Electronics",
    "inventory": 15
  }'
```

### Update Product (Admin)
```bash
curl -X PUT http://localhost:3000/api/products/update/1 \
  -H "Content-Type: application/json" \
  -H "x-admin-key: admin-secret-key-2025" \
  -d '{"price": 279.99, "inventory": 35}'
```

---

## Build for Production (1 minute)

```bash
npm run build
```

Expected output:
```
✓ Compiled successfully
✓ Finished TypeScript
✓ Collecting page data
✓ Generating static pages (17/17)
✓ Finalizing page optimization

Route (app)                    Revalidate  Expire
┌ ○ /
├ ● /products/[slug]           1m          1y
├ ƒ /dashboard
├ ƒ /admin
└ ○ /recommendations
```

---

## Deploy to Vercel (3 minutes)

1. Push to GitHub:
```bash
git add .
git commit -m "Complete e-commerce application"
git push origin main
```

2. Go to [vercel.com](https://vercel.com)

3. Click "Import Project"

4. Select your repository

5. Add Environment Variable:
   - Key: `ADMIN_KEY`
   - Value: `your-production-key`

6. Click "Deploy"

7. Wait ~2 minutes

8. Your app is live! 🎉

---

## Project Structure Overview

```
talenton-assignment/
├── src/
│   ├── app/                # Pages & API Routes
│   │   ├── page.tsx        # Home (SSG)
│   │   ├── products/       # Product pages (ISR)
│   │   ├── dashboard/      # Dashboard (SSR)
│   │   ├── admin/          # Admin (CSR)
│   │   ├── recommendations/# Recommendations (RSC)
│   │   └── api/            # API endpoints
│   ├── components/         # React components
│   ├── lib/                # Data utilities
│   └── types/              # TypeScript types
├── data/
│   └── products.json       # Product database
├── README.md               # Main docs
├── TECHNICAL_REPORT.md     # Technical details
├── DEPLOYMENT.md           # Deploy guide
├── TESTING.md              # Test guide
└── package.json            # Dependencies
```

---

## Understanding Rendering Strategies

### SSG (Home Page)
- ✅ Fastest page load
- ✅ Built at compile time
- ✅ Cached on CDN
- ❌ Requires rebuild for updates

### ISR (Product Pages)
- ✅ Fast like SSG
- ✅ Auto-updates every 60s
- ✅ Best of both worlds
- ❌ First user after revalidation sees stale data briefly

### SSR (Dashboard)
- ✅ Always fresh data
- ✅ Real-time accuracy
- ❌ Slower than static
- ❌ Server load per request

### CSR (Admin)
- ✅ Highly interactive
- ✅ Immediate feedback
- ❌ Slower initial load
- ❌ No SEO benefits

### RSC (Recommendations)
- ✅ Server + client benefits
- ✅ Smaller JS bundle
- ✅ Fast + interactive
- ✅ Modern Next.js feature

---

## Common Commands

```bash
# Development
npm run dev          # Start dev server
npm run build        # Build for production
npm start            # Start production server
npm run lint         # Run ESLint

# Git
git status           # Check changes
git add .            # Stage all changes
git commit -m "msg"  # Commit changes
git push             # Push to GitHub

# Vercel CLI (optional)
npm i -g vercel      # Install Vercel CLI
vercel               # Deploy to preview
vercel --prod        # Deploy to production
```

---

## Troubleshooting

### Port 3000 already in use?
```bash
# Windows PowerShell
Get-Process -Id (Get-NetTCPConnection -LocalPort 3000).OwningProcess | Stop-Process

# Or change port
npm run dev -- -p 3001
```

### Build errors?
```bash
# Clean install
rm -rf node_modules .next
npm install
npm run build
```

### Changes not showing?
- Hard refresh: `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)
- Clear cache
- Restart dev server

---

## Next Steps

1. ✅ Test all features locally
2. ✅ Review documentation in README.md
3. ✅ Read TECHNICAL_REPORT.md for details
4. ✅ Deploy to Vercel
5. ✅ Test deployed version
6. ✅ Add live URL to README
7. ✅ Submit assignment

---

## Documentation Files

- **README.md** - Overview, setup, features
- **TECHNICAL_REPORT.md** - 1-2 page technical analysis
- **DEPLOYMENT.md** - Complete deployment guide
- **TESTING.md** - Testing procedures
- **SCREENSHOTS_GUIDE.md** - UI documentation
- **PROJECT_SUMMARY.md** - Project overview
- **QUICK_START.md** - This file!

---

## Admin Credentials

**Admin Key:** `admin-secret-key-2025`

Use in API headers:
```
x-admin-key: admin-secret-key-2025
```

**Change this in production!**

---

## Support

- GitHub Issues: https://github.com/Uddhav-Saikia/talenton-assignment/issues
- Documentation: Check the 7 markdown files in the project
- Next.js Docs: https://nextjs.org/docs

---

**Total Setup Time:** ~10 minutes  
**Ready to deploy:** ✅ YES  
**Production ready:** ✅ YES  

---

*Happy coding! 🚀*
