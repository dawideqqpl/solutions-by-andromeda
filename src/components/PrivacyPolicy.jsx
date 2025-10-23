import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

const PrivacyPolicy = ({ onClose }) => {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[1000] p-4" // Zmieniono z-[9999] na z-[1000]
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="bg-brand-blue p-8 rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto relative"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button onClick={onClose} className="absolute top-4 right-4 text-2xl text-white">
            <FaTimes />
          </button>
          
          <h1 className="text-2xl font-bold mb-6">Polityka Prywatności</h1>
          
          <div className="prose prose-invert text-brand-muted max-w-none">
            <h1 className="text-white">Polityka Prywatności</h1>
            
            <p className="text-sm">Data wejścia w życie: 6 września 2025</p>
            
            <p>
              Niniejsza Polityka Prywatności określa zasady przetwarzania i ochrony danych osobowych przekazywanych przez Użytkowników w związku z korzystaniem przez nich z usług oferowanych przez stronę internetową solutionsbyandromeda.pl (dalej: "Serwis").
            </p>

            <h3>1. Kto jest administratorem Twoich danych?</h3>
            <p>
              Administratorem Twoich danych osobowych jest Dawid Zieliński (dalej: "Administrator").
            </p>
            <p>
              Kontakt z Administratorem jest możliwy pod adresem e-mail: dawidzielinski.programmer@gmail.com.
            </p>

            <h3>2. Jakie dane przetwarzamy?</h3>
            <p>
              Podczas korzystania z formularza kontaktowego w Serwisie, prosimy Cię o podanie następujących danych:
            </p>
            <ul>
              <li>Imię i nazwisko,</li>
              <li>Adres e-mail,</li>
              <li>Numer telefonu (opcjonalnie),</li>
              <li>Treść wiadomości.</li>
            </ul>

            <h3>3. W jakim celu i na jakiej podstawie przetwarzamy dane?</h3>
            <p>
              Twoje dane osobowe podane w formularzu kontaktowym są przetwarzane wyłącznie w jednym celu: <strong>udzielenia odpowiedzi na Twoje zapytanie</strong>.
            </p>
            <p>
              Podstawą prawną przetwarzania Twoich danych jest <strong>Twoja zgoda</strong> (art. 6 ust. 1 lit. a RODO), którą wyrażasz poprzez dobrowolne podanie danych i zaznaczenie odpowiedniego pola (checkbox) przed wysłaniem formularza.
            </p>

            <h3>4. Jak długo przechowujemy Twoje dane?</h3>
            <p>
              Twoje dane będą przetwarzane przez okres niezbędny do prowadzenia z Tobą korespondencji w związku z wysłanym zapytaniem, a po tym czasie mogą być archiwizowane przez okres przedawnienia ewentualnych roszczeń.
            </p>

            <h3>5. Komu udostępniamy Twoje dane?</h3>
            <p>
              Twoje dane są dla nas poufne. Możemy je powierzyć następującym podmiotom wyłącznie w celu prawidłowej realizacji naszych usług:
            </p>
            <ul>
                <li><strong>Dostawcy usług hostingowych</strong>, na którego serwerach przechowywana jest nasza strona.</li>
                <li><strong>Dostawcy usługi obsługi formularza (Formspree, Inc.)</strong>, który technicznie umożliwia przesłanie Twojej wiadomości na naszą skrzynkę e-mail.</li>
            </ul>

            <h3>6. Jakie masz prawa?</h3>
            <p>
              W związku z przetwarzaniem Twoich danych osobowych przysługują Ci następujące prawa:
            </p>
            <ul>
              <li>Prawo dostępu do swoich danych,</li>
              <li>Prawo do sprostowania (poprawiania) swoich danych,</li>
              <li>Prawo do usunięcia danych,</li>
              <li>Prawo do ograniczenia przetwarzania danych,</li>
              <li>Prawo do wniesienia sprzeciwu wobec przetwarzania danych,</li>
              <li>Prawo do przenoszenia danych,</li>
              <li>Prawo do cofnięcia zgody w dowolnym momencie,</li>
              <li>Prawo do wniesienia skargi do organu nadzorczego (Prezesa Urzędu Ochrony Danych Osobowych).</li>
            </ul>

            <h3>7. Ciasteczka (Cookies)</h3>
            <p>
              Serwis może używać niewielkich plików tekstowych, zwanych ciasteczkami (cookies), które są zapisywane na Twoim urządzeniu w celu zapewnienia prawidłowego działania strony. Nie zbieramy za ich pomocą danych, które mogłyby Cię zidentyfikować.
            </p>

            <h3>8. Postanowienia końcowe</h3>
            <p>
              Zastrzegamy sobie prawo do wprowadzania zmian w polityce prywatności. O wszelkich zmianach będziemy informować poprzez udostępnienie nowej treści polityki prywatności na tej stronie.
            </p>
          </div>

        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PrivacyPolicy;