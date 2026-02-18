import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CabinSection } from './components/CabinSection';
import { CampingSection } from './components/CampingSection';
import { ActivitiesSection } from './components/ActivitiesSection';
import { GallerySection } from './components/GallerySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { PricingSection } from './components/PricingSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Toaster } from './components/ui/sonner';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <CabinSection />
        <CampingSection />
        <ActivitiesSection />
        <GallerySection />
        <TestimonialsSection />
        <PricingSection />
        <ContactSection />
      </main>
      <Footer />
      <Toaster position="top-center" />
    </div>
  );
}

export default App;
