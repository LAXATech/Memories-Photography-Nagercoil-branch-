import React, { useState } from 'react';
import { Check, Sparkles, HelpCircle, ArrowRight, ShieldCheck, Camera } from 'lucide-react';
import { PACKAGES } from '../data/photographyData';

export default function PackagesPage({ onSelectPackage }) {
  const [currency, setCurrency] = useState('INR');
  const [selectedAddons, setSelectedAddons] = useState([]);

  const addonsList = [
    { id: 'drone', name: '4K Drone Aerial Shoot', price: 12000 },
    { id: 'album', name: 'Extra Premium Leather Album', price: 15000 },
    { id: 'live', name: 'Live Stream Setup (YouTube/Private)', price: 18000 },
    { id: 'prewedding', name: 'Half-Day Outdoor Pre-Wedding', price: 25000 },
  ];

  const toggleAddon = (id) => {
    setSelectedAddons(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  const totalAddonsPrice = selectedAddons.reduce((sum, id) => {
    const item = addonsList.find(a => a.id === id);
    return sum + (item ? item.price : 0);
  }, 0);

  return (
    <div className="py-20 bg-dark-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header from Frame 05 */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-semibold">
            Investment
          </span>
          <h1 className="text-4xl sm:text-6xl font-editorial font-light text-sand-50 mt-1">
            Packages
          </h1>
          <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-sand-300 font-light mt-3">
            Simple. Transparent. Tailored to your story.
          </p>
        </div>

        {/* 3 Pricing Cards matching Frame 05 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {PACKAGES.map((pkg) => {
            const isFeatured = pkg.highlight;
            return (
              <div
                key={pkg.id}
                className={`relative flex flex-col justify-between rounded-3xl p-8 sm:p-10 transition-all duration-500 ${
                  isFeatured
                    ? 'bg-gradient-to-b from-forest-900/80 via-dark-900 to-dark-950 border-2 border-gold/60 shadow-2xl shadow-forest-900/30 scale-100 md:-translate-y-2'
                    : 'bg-dark-900/60 border border-white/10 hover:border-gold/30 hover:bg-dark-900'
                }`}
              >
                {/* Badge if featured */}
                {isFeatured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gold text-dark-950 text-[10px] uppercase tracking-[0.2em] font-bold shadow-lg flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3" />
                    <span>Signature Experience</span>
                  </div>
                )}

                <div>
                  <div className="border-b border-white/10 pb-6 mb-6">
                    <span className="text-[10px] uppercase tracking-widest text-gold font-medium">
                      {pkg.badge}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-editorial font-light text-sand-50 mt-1">
                      {pkg.name}
                    </h2>
                    <p className="text-xs text-sand-300 font-light mt-2 min-h-[32px]">
                      {pkg.tagline}
                    </p>
                    <div className="mt-6 flex items-baseline gap-1">
                      <span className="text-4xl sm:text-5xl font-editorial font-normal text-sand-50">
                        {pkg.price}
                      </span>
                      <span className="text-xs text-sand-300 font-light ml-1">/ Event</span>
                    </div>
                  </div>

                  {/* Features Checklist */}
                  <div className="space-y-3.5 mb-8">
                    <span className="text-[10px] uppercase tracking-widest text-sand-300 font-medium block mb-2">
                      Included in this package:
                    </span>
                    {pkg.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className={`mt-0.5 rounded-full p-0.5 ${
                          isFeatured ? 'bg-gold/20 text-gold' : 'bg-forest-900 text-sand-200'
                        }`}>
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-xs text-sand-200 font-light leading-relaxed">
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Enquire Now Button */}
                <div className="pt-4">
                  <button
                    onClick={() => onSelectPackage(pkg)}
                    className={`w-full py-3.5 px-6 rounded-full text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
                      isFeatured
                        ? 'bg-gold hover:bg-gold-light text-dark-950 font-semibold shadow-lg shadow-gold/20 hover:scale-[1.02]'
                        : 'bg-forest-800/80 hover:bg-forest-700 text-sand-50 border border-forest-600/40 hover:border-gold/40'
                    }`}
                  >
                    <span>Enquire Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <p className="text-[10px] text-center text-sand-300/60 mt-3 font-light">
                    Dates reserved on 30% advance booking
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Package Add-Ons Calculator */}
        <div className="mt-16 rounded-3xl bg-dark-900/60 border border-white/10 p-6 sm:p-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/10">
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-gold font-medium">
                Customizations
              </span>
              <h3 className="text-2xl font-editorial font-light text-sand-50 mt-0.5">
                Tailor With Signature Add-Ons
              </h3>
              <p className="text-xs text-sand-300 font-light mt-1">
                Select extras to accompany any of our standard photography packages.
              </p>
            </div>
            {totalAddonsPrice > 0 && (
              <div className="text-right">
                <span className="text-xs text-sand-300 uppercase tracking-widest block">Add-ons total</span>
                <span className="text-2xl font-editorial text-gold font-medium">
                  + ₹ {totalAddonsPrice.toLocaleString('en-IN')}
                </span>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            {addonsList.map((addon) => {
              const active = selectedAddons.includes(addon.id);
              return (
                <div
                  key={addon.id}
                  onClick={() => toggleAddon(addon.id)}
                  className={`cursor-pointer p-4 rounded-2xl border transition-all ${
                    active
                      ? 'bg-forest-900/60 border-gold/60 text-sand-50 shadow-md'
                      : 'bg-dark-950/60 border-white/5 text-sand-300 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-sand-100">{addon.name}</span>
                    <div className={`w-4 h-4 rounded flex items-center justify-center border text-[10px] ${
                      active ? 'bg-gold border-gold text-dark-950' : 'border-white/20'
                    }`}>
                      {active && '✓'}
                    </div>
                  </div>
                  <span className="text-xs text-gold font-medium">
                    + ₹ {addon.price.toLocaleString('en-IN')}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Transparency Guarantee */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-xs text-sand-300 font-light">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-gold" />
            <span>No Hidden Travel Surcharges in Nagercoil & Nearby Districts</span>
          </div>
          <div className="flex items-center gap-2">
            <Camera className="w-4 h-4 text-gold" />
            <span>Dual Backup Camera Bodies & SD Cards on Every Shoot</span>
          </div>
        </div>
      </div>
    </div>
  );
}
