import React from 'react';
import logo from '../assets/logo.png';

const Hero = () => {
  // 1. Funkcja do płynnego przewijania do dowolnej sekcji
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center hero-vibrant-bg">
      
      {/* Tło z gwiazdami wygenerowane w CSS */}
      <div id="stars-bg"></div>
      <div id="stars-bg2"></div>
      <div id="stars-bg3"></div>

      {/* Główna treść sekcji */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-8">
            <img src={logo} alt="Animated Logo" className="h-32 w-32 mx-auto animate-pulse" />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-glow-white">
          <span className="text-brand-orange text-glow-orange">Solutions</span> By <span className="text-brand-purple text-glow-purple">Andromeda</span>
        </h1>
        
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-brand-muted">
          Tworzymy nowoczesne strony internetowe, które <span className="font-bold">wyróżniają się</span> w każdej galaktyce.
        </p>
        
        <div className="flex justify-center space-x-4">
          {/* 2. Dodajemy onClick do przycisków */}
          <button 
            onClick={() => scrollToSection('portfolio')}
            className="bg-gradient-to-br from-yellow-400 to-brand-orange text-brand-dark font-semibold px-8 py-3 rounded-lg hover:bg-opacity-90 transition-all duration-300"
          >
            Zobacz nasze realizacje
          </button>
          
          <button 
            onClick={() => scrollToSection('kontakt')}
            className="border-2 border-brand-orange text-brand-orange font-semibold px-8 py-3 rounded-lg hover:bg-brand-orange hover:text-brand-dark transition-all duration-300"
          >
            Skontaktuj się
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;