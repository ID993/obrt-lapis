import { MapPin, Phone, Mail } from 'lucide-react';

interface FooterProps {
  onNavigate: (view: string) => void;
}

const Footer = ({ onNavigate }: FooterProps) => {
  const handleLinkClick = (view: string) => {
    onNavigate(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1a1a1a] text-white pt-20 border-t border-white/10 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-16 pb-16">
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-5 bg-[#3480b1]"></div>
            <h3 className="text-lg font-bold uppercase tracking-widest">
              O Nama
            </h3>
          </div>

          <div className="text-white/90 text-sm space-y-6 tracking-wider leading-relaxed font-light">
            <p>
              LAPIŠ JE OSNOVAN NA PRINCIPIMA INTEGRITETA, POUZDANOSTI I
              MAJSTORSKE IZRADE, TE SMO ZAHVALJUJUĆI TOME PREPOZNATI I VISOKO
              PREPORUČENI U INDUSTRIJI.
            </p>
            <p>
              TIJEKOM GODINA PROŠIRILI SMO SPEKTAR USLUGA I USAVRŠILI SVOJE
              VJEŠTINE KAKO BISMO POSTALI SPECIJALISTI ZA VODOINSTALACIJE I
              DIJAMANTNO BUŠENJE.
            </p>
            {/* <p>
              UVIJEK POSTOJI NETKO TKO TO RADI JEFTINIJE. VAŠE JE DA ODABERETE!
            </p> */}
            <p className="text-white font-normal">
              RADUJEMO SE BUDUĆOJ SURADNJI S VAMA.
            </p>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-5 bg-[#3480b1]"></div>
            <h3 className="text-lg font-bold uppercase tracking-widest">
              Kontakt
            </h3>
          </div>

          <p className="text-white/90 text-sm mb-10 tracking-wider uppercase">
            Kontaktirajte nas za konzultacije
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 border border-white/20 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div className="pt-1">
                <p className="font-bold text-sm tracking-widest text-white mb-1">
                  ADRESA:
                </p>
                <p className="text-white text-base font-['Marcellus'] tracking-normal">
                  Splitska, otok Brač, Hrvatska
                </p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="w-12 h-12 border border-white/20 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <div className="pt-1">
                <p className="font-bold text-sm tracking-widest text-white mb-1">
                  MOBITEL:
                </p>
                <p className="text-white text-base font-['Marcellus'] tracking-normal">
                  +385 98 180 0026
                </p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="w-12 h-12 border border-white/20 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <div className="pt-1">
                <p className="font-bold text-sm tracking-widest text-white mb-1">
                  E-POŠTA:
                </p>
                <p className="text-white text-base font-['Marcellus'] tracking-normal lowercase">
                  obrt.lapis@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black py-8 border-t border-white/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-[10px] md:text-xs text-white/60 tracking-widest gap-4">
          <p>© COPYRIGHT 2025 LAPIŠ</p>
          <div className="flex gap-4">
            <button
              onClick={() => handleLinkClick('terms')}
              className="hover:text-white transition-colors uppercase"
            >
              UVJETI I ODREDBE
            </button>
            <span>|</span>
            <button
              onClick={() => handleLinkClick('privacy')}
              className="hover:text-white transition-colors uppercase"
            >
              PRAVILA O PRIVATNOSTI
            </button>
            <span>|</span>
            <button
              onClick={() => handleLinkClick('cookies')}
              className="hover:text-white transition-colors uppercase"
            >
              PRAVILA O KOLAČIĆIMA
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
