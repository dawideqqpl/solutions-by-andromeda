import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';
import { FaEnvelope, FaPhone, FaBuilding, FaFileAlt } from 'react-icons/fa';

const Contact = ({ onPolicyClick }) => { // Dodajemy 'onPolicyClick' jako prop
  const [state, handleSubmit] = useForm("xkgvpdby");
  const [isRodoChecked, setIsRodoChecked] = useState(false);

  if (state.succeeded) {
      return (
        <section id="kontakt" className="py-20 relative z-10 bg-brand-dark flex items-center justify-center" style={{minHeight: '80vh'}}>
            <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-orange mb-4">Dziękuję za wiadomość!</h2>
                <p className="text-brand-muted">Odezwę się najszybciej, jak to możliwe.</p>
            </div>
        </section>
      );
  }

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
          <div className="mb-12 bg-brand-blue bg-opacity-40 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6">Wyślij wiadomość</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input id="name" type="text" name="name" placeholder="Imię i nazwisko" className="w-full bg-brand-blue p-3 rounded-lg border border-brand-purple focus:outline-none focus:border-brand-orange" required />
              <input id="email" type="email" name="email" placeholder="Email" className="w-full bg-brand-blue p-3 rounded-lg border border-brand-purple focus:outline-none focus:border-brand-orange" required />
              <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-sm"/>
              <input id="phone" type="tel" name="phone" placeholder="Telefon" className="w-full bg-brand-blue p-3 rounded-lg border border-brand-purple focus:outline-none focus:border-brand-orange"/>
              <textarea id="message" name="message" placeholder="Wiadomość" rows="5" className="w-full bg-brand-blue p-3 rounded-lg border border-brand-purple focus:outline-none focus:border-brand-orange" required></textarea>
              <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-sm"/>
              
              <div className="flex items-start space-x-3 pt-2">
                <input
                  id="rodo"
                  type="checkbox"
                  checked={isRodoChecked}
                  onChange={() => setIsRodoChecked(!isRodoChecked)}
                  required
                  className="mt-1 h-4 w-4 rounded border-gray-300 text-brand-purple focus:ring-brand-purple"
                />
                <label htmlFor="rodo" className="text-sm text-brand-muted">
                  Wyrażam zgodę na przetwarzanie moich danych osobowych w celu odpowiedzi na moją wiadomość. Zapoznałem/am się z {' '}
                  {/* Zmieniamy <a> na <button>, aby otwierał modal */}
                  <button type="button" onClick={onPolicyClick} className="text-brand-orange underline">
                    Polityką Prywatności
                  </button>.
                </label>
              </div>

              <button 
                type="submit" 
                disabled={state.submitting || !isRodoChecked} 
                className="w-full bg-brand-orange text-brand-dark font-semibold px-8 py-3 rounded-lg hover:bg-opacity-90 transition-all duration-300 disabled:bg-gray-500 disabled:cursor-not-allowed"
              >
                Wyślij wiadomość
              </button>
            </form>
          </div>
          
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