import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to collections section
  const scrollToCollections = () => {
    const collectionsSection = document.getElementById('collections');
    if (collectionsSection) {
      collectionsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div id='home' className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-100 ease-out"
        style={{
          backgroundImage: 'url(pexels-viktoria-alipatova-1083711-4169370.jpg)',
          transform: `translateY(${scrollY * 0.5}px)`,
          willChange: 'transform'
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#200E01]/90 via-[#5B0202]/85 to-[#8B0000]/90"></div>
      </div>

      {/* Animated Blobs with Parallax */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-20 left-10 w-72 h-72 bg-[#8B0000] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        ></div>
        <div 
          className="absolute top-40 right-10 w-72 h-72 bg-[#5B0202] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"
          style={{ transform: `translateY(${scrollY * 0.4}px)` }}
        ></div>
        <div 
          className="absolute bottom-20 left-1/2 w-72 h-72 bg-[#200E01] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"
          style={{ transform: `translateY(${scrollY * 0.2}px)` }}
        ></div>
      </div>
      
      {/* Content with Parallax */}
      <div 
        className="relative z-10 text-center px-4 animate-fadeIn"
        style={{ transform: `translateY(${scrollY * 0.15}px)` }}
      >
        <h2 className="text-6xl md:text-8xl font-bold text-[#e0ded2] mb-4 tracking-tight drop-shadow-2xl">NOCTURA</h2>
        <p className="text-2xl md:text-3xl text-[#e0ded2] mb-8 font-light drop-shadow-lg">Where Elegance Meets Darkness</p>
        <p className="text-lg text-[#e0ded2] mb-12 max-w-2xl mx-auto opacity-90 drop-shadow-md">Discover our exclusive collection of premium clothing that defines sophistication</p>
        <button 
          onClick={scrollToCollections}
          className="bg-[#8B0000] text-[#e0ded2] px-10 py-4 rounded-full font-semibold text-lg hover:bg-[#5B0202] transition-all transform hover:scale-105 inline-flex items-center gap-2 shadow-2xl cursor-pointer"
        >
          Explore Collection <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default Hero;

