
import React from 'react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemove: (id: string) => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose, items, onUpdateQuantity, onRemove }) => {
  if (!isOpen) return null;

  const subtotal = items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const freeShippingThreshold = 75;
  const shippingLeft = Math.max(0, freeShippingThreshold - subtotal);
  const shippingPercent = Math.min(100, (subtotal / freeShippingThreshold) * 100);

  return (
    <div className="fixed inset-0 z-[100] flex">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      {/* Drawer */}
      <div className="relative ml-auto h-full w-full max-w-md bg-white shadow-2xl flex flex-col animate-slide-in">
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-bold font-manrope">Your Cart</h2>
            <span className="bg-primary/20 text-primary text-xs font-bold px-2 py-0.5 rounded-full">
              {items.reduce((a, b) => a + b.quantity, 0)}
            </span>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Shipping Tracker */}
        <div className="p-6 bg-gray-50">
          <div className="flex flex-col gap-3">
            <div className="flex justify-between items-center text-sm">
              <span className="font-semibold">Free Shipping Tracker</span>
              <span className="text-primary font-medium">
                {shippingLeft > 0 ? `$${shippingLeft.toFixed(2)} more for Free Shipping` : 'Free Shipping Unlocked!'}
              </span>
            </div>
            <div className="h-2 rounded-full bg-gray-200 overflow-hidden">
              <div 
                className="h-full bg-primary transition-all duration-500" 
                style={{ width: `${shippingPercent}%` }} 
              />
            </div>
          </div>
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center">
              <span className="material-symbols-outlined text-6xl text-gray-200 mb-4">shopping_cart</span>
              <p className="text-gray-400">Your cart is empty</p>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.product.id} className="flex gap-4">
                <div 
                  className="w-20 h-20 rounded-lg bg-gray-100 bg-center bg-no-repeat bg-cover flex-shrink-0"
                  style={{ backgroundImage: `url(${item.product.image})` }}
                />
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-sm leading-tight">{item.product.name}</h3>
                    <button 
                      onClick={() => onRemove(item.product.id)}
                      className="text-gray-400 hover:text-red-500 transition-colors"
                    >
                      <span className="material-symbols-outlined text-lg">delete</span>
                    </button>
                  </div>
                  <p className="text-primary font-bold text-sm mt-1">${item.product.price.toFixed(2)}</p>
                  <div className="flex items-center gap-3 mt-3">
                    <div className="flex items-center bg-gray-100 rounded-lg px-2 py-1">
                      <button 
                        onClick={() => onUpdateQuantity(item.product.id, -1)}
                        className="w-6 h-6 flex items-center justify-center font-bold hover:bg-white rounded transition-colors"
                      >-</button>
                      <span className="w-8 text-center text-xs font-bold">{item.quantity}</span>
                      <button 
                        onClick={() => onUpdateQuantity(item.product.id, 1)}
                        className="w-6 h-6 flex items-center justify-center font-bold hover:bg-white rounded transition-colors"
                      >+</button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-100 bg-white">
          <div className="flex justify-between items-center mb-1">
            <span className="text-gray-500">Subtotal</span>
            <span className="text-xl font-bold font-manrope">${subtotal.toFixed(2)}</span>
          </div>
          <p className="text-xs text-gray-400 text-center mb-6">Taxes and shipping calculated at checkout</p>
          <button className="w-full bg-primary text-white font-bold py-4 rounded-xl shadow-lg hover:brightness-105 active:scale-[0.98] transition-all flex items-center justify-center gap-2 uppercase tracking-wider text-sm">
            Checkout Now
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
          <button 
            onClick={onClose}
            className="w-full text-sm font-semibold py-4 hover:underline transition-all"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
