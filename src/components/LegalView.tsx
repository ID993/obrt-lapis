import contactBg from '../assets/contact-bg.jpg';

type LegalType = 'privacy' | 'cookies' | 'terms';

interface LegalViewProps {
  type: LegalType;
  onBack: () => void;
}

const LegalView = ({ type, onBack }: LegalViewProps) => {
  const content = {
    privacy: {
      title: 'Pravila o Privatnosti',
      text: (
        <>
          <p className="mb-4">
            <strong>Posljednja izmjena:</strong> 22.12.2025.
          </p>
          <p className="mb-4">
            Obrt LAPIŠ ("mi", "nas") posvećen je zaštiti vaše privatnosti. Ova
            pravila objašnjavaju kako prikupljamo i koristimo vaše osobne
            podatke.
          </p>

          <h3 className="text-xl font-bold mt-6 mb-2 text-[#3c62a3]">
            1. Prikupljanje podataka
          </h3>
          <p className="mb-4">
            Putem kontaktnog obrasca na ovoj web stranici prikupljamo sljedeće
            podatke: Ime i prezime, E-mail adresu, Broj telefona (neobavezno).
          </p>

          <h3 className="text-xl font-bold mt-6 mb-2 text-[#3c62a3]">
            2. Svrha prikupljanja
          </h3>
          <p className="mb-4">
            Ove podatke koristimo isključivo u svrhu odgovaranja na vaš upit,
            izrade ponude ili dogovora oko usluga. Vaši podaci se ne koriste u
            marketinške svrhe bez vašeg izričitog pristanka.
          </p>

          <h3 className="text-xl font-bold mt-6 mb-2 text-[#3c62a3]">
            3. Dijeljenje podataka
          </h3>
          <p className="mb-4">
            Vaše osobne podatke ne dijelimo s trećim stranama, osim ako je to
            zakonski obavezno.
          </p>

          <h3 className="text-xl font-bold mt-6 mb-2 text-[#3c62a3]">
            4. Vaša prava
          </h3>
          <p className="mb-4">
            Imate pravo zatražiti uvid, ispravak ili brisanje vaših osobnih
            podataka. Kontaktirajte nas na: obrt.lapis@gmail.com.
          </p>
        </>
      ),
    },
    cookies: {
      title: 'Pravila o Kolačićima',
      text: (
        <>
          <p className="mb-4">
            Ova web stranica koristi kolačiće (cookies) kako bi osigurala
            pravilan rad stranice i poboljšala korisničko iskustvo.
          </p>

          <h3 className="text-xl font-bold mt-6 mb-2 text-[#3c62a3]">
            1. Što su kolačići?
          </h3>
          <p className="mb-4">
            Kolačići su male tekstualne datoteke koje web stranica sprema na
            vaše računalo ili mobilni uređaj kada je posjetite.
          </p>

          <h3 className="text-xl font-bold mt-6 mb-2 text-[#3c62a3]">
            2. Kako ih koristimo?
          </h3>
          <p className="mb-4">
            Koristimo isključivo nužne tehničke kolačiće potrebne za
            funkcionalnost stranice (npr. slanje obrasca). Ne koristimo kolačiće
            za praćenje ponašanja korisnika u marketinške svrhe.
          </p>

          <h3 className="text-xl font-bold mt-6 mb-2 text-[#3c62a3]">
            3. Upravljanje kolačićima
          </h3>
          <p className="mb-4">
            Kolačiće možete kontrolirati i/ili izbrisati u postavkama vašeg
            preglednika.
          </p>
        </>
      ),
    },
    terms: {
      title: 'Uvjeti i Odredbe',
      text: (
        <>
          <p className="mb-4">
            Dobrodošli na web stranice Obrta LAPIŠ. Korištenjem ove stranice
            pristajete na sljedeće uvjete.
          </p>

          <h3 className="text-xl font-bold mt-6 mb-2 text-[#3c62a3]">
            1. Opće odredbe
          </h3>
          <p className="mb-4">
            Sadržaj na ovoj web stranici je informativnog karaktera. Zadržavamo
            pravo izmjene sadržaja i cijena usluga bez prethodne najave.
          </p>

          <h3 className="text-xl font-bold mt-6 mb-2 text-[#3c62a3]">
            2. Intelektualno vlasništvo
          </h3>
          <p className="mb-4">
            Svi tekstovi, fotografije i logotipi na ovoj stranici vlasništvo su
            Obrta LAPIŠ i ne smiju se kopirati bez dozvole.
          </p>

          <h3 className="text-xl font-bold mt-6 mb-2 text-[#3c62a3]">
            3. Odricanje od odgovornosti
          </h3>
          <p className="mb-4">
            Obrt LAPIŠ ne odgovara za eventualnu štetu nastalu korištenjem
            informacija s ove web stranice.
          </p>
        </>
      ),
    },
  };

  const currentData = content[type];

  return (
    <section className="min-h-screen bg-slate-50 font-sans flex flex-col pt-24">
      <div className="relative h-64 flex items-center justify-center overflow-hidden border-b-4 border-white">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{ backgroundImage: `url(${contactBg})` }}
        ></div>
        <div className="absolute inset-0 bg-[#3c62a3]/90 mix-blend-multiply z-0"></div>

        <h1 className="relative z-10 text-4xl text-white font-bold uppercase tracking-widest font-['Marcellus_SC']">
          {currentData.title}
        </h1>
      </div>

      <div className="flex-grow max-w-4xl mx-auto px-6 py-16 w-full">
        <div className="bg-white p-8 md:p-12 rounded-xl shadow-sm border border-gray-200 text-slate-700 leading-relaxed font-['Marcellus'] text-lg">
          {currentData.text}
        </div>

        <div className="text-center mt-12 mb-12">
          <button
            onClick={onBack}
            className="px-8 py-3 bg-[#3c62a3] text-white text-lg font-bold tracking-widest rounded hover:bg-blue-800 transition-all duration-300 uppercase font-['Marcellus_SC'] shadow-lg"
          >
            &larr; Povratak na naslovnu
          </button>
        </div>
      </div>
    </section>
  );
};

export default LegalView;
