import React from 'react';
import { Mountain, Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { contact } from '../data/mock';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-amber-600 p-2 rounded-lg">
                <Mountain className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Los Capayanes</h3>
                <p className="text-xs text-amber-500">Reserva Natural</p>
              </div>
            </div>
            <p className="text-stone-400 leading-relaxed">
              Ecoturismo en Las Palmas, Catamarca. Conectá con la naturaleza y la historia.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('cabin')} className="hover:text-amber-500 transition-colors">
                  La Cabaña
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('camping')} className="hover:text-amber-500 transition-colors">
                  Camping
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('activities')} className="hover:text-amber-500 transition-colors">
                  Actividades
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('pricing')} className="hover:text-amber-500 transition-colors">
                  Precios
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-amber-500 flex-shrink-0 mt-1" />
                <span className="text-sm">
                  {contact.address}<br />
                  {contact.city}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-amber-500 flex-shrink-0" />
                <a href={`tel:${contact.phone}`} className="hover:text-amber-500 transition-colors text-sm">
                  {contact.phone}
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Newsletter */}
          <div>
            <h4 className="text-white font-bold mb-4">Seguinos</h4>
            <div className="flex gap-3 mb-6">
              <a
                href="#"
                className="bg-stone-800 hover:bg-amber-600 p-3 rounded-lg transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-stone-800 hover:bg-amber-600 p-3 rounded-lg transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={`https://wa.me/${contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-stone-800 hover:bg-green-600 p-3 rounded-lg transition-colors"
                aria-label="WhatsApp"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
            <p className="text-sm text-stone-400">
              Consultá disponibilidad y armá tu próxima aventura en la naturaleza.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-stone-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-stone-400">
              © {currentYear} Los Capayanes. Todos los derechos reservados.
            </p>
            <div className="flex gap-6 text-sm">
              <button className="hover:text-amber-500 transition-colors">
                Privacidad
              </button>
              <button className="hover:text-amber-500 transition-colors">
                Términos
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
