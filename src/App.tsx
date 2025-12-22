import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CallToAction from './components/CallToAction';
import Services from './components/Services';
import Partners from './components/Partners';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';
import LegalView from './components/LegalView';
import CookieConsent from './components/CookieConsent'; // <--- IMPORT

function App() {
  const [currentView, setCurrentView] = useState('home');

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return (
          <>
            <Hero />
            <Services />
            <CallToAction />
            <Partners />
          </>
        );
      case 'contact':
        return <ContactForm onBack={() => setCurrentView('home')} />;
      case 'privacy':
        return (
          <LegalView type="privacy" onBack={() => setCurrentView('home')} />
        );
      case 'cookies':
        return (
          <LegalView type="cookies" onBack={() => setCurrentView('home')} />
        );
      case 'terms':
        return <LegalView type="terms" onBack={() => setCurrentView('home')} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans relative flex flex-col justify-between">
      <Navbar onNavigate={setCurrentView} currentView={currentView} />

      <main className="flex-grow w-full flex flex-col">{renderView()}</main>

      <Footer onNavigate={setCurrentView} />

      <ScrollToTopButton />

      <CookieConsent
        onOpenPolicy={() => {
          setCurrentView('cookies');
          window.scrollTo(0, 0);
        }}
      />
    </div>
  );
}

export default App;
