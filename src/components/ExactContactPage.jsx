import React, { useState } from 'react';
import ExactBrandLogo from './ExactBrandLogo';
import ExactHeader from './ExactHeader';
import { Calendar, Check } from 'lucide-react';
import { BRAND } from '../data/photographyData';

export default function ExactContactPage({
  onNavClick,
  onOpenBooking,
  activeTab = 'contact'
}) {
  const [selectedEventType, setSelectedEventType] = useState('Wedding');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    location: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const navLinks = [
    { id: 'stories', label: 'Stories' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About' },
    { id: 'packages', label: 'Packages' },
    { id: 'contact', label: 'Contact' },
  ];

  const eventOptionsCol1 = ['Wedding', 'Engagement', 'Portrait'];
  const eventOptionsCol2 = ['Birthday', 'Baby Shower', 'Other'];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Memories Photography! I would like to plan a ${selectedEventType} in ${formData.location || 'Nagercoil / Tamil Nadu'}. My name is ${formData.name || 'a client'}.`
  );

  return (
    <div className="w-full bg-[#FAF8F3] min-h-screen text-[#1c1d1a]">
      {/* 1. TOP HEADER (DARK SECTION WITH MOBILE DRAWER) */}
      <div className="bg-[#0b0e0c]">
        <ExactHeader
          activeTab="contact"
          onNavClick={onNavClick}
          onOpenBooking={onOpenBooking}
        />
      </div>

      {/* 2. MAIN ENQUIRY & CONTACT SECTION (WARM CREAM BACKGROUND MATCHING REFERENCE IMAGE) */}
      <section className="w-full bg-[#FAF8F3] py-14 sm:py-16 px-6 sm:px-10 lg:px-14">
        <div className="max-w-[1000px] mx-auto">
          {/* Centered Heading & Subtitle */}
          <div className="text-center max-w-xl mx-auto mb-12 sm:mb-14 space-y-2">
            <h1 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-light text-[#1a1c19] tracking-tight">
              Let's Plan Your Story
            </h1>
            <p className="text-[13px] sm:text-[14px] font-sans text-[#62655d] font-light">
              Tell us about your event and we'll get back to you soon.
            </p>
          </div>

          {/* Main 2-Column Split: Form on Left, Camera Gear & WhatsApp on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* LEFT COLUMN: THE FORM */}
            <div className="lg:col-span-7">
              {submitted ? (
                <div className="bg-white rounded-2xl border border-[#e2dcd0] p-8 sm:p-10 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-[#1c221e] text-gold flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h3 className="font-editorial text-2xl text-[#1a1c19]">
                    Thank you, {formData.name || 'Friend'}!
                  </h3>
                  <p className="text-xs sm:text-sm text-[#62655d] font-light max-w-md mx-auto leading-relaxed">
                    We have received your enquiry for {selectedEventType}. Our studio in Nagercoil will review your dates and connect with you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2 rounded-lg bg-[#141715] text-white text-xs font-sans"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 text-left">
                  {/* Name Field */}
                  <div className="space-y-1.5">
                    <label className="block text-[12px] font-sans text-[#333530] font-normal">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-[#FAF8F3] border border-[#d6cfc1] text-[#1c1d1a] placeholder-[#8a8880] focus:outline-none focus:border-[#1c1d1a] transition-colors text-[13px] font-sans"
                    />
                  </div>

                  {/* Phone Number Field */}
                  <div className="space-y-1.5">
                    <label className="block text-[12px] font-sans text-[#333530] font-normal">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-[#FAF8F3] border border-[#d6cfc1] text-[#1c1d1a] placeholder-[#8a8880] focus:outline-none focus:border-[#1c1d1a] transition-colors text-[13px] font-sans"
                    />
                  </div>

                  {/* Email Field */}
                  <div className="space-y-1.5">
                    <label className="block text-[12px] font-sans text-[#333530] font-normal">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-[#FAF8F3] border border-[#d6cfc1] text-[#1c1d1a] placeholder-[#8a8880] focus:outline-none focus:border-[#1c1d1a] transition-colors text-[13px] font-sans"
                    />
                  </div>

                  {/* What are you looking for? (Radio grid matching reference image) */}
                  <div className="space-y-2 pt-1">
                    <label className="block text-[12px] font-sans text-[#333530] font-normal">
                      What are you looking for?
                    </label>
                    <div className="grid grid-cols-2 gap-y-2.5 gap-x-6">
                      {/* Column 1 */}
                      <div className="space-y-2.5">
                        {eventOptionsCol1.map((opt) => {
                          const isSelected = selectedEventType === opt;
                          return (
                            <label
                              key={opt}
                              onClick={() => setSelectedEventType(opt)}
                              className="flex items-center gap-2.5 cursor-pointer text-[12px] sm:text-[13px] font-sans text-[#4a4c45] select-none"
                            >
                              <span
                                className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center transition-colors ${
                                  isSelected
                                    ? 'border-[#1c1d1a] bg-white'
                                    : 'border-[#949188] bg-transparent'
                                }`}
                              >
                                {isSelected && (
                                  <span className="w-2 h-2 rounded-full bg-[#1c1d1a]" />
                                )}
                              </span>
                              <span>{opt}</span>
                            </label>
                          );
                        })}
                      </div>

                      {/* Column 2 */}
                      <div className="space-y-2.5">
                        {eventOptionsCol2.map((opt) => {
                          const isSelected = selectedEventType === opt;
                          return (
                            <label
                              key={opt}
                              onClick={() => setSelectedEventType(opt)}
                              className="flex items-center gap-2.5 cursor-pointer text-[12px] sm:text-[13px] font-sans text-[#4a4c45] select-none"
                            >
                              <span
                                className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center transition-colors ${
                                  isSelected
                                    ? 'border-[#1c1d1a] bg-white'
                                    : 'border-[#949188] bg-transparent'
                                }`}
                              >
                                {isSelected && (
                                  <span className="w-2 h-2 rounded-full bg-[#1c1d1a]" />
                                )}
                              </span>
                              <span>{opt}</span>
                            </label>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Event Date Field */}
                  <div className="space-y-1.5 pt-1">
                    <label className="block text-[12px] font-sans text-[#333530] font-normal">
                      Event Date <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Select date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full px-4 py-3 pr-10 rounded-lg bg-[#FAF8F3] border border-[#d6cfc1] text-[#1c1d1a] placeholder-[#8a8880] focus:outline-none focus:border-[#1c1d1a] transition-colors text-[13px] font-sans"
                      />
                      <div className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#736f66] pointer-events-none">
                        <Calendar className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* Location Field */}
                  <div className="space-y-1.5">
                    <label className="block text-[12px] font-sans text-[#333530] font-normal">
                      Location <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your location"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-[#FAF8F3] border border-[#d6cfc1] text-[#1c1d1a] placeholder-[#8a8880] focus:outline-none focus:border-[#1c1d1a] transition-colors text-[13px] font-sans"
                    />
                  </div>

                  {/* Tell us about your event */}
                  <div className="space-y-1.5">
                    <label className="block text-[12px] font-sans text-[#333530] font-normal">
                      Tell us about your event
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Write your message here..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-[#FAF8F3] border border-[#d6cfc1] text-[#1c1d1a] placeholder-[#8a8880] focus:outline-none focus:border-[#1c1d1a] transition-colors text-[13px] font-sans resize-none"
                    />
                  </div>

                  {/* Submit Button matching reference image */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-lg bg-[#141715] hover:bg-black text-white text-[13px] font-sans font-medium tracking-wide transition-all duration-200 shadow-sm"
                    >
                      Send Enquiry
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* RIGHT COLUMN: CAMERA GEAR VISUAL & WHATSAPP CARD */}
            <div className="lg:col-span-5 flex flex-col rounded-2xl overflow-hidden border border-[#ded8cb] bg-[#FAF8F3] shadow-sm">
              {/* Overhead Camera & Prime Lenses Visual */}
              <div className="w-full aspect-[4/3] overflow-hidden bg-[#121413]">
                <img
                  src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=85"
                  alt="Professional Cinema Camera Gear"
                  className="w-full h-full object-cover filter contrast-[1.08] brightness-[0.92]"
                  loading="lazy"
                />
              </div>

              {/* WhatsApp Callout Card matching reference image */}
              <div className="p-8 sm:p-10 text-center flex flex-col items-center justify-center space-y-4">
                <span className="text-[14px] font-sans text-[#2f312b] font-normal">
                  Or simply WhatsApp us
                </span>

                {/* WhatsApp Green Icon */}
                <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-sm">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zM17.5 14.39c-.23.65-1.34 1.26-1.85 1.33-.49.07-1.12.1-3.23-.78-2.69-1.12-4.41-3.87-4.54-4.05-.14-.18-1.09-1.45-1.09-2.77 0-1.31.69-1.96.93-2.22.25-.26.54-.33.72-.33.18 0 .37 0 .53.01.17.01.4.07.61.57.23.54.78 1.91.85 2.05.07.14.12.3.02.48-.09.19-.14.3-.28.46-.14.16-.3.35-.43.47-.14.14-.29.3-.12.59.16.29.73 1.21 1.57 1.96 1.08.96 1.99 1.26 2.28 1.4.29.14.46.12.63-.07.17-.19.74-.86.94-1.16.2-.29.4-.25.68-.14.28.11 1.77.83 2.07.98.3.15.5.23.57.36.07.13.07.76-.16 1.41z"/>
                  </svg>
                </div>

                {/* Chat on WhatsApp Button matching reference image */}
                <a
                  href={`https://wa.me/${BRAND.contact.whatsapp}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center py-2.5 px-7 rounded-full bg-[#277949] hover:bg-[#20683e] text-white text-[13px] font-sans font-normal tracking-wide transition-all duration-200 shadow-sm"
                >
                  Chat on WhatsApp
                </a>

                {/* Reassurance text */}
                <p className="text-[11px] font-sans text-[#787a73] font-light pt-1">
                  We'll respond as soon as possible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
