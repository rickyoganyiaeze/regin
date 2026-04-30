import { useEffect, useState } from 'react';
import { Flame } from 'lucide-react';

interface FlashSaleProps {
  endsAt?: Date;
}

export function FlashSale({ endsAt }: FlashSaleProps) {
  const [timeLeft, setTimeLeft] = useState({ hours: '00', minutes: '00', seconds: '00' });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const end = endsAt || new Date(Date.now() + 24 * 60 * 60 * 1000);
      const diff = end.getTime() - now.getTime();
      if (diff > 0) {
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);
        setTimeLeft({
          hours: String(hours).padStart(2, '0'),
          minutes: String(minutes).padStart(2, '0'),
          seconds: String(seconds).padStart(2, '0'),
        });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [endsAt]);

  return (
    <div className="bg-gradient-to-r from-red-50 to-orange-50 border-t border-b border-orange-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-3">
            <Flame className="w-6 h-6 text-red-500 animate-pulse" />
            <h3 className="text-lg md:text-xl font-bold text-gray-900">Flash Sale Ending Soon</h3>
          </div>
          <div className="flex items-center gap-2 md:gap-4 bg-white px-4 py-3 rounded-lg border-2 border-red-200">
            {(['hours', 'minutes', 'seconds'] as const).map((unit, i) => (
              <div key={unit} className="flex items-center gap-2 md:gap-4">
                {i > 0 && <div className="text-2xl font-bold text-gray-300">:</div>}
                <div className="text-center">
                  <div className="text-xl md:text-2xl font-bold text-[#0F4C8B]">{timeLeft[unit]}</div>
                  <div className="text-xs text-gray-500 font-semibold">{unit.slice(0, 4).toUpperCase()}</div>
                </div>
              </div>
            ))}
          </div>
          <button className="bg-red-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-600 transition hidden md:block">
            See All Deals
          </button>
        </div>
      </div>
    </div>
  );
}