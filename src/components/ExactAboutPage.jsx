import React from 'react';
import ExactBrandLogo from './ExactBrandLogo';
import { Camera, Heart, Award, Shield, Sparkles, Clock, MapPin, ArrowRight } from 'lucide-react';

export default function ExactAboutPage({
  onNavClick,
  onOpenBooking,
  activeTab = 'about'
}) {
  const navLinks = [
    { id: 'stories', label: 'Stories' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About' },
    { id: 'packages', label: 'Packages' },
    { id: 'contact', label: 'Contact' },
  ];

  const milestones = [
    {
      year: '2018',
      title: 'The First Shutter',
      desc: 'Founded in Nagercoil with a single camera body and an unwavering conviction to tell honest, candid wedding stories.'
    },
    {
      year: '2020',
      title: 'Branch Expansion',
      desc: 'Established our presence across Chennai and Coimbatore, bringing our intimate documentary style to grand heritage weddings.'
    },
    {
      year: '2023',
      title: 'Cinema & Color Lab',
      desc: 'Transitioned to 4K cinematic storytelling with custom ACES color grading and museum-grade archival print albums.'
    },
    {
      year: 'Today',
      title: '100+ Treasured Legacies',
      desc: 'Over 1,000 milestones preserved with clients who trust us not just as photographers, but as guardians of their family memories.'
    }
  ];

  const teamMembers = [
    {
      name: 'M.S. Annadurai',
      role: 'Founder & Principal Cinematographer',
      bio: 'Visionary behind Memories Photography. Specialized in natural light portraiture, emotive documentary framing, and South Indian heritage rituals.',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=700&q=85',
      badge: 'Nagercoil HQ'
    },
    {
      name: 'Kavitha Rajan',
      role: 'Lead Candid Photographer',
      bio: 'Known for catching the whispers, fleeting giggles, and joyous teary glances that happen between formal stage poses.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=700&q=85',
      badge: 'Chennai Hub'
    },
    {
      name: 'Dinesh Kumar',
      role: 'Post-Production Director & Colorist',
      bio: 'Obsessed with rich skin tones, true-to-life Kanjivaram silk luster, and warm cinematic grading that never goes out of style.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=700&q=85',
      badge: 'Editing Lab'
    }
  ];

  const principles = [
    {
      num: '01',
      title: 'Unobtrusive Observation',
      description: 'We blend quietly into your celebrations like close friends. No stiff manufactured poses, no interruption of sacred moments—just the truth of what felt real.'
    },
    {
      num: '02',
      title: 'Authentic Color & Light',
      description: 'We reject over-processed filters that age poorly. We grade with rich organic tones that honor traditional turmeric ceremonies, marigold yellows, and sunset temple skies.'
    },
    {
      num: '03',
      title: 'Heirloom Craftsmanship',
      description: 'Your memories belong in your hands, not trapped on a screen. Every couple receives handcrafted leather albums bound on acid-free archival fine-art paper.'
    }
  ];

  return (
    <div className="w-full bg-[#FAF8F3] min-h-screen text-[#1c1d1a]">
      {/* 1. TOP HEADER & HERO SECTION (DARK CINEMATIC EDITORIAL) */}
      <section className="relative w-full min-h-[560px] sm:min-h-[640px] flex flex-col justify-between bg-[#0b0e0c] text-sand-50 overflow-hidden">
        {/* Cinematic Backdrop with atmospheric lighting */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/hero-couple.jpg"
            alt="About Memories Photography Studio"
            className="w-full h-full object-cover object-right filter brightness-[0.52] contrast-[1.08]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b0e0c]/98 via-[#0b0e0c]/80 to-transparent w-full md:w-3/4" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0e0c] via-transparent to-[#0b0e0c]/60" />
        </div>

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
                    item.id === 'about'
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

        {/* Hero Title & Manifest matching Editorial Storytelling */}
        <div className="relative z-10 w-full px-6 sm:px-10 lg:px-14 py-16 sm:py-24 my-auto">
          <div className="max-w-[1400px] mx-auto">
            <div className="max-w-2xl text-left space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 backdrop-blur-md text-[10px] tracking-[0.25em] uppercase text-sand-200">
                <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                <span>Our Heritage & Philosophy • Est. 2018</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[66px] font-editorial font-light text-white leading-[1.12] tracking-tight">
                We don't just shoot frames. <br />
                <span className="italic text-sand-200">We preserve your legacy.</span>
              </h1>

              <p className="text-[13px] sm:text-[15px] font-sans text-sand-200/90 font-light leading-relaxed max-w-xl">
                Memories Photography was founded in Nagercoil with a singular conviction: that every laugh, stolen glance, and sacred ritual deserves to be captured with the unhurried grace of classic cinema.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE FOUNDER'S ESSAY & STATS (WARM EDITORIAL SPREAD) */}
      <section className="w-full bg-[#FAF8F3] py-16 sm:py-24 px-6 sm:px-10 lg:px-14">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left Column: Founder Photo & Floating Quote */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative w-full max-w-[340px] sm:max-w-[380px] aspect-[4/5] rounded-2xl overflow-hidden bg-[#e6e2d8] shadow-lg border border-[#e5e0d3]">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=85"
                  alt="M.S. Annadurai - Founder"
                  className="w-full h-full object-cover filter contrast-[1.05]"
                  loading="lazy"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-[#0b0e0c]/85 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/10 text-center">
                  <span className="text-xs uppercase tracking-widest text-gold font-medium block">
                    M.S. Annadurai
                  </span>
                  <span className="text-[10px] text-sand-300 font-light tracking-wide">
                    Founder & Principal Cinematographer
                  </span>
                </div>
              </div>

              {/* Founder Quote Card */}
              <div className="mt-6 p-6 rounded-2xl bg-white border border-[#e2dcd0] shadow-sm max-w-[380px] text-left space-y-2">
                <p className="font-editorial italic text-[15px] sm:text-[16px] text-[#2c2e29] leading-snug">
                  "A great photograph is never measured in megapixels. It is measured by whether it brings tears to your eyes twenty years from now."
                </p>
                <span className="text-[11px] font-sans uppercase tracking-widest text-[#736f66] block pt-1">
                  — The Memories Studio Ethos
                </span>
              </div>
            </div>

            {/* Right Column: Editorial Origin Story */}
            <div className="lg:col-span-7 text-left space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-sans uppercase tracking-[0.25em] text-[#736f66] font-medium">
                  The Story Behind The Lens
                </span>
                <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-light text-[#1a1c19] tracking-tight">
                  Rooted in Kanyakumari. <br />
                  Trusted Across Tamil Nadu.
                </h2>
              </div>

              <div className="space-y-4 text-[13px] sm:text-[14px] text-[#62655d] font-sans font-light leading-relaxed">
                <p>
                  Our journey began in Nagercoil, where three oceans meet and century-old temples carry centuries of sacred vows. We observed that modern wedding photography often felt like an assembly line—rush, strobe lights, and unnatural poses that left couples exhausted on their own special day.
                </p>
                <p>
                  We chose a different path: documentary storytelling. We step into your wedding like family members with quiet observation, patience, and profound reverence for the rituals that bind two families together.
                </p>
                <p>
                  Today, Memories Photography has grown from a humble Nagercoil studio into a dedicated collective of 12+ photographers, cinematographers, and colorists serving Chennai, Coimbatore, Tirunelveli, and destination celebrations worldwide.
                </p>
              </div>

              {/* 3 Metric Badges */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#e2dcd0]">
                <div>
                  <span className="font-editorial text-3xl sm:text-4xl font-light text-[#1a1c19] block">
                    6+
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-sans uppercase tracking-wider text-[#736f66]">
                    Years of Craft
                  </span>
                </div>
                <div>
                  <span className="font-editorial text-3xl sm:text-4xl font-light text-[#1a1c19] block">
                    100+
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-sans uppercase tracking-wider text-[#736f66]">
                    Happy Families
                  </span>
                </div>
                <div>
                  <span className="font-editorial text-3xl sm:text-4xl font-light text-[#1a1c19] block">
                    1000+
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-sans uppercase tracking-wider text-[#736f66]">
                    Moments Frozen
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR CORE PRINCIPLES (EDITORIAL 3-COLUMN SPREAD) */}
      <section className="w-full bg-[#F4EFE6] py-16 sm:py-20 px-6 sm:px-10 lg:px-14 border-t border-b border-[#e5e0d3]">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-left mb-12 sm:mb-14">
            <span className="text-xs font-sans uppercase tracking-[0.25em] text-[#736f66] font-medium">
              How We Work
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl font-light text-[#1a1c19] tracking-tight mt-1">
              Our Pillars of Storytelling
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {principles.map((item) => (
              <div
                key={item.num}
                className="bg-[#FAF8F3] rounded-2xl p-8 border border-[#e2dcd0] shadow-sm space-y-4 text-left"
              >
                <span className="font-editorial text-3xl text-gold font-light block">
                  {item.num}
                </span>
                <h3 className="font-editorial text-2xl font-normal text-[#1a1c19]">
                  {item.title}
                </h3>
                <p className="text-[13px] font-sans text-[#62655d] font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. VISUAL TIMELINE JOURNEY */}
      <section className="w-full bg-[#FAF8F3] py-16 sm:py-24 px-6 sm:px-10 lg:px-14">
        <div className="max-w-[1000px] mx-auto">
          <div className="text-center max-w-xl mx-auto mb-14 space-y-2">
            <span className="text-xs font-sans uppercase tracking-[0.25em] text-[#736f66] font-medium">
              Milestones
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-light text-[#1a1c19] tracking-tight">
              The Journey So Far
            </h2>
          </div>

          {/* Timeline Stack */}
          <div className="space-y-6 sm:space-y-8 relative before:absolute before:inset-0 before:left-4 sm:before:left-1/2 before:w-px before:bg-[#e2dcd0] before:hidden sm:before:block">
            {milestones.map((m, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={m.year}
                  className={`relative flex flex-col sm:flex-row items-start sm:items-center ${
                    isEven ? 'sm:flex-row-reverse text-left' : 'text-left sm:text-right'
                  }`}
                >
                  {/* Timeline Content Card */}
                  <div className="w-full sm:w-[45%] bg-white rounded-2xl p-6 sm:p-7 border border-[#e2dcd0] shadow-sm space-y-2">
                    <span className="inline-block px-3 py-0.5 rounded-full bg-[#f4efe6] text-[11px] font-sans uppercase tracking-wider text-[#62655d] font-medium">
                      {m.year}
                    </span>
                    <h3 className="font-editorial text-xl sm:text-2xl font-normal text-[#1a1c19]">
                      {m.title}
                    </h3>
                    <p className="text-[12px] sm:text-[13px] font-sans text-[#62655d] font-light leading-relaxed">
                      {m.desc}
                    </p>
                  </div>

                  {/* Center Dot for Desktop */}
                  <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#1c221e] border-2 border-white shadow-sm" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. THE CREATIVE COLLECTIVE (EXPANDED TEAM SPOTLIGHT) */}
      <section className="w-full bg-[#F4EFE6] py-16 sm:py-24 px-6 sm:px-10 lg:px-14 border-t border-[#e2dcd0]">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-14">
            <div className="text-left space-y-2">
              <span className="text-xs font-sans uppercase tracking-[0.25em] text-[#736f66] font-medium">
                The Creative Collective
              </span>
              <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-light text-[#1a1c19] tracking-tight">
                Behind Every Frame
              </h2>
            </div>
            <p className="text-xs font-sans text-[#736f66] font-light mt-2 sm:mt-0">
              Passionate artists united by authentic visual storytelling
            </p>
          </div>

          {/* 3 Team Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="bg-[#FAF8F3] rounded-2xl overflow-hidden border border-[#e2dcd0] shadow-sm flex flex-col text-left group"
              >
                <div className="aspect-[4/3] overflow-hidden bg-[#e6e2d8] relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full bg-[#0b0e0c]/80 backdrop-blur-md text-[9px] uppercase tracking-wider text-sand-100 border border-white/10">
                    {member.badge}
                  </div>
                </div>

                <div className="p-6 space-y-2 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-editorial text-xl sm:text-2xl font-normal text-[#1a1c19]">
                      {member.name}
                    </h3>
                    <p className="text-[11px] font-sans uppercase tracking-wider text-gold-dark font-medium">
                      {member.role}
                    </p>
                    <p className="text-[12px] font-sans text-[#62655d] font-light leading-relaxed mt-2.5">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. GEAR & QUALITY PHILOSOPHY CALLOUT */}
      <section className="w-full bg-[#FAF8F3] py-14 sm:py-20 px-6 sm:px-10 lg:px-14 border-t border-[#e2dcd0]">
        <div className="max-w-[1000px] mx-auto bg-white rounded-3xl border border-[#e2dcd0] p-8 sm:p-12 shadow-sm text-left">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8 space-y-3">
              <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-[#736f66] font-medium">
                Equipment & Archival Standards
              </span>
              <h3 className="font-editorial text-2xl sm:text-3xl font-light text-[#1a1c19] tracking-tight">
                Dual Redundancy & Zero Compromises
              </h3>
              <p className="text-[13px] font-sans text-[#62655d] font-light leading-relaxed">
                Weddings cannot be re-shot. Every Memories Photography photographer carries dual-slot camera bodies recording simultaneous backups to dual high-speed cards. Your raw footage is mirrored to off-site cloud storage and archival solid-state drives before we even leave your venue.
              </p>
            </div>
            <div className="md:col-span-4 flex flex-col gap-2.5 text-xs font-sans text-[#2c2e29]">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                <span>Dual Sony FX Cinema Bodies</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                <span>Prime Lens Optics (1.2 / 1.4)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                <span>Lossless 32-bit Float Audio</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                <span>Handcrafted Leather Albums</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CLOSING CALLOUT BANNER (DARK SECTION WITH EMOTIONAL QUOTE & CTA) */}
      <section className="relative w-full min-h-[400px] sm:min-h-[460px] flex items-center bg-[#0b0e0c] text-sand-50 overflow-hidden">
        {/* Background Image: Couple in intimate sunset profile on left */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1600&q=85"
            alt="It's not just a photo. It's a feeling."
            className="w-full h-full object-cover object-left md:object-center filter brightness-[0.45] contrast-[1.08]"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-[#0b0e0c]/98 via-[#0b0e0c]/75 to-transparent w-full md:w-3/4 ml-auto" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0e0c]/85 via-transparent to-[#0b0e0c]/50" />
        </div>

        {/* Right Aligned Quote & Reservation CTA */}
        <div className="relative z-10 w-full px-6 sm:px-10 lg:px-16 py-14">
          <div className="max-w-[1200px] mx-auto flex flex-col items-end text-right sm:text-left space-y-6">
            <div className="space-y-2 max-w-lg">
              <h3 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-light text-white leading-tight tracking-tight">
                "It's not just a photo. <br />
                <span className="italic text-sand-200">It's a feeling."</span>
              </h3>
              <p className="text-[12px] sm:text-[13px] font-sans text-sand-200/80 font-light pt-2">
                Your celebration will pass in a heartbeat. Let us make sure you hold onto every tear, smile, and shared embrace forever.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap gap-4 justify-end">
              <button
                onClick={onOpenBooking}
                className="px-6 py-2.5 rounded-lg bg-gold hover:bg-gold-light text-dark-950 font-sans text-[12px] font-medium tracking-wide transition-all shadow-md"
              >
                Check Date Availability
              </button>
              <button
                onClick={() => onNavClick('stories')}
                className="px-6 py-2.5 rounded-lg border border-white/40 hover:border-white bg-black/20 text-white font-sans text-[12px] tracking-wide transition-all"
              >
                Browse Our Stories
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
