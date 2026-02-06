
import React from 'react';
import { FOOTER_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="py-24 px-6 border-t border-black/5 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1">
          <div className="text-2xl font-display font-bold mb-6 flex items-center gap-2">
            <span className="text-primary material-symbols-outlined fill-1">pulse_alert</span>
            VitalVibe
          </div>
          <p className="text-sm opacity-60 leading-relaxed mb-8">
            Elevating human essence through the purity of botanical science. Premium nutrients for your daily vitality.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all">
              <span className="material-icons-outlined text-base">public</span>
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all">
              <span className="material-icons-outlined text-base">camera_alt</span>
            </a>
          </div>
        </div>
        
        <div>
          <h5 className="font-bold text-xs uppercase tracking-widest mb-6">Shop</h5>
          <ul className="space-y-4 text-sm opacity-60">
            {FOOTER_LINKS.shop.map(link => (
              <li key={link.name}><a href={link.href} className="hover:text-primary transition-colors">{link.name}</a></li>
            ))}
          </ul>
        </div>
        
        <div>
          <h5 className="font-bold text-xs uppercase tracking-widest mb-6">Support</h5>
          <ul className="space-y-4 text-sm opacity-60">
            {FOOTER_LINKS.support.map(link => (
              <li key={link.name}><a href={link.href} className="hover:text-primary transition-colors">{link.name}</a></li>
            ))}
          </ul>
        </div>
        
        <div>
          <h5 className="font-bold text-xs uppercase tracking-widest mb-6">Join VitalVibe</h5>
          <p className="text-xs opacity-60 mb-4">Stay updated with new arrivals and exclusive offers.</p>
          <div className="flex h-12">
            <input 
              className="bg-gray-100 border-none rounded-l-xl px-4 py-3 text-sm focus:ring-1 focus:ring-primary w-full" 
              placeholder="Your Email" 
              type="email"
            />
            <button className="bg-primary text-white px-5 rounded-r-xl hover:brightness-105 transition-all">
              <span className="material-icons-outlined">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-16 mt-16 border-t border-black/5 flex flex-col md:flex-row justify-between text-[10px] opacity-40 uppercase tracking-widest">
        <p>© 2024 VitalVibe. Designed and Developed by Nathaniel Estrella.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
