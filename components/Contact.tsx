import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitted'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitted');
    setTimeout(() => setFormStatus('idle'), 3000);
  };

  return (
    <section id="contact" className="py-24 bg-slate-950 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Info Side */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Pronto a <span className="text-orange-500">Accelerare?</span>
            </h2>
            <p className="text-slate-400 text-lg mb-12">
              Contattaci per discutere del tuo prossimo progetto. Che si tratti di un prototipo unico o di una serie di componenti, siamo qui per realizzarlo.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-orange-500 shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Email</h4>
                  <p className="text-slate-400">info@deburr.it</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-orange-500 shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Telefono</h4>
                  <p className="text-slate-400">+39 02 1234 5678</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-orange-500 shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Sede</h4>
                  <p className="text-slate-400">Trepuzzi (LE), Italia</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-slate-400 text-sm font-semibold mb-2">Nome</label>
                  <input type="text" className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 transition-colors" placeholder="Il tuo nome" required />
                </div>
                <div>
                  <label className="block text-slate-400 text-sm font-semibold mb-2">Cognome</label>
                  <input type="text" className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 transition-colors" placeholder="Il tuo cognome" required />
                </div>
              </div>
              
              <div>
                <label className="block text-slate-400 text-sm font-semibold mb-2">Email</label>
                <input type="email" className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 transition-colors" placeholder="nome@azienda.com" required />
              </div>

              <div>
                <label className="block text-slate-400 text-sm font-semibold mb-2">Messaggio</label>
                <textarea rows={4} className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 transition-colors" placeholder="Descrivi il tuo progetto..." required></textarea>
              </div>

              <button 
                type="submit" 
                className={`w-full py-4 rounded-xl font-bold text-white transition-all flex items-center justify-center gap-2 ${formStatus === 'submitted' ? 'bg-green-600' : 'bg-orange-600 hover:bg-orange-700'}`}
              >
                {formStatus === 'submitted' ? 'Messaggio Inviato!' : (
                  <>
                    Invia Richiesta <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;