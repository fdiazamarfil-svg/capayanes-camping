import React from 'react';
import { ChevronDown, MapPin } from 'lucide-react';
import { heroImages } from '../data/mock';

export const Hero = () => {
  const scrollToNext = () => {
    document.getElementById('cabin')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImages.main}
          alt="Reserva Natural Los Capayanes"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/70 via-stone-900/50 to-stone-900/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-amber-600/20 backdrop-blur-sm border border-amber-500/30 px-4 py-2 rounded-full mb-6">
            <MapPin className="w-4 h-4 text-amber-500" />
            <span className="text-amber-100 text-sm font-medium">Las Palmas, Catamarca</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Cabaña & Camping
            <span className="block text-amber-500 mt-2">Los Capayanes</span>
          </h1>

          <p className="text-xl md:text-2xl text-stone-200 mb-8 leading-relaxed">
            Ecoturismo en la Reserva Natural
          </p>

          <p className="text-lg text-stone-300 mb-12 max-w-2xl mx-auto">
            Disfrutá de una experiencia única en medio del monte nativo, entre vegetación autóctona 
            y yacimientos arqueológicos de incalculable valor histórico.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Reservar Ahora
            </button>
            <button
              onClick={() => document.getElementById('cabin')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              Conocer Más
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce hover:text-amber-500 transition-colors"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
};
