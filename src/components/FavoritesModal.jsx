import React from 'react';
import { X, Heart, ShoppingCart, Star } from 'lucide-react';

const FavoritesModal = ({ isOpen, setIsOpen, favorites, removeFromFavorites, addToCart }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-[#e0ded2] rounded-lg max-w-5xl w-full max-h-[90vh] overflow-hidden animate-slideUp">
        {/* Header */}
        <div className="bg-[#200E01] text-[#e0ded2] p-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Heart size={28} fill="#8B0000" color="#8B0000" />
            <h2 className="text-3xl font-bold">My Favorites</h2>
          </div>
          <button 
            onClick={() => setIsOpen(false)} 
            className="hover:text-[#8B0000] transition-colors"
          >
            <X size={28} />
          </button>
        </div>

        {/* Favorites Items */}
        <div className="p-6 overflow-y-auto max-h-[75vh]">
          {favorites.length === 0 ? (
            <div className="text-center py-12">
              <Heart size={64} className="mx-auto text-[#5B0202] opacity-30 mb-4" />
              <p className="text-[#5B0202] text-xl mb-2">No favorites yet</p>
              <p className="text-[#5B0202] opacity-80">Start adding items you love!</p>
              <button 
                onClick={() => setIsOpen(false)}
                className="mt-6 bg-[#8B0000] text-[#e0ded2] px-8 py-3 rounded-full font-semibold hover:bg-[#5B0202] transition-all"
              >
                Browse Collection
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {favorites.map((item) => (
                <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1">
                  <div className="relative">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-48 object-cover"
                    />
                    <button 
                      onClick={() => removeFromFavorites(item.id)}
                      className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-lg hover:bg-[#8B0000] hover:text-white transition-all group"
                    >
                      <Heart size={20} fill="#8B0000" color="#8B0000" className="group-hover:fill-white group-hover:text-white" />
                    </button>
                  </div>
                  <div className="p-4">
                    <div className="text-xs text-[#8B0000] font-semibold mb-1">{item.category}</div>
                    <h3 className="text-[#200E01] font-semibold text-lg mb-2 line-clamp-2">{item.name}</h3>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[#5B0202] font-bold text-xl">${item.price}</span>
                      <div className="flex items-center gap-1">
                        <Star size={16} fill="#8B0000" color="#8B0000" />
                        <span className="text-[#5B0202] text-sm">{item.rating}</span>
                      </div>
                    </div>
                    <button 
                      onClick={() => {
                        addToCart(item);
                      }}
                      className="w-full bg-[#8B0000] text-[#e0ded2] py-2 rounded-full font-semibold hover:bg-[#5B0202] transition-all flex items-center justify-center gap-2"
                    >
                      <ShoppingCart size={18} />
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FavoritesModal;