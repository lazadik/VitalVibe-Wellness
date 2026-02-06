
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Ingredients from './pages/Ingredients';
import ProductDetail from './pages/ProductDetail';
import CartDrawer from './components/CartDrawer';
import NewsletterPopup from './components/NewsletterPopup';
import WellnessGuide from './components/WellnessGuide';
import { Product, CartItem } from './types';
import { PRODUCTS } from './constants';

const App: React.FC = () => {
  const [currentHash, setCurrentHash] = useState(window.location.hash || '#/');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isGuideOpen, setIsGuideOpen] = useState(false);
  const [isPageLoading, setIsPageLoading] = useState(false);

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

  const renderPage = () => {
    let PageComponent;
    if (currentHash === '#/') PageComponent = <Home onOpenGuide={() => setIsGuideOpen(true)} />;
    else if (currentHash === '#/shop') PageComponent = <Shop onAddToCart={addToCart} />;
    else if (currentHash === '#/ingredients') PageComponent = <Ingredients />;
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
