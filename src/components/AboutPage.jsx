import React from 'react';
import { Camera, Award, Users, HeartHandshake, Film } from 'lucide-react';
import { BRAND } from '../data/photographyData';

export default function AboutPage({ onOpenBooking }) {
  const stats = [
    { label: 'Years of Experience', value: '6+', icon: Award },
    { label: 'Happy Families', value: '100+', icon: Users },
    { label: 'Moments Captured', value: '1000+', icon: Camera },
  ];

  return (
    <div className="py-20 bg-dark-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header from Frame 07 */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-semibold">
            Our Philosophy
          </span>
          <h1 className="text-4xl sm:text-6xl font-editorial font-light text-sand-50 mt-1">
            We turn moments <br />
            <span className="italic font-normal text-gold-light">into memories.</span>
          </h1>
          <p className="text-sm sm:text-base text-sand-200 font-light mt-6 leading-relaxed max-w-2xl mx-auto">
            Memories Photography is a photography and filmmaking team dedicated to preserving the emotions, people, and little moments that make every celebration unique. Rooted in Nagercoil and traveling worldwide, we honor timeless South Indian heritage through modern, soul-stirring frames.
          </p>
        </div>

        {/* Meet the Team / Founder Spotlight matching Frame 07 */}
        <div className="rounded-3xl bg-dark-900/60 border border-white/10 p-8 sm:p-12 mb-16 overflow-hidden">
          <div className="text-center sm:text-left mb-8">
            <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-medium">
              Meet The Team
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Founder Description */}
            <div className="md:col-span-7 space-y-4">
              <div>
                <h2 className="text-3xl sm:text-4xl font-editorial font-light text-sand-50">
                  {BRAND.founder.name}
                </h2>
                <p className="text-xs uppercase tracking-[0.2em] text-gold font-medium mt-1">
                  {BRAND.founder.role}
                </p>
              </div>

              <p className="text-sm sm:text-base text-sand-200 font-editorial italic pt-2">
                "{BRAND.founder.bio}"
              </p>

              <p className="text-xs sm:text-sm text-sand-300 font-light leading-relaxed">
                Starting his journey with candid street and portrait photography in the serene landscapes of Kanyakumari district, Annadurai founded Memories Photography to give weddings the reverence, intimacy, and unhurried visual poetry they deserve.
              </p>

              <div className="pt-4 flex items-center gap-6">
                <div className="flex items-center gap-2 text-xs text-sand-200 font-light">
                  <Film className="w-4 h-4 text-gold" />
                  <span>Cinematic Documentarian</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-sand-200 font-light">
                  <HeartHandshake className="w-4 h-4 text-gold" />
                  <span>Family-First Approach</span>
                </div>
              </div>
            </div>

            {/* Founder Photo */}
            <div className="md:col-span-5 flex justify-center">
              <div className="relative w-64 sm:w-72 aspect-[4/5] rounded-2xl overflow-hidden border-2 border-forest-600/40 shadow-2xl bg-dark-950">
                <img
                  src={BRAND.founder.image}
                  alt={BRAND.founder.name}
                  className="w-full h-full object-cover filter contrast-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <span className="text-[10px] uppercase tracking-widest text-gold bg-dark-950/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                    Lead Artist • Nagercoil
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Row matching Frame 07 */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          {stats.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="flex flex-col items-center justify-center p-8 rounded-2xl bg-dark-900/40 border border-white/5 text-center"
              >
                <Icon className="w-6 h-6 text-gold mb-3 opacity-80" />
                <span className="text-4xl sm:text-5xl font-editorial font-light text-sand-50">
                  {s.value}
                </span>
                <span className="text-xs uppercase tracking-[0.2em] text-sand-300 font-light mt-2">
                  {s.label}
                </span>
              </div>
            );
          })}
        </div>

        {/* Signature Quote Banner matching Frame 07 */}
        <div className="relative rounded-3xl overflow-hidden aspect-[21/9] sm:aspect-[24/8] min-h-[220px] flex items-center justify-center border border-white/10 shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1600&q=80"
            alt="Emotional Candid Moment"
            className="absolute inset-0 w-full h-full object-cover filter brightness-[0.35]"
          />
          <div className="relative z-10 text-center px-4 max-w-2xl">
            <h3 className="text-2xl sm:text-4xl md:text-5xl font-editorial font-light text-sand-50">
              "It's not just a photo. <br />
              <span className="italic text-gold-light">It's a feeling."</span>
            </h3>
            <p className="text-[10px] uppercase tracking-[0.3em] text-sand-300 mt-4">
              — Memories Photography Ethos
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
