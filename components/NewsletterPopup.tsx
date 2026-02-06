
import React, { useState, useEffect } from 'react';

const NewsletterPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      const hasSeen = localStorage.getItem('vibe_newsletter_seen');
      if (!hasSeen) {
        setIsVisible(true);
      }
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('vibe_newsletter_seen', 'true');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleClose();
    alert("Thank you! Your 15% discount has been sent to your email.");
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="relative flex w-full max-w-4xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl md:flex-row">
        <button 
          onClick={handleClose}
          className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-black hover:bg-white transition-all shadow-sm"
        >
          <span className="material-symbols-outlined text-xl">close</span>
        </button>

        <div className="h-64 w-full md:h-auto md:w-1/2 overflow-hidden">
          <div 
            className="h-full w-full bg-center bg-no-repeat bg-cover transform hover:scale-105 transition-transform duration-[2000ms]" 
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCqVAGpwBb7aNEhP2rS6pIKrJWAfwpru69fu4IYmyABJjnK358n08ddq5GOBKmJWrRWC04T7tKC-VpmsUZLUlyl9rwrfOepeTF6PZOLgkDApJvFoC8bKvgislIcm-GLPu8cMmrMx-YStLPlDIedcAkjlSg2aSClSXg4zcDSz3eQw3xy1YaWOBbLwhRHOcbEeAj-4yAfJj5fbtY2KDor37JdXX8ua51GPANwoJOxxJMSq9iArPO6eeJ5MBzsPNttyZCDju9LkzpsRmSz")' }}
          />
        </div>

        <div className="flex flex-col justify-center gap-6 p-8 md:p-12 md:w-1/2 bg-[#fdfcf8]">
          <div className="flex flex-col gap-2">
            <span className="text-primary text-[10px] font-bold uppercase tracking-[0.2em]">Exclusive Offer</span>
            <h2 className="text-3xl md:text-4xl font-manrope font-extrabold leading-tight text-slate-900">
              Join the Vibe
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Become part of our wellness community. Get <strong className="text-black">15% off</strong> your first order and stay updated with expert tips.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-bold text-slate-400 px-1 tracking-widest">EMAIL ADDRESS</label>
              <div className="relative flex h-14 w-full items-stretch rounded-xl shadow-sm overflow-hidden">
                <div className="flex items-center justify-center pl-4 bg-gray-100">
                  <span className="material-symbols-outlined text-gray-400">mail</span>
                </div>
                <input 
                  className="flex-1 border-none bg-gray-100 px-4 text-base font-normal placeholder:text-gray-400 focus:outline-0 focus:ring-0" 
                  placeholder="wellness@example.com" 
                  type="email" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <button className="h-14 w-full cursor-pointer rounded-xl bg-primary px-5 text-sm font-bold tracking-widest text-white transition-all active:scale-95 hover:brightness-105 shadow-lg">
              CLAIM MY DISCOUNT
            </button>
            <p className="text-center text-[10px] text-slate-400">
              By signing up, you agree to our Terms and Privacy Policy.
            </p>
          </form>

          <div className="flex items-center justify-between border-t border-gray-100 pt-6 opacity-60">
            <div className="flex flex-col items-center gap-1">
              <span className="material-symbols-outlined text-lg">eco</span>
              <span className="text-[8px] font-bold tracking-widest">100% NATURAL</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="material-symbols-outlined text-lg">science</span>
              <span className="text-[8px] font-bold tracking-widest">LAB TESTED</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="material-symbols-outlined text-lg">local_shipping</span>
              <span className="text-[8px] font-bold tracking-widest">FAST SHIPPING</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterPopup;
