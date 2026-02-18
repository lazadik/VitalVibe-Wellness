import React, { useState, useEffect } from 'react';
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';
import Home from './pages/Home.tsx';
import Shop from './pages/Shop.tsx';
import Ingredients from './pages/Ingredients.tsx';
import ProductDetail from './pages/ProductDetail.tsx';
import CartDrawer from './components/CartDrawer.tsx';
import NewsletterPopup from './components/NewsletterPopup.tsx';
import WellnessGuide from './components/WellnessGuide.tsx';
import { Product, CartItem } from './types.ts';
import { PRODUCTS } from './constants.ts';

const App: React.FC = () => {
  const [currentHash, setCurrentHash] = useState(window.location.hash || '#/');
  const [cart, setCart] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('vibe_cart');
    return saved ? JSON.parse(saved) : [];
  });
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isGuideOpen, setIsGuideOpen] = useState(false);
  const [isPageLoading, setIsPageLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    localStorage.setItem('vibe_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    const handleHashChange = () => {
      setIsPageLoading(true);
      setTimeout(() => {
        setCurrentHash(window.location.hash || '#/');
        setIsPageLoading(false);
        window.scrollTo(0, 0);
      }, 50);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item => item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { product, quantity: 1 }];
    });
    setTimeout(() => setIsCartOpen(true), 300);
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.product.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.product.id !== id));
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    window.location.hash = '#/shop';
  };

  const clearCart = () => setCart([]);

  const renderPage = () => {
    let PageComponent;
    if (currentHash === '#/') PageComponent = <Home onOpenGuide={() => setIsGuideOpen(true)} />;
    else if (currentHash === '#/shop') PageComponent = <Shop onAddToCart={addToCart} searchQuery={searchQuery} onClearSearch={() => setSearchQuery('')} />;
    else if (currentHash === '#/ingredients') PageComponent = <Ingredients />;
    else if (currentHash === '#/about') PageComponent = (
      <div className="max-w-7xl mx-auto py-24 px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <div>
             <span className="text-primary text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block">Our Origin</span>
             <h1 className="text-5xl md:text-7xl font-display mb-8">Purity Meets Performance.</h1>
             <p className="text-lg text-slate-500 leading-relaxed mb-6">
              Founded by a team of biochemists and traditional herbalists, VitalVibe was born from a simple realization: the modern world demands more from us, yet gives us less of the nutrients we truly need.
             </p>
             <p className="text-lg text-slate-500 leading-relaxed">
              We travel the globe to source raw, organic botanicals and use clinical-grade extraction methods to ensure every capsule delivers on its promise.
             </p>
          </div>
          <div className="bg-gray-100 rounded-[3rem] aspect-square overflow-hidden">
             <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAa4o4jQHCxXmUt1C8ypvAdLViRp57X-tCjQPfzwJurVTCPnpwgNoqSQ8tsvB3BmftXCib20KZiJn6AQsCV5jBBIRn5o_gr2z4a_vHYxmvx0oBU0mHoa6qtvwvj979qtfhVKcXXQt91l3rHYzU6uSI49uomWV1frmyaW298upflmQNkxGzGeIWKMY3wFS_T3Xp36zbz6ljPS40c4aPK9U6AZYE_7JnjT0FfbSbiiR9ObFrXnXTN6Z_PlQjJCHs5D--bIYubhCIBrZIF" className="w-full h-full object-cover opacity-80" alt="Nature" />
          </div>
        </div>
      </div>
    );
    else if (currentHash === '#/science') PageComponent = (
      <div className="max-w-7xl mx-auto py-24 px-6 text-center">
        <span className="text-primary text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block">Efficacy Research</span>
        <h1 className="text-5xl md:text-7xl font-display mb-12">Clinical Precision.</h1>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: 'Dual Extraction', desc: 'We utilize both water and alcohol extraction to capture the full spectrum of beneficial compounds.' },
            { title: 'Bioavailability', desc: 'Our formulas are optimized with natural piperine and lipids to ensure maximum absorption.' },
            { title: 'Lab Verified', desc: 'Every batch is third-party tested for purity, potency, and the absence of heavy metals.' }
          ].map(s => (
            <div key={s.title} className="p-10 bg-white rounded-[2.5rem] border border-gray-100 shadow-sm">
              <span className="material-symbols-outlined text-4xl text-primary mb-6">biotech</span>
              <h3 className="text-xl font-bold mb-4">{s.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    );
    else {
      const productMatch = currentHash.match(/#\/product\/(.+)/);
      if (productMatch) {
        const productId = productMatch[1];
        const product = PRODUCTS.find(p => p.id === productId);
        if (product) PageComponent = <ProductDetail product={product} onAddToCart={addToCart} />;
      }
    }

    if (!PageComponent) PageComponent = <Home onOpenGuide={() => setIsGuideOpen(true)} />;

    return (
      <div key={currentHash} className={`page-transition ${isPageLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}>
        {PageComponent}
      </div>
    );
  };

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-primary/20">
      <Header 
        cartCount={cartCount} 
        onCartClick={() => setIsCartOpen(true)}
        onSearch={handleSearch}
      />
      
      <main className="flex-1">
        {renderPage()}
      </main>

      <Footer />

      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onUpdateQuantity={updateQuantity}
        onRemove={removeFromCart}
        onCheckoutSuccess={clearCart}
      />

      <NewsletterPopup />

      {isGuideOpen && (
        <WellnessGuide 
          onClose={() => setIsGuideOpen(false)} 
          onAddToCart={addToCart}
        />
      )}
    </div>
  );
};

export default App;