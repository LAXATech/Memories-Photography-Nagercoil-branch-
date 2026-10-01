import React from 'react';
import ExactBrandLogo from './ExactBrandLogo';

export default function ExactServicesPage({
  onNavClick,
  onOpenBooking,
  onSelectService,
  activeTab = 'services'
}) {
  const navLinks = [
    { id: 'stories', label: 'Stories' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About' },
    { id: 'packages', label: 'Packages' },
    { id: 'contact', label: 'Contact' },
  ];

  const servicesList = [
    {
      id: 'weddings',
      title: 'Weddings',
      descriptionLine1: 'Your wedding happens once.',
      descriptionLine2: 'Your photographs let you relive it forever.',
      image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=900&q=85',
      alt: 'Weddings Photography - Memories Photography'
    },
    {
      id: 'engagements',
      title: 'Engagements',
      descriptionLine1: 'Before the wedding, there is a story',
      descriptionLine2: 'worth remembering.',
      image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=85',
      alt: 'Engagements Photography - Memories Photography'
    },
    {
      id: 'celebrations',
      title: 'Celebrations',
      descriptionLine1: 'Birthdays, Baby showers, Anniversaries',
      descriptionLine2: 'and more.',
      image: 'https://images.unsplash.com/photo-1544126592-807ade215a0b?auto=format&fit=crop&w=900&q=85',
      alt: 'Celebrations Photography - Memories Photography'
    },
    {
      id: 'portraits',
      title: 'Portraits',
      descriptionLine1: 'Couple, Baby, Family and Individual portraits.',
      descriptionLine2: '',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=85',
      alt: 'Portraits Photography - Memories Photography'
    }
  ];

  return (
    <div className="w-full bg-[#FAF8F3] min-h-screen text-[#1c1d1a]">
      {/* 1. TOP HEADER & BANNER (DARK SECTION MATCHING REFERENCE IMAGE) */}
      <section className="relative w-full bg-[#0b0e0c] text-sand-50 pb-16 sm:pb-20">
        {/* Top Header / Navigation Bar */}
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
                    item.id === 'services'
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

        {/* Header Title Area matching Reference Image */}
        <div className="relative z-10 w-full px-6 sm:px-10 lg:px-14 pt-12 sm:pt-16">
          <div className="max-w-[1400px] mx-auto">
            <div className="max-w-xl text-left space-y-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-editorial font-light text-white leading-tight tracking-tight">
                Our Services
              </h1>
              <p className="text-[13px] sm:text-[14px] font-editorial italic text-sand-200/90 tracking-wide pt-1">
                More than just photos. We create lasting stories.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SERVICES LIST (WARM CREAM SECTION MATCHING REFERENCE IMAGE) */}
      <section className="w-full bg-[#FAF8F3] py-14 sm:py-16 px-6 sm:px-10 lg:px-14">
        <div className="max-w-[1100px] mx-auto space-y-0">
          {servicesList.map((service, index) => (
            <div
              key={service.id}
              className={`grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-10 lg:gap-14 items-center py-10 sm:py-12 ${
                index < servicesList.length - 1 ? 'border-b border-[#e5e0d3]' : ''
              }`}
            >
              {/* Left Column: Image with horizontal rectangular aspect ratio */}
              <div className="md:col-span-6 w-full">
                <div
                  onClick={() => onSelectService(service.id)}
                  className="w-full aspect-[16/10] overflow-hidden bg-[#e6e2d8] cursor-pointer group shadow-sm"
                >
                  <img
                    src={service.image}
                    alt={service.alt}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Right Column: Title, Description & Explore link */}
              <div className="md:col-span-6 text-left space-y-3">
                <h2
                  onClick={() => onSelectService(service.id)}
                  className="font-editorial text-2xl sm:text-3xl font-normal text-[#1a1c19] hover:text-gold-dark cursor-pointer transition-colors leading-tight"
                >
                  {service.title}
                </h2>

                <div className="text-[13px] sm:text-[14px] text-[#62655d] font-sans font-light leading-relaxed">
                  <p>{service.descriptionLine1}</p>
                  {service.descriptionLine2 && <p>{service.descriptionLine2}</p>}
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => onSelectService(service.id)}
                    className="group inline-flex items-center gap-1.5 text-xs font-sans text-[#4a4d46] hover:text-black tracking-wide transition-colors"
                  >
                    <span>Explore</span>
                    <span className="text-sm transition-transform group-hover:translate-x-1">→</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
