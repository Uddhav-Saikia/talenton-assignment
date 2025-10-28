'use client';

import { useState } from 'react';
import { Product } from '@/types/product';

interface AddToWishlistButtonProps {
  product: Product;
}

export default function AddToWishlistButton({ product }: AddToWishlistButtonProps) {
  const [isInWishlist, setIsInWishlist] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleAddToWishlist = () => {
    setIsInWishlist(!isInWishlist);
    setIsAnimating(true);
    
    // Show a temporary animation
    setTimeout(() => setIsAnimating(false), 300);

    // In a real app, this would save to localStorage or backend
    console.log(`${isInWishlist ? 'Removed from' : 'Added to'} wishlist:`, product.name);
  };

  return (
    <button
      onClick={handleAddToWishlist}
      className={`w-full py-2 px-4 rounded-lg font-medium transition-all ${
        isInWishlist
          ? 'bg-pink-600 hover:bg-pink-700 text-white'
          : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
      } ${isAnimating ? 'scale-95' : 'scale-100'}`}
    >
      {isInWishlist ? '💝 In Wishlist' : '🤍 Add to Wishlist'}
    </button>
  );
}
