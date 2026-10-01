import React from 'react';
import { Heart, ExternalLink } from 'lucide-react';
import InstagramIcon from './InstagramIcon';

import { INSTAGRAM_POSTS, BRAND } from '../data/photographyData';

export default function InstagramSection({ onOpenLightbox }) {
  return (
    <section className="py-20 bg-dark-900 border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header from Frame 08 */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-900/60 border border-forest-600/40 text-[10px] uppercase tracking-[0.25em] text-gold mb-3">
            <InstagramIcon className="w-3.5 h-3.5" />
            <span>Daily BTS & Live Stories</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-editorial font-light text-sand-50">
            More Stories on Instagram
          </h2>
          <p className="text-xs uppercase tracking-[0.25em] text-sand-300 font-light mt-2">
            Follow our journey <span className="text-gold">{BRAND.contact.instagram}</span>
          </p>
        </div>

        {/* 9-Image Instagram Grid (3x3 on desktop) matching Frame 08 */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 max-w-4xl mx-auto">
          {INSTAGRAM_POSTS.map((post) => (
            <div
              key={post.id}
              onClick={() => onOpenLightbox(post.img)}
              className="group relative aspect-square rounded-xl overflow-hidden bg-dark-950 cursor-pointer border border-white/5 hover:border-gold/40 transition-all duration-300"
            >
              <img
                src={post.img}
                alt={post.caption}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                loading="lazy"
              />
              
              {/* Instagram Hover Overlay */}
              <div className="absolute inset-0 bg-dark-950/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4">
                <div className="flex justify-end">
                  <InstagramIcon className="w-4 h-4 text-sand-300" />
                </div>
                <div className="text-center space-y-1">
                  <div className="flex items-center justify-center gap-1.5 text-sand-50 text-xs font-semibold">
                    <Heart className="w-4 h-4 text-red-500 fill-red-500" />
                    <span>{post.likes}</span>
                  </div>
                  <p className="text-[10px] text-sand-200 line-clamp-2 font-light">
                    {post.caption}
                  </p>
                </div>
                <div className="flex justify-center text-[9px] uppercase tracking-widest text-gold">
                  <span>View Post</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Follow CTA Button */}
        <div className="mt-10 text-center">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-forest-800/80 hover:bg-forest-700 text-sand-50 text-xs uppercase tracking-[0.2em] font-medium border border-forest-600/40 hover:border-gold/50 transition-all shadow-md"
          >
            <InstagramIcon className="w-4 h-4 text-gold" />
            <span>Follow on Instagram</span>
            <ExternalLink className="w-3 h-3 text-sand-300" />
          </a>
        </div>
      </div>
    </section>
  );
}
