// src/components/About.jsx

import React from 'react';
import { FaRocket, FaUserFriends } from 'react-icons/fa';
import { motion } from 'framer-motion'; // 1. Import motion

const About = () => {
  return (
    <section id="onas" className="py-20 overflow-hidden relative z-10 bg-brand-dark">

      {/* 2. Zmień div na motion.div i dodaj animacje */}
      <motion.div 
        className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="p-8 border border-brand-blue rounded-lg bg-brand-blue bg-opacity-20">
          {/* Placeholder for the constellation graphic */}
          <div className="relative h-80 w-full">
             <p className="text-center text-brand-muted">Grafika konstelacji</p>
          </div>
        </div>
        <div>
          <h3 className="text-sm font-bold text-brand-orange uppercase tracking-widest mb-2">Poznaj nas</h3>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Odkrywamy nowe wymiary projektowania</h2>
          <p className="text-brand-muted mb-4">
            Solutions By Andromeda to pasja i doświadczenie...
          </p>
          <p className="text-brand-muted mb-8">
            Moja misja jest prosta: projektować strony internetowe...
          </p>
          <div className="flex space-x-8">
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
                <p className="font-bold text-xl">5 lat</p>
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