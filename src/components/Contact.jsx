import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';
import { FaEnvelope, FaPhone, FaBuilding, FaLinkedin } from 'react-icons/fa';

const Contact = ({ onPolicyClick, onTermsClick }) => {
  const [state, handleSubmit] = useForm('xkgvpdby');
  const [isRodoChecked, setIsRodoChecked] = useState(false);

  if (state.succeeded) {
    return (
      <section
        id="kontakt"
        className="py-20 relative z-10 bg-brand-dark flex items-center justify-center"
        style={{ minHeight: '80vh' }}
      >
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-orange mb-4">Dziękujemy za wiadomość!</h2>
          <p className="text-brand-muted">Odezwiemy się najszybciej, jak to możliwe.</p>
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
          Skontaktuj się z nami, aby omówić Twój projekt. Wspólnie stworzymy stronę internetową, która przeniesie Twoją
          firmę na nowy poziom.
        </p>

        {/* FORMULARZ */}
        <div className="max-w-3xl mx-auto text-left">
          <div className="mb-12 bg-brand-blue bg-opacity-40 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6">Wyślij wiadomość</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Imię i nazwisko"
                className="w-full bg-brand-blue p-3 rounded-lg border border-brand-purple focus:outline-none focus:border-brand-orange"
                required
              />
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Adres e-mail"
                className="w-full bg-brand-blue p-3 rounded-lg border border-brand-purple focus:outline-none focus:border-brand-orange"
                required
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-sm" />
              <input
                id="phone"
                type="tel"
                name="phone"
                placeholder="Telefon (opcjonalnie)"
                className="w-full bg-brand-blue p-3 rounded-lg border border-brand-purple focus:outline-none focus:border-brand-orange"
              />
              <textarea
                id="message"
                name="message"
                placeholder="Opisz swój projekt lub zadaj pytanie"
                rows="5"
                className="w-full bg-brand-blue p-3 rounded-lg border border-brand-purple focus:outline-none focus:border-brand-orange"
                required
              ></textarea>
              <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-sm" />

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
                  Wyrażam zgodę na przetwarzanie moich danych osobowych w celu udzielenia odpowiedzi na wysłaną
                  wiadomość. Zapoznałem(am) się z{' '}
                  <button type="button" onClick={onPolicyClick} className="text-brand-orange underline">
                    Polityką Prywatności
                  </button>{' '}
                  oraz{' '}
                  <button type="button" onClick={onTermsClick} className="text-brand-orange underline">
                    Regulaminem
                  </button>
                  .
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
        </div>

        {/* KAFELKI KONTAKTOWE — poszerzona siatka i lepsze odstępy */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 items-stretch">
            {/* KAFEL 1 */}
            <div className="flex h-full items-center gap-4 bg-brand-blue bg-opacity-40 p-6 md:p-7 lg:p-8 rounded-xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-purple bg-opacity-30 text-brand-orange text-xl shrink-0">
                <FaBuilding />
              </div>
              <div className="min-w-0 flex-1 w-full text-right">
                <h4 className="text-lg font-semibold text-white">Dane firmy</h4>
                <p className="text-brand-muted">Solutions By Andromeda</p>
                <p className="text-brand-muted">Właściciel: Dawid Zieliński</p>
                <p className="text-brand-muted">NIP: 6351870391</p>
              </div>
            </div>

            {/* KAFEL 2 */}
            <div className="flex h-full items-center gap-4 bg-brand-blue bg-opacity-40 p-6 md:p-7 lg:p-8 rounded-xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-purple bg-opacity-30 text-brand-orange text-xl shrink-0">
                <FaEnvelope />
              </div>
              <div className="min-w-0 flex-1 w-full text-right">
                <h4 className="text-lg font-semibold text-white">Napisz do nas</h4>
                <a
                  href="mailto:dawidzielinski.programmer@gmail.com"
                  className="text-brand-orange font-medium hover:underline break-words"
                >
                  dawidzielinski.programmer@gmail.com
                </a>
                <p className="text-brand-muted mt-1">Odpowiadamy w ciągu jednego dnia roboczego.</p>
              </div>
            </div>

            {/* KAFEL 3 */}
            <div className="flex h-full items-center gap-4 bg-brand-blue bg-opacity-40 p-6 md:p-7 lg:p-8 rounded-xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-purple bg-opacity-30 text-brand-orange text-xl shrink-0">
                <FaPhone />
              </div>
              <div className="min-w-0 flex-1 w-full text-right">
                <h4 className="text-lg font-semibold text-white">Kontakt telefoniczny</h4>
                <p className="text-brand-muted">
                  +48 572 072 278
                </p>
              </div>
            </div>

            {/* KAFEL 4 */}
            <div className="flex h-full items-center gap-4 bg-brand-blue bg-opacity-40 p-6 md:p-7 lg:p-8 rounded-xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-purple bg-opacity-30 text-brand-orange text-xl shrink-0">
                <FaLinkedin />
              </div>
              <div className="min-w-0 flex-1 w-full text-right">
                <h4 className="text-lg font-semibold text-white">LinkedIn</h4>
                <a
                  href="https://www.linkedin.com/in/dawid-zieli%C5%84ski-468513184/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-brand-orange font-medium hover:underline"
                >
                  Profil Dawida na LinkedIn
                </a>
                <p className="text-brand-muted mt-1">Chętnie porozmawiamy o Twoim projekcie.</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
