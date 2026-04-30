import { Product, products } from '@/lib/products';
import { ProductCard } from './ProductCard';
import { useState, useMemo } from 'react';
import { Filter } from 'lucide-react';

interface ProductGridProps {
  title: string;
  selectedCategory: string | null;
  searchQuery: string;
  onAddToCart: (product: Product) => void;
}

export function ProductGrid({ title, selectedCategory, searchQuery, onAddToCart }: ProductGridProps) {
  const [sortBy, setSortBy] = useState<'relevance' | 'price-low' | 'price-high' | 'rating'>('relevance');
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [minRating, setMinRating] = useState(0);

  const filteredProducts = useMemo(() => {
    let filtered = products;
    if (selectedCategory) filtered = filtered.filter((p) => p.category === selectedCategory);
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter((p) => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q));
    }
    filtered = filtered.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1]);
    filtered = filtered.filter((p) => p.rating >= minRating);
    return [...filtered].sort((a, b) => {
      switch (sortBy) {
        case 'price-low': return a.price - b.price;
        case 'price-high': return b.price - a.price;
        case 'rating': return b.rating - a.rating;
        default: return 0;
      }
    });
  }, [selectedCategory, searchQuery, sortBy, priceRange, minRating]);

  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{title}</h2>
          <div className="flex items-center gap-3">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
              className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-[#0F4C8B]"
            >
              <option value="relevance">Most Relevant</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden px-4 py-2 border border-gray-300 rounded-lg flex items-center gap-2 text-sm font-medium text-gray-700 bg-white hover:border-[#0F4C8B]"
            >
              <Filter className="w-4 h-4" />
              Filters
            </button>
          </div>
        </div>
        <p className="text-gray-600 text-sm mb-6">
          Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
        </p>
        <div className="flex gap-8">
          <div className="hidden md:block w-64 flex-shrink-0">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-4">Filters</h3>
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-3">Price Range</label>
                <input
                  type="range"
                  min="0"
                  max="100000"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                  className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-sm text-gray-600 mt-2">
                  <span>₹{priceRange[0].toLocaleString()}</span>
                  <span>₹{priceRange[1].toLocaleString()}</span>
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">Minimum Rating</label>
                <div className="space-y-2">
                  {[4, 3.5, 3, 2.5, 0].map((rating) => (
                    <label key={rating} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="rating"
                        value={rating}
                        checked={minRating === rating}
                        onChange={() => setMinRating(rating)}
                        className="w-4 h-4 text-[#0F4C8B] cursor-pointer"
                      />
                      <span className="text-sm text-gray-700">{rating > 0 ? `${rating}★ & Above` : 'All Ratings'}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {showFilters && (
            <div className="md:hidden w-full bg-white rounded-lg p-6 shadow-sm border border-gray-100 mb-6">
              <h3 className="font-bold text-gray-900 mb-4">Filters</h3>
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-3">Max Price: ₹{priceRange[1].toLocaleString()}</label>
                <input
                  type="range"
                  min="0"
                  max="100000"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                  className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
                />
              </div>
            </div>
          )}
          <div className="flex-1">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-xl text-gray-600 font-semibold mb-2">No products found</p>
                <p className="text-gray-500">Try adjusting your filters or search query</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}