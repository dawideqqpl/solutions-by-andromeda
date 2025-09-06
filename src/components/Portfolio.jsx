import React, { useState } from 'react'; // Dodajemy import useState
import { motion, AnimatePresence } from 'framer-motion'; // Dodajemy AnimatePresence
import { FaTimes } from 'react-icons/fa'; // Ikona do zamykania

// Używamy poprawnej ścieżki względnej
import portfolio1 from '../assets/portfolio-1.png';
import portfolio2 from '../assets/portfolio-2.png';
import portfolio3 from '../assets/portfolio-3.png';
import portfolio4 from '../assets/portfolio-4.png';
import portfolio5 from '../assets/portfolio-5.png';
import portfolio6 from '../assets/portfolio-6.png';

const portfolioItems = [
  { 
    id: 1, 
    image: portfolio1, 
    title: "Strona + Aplikacja", 
    description: "Nowoczesna strona wraz z aplikacją mobilną." 
  },
  { 
    id: 2, 
    image: portfolio2, 
    title: "Aplikacja webowa", 
    description: "Platforma do zarządzania parkingiem."
  },
  { 
    id: 3, 
    image: portfolio3, 
    title: "Strona internetowa", 
    description: "Strona internetowa dla szkoły jazdy." 
  },
  { 
    id: 4, 
    image: portfolio4, 
    title: "Strona internetowa", 
    description: "Strona internetowa dla szkoły językowej." 
  },
  { 
    id: 5, 
    image: portfolio5, 
    title: "Gra WEB3", 
    description: "Gra mobilna WEB3 z integracją tokena",
    orientation: 'vertical' 
  }, 
  { 
    id: 6, 
    image: portfolio6, 
    title: "Gra WEB3", 
    description: "Gra mobilna WEB3 z integracją NFT + tokena" ,
    orientation: 'vertical' 

  },
];

const Portfolio = () => {
  // 1. Dodajemy stan, który będzie przechowywał informację o wybranym obrazku
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    // Używamy React.Fragment (<>), aby móc umieścić Modal obok sekcji
    <> 
      <section id="portfolio" className="py-20 bg-brand-blue bg-opacity-20 overflow-hidden relative z-10">
        <motion.div 
          className="container mx-auto px-4 sm:px-6 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Kosmiczna galeria naszych realizacji</h2>
          <p className="max-w-3xl mx-auto text-brand-muted mb-12">
            Odkryj nasze najnowsze projekty. Każda realizacja to unikalne połączenie designu, funkcjonalności i technologii dopasowanych do indywidualnych potrzeb klienta.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {portfolioItems.map((item) => (
              <motion.div 
                key={item.id} 
                className="group relative h-64 bg-brand-blue rounded-lg border border-brand-purple overflow-hidden cursor-pointer"
                whileHover={{ scale: 1.05, borderColor: "#f0a500" }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedItem(item)} // 2. Po kliknięciu, ustawiamy wybrany obrazek
                layoutId={`card-${item.id}`} // Dla płynnej animacji
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className={`w-full h-full group-hover:scale-110 transition-transform duration-500 ease-in-out ${
                    item.orientation === 'vertical' ? 'object-contain' : 'object-cover'
                  }`}
                />
                <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-white text-xl font-bold">{item.title}</h3>
                  <p className="text-gray-300 text-sm mt-2">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.button 
            className="border-2 border-brand-orange text-brand-orange font-semibold px-8 py-3 rounded-lg hover:bg-brand-orange hover:text-brand-dark transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Zobacz więcej projektów
          </motion.button>
        </motion.div>
      </section>

      {/* 3. Kod Modala/Lightboxa - pojawi się tylko, gdy selectedItem nie jest nullem */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[999]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)} // Zamykanie po kliknięciu na tło
          >
            <motion.div 
              className="relative"
              layoutId={`card-${selectedItem.id}`} // Dla płynnej animacji
            >
              <img 
                src={selectedItem.image} 
                alt={selectedItem.title} 
                className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg"
              />
            </motion.div>
            <motion.button 
              className="absolute top-5 right-5 text-white text-3xl"
              onClick={() => setSelectedItem(null)}
            >
              <FaTimes />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Portfolio;