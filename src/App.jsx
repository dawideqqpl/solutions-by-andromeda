import React, { useState } from 'react'; // Import useState
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Cursor from './components/Cursor';
import PrivacyPolicy from './components/PrivacyPolicy'; // Import nowego komponentu

function App() {
  const [isPolicyVisible, setIsPolicyVisible] = useState(false); // Stan do zarządzania modalem

  return (
    <div className="bg-brand-dark">
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        {/* Przekazujemy funkcję do otwierania modala */}
        <Contact onPolicyClick={() => setIsPolicyVisible(true)} />
      </main>
      {/* Przekazujemy funkcję do otwierania modala */}
      <Footer onPolicyClick={() => setIsPolicyVisible(true)} />

      {/* Warunkowe renderowanie modala */}
      {isPolicyVisible && <PrivacyPolicy onClose={() => setIsPolicyVisible(false)} />}
    </div>
  )
}

export default App;