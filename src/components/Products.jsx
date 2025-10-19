import React from 'react';
import ProductCard from './ProductCard';
import { productsData } from '../utils/productData';

const Products = ({ addToCart, toggleFavorite, isFavorited }) => {
  return (
    <div id="collections" className="py-20 bg-gradient-to-b from-[#200E01] to-[#5B0202]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-[#e0ded2] mb-4">Featured Collection</h2>
          <p className="text-[#e0ded2] text-lg opacity-90">Curated pieces for the discerning individual</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {productsData.map((product, index) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              index={index}
              addToCart={addToCart}
              toggleFavorite={toggleFavorite}
              isFavorited={isFavorited(product.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;

