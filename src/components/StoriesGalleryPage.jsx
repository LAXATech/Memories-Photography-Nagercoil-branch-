import React, { useState } from 'react';
import { Eye, Heart, MapPin, Sparkles, ArrowRight, ArrowLeft } from 'lucide-react';
import { CATEGORIES, GALLERY_STORIES, STORY_DETAIL_DATA } from '../data/photographyData';

export default function StoriesGalleryPage({
  selectedStory,
  setSelectedStory,
  onOpenBooking,
  onOpenLightbox
}) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [visibleCount, setVisibleCount] = useState(6);
  const [isDetailView, setIsDetailView] = useState(false);
  const [likedStories, setLikedStories] = useState({});

  const filteredStories = activeCategory === 'all'
    ? GALLERY_STORIES
    : GALLERY_STORIES.filter(s => s.category === activeCategory);

  const toggleLike = (id, e) => {
    e.stopPropagation();
    setLikedStories(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleOpenDetail = (story) => {
    setSelectedStory(story);
    setIsDetailView(true);
    window.scrollTo({ top: 180, behavior: 'smooth' });
  };

  // If viewing story detail (Frame 03: Story Detail Page)
  if (isDetailView) {
    return (
      <div className="py-12 bg-dark-950 min-h-screen animate-fade-in">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs & Back */}
          <div className="flex items-center justify-between pb-8 border-b border-white/10">
            <button
              onClick={() => setIsDetailView(false)}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-sand-300 hover:text-gold transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Stories Gallery</span>
            </button>
            <div className="text-xs uppercase tracking-widest text-sand-300 font-light">
              <span>Stories</span> <span className="text-white/30">/</span> <span className="text-gold">Weddings</span>
            </div>
          </div>

          {/* Story Detail Header (Frame 03) */}
          <div className="py-12 text-center max-w-3xl mx-auto">
            <span className="inline-block px-3.5 py-1 rounded-full bg-forest-900/60 border border-forest-600/40 text-[10px] tracking-[0.25em] text-sand-200 uppercase mb-4">
              Wedding Story • Chennai & Nagercoil
            </span>
            <h1 className="text-4xl sm:text-6xl font-editorial font-light text-sand-50 mb-4">
              {STORY_DETAIL_DATA.title}
            </h1>
            <p className="text-lg sm:text-xl font-editorial italic text-gold-light/90 max-w-xl mx-auto">
              "{STORY_DETAIL_DATA.quote}"
            </p>
            <p className="text-xs text-sand-300 font-light mt-4 leading-relaxed max-w-2xl mx-auto">
              {STORY_DETAIL_DATA.storyBody}
            </p>

            {/* Story Quick Specs */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-6 border-t border-white/10 text-left">
              <div>
                <span className="block text-[10px] uppercase tracking-widest text-sand-300">Venue</span>
                <span className="text-xs text-sand-100 font-medium">{STORY_DETAIL_DATA.details.venue}</span>
              </div>
              <div>
                <span className="block text-[10px] uppercase tracking-widest text-sand-300">Date</span>
                <span className="text-xs text-sand-100 font-medium">{STORY_DETAIL_DATA.details.date}</span>
              </div>
              <div>
                <span className="block text-[10px] uppercase tracking-widest text-sand-300">Lead Artist</span>
                <span className="text-xs text-sand-100 font-medium">{STORY_DETAIL_DATA.details.leadPhotographer}</span>
              </div>
              <div>
                <span className="block text-[10px] uppercase tracking-widest text-sand-300">Deliverables</span>
                <span className="text-xs text-sand-100 font-medium">{STORY_DETAIL_DATA.details.deliverables}</span>
              </div>
            </div>
          </div>

          {/* Big Hero Visual */}
          <div className="relative rounded-2xl overflow-hidden mb-8 aspect-[16/9] border border-white/10 shadow-2xl">
            <img
              src={STORY_DETAIL_DATA.heroImage}
              alt={STORY_DETAIL_DATA.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-sand-100">
              <span className="text-xs uppercase tracking-widest text-sand-200">The Vows at Sunrise</span>
              <button
                onClick={() => onOpenLightbox(STORY_DETAIL_DATA.heroImage)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-dark-950/80 backdrop-blur-md text-xs text-gold border border-white/10 hover:border-gold"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>View Fullscreen</span>
              </button>
            </div>
          </div>

          {/* Photo Collage Essay matching Frame 03 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
            {STORY_DETAIL_DATA.gallery.map((photo, idx) => (
              <div
                key={idx}
                onClick={() => onOpenLightbox(photo.src)}
                className="group cursor-pointer relative rounded-2xl overflow-hidden bg-dark-900 border border-white/5 hover:border-gold/40 transition-all duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={photo.src}
                    alt={photo.caption}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 bg-dark-900/90 border-t border-white/5 flex items-center justify-between">
                  <p className="text-xs font-light text-sand-200">{photo.caption}</p>
                  <Eye className="w-4 h-4 text-sand-300 group-hover:text-gold transition-colors" />
                </div>
              </div>
            ))}
          </div>

          {/* Story Detail CTA Footer */}
          <div className="mt-16 p-8 sm:p-12 rounded-2xl bg-forest-900/30 border border-forest-600/40 text-center">
            <h3 className="text-2xl sm:text-3xl font-editorial font-light text-sand-50 mb-3">
              Want a story crafted just like this?
            </h3>
            <p className="text-xs sm:text-sm text-sand-300 font-light max-w-xl mx-auto mb-6">
              Every couple has a rhythm, every ritual has a heartbeat. Let us be there to preserve yours forever.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={onOpenBooking}
                className="px-7 py-3 rounded-full bg-forest-700 hover:bg-forest-600 text-white text-xs uppercase tracking-[0.2em] font-medium transition-colors"
              >
                Book Your Wedding Date
              </button>
              <button
                onClick={() => setIsDetailView(false)}
                className="px-6 py-3 rounded-full bg-dark-900 border border-white/15 text-sand-200 text-xs uppercase tracking-[0.2em] hover:bg-white/5"
              >
                Browse Other Stories
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Gallery Listing View (Frame 02)
  return (
    <div className="py-16 bg-dark-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header from Frame 02 */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-semibold">
            Visual Journal
          </span>
          <h1 className="text-4xl sm:text-6xl font-editorial font-light text-sand-50 mt-1">
            Stories
          </h1>
          <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-sand-300 font-light mt-3">
            Real moments. Real emotions.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setVisibleCount(6);
              }}
              className={`px-5 py-2 rounded-full text-xs uppercase tracking-[0.15em] font-medium transition-all ${
                activeCategory === cat.id
                  ? 'bg-forest-700 text-sand-50 border border-gold/50 shadow-md shadow-forest-900/40'
                  : 'bg-dark-900/80 text-sand-300 border border-white/5 hover:border-white/20 hover:text-white'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Editorial Masonry Grid */}
        <div className="grid grid-cols-12 gap-6">
          {filteredStories.slice(0, visibleCount).map((story) => {
            const isLiked = likedStories[story.id];
            return (
              <div
                key={story.id}
                onClick={() => handleOpenDetail(story)}
                className={`group cursor-pointer rounded-2xl overflow-hidden bg-dark-900 border border-white/5 hover:border-gold/40 transition-all duration-500 shadow-md flex flex-col justify-between ${story.span}`}
              >
                {/* Image Section */}
                <div className={`relative w-full overflow-hidden ${story.aspect}`}>
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/20 to-transparent opacity-70 group-hover:opacity-40 transition-opacity" />

                  {/* Top Bar with like & category */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                    <span className="px-2.5 py-1 rounded-full bg-dark-950/70 backdrop-blur-md text-[9px] uppercase tracking-wider text-sand-200 border border-white/10">
                      {story.category}
                    </span>
                    <button
                      onClick={(e) => toggleLike(story.id, e)}
                      className="pointer-events-auto w-8 h-8 rounded-full bg-dark-950/70 backdrop-blur-md border border-white/10 flex items-center justify-center text-sand-200 hover:text-red-400 transition-colors"
                    >
                      <Heart
                        className={`w-3.5 h-3.5 ${
                          isLiked ? 'text-red-500 fill-red-500' : ''
                        }`}
                      />
                    </button>
                  </div>

                  {/* Hover Open Indicator */}
                  <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-full bg-forest-800/80 backdrop-blur-sm border border-gold/40 text-[10px] tracking-wider uppercase text-sand-100 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                    <span>View Story</span>
                    <ArrowRight className="w-3 h-3 text-gold" />
                  </div>
                </div>

                {/* Info Bar */}
                <div className="p-4 sm:p-5">
                  <h3 className="text-xl font-editorial text-sand-50 group-hover:text-gold transition-colors">
                    {story.title}
                  </h3>
                  <p className="text-xs uppercase tracking-widest text-sand-300 font-light mt-1">
                    {story.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Load More Button matching Frame 02 */}
        {visibleCount < filteredStories.length && (
          <div className="mt-14 text-center">
            <button
              onClick={() => setVisibleCount(prev => prev + 4)}
              className="px-8 py-3 rounded-full border border-forest-600/60 bg-dark-900 hover:bg-forest-900 text-sand-200 hover:text-gold text-xs uppercase tracking-[0.2em] font-medium transition-all"
            >
              Load More Stories
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
