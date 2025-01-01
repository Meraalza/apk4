import React from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { ImageSlider } from './components/ImageSlider';
import { HowToSection } from './components/HowToSection';
import { TextSection } from './components/TextSection';
import { DownloadSection } from './components/DownloadSection';
import { Testimonials } from './components/Testimonials';
import { FloatingIcons } from './components/FloatingIcons';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <FloatingIcons />
      <Header />
      <main>
        <Hero />
        <ImageSlider />
        <Features />
        <HowToSection />
        <TextSection />
        <DownloadSection />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;