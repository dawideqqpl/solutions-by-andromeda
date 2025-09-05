import React from 'react';
import logo from '../assets/logo.png';

const Navbar = () => {
  // 1. Zdefiniuj linki i ich docelowe ID w jednym miejscu
  const navLinks = [
    { label: "O NAS", href: "#onas" },
    { label: "USŁUGI", href: "#usługi" },
    { label: "PORTFOLIO", href: "#portfolio" },
    { label: "KONTAKT", href: "#kontakt" },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-brand-dark bg-opacity-80 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        
        <div 
          onClick={scrollToTop} 
          className="flex items-center space-x-2 cursor-pointer"
          role="button"
          aria-label="Przewiń na górę strony"
        >
          <img src={logo} alt="Solutions By Andromeda Logo" className="h-8 w-8" />
          <span className="text-xl font-bold text-white">Solutions By Andromeda</span>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          {/* 2. Użyj predefiniowanych linków */}
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="text-brand-light hover:text-brand-orange transition-colors duration-300">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;