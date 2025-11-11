import React from 'react';
import logo from '../assets/logo.png';
import { useI18n } from '../i18n/I18nContext.jsx';

const Hero = () => {
  const { t, lang, setLang } = useI18n();
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center hero-vibrant-bg">
      <div id="stars-bg"></div>
      <div id="stars-bg2"></div>
      <div id="stars-bg3"></div>
      <div className="absolute top-24 sm:top-28 md:top-32 right-6 z-40">
        <div className="inline-flex rounded-lg border border-brand-purple overflow-hidden bg-brand-dark bg-opacity-70 backdrop-blur px-1 py-1">
          <button
            onClick={() => setLang('pl')}
            className={`px-3 py-1 text-sm font-semibold ${lang === 'pl' ? 'bg-brand-orange text-brand-dark rounded-md' : 'text-brand-light hover:text-white'}`}
            aria-pressed={lang === 'pl'}
          >
            PL
          </button>
          <button
            onClick={() => setLang('en')}
            className={`px-3 py-1 text-sm font-semibold ${lang === 'en' ? 'bg-brand-orange text-brand-dark rounded-md' : 'text-brand-light hover:text-white'}`}
            aria-pressed={lang === 'en'}
          >
            EN
          </button>
        </div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="mb-8">
            <img src={logo} alt="Animated Logo" className="h-28 w-28 sm:h-32 sm:w-32 mx-auto animate-pulse" />
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 text-glow-white">
          <span className="text-brand-orange text-glow-orange">Solutions</span> By <span className="text-brand-purple text-glow-purple">Andromeda</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-8 text-brand-muted">
          {t('hero.subtitle')}
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <button 
            onClick={() => scrollToSection('portfolio')}
            className="bg-gradient-to-br from-yellow-400 to-brand-orange text-brand-dark font-semibold px-8 py-3 rounded-lg hover:bg-opacity-90 transition-all duration-300 w-full sm:w-auto"
          >
            {t('hero.cta.portfolio')}
          </button>
          <button 
            onClick={() => scrollToSection('kontakt')}
            className="border-2 border-brand-orange text-brand-orange font-semibold px-8 py-3 rounded-lg hover:bg-brand-orange hover:text-brand-dark transition-all duration-300 w-full sm:w-auto"
          >
            {t('hero.cta.contact')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
