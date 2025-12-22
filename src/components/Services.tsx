import { useEffect, useState } from 'react';
import serviceBg from '../assets/services-bg.jpg';
import plumbingIcon from '../assets/plumbing.png';
import diadrillIcon from '../assets/diadrill.png';

const Counter = ({
  target,
  duration = 2000,
  suffix = '',
}: {
  target: number;
  duration?: number;
  suffix?: string;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      if (Number.isInteger(target)) {
        setCount(Math.floor(progress * target));
      } else {
        setCount(Number((progress * target).toFixed(1)));
      }
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [target, duration]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

const Services = () => {
  const services = [
    {
      icon: plumbingIcon,
      title: 'Vodoinstalacije',
      items: [
        'Ugradnja i popravak cijevi',
        'Ugradnja i zamjena kanalizacijskih cijevi',
        'Ugradnja sanitarija',
        'Čišćenje odvoda i kanalizacija',
        'Izrada kotlovnica',
        'Sitne intervencije',
      ],
    },
    {
      icon: diadrillIcon,
      title: 'Dijamantno Bušenje',
      items: [
        'Precizno dijamantno bušenje',
        'Bušenje armiranog betona',
        'Bušenje za instalacijske vodove',
        'Bušenje ventilacijskih otvora',
      ],
    },
  ];

  return (
    <section id="services" className="relative text-white font-sans">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat fixed-bg z-0"
        style={{ backgroundImage: `url(${serviceBg})` }}
      >
        <div className="absolute inset-0 bg-[#3c62a3]/80 mix-blend-multiply"></div>
      </div>

      <div className="relative z-10 w-full pt-0">
        <div className="w-full bg-[#3c62a3] border-y-2 border-white py-6 mb-20 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-4">
            <div className="w-1 h-12 bg-white"></div>
            <h2 className="text-2xl font-bold uppercase tracking-widest text-white">
              Usluge
            </h2>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-center max-w-4xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-blue-900/40 backdrop-blur-sm border border-white/30 rounded-xl p-8 hover:bg-blue-900/60 transition-colors flex flex-col h-full group shadow-2xl"
              >
                <div className="transform group-hover:scale-110 transition-transform duration-300 mb-8">
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="w-20 h-20 mx-auto object-contain brightness-0 invert"
                  />
                </div>

                <h3 className="text-xl font-bold text-center uppercase tracking-widest mb-8 border-b border-white/20 pb-4">
                  {service.title}
                </h3>

                <ul className="space-y-4 flex-grow px-4">
                  {service.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-sm text-blue-50 font-light tracking-wide"
                    >
                      <span className="w-1.5 h-1.5 bg-white rounded-full mt-1.5 flex-shrink-0"></span>
                      <span className="uppercase">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#3c62a3] border-y-2 border-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/30">
              <div className="py-6 text-center px-4">
                <div className="text-4xl font-bold mb-2 tracking-wider">
                  <Counter target={150} suffix="+" />
                </div>
                <div className="text-xs uppercase tracking-widest text-blue-100">
                  Pouzdanskih Klijenata
                </div>
              </div>

              <div className="py-6 text-center px-4">
                <div className="text-4xl font-bold mb-2 tracking-wider">
                  <Counter target={500} suffix="+" />
                </div>
                <div className="text-xs uppercase tracking-widest text-blue-100">
                  Ugrađenih Cijevi
                </div>
              </div>

              <div className="py-6 text-center px-4">
                <div className="text-4xl font-bold mb-2 tracking-wider">
                  <Counter target={1500} suffix="+" />
                </div>
                <div className="text-xs uppercase tracking-widest text-blue-100">
                  Izbušenih Rupa
                </div>
              </div>

              <div className="py-6 text-center px-4">
                <div className="text-4xl font-bold mb-2 tracking-wider">
                  <Counter target={99.5} suffix="%" />
                </div>
                <div className="text-xs uppercase tracking-widest text-blue-100">
                  Zadovoljnih Klijenata
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
