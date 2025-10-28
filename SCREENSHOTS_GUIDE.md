# Screenshots & Feature Guide

**Project:** E-Commerce Web Application with Next.js  
**Developer:** Uddhav Saikia  
**Date:** October 28, 2025

---

## Application Screenshots

### 1. Home Page (SSG - Static Site Generation)

**URL:** `http://localhost:3000/`

**Features:**
- Product catalog with all available products
- Client-side search functionality (filter by name/description)
- Category filter dropdown
- Real-time product count display
- Responsive grid layout (1/2/3 columns on mobile/tablet/desktop)
- Stock status indicators (In Stock / Low Stock / Out of Stock)

**Rendering Info:**
- ✅ Data fetched at build time
- ✅ Fastest page load
- ✅ Optimal for SEO
- ✅ Client-side filtering without server requests

**Key Elements:**
- Blue info box explaining SSG strategy
- Search input field
- Category dropdown
- Product cards with:
  - Product name and description
  - Category badge
  - Price display
  - Stock status with color coding
  - Clickable cards leading to detail pages

---

### 2. Product Detail Page (ISR - Incremental Static Regeneration)

**URL:** `http://localhost:3000/products/wireless-headphones`

**Features:**
- Detailed product information
- Large product image placeholder
- Full description
- Price display
- Stock availability
- Product specifications
- Add to Cart button (disabled when out of stock)
- Product features and shipping information
- Last updated timestamp

**Rendering Info:**
- ✅ Pre-generated at build time
- ✅ Revalidates every 60 seconds
- ✅ Shows updated prices and inventory
- ✅ Static performance with dynamic data

**Key Elements:**
- Blue info box explaining ISR strategy
- Back to Products link
- Product name as main heading
- Category badge
- Large price display ($299.99)
- Availability status badge with color coding
- Stock quantity display
- Product ID
- Last updated date/time
- Add to Cart button (state-based)
- Product Information section with features and shipping

**Test ISR:**
1. Visit a product page
2. Wait 60 seconds
3. Update inventory in admin panel
4. Refresh product page after revalidation period
5. See updated inventory

---

### 3. Inventory Dashboard (SSR - Server-Side Rendering)

**URL:** `http://localhost:3000/dashboard`

**Features:**
- Real-time statistics cards:
  - Total Products count
  - Low Stock Products (≤10 units)
  - Out of Stock Products
  - Total Inventory across all products
- Categories overview with product counts
- Low Stock Alert table (orange theme)
- Out of Stock Alert table (red theme)
- Complete products table with all items
- Stock status color coding

**Rendering Info:**
- ✅ Server-rendered on every request
- ✅ Always shows latest data
- ✅ Perfect for admin/business tools
- ✅ No caching for critical data

**Key Elements:**
- Green info box explaining SSR strategy
- 4 Statistics cards with color-coded borders:
  - Blue: Total Products
  - Orange: Low Stock
  - Red: Out of Stock
  - Green: Total Inventory
- Categories section with pill-style badges
- Low Stock Alert table (if any products ≤10 inventory)
- Out of Stock Alert table (if any products with 0 inventory)
- All Products table with sortable columns
- Clickable product names linking to detail pages

**Business Value:**
- Immediate visibility of inventory issues
- Decision-making based on current data
- Proactive stock management alerts

---

### 4. Admin Panel (CSR - Client-Side Rendering)

**URL:** `http://localhost:3000/admin`

**Features:**
- Interactive product management interface
- Add New Product button (toggles form)
- Product creation form with validation
- Product editing functionality
- Real-time product list with Edit buttons
- Stock status color coding in table
- Form fields:
  - Product Name
  - Slug (URL-friendly name)
  - Price (with decimal support)
  - Category (dropdown)
  - Inventory (number input)
  - Description (textarea)

**Rendering Info:**
- ✅ Client-side data fetching
- ✅ Interactive forms
- ✅ Immediate UI feedback
- ✅ API integration for CRUD operations

