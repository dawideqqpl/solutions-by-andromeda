import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

const PrivacyPolicy = ({ onClose }) => {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[1000] p-4"
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
          onClick={(event) => event.stopPropagation()}
        >
          <button onClick={onClose} className="absolute top-4 right-4 text-2xl text-white" aria-label="Zamknij modal">
            <FaTimes />
          </button>

          <h1 className="text-2xl font-bold mb-6 text-white">Polityka Prywatności</h1>

          <div className="prose prose-invert text-brand-muted max-w-none space-y-4">
            <p className="text-sm uppercase tracking-wide text-brand-orange font-semibold">
              Data aktualizacji: 30 październik 2025 r.
            </p>

            <p>
              Niniejsza Polityka Prywatności informuje o sposobie przetwarzania danych osobowych użytkowników strony
              internetowej <strong>https://solutions-by-andromeda.vercel.app</strong> (dalej: „Serwis”).
            </p>

            <h3 className="text-white">1. Administrator danych</h3>
            <p>
              Administratorem Twoich danych osobowych jest <strong>Solutions By Andromeda – Dawid Zieliński</strong>,
              prowadzący działalność usługową w Mikołów, Polska.
            </p>
            <ul>
              <li>Adres e-mail: <a href="mailto:dawidzielinski.programmer@gmail.com">dawidzielinski.programmer@gmail.com</a></li>
              <li>Telefon: +48 572 072 278</li>
              <li>Profil LinkedIn: <a href="https://www.linkedin.com/in/dawid-zieli%C5%84ski-468513184/">Dawid Zieliński</a></li>
            </ul>

            <h3 className="text-white">2. Zakres gromadzonych danych</h3>
            <p>Podczas korzystania z formularza kontaktowego Serwis może przetwarzać następujące dane:</p>
            <ul>
              <li>Imię i nazwisko,</li>
              <li>Adres e-mail,</li>
              <li>Numer telefonu (opcjonalnie),</li>
              <li>Treść wiadomości oraz inne informacje przekazane dobrowolnie przez użytkownika.</li>
            </ul>

            <h3 className="text-white">3. Cele i podstawy przetwarzania</h3>
            <p>
              Dane osobowe przetwarzane są w celu nawiązania kontaktu i udzielenia odpowiedzi na przesłane zapytanie,
              przygotowania oferty współpracy, a także w celach archiwalnych – jako dowód prowadzonej korespondencji.
            </p>
            <p>
              Podstawą prawną przetwarzania jest art. 6 ust. 1 lit. a RODO (zgoda wyrażona poprzez wysłanie formularza) oraz
              art. 6 ust. 1 lit. b i f RODO (działania zmierzające do zawarcia umowy oraz prawnie uzasadniony interes
              administratora polegający na utrzymaniu kontaktu z klientem).
            </p>

            <h3 className="text-white">4. Czas przechowywania danych</h3>
            <p>
              Dane są przechowywane przez okres niezbędny do prowadzenia korespondencji i realizacji współpracy, a następnie
              przez czas wymagany przepisami prawa lub potrzebny do obrony przed ewentualnymi roszczeniami.
            </p>

            <h3 className="text-white">5. Odbiorcy danych</h3>
            <p>Dane mogą być powierzane zaufanym podmiotom wspierającym działalność Serwisu, m.in.:</p>
            <ul>
              <li>Dostawcy usług hostingowych utrzymujący Serwis.</li>
              <li>Formspree, Inc. – dostawca systemu obsługi formularza kontaktowego.</li>
              <li>Podmioty zapewniające wsparcie techniczne i prawne, jeżeli jest to konieczne do realizacji usług.</li>
            </ul>

            <h3 className="text-white">6. Prawa użytkowników</h3>
            <p>Masz prawo do:</p>
            <ul>
              <li>dostępu do swoich danych,</li>
              <li>sprostowania, usunięcia lub ograniczenia przetwarzania,</li>
              <li>wniesienia sprzeciwu wobec przetwarzania,</li>
              <li>przenoszenia danych,</li>
              <li>wycofania zgody w dowolnym momencie (bez wpływu na zgodność z prawem wcześniejszego przetwarzania),</li>
              <li>wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych.</li>
            </ul>

            <h3 className="text-white">7. Pliki cookies</h3>
            <p>
              Serwis może wykorzystywać pliki cookies w celach analitycznych oraz w celu poprawnej obsługi działania
              strony. Cookies można w każdej chwili wyłączyć w ustawieniach przeglądarki, co może jednak wpłynąć na sposób
              korzystania z Serwisu.
            </p>

            <h3 className="text-white">8. Bezpieczeństwo danych</h3>
            <p>
              Administrator stosuje odpowiednie środki techniczne i organizacyjne, aby chronić dane osobowe przed
              utratą, nieuprawnionym dostępem lub ujawnieniem.
            </p>

            <h3 className="text-white">9. Postanowienia końcowe</h3>
            <p>
              Administrator zastrzega sobie prawo do zmiany Polityki Prywatności. Aktualna wersja dokumentu jest dostępna
              na tej stronie. W przypadku istotnych zmian użytkownicy zostaną poinformowani odpowiednio wcześniej.
            </p>
            <p>
              Jeżeli chcesz poznać zasady korzystania z Serwisu, zapoznaj się również z naszym Regulaminem.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PrivacyPolicy;
