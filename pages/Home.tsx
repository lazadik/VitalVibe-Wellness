
import React from 'react';
import { PRODUCTS } from '../constants';

interface HomeProps {
  onOpenGuide?: () => void;
}

const Home: React.FC<HomeProps> = ({ onOpenGuide }) => {
  const featuredProducts = PRODUCTS.slice(0, 4);

  return (
    <div className="page-transition">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex flex-col items-center justify-center pt-12 pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-primary blur-[120px] rounded-full"></div>
          <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-primary/40 blur-[120px] rounded-full"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-5xl px-6">
          <h1 className="text-6xl md:text-8xl font-display mb-12 leading-[1.1] animate-fade-in">
            Elevate Your <br/><span className="italic">Essence.</span>
          </h1>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24">
            <div className="flex flex-col items-end gap-10 text-right order-2 md:order-1 max-w-[200px]">
              <div className="flex flex-col group cursor-default">
                <span className="text-[10px] uppercase tracking-widest opacity-40 mb-2 font-bold">Energy Levels</span>
                <span className="text-5xl font-display group-hover:text-primary transition-colors">63%</span>
                <p className="text-[10px] opacity-40 mt-2 font-medium">Average increase in daily focus & stamina</p>
              </div>
              <div className="flex flex-col group cursor-default">
                <span className="text-[10px] uppercase tracking-widest opacity-40 mb-2 font-bold">Absorption</span>
                <span className="text-5xl font-display group-hover:text-primary transition-colors">22%</span>
                <p className="text-[10px] opacity-40 mt-2 font-medium">Faster onset compared to standard pills</p>
              </div>
            </div>
            
            <div className="relative order-1 md:order-2">
              <div className="relative z-10 bg-white/5 blur-backdrop rounded-[3rem] p-4 group">
                <img 
                  alt="VitalVibe Energy Supplement Bottle" 
                  className="w-64 md:w-80 h-auto rounded-[2.5rem] shadow-2xl rotate-3 group-hover:rotate-0 transition-all duration-700" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRdwhkxxqSNu785oqf8H42Y5-OtBxstO_S8RNcAjaJm309qehKwmWPcNd6QKbIT39wVGkZw3US8o56IHzW2EDwOnhixPftjZTRRkTFaKON9KxOtghM4-ovW6_wBTbt4cDFt6l5ULqtYaJXQCEyz5Z3xwYDbR9qdsMASET1qeMpZp23YSw6RD2QslhQ9olj5Njum0vcILbqtAPK166zgz2Tcu8db7e-qycDv0762Ua0uN6TXlqBpkbNRyCoem-sfK8YEBgwmuzvg3Wd"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-white p-5 rounded-2xl shadow-xl flex items-center gap-4 border border-gray-100 z-20 hover:scale-105 transition-transform cursor-default">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined fill-1">bolt</span>
                </div>
                <div className="text-left">
                  <p className="text-[9px] uppercase font-extrabold tracking-widest opacity-40">Natural Fuel</p>
                  <p className="text-sm font-bold font-manrope">Clean Energy</p>
                </div>
              </div>
            </div>
            
            <div className="text-left order-3 max-w-[260px]">
              <h3 className="text-xl font-manrope font-bold mb-4">Masterfully Crafted</h3>
              <p className="text-sm opacity-50 leading-relaxed mb-8">
                Clinically effective blends designed to help you jumpstart your day or power your recovery with pure nature.
              </p>
              <div className="flex flex-col gap-4">
                <a href="#/shop" className="inline-flex items-center gap-4 bg-primary text-white px-8 py-4 rounded-full font-bold group hover:scale-[1.05] transition-all shadow-xl shadow-primary/20">
                  <span>Shop Essentials</span>
                  <span className="material-icons-outlined text-sm group-hover:translate-x-1 transition-transform">east</span>
                </a>
                {onOpenGuide && (
                  <button 
                    onClick={onOpenGuide}
                    className="inline-flex items-center justify-start gap-2 text-xs font-bold tracking-widest text-slate-400 hover:text-primary transition-all active:scale-95"
                  >
                    <span className="material-symbols-outlined text-sm">psychology</span>
                    CONSULT THE GUIDE
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Supplement Grid */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-3 block">Daily Essentials</span>
            <h2 className="text-4xl md:text-5xl font-display">Crafted for Human<br/>Potential</h2>
          </div>
          <div className="flex flex-col md:items-end gap-6">
            <p className="text-sm opacity-50 max-w-[280px] md:text-right">Harnessing the intelligence of nature for sustained vitality and focus.</p>
            <a href="#/shop" className="flex items-center gap-3 px-8 py-3 border border-black/10 rounded-full hover:bg-black/5 transition-all text-sm font-bold tracking-wide group">
              Explore More <span className="material-icons-outlined text-sm bg-primary text-white rounded-full p-1 leading-none group-hover:rotate-45 transition-transform">east</span>
            </a>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((p) => (
            <a key={p.id} href={`#/product/${p.id}`} className="group cursor-pointer">
              <div className="bg-gray-50 aspect-[4/5] rounded-[2rem] mb-6 overflow-hidden relative p-8 flex items-center justify-center hover-lift">
                <img 
                  alt={p.name} 
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700" 
                  src={p.image}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
              </div>
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-display text-2xl group-hover:text-primary transition-colors">{p.name}</h4>
                <span className="material-icons-outlined text-sm opacity-20 group-hover:opacity-100 group-hover:translate-x-1 transition-all">east</span>
              </div>
              <div className="flex justify-between text-xs font-bold uppercase tracking-widest opacity-40">
                <span>{p.rating} ({p.reviews} Reviews)</span>
                <span className="text-slate-900">${p.price.toFixed(2)}</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Feature Section */}
      <section className="py-12 px-6 max-w-7xl mx-auto mb-24">
        <div className="bg-white rounded-[3.5rem] overflow-hidden grid md:grid-cols-2 shadow-2xl shadow-primary/5 border border-gray-100 hover-lift">
          <div className="relative min-h-[500px] overflow-hidden">
            <img 
              alt="Woman relaxing in natural light" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[4s] hover:scale-110" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXSnhOHTHpsF8ndItoFmH2AmDc1Q4ubsumTJa5KlVllY6FY7S7JuHkB8qRv2dZoXxULg-ro7feNTTv7u917Vw98uhlVf6zc9tQze8NLZc3MlRNQ4Y5cI4mzcaAcgjJnWWeNAffgJG-WLnbiCgBC9CFj35j-EnX_Hk1ZrYNxonNTs-ulC7P0ipvFeF0FqzCpMRrpGYXQ2Vg4uK39t75sHYy6zI5OyoikddYV9IB47e71WGKm4JXsuDoPE18RAYhUQyojtAFXHgdM0Hq"
            />
          </div>
          <div className="p-12 md:p-24 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-8 bg-gray-50 self-start px-5 py-2 rounded-full border border-gray-100">
              <span className="material-icons-outlined text-sm text-primary">verified_user</span>
              <span className="text-[10px] font-extrabold uppercase tracking-[0.2em]">Validated Quality</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display mb-8 leading-tight">Nature for daily balance</h2>
            <p className="text-sm opacity-50 mb-10 leading-relaxed max-w-md">
              Harness adaptogenic botanicals chosen for maximum bioavailability and consistency in modern life.
            </p>
            <div className="grid grid-cols-2 gap-x-10 gap-y-6 mb-12">
              {[
                { label: 'Clinically Studied', icon: 'verified' },
                { label: 'Non-GMO Verified', icon: 'spa' },
                { label: '100% Vegan', icon: 'eco' },
                { label: 'Gluten-Free', icon: 'clean_hands' }
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3 group/item">
                  <span className="material-symbols-outlined text-primary text-xl group-hover/item:scale-125 transition-transform">{item.icon}</span>
                  <span className="text-xs font-bold uppercase tracking-widest">{item.label}</span>
                </div>
              ))}
            </div>
            <a href="#/ingredients" className="text-sm font-bold tracking-widest text-primary flex items-center gap-2 hover:translate-x-1 transition-all">
              LEARN ABOUT OUR METHOD <span className="material-icons-outlined text-sm">east</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
