import React from 'react';
import { Star, ExternalLink, Quote } from 'lucide-react';

interface Feedback {
  id: string;
  user: string;
  comment: string;
  date: string;
  item: string;
}

const Testimonials: React.FC = () => {
  // Manual data instead of scraping to ensure reliability
  const feedbacks: Feedback[] = [
    {
      id: 'fb-1',
      user: 'marco_rally90',
      comment: 'Pezzo arrivato in 24h. La stampa in Nylon Carbon è robustissima, montata su KTM 450 senza mezza modifica. Top!',
      date: '2 giorni fa',
      item: 'Staffa Navigazione Rally'
    },
    {
      id: 'fb-2',
      user: 'officina_rossi',
      comment: 'Avevo bisogno di una scansione urgente per un carter motore fuori produzione. Deburr mi ha salvato il restauro. Professionali.',
      date: '1 settimana fa',
      item: 'Servizio Reverse Engineering'
    },
    {
      id: 'fb-3',
      user: 'desmo_luigi',
      comment: 'Convogliatori aria perfetti. Finitura superficiale ottima, sembrano stampati a iniezione. Consigliatissimi per chi corre.',
      date: '2 settimane fa',
      item: 'Kit Raffreddamento Freni'
    }
  ];

  return (
    <section className="py-20 bg-slate-900 border-b border-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
            <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
            <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
            <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
            <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Feedback dai Clienti
          </h2>
          <p className="text-slate-400">
            La soddisfazione dei nostri clienti parla per noi. 
            <span className="text-orange-500 font-semibold ml-1">100% Feedback Positivi su eBay.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {feedbacks.map((fb) => (
            <div key={fb.id} className="bg-slate-950 p-6 rounded-2xl border border-slate-800 relative group hover:border-orange-500/30 transition-colors">
              <Quote className="absolute top-6 right-6 text-slate-800 w-8 h-8 group-hover:text-orange-900/50 transition-colors" />
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="text-slate-200 mb-6 italic">"{fb.comment}"</p>
              
              <div className="border-t border-slate-800 pt-4">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-bold text-white">{fb.user}</span>
                  <span className="text-xs text-slate-500">{fb.date}</span>
                </div>
                <div className="text-xs text-orange-500 truncate font-medium">
                  {fb.item}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a 
            href="https://www.ebay.it/fdbk/feedback_profile/deburr_it?user_context=BUYER" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-slate-300 hover:text-white border-b border-orange-500 pb-1 hover:border-white transition-all"
          >
            Leggi tutti i feedback su eBay <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;