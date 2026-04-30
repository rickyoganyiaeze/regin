import { useState } from 'react';
import { Search, ShoppingCart, User, Menu, X, Cpu } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onSearchChange: (query: string) => void;
}

export function Navbar({ cartCount, onSearchChange }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [category, setCategory] = useState('all');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const q = e.target.value;
    setSearchQuery(q);
    onSearchChange(q);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Tech-styled logo */}
         <img src="/public/logo.png" width={150} alt="" />

          {/* Ecommerce-style search with category dropdown + button */}
          <div className="hidden md:flex flex-1 max-w-2xl">
            <div className="flex w-full rounded-md overflow-hidden ring-2 ring-[#FF9900] focus-within:ring-orange-500 transition">
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs px-3 border-r border-gray-300 focus:outline-none cursor-pointer font-medium"
              >
                <option value="all">All</option>
                <option value="electronics">Electronics</option>
                <option value="phones">Phones</option>
                <option value="fashion">Fashion</option>
                <option value="supermarket">Supermarket</option>
              </select>
              <input
                type="text"
                placeholder="Search REGIN.tech"
                value={searchQuery}
                onChange={handleSearchChange}
                className="flex-1 px-4 py-2 text-sm focus:outline-none"
              />
              <button
                aria-label="Search"
                className="bg-[#FF9900] hover:bg-orange-500 transition px-5 flex items-center justify-center"
              >
                <Search className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <a href="#" className="relative group cursor-pointer">
              <ShoppingCart className="w-6 h-6 text-gray-700 group-hover:text-[#0F4C8B] transition" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </a>
            <a href="#" className="group cursor-pointer">
              <User className="w-6 h-6 text-gray-700 group-hover:text-[#0F4C8B] transition" />
            </a>
          </div>

          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
            {mobileMenuOpen ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
          </button>
        </div>

        {/* Mobile ecommerce search */}
        <div className="md:hidden mt-3">
          <div className="flex w-full rounded-md overflow-hidden ring-2 ring-[#FF9900]">
            <input
              type="text"
              placeholder="Search REGIN.tech"
              value={searchQuery}
              onChange={handleSearchChange}
              className="flex-1 px-3 py-2 text-sm focus:outline-none"
            />
            <button aria-label="Search" className="bg-[#FF9900] px-4 flex items-center justify-center">
              <Search className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-50 border-t border-gray-200">
          <div className="px-4 py-4 space-y-4">
            <a href="#" className="flex items-center gap-2 text-gray-700 hover:text-[#0F4C8B]">
              <ShoppingCart className="w-5 h-5" />
              <span>Cart {cartCount > 0 && `(${cartCount})`}</span>
            </a>
            <a href="#" className="flex items-center gap-2 text-gray-700 hover:text-[#0F4C8B]">
              <User className="w-5 h-5" />
              <span>Account</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
