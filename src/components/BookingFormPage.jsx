import React, { useState } from 'react';
import { MessageSquare, Calendar, MapPin, CheckCircle, Send, Phone, MessageCircle, X } from 'lucide-react';
import { BRAND } from '../data/photographyData';

export default function BookingFormPage({ initialPackage = null, onClose = null }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    eventType: initialPackage ? (initialPackage.name || initialPackage) : 'Wedding',
    date: '',
    location: 'Nagercoil',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const eventTypes = [
    'Wedding',
    'Birthday',
    'Engagement',
    'Baby Shower',
    'Portrait',
    'Other'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Memories Photography team! I would like to inquire about date availability for a ${formData.eventType} in ${formData.location}. My name is ${formData.name || 'a client'}.`
  );

  return (
    <div className={`w-full ${onClose ? 'bg-[#0c0f0d] text-sand-50 p-6 sm:p-10 rounded-3xl border border-white/10 shadow-2xl' : 'py-16 sm:py-24 bg-[#0c0f0d] min-h-screen text-sand-50'}`}>
      <div className="max-w-5xl mx-auto">
        {/* Header matching Home Page Luxury Theme */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-[0.25em] text-[#C6A87D]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C6A87D] animate-pulse" />
            <span>Check Date Availability</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-editorial font-light text-white tracking-tight">
            Let's Plan Your Story
          </h1>
          <p className="text-[12px] sm:text-[13px] font-sans text-sand-300 font-light max-w-md mx-auto">
            Tell us about your celebration and we'll confirm date availability within 2 hours.
          </p>
        </div>

        {/* Content Split: Form on Left, WhatsApp & Studio Info on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Booking Form */}
          <div className="lg:col-span-8 rounded-2xl bg-[#141715] border border-white/10 p-6 sm:p-8 shadow-xl">
            {submitted ? (
              <div className="py-10 text-center space-y-4 animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-[#C6A87D]/10 border border-[#C6A87D]/50 text-[#C6A87D] flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-editorial text-white">
                  Enquiry Received with Gratitude!
                </h3>
                <p className="text-xs sm:text-sm text-sand-300 font-light max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="text-white font-medium">{formData.name}</span>. Our team in Nagercoil has received your details for {formData.eventType} on {formData.date || 'your selected date'}. We will reach out shortly.
                </p>
                <div className="pt-4 flex flex-wrap justify-center gap-3">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-lg border border-white/20 text-xs uppercase tracking-wider text-sand-200 hover:text-white hover:border-white transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                  {onClose && (
                    <button
                      onClick={onClose}
                      className="px-6 py-2.5 rounded-lg bg-[#C6A87D] hover:bg-[#d8be96] text-[#0C0F0D] text-xs uppercase tracking-wider font-semibold transition-colors"
                    >
                      Done
                    </button>
                  )}
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 text-left">
                {/* Name */}
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-sand-300 font-medium mb-1.5">
                    Your Full Name <span className="text-[#C6A87D]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Priya Sundaram"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#0c0f0d] border border-white/15 text-sand-100 placeholder-sand-400/40 focus:outline-none focus:border-[#C6A87D] transition-colors text-sm"
                  />
                </div>

                {/* Phone & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-sand-300 font-medium mb-1.5">
                      Phone Number <span className="text-[#C6A87D]">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#0c0f0d] border border-white/15 text-sand-100 placeholder-sand-400/40 focus:outline-none focus:border-[#C6A87D] transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-sand-300 font-medium mb-1.5">
                      Email Address <span className="text-[#C6A87D]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="priya@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#0c0f0d] border border-white/15 text-sand-100 placeholder-sand-400/40 focus:outline-none focus:border-[#C6A87D] transition-colors text-sm"
                    />
                  </div>
                </div>

                {/* Event Type Pills matching Home Page Theme */}
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-sand-300 font-medium mb-2">
                    Event Type <span className="text-[#C6A87D]">*</span>
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {eventTypes.map((type) => {
                      const selected = formData.eventType.toLowerCase() === type.toLowerCase();
                      return (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setFormData({ ...formData, eventType: type })}
                          className={`py-2 px-3 rounded-lg text-xs uppercase tracking-wider font-medium text-center border transition-all ${
                            selected
                              ? 'bg-[#C6A87D] border-[#C6A87D] text-[#0C0F0D] font-semibold shadow-sm'
                              : 'bg-[#0c0f0d] border-white/10 text-sand-300 hover:border-white/30 hover:text-white'
                          }`}
                        >
                          {type}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Event Date & Location */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-sand-300 font-medium mb-1.5">
                      Event Date <span className="text-[#C6A87D]">*</span>
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#0c0f0d] border border-white/15 text-sand-100 focus:outline-none focus:border-[#C6A87D] transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-sand-300 font-medium mb-1.5">
                      Location / Branch
                    </label>
                    <select
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#0c0f0d] border border-white/15 text-sand-100 focus:outline-none focus:border-[#C6A87D] transition-colors text-sm"
                    >
                      <option value="Nagercoil">Nagercoil (Home Studio)</option>
                      <option value="Chennai">Chennai Branch</option>
                      <option value="Coimbatore">Coimbatore Branch</option>
                      <option value="Tirunelveli">Tirunelveli Branch</option>
                      <option value="Destination / Other">Destination / Other Tamil Nadu</option>
                    </select>
                  </div>
                </div>

                {/* Event Notes */}
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-sand-300 font-medium mb-1.5">
                    Celebration Details (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about the venue, guest count, or rituals..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#0c0f0d] border border-white/15 text-sand-100 placeholder-sand-400/40 focus:outline-none focus:border-[#C6A87D] transition-colors text-sm resize-none"
                  />
                </div>

                {/* Submit button matching Home Page Gold Accent */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl bg-[#C6A87D] hover:bg-[#d8be96] text-[#0C0F0D] text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 shadow-md flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span>Verifying Dates...</span>
                  ) : (
                    <>
                      <span>Check Date Availability</span>
                      <Send className="w-3.5 h-3.5 text-[#0C0F0D]" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right Side: Camera gear backdrop + WhatsApp Card matching Home Page Theme */}
          <div className="lg:col-span-4 space-y-5">
            {/* Gear Visual Card */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-white/10 bg-[#141715] shadow-lg group">
              <img
                src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80"
                alt="Cinema Camera and Prime Lenses"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0f0d] via-[#0c0f0d]/40 to-transparent" />
              <div className="absolute bottom-3 left-4 right-4 text-left">
                <span className="text-[10px] uppercase tracking-widest text-[#C6A87D] block font-medium">
                  Gear & Precision
                </span>
                <span className="text-xs text-sand-100 font-light">
                  Dual Sony FX Cinema Bodies & Archival Backups
                </span>
              </div>
            </div>

            {/* Direct WhatsApp Box */}
            <div className="rounded-2xl bg-[#141715] border border-white/10 p-5 sm:p-6 text-center space-y-3.5 shadow-lg">
              <span className="text-[11px] uppercase tracking-wider text-sand-300 font-light block">
                Instant Response
              </span>

              <div className="flex justify-center">
                <a
                  href={`https://wa.me/${BRAND.contact.whatsapp}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-dark-950 font-semibold text-xs uppercase tracking-wider transition-all shadow-md"
                >
                  <MessageCircle className="w-4 h-4 fill-dark-950" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              <div className="pt-2 border-t border-white/10 text-left space-y-1.5">
                <div className="text-[11px] text-sand-300">
                  <span className="text-white font-medium">Direct Line: </span>
                  <a href={`tel:${BRAND.contact.phone}`} className="hover:text-[#C6A87D] transition-colors">
                    {BRAND.contact.phoneDisplay}
                  </a>
                </div>
                <div className="text-[11px] text-sand-300">
                  <span className="text-white font-medium">Branch: </span>
                  <span>Nagercoil (Cape Road)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
