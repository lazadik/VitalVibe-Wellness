
import React, { useState, useMemo } from 'react';
import { PRODUCTS } from '../constants';
import { Category, Product } from '../types';

interface ShopProps {
  onAddToCart: (p: Product) => void;
}

const Shop: React.FC<ShopProps> = ({ onAddToCart }) => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState(100);
  const [sortBy, setSortBy] = useState('Popular');

  const categories = Object.values(Category);

  const filteredProducts = useMemo(() => {
    let result = PRODUCTS.filter(p => p.price <= priceRange);
    if (activeCategory) {
      result = result.filter(p => p.category === activeCategory);
    }
    
    if (sortBy === 'Price Low') result.sort((a, b) => a.price - b.price);
    else if (sortBy === 'Price High') result.sort((a, b) => b.price - a.price);
    else if (sortBy === 'Rating') result.sort((a, b) => b.rating - a.rating);

    return result;
  }, [activeCategory, priceRange, sortBy]);

  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      {/* Breadcrumbs */}
      <nav className="flex gap-2 text-sm font-medium text-gray-400 mb-8">
        <a href="#/" className="hover:text-primary transition-colors">Home</a>
        <span>/</span>
        <span className="text-slate-900">Shop All</span>
      </nav>

      <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
        <div>
          <h1 className="text-5xl font-display mb-4">Shop All Supplements</h1>
          <p className="text-gray-500 font-medium">Premium nutrients scientifically formulated for your daily vitality.</p>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-xs font-bold uppercase tracking-widest opacity-40">Sort by:</span>
          <select 
            className="bg-gray-100 border-none rounded-xl px-6 py-3 text-sm font-bold focus:ring-1 focus:ring-primary cursor-pointer"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option>Popular</option>
            <option>Rating</option>
            <option>Price Low</option>
            <option>Price High</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Sidebar */}
        <aside className="w-full lg:w-64 flex-shrink-0">
          <div className="sticky top-28 space-y-12">
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-6">Categories</h3>
              <div className="space-y-2">
                <button 
                  onClick={() => setActiveCategory(null)}
                  className={`w-full text-left px-5 py-3 rounded-xl text-sm font-bold transition-all ${!activeCategory ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'hover:bg-gray-100'}`}
                >
                  All Products
                </button>
                {categories.map((cat) => (
                  <button 
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`w-full text-left px-5 py-3 rounded-xl text-sm font-bold transition-all ${activeCategory === cat ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'hover:bg-gray-100'}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-6">Price Range: ${priceRange}</h3>
              <input 
                type="range" 
                min="0" 
                max="250" 
                step="10"
                value={priceRange}
                onChange={(e) => setPriceRange(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-primary"
              />
              <div className="flex justify-between text-[10px] font-bold text-gray-300 mt-2">
                <span>$0</span>
                <span>$250+</span>
              </div>
            </div>

            <button 
              onClick={() => { setActiveCategory(null); setPriceRange(250); }}
              className="w-full bg-slate-900 text-white py-4 rounded-xl text-xs font-bold tracking-widest hover:brightness-110 transition-all"
            >
              CLEAR FILTERS
            </button>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          {filteredProducts.length === 0 ? (
            <div className="py-24 text-center">
              <span className="material-symbols-outlined text-6xl text-gray-200 mb-4">search_off</span>
              <p className="text-gray-400">No products found matching your filters.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((p) => (
                <div key={p.id} className="group flex flex-col bg-white rounded-[2.5rem] overflow-hidden border border-gray-50 hover:shadow-2xl transition-all duration-500">
                  <div className="relative aspect-square overflow-hidden bg-gray-50 p-10 flex items-center justify-center">
                    {p.tag && (
                      <div className="absolute top-6 left-6 bg-primary text-white text-[9px] font-extrabold px-4 py-1.5 rounded-full uppercase tracking-widest z-10 shadow-lg shadow-primary/10">
                        {p.tag}
                      </div>
                    )}
                    <img 
                      className="h-full w-full object-contain group-hover:scale-110 transition-transform duration-700" 
                      src={p.image}
                      alt={p.name}
                    />
                    <div className="absolute bottom-6 left-6 right-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                      <button 
                        onClick={() => onAddToCart(p)}
                        className="w-full bg-slate-900 text-white h-14 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-2xl hover:bg-black"
                      >
                        <span className="material-symbols-outlined text-lg">add_shopping_cart</span>
                        Add to Cart
                      </button>
                    </div>
                  </div>
                  
                  <div className="p-8 flex flex-col gap-3">
                    <div className="flex items-center gap-1.5 text-primary">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={`material-symbols-outlined text-sm ${i < Math.floor(p.rating) ? 'fill-1' : ''}`}>star</span>
                      ))}
                      <span className="text-[10px] text-gray-400 font-extrabold ml-1 uppercase tracking-widest">{p.rating} ({p.reviews})</span>
                    </div>
                    <a href={`#/product/${p.id}`} className="hover:text-primary transition-colors">
                      <h3 className="font-display text-2xl">{p.name}</h3>
                    </a>
                    <p className="text-slate-500 text-xs leading-relaxed line-clamp-2 font-medium">{p.description}</p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-2xl font-manrope font-extrabold">${p.price.toFixed(2)}</span>
                      <span className="text-[9px] text-slate-300 font-extrabold uppercase tracking-widest">{p.count}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Shop;
