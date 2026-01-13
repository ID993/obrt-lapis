import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import logo from '../assets/text-logo.png'; // Make sure this path is correct for your file structure

interface NavbarProps {
  onNavigate: (view: string) => void;
  currentView: string;
}

const Navbar = ({ onNavigate, currentView }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (view: string) => {
    onNavigate(view);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleServicesClick = () => {
    if (currentView !== 'home') {
      onNavigate('home');
    }

    setIsOpen(false);

    setTimeout(() => {
      const servicesSection = document.getElementById('services');
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <nav className="bg-[#3480b1] border-b-2 border-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24">
          <div className="flex items-center">
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-2"
            >
              <img
                src={logo}
                alt="Obrt Lapis"
                className="h-16 w-auto brightness-100"
              />
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={handleServicesClick}
              className="text-blue-100 hover:text-white font-medium transition-colors uppercase text-sm tracking-wide"
            >
              Usluge
            </button>
            <button
              onClick={() => handleNavClick('pricelist')}
              className="text-blue-100 hover:text-white font-medium transition-colors uppercase text-sm tracking-wide"
            >
              Cjenik
            </button>

            <button
              onClick={() => handleNavClick('contact')}
              className="bg-white text-[#3480b1] px-6 py-3 rounded font-bold hover:bg-blue-50 transition-colors uppercase text-sm"
            >
              Kontakt
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-blue-200"
            >
              {isOpen ? (
                <X className="h-8 w-8" />
              ) : (
                <Menu className="h-8 w-8" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#3480b1] border-t border-blue-800 shadow-xl">
          <div className="px-4 pt-4 pb-6 space-y-2">
            <button
              onClick={handleServicesClick}
              className="block w-full text-left px-3 py-2 text-white hover:bg-blue-800 rounded-md font-medium"
            >
              USLUGE
            </button>

            <button
              onClick={() => handleNavClick('pricelist')}
              className="block w-full text-left px-3 py-2 text-white hover:bg-blue-800 rounded-md font-medium"
            >
              CJENIK
            </button>

            <button
              onClick={() => handleNavClick('contact')}
              className="block w-full text-center px-3 py-2 bg-white text-[#3480b1] font-bold rounded-md mt-4"
            >
              KONTAKT
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
