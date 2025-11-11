import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

import portfolio1 from '../assets/portfolio-1.png';
import portfolio2 from '../assets/portfolio-2.png';
import portfolio3 from '../assets/portfolio-3.png';
import portfolio4 from '../assets/portfolio-4.png';
import portfolio5 from '../assets/portfolio-5.png';
import portfolio6 from '../assets/portfolio-6.png';
import gameDaomation from '../assets/game-daomation.png';
import gameSuperFlare from '../assets/game-superflare.png';
import gameBuddyDice from '../assets/game-buddy-dice.png';
import strona1 from '../assets/strona-1.png';
import strona2 from '../assets/strona-2.png';
import strona3 from '../assets/strona-3.png';
import strona4 from '../assets/strona-4.png';
import { useI18n } from '../i18n/I18nContext.jsx';

const categories = [
  {
    key: 'websites',
    label: 'Strony WWW',
    items: [
      {
        id: 'web-1',
        image: strona4,
        title: 'Strona noclegowa',
        description: 'Responsywna witryna prezentujaca dom na wynajem.'
      },
       {
        id: 'web-2',
        image: strona3,
        title: 'Strona noclegowa',
        description: 'Responsywna witryna prezentujaca dom na wynajem.'
      },
       {
        id: 'web-3',
        image: strona2,
        title: 'Strona noclegowa',
        description: 'Responsywna witryna prezentujaca dom na wynajem.'
      },
       {
        id: 'web-4',
        image: strona1,
        title: 'Strona noclegowa',
        description: 'Responsywna witryna prezentujaca dom na wynajem.'
      },
      {
        id: 'web-5',
        image: portfolio1,
        title: 'Strona firmowa',
        description: 'Responsywna witryna prezentujaca software house i jego uslugi.'
      },
      {
        id: 'web-6',
        image: portfolio3,
        title: 'Platforma szkoleniowa',
        description: 'Serwis dla szkoly jazdy z systemem zapisow online.'
      },
      {
        id: 'web-7',
        image: portfolio4,
        title: 'Portal jezykowy',
        description: 'Strona dla szkoly jezykowej z blogiem i materialami video.'
      }
    ]
  },
  {
    key: 'games',
    label: 'Gry',
    items: [
      {
        id: 'game-1',
        image: gameSuperFlare,
        title: 'Super Flare',
        description: 'Dynamiczna gra WEB3 z integracja NFT i systemem rankingowym.'
      },
      {
        id: 'game-2',
        image: gameBuddyDice,
        title: 'Buddy Dice',
        description: 'Losowa gra kryptowalutowa z ekonomia Play2Earn.'
      },
      {
        id: 'game-3',
        image: gameDaomation,
        title: 'Daomation',
        description: 'Gra blockchain z tokenem DAO i panelem wydarzen.'
      },
        {
        id: 'game-4',
        image: portfolio5,
        title: 'Super Flare',
        description: 'Dynamiczna gra WEB3 z integracja NFT i systemem rankingowym.'
      },
         {
        id: 'game-5',
        image: portfolio6,
        title: 'Fox Jump',
        description: 'Gra blockchain z tokenem FLX'
      }
    ]
  },
  {
    key: 'webapps',
    label: 'Aplikacje webowe',
    items: [
      {
        id: 'app-1',
        image: portfolio2,
        title: 'Panel parkingowy',
        description: 'Dashboard do zarzadzania miejscami parkingowymi w czasie rzeczywistym.'
      },
    
    ]
  }
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0].key);
  const [selectedItem, setSelectedItem] = useState(null);
  const { t } = useI18n();

  const currentCategory = categories.find((category) => category.key === activeCategory) ?? categories[0];

  useEffect(() => {
    setSelectedItem(null);
  }, [activeCategory]);

  return (
    <>
      <section id="portfolio" className="py-20 bg-brand-blue bg-opacity-20 overflow-hidden relative z-10">
        <motion.div
          className="container mx-auto px-4 sm:px-6 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('portfolio.title')}</h2>
          <p className="max-w-3xl mx-auto text-brand-muted mb-12">
            {t('portfolio.description')}
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((category) => {
              const isActive = category.key === activeCategory;
              return (
                <button
                  key={category.key}
                  type="button"
                  onClick={() => setActiveCategory(category.key)}
                  className={`px-4 py-2 rounded-full border transition-all duration-300 text-sm font-semibold ${
                    isActive
                      ? 'bg-brand-orange border-brand-orange text-brand-dark shadow-lg shadow-brand-orange/20'
                      : 'border-brand-purple text-brand-muted hover:text-white hover:border-brand-orange'
                  }`}
                >
                  {t(`portfolio.cat.${category.key}`)}
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {currentCategory.items.map((item) => (
              <motion.div
                key={item.id}
                className="group relative h-64 bg-brand-blue rounded-lg border border-brand-purple overflow-hidden cursor-pointer"
                whileHover={{ scale: 1.05, borderColor: '#f0a500' }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedItem(item)}
                layoutId={`card-${item.id}`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className={`w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-110 ${
                    item.orientation === 'vertical' ? 'object-contain' : 'object-cover'
                  }`}
                />
                <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-white text-xl font-bold">{t(`portfolio.items.${item.id}.title`)}</h3>
                  <p className="text-gray-300 text-sm mt-2">{t(`portfolio.items.${item.id}.desc`)}</p>
                </div>
              </motion.div>
            ))}
          </div>

       
        </motion.div>
      </section>

      <AnimatePresence>
        {selectedItem && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[999]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
          >
            <motion.div className="relative" layoutId={`card-${selectedItem.id}`}>
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg"
              />
            </motion.div>
            <motion.button className="absolute top-5 right-5 text-white text-3xl" onClick={() => setSelectedItem(null)}>
              <FaTimes />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Portfolio;
