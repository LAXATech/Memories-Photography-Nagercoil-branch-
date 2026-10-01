import React from 'react';
import ExactBrandLogo from './ExactBrandLogo';

export default function ExactHeroSection({ onExploreWork, onOpenBooking, onNavClick, activeTab }) {
  const navLinks = [
    { id: 'stories', label: 'Stories' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About' },
    { id: 'packages', label: 'Packages' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <section className="relative w-full min-h-[92vh] sm:min-h-[96vh] flex flex-col justify-between bg-[#0b0e0c] text-sand-50 overflow-hidden">
      {/* Background Photography with Bride & Groom on Right */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/images/hero-couple.jpg"
          alt="South Indian Wedding Couple - Memories Photography"
          className="w-full h-full object-cover object-right md:object-center filter brightness-[0.82] contrast-[1.05]"
        />
        {/* Dark Vignette and Gradient Overlay on Left to Match Reference Image */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b0e0c]/95 via-[#0b0e0c]/65 to-transparent w-full md:w-3/4" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0e0c] via-transparent to-[#0b0e0c]/60" />
      </div>

      {/* Top Header / Navigation Bar matching reference image */}
      <header className="relative z-20 w-full pt-6 pb-4 px-6 sm:px-10 lg:px-14">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          {/* Logo on Left */}
          <div onClick={() => onNavClick('home')}>
            <ExactBrandLogo />
          </div>

          {/* Center Navigation Links */}
          <nav className="hidden md:flex items-center space-x-7 lg:space-x-9">
            {navLinks.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavClick(item.id)}
                className={`text-[13px] tracking-wide font-sans transition-colors ${
                  activeTab === item.id
                    ? 'text-white font-medium border-b border-white pb-0.5'
                    : 'text-sand-200/90 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Check Availability CTA Button on Right */}
          <div>
            <button
              onClick={onOpenBooking}
              className="px-5 py-2 rounded-lg border border-white/40 bg-black/20 hover:bg-white/10 hover:border-white text-sand-100 text-[12px] font-sans tracking-wide transition-all duration-200 shadow-sm"
            >
              Check Availability
            </button>
          </div>
        </div>
      </header>

      {/* Center Left Hero Content */}
      <div className="relative z-10 w-full px-6 sm:px-10 lg:px-14 my-auto py-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="max-w-2xl text-left space-y-4">
            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-editorial font-light text-white leading-[1.12] tracking-tight">
              We capture moments. <br />
              You keep the memories.
            </h1>

            {/* Subtitle */}
            <p className="text-[13px] sm:text-[14px] font-sans text-sand-200/80 tracking-wide pt-1 font-light">
              Wedding Photography &nbsp;•&nbsp; Cinematic Films &nbsp;•&nbsp; Portraits
            </p>

            {/* Explore Button */}
            <div className="pt-3">
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
      <div className="relative z-10 w-full pb-8 pt-4 text-center">
        <p className="text-[11px] sm:text-[12px] font-sans tracking-[0.3em] uppercase text-sand-200/80 font-light">
          CHENNAI &nbsp;•&nbsp; COIMBATORE &nbsp;•&nbsp; TIRUNELVELI
        </p>
      </div>
    </section>
  );
}
