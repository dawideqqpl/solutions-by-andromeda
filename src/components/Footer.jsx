import React from 'react';

const Footer = ({ onPolicyClick, onTermsClick }) => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0B0713]">
      <div className="container mx-auto px-4 sm:px-6 py-12">
        {/* SZYBKIE LINKI */}
        <div className="max-w-3xl mx-auto text-center">
          <h4 className="font-bold text-white tracking-wide uppercase text-xs">
            Szybkie linki
          </h4>

      

          <ul className="mt-5 flex flex-wrap items-center justify-center text-sm leading-6">
            {/* zamiast gap — bezpieczne odstępy paddingiem na <li> */}
            <li className="px-3 py-1">
              <a
                href="#onas"
                className="text-brand-muted hover:text-white underline-offset-4 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/70 rounded-sm"
              >
                O nas
              </a>
            </li>
            <li className="px-3 py-1">
              <a
                href="#uslugi"
                className="text-brand-muted hover:text-white underline-offset-4 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/70 rounded-sm"
              >
                Usługi
              </a>
            </li>
            <li className="px-3 py-1">
              <a
                href="#portfolio"
                className="text-brand-muted hover:text-white underline-offset-4 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/70 rounded-sm"
              >
                Portfolio
              </a>
            </li>
            <li className="px-3 py-1">
              <a
                href="#kontakt"
                className="text-brand-muted hover:text-white underline-offset-4 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/70 rounded-sm"
              >
                Kontakt
              </a>
            </li>
          </ul>
        </div>

        {/* DOLNY PASEK */}
        <div className="mt-10 pt-6 text-sm text-brand-muted">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-center md:text-left">
              © {year} Solutions By Andromeda. Wszelkie prawa zastrzeżone.
            </p>

            <div className="flex items-center">
              <button
                type="button"
                onClick={onPolicyClick}
                className="px-2 hover:text-white underline-offset-4 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/70 rounded-sm"
              >
                Polityka prywatności
              </button>
              <span aria-hidden="true" className="opacity-40">|</span>
              <button
                type="button"
                onClick={onTermsClick}
                className="px-2 hover:text-white underline-offset-4 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/70 rounded-sm"
              >
                Regulamin
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
