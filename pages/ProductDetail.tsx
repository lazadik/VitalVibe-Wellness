import React, { useState } from 'react';
import { Product } from '../types.ts';

interface ProductDetailProps {
  product: Product;
  onAddToCart: (p: Product) => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product, onAddToCart }) => {
  const [purchaseType, setPurchaseType] = useState<'once' | 'subscribe'>('once');

  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      {/* Breadcrumbs */}
      <nav className="flex gap-2 text-sm font-medium text-gray-400 mb-12">
        <a href="#/" className="hover:text-primary transition-colors">Home</a>
        <span>/</span>
        <a href="#/shop" className="hover:text-primary transition-colors">Supplements</a>
        <span>/</span>
        <span className="text-slate-900">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Left: Product Images */}
        <div className="space-y-6">
          <div className="w-full aspect-square bg-gray-50 rounded-[3rem] overflow-hidden flex items-center justify-center p-12">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-contain hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
             {[1,2,3,4].map(i => (
               <div key={i} className={`aspect-square rounded-2xl bg-gray-50 flex items-center justify-center p-4 border-2 ${i === 1 ? 'border-primary' : 'border-transparent'}`}>
                  <img src={product.image} className="w-full h-full object-contain opacity-50" />
               </div>
             ))}
          </div>
        </div>

        {/* Right: Product Info */}
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="flex text-primary">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-sm fill-1">star</span>
                ))}
              </div>
              <span className="text-xs text-slate-400 font-bold tracking-widest uppercase">({product.rating} / {product.reviews} Reviews)</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-display">{product.name}</h1>
            <p className="text-3xl font-manrope font-extrabold text-primary">${product.price.toFixed(2)}</p>
            <p className="text-slate-500 leading-relaxed font-medium">
              {product.description} A masterfully crafted blend of adaptogens and nootropics designed to help you maintain calm focus and emotional balance through the day.
            </p>
          </div>

          <div className="space-y-6">
            <p className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-slate-400">Purchase Option</p>
            <div className="flex p-1.5 bg-gray-100 rounded-2xl h-16">
              <button 
                onClick={() => setPurchaseType('once')}
                className={`flex-1 rounded-xl text-xs font-bold tracking-widest transition-all ${purchaseType === 'once' ? 'bg-white shadow-lg text-slate-900' : 'text-slate-400 hover:text-slate-600'}`}
              >
                ONE-TIME PURCHASE
              </button>
              <button 
                onClick={() => setPurchaseType('subscribe')}
                className={`flex-1 rounded-xl text-xs font-bold tracking-widest transition-all ${purchaseType === 'subscribe' ? 'bg-white shadow-lg text-primary' : 'text-slate-400 hover:text-slate-600'}`}
              >
                SUBSCRIBE & SAVE (15%)
              </button>
            </div>
            
            <button 
              onClick={() => onAddToCart(product)}
              className="w-full h-16 bg-primary text-white text-sm font-extrabold tracking-[0.2em] rounded-2xl shadow-xl shadow-primary/20 hover:scale-[1.02] transition-all flex items-center justify-center gap-3"
            >
              <span className="material-symbols-outlined">shopping_cart</span>
              ADD TO CART
            </button>
          </div>

          <div className="p-8 rounded-[2rem] bg-gray-50 border border-gray-100 space-y-4">
            <h3 className="text-lg font-manrope font-bold flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">schedule</span>
              How to Use
            </h3>
            <p className="text-sm leading-relaxed text-slate-500 font-medium">
              Take 2 capsules daily with a glass of water, preferably in the morning with a light meal. For best results, use consistently for at least 30 days to allow botanicals to accumulate in your system.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-sm font-extrabold tracking-widest uppercase text-slate-400">Key Ingredients</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { name: 'Ashwagandha', dose: '300mg • Stress Control', icon: 'psychology' },
                { name: 'L-Theanine', dose: '200mg • Calm Focus', icon: 'eco' },
                { name: 'Rhodiola Rosea', dose: '150mg • Fatigue Relief', icon: 'vital_signs' },
                { name: 'Vitamin B Complex', dose: '100% DV • Energy', icon: 'bolt' }
              ].map((ing) => (
                <div key={ing.name} className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-gray-100 shadow-sm">
                  <span className="material-symbols-outlined text-primary text-2xl">{ing.icon}</span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest">{ing.name}</p>
                    <p className="text-[10px] font-bold text-slate-300 tracking-wider uppercase mt-0.5">{ing.dose}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetail;