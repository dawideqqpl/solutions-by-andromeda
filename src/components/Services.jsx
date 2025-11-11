import React from 'react';
import { FaDesktop, FaShoppingCart, FaCode, FaPaintBrush, FaGamepad, FaCube } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useI18n } from '../i18n/I18nContext.jsx';


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

// ZMIANA TUTAJ: Komponent ServiceCard teraz obsługuje 'oldPrice'
const ServiceCard = ({ icon, title, price, features, oldPrice, t }) => (
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
    
    {/* ZMIANA TUTAJ: Warunkowe wyświetlanie ceny */}
    {oldPrice ? (
      <div className="mt-6 font-bold text-lg text-right">
        <span className="text-brand-muted line-through mr-2 text-base">{oldPrice}</span>
        <span className="text-brand-orange text-2xl">{t('services.price.from')} {price}</span>
      </div>
    ) : (
      <p className="mt-6 font-bold text-lg text-right">{t('services.price.from')} {price}</p>
    )}
  </motion.div>
);

const Services = () => {
  const { t } = useI18n();

  const servicesData = [
    { icon: <FaDesktop />, title: t('services.cards.websites.title'), oldPrice: '1500 zł', price: '1200 zł', features: [t('services.cards.websites.f1'), t('services.cards.websites.f2'), t('services.cards.websites.f3')] },
    { icon: <FaShoppingCart />, title: t('services.cards.ecommerce.title'), price: '3000 zł', features: [t('services.cards.ecommerce.f1'), t('services.cards.ecommerce.f2'), t('services.cards.ecommerce.f3')] },
    { icon: <FaCode />, title: t('services.cards.webapps.title'), price: '5000 zł', features: [t('services.cards.webapps.f1'), t('services.cards.webapps.f2'), t('services.cards.webapps.f3')] },
    { icon: <FaPaintBrush />, title: t('services.cards.logo.title'), price: '800 zł', features: [t('services.cards.logo.f1'), t('services.cards.logo.f2'), t('services.cards.logo.f3')] },
    { icon: <FaGamepad />, title: t('services.cards.games.title'), price: '10000 zł', features: [t('services.cards.games.f1'), t('services.cards.games.f2'), t('services.cards.games.f3')] },
    { icon: <FaCube />, title: t('services.cards.web3.title'), price: '15000 zł', features: [t('services.cards.web3.f1'), t('services.cards.web3.f2'), t('services.cards.web3.f3')] },
  ];

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
          {t('services.title')}
        </motion.h2>
        <motion.p 
          className="max-w-3xl mx-auto text-brand-muted mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {t('services.description')}
        </motion.p>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
            {servicesData.map((service, index) => (
              <ServiceCard key={index} {...service} t={t} />
            ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
