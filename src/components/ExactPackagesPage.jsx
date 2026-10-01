import React from 'react';
import ExactBrandLogo from './ExactBrandLogo';
import ExactHeader from './ExactHeader';

export default function ExactPackagesPage({
  onNavClick,
  onOpenBooking,
  activeTab = 'packages'
}) {
  const navLinks = [
    { id: 'stories', label: 'Stories' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About' },
    { id: 'packages', label: 'Packages' },
    { id: 'contact', label: 'Contact' },
  ];

  const packagesList = [
    {
      id: 'birthday-baby',
      title: 'Birthday / Baby Shower',
      price: '₹ 17,000',
      features: [
        'Photography with Customized',
        'Soft Copies of the Event'
      ],
      image: 'https://images.unsplash.com/photo-1544126592-807ade215a0b?auto=format&fit=crop&w=600&q=85',
      alt: 'Birthday and Baby Shower Package'
    },
    {
      id: 'engagement',
      title: 'Engagement',
      price: '₹ 75,000',
      features: [
        'Candid Photography',
        'Candid Videography',
        'Traditional Photography',
        'Traditional Videography'
      ],
      image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=600&q=85',
      alt: 'Engagement Photography Package'
    },
    {
      id: 'wedding-reception',
      title: 'Wedding & Reception',
      price: '₹ 1,50,000',
      features: [
        'Candid Photography',
        'Traditional Photography',
        'Outdoor Photoshoot',
        'Cinematic Videography'
      ],
      image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=600&q=85',
      alt: 'Wedding and Reception Package'
    }
  ];

  return (
    <div className="w-full bg-[#FAF8F3] min-h-screen text-[#1c1d1a]">
      {/* 1. TOP HEADER & BANNER (DARK SECTION MATCHING REFERENCE IMAGE) */}
      <section className="relative w-full bg-[#0b0e0c] text-sand-50 pb-16 sm:pb-20">
        {/* Top Header / Navigation Bar with Mobile Drawer */}
        <ExactHeader
          activeTab="packages"
          onNavClick={onNavClick}
          onOpenBooking={onOpenBooking}
        />

        {/* Header Title Area matching Reference Image */}
        <div className="relative z-10 w-full px-6 sm:px-10 lg:px-14 pt-12 sm:pt-16">
          <div className="max-w-[1400px] mx-auto">
            <div className="max-w-xl text-left space-y-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-editorial font-light text-white leading-tight tracking-tight">
                Packages
              </h1>
              <p className="text-[13px] sm:text-[14px] font-editorial italic text-sand-200/90 tracking-wide pt-1">
                Simple. Transparent. Tailored to your story.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PACKAGES CARDS LIST (WARM CREAM SECTION MATCHING REFERENCE IMAGE) */}
      <section className="w-full bg-[#FAF8F3] py-12 sm:py-16 px-4 sm:px-10 lg:px-14">
        <div className="max-w-[760px] mx-auto space-y-6 sm:space-y-8">
          {packagesList.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white rounded-2xl border border-[#e5e0d3] p-5 sm:p-8 shadow-sm flex flex-col sm:flex-row justify-between gap-5 sm:gap-6 items-stretch"
            >
              {/* Left Side: Title, Price, Bullets, Enquire Now Button */}
              <div className="flex-1 flex flex-col justify-between text-left space-y-5">
                <div>
                  <h2 className="font-editorial text-xl sm:text-2xl font-normal text-[#2a2621] leading-tight">
                    {pkg.title}
                  </h2>
                  <div className="text-2xl sm:text-3xl font-editorial font-normal text-[#1a1c19] mt-2">
                    {pkg.price}
                  </div>

                  {/* Bullet points with circular dots */}
                  <ul className="mt-4 space-y-2.5">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2.5 text-[12px] sm:text-[13px] text-[#62655d] font-sans font-light">
                        {/* Circle dot icon matching reference image */}
                        <span className="w-2 h-2 rounded-full border border-[#8a8880] flex-shrink-0 bg-[#d8d4c9]" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Enquire Now Button */}
                <div className="pt-2">
                  <button
                    onClick={() => onOpenBooking(pkg)}
                    className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-[#141715] hover:bg-black text-white text-[12px] font-sans tracking-wide transition-all duration-200 shadow-sm text-center"
                  >
                    Enquire Now
                  </button>
                </div>
              </div>

              {/* Right Side: Responsive Image (horizontal on phone, vertical on desktop) */}
              <div className="w-full sm:w-[190px] md:w-[210px] aspect-[16/10] sm:aspect-auto rounded-xl overflow-hidden bg-[#e6e2d8] flex-shrink-0">
                <img
                  src={pkg.image}
                  alt={pkg.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
