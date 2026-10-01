import React from 'react';
import { HeartHandshake, Sparkles, PartyPopper, Smile, Camera, ArrowRight } from 'lucide-react';

const CATEGORY_ITEMS = [
  { id: 'weddings', label: 'Weddings', icon: HeartHandshake, count: '120+ Stories' },
  { id: 'engagements', label: 'Engagements', icon: Sparkles, count: '85+ Shoots' },
  { id: 'celebrations', label: 'Celebrations', icon: PartyPopper, count: '140+ Events' },
  { id: 'babies', label: 'Babies & Family', icon: Smile, count: '95+ Sessions' },
  { id: 'portraits', label: 'Portraits', icon: Camera, count: '110+ Portraits' },
];

export default function WhatWeCapture({ onSelectCategory }) {
  return (
    <section className="py-16 bg-dark-950 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-semibold">
            Our Specialties
          </span>
          <h2 className="text-2xl sm:text-3xl font-editorial font-light text-sand-50 mt-1">
            What We Capture
          </h2>
          <div className="w-12 h-px bg-forest-600/60 mx-auto mt-3" />
        </div>

        {/* 5 Icons Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {CATEGORY_ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => onSelectCategory(item.id)}
                className="group relative flex flex-col items-center justify-center p-6 rounded-2xl bg-dark-900/60 border border-white/5 hover:border-gold/40 hover:bg-forest-900/30 transition-all duration-300 text-center"
              >
                <div className="w-12 h-12 rounded-full bg-forest-900/60 border border-forest-600/30 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:border-gold/60 transition-transform">
                  <Icon className="w-5 h-5 text-sand-200 group-hover:text-gold transition-colors" />
                </div>
                <h3 className="text-sm uppercase tracking-[0.15em] font-medium text-sand-100 group-hover:text-gold transition-colors">
                  {item.label}
                </h3>
                <span className="text-[10px] text-sand-300/70 font-light mt-1">
                  {item.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
