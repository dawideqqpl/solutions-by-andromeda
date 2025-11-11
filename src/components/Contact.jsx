import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';
import { FaEnvelope, FaPhone, FaBuilding, FaLinkedin } from 'react-icons/fa';
import { useI18n } from '../i18n/I18nContext.jsx';

const Contact = ({ onPolicyClick, onTermsClick }) => {
  const [state, handleSubmit] = useForm('xkgvpdby');
  const [isRodoChecked, setIsRodoChecked] = useState(false);
  const { t } = useI18n();

  if (state.succeeded) {
    return (
      <section
        id="kontakt"
        className="py-20 relative z-10 bg-brand-dark flex items-center justify-center"
        style={{ minHeight: '80vh' }}
      >
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-orange mb-4">{t('contact.success.title')}</h2>
          <p className="text-brand-muted">{t('contact.success.subtitle')}</p>
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
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('contact.title')}</h2>
        <p className="max-w-3xl mx-auto text-brand-muted mb-12">
          {t('contact.description')}
        </p>

        {/* FORMULARZ */}
        <div className="max-w-3xl mx-auto text-left">
          <div className="mb-12 bg-brand-blue bg-opacity-40 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6">{t('contact.form.title')}</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                id="name"
                type="text"
                name="name"
                placeholder={t('contact.form.name')}
                className="w-full bg-brand-blue p-3 rounded-lg border border-brand-purple focus:outline-none focus:border-brand-orange"
                required
              />
              <input
                id="email"
                type="email"
                name="email"
                placeholder={t('contact.form.email')}
                className="w-full bg-brand-blue p-3 rounded-lg border border-brand-purple focus:outline-none focus:border-brand-orange"
                required
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-sm" />
              <input
                id="phone"
                type="tel"
                name="phone"
                placeholder={t('contact.form.phone')}
                className="w-full bg-brand-blue p-3 rounded-lg border border-brand-purple focus:outline-none focus:border-brand-orange"
              />
              <textarea
                id="message"
                name="message"
                placeholder={t('contact.form.message')}
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
                  {t('contact.consent.prefix')}{' '}
                  <button type="button" onClick={onPolicyClick} className="text-brand-orange underline">
                    {t('contact.consent.privacy')}
                  </button>{' '}
                  {t('contact.consent.and')}{' '}
                  <button type="button" onClick={onTermsClick} className="text-brand-orange underline">
                    {t('contact.consent.terms')}
                  </button>
                  .
                </label>
              </div>

              <button
                type="submit"
                disabled={state.submitting || !isRodoChecked}
                className="w-full bg-brand-orange text-brand-dark font-semibold px-8 py-3 rounded-lg hover:bg-opacity-90 transition-all duration-300 disabled:bg-gray-500 disabled:cursor-not-allowed"
              >
                {t('contact.form.submit')}
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
                <h4 className="text-lg font-semibold text-white">{t('contact.tile.company.title')}</h4>
                <p className="text-brand-muted">Solutions By Andromeda</p>
                <p className="text-brand-muted">{t('contact.tile.company.owner')}: Dawid Zieliński</p>
                <p className="text-brand-muted">{t('contact.tile.company.taxid')}: 6351870391</p>
              </div>
            </div>

            {/* KAFEL 2 */}
            <div className="flex h-full items-center gap-4 bg-brand-blue bg-opacity-40 p-6 md:p-7 lg:p-8 rounded-xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-purple bg-opacity-30 text-brand-orange text-xl shrink-0">
                <FaEnvelope />
              </div>
              <div className="min-w-0 flex-1 w-full text-right">
                <h4 className="text-lg font-semibold text-white">{t('contact.tile.email.title')}</h4>
                <a
                  href="mailto:dawidzielinski.programmer@gmail.com"
                  className="text-brand-orange font-medium hover:underline break-words"
                >
                  dawidzielinski.programmer@gmail.com
                </a>
                <p className="text-brand-muted mt-1">{t('contact.tile.email.tagline')}</p>
              </div>
            </div>

            {/* KAFEL 3 */}
            <div className="flex h-full items-center gap-4 bg-brand-blue bg-opacity-40 p-6 md:p-7 lg:p-8 rounded-xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-purple bg-opacity-30 text-brand-orange text-xl shrink-0">
                <FaPhone />
              </div>
              <div className="min-w-0 flex-1 w-full text-right">
                <h4 className="text-lg font-semibold text-white">{t('contact.tile.phone.title')}</h4>
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
                <h4 className="text-lg font-semibold text-white">{t('contact.tile.linkedin.title')}</h4>
                <a
                  href="https://www.linkedin.com/in/dawid-zieli%C5%84ski-468513184/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-brand-orange font-medium hover:underline"
                >
                  {t('contact.tile.linkedin.profile')}
                </a>
                <p className="text-brand-muted mt-1">{t('contact.tile.linkedin.tagline')}</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
