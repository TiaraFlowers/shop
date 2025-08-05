import { useTranslation } from 'react-i18next';

function Navbar({ toggleSidebar }) {
  const { t } = useTranslation();

  return (
    <div className="md:hidden navbar shadow-md p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">{t('Brand')}</h1>
      <button
        onClick={toggleSidebar}
        className="text-white text-3xl hover:text-gray-200 transition-colors"
      >
        ☰
      </button>
    </div>
  );
}

export default Navbar;