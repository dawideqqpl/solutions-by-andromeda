import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

const Terms = ({ onClose }) => {
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

          <h1 className="text-2xl font-bold mb-6 text-white">Regulamin serwisu Solutions By Andromeda</h1>

          <div className="prose prose-invert text-brand-muted max-w-none space-y-4">
            <p className="text-sm uppercase tracking-wide text-brand-orange font-semibold">
              Data aktualizacji: 9 lutego 2025 r.
            </p>

            <p>
              Niniejszy Regulamin określa zasady korzystania ze strony internetowej{' '}
              <strong>solutionsbyandromeda.pl</strong> (dalej: „Serwis”), prowadzonej przez{' '}
              <strong>Solutions By Andromeda – Dawid Zieliński</strong> z siedzibą w Poznaniu (Polska).
            </p>

            <h3 className="text-white">1. Postanowienia ogólne</h3>
            <ul>
              <li>Serwis prezentuje ofertę usług projektowania i tworzenia stron internetowych oraz aplikacji.</li>
              <li>
                Korzystanie z Serwisu jest dobrowolne. Użytkownik zobowiązuje się do korzystania z niego zgodnie z
                przepisami prawa oraz dobrymi obyczajami.
              </li>
              <li>
                Niniejszy Regulamin jest udostępniany nieodpłatnie w formie umożliwiającej jego pobranie, utrwalenie i
                wydrukowanie.
              </li>
            </ul>

            <h3 className="text-white">2. Definicje</h3>
            <ul>
              <li>
                <strong>Administrator</strong> – Solutions By Andromeda – Dawid Zieliński.
              </li>
              <li>
                <strong>Użytkownik</strong> – każda osoba odwiedzająca Serwis lub przesyłająca zapytanie za pomocą
                formularza kontaktowego.
              </li>
              <li>
                <strong>Usługi</strong> – działania podejmowane przez Administratora, w szczególności projektowanie,
                wdrażanie i obsługa stron internetowych oraz aplikacji.
              </li>
            </ul>

            <h3 className="text-white">3. Zakres usług i charakter informacji</h3>
            <ul>
              <li>
                Serwis ma charakter informacyjny. Przedstawione materiały, realizacje i cenniki nie stanowią oferty w
                rozumieniu Kodeksu cywilnego, lecz zaproszenie do rozpoczęcia współpracy.
              </li>
              <li>
                Szczegółowe warunki współpracy, w tym zakres prac, harmonogram oraz wynagrodzenie, są każdorazowo
                ustalane indywidualnie i potwierdzane na piśmie (np. w formie umowy, briefu lub zamówienia).
              </li>
            </ul>

            <h3 className="text-white">4. Korzystanie z formularza kontaktowego</h3>
            <ul>
              <li>
                Użytkownik może wysłać zapytanie poprzez formularz, podając swoje dane kontaktowe oraz treść wiadomości.
              </li>
              <li>
                Przesłanie formularza oznacza zgodę na kontakt zwrotny oraz akceptację niniejszego Regulaminu i Polityki
                Prywatności.
              </li>
              <li>
                Administrator zastrzega sobie prawo do kontaktu z Użytkownikiem wyłącznie w sprawach związanych z
                zapytaniem i ofertą współpracy.
              </li>
            </ul>

            <h3 className="text-white">5. Prawa i obowiązki użytkownika</h3>
            <ul>
              <li>
                Użytkownik jest zobowiązany do podawania prawdziwych danych oraz niewprowadzania treści o charakterze
                bezprawnym, obraźliwym lub naruszającym prawa osób trzecich.
              </li>
              <li>
                Zakazane jest przesyłanie treści reklamowych, spamu oraz materiałów zawierających złośliwe oprogramowanie.
              </li>
            </ul>

            <h3 className="text-white">6. Odpowiedzialność</h3>
            <ul>
              <li>
                Administrator dokłada starań, aby Serwis działał bez przerw i błędów, jednak nie ponosi odpowiedzialności
                za zakłócenia wynikające z przyczyn technicznych niezależnych od niego.
              </li>
              <li>
                Administrator nie ponosi odpowiedzialności za decyzje biznesowe podejmowane na podstawie informacji
                zawartych w Serwisie, jeśli nie zostały one potwierdzone w odrębnej umowie.
              </li>
            </ul>

            <h3 className="text-white">7. Płatności i warunki współpracy</h3>
            <ul>
              <li>
                Jeżeli współpraca zostanie nawiązana, warunki płatności oraz harmonogram projektu są ustalane
                indywidualnie i potwierdzane w formie oferty, zamówienia lub umowy.
              </li>
              <li>
                Administrator może pobierać zaliczkę na poczet realizacji zlecenia. Brak płatności w uzgodnionym terminie
                może skutkować wstrzymaniem prac.
              </li>
            </ul>

            <h3 className="text-white">8. Reklamacje i kontakt</h3>
            <p>
              Wszelkie uwagi, reklamacje oraz pytania dotyczące funkcjonowania Serwisu lub realizowanych usług można
              zgłaszać na adres e-mail:{' '}
              <a href="mailto:dawidzielinski.programmer@gmail.com">dawidzielinski.programmer@gmail.com</a>.
              Odpowiedź zostanie udzielona niezwłocznie, nie później niż w ciągu 14 dni roboczych.
            </p>

            <h3 className="text-white">9. Ochrona danych osobowych</h3>
            <p>
              Zasady przetwarzania danych osobowych Użytkowników zostały opisane w Polityce Prywatności. Dokument ten
              stanowi integralną część Regulaminu.
            </p>

            <h3 className="text-white">10. Postanowienia końcowe</h3>
            <ul>
              <li>
                Administrator zastrzega sobie prawo do wprowadzenia zmian w Regulaminie. Zmiany wchodzą w życie z chwilą
                opublikowania zaktualizowanego dokumentu w Serwisie.
              </li>
              <li>
                Do spraw nieuregulowanych w Regulaminie zastosowanie mają powszechnie obowiązujące przepisy prawa
                polskiego.
              </li>
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Terms;