**Key Elements:**
- Purple info box explaining CSR strategy
- "+ Add New Product" button (blue)
- Add/Edit Product Form (shown when button clicked):
  - 2-column grid layout on desktop
  - All fields with proper labels
  - Required field indicators (*)
  - Category dropdown with predefined options
  - Large description textarea
  - Green "Add Product" / "Update Product" button
  - Gray "Cancel Edit" button (when editing)
- Product List Table:
  - Product name and slug
  - Category
  - Price
  - Stock with color-coded status
  - Blue "Edit" button for each product
- Loading spinner during data fetch
- Success/error alerts after operations

**How to Use:**
1. Click "+ Add New Product" to show form
2. Fill in all required fields
3. Click "Add Product"
4. See success alert
5. Product appears in table
6. Click "Edit" on any product
7. Form pre-fills with product data
8. Modify fields and click "Update Product"

**Admin Authentication:**
- Uses `x-admin-key: admin-secret-key-2025` header
- Automatically added by the form
- Protected API routes validate key

---

### 5. Recommendations Page (RSC - React Server Components)

**URL:** `http://localhost:3000/recommendations`

**Features:**
- "Limited Stock - Act Fast!" section
  - Shows products with inventory ≤10
  - Orange-themed urgent badges
  - "Only X left!" indicators
- "Popular Electronics" section
  - Top electronics category products
  - Stock status display
- Add to Wishlist buttons (client component)
- Interactive wishlist toggling
- "Why these recommendations?" info section

**Rendering Info:**
- ✅ Hybrid rendering approach
- ✅ Server Components for data fetching
- ✅ Client Components for interactivity
- ✅ Optimal bundle size and performance

**Key Elements:**
- Indigo info box explaining hybrid RSC strategy
- Section 1: Limited Stock (⚡ icon)
  - 4-column grid of urgent products
  - Orange border on cards
  - "Only X left!" badge (orange background)
  - Product name, description, price
  - Category display
  - "Add to Wishlist" button (interactive)
- Section 2: Popular Electronics (🔥 icon)
  - 4-column grid of electronics
  - Regular card styling
  - Stock quantity with color coding
  - "Add to Wishlist" button (interactive)
- Section 3: Why these recommendations?
  - Gradient background (blue to purple)
  - 4 feature boxes with icons:
    - 🎯 Smart Selection
    - ⚡ Real-Time Updates
    - 💝 Interactive Wishlist
    - 🚀 Optimized Performance

**Client Component Interaction:**
- Click "🤍 Add to Wishlist" button
- Button changes to "💝 In Wishlist" with pink background
- Animation on click (scale effect)
- Click again to remove from wishlist
- State persists during page session
- Console log shows action (in real app, would save to backend)

**Server vs Client:**
- **Server:** Data fetching, filtering, calculations
- **Client:** Wishlist button state and interactions
- Reduces JavaScript bundle sent to browser
- Best performance for recommendation algorithms

---

## Navigation & Layout

### Header (All Pages)

**Features:**
- Gradient background (blue to purple)
- E-Commerce Store logo with cart emoji 🛒
- Navigation links:
  - Home
  - Dashboard
  - Admin
  - Recommendations
- Hover effects on all links
- Responsive design

### Footer (All Pages)

