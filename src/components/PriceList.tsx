interface PriceListProps {
  onBack: () => void;
}

const PriceList = ({ onBack }: PriceListProps) => {
  const services = [
    {
      name: 'Postavljanje novih vodovodnih instalacija',
      price: '33,18 - 53,09 € / točka',
    },
    {
      name: 'Popravak curenja (cijevi, ventili...)',
      price: '46,45 - 79,63 €',
    },
    {
      name: 'Otčepljavanje odvoda i WC-a',
      price: '39,82 - 92,91 €',
    },
    {
      name: 'Ugradnja bojlera',
      price: '53,09 - 106,18 €',
    },
    {
      name: 'Montaža i servis WC školjki, umivaonika i slavina',
      price: '53,09 - 92,91 €',
    },
    {
      name: 'Dijamantno bušenje betona (fi 30mm do 350mm)',
      price: '13,27 - 33,18 € / cm',
    },
    {
      name: 'Ugradnja tuš kabina i kada',
      price: '106,18 - 199,08 €',
    },
    {
      name: 'Demontaža i montaža radijatora',
      price: '53,09 - 92,91 €',
    },
    {
      name: 'Ugradnja pumpi za vodu i hidrofora',
      price: '132,72 - 331,81 €',
    },
  ];

  return (
    <section className="min-h-screen bg-[#1a1a1a] font-sans flex flex-col pt-32 text-white">
      <div className="flex-grow max-w-4xl mx-auto px-4 md:px-6 w-full">
        <div className="bg-[#2a2a2a] p-6 md:p-8 rounded-xl shadow-lg border border-[#3480b1]/30">
          <div className="text-center mb-8 border-b border-gray-600 pb-6">
            <h2 className="text-2xl md:text-4xl font-bold uppercase tracking-widest font-['Marcellus_SC'] text-white drop-shadow-md">
              Cjenik Usluga
            </h2>
            <div className="mt-2 text-[#3480b1] text-xs md:text-sm uppercase tracking-wider font-bold">
              {/* Vrijedi od 01.01.2026. */}
            </div>
            <h3 className="text-2xl md:text-4xl font-bold uppercase tracking-widest font-['Marcellus_SC'] text-white drop-shadow-md">
              uskoro
            </h3>
          </div>

          <div className="md:hidden space-y-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-[#333] p-4 rounded-lg border border-gray-700 hover:border-[#3480b1] transition-colors"
              >
                <div className="text-white font-medium text-lg leading-tight mb-3">
                  {service.name}
                </div>

                <div className="border-t border-dashed border-gray-600 my-2"></div>

                <div className="text-[#7dd6de] font-bold text-right text-lg">
                  {service.price}
                </div>
              </div>
            ))}
          </div>

          {/* <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gradient-to-r from-[#3480b1] to-[#2a5a7a] text-white">
                  <th className="py-4 px-6 font-bold uppercase tracking-wider w-2/3 rounded-tl-lg">
                    Usluga
                  </th>
                  <th className="py-4 px-6 font-bold uppercase tracking-wider text-right rounded-tr-lg">
                    Cijena (EUR)
                  </th>
                </tr>
              </thead>
              <tbody className="font-['Marcellus'] text-lg">
                {services.map((service, index) => (
                  <tr
                    key={index}
                    className={`border-b border-gray-700 hover:bg-[#3480b1]/10 transition-colors ${
                      index % 2 === 0 ? 'bg-[#2a2a2a]' : 'bg-[#333]'
                    }`}
                  >
                    <td className="py-4 px-6">{service.name}</td>
                    <td className="py-4 px-6 text-right font-bold text-[#7dd6de] whitespace-nowrap">
                      {service.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div> */}

          <div className="mt-8 text-sm text-gray-400 text-center italic leading-relaxed">
            {/* <p>Sve cijene su okvirne te bez uključenog PDV-a.</p>
            <p>Kontaktirajte nas za besplatnu procjenu i detaljnu ponudu.</p> */}
            <p className="mt-4 text-xl font-bold text-[#3480b1]">
              📞{' '}
              <a
                href="tel:+385981800026"
                className="hover:text-white transition-colors"
              >
                098 180 0026
              </a>
            </p>
          </div>
        </div>

        <div className="text-center mt-12 mb-12">
          <button
            onClick={onBack}
            className="px-8 py-3 bg-[#3480b1] text-white text-lg font-bold tracking-widest rounded-full hover:bg-[#2a5a7a] transition-all duration-300 uppercase font-['Marcellus_SC'] shadow-lg ring-2 ring-[#3480b1]/50"
          >
            &larr; Povratak na naslovnu
          </button>
        </div>
      </div>
    </section>
  );
};

export default PriceList;
