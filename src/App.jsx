import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Cursor from './components/Cursor';
import PrivacyPolicy from './components/PrivacyPolicy';
import PortfolioPage from './pages/PortfolioPage';
import Terms from './components/Terms';

function HomeLayout({ onPolicyClick, onTermsClick }) {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio onViewMore={() => {}} />
      <Contact onPolicyClick={onPolicyClick} onTermsClick={onTermsClick} />
      <Footer onPolicyClick={onPolicyClick} onTermsClick={onTermsClick} />
    </>
  );
}

function App() {
  const [showPolicy, setShowPolicy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  
  return (
    <>
      <Cursor />
      <Routes>
        <Route 
          path="/" 
          element={(
            <HomeLayout
              onPolicyClick={() => setShowPolicy(true)}
              onTermsClick={() => setShowTerms(true)}
            />
          )} 
        />
        <Route 
          path="/portfolio" 
          element={<PortfolioPage />} 
        />
      </Routes>
      {showPolicy && <PrivacyPolicy onClose={() => setShowPolicy(false)} />}
      {showTerms && <Terms onClose={() => setShowTerms(false)} />}
    </>
  );
}

export default App;
