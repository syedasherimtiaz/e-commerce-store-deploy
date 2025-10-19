import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';
import CartModal from './components/CartModal';
import FavoritesModal from './components/FavoritesModal';
import './App.css';

function App() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);

  // Add to cart function
  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  // Update quantity in cart
  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity === 0) {
      removeFromCart(productId);
      return;
    }
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Remove from cart
  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  // Toggle favorite
  const toggleFavorite = (product) => {
    setFavorites(prevFavorites => {
      const isFavorite = prevFavorites.find(item => item.id === product.id);
      if (isFavorite) {
        return prevFavorites.filter(item => item.id !== product.id);
      }
      return [...prevFavorites, product];
    });
  };

  // Remove from favorites
  const removeFromFavorites = (productId) => {
    setFavorites(prevFavorites => prevFavorites.filter(item => item.id !== productId));
  };

  // Check if product is favorited
  const isFavorited = (productId) => {
    return favorites.some(item => item.id === productId);
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="font-sans">
      <Navbar 
        setIsAuthModalOpen={setIsAuthModalOpen}
        setIsCartOpen={setIsCartOpen}
        setIsFavoritesOpen={setIsFavoritesOpen}
        cartCount={cartCount}
        favoritesCount={favorites.length}
      />
      <Hero />
      <About />
      <Products 
        addToCart={addToCart}
        toggleFavorite={toggleFavorite}
        isFavorited={isFavorited}
      />
      <Contact />
      <Footer />
      
      {isAuthModalOpen && (
        <AuthModal setIsAuthModalOpen={setIsAuthModalOpen} />
      )}
      
      <CartModal 
        isOpen={isCartOpen}
        setIsOpen={setIsCartOpen}
        cartItems={cartItems}
        updateQuantity={updateQuantity}
        removeFromCart={removeFromCart}
      />
      
      <FavoritesModal 
        isOpen={isFavoritesOpen}
        setIsOpen={setIsFavoritesOpen}
        favorites={favorites}
        removeFromFavorites={removeFromFavorites}
        addToCart={addToCart}
      />
    </div>
  );
}

export default App;