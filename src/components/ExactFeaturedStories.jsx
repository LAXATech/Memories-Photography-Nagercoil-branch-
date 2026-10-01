import React from 'react';
import { ArrowRight } from 'lucide-react';
import { FEATURED_STORIES } from '../data/photographyData';

export default function ExactFeaturedStories({ onViewAllStories, onSelectStory }) {
  return (
    <section className="w-full bg-[#FAF8F3] text-[#1c1d1a] py-14 sm:py-20 px-4 sm:px-10 lg:px-14">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header Row */}
        <div className="flex flex-row items-center justify-between gap-2 mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-4xl font-editorial font-normal text-[#1a1b18] tracking-tight">
            Featured Stories
          </h2>

          <button
            onClick={onViewAllStories}
            className="group inline-flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-sans text-[#4a4d46] hover:text-black tracking-wide transition-colors flex-shrink-0"
          >
            <span>View All Stories</span>
            <span className="text-sm transition-transform group-hover:translate-x-1">→</span>
          </button>
        </div>

        {/* 4 Cards Grid - Exactly matching the 4 vertical cards in reference image */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURED_STORIES.map((story) => (
            <div
              key={story.id}
              onClick={() => onSelectStory(story)}
              className="group cursor-pointer flex flex-col text-left"
            >
              {/* Photo Box with vertical aspect ratio */}
              <div className="w-full aspect-[3/4] overflow-hidden bg-[#e8e4dc] mb-3.5 shadow-sm">
                <img
                  src={story.coverImage}
                  alt={story.title}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Story Title & Subtitle */}
              <div className="space-y-0.5">
                <h3 className="font-editorial text-[19px] sm:text-[20px] font-normal text-[#1a1c19] group-hover:text-gold-dark transition-colors leading-tight">
                  {story.title}
                </h3>
                <p className="font-sans text-[11px] text-[#6e716a] font-light">
                  {story.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
