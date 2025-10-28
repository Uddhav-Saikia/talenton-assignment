# E-Commerce Web Application

**Built by:** Uddhav Saikia  
**Date:** October 28, 2025  
**Assignment:** Talenton Next.js Rendering Strategies

## 🚀 Project Overview

This is a fully functional e-commerce web application built with **Next.js 14+**, **TypeScript**, and **Tailwind CSS**. The project demonstrates different rendering strategies (SSG, ISR, SSR, Client-Side) across multiple pages, showcasing when and why to use each approach.

## 🎯 Features

### Core Pages

1. **Home Page (`/`)** - Static Site Generation (SSG)
   - Product catalog with build-time data fetching
   - Client-side search and filtering
   - Optimal performance for frequently viewed content

2. **Product Detail Page (`/products/[slug]`)** - Incremental Static Regeneration (ISR)
   - Pre-generated product pages with 60-second revalidation
   - Automatic updates for price and inventory changes
   - Best of both worlds: static performance + dynamic updates

3. **Inventory Dashboard (`/dashboard`)** - Server-Side Rendering (SSR)
   - Real-time inventory statistics
   - Low stock and out-of-stock alerts
   - Always fresh data on every request

4. **Admin Panel (`/admin`)** - Client-Side Rendering (CSR)
   - Interactive forms for adding/editing products
   - Live product management
   - Client-side data fetching and updates

5. **Recommendations Page (`/recommendations`)** - React Server Components (Bonus)
   - Server-side data processing
   - Client-side interactive wishlist buttons
   - Hybrid rendering approach

### Backend API Routes

- `GET /api/products` - Fetch all products
- `GET /api/products/[slug]` - Fetch single product by slug
- `POST /api/products` - Add new product (admin protected)
- `PUT /api/products/update/[id]` - Update product (admin protected)

### Admin Authentication

Protected routes use a simple key-based authentication:
- Header: `x-admin-key: admin-secret-key-2025`

## 📋 Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

## 🛠️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/Uddhav-Saikia/talenton-assignment.git
cd talenton-assignment
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Setup

Create a `.env.local` file (or copy from `.env.example`):

```bash
ADMIN_KEY=admin-secret-key-2025
```

### 4. Run Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

