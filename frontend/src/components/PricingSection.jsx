import React from 'react';
import { Check, Home, Tent } from 'lucide-react';
import { pricing } from '../data/mock';

export const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4">
            Precios
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            Elegí la opción que mejor se adapte a tu aventura
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Cabin Pricing */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border-2 border-amber-200 hover:border-amber-400 transition-all duration-300 shadow-lg hover:shadow-2xl group">
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center bg-amber-600 p-4 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                <Home className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-stone-900 mb-2">Cabaña</h3>
              <p className="text-stone-600">{pricing.cabin.description}</p>
            </div>

            <div className="text-center mb-8">
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-5xl font-bold text-amber-600">
                  ${pricing.cabin.price.toLocaleString('es-AR')}
                </span>
              </div>
              <p className="text-stone-600 mt-2">{pricing.cabin.unit}</p>
            </div>

            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3">
                <div className="bg-amber-600 rounded-full p-1">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-stone-700">Capacidad hasta 6 personas</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-amber-600 rounded-full p-1">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-stone-700">2 habitaciones privadas</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-amber-600 rounded-full p-1">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-stone-700">Baño privado con agua caliente</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-amber-600 rounded-full p-1">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-stone-700">Hogar a leña</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-amber-600 rounded-full p-1">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-stone-700">WiFi y ventiladores</span>
              </div>
            </div>

            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full bg-amber-600 hover:bg-amber-700 text-white py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
            >
              Reservar Cabaña
            </button>
          </div>

          {/* Camping Pricing */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border-2 border-green-200 hover:border-green-400 transition-all duration-300 shadow-lg hover:shadow-2xl group">
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center bg-green-600 p-4 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                <Tent className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-stone-900 mb-2">Camping</h3>
              <p className="text-stone-600">{pricing.camping.description}</p>
            </div>

            <div className="text-center mb-8">
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-5xl font-bold text-green-600">
                  ${pricing.camping.price.toLocaleString('es-AR')}
                </span>
              </div>
              <p className="text-stone-600 mt-2">{pricing.camping.unit}</p>
            </div>

            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3">
                <div className="bg-green-600 rounded-full p-1">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-stone-700">Parcela en campo verde</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-green-600 rounded-full p-1">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-stone-700">Sector de asadores con luz</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-green-600 rounded-full p-1">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-stone-700">Hamacas</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-green-600 rounded-full p-1">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-stone-700">Acceso directo al monte</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-green-600 rounded-full p-1">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-stone-700">Vegetación autóctona</span>
              </div>
            </div>

            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
            >
              Reservar Camping
            </button>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-stone-600 text-lg">
            ¿Tenés dudas sobre los precios o disponibilidad? 
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-amber-600 hover:text-amber-700 font-semibold ml-2 underline"
            >
              Contactanos
            </button>
          </p>
        </div>
      </div>
    </section>
  );
};
