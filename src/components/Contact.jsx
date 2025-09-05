import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaBuilding, FaFileAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="kontakt" className="py-20 relative z-10 bg-brand-dark">
      <motion.div
        className="container mx-auto px-4 sm:px-6 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Rozpocznij kosmiczną podróż z nami</h2>
        <p className="max-w-3xl mx-auto text-brand-muted mb-12">
          Skontaktuj się z nami, aby omówić Twój projekt. Wspólnie stworzymy stronę internetową, która przeniesie Twoją firmę na nowy poziom.
        </p>

        <div className="max-w-3xl mx-auto text-left">
          {/* Krok 1: Przeniesiony formularz kontaktowy na górę */}
          <div className="mb-12 bg-brand-blue bg-opacity-40 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6">Wyślij wiadomość</h3>
            <form className="space-y-4">
              <input type="text" placeholder="Imię i nazwisko" className="w-full bg-brand-blue p-3 rounded-lg border border-brand-purple focus:outline-none focus:border-brand-orange" />
              <input type="email" placeholder="Email" className="w-full bg-brand-blue p-3 rounded-lg border border-brand-purple focus:outline-none focus:border-brand-orange" />
              <input type="tel" placeholder="Telefon" className="w-full bg-brand-blue p-3 rounded-lg border border-brand-purple focus:outline-none focus:border-brand-orange" />
              <textarea placeholder="Wiadomość" rows="5" className="w-full bg-brand-blue p-3 rounded-lg border border-brand-purple focus:outline-none focus:border-brand-orange"></textarea>
              <button type="submit" className="w-full bg-brand-orange text-brand-dark font-semibold px-8 py-3 rounded-lg hover:bg-opacity-90 transition-all duration-300">
                Wyślij wiadomość
              </button>
            </form>
          </div>

          {/* Krok 2: Dane kontaktowe przeniesione na dół */}
          <div className="p-8 bg-brand-blue bg-opacity-40 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 text-center sm:text-left">Dane kontaktowe</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-brand-muted">
              <p className="flex items-center"><FaBuilding className="text-brand-orange mr-3 w-4" /> Andromeda Solutions Dawid Zieliński</p>
              <p className="flex items-center"><FaFileAlt className="text-brand-orange mr-3 w-4" /> NIP: 6351870391</p>
              <p className="flex items-center"><FaEnvelope className="text-brand-orange mr-3 w-4" /> dawidzielinski.programmer@gmail.com</p>
              <p className="flex items-center"><FaPhone className="text-brand-orange mr-3 w-4" /> +48 572 072 278</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;