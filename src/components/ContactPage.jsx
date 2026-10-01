import React from 'react';
import { Phone, MessageCircle, MapPin, Mail, Clock, ArrowRight } from 'lucide-react';
import InstagramIcon from './InstagramIcon';
import { BRAND } from '../data/photographyData';
import BrandLogo from './BrandLogo';

export default function ContactPage({ onOpenBooking }) {
  return (
    <div className="py-20 bg-dark-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section matching Frame 10 */}
        <div className="relative rounded-3xl overflow-hidden bg-dark-900 border border-white/10 shadow-2xl mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center min-h-[440px]">
            {/* Left Text */}
            <div className="lg:col-span-7 p-8 sm:p-14 z-10 space-y-6">
              <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-semibold">
                Get In Touch
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-editorial font-light text-sand-50 leading-tight">
                Your day will pass. <br />
                <span className="italic text-gold-light">Your memories shouldn't.</span>
              </h1>
              <p className="text-xs sm:text-sm text-sand-300 font-light max-w-lg leading-relaxed">
                Let's create something you'll want to look at 20 years from now. Whether an intimate sunset wedding or a grand celebration across Tamil Nadu, we are ready to tell your story.
              </p>
              <div className="pt-2">
                <button
                  onClick={onOpenBooking}
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-forest-700 hover:bg-forest-600 text-white text-xs uppercase tracking-[0.2em] font-medium transition-all shadow-lg"
                >
                  <span>Check Availability</span>
                  <ArrowRight className="w-3.5 h-3.5 text-gold" />
                </button>
              </div>
            </div>

            {/* Right Sunset Couple Silhouette Visual matching Frame 10 */}
            <div className="lg:col-span-5 relative h-72 lg:h-full overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80"
                alt="Couple Silhouette at Sunset"
                className="w-full h-full object-cover filter brightness-[0.7] contrast-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-dark-900 via-transparent to-transparent" />
            </div>
          </div>
        </div>

        {/* 3 Contact Channels Cards matching Frame 10 */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          {/* WhatsApp */}
          <a
            href={`https://wa.me/${BRAND.contact.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 rounded-2xl bg-dark-900/60 border border-white/5 hover:border-gold/40 hover:bg-dark-900 transition-all duration-300 flex items-center gap-4"
          >
            <div className="w-12 h-12 rounded-xl bg-forest-900/60 border border-forest-600/40 flex items-center justify-center text-sand-100 group-hover:text-gold group-hover:scale-110 transition-transform">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-widest text-sand-300 font-medium block">
                WhatsApp
              </span>
              <span className="text-sm font-medium text-sand-100 group-hover:text-gold transition-colors">
                {BRAND.contact.whatsappDisplay}
              </span>
            </div>
          </a>

          {/* Call */}
          <a
            href={`tel:${BRAND.contact.phone}`}
            className="group p-6 rounded-2xl bg-dark-900/60 border border-white/5 hover:border-gold/40 hover:bg-dark-900 transition-all duration-300 flex items-center gap-4"
          >
            <div className="w-12 h-12 rounded-xl bg-forest-900/60 border border-forest-600/40 flex items-center justify-center text-sand-100 group-hover:text-gold group-hover:scale-110 transition-transform">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-widest text-sand-300 font-medium block">
                Call Studio
              </span>
              <span className="text-sm font-medium text-sand-100 group-hover:text-gold transition-colors">
                {BRAND.contact.phoneDisplay}
              </span>
            </div>
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 rounded-2xl bg-dark-900/60 border border-white/5 hover:border-gold/40 hover:bg-dark-900 transition-all duration-300 flex items-center gap-4"
          >
            <div className="w-12 h-12 rounded-xl bg-forest-900/60 border border-forest-600/40 flex items-center justify-center text-sand-100 group-hover:text-gold group-hover:scale-110 transition-transform">
              <InstagramIcon className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-widest text-sand-300 font-medium block">
                Instagram
              </span>
              <span className="text-sm font-medium text-sand-100 group-hover:text-gold transition-colors">
                {BRAND.contact.instagram}
              </span>
            </div>
          </a>
        </div>

        {/* Branch Network Details matching Frame 10 bottom card */}
        <div className="rounded-3xl bg-dark-900/80 border border-white/10 p-8 sm:p-12 overflow-hidden relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <BrandLogo />
              <p className="text-xs text-sand-300 font-light leading-relaxed max-w-sm">
                Primary studio in Nagercoil serving Kanyakumari, Tirunelveli, Madurai, and client bases throughout Chennai and Coimbatore.
              </p>
              <div className="text-[11px] uppercase tracking-[0.25em] text-sand-200 font-medium pt-2">
                CHENNAI • COIMBATORE • TIRUNELVELI • NAGERCOIL
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-dark-950/60 border border-white/5">
                <span className="text-xs uppercase tracking-wider text-gold font-semibold flex items-center gap-1.5 mb-1">
                  <MapPin className="w-3.5 h-3.5" />
                  Nagercoil Studio (HQ)
                </span>
                <p className="text-xs text-sand-300 font-light leading-relaxed">
                  {BRAND.contact.address.nagercoil}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-dark-950/60 border border-white/5">
                <span className="text-xs uppercase tracking-wider text-sand-200 font-semibold flex items-center gap-1.5 mb-1">
                  <MapPin className="w-3.5 h-3.5" />
                  Chennai Branch
                </span>
                <p className="text-xs text-sand-300 font-light leading-relaxed">
                  {BRAND.contact.address.chennai}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-dark-950/60 border border-white/5">
                <span className="text-xs uppercase tracking-wider text-sand-200 font-semibold flex items-center gap-1.5 mb-1">
                  <MapPin className="w-3.5 h-3.5" />
                  Coimbatore Branch
                </span>
                <p className="text-xs text-sand-300 font-light leading-relaxed">
                  {BRAND.contact.address.coimbatore}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-dark-950/60 border border-white/5">
                <span className="text-xs uppercase tracking-wider text-sand-200 font-semibold flex items-center gap-1.5 mb-1">
                  <MapPin className="w-3.5 h-3.5" />
                  Tirunelveli Branch
                </span>
                <p className="text-xs text-sand-300 font-light leading-relaxed">
                  {BRAND.contact.address.tirunelveli}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
