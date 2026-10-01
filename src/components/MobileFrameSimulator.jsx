import React, { useState } from 'react';
import { Smartphone, ChevronRight, X, ArrowLeft, Heart, Play, Calendar, Check, Send } from 'lucide-react';
import BrandLogo from './BrandLogo';
import { FEATURED_STORIES, PACKAGES, FILMS } from '../data/photographyData';

export default function MobileFrameSimulator({ onClose, onOpenBooking }) {
  const [activeScreen, setActiveScreen] = useState('home');

  const screens = [
    { id: 'home', label: '11.1 Mobile Home' },
    { id: 'stories', label: '11.2 Stories Feed' },
    { id: 'packages', label: '11.3 Packages' },
    { id: 'enquiry', label: '11.4 Quick Form' },
    { id: 'contact', label: '11.5 Contact' },
  ];

  return (
    <div className="py-12 bg-dark-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 mb-8 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-900/60 border border-forest-600/40 text-[10px] uppercase tracking-[0.25em] text-gold mb-2">
              <Smartphone className="w-3.5 h-3.5" />
              <span>Frame 11 from Design Board</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-editorial font-light text-sand-50">
              Mobile Responsive View
            </h1>
            <p className="text-xs uppercase tracking-widest text-sand-300 font-light mt-1">
              Pixel-perfect smartphone adaptation for on-the-go couples
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-dark-900 border border-white/20 text-xs uppercase tracking-widest text-sand-200 hover:text-white"
            >
              <span>Exit Mobile Showcase</span>
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Screen selector tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 overflow-x-auto">
          {screens.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveScreen(s.id)}
              className={`px-4 py-2 rounded-full text-xs font-medium uppercase tracking-wider transition-all ${
                activeScreen === s.id
                  ? 'bg-gold text-dark-950 font-bold shadow-md'
                  : 'bg-dark-900 border border-white/10 text-sand-300 hover:text-white'
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>

        {/* 6 Mobile Frames Showcase (Matching Frame 11 layout) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {/* Frame 1: Mobile Home */}
          <div className="w-[320px] h-[640px] rounded-[42px] bg-dark-950 border-[6px] border-[#2c332e] shadow-2xl overflow-hidden flex flex-col relative">
            {/* Dynamic Island / Notch */}
            <div className="h-6 bg-dark-950 w-full flex items-center justify-center pt-1 z-20">
              <div className="w-20 h-4 bg-black rounded-full" />
            </div>

            {/* Mobile Header */}
            <div className="px-4 py-3 bg-dark-950/90 border-b border-white/10 flex items-center justify-between">
              <BrandLogo iconOnly={false} className="scale-90 origin-left" />
              <div className="w-7 h-7 rounded-full bg-forest-900 flex items-center justify-center text-gold text-xs">
                ☰
              </div>
            </div>

            {/* Mobile Body: Home */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 text-left">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=600&q=80"
                  alt="Couple"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/30 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-[9px] uppercase tracking-widest text-gold">Nagercoil Studio</span>
                  <h3 className="text-xl font-editorial font-light text-white leading-tight">
                    We capture moments. <br />
                    <span className="italic text-gold-light">You keep the memories.</span>
                  </h3>
                </div>
              </div>

              <button
                onClick={onOpenBooking}
                className="w-full py-2.5 rounded-xl bg-forest-700 text-sand-50 text-[11px] uppercase tracking-widest font-semibold text-center"
              >
                Check Availability
              </button>
            </div>
          </div>

          {/* Frame 2: Mobile Stories Feed */}
          <div className="w-[320px] h-[640px] rounded-[42px] bg-dark-950 border-[6px] border-[#2c332e] shadow-2xl overflow-hidden flex flex-col relative">
            <div className="h-6 bg-dark-950 w-full flex items-center justify-center pt-1 z-20">
              <div className="w-20 h-4 bg-black rounded-full" />
            </div>
            <div className="px-4 py-3 bg-dark-950/90 border-b border-white/10 flex items-center justify-between">
              <span className="font-editorial text-base text-sand-50">Stories</span>
              <span className="text-[10px] text-gold uppercase tracking-wider">Weddings</span>
            </div>
            <div className="flex-1 overflow-y-auto p-3 space-y-3">
              {FEATURED_STORIES.slice(0, 3).map((s) => (
                <div key={s.id} className="rounded-xl overflow-hidden bg-dark-900 border border-white/5">
                  <div className="aspect-[16/10] relative">
                    <img src={s.coverImage} alt={s.title} className="w-full h-full object-cover" />
                    <div className="absolute bottom-2 left-2 right-2 flex justify-between items-center text-white">
                      <span className="text-xs font-editorial">{s.title}</span>
                      <Heart className="w-3.5 h-3.5 text-gold" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Frame 3: Mobile Packages */}
          <div className="w-[320px] h-[640px] rounded-[42px] bg-dark-950 border-[6px] border-[#2c332e] shadow-2xl overflow-hidden flex flex-col relative">
            <div className="h-6 bg-dark-950 w-full flex items-center justify-center pt-1 z-20">
              <div className="w-20 h-4 bg-black rounded-full" />
            </div>
            <div className="px-4 py-3 bg-dark-950/90 border-b border-white/10 text-center">
              <span className="font-editorial text-base text-sand-50">Packages</span>
            </div>
            <div className="flex-1 overflow-y-auto p-3 space-y-3">
              {PACKAGES.map((pkg) => (
                <div
                  key={pkg.id}
                  className={`p-4 rounded-2xl border text-left ${
                    pkg.highlight
                      ? 'bg-forest-900/60 border-gold/60'
                      : 'bg-dark-900 border-white/10'
                  }`}
                >
                  <span className="text-[9px] uppercase tracking-wider text-gold font-semibold">
                    {pkg.name}
                  </span>
                  <div className="text-xl font-editorial text-sand-50 mt-1">
                    {pkg.price}
                  </div>
                  <ul className="mt-2 space-y-1 text-[10px] text-sand-300">
                    {pkg.features.slice(0, 3).map((f, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <Check className="w-3 h-3 text-gold" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={onOpenBooking}
                    className="mt-3 w-full py-1.5 rounded-lg bg-forest-700 text-white text-[10px] uppercase tracking-wider"
                  >
                    Enquire
                  </button>
                </div>
              ))}
            </div>
          </div>


          {/* Frame 5: Mobile Booking Form */}
          <div className="w-[320px] h-[640px] rounded-[42px] bg-dark-950 border-[6px] border-[#2c332e] shadow-2xl overflow-hidden flex flex-col relative">
            <div className="h-6 bg-dark-950 w-full flex items-center justify-center pt-1 z-20">
              <div className="w-20 h-4 bg-black rounded-full" />
            </div>
            <div className="px-4 py-3 bg-dark-950/90 border-b border-white/10 text-center">
              <span className="font-editorial text-base text-sand-50">Let's Plan Your Story</span>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-3 text-left">
              <div>
                <label className="text-[10px] uppercase text-sand-300">Name</label>
                <div className="w-full py-2 px-3 rounded-lg bg-dark-900 border border-white/10 text-xs text-sand-100">
                  Aravind & Meena
                </div>
              </div>
              <div>
                <label className="text-[10px] uppercase text-sand-300">Phone</label>
                <div className="w-full py-2 px-3 rounded-lg bg-dark-900 border border-white/10 text-xs text-sand-100">
                  +91 98765 43210
                </div>
              </div>
              <div>
                <label className="text-[10px] uppercase text-sand-300">Event</label>
                <div className="grid grid-cols-2 gap-1.5 mt-1">
                  <div className="p-1.5 rounded bg-forest-800 text-[10px] text-center text-gold">
                    Wedding
                  </div>
                  <div className="p-1.5 rounded bg-dark-900 text-[10px] text-center text-sand-300">
                    Engagement
                  </div>
                </div>
              </div>
              <button
                onClick={onOpenBooking}
                className="w-full mt-4 py-2.5 rounded-xl bg-forest-700 text-white text-xs uppercase tracking-widest font-semibold"
              >
                Send Enquiry
              </button>
            </div>
          </div>

          {/* Frame 6: Mobile Contact */}
          <div className="w-[320px] h-[640px] rounded-[42px] bg-dark-950 border-[6px] border-[#2c332e] shadow-2xl overflow-hidden flex flex-col relative">
            <div className="h-6 bg-dark-950 w-full flex items-center justify-center pt-1 z-20">
              <div className="w-20 h-4 bg-black rounded-full" />
            </div>
            <div className="px-4 py-3 bg-dark-950/90 border-b border-white/10 text-center">
              <span className="font-editorial text-base text-sand-50">Contact</span>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-4 text-left">
              <div className="p-4 rounded-2xl bg-dark-900 border border-white/10 text-center space-y-2">
                <span className="text-xl font-editorial text-sand-50">Your day will pass.</span>
                <span className="text-xs italic text-gold block">Your memories shouldn't.</span>
              </div>
              <div className="space-y-2">
                <div className="p-3 rounded-xl bg-[#25D366]/20 border border-[#25D366]/40 text-xs text-sand-100 flex items-center justify-between">
                  <span>WhatsApp Nagercoil</span>
                  <span className="text-gold">Chat →</span>
                </div>
                <div className="p-3 rounded-xl bg-dark-900 border border-white/10 text-xs text-sand-100 flex items-center justify-between">
                  <span>Call +91 98765 43210</span>
                  <span className="text-sand-300">Call →</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
