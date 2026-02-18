import React from 'react';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '../data/mock';

export const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-white to-stone-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4">
            Lo Que Dicen Nuestros Visitantes
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            Experiencias reales de quienes disfrutaron de Los Capayanes
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 relative group"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4 bg-amber-600 rounded-full p-3 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Quote className="w-6 h-6 text-white" />
              </div>

              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, index) => (
                  <Star key={index} className="w-5 h-5 fill-amber-500 text-amber-500" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-stone-700 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-4 border-t border-stone-200">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center text-white font-bold shadow-md">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-stone-900">{testimonial.name}</p>
                  <p className="text-sm text-stone-500">{testimonial.location}</p>
                  <p className="text-xs text-stone-400">{testimonial.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-stone-900 mb-4">
              ¿Querés vivir tu propia experiencia?
            </h3>
            <p className="text-stone-600 mb-6">
              Únete a los cientos de visitantes que han descubierto la magia de Los Capayanes
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Reservá tu Estadía
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
