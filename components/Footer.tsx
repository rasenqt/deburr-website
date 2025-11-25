import React from 'react';
import { Instagram, ShoppingBag } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h2 className="text-2xl font-black text-white tracking-tight mb-2">Deburr.</h2>
            <p className="text-slate-500 text-sm">Design, Build, Race and Repeat.</p>
          </div>
          
          <div className="flex gap-6 mb-6 md:mb-0">
            <a 
              href="https://www.instagram.com/deburr.italia/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-slate-400 hover:text-orange-500 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a 
              href="https://www.ebay.it/sch/i.html?_dkr=1&iconV2Request=true&_blrs=recall_filtering&_ssn=deburr_it&_oac=1" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-slate-400 hover:text-orange-500 transition-colors"
              aria-label="eBay Shop"
              title="eBay Shop"
            >
              <ShoppingBag className="w-6 h-6" />
            </a>
          </div>

          <div className="text-slate-600 text-sm">
            &copy; {new Date().getFullYear()} Deburr S.r.l. Tutti i diritti riservati.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;