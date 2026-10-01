import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { FEATURED_STORIES } from '../data/photographyData';

export default function FeaturedStories({ onViewAllStories, onSelectStory }) {
  return (
    <section className="py-20 bg-dark-900 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-semibold">
              Curated Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-editorial font-light text-sand-50 mt-1">
              Featured Stories
            </h2>
          </div>
          <button
            onClick={onViewAllStories}
            className="group mt-4 sm:mt-0 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-sand-300 hover:text-gold transition-colors"
          >
            <span>View All Stories</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURED_STORIES.map((story) => (
            <div
              key={story.id}
              onClick={() => onSelectStory(story)}
              className="group cursor-pointer flex flex-col bg-dark-850 rounded-2xl overflow-hidden border border-white/5 hover:border-gold/30 transition-all duration-500 shadow-md hover:-translate-y-1"
            >
              {/* Photo with zoom effect */}
              <div className="relative aspect-[3/4] overflow-hidden bg-dark-950">
                <img
                  src={story.coverImage}
                  alt={story.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                
                {/* Floating location tag */}
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-dark-950/70 backdrop-blur-md border border-white/10 text-[9px] uppercase tracking-wider text-sand-200">
                  {story.location}
                </div>

                {/* Hover discover button */}
                <div className="absolute bottom-4 right-4 w-9 h-9 rounded-full bg-forest-700/80 backdrop-blur-sm border border-forest-500/50 flex items-center justify-center text-sand-100 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                  <ArrowUpRight className="w-4 h-4 text-gold" />
                </div>
              </div>

              {/* Card Meta */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-editorial text-sand-50 group-hover:text-gold transition-colors">
                    {story.title}
                  </h3>
                  <p className="text-xs uppercase tracking-widest text-sand-300 font-light mt-0.5">
                    {story.subtitle}
                  </p>
                </div>
                <p className="text-xs text-sand-300/80 line-clamp-2 mt-3 font-light leading-relaxed">
                  {story.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
