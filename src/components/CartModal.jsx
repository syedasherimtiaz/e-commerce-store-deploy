import React from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';

const CartModal = ({ isOpen, setIsOpen, cartItems, updateQuantity, removeFromCart }) => {
  if (!isOpen) return null;

  const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-[#e0ded2] rounded-lg max-w-3xl w-full max-h-[90vh] overflow-hidden animate-slideUp">
        {/* Header */}
        <div className="bg-[#200E01] text-[#e0ded2] p-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <ShoppingBag size={28} />
            <h2 className="text-3xl font-bold">Shopping Cart</h2>
          </div>
          <button 
            onClick={() => setIsOpen(false)} 
            className="hover:text-[#8B0000] transition-colors"
          >
            <X size={28} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="p-6 overflow-y-auto max-h-[60vh]">
          {cartItems.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingBag size={64} className="mx-auto text-[#5B0202] opacity-30 mb-4" />
              <p className="text-[#5B0202] text-xl">Your cart is empty</p>
              <button 
                onClick={() => setIsOpen(false)}
                className="mt-6 bg-[#8B0000] text-[#e0ded2] px-8 py-3 rounded-full font-semibold hover:bg-[#5B0202] transition-all"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="bg-white rounded-lg p-4 flex gap-4 shadow-md hover:shadow-lg transition-shadow">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="text-[#200E01] font-semibold text-lg mb-1">{item.name}</h3>
                    <p className="text-[#8B0000] text-sm mb-2">{item.category}</p>
                    <p className="text-[#5B0202] font-bold text-xl">${item.price}</p>
                  </div>
                  <div className="flex flex-col justify-between items-end">
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-[#8B0000] hover:text-[#5B0202] transition-colors"
                    >
                      <Trash2 size={20} />
                    </button>
                    <div className="flex items-center gap-2 bg-[#e0ded2] rounded-full px-3 py-1">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="text-[#8B0000] hover:text-[#5B0202] transition-colors"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="text-[#200E01] font-semibold w-8 text-center">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="text-[#8B0000] hover:text-[#5B0202] transition-colors"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="bg-[#200E01] text-[#e0ded2] p-6">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xl font-semibold">Total:</span>
              <span className="text-3xl font-bold">${totalPrice.toFixed(2)}</span>
            </div>
            <button className="w-full bg-[#8B0000] text-[#e0ded2] py-4 rounded-full font-semibold text-lg hover:bg-[#5B0202] transition-all transform hover:scale-105">
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartModal;