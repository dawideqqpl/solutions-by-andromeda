import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa'; // Ikony hamburgera i zamknięcia
import logo from '../assets/logo.png';
import { useI18n } from '../i18n/I18nContext.jsx';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Stan do kontrolowania menu mobilnego
  const { t } = useI18n();

  const navLinks = [
    { label: t('navbar.about'), href: "#onas" },
    { label: t('navbar.services'), href: "#usługi" },
    { label: t('navbar.portfolio'), href: "#portfolio" },
    { label: t('navbar.contact'), href: "#kontakt" },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setIsOpen(false); // Zamykamy menu po kliknięciu
  };

  const handleLinkClick = (href) => {
    const section = document.querySelector(href);
    if(section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false); // Zamykamy menu po kliknięciu
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-brand-dark bg-opacity-80 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        
        <div 
          onClick={scrollToTop} 
          className="flex items-center space-x-2 cursor-pointer"
          role="button"
          aria-label="Przewiń na górę strony"
        >
          <img src={logo} alt="Solutions By Andromeda Logo" className="h-8 w-8" />
          <span className="text-xl font-bold text-white">{t('navbar.brand')}</span>
        </div>

        {/* Nawigacja na komputery (ukryta na mobilnych) */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="text-brand-light hover:text-brand-orange transition-colors duration-300">
              {link.label}
            </a>
          ))}
        </div>

        {/* Przycisk hamburgera (widoczny tylko na mobilnych) */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-2xl text-white">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Menu mobilne (wysuwane) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="md:hidden absolute top-full left-0 w-full bg-brand-dark bg-opacity-95 flex flex-col items-center space-y-6 py-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {navLinks.map((link) => (
              <a 
                key={link.label} 
                href={link.href} 
                onClick={(e) => {
                  e.preventDefault(); 
                  handleLinkClick(link.href);
                }}
                className="text-xl text-brand-light hover:text-brand-orange transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
