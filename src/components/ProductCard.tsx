import Link from 'next/link';
import { Product } from '@/types/product';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const stockStatus = product.inventory === 0 
    ? 'Out of Stock' 
    : product.inventory <= 10 
    ? 'Low Stock' 
    : 'In Stock';
  
  const stockColor = product.inventory === 0 
    ? 'text-red-600' 
    : product.inventory <= 10 
    ? 'text-orange-600' 
    : 'text-green-600';

  return (
    <Link href={`/products/${product.slug}`}>
      <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-6 h-full flex flex-col cursor-pointer border border-gray-200 hover:border-blue-500">
        <div className="grow">
          <h3 className="text-xl font-semibold text-gray-800 mb-2 hover:text-blue-600 transition">
            {product.name}
          </h3>
          <p className="text-gray-600 mb-3 text-sm line-clamp-2">{product.description}</p>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-sm text-gray-500">Category:</span>
            <span className="text-sm bg-gray-100 px-2 py-1 rounded">{product.category}</span>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-200">
          <div className="flex justify-between items-center mb-2">
            <span className="text-2xl font-bold text-blue-600">${product.price.toFixed(2)}</span>
            <span className={`text-sm font-medium ${stockColor}`}>
              {stockStatus}
            </span>
          </div>
          <div className="text-sm text-gray-500">
            Stock: {product.inventory} units
          </div>
        </div>
      </div>
    </Link>
  );
}
