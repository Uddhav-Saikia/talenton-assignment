import { NextRequest, NextResponse } from 'next/server';
import { getProducts, addProduct } from '@/lib/data';
import { Product } from '@/types/product';

export const dynamic = 'force-dynamic';

// GET /api/products - Fetch all products
export async function GET() {
  try {
    const products = await getProducts();
    return NextResponse.json({ success: true, data: products });
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch products' },
      { status: 500 }
    );
  }
}

// POST /api/products - Add a new product (Admin only)
export async function POST(request: NextRequest) {
  try {
    // Simple admin key check
    const adminKey = request.headers.get('x-admin-key');
    if (adminKey !== process.env.ADMIN_KEY && adminKey !== 'admin-secret-key-2025') {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const body = await request.json();
    
    // Validate required fields
    if (!body.name || !body.slug || !body.description || body.price === undefined || !body.category || body.inventory === undefined) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const productData: Omit<Product, 'id' | 'lastUpdated'> = {
      name: body.name,
      slug: body.slug,
      description: body.description,
      price: Number(body.price),
      category: body.category,
      inventory: Number(body.inventory),
    };

    const newProduct = await addProduct(productData);
    
    return NextResponse.json(
      { success: true, data: newProduct },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error adding product:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to add product' },
      { status: 500 }
    );
  }
}
