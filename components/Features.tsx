import React from 'react';
import { MapPin, Globe, ShieldCheck } from 'lucide-react';
import { FeatureItem } from '../types';

const features: FeatureItem[] = [
  {
    id: 'italy',
    title: 'Qualità Made in Italy',
    description: 'Design e produzione curati nei minimi dettagli, secondo la tradizione manifatturiera italiana.',
    icon: MapPin
  },
  {
    id: 'global',
    title: 'Spedizioni Globali',
    description: 'Raggiungiamo i nostri clienti ovunque nel mondo con logistica rapida e sicura.',
    icon: Globe
  },
  {
    id: 'reliability',
    title: 'Affidabilità e Innovazione',
    description: 'Tecnologie all\'avanguardia e supporto costante al servizio del tuo progetto.',
    icon: ShieldCheck
  }
];

const Features: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900 border-y border-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature) => (
            <div key={feature.id} className="flex flex-col items-center text-center p-6 rounded-2xl bg-slate-950/50 border border-slate-800 hover:bg-slate-800/50 transition-colors">
              <div className="w-16 h-16 rounded-2xl bg-slate-800 flex items-center justify-center mb-6 text-orange-500 shadow-lg shadow-orange-500/10">
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed max-w-xs">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;