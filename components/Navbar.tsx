import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800 py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-2xl font-black text-white tracking-tighter">
          Deburr<span className="text-orange-500">.</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-slate-300 hover:text-white font-medium transition-colors">Servizi</a>
          <a 
            href="https://www.ebay.it/sch/i.html?_dkr=1&iconV2Request=true&_blrs=recall_filtering&_ssn=deburr_it&_oac=1" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-300 hover:text-white font-medium transition-colors flex items-center gap-1"
          >
            Shop
          </a>
          <a href="#contact" className="bg-white text-slate-900 px-6 py-2 rounded-full font-bold hover:bg-orange-500 hover:text-white transition-all">
            Contattaci
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-950 border-b border-slate-800 p-6 flex flex-col gap-4 shadow-2xl">
          <a href="#services" className="text-slate-300 hover:text-white text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>Servizi</a>
          <a 
            href="https://www.ebay.it/sch/i.html?_dkr=1&iconV2Request=true&_blrs=recall_filtering&_ssn=deburr_it&_oac=1" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-300 hover:text-white text-lg font-medium flex items-center gap-2" 
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <ShoppingBag size={18} /> Shop
          </a>
          <a href="#contact" className="bg-orange-600 text-white px-6 py-3 rounded-xl font-bold text-center mt-2" onClick={() => setIsMobileMenuOpen(false)}>
            Contattaci
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;