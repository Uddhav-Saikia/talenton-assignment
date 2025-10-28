import { getProducts } from '@/lib/data';
import AddToWishlistButton from '@/components/AddToWishlistButton';
import Link from 'next/link';

// Server Component - fetches data on the server
export const metadata = {
  title: 'Recommended Products - E-Commerce Store',
  description: 'Personalized product recommendations',
};

export default async function RecommendationsPage() {
  const allProducts = await getProducts();
  
  // Server-side logic: Get low stock items (urgent recommendations)
  const urgentRecommendations = allProducts
    .filter(p => p.inventory > 0 && p.inventory <= 10)
    .slice(0, 4);

  // Server-side logic: Get popular categories
  const electronicsProducts = allProducts
    .filter(p => p.category === 'Electronics' && p.inventory > 0)
    .slice(0, 4);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Recommended for You</h1>
        <p className="text-gray-600 mb-4">
          Personalized product recommendations based on availability and popularity.
          This page uses <strong>React Server Components</strong> - data fetched on server, 
          with client-side interactivity for wishlist.
        </p>
        <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 mb-4">
          <p className="text-sm text-indigo-700">
            <strong>Rendering Strategy:</strong> Hybrid - Server Components for data fetching + 
            Client Components for interactive features (Add to Wishlist)
          </p>
        </div>
      </div>

      {/* Urgent Recommendations - Limited Stock */}
      <section className="mb-12">
        <div className="flex items-center mb-6">
          <span className="text-3xl mr-3">⚡</span>
          <h2 className="text-3xl font-bold text-gray-800">Limited Stock - Act Fast!</h2>
        </div>
        <p className="text-gray-600 mb-6">
          These products are running low on inventory. Get them before they're gone!
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {urgentRecommendations.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow border-2 border-orange-200">
              <div className="p-6">
                <div className="bg-orange-100 text-orange-800 text-xs font-semibold px-2 py-1 rounded mb-3 inline-block">
                  Only {product.inventory} left!
                </div>
                
                <Link href={`/products/${product.slug}`}>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 hover:text-blue-600 transition cursor-pointer">
                    {product.name}
                  </h3>
                </Link>
                
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  {product.description}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-blue-600">
                    ${product.price.toFixed(2)}
                  </span>
                  <span className="text-xs text-gray-500">{product.category}</span>
                </div>

                {/* Client Component for interactivity */}
                <AddToWishlistButton product={product} />
              </div>
            </div>
          ))}
        </div>

        {urgentRecommendations.length === 0 && (
          <div className="bg-gray-50 rounded-lg p-8 text-center">
            <p className="text-gray-600">All products are well-stocked! Check back later.</p>
          </div>
        )}
      </section>

      {/* Popular Electronics */}
      <section className="mb-12">
        <div className="flex items-center mb-6">
          <span className="text-3xl mr-3">🔥</span>
          <h2 className="text-3xl font-bold text-gray-800">Popular Electronics</h2>
        </div>
        <p className="text-gray-600 mb-6">
          Top picks from our electronics collection, loved by customers.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {electronicsProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow border border-gray-200">
              <div className="p-6">
                <Link href={`/products/${product.slug}`}>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 hover:text-blue-600 transition cursor-pointer">
                    {product.name}
                  </h3>
                </Link>
                
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  {product.description}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-blue-600">
                    ${product.price.toFixed(2)}
                  </span>
                  <span className={`text-xs font-medium ${
                    product.inventory <= 10 ? 'text-orange-600' : 'text-green-600'
                  }`}>
                    {product.inventory} in stock
                  </span>
                </div>

                {/* Client Component for interactivity */}
                <AddToWishlistButton product={product} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why These Recommendations */}
      <section className="bg-linear-to-r from-blue-50 to-purple-50 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Why these recommendations?</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-start">
            <span className="text-2xl mr-3">🎯</span>
            <div>
              <h4 className="font-semibold text-gray-800 mb-1">Smart Selection</h4>
              <p className="text-gray-600 text-sm">
                Our server-side algorithm analyzes inventory levels and popularity to bring you the best deals.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="text-2xl mr-3">⚡</span>
            <div>
              <h4 className="font-semibold text-gray-800 mb-1">Real-Time Updates</h4>
              <p className="text-gray-600 text-sm">
                Recommendations are generated fresh with every page load using server components.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="text-2xl mr-3">💝</span>
            <div>
              <h4 className="font-semibold text-gray-800 mb-1">Interactive Wishlist</h4>
              <p className="text-gray-600 text-sm">
                Client-side components let you save favorites without page reloads.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <span className="text-2xl mr-3">🚀</span>
            <div>
              <h4 className="font-semibold text-gray-800 mb-1">Optimized Performance</h4>
              <p className="text-gray-600 text-sm">
                Hybrid rendering ensures fast initial loads with dynamic interactivity.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
