import {
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type FormEvent,
} from 'react';
import contactBg from '../assets/contact-bg.webp';
import { serviceNames, type ServiceName } from '../services';

interface ContactFormProps {
  initialService?: ServiceName;
  onBack?: () => void;
}

const labelClassName =
  'block text-xs uppercase tracking-widest text-slate-600 mb-2 font-bold';
const controlClassName =
  "w-full bg-gray-50 border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-[#3480b1] focus:ring-1 focus:ring-[#3480b1] transition-colors font-['Marcellus'] tracking-normal text-slate-800";

const maxPhotoCount = 3;
const maxPhotoMegabytes = 7;
const photoTypes = [
  'image/jpeg',
  'image/png',
  'image/webp',
  'image/heic',
  'image/heif',
];
const photoExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.heic', '.heif'];

function getPhotoError(photos: File[]) {
  if (photos.length > maxPhotoCount) {
    return `Možete priložiti najviše ${maxPhotoCount} fotografije.`;
  }

  const hasInvalidPhoto = photos.some((photo) => {
    const extension = photo.name
      .slice(photo.name.lastIndexOf('.'))
      .toLowerCase();
    const hasGenericType =
      !photo.type || photo.type === 'application/octet-stream';
    const isSupported =
      photoTypes.includes(photo.type) ||
      (hasGenericType && photoExtensions.includes(extension));
    return !isSupported || photo.size === 0;
  });

  if (hasInvalidPhoto) {
    return 'Odaberite valjanu fotografiju u formatu JPG, PNG, WebP, HEIC ili HEIF.';
  }

  const totalBytes = photos.reduce((bytes, photo) => bytes + photo.size, 0);
  if (totalBytes > maxPhotoMegabytes * 1_000_000) {
    return `Fotografije ukupno mogu imati najviše ${maxPhotoMegabytes} MB.`;
  }

  return null;
}

