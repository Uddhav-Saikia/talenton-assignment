import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getProducts, getProductBySlug } from '@/lib/data';

// ISR: Revalidate every 60 seconds
export const revalidate = 60;

// Generate static params for all products
export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  
  if (!product) {
    return {
      title: 'Product Not Found',
    };
  }

  return {
    title: `${product.name} - E-Commerce Store`,
    description: product.description,
  };
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const stockStatus = product.inventory === 0 
    ? 'Out of Stock' 
    : product.inventory <= 10 
    ? 'Low Stock' 
    : 'In Stock';
  
  const stockColor = product.inventory === 0 
    ? 'bg-red-100 text-red-800' 
    : product.inventory <= 10 
    ? 'bg-orange-100 text-orange-800' 
    : 'bg-green-100 text-green-800';

  const lastUpdated = new Date(product.lastUpdated).toLocaleString();

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/" className="text-blue-600 hover:text-blue-800 mb-6 inline-block">
        ← Back to Products
      </Link>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
        <p className="text-sm text-blue-700">
          <strong>Rendering Strategy:</strong> ISR (Incremental Static Regeneration) - 
          Page regenerates every 60 seconds to show updated prices and stock
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
          {/* Product Image Placeholder */}
          <div className="bg-gray-200 rounded-lg flex items-center justify-center h-96">
            <div className="text-center">
              <div className="text-6xl mb-4">📦</div>
              <p className="text-gray-500">Product Image</p>
            </div>
          </div>

          {/* Product Details */}
          <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">{product.name}</h1>
            
            <div className="mb-4">
              <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                {product.category}
              </span>
            </div>

            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              {product.description}
            </p>

            <div className="mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">
                ${product.price.toFixed(2)}
              </div>
            </div>

            <div className="mb-6 space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-gray-700 font-medium">Availability:</span>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${stockColor}`}>
                  {stockStatus}
                </span>
              </div>
              
              <div className="flex items-center gap-3">
                <span className="text-gray-700 font-medium">Stock Quantity:</span>
                <span className="text-gray-600">{product.inventory} units</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-gray-700 font-medium">Product ID:</span>
                <span className="text-gray-600">{product.id}</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-gray-700 font-medium">Last Updated:</span>
                <span className="text-gray-600 text-sm">{lastUpdated}</span>
              </div>
            </div>

            <button 
              className={`w-full py-3 px-6 rounded-lg font-semibold text-white transition ${
                product.inventory > 0 
                  ? 'bg-blue-600 hover:bg-blue-700' 
                  : 'bg-gray-400 cursor-not-allowed'
              }`}
              disabled={product.inventory === 0}
            >
              {product.inventory > 0 ? 'Add to Cart' : 'Out of Stock'}
            </button>
          </div>
        </div>

        {/* Additional Information */}
        <div className="border-t border-gray-200 p-8 bg-gray-50">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Product Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-700 mb-2">Features</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>High quality materials</li>
                <li>1 year warranty</li>
                <li>Free shipping on orders over $100</li>
                <li>30-day return policy</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700 mb-2">Shipping</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Standard shipping: 5-7 business days</li>
                <li>Express shipping: 2-3 business days</li>
                <li>International shipping available</li>
                <li>Track your order online</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
