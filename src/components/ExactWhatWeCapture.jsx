import React from 'react';
import {
  WeddingsIcon,
  EngagementsIcon,
  CelebrationsIcon,
  BabiesFamilyIcon,
  PortraitsIcon
} from './CaptureIcons';

export default function ExactWhatWeCapture({ onSelectCategory }) {
  const items = [
    { id: 'weddings', label: 'Weddings', icon: WeddingsIcon },
    { id: 'engagements', label: 'Engagements', icon: EngagementsIcon },
    { id: 'celebrations', label: 'Celebrations', icon: CelebrationsIcon },
    { id: 'babies', label: 'Babies & Family', icon: BabiesFamilyIcon },
    { id: 'portraits', label: 'Portraits', icon: PortraitsIcon },
  ];

  return (
    <section className="w-full bg-[#0c0f0d] text-sand-50 py-16 sm:py-20 px-6 sm:px-10 lg:px-14 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto">
        {/* Left Aligned Heading matching reference image */}
        <div className="text-left mb-12 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl font-editorial font-light text-sand-50 tracking-tight">
            What We Capture
          </h2>
        </div>

        {/* 5 Columns with delicate vertical divider borders matching reference image */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x divide-white/10 border-t border-b border-white/10 py-4 sm:py-6">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => onSelectCategory(item.id)}
                className="group flex flex-col items-center justify-center py-6 sm:py-8 px-4 hover:bg-white/[0.02] transition-colors"
              >
                {/* Custom Line-Art Icon matching exact illustration in image */}
                <div className="w-12 h-12 flex items-center justify-center text-sand-200/90 group-hover:text-gold transition-colors duration-300 mb-3.5 group-hover:scale-105 transform">
                  <Icon className="w-7 h-7 sm:w-8 sm:h-8" />
                </div>

                {/* Category Label */}
                <span className="font-sans text-[13px] sm:text-[14px] text-sand-200/90 group-hover:text-white font-light tracking-wide transition-colors">
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
