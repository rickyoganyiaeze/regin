import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import heroElectronics from '@/assets/hero-electronics.jpg';
import heroPhones from '@/assets/hero-phones.jpg';
import heroTech from '@/assets/hero-tech.jpg';

const banners = [
  {
    id: 1,
    title: 'Mega Flash Sale',
    subtitle: 'Up to 70% OFF on Electronics',
    overlay: 'from-[#0F4C8B]/85 via-[#0F4C8B]/55 to-transparent',
    highlight: 'SHOP NOW',
    image: heroElectronics,
  },
  {
    id: 2,
    title: 'New Phones Just Landed',
    subtitle: 'Premium smartphones at unbeatable prices',
    overlay: 'from-[#0a3a6b]/85 via-[#0a3a6b]/50 to-transparent',
    highlight: 'DISCOVER MORE',
    image: heroPhones,
  },
  {
    id: 3,
    title: 'Tech & Gaming Essentials',
    subtitle: 'Latest gadgets with exclusive deals',
    overlay: 'from-[#0F4C8B]/85 via-[#0F4C8B]/45 to-transparent',
    highlight: 'EXPLORE',
    image: heroTech,
  },
];

export function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((p) => (p + 1) % banners.length);
  const prevSlide = () => setCurrentSlide((p) => (p - 1 + banners.length) % banners.length);

  return (
    <div className="relative overflow-hidden">
      <div className="relative h-64 md:h-[26rem] bg-[#0F4C8B]">
        {banners.map((banner, index) => (
          <div
            key={banner.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={banner.image}
              alt={banner.title}
              className="absolute inset-0 w-full h-full object-cover"
              loading={index === 0 ? 'eager' : 'lazy'}
            />
            <div className={`absolute inset-0 bg-gradient-to-r ${banner.overlay}`} />
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
              <div className="text-white max-w-xl">
                <h2 className="text-3xl md:text-5xl font-bold mb-3 text-balance drop-shadow">
                  {banner.title}
                </h2>
                <p className="text-base md:text-xl text-blue-100 mb-5 text-balance drop-shadow">
                  {banner.subtitle}
                </p>
                <button className="bg-[#F59E0B] text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-[#d97706] transition shadow-lg">
                  {banner.highlight}
                </button>
              </div>
            </div>
          </div>
        ))}

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-[#0F4C8B] p-2 rounded-full transition"
          aria-label="Previous banner"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-[#0F4C8B] p-2 rounded-full transition"
          aria-label="Next banner"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentSlide ? 'bg-white w-8' : 'bg-white/50 w-2'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}