const ContactForm = ({ initialService, onBack }: ContactFormProps) => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const [photos, setPhotos] = useState<File[]>([]);
  const [photoError, setPhotoError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{
    type: 'success' | 'error';
    message: string;
  } | null>(null);

  useEffect(() => {
    headingRef.current?.focus({ preventScroll: true });
  }, []);

  const addPhotos = (event: ChangeEvent<HTMLInputElement>) => {
    const input = event.currentTarget;
    const selectedPhotos = Array.from(input.files ?? []);
    input.value = '';

    const nextPhotos = [...photos, ...selectedPhotos];
    const error = getPhotoError(nextPhotos);
    setPhotoError(error);
    if (!error) setPhotos(nextPhotos);
  };

  const removePhoto = (index: number) => {
    setPhotos(photos.filter((_, photoIndex) => photoIndex !== index));
    setPhotoError(null);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) return;

    const form = event.currentTarget;
    const data = new FormData(form);

    for (const field of ['name', 'location', 'message']) {
      const value = String(data.get(field) ?? '').trim();
      if (!value) {
        setFeedback({
          type: 'error',
          message: 'Upišite ime, mjesto na Braču i opis problema ili radova.',
        });
        return;
      }
      data.set(field, value);
    }

    // Netlify Forms accepts one file per registered field.
    photos.forEach((photo, index) => data.append(`photo-${index + 1}`, photo));

    setIsSubmitting(true);
    setFeedback(null);

    try {
      const response = await fetch('/', { method: 'POST', body: data });
      if (!response.ok) {
        throw new Error(`Form submission returned HTTP ${response.status}`);
      }

      form.reset();
      setPhotos([]);
      setPhotoError(null);
      setFeedback({
        type: 'success',
        message: 'Hvala! Vaš upit je poslan.',
      });
    } catch {
      setFeedback({
        type: 'error',
        message: 'Došlo je do pogreške pri slanju upita. Pokušajte ponovno.',
      });
    } finally {
      setIsSubmitting(false);
    }
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
          <h2
            ref={headingRef}
            tabIndex={-1}
            className="text-3xl font-bold uppercase tracking-widest text-white mb-4 focus:outline-none"
          >
            Pošaljite nam upit
          </h2>
          <div className="w-24 h-0.5 bg-white/70 mx-auto mb-6"></div>

          <p className="text-white/90 tracking-wider text-lg">
            Navedite mjesto na Braču i što vam je potrebno. Javit ćemo vam se
            radi dogovora.
          </p>
        </div>

        <form
          name="contact"
          method="POST"
          encType="multipart/form-data"
          data-netlify="true"
          onSubmit={handleSubmit}
          onChange={() => setFeedback(null)}
          aria-busy={isSubmitting}
          className="bg-white p-5 sm:p-6 md:p-8 rounded-xl shadow-2xl border border-white/20 text-slate-800"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>
              Ostavite ovo polje prazno <input name="bot-field" />
            </label>
          </p>

          <fieldset disabled={isSubmitting} className="min-w-0 space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="service" className={labelClassName}>
                  Usluga
                </label>
                <select
                  id="service"
                  name="service"
                  defaultValue={initialService ?? ''}
                  className={controlClassName}
                  required
                >
                  <option value="" disabled>
                    Odaberite uslugu
                  </option>
                  {Object.values(serviceNames).map((name) => (
                    <option key={name} value={name}>
                      {name}
                    </option>
                  ))}
                  <option value="Ostalo ili nisam siguran">
                    Ostalo / nisam siguran
                  </option>
                </select>
              </div>

              <div>
                <label htmlFor="location" className={labelClassName}>
                  Mjesto na Braču
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  placeholder="Npr. Splitska ili Supetar"
                  maxLength={100}
                  className={controlClassName}
                  required
                />
              </div>

              <div>
                <label htmlFor="urgency" className={labelClassName}>
                  Hitnost
                </label>
                <select
                  id="urgency"
                  name="urgency"
                  defaultValue=""
                  className={controlClassName}
                  required
                >
                  <option value="" disabled>
                    Odaberite hitnost
                  </option>
                  <option>Hitno (što prije)</option>
                  <option>U sljedećih nekoliko dana</option>
                  <option>Po dogovoru</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="message" className={labelClassName}>
                Opis problema ili radova
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                maxLength={3000}
                placeholder="Npr. curi voda ispod sudopera."
                className={controlClassName}
                required
              />
            </div>

            <div>
              <input
                type="file"
                id="photos"
                multiple
                accept={[...photoTypes, ...photoExtensions].join(',')}
                onChange={addPhotos}
                aria-describedby="photos-help"
                className="peer sr-only"
              />
              <label
                htmlFor="photos"
                className="inline-block cursor-pointer rounded border border-[#3480b1] px-4 py-2 text-sm font-bold text-[#265d81] hover:bg-blue-50 peer-focus-visible:ring-2 peer-focus-visible:ring-[#3480b1] peer-focus-visible:ring-offset-2 peer-disabled:cursor-not-allowed"
              >
                Dodaj fotografije (neobavezno)
              </label>
              <p
                id="photos-help"
                className="mt-2 font-['Marcellus'] text-sm text-slate-600"
              >
                Do {maxPhotoCount} fotografije i ukupno do {maxPhotoMegabytes}{' '}
                MB. JPG, PNG, WebP, HEIC ili HEIF. Priložite fotografije
                problema ili radova bez lica i osobnih dokumenata.
              </p>
              {photos.length > 0 && (
                <ul className="mt-3 space-y-2">
                  {photos.map((photo, index) => (
                    <li
                      key={`${photo.name}-${photo.lastModified}-${index}`}
                      className="flex items-center gap-3 rounded bg-slate-50 px-3 py-2 font-['Marcellus'] text-sm"
                    >
                      <span className="min-w-0 flex-1 break-all">
                        {photo.name}
                      </span>
                      <button
                        type="button"
                        aria-label={`Ukloni ${photo.name}`}
                        onClick={() => removePhoto(index)}
                        className="rounded px-2 py-1 text-[#265d81] underline"
                      >
                        Ukloni
                      </button>
                    </li>
                  ))}
                </ul>
              )}
              {photoError && (
                <p
                  role="alert"
                  className="mt-2 font-['Marcellus'] text-sm text-red-800"
                >
                  {photoError}
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 gap-6 border-t border-slate-200 pt-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className={labelClassName}>
                  Ime i prezime
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  autoComplete="name"
                  maxLength={100}
                  className={controlClassName}
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className={labelClassName}>
                  E-pošta
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="email"
                  maxLength={254}
                  className={controlClassName}
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className={labelClassName}>
                  Mobitel (neobavezno)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  autoComplete="tel"
                  maxLength={40}
                  className={controlClassName}
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#3480b1] text-white font-bold uppercase tracking-widest py-4 rounded hover:bg-blue-800 transition-colors shadow-md text-lg disabled:cursor-wait disabled:opacity-70"
            >
              {isSubmitting ? 'Slanje…' : 'Pošalji upit'}
            </button>
          </fieldset>

          {feedback && (
            <p
              role={feedback.type === 'error' ? 'alert' : 'status'}
              className={`mt-6 text-center p-4 rounded border font-['Marcellus'] tracking-wide ${
                feedback.type === 'success'
                  ? 'bg-green-50 text-green-800 border-green-200'
                  : 'bg-red-50 text-red-800 border-red-200'
              }`}
            >
              {feedback.message}
            </p>
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
