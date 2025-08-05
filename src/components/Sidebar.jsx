import { useTranslation } from 'react-i18next';
import { FaPhone, FaInstagram } from 'react-icons/fa';

function Sidebar({ isOpen, toggleSidebar }) {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === 'fa';

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
    document.documentElement.dir = lng === 'fa' ? 'rtl' : 'ltr';
  };

  return (
    <div
      className={`sidebar fixed inset-y-0 w-64 z-50 ${
        isOpen ? 'block' : 'hidden'
      } md:block ${isRtl ? 'right-0' : 'left-0'}`}
    >
      <div className="p-4 flex flex-col h-full">
        <a href="/shop/#/">
        <img
          src="./assets/images/logo.png"
          alt={t('Brand')}
          className="sidebar-logo mx-auto"
        />
        </a>
        <nav className="mt-6 flex-1">
          <a href="/shop/#/" className="block py-2" onClick={() => toggleSidebar()}>
            {t('Shop')}
          </a>
          <a href="/shop/#/about" className="block py-2" onClick={() => toggleSidebar()}>
            {t('About')}
          </a>
        </nav>
        <div className="mt-4 flex gap-2">
          <button
            onClick={() => changeLanguage('en')}
            className="language-button"
          >
            EN
          </button>
          <button
            onClick={() => changeLanguage('fa')}
            className="language-button"
          >
            FA
          </button>
        </div>
        <div className="mt-4 flex gap-4">
          <a href="tel:+989195517664" className="text-gray-700 hover:text-caterpillar-yellow">
            <FaPhone size={24} />
          </a>
          <a href="https://www.instagram.com/tiara.flowerarts/" className="text-gray-700 hover:text-caterpillar-yellow">
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;