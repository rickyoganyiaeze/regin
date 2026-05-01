import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#0F4C8B] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">REGIN</h2>
            <p className="text-blue-100 text-sm leading-relaxed">
              Your trusted online marketplace for electronics, fashion, phones, and more. Shop with confidence and enjoy amazing deals.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {['Home', 'Shop', 'Best Sellers', 'Special Offers'].map((l) => (
                <li key={l}><a href="#" className="text-blue-100 hover:text-white transition">{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Customer Service</h3>
            <ul className="space-y-2 text-sm">
              {['Contact Us', 'FAQ', 'Shipping Info', 'Returns & Refunds', 'Privacy Policy'].map((l) => (
                <li key={l}><a href="#" className="text-blue-100 hover:text-white transition">{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Get in Touch</h3>
            <ul className="space-y-3 text-sm">
             <li className="flex items-start gap-3"><Phone className="w-4 h-4 mt-1 flex-shrink-0" /><span className="text-blue-100">++234 707 685 7557</span></li>
              <li className="flex items-start gap-3"><Mail className="w-4 h-4 mt-1 flex-shrink-0" /><span className="text-blue-100">rickyoganyiaeze@gmail.com</span></li>
              <li className="flex items-start gap-3"><MapPin className="w-4 h-4 mt-1 flex-shrink-0" /><span className="text-blue-100">Nigeria</span></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-blue-400 py-8">
          <div className="flex items-center justify-center gap-6 mb-6">
            <a href="#" className="text-blue-100 hover:text-white transition" aria-label="Facebook"><Facebook className="w-5 h-5" /></a>
            <a href="#" className="text-blue-100 hover:text-white transition" aria-label="Twitter"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="text-blue-100 hover:text-white transition" aria-label="Instagram"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="text-blue-100 hover:text-white transition" aria-label="LinkedIn"><Linkedin className="w-5 h-5" /></a>
          </div>
          <div className="text-center text-sm text-blue-100">
            <p className="mb-2">© {new Date().getFullYear()} REGIN. All rights reserved.</p>
            <p>Made with care for online shopping excellence</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
