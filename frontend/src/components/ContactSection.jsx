import React, { useState } from 'react';
import { Send, User, Mail, Phone, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react';
import { contact } from '../data/mock';
import { toast } from 'sonner';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    service: 'cabaña'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Enviar datos al backend
      const response = await axios.post(`${BACKEND_URL}/api/contact/`, formData);
      
      if (response.status === 201) {
        setIsSubmitted(true);
        toast.success('¡Mensaje enviado con éxito! Te contactaremos pronto.');
        
        // Reset form after 3 seconds
        setTimeout(() => {
          setFormData({ name: '', email: '', phone: '', message: '', service: 'cabaña' });
          setIsSubmitted(false);
        }, 3000);
      }
    } catch (error) {
      console.error('Error al enviar consulta:', error);
      toast.error('Error al enviar el mensaje. Por favor, intenta de nuevo o contacta por WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent('Hola! Me gustaría consultar sobre la disponibilidad en Los Capayanes.');
    window.open(`https://wa.me/${contact.whatsapp}?text=${message}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-stone-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4">
            Contacto
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            Estamos listos para ayudarte a planificar tu próxima aventura
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-stone-900 mb-6">Envianos tu Consulta</h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-stone-700 font-medium mb-2">
                  Nombre Completo
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-stone-400" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-3 border-2 border-stone-200 rounded-lg focus:border-amber-500 focus:outline-none transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-stone-700 font-medium mb-2">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-stone-400" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-3 border-2 border-stone-200 rounded-lg focus:border-amber-500 focus:outline-none transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-stone-700 font-medium mb-2">
                  Teléfono
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-stone-400" />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-3 border-2 border-stone-200 rounded-lg focus:border-amber-500 focus:outline-none transition-colors"
                    placeholder="+54 9 ..."
                  />
                </div>
              </div>

              {/* Service Selection */}
              <div>
                <label htmlFor="service" className="block text-stone-700 font-medium mb-2">
                  ¿Qué te interesa?
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-stone-200 rounded-lg focus:border-amber-500 focus:outline-none transition-colors bg-white"
                >
                  <option value="cabaña">Cabaña</option>
                  <option value="camping">Camping</option>
                  <option value="ambos">Cabaña y Camping</option>
                  <option value="actividades">Solo Actividades</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-stone-700 font-medium mb-2">
                  Mensaje
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-stone-400" />
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full pl-12 pr-4 py-3 border-2 border-stone-200 rounded-lg focus:border-amber-500 focus:outline-none transition-colors resize-none"
                    placeholder="Contanos sobre tu visita (fechas, cantidad de personas, etc.)"
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className={`w-full py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2 ${
                  isSubmitted
                    ? 'bg-green-600 text-white'
                    : 'bg-amber-600 hover:bg-amber-700 text-white shadow-md hover:shadow-lg hover:scale-105'
                }`}
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    Mensaje Enviado
                  </>
                ) : isSubmitting ? (
                  'Enviando...'
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Enviar Consulta
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-8">
            {/* Contact Info Cards */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-stone-900 mb-6">Información de Contacto</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-amber-100 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-stone-900">Teléfono / WhatsApp</p>
                    <a href={`tel:${contact.phone}`} className="text-amber-600 hover:text-amber-700">
                      {contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-amber-100 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-stone-900">Dirección</p>
                    <p className="text-stone-600">{contact.address}</p>
                    <p className="text-stone-600">{contact.city}</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp Button */}
              <button
                onClick={openWhatsApp}
                className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white py-4 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Contactar por WhatsApp
              </button>
            </div>

            {/* Map */}
            <div className="bg-white rounded-2xl p-4 shadow-lg">
              <h3 className="text-xl font-bold text-stone-900 mb-4">Ubicación</h3>
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56789.123456789!2d-65.6059!3d-28.3447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDIwJzQwLjkiUyA2NcKwMzYnMjEuMiJX!5e0!3m2!1ses!2sar!4v1234567890123"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Ubicación Los Capayanes"
                ></iframe>
              </div>
              <a
                href={contact.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-4 text-center text-amber-600 hover:text-amber-700 font-medium"
              >
                Ver en Google Maps →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
