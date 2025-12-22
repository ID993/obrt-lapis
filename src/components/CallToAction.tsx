import hammerIcon from '../assets/hammer.png';
import wallBg from '../assets/wall-bg.jpg';

const CallToAction = () => {
  return (
    <section className="relative py-24 bg-gray-300 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat mix-blend-multiply"
        style={{ backgroundImage: `url(${wallBg})` }}
      ></div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 w-full">
        <div className="bg-[#3c62a3]/70 backdrop-blur-md text-white rounded-2xl border-2 border-white/80 p-12 md:p-16 text-center shadow-2xl">
          <img
            src={hammerIcon}
            alt="Hammer Icon"
            className="w-32 h-32 mx-auto mb-8 object-contain"
          />

          <h2 className="text-3xl font-bold uppercase tracking-widest mb-8">
            Započnimo s radom!
          </h2>

          <div className="w-24 h-0.5 bg-white/70 mx-auto mb-8"></div>

          <p className="text-sm md:text-base leading-relaxed tracking-widest max-w-4xl mx-auto opacity-95 font-light">
            S dugogodišnjim iskustvom u industriji, naš tim unosi neusporedivu
            stručnost u svakom projektu. Bilo da je riječ o vodoinstalacijama
            ili dijamantnom bušenju. Vrhunska kvaliteta i preciznost prati svaki
            projekt od početka do kraja.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
