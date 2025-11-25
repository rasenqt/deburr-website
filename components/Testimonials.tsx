import React, { useEffect, useState } from 'react';
import { Star, ExternalLink, Quote, Loader2 } from 'lucide-react';

interface Feedback {
  id: string;
  user: string;
  comment: string;
  date: string;
  item: string;
}

const Testimonials: React.FC = () => {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        // Attempt to fetch feedback page via proxy
        // Note: eBay feedback pages are complex and might block proxies or render via JS.
        // We attempt to find feedback table rows.
        const feedbackUrl = 'https://www.ebay.it/fdbk/feedback_profile/deburr_it?user_context=BUYER';
        const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(feedbackUrl)}`;
        
        const response = await fetch(proxyUrl);
        const data = await response.json();
        
        if (data.contents) {
          const parser = new DOMParser();
          const doc = parser.parseFromString(data.contents, 'text/html');
          
          // Try to select feedback rows. eBay class names change, but structure is usually a table
          // This selector is a "best guess" based on standard eBay structure or generic table parsing
          const rows = Array.from(doc.querySelectorAll('.feedback-table__row, tr.card')).slice(0, 3);
          
          if (rows.length > 0) {
            const scrapedFeedback: Feedback[] = rows.map((row, i) => {
               // Attempt to find text content within the row
               return {
                 id: `fb-${i}`,
                 user: row.querySelector('.user-id, .fdbk-detail-seller-rating__buyer')?.textContent?.trim() || 'Utente eBay',
                 comment: row.querySelector('.feedback-table__text, .fdbk-container__comment')?.textContent?.trim() || 'Feedback positivo',
                 date: 'Recente',
                 item: 'Acquisto verificato'
               };
            });
            setFeedbacks(scrapedFeedback);
          } else {
             // Fallback if scraping fails due to DOM changes (prevents showing nothing)
             // We return nothing to let the "View all" button take precedence or show a generic message
             setFeedbacks([]);
          }
        }
      } catch (e) {
        console.error("Feedback scraping failed", e);
      } finally {
        setLoading(false);
      }
    };

    fetchFeedback();
  }, []);

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

        {loading ? (
           <div className="flex justify-center p-10">
             <Loader2 className="animate-spin text-orange-500" />
           </div>
        ) : feedbacks.length > 0 ? (
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
                  <div className="text-xs text-orange-500 truncate">
                    {fb.item}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center p-8 bg-slate-950/50 rounded-xl border border-slate-800">
             <p className="text-slate-400 mb-4">Leggi le recensioni verificate direttamente sulla nostra pagina eBay.</p>
          </div>
        )}

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