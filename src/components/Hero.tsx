import { ArrowRight } from 'lucide-react';
import heroBg from '../assets/hero-bg.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat fixed-bg"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-[#3c62a3]/60 mix-blend-multiply"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 pt-20">
        <div className="border border-white/80 bg-[#3c62a3]/60 backdrop-blur-md rounded-3xl p-8 shadow-2xl max-w-md">
          <h1 className="text-3xl font-sans text-white uppercase tracking-widest mb-6 leading-tight drop-shadow-md">
            Naše usluge <br />
          </h1>

          <div className="w-24 h-0.5 bg-white mb-8"></div>

          <ul className="space-y-4 mb-10 text-white font-light tracking-wide text-lg drop-shadow-sm">
            <li className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
              Vodoinstalacije
            </li>
            <li className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
              Dijamantno bušenje
            </li>
          </ul>

          <div className="mt-8">
            <p className="text-blue-100 text-xs uppercase tracking-wider mb-2 opacity-80">
              Za više informacija pritisnite botun ispod.
            </p>
            <a
              href="#services"
              className="group inline-flex items-center gap-2 text-white uppercase tracking-widest text-lg font-medium hover:text-blue-200 transition-colors"
            >
              Botun ispod
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <div className="h-[1px] w-40 bg-white mt-1 shadow-sm"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
