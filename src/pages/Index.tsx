import { useState } from 'react';
import { Product } from '@/lib/products';
import { Navbar } from '@/components/Navbar';
import { HeroBanner } from '@/components/HeroBanner';
import { Categories } from '@/components/Categories';
import { FlashSale } from '@/components/FlashSale';
import { ProductGrid } from '@/components/ProductGrid';
import { Footer } from '@/components/Footer';

const Index = () => {
  const [cartCount, setCartCount] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleAddToCart = (_product: Product) => setCartCount((prev) => prev + 1);

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    setSelectedCategory(null);
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category === selectedCategory ? null : category);
    setSearchQuery('');
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar cartCount={cartCount} onSearchChange={handleSearchChange} />
      <HeroBanner />
      <Categories onCategorySelect={handleCategorySelect} selectedCategory={selectedCategory} />
      <FlashSale />
      <ProductGrid
        title={
          searchQuery
            ? `Search Results for "${searchQuery}"`
            : selectedCategory
              ? ({ electronics: 'Electronics', fashion: 'Fashion', phones: 'Phones', supermarket: 'Supermarket' } as Record<string, string>)[selectedCategory] || 'Products'
              : 'Browse All Products'
        }
        selectedCategory={selectedCategory}
        searchQuery={searchQuery}
        onAddToCart={handleAddToCart}
      />
      <Footer />
    </div>
  );
};

export default Index;
