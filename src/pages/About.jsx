import { useTranslation } from 'react-i18next';
import { FaPhone, FaInstagram, FaEnvelope } from 'react-icons/fa';

function About() {
  const { t } = useTranslation();

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">{t('About Tiara')}</h1>
      <p className="text-gray-600">{t('About Description')}</p>
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