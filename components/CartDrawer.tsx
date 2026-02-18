import React, { useState } from 'react';
import { CartItem } from '../types.ts';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemove: (id: string) => void;
  onCheckoutSuccess?: () => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose, items, onUpdateQuantity, onRemove, onCheckoutSuccess }) => {
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const subtotal = items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const freeShippingThreshold = 75;
  const shippingCost = subtotal >= freeShippingThreshold ? 0 : 5.99;
  const shippingLeft = Math.max(0, freeShippingThreshold - subtotal);
  const shippingPercent = Math.min(100, (subtotal / freeShippingThreshold) * 100);
  const total = subtotal + shippingCost;

  const handleCheckout = () => {
    setIsCheckingOut(true);
    // Simulate API call
    setTimeout(() => {
      setIsCheckingOut(false);
      setIsSuccess(true);
      if (onCheckoutSuccess) onCheckoutSuccess();
    }, 2000);
  };

  const handleClose = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex">
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
        onClick={handleClose}
      />
      
      <div className="relative ml-auto h-full w-full max-w-md bg-white shadow-2xl flex flex-col animate-slide-in">
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-bold font-manrope">Your Cart</h2>
            <span className="bg-primary/20 text-primary text-xs font-bold px-2 py-0.5 rounded-full">
              {items.reduce((a, b) => a + b.quantity, 0)}
            </span>
          </div>
          <button 
            onClick={handleClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {isSuccess ? (
          <div className="flex-1 flex flex-col items-center justify-center p-10 text-center animate-fade-in">
            <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-5xl text-primary">check_circle</span>
            </div>
            <h2 className="text-3xl font-display mb-4">Order Placed!</h2>
            <p className="text-slate-500 mb-8">Thank you for choosing VitalVibe. Your botanical protocol is being prepared for dispatch.</p>
            <button 
              onClick={handleClose}
              className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold tracking-widest hover:brightness-110 transition-all"
            >
              CONTINUE SHOPPING
            </button>
          </div>
        ) : (
          <>
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

            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-6">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <span className="material-symbols-outlined text-6xl text-gray-200 mb-4">shopping_cart</span>
                  <p className="text-gray-400">Your cart is empty</p>
                </div>
              ) : (
                items.map((item) => (
                  <div key={item.product.id} className="flex gap-4 group">
                    <div 
                      className="w-20 h-20 rounded-lg bg-gray-100 bg-center bg-no-repeat bg-cover flex-shrink-0"
                      style={{ backgroundImage: `url(${item.product.image})` }}
                    />
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <h3 className="font-bold text-sm leading-tight">{item.product.name}</h3>
                        <button 
                          onClick={() => onRemove(item.product.id)}
                          className="text-gray-300 hover:text-red-500 transition-colors"
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

            <div className="p-6 border-t border-gray-100 bg-white space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm text-gray-500">
                  <span>Subtotal</span>
                  <span className="font-semibold text-slate-900">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>Shipping</span>
                  <span className="font-semibold text-slate-900">{shippingCost === 0 ? 'FREE' : `$${shippingCost.toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between text-lg font-bold font-manrope pt-2 border-t border-gray-50">
                  <span>Total</span>
                  <span className="text-primary">${total.toFixed(2)}</span>
                </div>
              </div>
              
              <button 
                onClick={handleCheckout}
                disabled={items.length === 0 || isCheckingOut}
                className={`w-full bg-slate-900 text-white font-bold py-4 rounded-xl shadow-lg hover:brightness-105 active:scale-[0.98] transition-all flex items-center justify-center gap-2 uppercase tracking-wider text-sm ${items.length === 0 || isCheckingOut ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isCheckingOut ? (
                  <span className="material-symbols-outlined animate-spin">sync</span>
                ) : (
                  <>
                    Secure Checkout
                    <span className="material-symbols-outlined text-sm">lock</span>
                  </>
                )}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;