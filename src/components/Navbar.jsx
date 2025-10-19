import React, { useState, useEffect } from 'react';
import { ShoppingCart, Menu, X, User, Heart, Search } from 'lucide-react';

const Navbar = ({ setIsAuthModalOpen, setIsCartOpen, setIsFavoritesOpen, cartCount, favoritesCount }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll function
  const smoothScrollTo = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      setIsMenuOpen(false); // Close mobile menu after clicking
    }
  };

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Collections', id: 'collections' },
    { name: 'About', id: 'about' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <nav className={`fixed w-full z-40 transition-all duration-300 ${scrolled ? 'bg-[#200E01] shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <h1 className="text-3xl font-bold text-[#e0ded2] tracking-wider cursor-pointer">NOCTURA</h1>
          </div>
          
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={`#${link.id}`}
                onClick={(e) => smoothScrollTo(e, link.id)}
                className="text-[#e0ded2] hover:text-[#8B0000] transition-colors font-medium cursor-pointer"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <button className="text-[#e0ded2] hover:text-[#8B0000] transition-colors">
              <Search size={22} />
            </button>
            <button 
              onClick={() => setIsAuthModalOpen(true)} 
              className="text-[#e0ded2] hover:text-[#8B0000] transition-colors"
            >
              <User size={22} />
            </button>
            <button 
              onClick={() => setIsFavoritesOpen(true)}
              className="text-[#e0ded2] hover:text-[#8B0000] transition-colors relative"
            >
              <Heart size={22} />
              {favoritesCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#8B0000] text-[#e0ded2] rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {favoritesCount}
                </span>
              )}
            </button>
            <button 
              onClick={() => setIsCartOpen(true)}
              className="text-[#e0ded2] hover:text-[#8B0000] transition-colors relative"
            >
              <ShoppingCart size={22} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#8B0000] text-[#e0ded2] rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartCount}
                </span>
              )}
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-[#e0ded2]">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-[#200E01] border-t border-[#5B0202] animate-slideDown">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={`#${link.id}`}
                onClick={(e) => smoothScrollTo(e, link.id)}
                className="block text-[#e0ded2] hover:text-[#8B0000] transition-colors font-medium cursor-pointer"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;