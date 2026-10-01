import React from 'react';

export default function BrandLogo({ className = '', iconOnly = false, light = false }) {
  return (
    <div className={`inline-flex items-center gap-3 cursor-pointer group select-none ${className}`}>
      {/* Stylized camera aperture / infinity loop logo */}
      <div className="relative flex items-center justify-center w-10 h-10 rounded-full border border-forest-600/40 bg-forest-900/60 p-2 group-hover:border-gold transition-colors duration-300 shadow-sm">
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full text-sand-100 group-hover:text-gold transition-colors"
        >
          {/* Infinity camera aperture shape */}
          <path
            d="M13 15C10.2386 15 8 17.2386 8 20C8 22.7614 10.2386 25 13 25C16.5 25 18.5 20 20 20C21.5 20 23.5 25 27 25C29.7614 25 32 22.7614 32 20C32 17.2386 29.7614 15 27 15C23.5 15 21.5 20 20 20C18.5 20 16.5 15 13 15Z"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Inner lens center dots */}
          <circle cx="14" cy="20" r="2.2" fill="currentColor" />
          <circle cx="26" cy="20" r="2.2" fill="currentColor" />
          <circle cx="20" cy="20" r="1.2" fill="currentColor" />
        </svg>
      </div>

      {!iconOnly && (
        <div className="flex flex-col text-left">
          <span className="font-editorial text-lg tracking-[0.22em] font-medium leading-none text-sand-50 uppercase">
            MEMORIES
          </span>
          <span className="font-sans text-[9px] tracking-[0.35em] text-sand-300 font-light mt-1 uppercase">
            PHOTOGRAPHY
          </span>
        </div>
      )}
    </div>
  );
}
