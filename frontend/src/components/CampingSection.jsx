import React from 'react';
import { Tent, Flame as FlameIcon, Lightbulb, Trees, Palmtree } from 'lucide-react';
import { campingInfo } from '../data/mock';

export const CampingSection = () => {
  const serviceIcons = {
    'Sector de asadores con luz': <FlameIcon className="w-6 h-6" />,
    'Hamacas': <Palmtree className="w-6 h-6" />,
    'Acceso al monte': <Trees className="w-6 h-6" />,
    'Campo verde natural': <Trees className="w-6 h-6" />
  };

  return (
    <section id="camping" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center bg-green-100 p-3 rounded-full mb-4">
            <Tent className="w-8 h-8 text-green-700" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4">
            Camping
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            {campingInfo.description}
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Image 1 */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl group">
              <img
                src="https://customer-assets.emergentagent.com/job_capayanes-camping/artifacts/x6xmnb07_Screenshot_2026-02-18-11-27-31-702_com.google.android.apps.maps.jpg"
                alt="Campo verde del camping"
                className="w-full h-[350px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold">Campo Verde</h3>
                <p className="text-stone-200">Vegetación autóctona</p>
              </div>
            </div>

            {/* Image 2 */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl group">
              <img
                src="https://images.unsplash.com/photo-1511884642898-4c92249e20b6"
                alt="Vista aérea del camping"
                className="w-full h-[350px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold">Naturaleza Pura</h3>
                <p className="text-stone-200">Salida directa al monte</p>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {campingInfo.services.map((service, index) => (
              <div
                key={index}
                className="bg-stone-50 hover:bg-green-50 p-6 rounded-xl border-2 border-stone-200 hover:border-green-500 transition-all duration-300 group"
              >
                <div className="bg-white group-hover:bg-green-600 w-14 h-14 rounded-lg flex items-center justify-center mb-4 transition-colors duration-300 shadow-md">
                  <div className="text-green-600 group-hover:text-white transition-colors">
                    {serviceIcons[service] || <Lightbulb className="w-6 h-6" />}
                  </div>
                </div>
                <h4 className="font-semibold text-stone-900 text-lg">{service}</h4>
              </div>
            ))}
          </div>

          {/* Info Box */}
          <div className="mt-12 bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-200">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="bg-white p-4 rounded-full shadow-lg">
                <Tent className="w-12 h-12 text-green-600" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold text-stone-900 mb-2">Experiencia al Aire Libre</h3>
                <p className="text-stone-700">
                  Conectá con la naturaleza en nuestro camping equipado, rodeado de monte nativo 
                  y con todas las comodidades para una estadía inolvidable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
