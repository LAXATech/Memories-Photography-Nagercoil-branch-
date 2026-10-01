import React from 'react';
import { BRAND } from '../data/photographyData';
import BrandLogo from './BrandLogo';
import { MessageCircle, Phone, ArrowUp } from 'lucide-react';
import InstagramIcon from './InstagramIcon';

export default function Footer({ onNavClick }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-950 border-t border-white/10 pt-16 pb-12 text-sand-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/5">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <BrandLogo />
            <p className="text-xs font-light text-sand-300/80 max-w-sm leading-relaxed">
              Preserving sacred vows, joyous family laughter, and timeless celebrations with editorial finesse and intimate South Indian warmth.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href={`https://wa.me/${BRAND.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-dark-900 border border-white/10 flex items-center justify-center text-sand-200 hover:text-gold hover:border-gold/40 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-dark-900 border border-white/10 flex items-center justify-center text-sand-200 hover:text-gold hover:border-gold/40 transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={`tel:${BRAND.contact.phone}`}
                className="w-9 h-9 rounded-full bg-dark-900 border border-white/10 flex items-center justify-center text-sand-200 hover:text-gold hover:border-gold/40 transition-colors"
                aria-label="Phone"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-[11px] uppercase tracking-[0.25em] text-gold font-medium block">
              Quick Links
            </span>
            <ul className="space-y-2 text-xs">
              {['Stories', 'Services', 'About', 'Packages', 'Contact'].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => onNavClick(link.toLowerCase())}
                    className="hover:text-gold transition-colors font-light"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-[11px] uppercase tracking-[0.25em] text-gold font-medium block">
              Our Locations
            </span>
            <p className="text-xs text-sand-200 font-light leading-relaxed">
              <strong className="text-gold font-medium">Nagercoil (Flagship)</strong><br />
              Cape Road, Near Vadasery, Nagercoil 629001
            </p>
            <p className="text-xs text-sand-300 font-light leading-relaxed">
              Also serving Chennai • Coimbatore • Tirunelveli & Destination Events Worldwide
            </p>
            <p className="text-xs text-sand-300 font-light pt-1">
              Direct: <span className="text-sand-100">{BRAND.contact.phoneDisplay}</span>
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-light text-sand-300/60">
          <p>© {new Date().getFullYear()} Memories Photography. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-sand-300 hover:text-gold transition-colors ml-2"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
