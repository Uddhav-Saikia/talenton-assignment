import { getProducts } from '@/lib/data';
import ProductCard from '@/components/ProductCard';
import SearchFilter from '@/components/SearchFilter';

// This page uses Static Site Generation (SSG)
// Data is fetched at build time
export default async function HomePage() {
  const products = await getProducts();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Product Catalog</h1>
        <p className="text-gray-600 mb-4">
          Browse our collection of quality products. This page uses <strong>Static Site Generation (SSG)</strong> - 
          data fetched at build time for optimal performance.
        </p>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
          <p className="text-sm text-blue-700">
            <strong>Rendering Strategy:</strong> SSG (Static Site Generation) - Page is pre-rendered at build time
          </p>
        </div>
      </div>

      <SearchFilter products={products} />
    </div>
  );
}
