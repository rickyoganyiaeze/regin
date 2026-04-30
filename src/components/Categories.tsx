import { categories } from '@/lib/products';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLaptop,
  faShirt,
  faMobileScreen,
  faCartShopping,
  faBoxOpen,
} from '@fortawesome/free-solid-svg-icons';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface CategoriesProps {
  onCategorySelect: (category: string) => void;
  selectedCategory: string | null;
}

const categoryIcons: Record<string, IconDefinition> = {
  electronics: faLaptop,
  fashion: faShirt,
  phones: faMobileScreen,
  supermarket: faCartShopping,
};

// Per-category color themes (random vivid colors)
const categoryColors: Record<
  string,
  { bg: string; iconBg: string; icon: string; ring: string; activeBg: string }
> = {
  electronics: {
    bg: 'from-blue-50 to-indigo-50',
    iconBg: 'bg-blue-500',
    icon: 'text-white',
    ring: 'border-blue-200 hover:border-blue-500',
    activeBg: 'border-blue-600 bg-blue-50',
  },
  fashion: {
    bg: 'from-pink-50 to-rose-50',
    iconBg: 'bg-pink-500',
    icon: 'text-white',
    ring: 'border-pink-200 hover:border-pink-500',
    activeBg: 'border-pink-600 bg-pink-50',
  },
  phones: {
    bg: 'from-emerald-50 to-teal-50',
    iconBg: 'bg-emerald-500',
    icon: 'text-white',
    ring: 'border-emerald-200 hover:border-emerald-500',
    activeBg: 'border-emerald-600 bg-emerald-50',
  },
  supermarket: {
    bg: 'from-amber-50 to-orange-50',
    iconBg: 'bg-orange-500',
    icon: 'text-white',
    ring: 'border-orange-200 hover:border-orange-500',
    activeBg: 'border-orange-600 bg-orange-50',
  },
};

export function Categories({ onCategorySelect, selectedCategory }: CategoriesProps) {
  return (
    <div className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category) => {
            const isActive = selectedCategory === category.id;
            const colors = categoryColors[category.id];
            return (
              <button
                key={category.id}
                onClick={() => onCategorySelect(category.id)}
                className={`relative p-6 rounded-xl border-2 transition-all duration-300 text-center group overflow-hidden bg-gradient-to-br ${colors.bg} ${
                  isActive ? colors.activeBg : colors.ring
                } hover:-translate-y-1 hover:shadow-lg`}
              >
                <div
                  className={`w-14 h-14 mx-auto mb-3 rounded-full ${colors.iconBg} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}
                >
                  <FontAwesomeIcon
                    icon={categoryIcons[category.id] || faBoxOpen}
                    className={`text-2xl ${colors.icon}`}
                  />
                </div>
                <h3 className="font-semibold text-gray-900 text-sm md:text-base">
                  {category.name}
                </h3>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}