import { useTranslation } from 'react-i18next';
import { FaPhone, FaInstagram, FaEnvelope } from 'react-icons/fa';

function About() {
  const { t } = useTranslation();

  // Define store environment images
  const storeImages = [
    {
      id: 1,
      src: './assets/images/store1.jpg',
      alt: t('Store Exterior'),
    },
    {
      id: 2,
      src: './assets/images/store2.jpg',
      alt: t('Store Interior'),
    },
    {
      id: 3,
      src: './assets/images/store3.jpg',
      alt: t('Workshop Area'),
    },
  ];

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">{t('About Tiara')}</h1>
      <p className="text-gray-600 mb-6">{t('About Description')}</p>

      {/* Store Environment Section */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('Our Store')}</h2>
        <p className="text-gray-600 mb-4">{t('Visit our beautiful store in Tehran.')}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
          {storeImages.map((image) => (
            <div key={image.id} className="product-card">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-48 object-cover rounded-t-md"
              />
            </div>
          ))}
        </div>
      </section>

      <div className="mt-6 flex gap-4">
        <a href="tel:+989195517664" className="text-gray-700 hover:text-caterpillar-yellow">
          <FaPhone size={24} />
        </a>
        <a
          href="https://www.instagram.com/tiara.flowerarts/"
          className="text-gray-700 hover:text-caterpillar-yellow"
        >
          <FaInstagram size={24} />
        </a>
        <a href="mailto:info@tiara.com" className="text-gray-700 hover:text-caterpillar-yellow">
          <FaEnvelope size={24} />
        </a>
      </div>
      <p className="mt-4 text-gray-700">{t('Address')}</p>
    </div>
  );
}

export default About;