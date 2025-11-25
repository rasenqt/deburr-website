import React, { useEffect, useState } from 'react';
import { ShoppingBag, ArrowRight, Loader2, AlertCircle } from 'lucide-react';

interface Product {
  id: string;
  title: string;
  price: string;
  image: string;
  link: string;
}

const ShopPreview: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchEbayProducts = async () => {
      try {
        // We use a CORS proxy to bypass browser restrictions for client-side scraping
        const ebayUrl = 'https://www.ebay.it/sch/i.html?_ssn=deburr_it&_ipg=4';
        const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(ebayUrl)}`;
        
        const response = await fetch(proxyUrl);
        const data = await response.json();
        
        if (!data.contents) throw new Error("No data received");

        const parser = new DOMParser();
        const doc = parser.parseFromString(data.contents, 'text/html');
        
        // Select items from eBay's DOM structure (s-item)
        const items = Array.from(doc.querySelectorAll('.s-item__wrapper')).slice(1, 5); // Slice 1 to skip "Shop on eBay" header item if present
        
        const scrapedProducts: Product[] = items.map((item, index) => {
          const titleEl = item.querySelector('.s-item__title');
          const priceEl = item.querySelector('.s-item__price');
          const imgEl = item.querySelector('.s-item__image-img');
          const linkEl = item.querySelector('.s-item__link');

          return {
            id: `prod-${index}`,
            title: titleEl?.textContent || 'Prodotto Deburr',
            price: priceEl?.textContent || 'Vedi Prezzo',
            image: imgEl?.getAttribute('src') || 'https://picsum.photos/400/400?grayscale',
            link: linkEl?.getAttribute('href') || 'https://www.ebay.it/str/deburrit'
          };
        }).filter(p => p.title !== 'Shop on eBay'); // Filter out potential ads

        if (scrapedProducts.length > 0) {
          setProducts(scrapedProducts);
        } else {
          setError(true);
        }
      } catch (err) {
        console.error("Error scraping eBay:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchEbayProducts();
  }, []);

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

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="w-10 h-10 text-orange-500 animate-spin" />
            <span className="ml-3 text-slate-400">Caricamento prodotti da eBay...</span>
          </div>
        ) : error || products.length === 0 ? (
          <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-8 text-center">
            <AlertCircle className="w-10 h-10 text-slate-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Impossibile caricare l'anteprima</h3>
            <p className="text-slate-400 mb-6">
              Non siamo riusciti a recuperare gli ultimi prodotti direttamente da eBay in questo momento.
            </p>
            <a 
              href="https://www.ebay.it/sch/i.html?_dkr=1&iconV2Request=true&_blrs=recall_filtering&_ssn=deburr_it&_oac=1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-orange-500 font-bold hover:text-orange-400 transition-colors"
            >
              Vai direttamente allo shop <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        ) : (
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
                      (e.target as HTMLImageElement).src = 'https://picsum.photos/400/400?grayscale&blur=2'; // Fallback
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
        )}
      </div>
    </section>
  );
};

export default ShopPreview;