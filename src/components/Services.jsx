import React from 'react';
import { FaDesktop, FaShoppingCart, FaCode, FaPaintBrush, FaGamepad, FaCube } from 'react-icons/fa';
import { motion } from 'framer-motion';

const servicesData = [
  { icon: <FaDesktop />, title: 'Strony internetowe', price: '1500 zł', features: ['Responsywny design', 'Optymalizacja SEO', 'Szybkie ładowanie'] },
  { icon: <FaShoppingCart />, title: 'Sklepy e-commerce', price: '3000 zł', features: ['WooCommerce / Shopify', 'Integracje płatności', 'Intuicyjny panel zarządzania'] },
  { icon: <FaCode />, title: 'Aplikacje webowe', price: '5000 zł', features: ['Nowoczesne technologie', 'Systemy zarządzania treścią', 'Dedykowane rozwiązania'] },
  { icon: <FaPaintBrush />, title: 'Projektowanie logo', price: '800 zł', features: ['Unikalne projekty', 'Formaty wektorowe', 'Księga znaku'] },
  { icon: <FaGamepad />, title: 'Tworzenie gier', price: '10000 zł', features: ['Unity / Unreal Engine', 'Rozgrywka multiplayer', 'Optymalizacja wydajności'] },
  { icon: <FaCube />, title: 'Gry Web3', price: '15000 zł', features: ['Smart kontrakty', 'Integracja NFT', 'Tokenomia'] },
];

// Definicja wariantów animacji dla kontenera i kart
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Opóźnienie 0.2s między każdą kartą
    },
  },
};

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

// Zaktualizowany komponent karty z animacjami
const ServiceCard = ({ icon, title, price, features }) => (
  <motion.div 
    className="bg-brand-blue bg-opacity-40 p-8 rounded-lg border border-brand-purple flex flex-col h-full transition-all duration-300"
    variants={cardVariants}
    whileHover={{ 
      scale: 1.05, 
      boxShadow: "0px 0px 20px rgba(99, 70, 234, 0.5)",
      borderColor: "#f0a500" 
    }}
  >
    <div className="text-brand-orange text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <div className="flex-grow">
      {features.map((feature, index) => (
        <p key={index} className="text-brand-muted mb-1">+ {feature}</p>
      ))}
    </div>
    <p className="mt-6 font-bold text-lg text-right">od {price}</p>
  </motion.div>
);

const Services = () => {
  return (
    <section id="usługi" className="py-20 overflow-hidden relative z-10 bg-brand-dark">

      <div className="container mx-auto px-6 text-center">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Kosmiczne rozwiązania internetowe
        </motion.h2>
        <motion.p 
          className="max-w-3xl mx-auto text-brand-muted mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Oferujemy kompleksowe usługi, które pomogą Twojej firmie wyróżnić się w cyfrowym świecie. Nasze projekty łączą innowacyjny design z funkcjonalnością.
        </motion.p>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {servicesData.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;