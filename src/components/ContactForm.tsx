import { useState } from 'react';
import contactBg from '../assets/contact-bg.jpg';

interface ContactFormProps {
  onBack?: () => void;
}

const ContactForm = ({ onBack }: ContactFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const myForm = e.target as HTMLFormElement;
    const formDataObj = new FormData(myForm);

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formDataObj as any).toString(),
    })
      .then(() => setStatus('Hvala! Vaša poruka je poslana.'))
      .catch(() => setStatus('Došlo je do greške. Molimo pokušajte ponovno.'));
  };

  return (
    <section className="relative flex-grow pt-32 pb-16 flex flex-col items-center justify-center text-white font-['Marcellus_SC'] overflow-hidden w-full border-b border-white">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: `url(${contactBg})` }}
      ></div>
      <div className="absolute inset-0 bg-[#3480b1]/85 mix-blend-multiply z-0"></div>

      <div className="relative z-10 max-w-2xl w-full mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold uppercase tracking-widest text-white mb-4">
            Pošaljite nam upit
          </h2>
          <div className="w-24 h-0.5 bg-white/70 mx-auto mb-6"></div>

          <p className="text-white/90 tracking-wider text-lg">
            Imate pitanje ili vam treba ponuda? Ispunite obrazac i javit ćemo
            vam se u najkraćem roku.
          </p>
        </div>

        <form
          name="contact"
          method="POST"
          data-netlify="true"
          onSubmit={handleSubmit}
          className="bg-white p-6 md:p-8 rounded-xl shadow-2xl border border-white/20 text-slate-800"
        >
          <input type="hidden" name="form-name" value="contact" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label
                htmlFor="name"
                className="block text-xs uppercase tracking-widest text-gray-500 mb-2 font-bold"
              >
                Ime i Prezime
              </label>

              <input
                type="text"
                name="name"
                id="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-gray-50 border border-gray-200 rounded px-4 py-3 focus:outline-none focus:border-[#3480b1] transition-colors font-['Marcellus'] tracking-normal text-slate-800"
                placeholder="Vaše Ime"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-xs uppercase tracking-widest text-gray-500 mb-2 font-bold"
              >
                E-pošta
              </label>

              <input
                type="email"
                name="email"
                id="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-gray-50 border border-gray-200 rounded px-4 py-3 focus:outline-none focus:border-[#3480b1] transition-colors font-['Marcellus'] tracking-normal text-slate-800"
                placeholder="vasa@email.com"
              />
            </div>
          </div>

          <div className="mb-6">
            <label
              htmlFor="phone"
              className="block text-xs uppercase tracking-widest text-gray-500 mb-2 font-bold"
            >
              Mobitel (Neobavezno)
            </label>

            <input
              type="tel"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-gray-50 border border-gray-200 rounded px-4 py-3 focus:outline-none focus:border-[#3480b1] transition-colors font-['Marcellus'] tracking-normal text-slate-800"
              placeholder="+385 98 ..."
            />
          </div>

          <div className="mb-8">
            <label
              htmlFor="message"
              className="block text-xs uppercase tracking-widest text-gray-500 mb-2 font-bold"
            >
              Poruka
            </label>

            <textarea
              name="message"
              id="message"
              rows={4}
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-gray-50 border border-gray-200 rounded px-4 py-3 focus:outline-none focus:border-[#3480b1] transition-colors font-['Marcellus'] tracking-normal text-slate-800"
              placeholder="Opišite što vam je potrebno..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-[#3480b1] text-white font-bold uppercase tracking-widest py-4 rounded hover:bg-blue-800 transition-colors shadow-md text-lg"
          >
            Pošalji Upit
          </button>

          {status && (
            <div
              className={`mt-6 text-center p-4 rounded border font-['Marcellus'] tracking-wide ${
                status.includes('Hvala')
                  ? 'bg-green-50 text-green-800 border-green-200'
                  : 'bg-red-50 text-red-800 border-red-200'
              }`}
            >
              {status}
            </div>
          )}
        </form>

        {onBack && (
          <div className="text-center mt-10">
            <button
              onClick={onBack}
              className="px-8 py-3 border-2 border-white/50 text-white text-lg md:text-xl font-bold tracking-widest rounded hover:bg-white hover:text-[#3480b1] transition-all duration-300 uppercase"
            >
              &larr; Povratak na naslovnu
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactForm;
