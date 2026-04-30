import { Product } from '@/lib/products';
import { ShoppingCart, Heart } from 'lucide-react';
import { useState } from 'react';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    onAddToCart(product);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1500);
  };

  const discountPercentage = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-100 flex flex-col">
      <div className="relative overflow-hidden bg-gray-100 aspect-square">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
        {product.badge && (
          <div className="absolute top-2 right-2">
            <span
              className={`px-2 py-1 rounded-full text-xs font-bold text-white ${
                product.badge === 'flash-sale'
                  ? 'bg-red-500'
                  : product.badge === 'trending'
                    ? 'bg-[#0F4C8B]'
                    : 'bg-green-500'
              }`}
            >
              {product.badge === 'flash-sale' ? '⚡ Flash Sale' : product.badge === 'trending' ? '🔥 Trending' : '✨ New'}
            </span>
          </div>
        )}
        {discountPercentage > 0 && (
          <div className="absolute top-2 left-2 bg-red-500 text-white font-bold px-2 py-1 rounded text-sm">
            -{discountPercentage}%
          </div>
        )}
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute top-2 right-12 bg-white/90 hover:bg-white p-2 rounded-full transition shadow-sm"
          aria-label="Add to wishlist"
        >
          <Heart className={`w-5 h-5 transition ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} />
        </button>
      </div>
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="font-semibold text-gray-900 text-sm md:text-base line-clamp-2 mb-2">{product.name}</h3>
        <div className="flex items-center gap-2 mb-3">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (<span key={i}>★</span>))}
          </div>
          <span className="text-xs text-gray-600">{product.rating} ({product.reviews})</span>
        </div>
        <div className="mb-4 mt-auto">
          <div className="flex items-baseline gap-2">
            <span className="text-lg md:text-xl font-bold text-[#0F4C8B]">₹{product.price.toLocaleString('en-IN')}</span>
            {product.originalPrice > product.price && (
              <span className="text-sm text-gray-500 line-through">₹{product.originalPrice.toLocaleString('en-IN')}</span>
            )}
          </div>
          <p className="text-xs text-green-600 font-semibold mt-1">
            Save ₹{(product.originalPrice - product.price).toLocaleString('en-IN')}
          </p>
        </div>
        <div className="mb-3">
          <p className={`text-xs font-semibold ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
            {product.inStock ? '✓ In Stock' : 'Out of Stock'}
          </p>
        </div>
        <button
          onClick={handleAddToCart}
          disabled={!product.inStock}
          className={`w-full py-2 px-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 text-sm ${
            isAdded
              ? 'bg-green-500 text-white'
              : product.inStock
                ? 'bg-[#0F4C8B] text-white hover:bg-[#0a3a6b]'
                : 'bg-gray-300 text-gray-600 cursor-not-allowed'
          }`}
        >
          {isAdded ? <span>✓ Added</span> : (<><ShoppingCart className="w-4 h-4" /><span>Add to Cart</span></>)}
        </button>
      </div>
    </div>
  );
}