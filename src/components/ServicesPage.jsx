import React from 'react';
import { ArrowRight, CheckCircle2, Calendar } from 'lucide-react';
import { SERVICES } from '../data/photographyData';

export default function ServicesPage({ onSelectService, onOpenBooking }) {
  return (
    <div className="py-20 bg-dark-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header from Frame 04 */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-semibold">
            Craftsmanship & Care
          </span>
          <h1 className="text-4xl sm:text-6xl font-editorial font-light text-sand-50 mt-1">
            Our Services
          </h1>
          <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-sand-300 font-light mt-3">
            More than just photos. We create lasting stories.
          </p>
        </div>

        {/* Services List / Cards */}
        <div className="space-y-12">
          {SERVICES.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={service.id}
                className="group rounded-3xl bg-dark-900/60 border border-white/5 hover:border-gold/30 transition-all duration-500 overflow-hidden shadow-xl"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10 ${
                  !isEven ? 'lg:flex-row-reverse' : ''
                }`}>
                  {/* Photo Collage Column */}
                  <div className={`lg:col-span-6 relative overflow-hidden rounded-2xl ${
                    !isEven ? 'lg:order-2' : 'lg:order-1'
                  }`}>
                    <div className="aspect-[16/10] overflow-hidden rounded-2xl bg-dark-950">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        loading="lazy"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-950/60 via-transparent to-transparent pointer-events-none" />
                  </div>

                  {/* Text Column */}
                  <div className={`lg:col-span-6 space-y-6 ${
                    !isEven ? 'lg:order-1' : 'lg:order-2'
                  }`}>
                    <div className="space-y-2">
                      <span className="text-[11px] uppercase tracking-[0.3em] text-gold font-medium">
                        Service 0{index + 1}
                      </span>
                      <h2 className="text-3xl sm:text-4xl font-editorial font-light text-sand-50">
                        {service.title}
                      </h2>
                      <p className="text-sm font-editorial italic text-sand-200">
                        "{service.subtitle}"
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-sand-300 font-light leading-relaxed">
                      {service.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {service.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-3 py-1 rounded-full bg-forest-900/40 border border-forest-600/30 text-[10px] uppercase tracking-wider text-sand-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="pt-4 flex flex-wrap items-center gap-4">
                      <button
                        onClick={() => onSelectService(service.id)}
                        className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-medium text-gold hover:text-white transition-colors group/link"
                      >
                        <span>Explore {service.title}</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                      </button>

                      <button
                        onClick={onOpenBooking}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-forest-800/60 hover:bg-forest-700 text-[11px] uppercase tracking-widest text-sand-100 transition-colors border border-forest-600/30"
                      >
                        <Calendar className="w-3 h-3 text-gold" />
                        <span>Book This</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
