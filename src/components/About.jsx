import React from 'react';
import { FaRocket, FaUserFriends } from 'react-icons/fa';
import { motion } from 'framer-motion';
import constellationGraphic from '../assets/poznaj-nas.png'; // 1. Zaimportuj grafikę
import { useI18n } from '../i18n/I18nContext.jsx';

const About = () => {
  const { t } = useI18n();
  return (
    <section id="onas" className="py-20 overflow-hidden relative z-10 bg-brand-dark">
      <motion.div 
        className="container mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="p-4 sm:p-8 border border-brand-blue rounded-lg bg-brand-blue bg-opacity-20">
          {/* 2. Zastąp placeholder obrazkiem */}
          <img 
            src={constellationGraphic} 
            alt="Abstrakcyjna grafika konstelacji" 
            className="w-full h-full object-contain rounded-lg"
          />
        </div>
        <div>
          <h3 className="text-sm font-bold text-brand-orange uppercase tracking-widest mb-2">{t('about.tag')}</h3>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">{t('about.title')}</h2>
          <p className="text-brand-muted mb-4">
            {t('about.p1')}
          </p>
          <p className="text-brand-muted mb-8">
            {t('about.p2')}
          </p>
          <div className="flex flex-col sm:flex-row gap-8">
            <div className="flex items-center space-x-3">
              <FaRocket className="text-brand-orange text-3xl" />
              <div>
                <p className="font-bold text-xl">50+</p>
                <p className="text-brand-muted text-sm">{t('about.metrics.projects')}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <FaUserFriends className="text-brand-orange text-3xl" />
              <div>
                <p className="font-bold text-xl">7</p>
                <p className="text-brand-muted text-sm">{t('about.metrics.years')}</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
