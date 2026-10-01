import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, Phone, Sparkles, Smartphone, Monitor } from 'lucide-react';
import BrandLogo from './BrandLogo';

export default function Navbar({
  activeTab,
  setActiveTab,
  onOpenBooking,
  isMobilePreviewMode,
  setIsMobilePreviewMode
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'stories', label: 'Stories' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About' },
    { id: 'packages', label: 'Packages' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-dark-950/90 backdrop-blur-md border-b border-white/10 shadow-lg py-3'
            : 'bg-gradient-to-b from-dark-950/95 via-dark-950/70 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div onClick={() => handleNavClick('home')}>
              <BrandLogo />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-xs uppercase tracking-[0.2em] font-medium transition-colors relative py-1 ${
                    activeTab === item.id
                      ? 'text-gold'
                      : 'text-sand-200 hover:text-white'
                  }`}
                >
                  {item.label}
                  {activeTab === item.id && (
                    <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-gold rounded-full transition-all" />
                  )}
                </button>
              ))}
            </nav>

            {/* Actions: Device Switcher & Check Availability CTA */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Frame 11 Mobile Mockup Preview Switcher */}
              <button
                onClick={() => setIsMobilePreviewMode(!isMobilePreviewMode)}
                title="Toggle Frame 11 Mobile Mockup View"
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${
                  isMobilePreviewMode
                    ? 'bg-forest-700/80 border-gold/50 text-gold shadow-sm'
                    : 'bg-dark-900/60 border-white/10 text-sand-300 hover:text-white hover:border-white/20'
                }`}
              >
                {isMobilePreviewMode ? (
                  <>
                    <Monitor className="w-3.5 h-3.5" />
                    <span>Desktop View</span>
                  </>
                ) : (
                  <>
                    <Smartphone className="w-3.5 h-3.5" />
                    <span>Mobile Mockups (11)</span>
                  </>
                )}
              </button>

              <button
                onClick={onOpenBooking}
                className="relative inline-flex items-center justify-center px-5 py-2 overflow-hidden text-xs font-medium tracking-[0.15em] uppercase text-sand-100 rounded-full border border-forest-600/70 bg-forest-900/40 hover:bg-forest-800/80 hover:border-gold/60 transition-all duration-300 shadow-sm hover:shadow-forest-900/50"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5 text-gold" />
                  Check Availability
                </span>
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="flex md:hidden items-center space-x-2">
              <button
                onClick={() => setIsMobilePreviewMode(!isMobilePreviewMode)}
                className="p-2 rounded-lg bg-dark-900 text-gold border border-white/10"
                title="Toggle Mobile View Mode"
              >
                <Smartphone className="w-4 h-4" />
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-md text-sand-200 hover:text-white hover:bg-white/5"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-dark-950/98 backdrop-blur-xl border-b border-white/10 px-4 pt-4 pb-6 space-y-3 animate-fade-in">
            <div className="grid grid-cols-2 gap-2 pb-3 border-b border-white/10">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left px-3 py-2 text-xs uppercase tracking-widest rounded-lg transition-colors ${
                    activeTab === item.id
                      ? 'bg-forest-900/80 text-gold font-semibold'
                      : 'text-sand-200 hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  onOpenBooking();
                  setMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-forest-700 hover:bg-forest-600 text-white text-xs tracking-widest uppercase font-medium transition-colors"
              >
                <Calendar className="w-4 h-4 text-gold" />
                Check Availability
              </button>
              <a
                href="tel:+919876543210"
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-white/10 text-sand-200 text-xs tracking-widest uppercase hover:bg-white/5"
              >
                <Phone className="w-3.5 h-3.5 text-sand-300" />
                Call Nagercoil Studio
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
