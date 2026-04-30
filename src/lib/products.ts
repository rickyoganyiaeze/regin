import wirelessEarbuds from '@/assets/products/wireless-earbuds.jpg';
import laptop from '@/assets/products/laptop.jpg';
import smartwatch from '@/assets/products/smartwatch.jpg';
import headphones from '@/assets/products/headphones.jpg';
import speaker from '@/assets/products/speaker.jpg';
import charger from '@/assets/products/charger.jpg';
import camera from '@/assets/products/camera.jpg';
import tablet from '@/assets/products/tablet.jpg';
import smartphone from '@/assets/products/smartphone.jpg';
import phoneBudget from '@/assets/products/phone-budget.jpg';
import phoneMid from '@/assets/products/phone-mid.jpg';
import phoneGaming from '@/assets/products/phone-gaming.jpg';
import mensTshirt from '@/assets/products/mens-tshirt.jpg';
import womensDress from '@/assets/products/womens-dress.jpg';
import sneakers from '@/assets/products/sneakers.jpg';
import backpack from '@/assets/products/backpack.jpg';
import womensDress2 from '@/assets/products/womens-dress-2.jpg';
import mensShirt from '@/assets/products/mens-shirt.jpg';
import coffeeMaker from '@/assets/products/coffee-maker.jpg';
import blender from '@/assets/products/blender.jpg';
import microwave from '@/assets/products/microwave.jpg';
import bedsheet from '@/assets/products/bedsheet.jpg';
import towel from '@/assets/products/towel.jpg';
import pillow from '@/assets/products/pillow.jpg';

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  image: string;
  category: 'electronics' | 'fashion' | 'phones' | 'supermarket';
  rating: number;
  reviews: number;
  discount: number;
  badge?: 'flash-sale' | 'new' | 'trending';
  inStock: boolean;
}

export const products: Product[] = [
  { id: 'prod-1', name: 'Wireless Earbuds Pro', price: 4999, originalPrice: 8999, image: wirelessEarbuds, category: 'electronics', rating: 4.8, reviews: 2145, discount: 44, badge: 'flash-sale', inStock: true },
  { id: 'prod-2', name: 'Premium Laptop', price: 54999, originalPrice: 79999, image: laptop, category: 'electronics', rating: 4.7, reviews: 1203, discount: 31, badge: 'flash-sale', inStock: true },
  { id: 'prod-3', name: 'Smart Watch Ultra', price: 12999, originalPrice: 19999, image: smartwatch, category: 'electronics', rating: 4.6, reviews: 876, discount: 35, inStock: true },
  { id: 'prod-4', name: 'Premium Headphones', price: 8999, originalPrice: 15999, image: headphones, category: 'electronics', rating: 4.9, reviews: 3421, discount: 44, badge: 'trending', inStock: true },
  { id: 'prod-5', name: 'Bluetooth Speaker', price: 2999, originalPrice: 5999, image: speaker, category: 'electronics', rating: 4.5, reviews: 654, discount: 50, inStock: true },
  { id: 'prod-6', name: 'USB-C Fast Charger', price: 1299, originalPrice: 2499, image: charger, category: 'electronics', rating: 4.7, reviews: 2103, discount: 48, inStock: true },
  { id: 'prod-7', name: 'Professional Camera', price: 89999, originalPrice: 129999, image: camera, category: 'electronics', rating: 4.8, reviews: 432, discount: 31, inStock: true },
  { id: 'prod-8', name: 'Tablet Pro 10"', price: 24999, originalPrice: 39999, image: tablet, category: 'electronics', rating: 4.6, reviews: 1087, discount: 37, inStock: true },
  { id: 'prod-9', name: 'Flagship Smartphone', price: 49999, originalPrice: 79999, image: smartphone, category: 'phones', rating: 4.9, reviews: 5234, discount: 37, badge: 'trending', inStock: true },
  { id: 'prod-10', name: 'Budget Smartphone', price: 12999, originalPrice: 19999, image: phoneBudget, category: 'phones', rating: 4.4, reviews: 1876, discount: 35, inStock: true },
  { id: 'prod-11', name: 'Mid-Range Phone', price: 24999, originalPrice: 39999, image: phoneMid, category: 'phones', rating: 4.6, reviews: 2345, discount: 37, inStock: true },
  { id: 'prod-12', name: 'Gaming Phone', price: 39999, originalPrice: 64999, image: phoneGaming, category: 'phones', rating: 4.8, reviews: 1654, discount: 38, badge: 'new', inStock: true },
  { id: 'prod-13', name: "Men's Cotton T-Shirt", price: 499, originalPrice: 999, image: mensTshirt, category: 'fashion', rating: 4.3, reviews: 456, discount: 50, inStock: true },
  { id: 'prod-14', name: "Women's Casual Dress", price: 1999, originalPrice: 3999, image: womensDress, category: 'fashion', rating: 4.7, reviews: 823, discount: 50, badge: 'trending', inStock: true },
  { id: 'prod-15', name: 'Running Sneakers', price: 3999, originalPrice: 6999, image: sneakers, category: 'fashion', rating: 4.8, reviews: 1243, discount: 43, inStock: true },
  { id: 'prod-16', name: 'Travel Backpack', price: 2499, originalPrice: 4999, image: backpack, category: 'fashion', rating: 4.6, reviews: 987, discount: 50, inStock: true },
  { id: 'prod-17', name: "Women's Premium Dress", price: 3499, originalPrice: 5999, image: womensDress2, category: 'fashion', rating: 4.5, reviews: 654, discount: 42, inStock: true },
  { id: 'prod-18', name: "Men's Casual Shirt", price: 1299, originalPrice: 2499, image: mensShirt, category: 'fashion', rating: 4.4, reviews: 543, discount: 48, inStock: true },
  { id: 'prod-19', name: 'Electric Coffee Maker', price: 3499, originalPrice: 5999, image: coffeeMaker, category: 'supermarket', rating: 4.7, reviews: 1123, discount: 42, inStock: true },
  { id: 'prod-20', name: 'High-Speed Blender', price: 4999, originalPrice: 8999, image: blender, category: 'supermarket', rating: 4.6, reviews: 876, discount: 44, badge: 'flash-sale', inStock: true },
  { id: 'prod-21', name: 'Microwave Oven', price: 6999, originalPrice: 12999, image: microwave, category: 'supermarket', rating: 4.5, reviews: 654, discount: 46, inStock: true },
  { id: 'prod-22', name: 'Premium Cotton Bedsheet', price: 1999, originalPrice: 3999, image: bedsheet, category: 'supermarket', rating: 4.8, reviews: 2134, discount: 50, inStock: true },
  { id: 'prod-23', name: 'Bath Towel Set', price: 899, originalPrice: 1899, image: towel, category: 'supermarket', rating: 4.6, reviews: 1087, discount: 53, inStock: true },
  { id: 'prod-24', name: 'Memory Foam Pillow', price: 1499, originalPrice: 2999, image: pillow, category: 'supermarket', rating: 4.9, reviews: 3245, discount: 50, badge: 'new', inStock: true },
];

export const categories = [
  { id: 'electronics', name: 'Electronics', icon: '📱' },
  { id: 'fashion', name: 'Fashion', icon: '👔' },
  { id: 'phones', name: 'Phones', icon: '☎️' },
  { id: 'supermarket', name: 'Supermarket', icon: '🛒' },
];