**Features:**
- Dark background (#gray-800)
- Copyright notice
- Developer name (Uddhav Saikia)
- Assignment details
- Date display

---

## Responsive Design

### Mobile (< 768px)
- Single column product grid
- Stacked form fields
- Mobile-friendly navigation
- Touch-optimized buttons

### Tablet (768px - 1024px)
- 2-column product grid
- 2-column form layout
- Optimized spacing

### Desktop (> 1024px)
- 3-column product grid
- 4-column recommendations
- Wide tables with all columns
- Optimal reading width

---

## Color Coding System

### Stock Status
- **Green** - In Stock (>10 units)
- **Orange** - Low Stock (1-10 units)
- **Red** - Out of Stock (0 units)

### Rendering Strategy Indicators
- **Blue** - SSG (Static Site Generation)
- **Green** - SSR (Server-Side Rendering)
- **Purple** - CSR (Client-Side Rendering)
- **Indigo** - RSC (React Server Components)

### UI Elements
- **Blue** - Primary actions (Add, Submit)
- **Green** - Success actions (Update, Confirm)
- **Orange** - Warnings (Low Stock)
- **Red** - Errors/Critical (Out of Stock)
- **Gray** - Secondary actions (Cancel)

---

## Testing Checklist

### Home Page (SSG)
- [ ] All 12 products displayed
- [ ] Search filters products by name
- [ ] Category filter works correctly
- [ ] Product count updates with filters
- [ ] Cards link to detail pages
- [ ] Stock status shows correct colors
- [ ] Responsive grid adapts to screen size

### Product Detail (ISR)
- [ ] Product details load correctly
- [ ] Price displays with 2 decimals
- [ ] Stock status matches inventory
- [ ] Add to Cart disabled when out of stock
- [ ] Last updated timestamp shows
- [ ] Back link returns to home
- [ ] Page revalidates after 60s

### Dashboard (SSR)
- [ ] Statistics cards show correct counts
- [ ] Low stock table appears when needed
- [ ] Out of stock table appears when needed
- [ ] All products table complete
- [ ] Data is always current
- [ ] Product links work correctly

### Admin Panel (CSR)
- [ ] Form toggles on button click
- [ ] All fields validate correctly
- [ ] New product adds successfully
- [ ] Product list updates after add
- [ ] Edit pre-fills form correctly
- [ ] Update saves changes
- [ ] Cancel button works
- [ ] Loading state shows during fetch

### Recommendations (RSC)
- [ ] Limited stock section shows ≤10 inventory
- [ ] Popular electronics section displays
- [ ] Wishlist button toggles state
- [ ] Button shows correct icon/text
- [ ] Animation plays on click
- [ ] Multiple products can be in wishlist
- [ ] Server data renders correctly

---

## API Testing

### GET /api/products
```bash
curl http://localhost:3000/api/products
```
Expected: JSON array of all products

### GET /api/products/[slug]
```bash
curl http://localhost:3000/api/products/wireless-headphones
```
Expected: Single product object

### POST /api/products (Admin)
```bash
curl -X POST http://localhost:3000/api/products \
  -H "Content-Type: application/json" \
  -H "x-admin-key: admin-secret-key-2025" \
  -d '{"name":"Test Product","slug":"test-product","description":"Test","price":99.99,"category":"Electronics","inventory":10}'
```
Expected: Created product with ID

### PUT /api/products/update/[id] (Admin)
```bash
curl -X PUT http://localhost:3000/api/products/update/1 \
  -H "Content-Type: application/json" \
  -H "x-admin-key: admin-secret-key-2025" \
  -d '{"price":249.99,"inventory":40}'
```
Expected: Updated product object

---

## Performance Metrics

### Expected Lighthouse Scores (Production Build)

**Home Page (SSG):**
- Performance: 95+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

**Product Pages (ISR):**
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

**Dashboard (SSR):**
- Performance: 85+
- Accessibility: 95+
- Best Practices: 95+
- SEO: N/A (admin tool)

**Admin Panel (CSR):**
- Performance: 80+
- Accessibility: 95+
- Best Practices: 95+
- SEO: N/A (admin tool)

---

## How to Take Screenshots

1. Start the development server: `npm run dev`
2. Open browser to `http://localhost:3000`
3. Take screenshots of:
   - Home page with all products visible
   - Home page with search filter active
   - Product detail page (any product)
   - Dashboard with all statistics
   - Dashboard low stock table (if present)
   - Admin panel product list
   - Admin panel with add form open
   - Admin panel with edit form filled
   - Recommendations page limited stock section
   - Recommendations page with wishlist toggled
4. Ensure screenshots show:
   - Full page layout
   - Rendering strategy info box
   - Interactive elements in different states
   - Responsive design at different breakpoints

---

**For Report Submission:**
Include screenshots of all 5 main pages plus:
- One screenshot showing the search/filter functionality
- One screenshot showing the admin form
- One screenshot showing the wishlist interaction
- One screenshot showing the build output (terminal)
- One screenshot showing the running dev server

---

*This guide helps visualize all features and rendering strategies implemented in the project.*
