import React from 'react';
import { Layers, Scan, RefreshCcw, Flag } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    id: 'additive',
    title: 'Additive Manufacturing',
    description: 'Produzione su misura con tecnologie avanzate. Dai polimeri ad alte prestazioni ai metalli.',
    icon: Layers,
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80' // Industrial manufacturing machine
  },
  {
    id: 'scanning',
    title: 'Scansione 3D',
    description: 'Digitalizzazione ultra precisa per controllo qualità e acquisizione geometrie complesse.',
    icon: Scan,
    image: 'https://images.unsplash.com/photo-1618331835717-801e976710b2?auto=format&fit=crop&w=800&q=80' // Abstract laser grid/scan
  },
  {
    id: 'reverse',
    title: 'Reverse Engineering',
    description: 'Ricostruzione di parti uniche o obsolete partendo dall\'oggetto fisico.',
    icon: RefreshCcw,
    image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=800&q=80' // Technical blueprint close up
  },
  {
    id: 'motorsport',
    title: 'Motorsport Solutions',
    description: 'Soluzioni dedicate per il racing: leggerezza, resistenza e aerodinamica.',
    icon: Flag,
    image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c3d?auto=format&fit=crop&w=800&q=80' // Motocross bike action
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-orange-500 tracking-widest uppercase mb-2">Cosa Facciamo</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white">Eccellenza Tecnologica</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div key={service.id} className="group relative bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-orange-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-900/20">
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80';
                  }}
                />
                <div className="absolute top-4 right-4 bg-orange-600 p-2 rounded-lg z-20 shadow-lg">
                  <service.icon className="text-white w-6 h-6" />
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors">{service.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
              <div className="px-6 pb-6 pt-0">
                <span className="inline-block text-orange-500 text-sm font-semibold opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  Scopri di più &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;