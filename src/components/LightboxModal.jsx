import React from 'react';
import { X, ZoomIn, Download, Share2 } from 'lucide-react';

export default function LightboxModal({ imageSrc, caption = '', onClose }) {
  if (!imageSrc) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-dark-950/95 backdrop-blur-2xl p-4 sm:p-8 animate-fade-in"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-5xl max-h-[90vh] flex flex-col items-center"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 p-2 text-sand-300 hover:text-white rounded-full bg-dark-900 border border-white/10 transition-colors"
          aria-label="Close Preview"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Large Image */}
        <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black">
          <img
            src={imageSrc}
            alt={caption || 'Memories Photography'}
            className="max-h-[80vh] w-auto object-contain"
          />
        </div>

        {/* Caption */}
        {caption && (
          <div className="mt-4 px-4 py-2 rounded-full bg-dark-900/80 backdrop-blur-md border border-white/10 text-xs text-sand-200 text-center font-light">
            {caption}
          </div>
        )}
      </div>
    </div>
  );
}
