import React, { useState } from 'react';
import { getBotanicalRecommendation } from '../wellnessLogic';
import { PRODUCTS } from '../constants';
import { Product } from '../types';

interface WellnessGuideProps {
  onClose: () => void;
  onAddToCart: (p: Product) => void;
}

const WellnessGuide: React.FC<WellnessGuideProps> = ({ onClose, onAddToCart }) => {
  const [step, setStep] = useState<'input' | 'loading' | 'results'>('input');
  const [goals, setGoals] = useState('');
  const [recommendation, setRecommendation] = useState<{ reasoning: string; recommendedIds: string[] } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!goals.trim()) return;

    setStep('loading');
    
    const result = await getBotanicalRecommendation(goals);
    setRecommendation(result);
    setStep('results');
  };

  const recommendedProducts = recommendation 
    ? PRODUCTS.filter(p => recommendation.recommendedIds.includes(p.id))
    : [];

  return (
    <div className="fixed inset-0 z-[250] flex items-center justify-center p-4 bg-black/60 blur-backdrop animate-fade-in">
      <div className="relative w-full max-w-2xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-slide-up">
        <button 
          onClick={onClose}
          className="absolute right-6 top-6 z-10 p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        <div className="p-10 md:p-14 overflow-y-auto">
          {step === 'input' && (
            <div className="animate-fade-in">
              <span className="text-primary text-[10px] font-bold uppercase tracking-[0.3em] mb-4 block">Personalized Nutrition</span>
              <h2 className="text-4xl font-display mb-6">Your Botanical Protocol.</h2>
              <p className="text-slate-500 mb-8 leading-relaxed">
                Describe your current lifestyle or wellness goals. Our guide will match your needs with our purity-tested botanical catalog.
              </p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <textarea 
                  className="w-full h-32 bg-gray-50 border-none rounded-2xl p-6 text-sm font-medium focus:ring-2 focus:ring-primary/20 resize-none transition-all"
                  placeholder="e.g. I struggle with sleep and want more energy for my morning runs..."
                  value={goals}
                  onChange={(e) => setGoals(e.target.value)}
                  required
                />
                <button 
                  type="submit"
                  className="w-full bg-slate-900 text-white py-5 rounded-2xl font-bold tracking-widest hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-3 shadow-xl"
                >
                  <span className="material-symbols-outlined text-primary">eco</span>
                  GENERATE PROTOCOL
                </button>
              </form>
            </div>
          )}

          {step === 'loading' && (
            <div className="py-20 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-4xl text-primary animate-spin">sync</span>
              </div>
              <h3 className="text-2xl font-display mb-2">Analyzing Botanical Profiles...</h3>
              <p className="text-sm text-slate-400">Filtering compounds against your specific needs.</p>
            </div>
          )}

          {step === 'results' && recommendation && (
            <div className="animate-fade-in space-y-8">
              <div>
                <span className="text-primary text-[10px] font-bold uppercase tracking-[0.3em] mb-4 block">Recommended Protocol</span>
                <h2 className="text-3xl font-display mb-4">Your Custom Selection</h2>
                <div className="bg-gray-50 p-6 rounded-2xl border-l-4 border-primary italic text-sm text-slate-600 leading-relaxed shadow-inner">
                  {recommendation.reasoning}
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Targeted Supplements</p>
                <div className="grid gap-4">
                  {recommendedProducts.map(p => (
                    <div key={p.id} className="flex items-center gap-6 p-4 rounded-2xl border border-gray-100 hover:border-primary/30 hover:bg-white transition-all shadow-sm">
                      <img src={p.image} alt={p.name} className="w-16 h-16 object-contain" />
                      <div className="flex-1">
                        <h4 className="font-bold text-sm">{p.name}</h4>
                        <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">{p.category} • ${p.price}</p>
                      </div>
                      <button 
                        onClick={() => onAddToCart(p)}
                        className="bg-primary/10 text-primary p-3 rounded-xl hover:bg-primary hover:text-white transition-all shadow-sm"
                      >
                        <span className="material-symbols-outlined">add_shopping_cart</span>
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <button 
                onClick={() => {
                  setStep('input');
                  setGoals('');
                  setRecommendation(null);
                }}
                className="w-full text-xs font-bold tracking-widest text-slate-400 hover:text-slate-900 transition-colors py-2"
              >
                START OVER
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WellnessGuide;