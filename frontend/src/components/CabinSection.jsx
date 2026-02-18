import React from 'react';
import { Users, Bed, Wifi, Flame, Wind, Droplet, Home } from 'lucide-react';
import { cabinInfo } from '../data/mock';

export const CabinSection = () => {
  const featureIcons = {
    wifi: <Wifi className="w-5 h-5" />,
    agua: <Droplet className="w-5 h-5" />,
    ventilador: <Wind className="w-5 h-5" />,
    calefaccion: <Flame className="w-5 h-5" />
  };

  return (
    <section id="cabin" className="py-20 bg-stone-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4">
            La Cabaña
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            {cabinInfo.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1763743259620-d63b1aa32f2e"
                alt="Cabaña Los Capayanes"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/50 to-transparent"></div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-amber-600 text-white p-6 rounded-2xl shadow-xl">
              <div className="flex items-center gap-3">
                <Users className="w-8 h-8" />
                <div>
                  <p className="text-sm opacity-90">Capacidad</p>
                  <p className="text-2xl font-bold">{cabinInfo.capacity} Personas</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-stone-900 mb-6">Características</h3>
              
              {/* Key Stats */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-stone-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Bed className="w-5 h-5 text-amber-600" />
                    <span className="font-semibold text-stone-900">Habitaciones</span>
                  </div>
                  <p className="text-2xl font-bold text-amber-600">{cabinInfo.rooms}</p>
                  <p className="text-sm text-stone-600">2-3 personas c/u</p>
                </div>
                <div className="bg-stone-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Home className="w-5 h-5 text-amber-600" />
                    <span className="font-semibold text-stone-900">Estilo</span>
                  </div>
                  <p className="text-lg font-bold text-amber-600">Rústico</p>
                  <p className="text-sm text-stone-600">Troncos naturales</p>
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-3">
                {cabinInfo.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3 group">
                    <div className="bg-amber-100 p-2 rounded-lg group-hover:bg-amber-600 transition-colors duration-300">
                      <div className="w-2 h-2 bg-amber-600 rounded-full group-hover:bg-white"></div>
                    </div>
                    <p className="text-stone-700 flex-1 pt-1">{feature}</p>
                  </div>
                ))}
              </div>

              {/* Location Info */}
              <div className="mt-8 p-4 bg-amber-50 border-l-4 border-amber-600 rounded-r-lg">
                <p className="text-stone-700 font-medium">{cabinInfo.location}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
