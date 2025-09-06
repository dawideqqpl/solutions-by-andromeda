import React from 'react';
import { FaRocket, FaUserFriends } from 'react-icons/fa';
import { motion } from 'framer-motion';
import constellationGraphic from '../assets/poznaj-nas.png'; // 1. Zaimportuj grafikę

const About = () => {
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
          <h3 className="text-sm font-bold text-brand-orange uppercase tracking-widest mb-2">Poznaj nas</h3>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">Odkrywamy nowe wymiary projektowania</h2>
          <p className="text-brand-muted mb-4">
            Solutions By Andromeda to pasja i doświadczenie, które od 2018 roku przekuwam w wyjątkowe rozwiązania cyfrowe. Jako niezależny specjalista łączę najnowsze technologie z artystyczną wizją, pomagając firmom zaistnieć w przestrzeni cyfrowej poprzez tworzenie stron internetowych, które nie tylko zachwycają wyglądem, ale również doskonale spełniają swoje funkcje.
          </p>
          <p className="text-brand-muted mb-8">
            Moja misja jest prosta: projektować strony internetowe, które wyróżniają się w gąszczu przeciętności i przenoszą doświadczenia użytkowników na zupełnie nowy poziom – niczym podróż przez galaktykę Andromedy.
          </p>
          <div className="flex flex-col sm:flex-row gap-8">
            <div className="flex items-center space-x-3">
              <FaRocket className="text-brand-orange text-3xl" />
              <div>
                <p className="font-bold text-xl">50+</p>
                <p className="text-brand-muted text-sm">zrealizowanych projektów</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <FaUserFriends className="text-brand-orange text-3xl" />
              <div>
                <p className="font-bold text-xl">7 lat</p>
                <p className="text-brand-muted text-sm">doświadczenia</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;