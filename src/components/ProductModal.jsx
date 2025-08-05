import { useState } from 'react';
import { useTranslation } from 'react-i18next';

function ProductModal({ product, closeModal }) {
  const { i18n, t } = useTranslation();
  const lang = i18n.language;
  const [mainImage, setMainImage] = useState(product.image);

  const handlePurchaseCall = () => {
    window.location.href = 'tel:+989195517664';
  };

  const handlePurchaseWhatsApp = () => {
    const message = t('WhatsApp Message', { title: product.title[lang] });
    window.location.href = `https://wa.me/989195517664?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="product-modal">
        <button
          onClick={closeModal}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
        >
          X
        </button>
        <img
          src={mainImage}
          alt={product.title[lang]}
          className="w-full h-64 object-cover"
        />
        <div className="flex gap-2 mt-2">
          {product.thumbnails.map((thumb, index) => (
            <img
              key={index}
              src={thumb}
              alt={`Thumbnail ${index}`}
              className="w-16 h-16 object-cover rounded-md cursor-pointer hover:opacity-80"
              onClick={() => setMainImage(thumb)}
            />
          ))}
        </div>
        <h2 className="text-2xl font-bold mt-4 text-gray-800">{product.title[lang]}</h2>
        <p className="text-gray-600">{t(product.description[lang])}</p>
        <p className="text-gray-700 mt-2">{t('Material')}: {product.material[lang]}</p>
        <p className="text-gray-700">{t('Dimensions')}: {product.dimensions[lang]}</p>
        <p className="text-gray-700 font-semibold">{t('Price')}: {product.price[lang]}</p>
        <div className="mt-4 flex gap-2">
          <button
            onClick={handlePurchaseCall}
            className="purchase-button"
          >
            {t('Call to Purchase')}
          </button>
          <button
            onClick={handlePurchaseWhatsApp}
            className="purchase-button"
          >
            {t('Purchase via WhatsApp')}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductModal;