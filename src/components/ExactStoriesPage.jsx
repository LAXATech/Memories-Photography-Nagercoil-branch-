import React, { useState, useMemo } from 'react';
import ExactBrandLogo from './ExactBrandLogo';

export default function ExactStoriesPage({
  onNavClick,
  onOpenBooking,
  onSelectStory,
  onOpenLightbox,
  activeTab = 'stories'
}) {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [visibleItemsCount, setVisibleItemsCount] = useState(9);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const filters = [
    'All',
    'Weddings',
    'Engagements',
    'Celebrations',
    'Babies',
    'Portraits'
  ];

  const navLinks = [
    { id: 'stories', label: 'Stories' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About' },
    { id: 'packages', label: 'Packages' },
    { id: 'contact', label: 'Contact' },
  ];

  // Comprehensive authentic curated stories dataset categorized across Weddings, Engagements, Celebrations, Babies, and Portraits
  const allStories = [
    // Weddings
    {
      id: 'w-1',
      title: 'Aarav & Priya',
      subtitle: 'Wedding Story',
      location: 'Chennai',
      category: 'Weddings',
      aspect: 'aspect-[3/4]',
      src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=900&q=85',
    },
    {
      id: 'w-2',
      title: 'Karthik & Deepa',
      subtitle: 'Sacred Temple Muhurtham',
      location: 'Nagercoil',
      category: 'Weddings',
      aspect: 'aspect-[3/4]',
      src: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=900&q=85',
    },
    {
      id: 'w-3',
      title: 'Vignesh & Ananya',
      subtitle: 'Heritage Courtyard Vows',
      location: 'Madurai',
      category: 'Weddings',
      aspect: 'aspect-[4/3]',
      src: 'https://images.unsplash.com/photo-1519225438865-c8c366ff5b6c?auto=format&fit=crop&w=800&q=85',
    },
    {
      id: 'w-4',
      title: 'Suresh & Meera',
      subtitle: 'Sacred Garland Ritual',
      location: 'Coimbatore',
      category: 'Weddings',
      aspect: 'aspect-[4/3]',
      src: 'https://images.unsplash.com/photo-1545232979-fbf68fe9b1af?auto=format&fit=crop&w=800&q=85',
    },
    // Engagements
    {
      id: 'e-1',
      title: 'Siddharth & Sneha',
      subtitle: 'Sunset Ring Exchange',
      location: 'Kanyakumari',
      category: 'Engagements',
      aspect: 'aspect-[4/5]',
      src: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=85',
    },
    {
      id: 'e-2',
      title: 'Rohan & Divya',
      subtitle: 'Intimate Palace Engagement',
      location: 'Tirunelveli',
      category: 'Engagements',
      aspect: 'aspect-[3/4]',
      src: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=800&q=85',
    },
    {
      id: 'e-3',
      title: 'Ashwin & Pooja',
      subtitle: 'Floral Pavilion Exchange',
      location: 'Chennai',
      category: 'Engagements',
      aspect: 'aspect-[4/3]',
      src: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=85',
    },
    // Celebrations
    {
      id: 'c-1',
      title: 'Twilight Mandapam',
      subtitle: 'Sangeet & Lantern Night',
      location: 'Nagercoil',
      category: 'Celebrations',
      aspect: 'aspect-[4/5]',
      src: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=800&q=85',
    },
    {
      id: 'c-2',
      title: 'Aadhya’s First Jubilee',
      subtitle: 'Grand Birthday Celebration',
      location: 'Chennai',
      category: 'Celebrations',
      aspect: 'aspect-[4/3]',
      src: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=85',
    },
    {
      id: 'c-3',
      title: 'Golden Jubilee Gathering',
      subtitle: '50 Years of Love',
      location: 'Coimbatore',
      category: 'Celebrations',
      aspect: 'aspect-[3/4]',
      src: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&q=85',
    },
    // Babies
    {
      id: 'b-1',
      title: 'Little Aarush',
      subtitle: 'Welcome Little Blessing',
      location: 'Nagercoil',
      category: 'Babies',
      aspect: 'aspect-[4/5]',
      src: 'https://images.unsplash.com/photo-1544126592-807ade215a0b?auto=format&fit=crop&w=800&q=85',
    },
    {
      id: 'b-2',
      title: 'Baby Shower Valaikappu',
      subtitle: 'Traditional Bangle Blessing',
      location: 'Tirunelveli',
      category: 'Babies',
      aspect: 'aspect-[3/4]',
      src: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&w=800&q=85',
    },
    {
      id: 'b-3',
      title: 'Iniyan’s First Steps',
      subtitle: 'Milestone Memories',
      location: 'Chennai',
      category: 'Babies',
      aspect: 'aspect-[4/3]',
      src: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=85',
    },
    // Portraits
    {
      id: 'p-1',
      title: 'Bridal Kanjivaram Elegance',
      subtitle: 'Fine Art Portrait',
      location: 'Chennai',
      category: 'Portraits',
      aspect: 'aspect-[3/4]',
      src: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=85',
    },
    {
      id: 'p-2',
      title: 'Lush Garden Romance',
      subtitle: 'Couple Outdoor Portrait',
      location: 'Nagercoil',
      category: 'Portraits',
      aspect: 'aspect-[4/3]',
      src: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=800&q=85',
    },
    {
      id: 'p-3',
      title: 'Golden Sunset Silhouette',
      subtitle: 'Seaside Portraiture',
      location: 'Kanyakumari',
      category: 'Portraits',
      aspect: 'aspect-[3/5]',
      src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=85',
    },
  ];

  // Dynamically filter stories based on selected category tab
  const filteredStories = useMemo(() => {
    if (selectedFilter === 'All') return allStories;
    return allStories.filter((s) => s.category.toLowerCase() === selectedFilter.toLowerCase());
  }, [selectedFilter]);

  // Sliced items based on pagination/load more
  const displayedStories = useMemo(() => {
    return filteredStories.slice(0, visibleItemsCount);
  }, [filteredStories, visibleItemsCount]);

  // Distribute items across 3 masonry columns
  const col1 = displayedStories.filter((_, idx) => idx % 3 === 0);
  const col2 = displayedStories.filter((_, idx) => idx % 3 === 1);
  const col3 = displayedStories.filter((_, idx) => idx % 3 === 2);

  const handleFilterClick = (filter) => {
    setSelectedFilter(filter);
    setVisibleItemsCount(9); // Reset visible items on filter change
  };

  const handleLoadMore = () => {
    setIsLoadingMore(true);
    setTimeout(() => {
      setIsLoadingMore(false);
      setVisibleItemsCount((prev) => prev + 6);
    }, 400);
  };

  const hasMore = visibleItemsCount < filteredStories.length;

  return (
    <div className="w-full bg-[#FAF8F3] min-h-screen text-[#1c1d1a]">
      {/* 1. TOP HEADER & HERO SECTION (DARK CINEMATIC WITH CLEAN BACKGROUND) */}
      <section className="relative w-full min-h-[460px] sm:min-h-[520px] flex flex-col justify-between bg-[#0b0e0c] text-sand-50 overflow-hidden">
        {/* Background Image: Clean couple photo without any baked-in text */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/hero-couple.jpg"
            alt="Memories Photography Stories"
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
                    item.id === 'stories'
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

        {/* Hero Title Area matching Reference Image */}
        <div className="relative z-10 w-full px-6 sm:px-10 lg:px-14 py-16 sm:py-20 my-auto">
          <div className="max-w-[1400px] mx-auto">
            <div className="max-w-xl text-left space-y-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-editorial font-light text-white leading-tight tracking-tight">
                Stories
              </h1>
              <p className="text-[13px] sm:text-[14px] font-editorial italic text-sand-200/90 tracking-wide pt-1">
                Real moments. Real emotions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. GALLERY FILTER BAR (RESPONSIVE TO ALL TABS) */}
      <section className="w-full bg-[#FAF8F3] pt-10 pb-6 px-6 sm:px-10 lg:px-14">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-[12px] sm:text-[13px] font-sans text-[#4a4d46]">
            {filters.map((filter, index) => {
              const isSelected = selectedFilter.toLowerCase() === filter.toLowerCase();
              return (
                <React.Fragment key={filter}>
                  <button
                    onClick={() => handleFilterClick(filter)}
                    className={`relative py-1 font-light tracking-wide transition-colors ${
                      isSelected
                        ? 'text-[#1c1d1a] font-medium'
                        : 'text-[#62655d] hover:text-[#1c1d1a]'
                    }`}
                  >
                    <span>{filter}</span>
                    {isSelected && (
                      <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#1c1d1a]" />
                    )}
                  </button>
                  {index < filters.length - 1 && (
                    <span className="text-[#a09e96] text-[10px] select-none">•</span>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. 3-COLUMN EDITORIAL MASONRY GRID (ALL IMAGES DISPLAY ON HOVER) */}
      <section className="w-full bg-[#FAF8F3] pb-16 px-6 sm:px-10 lg:px-14">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4 items-start">
            {/* COLUMN 1 */}
            <div className="flex flex-col gap-3.5 sm:gap-4">
              {col1.map((item) => (
                <div
                  key={item.id}
                  onClick={() => onOpenLightbox ? onOpenLightbox(item.src) : onSelectStory(item)}
                  className={`relative w-full ${item.aspect} overflow-hidden bg-[#181a17] cursor-pointer group shadow-sm flex items-center justify-center rounded-sm`}
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Subtle hover gradient and story details for every image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e0b]/90 via-[#0c0e0b]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-left z-10">
                    <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 space-y-1">
                      <h3 className="font-editorial text-xl sm:text-2xl font-normal text-white leading-tight">
                        {item.title}
                      </h3>
                      <p className="font-editorial italic text-xs sm:text-sm text-sand-200/90 font-light">
                        {item.subtitle}
                      </p>
                      <div className="flex items-center gap-2 pt-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                        <span className="font-sans text-[10px] text-sand-300 tracking-widest uppercase">
                          {item.location}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* COLUMN 2 */}
            <div className="flex flex-col gap-3.5 sm:gap-4">
              {col2.map((item) => (
                <div
                  key={item.id}
                  onClick={() => onOpenLightbox ? onOpenLightbox(item.src) : onSelectStory(item)}
                  className={`relative w-full ${item.aspect} overflow-hidden bg-[#181a17] cursor-pointer group shadow-sm flex items-center justify-center rounded-sm`}
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Hover story details for Aarav & Priya and all middle column items */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e0b]/90 via-[#0c0e0b]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-left z-10">
                    <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 space-y-1">
                      <h3 className="font-editorial text-xl sm:text-2xl font-normal text-white leading-tight">
                        {item.title}
                      </h3>
                      <p className="font-editorial italic text-xs sm:text-sm text-sand-200/90 font-light">
                        {item.subtitle}
                      </p>
                      <div className="flex items-center gap-2 pt-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                        <span className="font-sans text-[10px] text-sand-300 tracking-widest uppercase">
                          {item.location}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* COLUMN 3 */}
            <div className="flex flex-col gap-3.5 sm:gap-4">
              {col3.map((item) => (
                <div
                  key={item.id}
                  onClick={() => onOpenLightbox ? onOpenLightbox(item.src) : onSelectStory(item)}
                  className={`relative w-full ${item.aspect} overflow-hidden bg-[#181a17] cursor-pointer group shadow-sm flex items-center justify-center rounded-sm`}
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Subtle hover gradient and story details for column 3 items */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e0b]/90 via-[#0c0e0b]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-left z-10">
                    <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 space-y-1">
                      <h3 className="font-editorial text-xl sm:text-2xl font-normal text-white leading-tight">
                        {item.title}
                      </h3>
                      <p className="font-editorial italic text-xs sm:text-sm text-sand-200/90 font-light">
                        {item.subtitle}
                      </p>
                      <div className="flex items-center gap-2 pt-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                        <span className="font-sans text-[10px] text-sand-300 tracking-widest uppercase">
                          {item.location}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 4. LOAD MORE BUTTON */}
          {hasMore && (
            <div className="mt-12 sm:mt-16 text-center">
              <button
                onClick={handleLoadMore}
                disabled={isLoadingMore}
                className="px-7 py-2.5 rounded-lg border border-[#c4beaf] hover:border-[#1c1d1a] bg-transparent hover:bg-black/[0.03] text-[#3a3d36] hover:text-[#1c1d1a] text-[12px] font-sans tracking-wide transition-all duration-200"
              >
                {isLoadingMore ? 'Loading...' : 'Load More'}
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
