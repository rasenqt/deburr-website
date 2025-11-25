import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import ShopPreview from './components/ShopPreview';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-50 selection:bg-orange-500 selection:text-white">
      <Navbar />
      <Hero />
      <Services />
      <ShopPreview />
      <Features />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;