import partner1 from '../assets/reply-tool.png';
import partner2 from '../assets/rst-electric.png';
import partner3 from '../assets/tid-extra.png';

const Partners = () => {
  return (
    <section className="bg-[#3c62a3] border-y border-white pt-5 pb-16 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl font-bold uppercase tracking-widest mb-4">
          Partneri
        </h2>

        <div className="w-full h-[2px] bg-white mb-12 max-w-5xl mx-auto"></div>

        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-90">
          <a
            href="https://reply-tool.hr/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-100 transition-opacity"
          >
            <img
              src={partner1}
              alt="Reply Tool"
              className="h-10 md:h-12 object-contain"
            />
          </a>

          <a
            href="https://rstelectric.hr/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-100 transition-opacity"
          >
            <img
              src={partner2}
              alt="RST Electric"
              className="h-10 md:h-12 object-contain"
            />
          </a>

          <a
            href="https://milwaukeeshop.tid-extra.hr/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-100 transition-opacity"
          >
            <img
              src={partner3}
              alt="TiD Extra"
              className="h-10 md:h-12 object-contain"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Partners;
