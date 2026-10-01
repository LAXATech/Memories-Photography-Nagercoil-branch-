import React from 'react';

export default function ExactBrandLogo({ className = '' }) {
  return (
    <div className={`flex flex-col items-center cursor-pointer select-none group ${className}`}>
      {/* Camera outline with infinity knot inside matching the reference image */}
      <div className="relative w-12 h-10 flex items-center justify-center">
        <svg
          viewBox="0 0 48 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full text-sand-100/90 group-hover:text-gold transition-colors"
        >
          {/* Camera top flash bump */}
          <path
            d="M17 6L19 3H29L31 6"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Camera outer body */}
          <rect
            x="4"
            y="6"
            width="40"
            height="29"
            rx="5"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          {/* Infinity loop / aperture knot inside the camera */}
          <path
            d="M17 20.5C14.5 17.5 11 17.5 9.5 20.5C8 23.5 11.5 26.5 15.5 23.5L24 17.5L32.5 23.5C36.5 26.5 40 23.5 38.5 20.5C37 17.5 33.5 17.5 31 20.5L24 25.5L17 20.5Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Subtle center lens dot */}
          <circle cx="24" cy="20.5" r="1.5" fill="currentColor" />
        </svg>
      </div>

      {/* Stacked Brand Name underneath matching image */}
      <div className="flex flex-col items-center mt-1">
        <span className="font-editorial text-[11px] tracking-[0.28em] text-sand-100 uppercase font-medium leading-tight">
          MEMORIES
        </span>
        <span className="font-sans text-[7px] tracking-[0.38em] text-sand-300 uppercase font-light leading-none mt-0.5">
          PHOTOGRAPHY
        </span>
      </div>
    </div>
  );
}
