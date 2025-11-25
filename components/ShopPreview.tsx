import React from 'react';
import { ShoppingBag, ArrowRight } from 'lucide-react';

interface Product {
  id: string;
  title: string;
  price: string;
  image: string;
  link: string;
}

const ShopPreview: React.FC = () => {
  // Manual product data to ensure visibility and coherence
  const products: Product[] = [
    {
      id: 'prod-1',
      title: 'Kit Convogliatori Aria Freni - Carbon Nylon',
      price: '€ 45,00',
      // Car part detail
      image: 'https://images.unsplash.com/photo-1600180486667-16782c5890c0?auto=format&fit=crop&w=600&q=80', 
      link: 'https://www.ebay.it/str/deburrit'
    },
    {
      id: 'prod-2',
      title: 'Staffa Supporto GPS Rally - KTM/Husqvarna',
      price: '€ 32,50',
      // Motorcycle handlebars detail
      image: 'https://images.unsplash.com/photo-1591461942548-c89b88e14674?auto=format&fit=crop&w=600&q=80',
      link: 'https://www.ebay.it/str/deburrit'
    },
    {
      id: 'prod-3',
      title: 'Protezione Carter Frizione - TPU Rinforzato',
      price: '€ 28,00',
      // Mechanical engine part
      image: 'https://images.unsplash.com/photo-1580273916550-e323be2ebdd9?auto=format&fit=crop&w=600&q=80',
      link: 'https://www.ebay.it/str/deburrit'
    },
    {
      id: 'prod-4',
      title: 'Servizio Stampa 3D On-Demand - Invia File',
      price: 'Preventivo',
      // 3D printed object
      image: 'https://images.unsplash.com/photo-1616789578278-654e99f5d137?auto=format&fit=crop&w=600&q=80',
      link: 'https://www.ebay.it/str/deburrit'
    }
  ];

  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-orange-600/5 -skew-x-12 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <span className="text-orange-500 font-bold tracking-wider uppercase text-sm mb-2 block">Il Nostro Shop</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Prodotti in Evidenza
            </h2>
          </div>
          <a 
            href="https://www.ebay.it/sch/i.html?_dkr=1&iconV2Request=true&_blrs=recall_filtering&_ssn=deburr_it&_oac=1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-full transition-all group"
          >
            Vedi tutto su eBay <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <a 
              key={product.id}
              href={product.link}
              target="_blank"
              rel="noopener noreferrer" 
              className="group bg-slate-900 rounded-xl overflow-hidden border border-slate-800 hover:border-orange-500 transition-all hover:shadow-xl hover:shadow-orange-900/20 flex flex-col h-full"
            >
              <div className="aspect-square overflow-hidden relative bg-slate-800">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    // Reliable fallback if specific image fails
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&w=400&q=80'; 
                  }}
                />
                <div className="absolute top-3 left-3 bg-orange-600 text-xs font-bold text-white px-2 py-1 rounded shadow-lg">
                  eBay
                </div>
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-white font-bold text-md mb-2 leading-tight group-hover:text-orange-500 transition-colors line-clamp-2">
                  {product.title}
                </h3>
                <div className="mt-auto flex justify-between items-center pt-4">
                  <span className="text-lg font-bold text-slate-200">{product.price}</span>
                  <span className="bg-slate-800 text-slate-300 p-2 rounded-lg group-hover:bg-orange-600 group-hover:text-white transition-colors">
                    <ShoppingBag className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopPreview;