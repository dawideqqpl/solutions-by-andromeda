import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-brand-blue bg-opacity-30">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Col 1 */}
          <div>
            <h3 className="font-bold text-xl mb-4">Solutions By Andromeda</h3>
            <p className="text-brand-muted mb-4 text-sm">Tworzymy nowoczesne strony internetowe, które wyróżniają się w każdej galaktyce.</p>
            <div className="flex space-x-4 text-xl">
               <a href="#" className="text-brand-light hover:text-brand-orange"><FaFacebook /></a>
               <a href="#" className="text-brand-light hover:text-brand-orange"><FaInstagram /></a>
               <a href="#" className="text-brand-light hover:text-brand-orange"><FaLinkedin /></a>
               <a href="#" className="text-brand-light hover:text-brand-orange"><FaTwitter /></a>
            </div>
          </div>
          {/* Col 2 */}
          <div>
            <h4 className="font-bold mb-4">Szybkie linki</h4>
            <ul className="space-y-2 text-sm text-brand-muted">
              <li><a href="#" className="hover:text-brand-orange">O nas</a></li>
              <li><a href="#" className="hover:text-brand-orange">Usługi</a></li>
              <li><a href="#" className="hover:text-brand-orange">Portfolio</a></li>
              <li><a href="#" className="hover:text-brand-orange">Kontakt</a></li>
            </ul>
          </div>
          {/* Col 3 */}
          <div>
            <h4 className="font-bold mb-4">Nasze usługi</h4>
            <ul className="space-y-2 text-sm text-brand-muted">
              <li><a href="#" className="hover:text-brand-orange">Strony internetowe</a></li>
              <li><a href="#" className="hover:text-brand-orange">Sklepy e-commerce</a></li>
              <li><a href="#" className="hover:text-brand-orange">Aplikacje webowe</a></li>
              <li><a href="#" className="hover:text-brand-orange">UX/UI Design</a></li>
            </ul>
          </div>
          {/* Col 4 */}
           <div>
            <h4 className="font-bold mb-4">Kontakt</h4>
            <ul className="space-y-2 text-sm text-brand-muted">
              <li>ul. Kosmiczna 42, 00-001 Warszawa</li>
              <li>kontakt@solutionsbyandromeda.pl</li>
              <li>+48 123 456 789</li>
              <li>Poniedziałek - Piątek: 9:00 - 17:00</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-brand-purple pt-6 text-sm text-brand-muted flex justify-between">
          <p>© 2025 Solutions By Andromeda. Wszelkie prawa zastrzeżone.</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-brand-orange">Polityka prywatności</a>
            <a href="#" className="hover:text-brand-orange">Warunki korzystania</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;