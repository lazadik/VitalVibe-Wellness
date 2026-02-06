
import React from 'react';

const Ingredients: React.FC = () => {
  const botanicalList = [
    { name: 'Ashwagandha', category: 'Adaptogen', benefit: 'Cortisol management and stress resilience.', source: 'Organic roots from Northern India.' },
    { name: 'Lion’s Mane', category: 'Nootropic', benefit: 'Nerve growth factor support and mental clarity.', source: 'Dual-extracted fruiting bodies.' },
    { name: 'Rhodiola Rosea', category: 'Adaptogen', benefit: 'Physical stamina and mental fatigue reduction.', source: 'Wild-crafted Siberian highlands.' },
    { name: 'Elderberry', category: 'Immune Support', benefit: 'High anthocyanin content for seasonal defense.', source: 'European Sambucus Nigra.' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <span className="text-primary text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block">The VitalVibe Standard</span>
        <h1 className="text-5xl md:text-7xl font-display mb-8">Purity from the Root</h1>
        <p className="text-lg text-slate-500 leading-relaxed">
          We believe in full transparency. Every ingredient in our formulas is chosen for its bioavailability, clinical history, and ecological footprint.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {botanicalList.map((item, idx) => (
          <div key={idx} className="bg-white p-12 rounded-[3rem] border border-gray-100 shadow-sm flex flex-col gap-6 group hover:shadow-xl transition-all duration-500">
            <div className="flex justify-between items-start">
              <span className="bg-primary/10 text-primary text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest">
                {item.category}
              </span>
              <span className="text-4xl font-display opacity-10">0{idx + 1}</span>
            </div>
            <h3 className="text-4xl font-display">{item.name}</h3>
            <p className="text-slate-600 font-medium leading-relaxed">{item.benefit}</p>
            <div className="pt-6 border-t border-gray-50 mt-auto">
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-300 mb-1">Sourcing</p>
              <p className="text-xs font-bold">{item.source}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-24 bg-slate-900 rounded-[4rem] p-16 md:p-24 text-white text-center">
        <h2 className="text-4xl md:text-5xl font-display mb-8">Zero Compromise</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {['No Synthetic Fillers', 'No Artificial Colors', 'Non-GMO Project', 'Third-Party Tested'].map(text => (
            <div key={text} className="flex flex-col items-center gap-4">
              <span className="material-symbols-outlined text-primary text-3xl">verified</span>
              <span className="text-[10px] font-bold uppercase tracking-widest">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ingredients;
