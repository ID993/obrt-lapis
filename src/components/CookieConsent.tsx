import { useState, useEffect } from 'react';

interface CookieConsentProps {
  onOpenPolicy: () => void;
}

const CookieConsent = ({ onOpenPolicy }: CookieConsentProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-[#1a1a1a] border-t border-white/20 p-4 z-[60] shadow-2xl animate-fade-in-up">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        <p className="text-white/80 text-xs md:text-sm font-sans tracking-wide">
          Ova web stranica koristi kolačiće kako bi osigurala pravilan rad.
          Nastavkom korištenja stranice prihvaćate korištenje kolačića.
        </p>

        <div className="flex items-center gap-4">
          <button
            onClick={onOpenPolicy}
            className="text-xs text-white/60 hover:text-white underline transition-colors uppercase tracking-widest"
          >
            Saznaj više
          </button>

          <button
            onClick={handleAccept}
            className="bg-[#3480b1] hover:bg-blue-700 text-white text-xs font-bold py-2 px-6 rounded uppercase tracking-widest transition-colors shadow-lg border border-white/10"
          >
            Prihvaćam
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
