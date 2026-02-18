import React from 'react';
import { Mountain, Footprints, History, Crown, Building2, Map, Waves, Palette, BookOpen } from 'lucide-react';
import { activities } from '../data/mock';

export const ActivitiesSection = () => {
  const iconMap = {
    mountain: <Mountain className="w-6 h-6" />,
    trekking: <Footprints className="w-6 h-6" />,
    history: <History className="w-6 h-6" />,
    peak: <Crown className="w-6 h-6" />,
    ruins: <Building2 className="w-6 h-6" />,
    horse: <Map className="w-6 h-6" />,
    water: <Waves className="w-6 h-6" />,
    craft: <Palette className="w-6 h-6" />,
    culture: <BookOpen className="w-6 h-6" />
  };

  return (
    <section id="activities" className="py-20 bg-stone-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zm20.97 0l9.315 9.314-1.414 1.414L34.828 0h2.83zM22.344 0L13.03 9.314l1.414 1.414L25.172 0h-2.83zM32 0l12.142 12.142-1.414 1.414L30 .828 17.272 13.556 15.858 12.14 28 0zm-8 .828l-12.143 12.143 1.414 1.414L24 3.657 34.828 14.485l1.414-1.414L24 .83zM0 5.373l.828-.83L2.243 5.96 0 8.2V5.374zm60 0L59.172 4.543 57.757 5.96 60 8.2V5.374zM0 11.03l3.657-3.658 1.414 1.415L0 13.857v-2.827zm60 0l-3.657-3.658-1.414 1.415L60 13.857v-2.827zM0 16.686L6.485 10.2l1.415 1.414L0 19.515v-2.83zm60 0l-6.485-6.486-1.415 1.414L60 19.515v-2.83zM0 22.344l9.314-9.315 1.414 1.414L0 25.172v-2.828zm60 0l-9.314-9.315-1.414 1.414L60 25.172v-2.828zM0 28l12.142-12.142 1.414 1.414L0 30v-2zm60 0L47.858 15.858l1.414-1.414L60 28v-2zM0 33.657L13.556 20.1l1.415 1.414L0 36.485v-2.828zm60 0L46.444 20.1l-1.415 1.414L60 36.485v-2.828zM0 39.314L19.8 19.515l1.414 1.414L0 41.9v-2.586zm60 0L40.2 19.515l-1.414 1.414L60 41.9v-2.586zM0 44.97l26.485-26.485 1.414 1.415L0 47.8v-2.83zm60 0L33.515 18.485l-1.414 1.415L60 47.8v-2.83zM0 50.627l33.142-33.142 1.414 1.414L0 53.456v-2.83zm60 0L26.858 17.485l-1.414 1.414L60 53.456v-2.83z" fill="%23ffffff" fill-opacity="1" fill-rule="evenodd"/%3E%3C/svg%3E")',
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Actividades de Ecoturismo
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
          <p className="text-xl text-stone-300 max-w-3xl mx-auto">
            Explorá la Reserva Natural Los Capayanes con guías expertos y descubrí 
            los secretos del monte nativo y la cultura ancestral
          </p>
        </div>

        {/* Activities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="bg-stone-800/50 backdrop-blur-sm hover:bg-stone-800 p-6 rounded-xl border border-stone-700 hover:border-amber-600 transition-all duration-300 group"
            >
              <div className="bg-amber-600 group-hover:bg-amber-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110">
                <div className="text-white">
                  {iconMap[activity.icon]}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-amber-500 transition-colors">
                {activity.title}
              </h3>
              <p className="text-stone-300 leading-relaxed">
                {activity.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Box */}
        <div className="mt-16 bg-gradient-to-r from-amber-600 to-amber-700 p-8 md:p-12 rounded-2xl text-center max-w-4xl mx-auto shadow-2xl">
          <h3 className="text-3xl font-bold mb-4">¿Listo para la Aventura?</h3>
          <p className="text-amber-50 text-lg mb-8">
            Todas las actividades incluyen guía experto y están diseñadas para conectarte 
            con la naturaleza y la historia de Los Capayanes
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white hover:bg-stone-100 text-amber-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Consultá Disponibilidad
          </button>
        </div>
      </div>
    </section>
  );
};
