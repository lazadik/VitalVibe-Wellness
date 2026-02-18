import React, { useState } from 'react';
import { NAVIGATION } from '../constants.ts';

interface HeaderProps {
  cartCount: number;
  onCartClick: () => void;
  onSearch: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({ cartCount, onCartClick, onSearch }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchValue.trim()) {
      onSearch(searchValue.trim());
      setSearchValue('');
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-background-light/80 backdrop-blur-md border-b border-black/5 h-20">
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        <div className="flex items-center gap-12">
          <a href="#/" className="text-2xl font-display font-bold tracking-tight flex items-center gap-2">
            <span className="text-primary material-symbols-outlined fill-1">pulse_alert</span>
            VitalVibe
          </a>
          <div className="hidden lg:flex gap-8 text-sm font-semibold opacity-70">
            {NAVIGATION.map((nav) => (
              <a key={nav.name} href={nav.hash} className="hover:text-primary transition-colors">
                {nav.name}
              </a>
            ))}
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <form onSubmit={handleSearchSubmit} className="hidden md:flex relative h-10 w-64">
            <input 
              type="text" 
              placeholder="Search supplements..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="w-full h-full bg-gray-100 border-none rounded-full pl-10 pr-4 text-xs font-medium focus:ring-1 focus:ring-primary"
            />
            <button type="submit" className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg">search</button>
          </form>
          
          <button onClick={() => onSearch('')} className="p-2 hover:bg-black/5 rounded-full transition-colors md:hidden">
            <span className="material-icons-outlined">search</span>
          </button>
          
          <button 
            onClick={onCartClick}
            className="bg-primary text-white px-5 py-2 rounded-full flex items-center gap-2 font-bold hover:scale-[1.02] transition-all shadow-sm relative"
          >
            Cart 
            <span className="material-symbols-outlined text-sm">shopping_bag</span>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-black text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center border-2 border-background-light">
                {cartCount}
              </span>
            )}
          </button>
          
          <button className="p-2 hover:bg-black/5 rounded-full transition-colors hidden sm:block">
            <span className="material-icons-outlined">person_outline</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;