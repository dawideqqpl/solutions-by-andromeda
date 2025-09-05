import React from 'react';
import { motion } from 'framer-motion';

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-brand-blue bg-opacity-20 overflow-hidden">
      <motion.div 
        className="container mx-auto px-6 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Kosmiczna galeria naszych realizacji</h2>
        <p className="max-w-3xl mx-auto text-brand-muted mb-12">
          Odkryj nasze najnowsze projekty. Każda realizacja to unikalne połączenie designu, funkcjonalności i technologii dopasowanych do indywidualnych potrzeb klienta.
        </p>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {Array(6).fill(0).map((_, index) => (
            <motion.div 
              key={index} 
              className="h-64 bg-brand-blue rounded-lg border border-brand-purple flex items-center justify-center cursor-pointer"
              whileHover={{ scale: 1.05, borderColor: "#f0a500" }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-brand-muted">Projekt {index + 1}</p>
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
  );
};

export default Portfolio;