import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaClock, FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="kontakt" className="py-20 relative z-10 bg-brand-dark">

      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Rozpocznij kosmiczną podróż z nami</h2>
        <p className="max-w-3xl mx-auto text-brand-muted mb-12">
          Skontaktuj się z nami, aby omówić Twój projekt. Wspólnie stworzymy stronę internetową, która przeniesie Twoją firmę na nowy poziom.
        </p>
        <div className="grid lg:grid-cols-2 gap-12 text-left">
          {/* Contact Form */}
          <div className="bg-brand-blue bg-opacity-40 p-8 rounded-lg">
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
          {/* Contact Details */}
          <div className="space-y-8">
            <div className="bg-brand-blue bg-opacity-40 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-6">Dane kontaktowe</h3>
                 <div className="space-y-4 text-brand-muted">
                    <p className="flex items-center"><FaMapMarkerAlt className="text-brand-orange mr-3" /> ul. Kosmiczna 42, 00-001 Warszawa</p>
                    <p className="flex items-center"><FaEnvelope className="text-brand-orange mr-3" /> kontakt@solutionsbyandromeda.pl</p>
                    <p className="flex items-center"><FaPhone className="text-brand-orange mr-3" /> +48 123 456 789</p>
                    <p className="flex items-center"><FaClock className="text-brand-orange mr-3" /> Poniedziałek - Piątek: 9:00 - 17:00</p>
                 </div>
                 <h4 className="font-bold mt-8 mb-4">Znajdź nas</h4>
                 <div className="flex space-x-4 text-2xl">
                    <a href="#" className="text-brand-light hover:text-brand-orange"><FaFacebook /></a>
                    <a href="#" className="text-brand-light hover:text-brand-orange"><FaInstagram /></a>
                    <a href="#" className="text-brand-light hover:text-brand-orange"><FaLinkedin /></a>
                    <a href="#" className="text-brand-light hover:text-brand-orange"><FaTwitter /></a>
                 </div>
            </div>
             <div className="bg-brand-blue bg-opacity-40 p-8 rounded-lg h-40 flex items-center justify-center">
                <p className="text-brand-muted">Mapa lokalizacji</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;