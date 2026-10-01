import React from 'react';
import ExactHeader from './ExactHeader';

export default function ExactHeroSection({ onExploreWork, onOpenBooking, onNavClick, activeTab }) {
  return (
    <section className="relative w-full min-h-[90vh] sm:min-h-[96vh] flex flex-col justify-between bg-[#0b0e0c] text-sand-50 overflow-hidden">
      {/* Background Photography with Bride & Groom on Right */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/images/hero-couple.jpg"
          alt="South Indian Wedding Couple - Memories Photography"
          className="w-full h-full object-cover object-right md:object-center filter brightness-[0.82] contrast-[1.05]"
        />
        {/* Dark Vignette and Gradient Overlay on Left to Match Reference Image */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b0e0c]/98 via-[#0b0e0c]/70 to-[#0b0e0c]/30 sm:to-transparent w-full md:w-3/4" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0e0c] via-transparent to-[#0b0e0c]/60" />
      </div>

      {/* Top Header / Navigation Bar with Mobile Drawer */}
      <ExactHeader
        activeTab={activeTab}
        onNavClick={onNavClick}
        onOpenBooking={onOpenBooking}
      />

      {/* Center Left Hero Content */}
      <div className="relative z-10 w-full px-5 sm:px-10 lg:px-14 my-auto py-10 sm:py-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="max-w-2xl text-left space-y-4">
            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[68px] font-editorial font-light text-white leading-[1.14] tracking-tight">
              We capture moments. <br />
              You keep the memories.
            </h1>

            {/* Subtitle */}
            <p className="text-[12px] sm:text-[14px] font-sans text-sand-200/90 tracking-wide pt-1 font-light">
              Wedding Photography &nbsp;•&nbsp; Cinematic Films &nbsp;•&nbsp; Portraits
            </p>

            {/* Explore Button */}
            <div className="pt-2 sm:pt-3">
              <button
                onClick={onExploreWork}
                className="px-6 py-2.5 rounded-lg border border-white/60 bg-black/25 hover:bg-white/15 hover:border-white text-white text-[12px] font-sans tracking-wider transition-all duration-200 shadow-sm"
              >
                Explore Our Work
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Locations Strip matching reference image */}
      <div className="relative z-10 w-full pb-6 sm:pb-8 pt-4 px-4 text-center">
        <p className="text-[10px] sm:text-[12px] font-sans tracking-[0.25em] sm:tracking-[0.3em] uppercase text-sand-200/80 font-light">
          CHENNAI &nbsp;•&nbsp; COIMBATORE &nbsp;•&nbsp; TIRUNELVELI
        </p>
      </div>
    </section>
  );
}
