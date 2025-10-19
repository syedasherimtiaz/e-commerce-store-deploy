import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#200E01] text-[#e0ded2] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">NOCTURA</h3>
            <p className="text-[#e0ded2] opacity-80">Redefining elegance through darkness and sophistication.</p>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Shop</h4>
            <ul className="space-y-2">
              {['New Arrivals', 'Best Sellers', 'Collections', 'Sale'].map(item => (
                <li key={item}>
                  <a href="#" className="text-[#e0ded2] opacity-80 hover:opacity-100 hover:text-[#8B0000] transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Support</h4>
            <ul className="space-y-2">
              {['Contact Us', 'FAQs', 'Shipping', 'Returns'].map(item => (
                <li key={item}>
                  <a href="#" className="text-[#e0ded2] opacity-80 hover:opacity-100 hover:text-[#8B0000] transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Connect</h4>
            <div className="flex gap-4 mb-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="bg-[#5B0202] p-3 rounded-full hover:bg-[#8B0000] transition-colors">
                  <Icon size={20} />
                </a>
              ))}
            </div>
            <div className="mt-4">
              <input 
                type="email" 
                placeholder="Subscribe to our newsletter" 
                className="w-full px-4 py-2 rounded-lg bg-[#5B0202] text-[#e0ded2] placeholder-[#e0ded2] opacity-70 focus:opacity-100 outline-none" 
              />
            </div>
          </div>
        </div>
        <div className="border-t border-[#5B0202] pt-8 text-center">
          <p className="text-[#e0ded2] opacity-70">&copy; 2025 Noctura. All rights reserved. Crafted with passion.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;