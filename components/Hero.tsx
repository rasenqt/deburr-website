import React from 'react';
import { ChevronRight, ShoppingBag } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-slate-950 overflow-hidden pt-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/1920/1080?grayscale&blur=2"
          alt="Engineering Background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
            <span className="text-sm font-semibold tracking-wide">MADE IN ITALY ENGINEERING</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight mb-6">
            DESIGN <br />
            BUILD <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">RACE</span> <br />
            AND REPEAT
          </h1>
          
          <p className="text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
            Deburr è innovazione nella manifattura additiva. Accompagniamo team e aziende dalla progettazione alla pista con scansione 3D ultra precisa e reverse engineering.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="group flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105">
              Inizia il tuo Progetto
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="https://www.ebay.it/sch/i.html?_dkr=1&iconV2Request=true&_blrs=recall_filtering&_ssn=deburr_it&_oac=1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-transparent border border-slate-600 hover:border-white text-white px-8 py-4 rounded-full font-bold transition-all hover:bg-white/5"
            >
              Visita lo Shop
              <ShoppingBag className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Decorative Strip */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-red-600 to-slate-900"></div>
    </div>
  );
};

export default Hero;