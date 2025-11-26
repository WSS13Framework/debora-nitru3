import React from 'react';
import { Hero } from './components/Hero';
import { AvatarSection } from './components/AvatarSection';
import { ProductShowcase } from './components/ProductShowcase';
import { About } from './components/About';
import { Features } from './components/Features';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { StickyCTA } from './components/StickyCTA';
import { Newsletter } from './components/Newsletter'; // Importando a nova seção

function App() {
  return (
    <div className="min-h-screen flex flex-col w-full overflow-x-hidden">
      <Hero />
      <ProductShowcase />
      <AvatarSection />
      <Gallery />
      <About />
      <Features />
      <Testimonials />
      <FAQ />
      <CTA />
      <Newsletter /> {/* Adicionado antes do Footer */}
      <Footer />
      <StickyCTA />
    </div>
  );
}

export default App;
