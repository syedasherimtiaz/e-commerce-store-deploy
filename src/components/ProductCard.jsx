import React from 'react';
import { Heart, Star } from 'lucide-react';

const ProductCard = ({ product, index, addToCart, toggleFavorite, isFavorited }) => {
  return (
    <div className="group animate-fadeIn" style={{ animationDelay: `${index * 0.1}s` }}>
      <div className="bg-[#e0ded2] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
        <div className="relative overflow-hidden aspect-square">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#200E01] to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
          
          {/* Favorite Button */}
          <button 
            onClick={() => toggleFavorite(product)}
            className={`absolute top-4 right-4 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 ${
              isFavorited 
                ? 'bg-[#8B0000] text-white' 
                : 'bg-white hover:bg-[#8B0000] hover:text-white'
            }`}
          >
            <Heart 
              size={20} 
              fill={isFavorited ? 'white' : 'none'} 
              color={isFavorited ? 'white' : '#8B0000'}
            />
          </button>
          
          {/* Add to Cart Button */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button 
              className="bg-[#8B0000] text-[#e0ded2] px-6 py-2 rounded-full font-semibold hover:bg-[#5B0202] transition-colors" 
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        </div>
        
        <div className="p-4">
          <div className="text-xs text-[#8B0000] font-semibold mb-1">{product.category}</div>
          <h3 className="text-[#200E01] font-semibold text-lg mb-2 line-clamp-2">{product.name}</h3>
          <div className="flex items-center justify-between">
            <span className="text-[#5B0202] font-bold text-xl">${product.price}</span>
            <div className="flex items-center gap-1">
              <Star size={16} fill="#8B0000" color="#8B0000" />
              <span className="text-[#5B0202] text-sm">{product.rating}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;