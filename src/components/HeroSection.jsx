import React from 'react';
import { ArrowRight, MapPin, Sparkles } from 'lucide-react';
import { BRAND } from '../data/photographyData';

export default function HeroSection({ onExploreWork, onOpenBooking }) {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-between overflow-hidden bg-dark-950">
      {/* Background Image with Cinematic Grading & Vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1920&q=85"
          alt="South Indian Couple Vows - Memories Photography"
          className="w-full h-full object-cover object-center filter brightness-[0.55] contrast-[1.05]"
        />
        {/* Gradients to match the dark luxury board */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/40 to-dark-950/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-950/90 via-transparent to-dark-950/70" />
        {/* Subtle warm amber/gold atmospheric glow */}
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 flex-1 flex flex-col justify-center">
        <div className="max-w-3xl space-y-6">
          {/* Subtle Branch Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-forest-900/60 border border-forest-600/40 text-xs tracking-[0.2em] text-sand-200 uppercase backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            <span>Nagercoil Branch & Across South India</span>
          </div>

          {/* Core Headlines from Mockup Frame 01 */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-editorial font-light tracking-tight text-sand-50 leading-[1.08]">
              We capture moments. <br />
              <span className="italic font-normal text-gold-light">You keep the memories.</span>
            </h1>
          </div>

          <p className="text-xs sm:text-sm tracking-[0.25em] uppercase text-sand-300 font-light max-w-xl">
            {BRAND.subtagline}
          </p>

          {/* Action CTAs */}
          <div className="pt-4 flex flex-wrap items-center gap-4">
            <button
              onClick={onExploreWork}
              className="inline-flex items-center gap-3 px-7 py-3 rounded-full bg-forest-700 hover:bg-forest-600 text-sand-50 text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 hover:shadow-lg hover:shadow-forest-900/50 hover:translate-x-0.5 border border-forest-500/40"
            >
              <span>Explore Our Work</span>
              <ArrowRight className="w-4 h-4 text-gold" />
            </button>

            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-dark-900/70 hover:bg-dark-900 border border-white/15 text-sand-200 hover:text-white text-xs uppercase tracking-[0.18em] transition-all backdrop-blur-sm"
            >
              <span>Reserve Date</span>
            </button>
          </div>
        </div>
      </div>

      {/* Locations Bar from Mockup (CHENNAI • COIMBATORE • TIRUNELVELI • NAGERCOIL) */}
      <div className="relative z-10 border-t border-white/10 bg-dark-950/80 backdrop-blur-md py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-[11px] uppercase tracking-[0.3em] text-sand-300 font-light">
            <span className="text-gold font-medium">NAGERCOIL</span>
            <span className="text-white/30">•</span>
            <span>CHENNAI</span>
            <span className="text-white/30">•</span>
            <span>COIMBATORE</span>
            <span className="text-white/30">•</span>
            <span>TIRUNELVELI</span>
          </div>
        </div>
      </div>
    </section>
  );
}
