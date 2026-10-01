import React, { useState } from 'react';
import ExactBrandLogo from './ExactBrandLogo';
import { Menu, X, Calendar, MessageCircle, Phone } from 'lucide-react';
import { BRAND } from '../data/photographyData';

export default function ExactHeader({
  activeTab = 'home',
  onNavClick,
  onOpenBooking
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'stories', label: 'Stories' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About' },
    { id: 'packages', label: 'Packages' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (id) => {
    onNavClick(id);
    setMobileMenuOpen(false);
  };

  const handleBookingClick = () => {
    onOpenBooking();
    setMobileMenuOpen(false);
  };

  return (
    <header className="relative z-30 w-full pt-4 sm:pt-6 pb-3 sm:pb-4 px-4 sm:px-10 lg:px-14">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        {/* Brand Logo on Left */}
        <div 
          onClick={() => handleLinkClick('home')}
          className="cursor-pointer transform hover:scale-[1.01] transition-transform"
        >
          <ExactBrandLogo />
        </div>

        {/* Center Desktop Navigation Links (Stories, Services, About, Packages, Contact) */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {navLinks.filter(item => item.id !== 'home').map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleLinkClick(item.id)}
                className={`text-[13px] tracking-wide font-sans transition-colors relative py-1 ${
                  isActive
                    ? 'text-white font-medium border-b border-white pb-0.5'
                    : 'text-sand-200/90 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right Side: CTA Button + Mobile Hamburger Toggle */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <button
            onClick={handleBookingClick}
            className="px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-lg border border-white/40 bg-black/20 hover:bg-white/10 hover:border-white text-sand-100 text-[11px] sm:text-[12px] font-sans tracking-wide transition-all duration-200 shadow-sm"
          >
            Check Availability
          </button>

          {/* Mobile Hamburger Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-black/40 border border-white/20 text-sand-100 hover:text-white hover:border-[#C6A87D] transition-colors focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-[#C6A87D]" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Animated Dropdown Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 w-full bg-[#0b0e0c]/98 backdrop-blur-2xl border-b border-white/15 px-5 py-6 shadow-2xl animate-fade-in z-50">
          <div className="max-w-[500px] mx-auto space-y-4">
            {/* Navigation Grid */}
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleLinkClick(item.id)}
                    className={`text-left px-4 py-3 rounded-xl text-xs uppercase tracking-widest font-medium transition-all flex items-center justify-between border ${
                      isActive
                        ? 'bg-[#141715] text-[#C6A87D] border-[#C6A87D]/40 font-semibold shadow-sm'
                        : 'bg-white/5 text-sand-200 border-white/5 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C6A87D]" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Quick Actions in Mobile Menu */}
            <div className="pt-3 border-t border-white/10 space-y-2.5">
              <button
                onClick={handleBookingClick}
                className="w-full py-3 rounded-xl bg-[#C6A87D] hover:bg-[#d8be96] text-[#0C0F0D] text-xs uppercase tracking-[0.2em] font-semibold flex items-center justify-center gap-2 shadow-md transition-all"
              >
                <Calendar className="w-4 h-4" />
                <span>Check Availability</span>
              </button>

              <div className="grid grid-cols-2 gap-2 pt-1">
                <a
                  href={`tel:${BRAND.contact.phone}`}
                  className="py-2.5 px-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-sand-200 text-[11px] font-sans flex items-center justify-center gap-2 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C6A87D]" />
                  <span>Direct Call</span>
                </a>
                <a
                  href={`https://wa.me/${BRAND.contact.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 rounded-xl bg-[#25D366]/15 border border-[#25D366]/30 hover:bg-[#25D366]/25 text-[#25D366] text-[11px] font-sans flex items-center justify-center gap-2 transition-colors font-medium"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-[#25D366]" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