### 5. Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
talenton-assignment/
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout
│   │   ├── page.tsx                # Home page (SSG)
│   │   ├── globals.css             # Global styles
│   │   ├── products/
│   │   │   └── [slug]/
│   │   │       └── page.tsx        # Product detail (ISR)
│   │   ├── dashboard/
│   │   │   └── page.tsx            # Dashboard (SSR)
│   │   ├── admin/
│   │   │   └── page.tsx            # Admin panel (CSR)
│   │   ├── recommendations/
│   │   │   └── page.tsx            # Recommendations (RSC)
│   │   └── api/
│   │       └── products/
│   │           ├── route.ts        # Products API
│   │           ├── [slug]/
│   │           │   └── route.ts    # Single product API
│   │           └── update/
│   │               └── [id]/
│   │                   └── route.ts # Update product API
│   ├── components/
│   │   ├── Header.tsx              # Navigation header
│   │   ├── ProductCard.tsx         # Product card component
│   │   ├── SearchFilter.tsx        # Search/filter (client)
│   │   └── AddToWishlistButton.tsx # Wishlist button (client)
│   ├── lib/
│   │   └── data.ts                 # Data utility functions
│   └── types/
│       └── product.ts              # TypeScript types
├── data/
│   └── products.json               # Product database
├── public/                         # Static assets
├── .env.example                    # Environment template
├── next.config.js                  # Next.js configuration
├── tailwind.config.ts              # Tailwind configuration
├── tsconfig.json                   # TypeScript configuration
└── package.json                    # Dependencies
```

## 🎨 Rendering Strategies Explained

### 1. Static Site Generation (SSG) - Home Page

**When to use:**
- Content that doesn't change frequently
- Public pages that benefit from CDN caching
- SEO-critical pages

**Why chosen for Home Page:**
- Product catalog is pre-rendered at build time
- Fastest possible page loads
- Excellent for initial user experience
- Client-side filtering adds interactivity without server overhead

### 2. Incremental Static Regeneration (ISR) - Product Pages

**When to use:**
- Content that changes periodically
- Need static performance but with fresh data
- E-commerce product pages with price/inventory updates

**Why chosen for Product Details:**
- Pages are pre-generated for all products
- Automatically revalidates every 60 seconds
- Shows updated prices and stock levels
- No need to rebuild entire site for product updates

### 3. Server-Side Rendering (SSR) - Dashboard

**When to use:**
- Real-time data requirements
- User-specific or protected content
- Analytics and admin dashboards

**Why chosen for Dashboard:**
- Always shows the latest inventory data
- Critical for business decisions
- Stock alerts must be accurate
- Data fetched fresh on every request

### 4. Client-Side Rendering (CSR) - Admin Panel

**When to use:**
- Highly interactive pages
- Authenticated routes
- Forms with complex validation
- Real-time user interactions

**Why chosen for Admin Panel:**
- Interactive forms for product management
- Immediate feedback on user actions
- API integration for CRUD operations
- No SEO requirements (admin-only)

### 5. React Server Components (RSC) - Recommendations

**When to use:**
- Hybrid server/client rendering needs
- Parts of page need server data, others need interactivity
- Modern App Router features

**Why chosen for Recommendations:**
- Server components fetch and process data efficiently
- Client components handle wishlist interactions
- Best performance and user experience combination
- Demonstrates modern Next.js capabilities

## 🔄 Data Flow

1. **Build Time (SSG)**: Home page fetches products from JSON
2. **Request Time (SSR)**: Dashboard reads latest JSON data
3. **Periodic (ISR)**: Product pages regenerate every 60 seconds
4. **Client-Side (CSR)**: Admin panel fetches via API routes
5. **Hybrid (RSC)**: Recommendations combine server + client

## 🔐 API Authentication

Admin routes (`POST`, `PUT`) require authentication:

```javascript
headers: {
  'Content-Type': 'application/json',
  'x-admin-key': 'admin-secret-key-2025'
}
```

## 📊 Database

The application uses a simple JSON file (`data/products.json`) as a database. This makes it easy to:
- Run without external dependencies
- Modify data structure quickly
- Deploy anywhere

For production, consider migrating to MongoDB, PostgreSQL, or another database.

## 🚧 Challenges & Solutions

### Challenge 1: Type Safety with Dynamic Routes
**Solution:** Used TypeScript interfaces for all props and params, ensuring type safety across async server components.

### Challenge 2: Revalidation Strategy
**Solution:** Implemented ISR with 60-second intervals for product pages, balancing freshness with performance.

### Challenge 3: Client/Server Component Boundaries
**Solution:** Clearly separated server components (data fetching) from client components (interactivity) using 'use client' directive.

### Challenge 4: JSON File Concurrency
**Solution:** Used async file operations with proper error handling. For production, recommend database with transactions.

## 🎁 Bonus Features Implemented

✅ **TypeScript** - Full type safety throughout the project  
✅ **Modern App Router** - Using Next.js 14+ App Router features  
✅ **Server Components** - Hybrid rendering on recommendations page  
✅ **Tailwind CSS** - Modern, responsive design  
✅ **Admin Authentication** - Key-based API protection  
✅ **Real-time Dashboard** - Live inventory statistics  
✅ **ISR Implementation** - Automatic page regeneration  

## 📸 Screenshots

### Home Page (SSG)
Product catalog with search and filter functionality, demonstrating static generation.

### Product Detail (ISR)
Individual product page with revalidation every 60 seconds for updated pricing.

### Dashboard (SSR)
Real-time inventory dashboard with low-stock alerts and statistics.

### Admin Panel (CSR)
Interactive admin interface for managing products with forms and live updates.

### Recommendations (RSC)
Hybrid server/client rendering with personalized product recommendations.

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

```bash
# Set environment variable in Vercel
ADMIN_KEY=your-secure-admin-key
```

### Alternative Deployment Options
- **Netlify**: Supports Next.js with minimal configuration
- **Railway**: Easy deployment with Node.js support
- **DigitalOcean**: VPS hosting with full control

## 📝 Testing API Endpoints

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
    "name": "New Product",
    "slug": "new-product",
    "description": "Product description",
    "price": 99.99,
    "category": "Electronics",
    "inventory": 50
  }'
```

### Update Product (Admin)
```bash
curl -X PUT http://localhost:3000/api/products/update/1 \
  -H "Content-Type: application/json" \
  -H "x-admin-key: admin-secret-key-2025" \
  -d '{
    "price": 279.99,
    "inventory": 30
  }'
```

## 🔍 Key Learnings

1. **SSG** is perfect for content-heavy pages that don't change often
2. **ISR** bridges the gap between static and dynamic with periodic regeneration
3. **SSR** is essential for real-time, user-specific data
4. **CSR** excels at highly interactive experiences
5. **RSC** enables optimal performance by splitting server and client work

## 🛣️ Future Enhancements

- [ ] Add database (MongoDB/PostgreSQL)
- [ ] Implement user authentication (NextAuth.js)
- [ ] Add shopping cart functionality
- [ ] Implement payment integration (Stripe)
- [ ] Add unit and integration tests
- [ ] Implement image uploads for products
- [ ] Add product reviews and ratings
- [ ] Create order management system
- [ ] Add email notifications
- [ ] Implement search with Algolia

## 📞 Contact

**Uddhav Saikia**  
GitHub: [@Uddhav-Saikia](https://github.com/Uddhav-Saikia)

## 📄 License

ISC License - This project was created as part of the Talenton assignment.

---

**Note:** This project demonstrates Next.js rendering strategies for educational purposes. For production use, implement proper authentication, database transactions, error handling, and security measures.
