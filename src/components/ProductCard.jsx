import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ProductModal from './ProductModal';

function ProductCard({ product }) {
  const { i18n } = useTranslation();
  const lang = i18n.language;
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        className="border rounded-lg p-4 shadow-md hover:shadow-lg cursor-pointer bg-white"
        onClick={() => setIsModalOpen(true)}
      >
        <img
          src={product.image}
          alt={product.title[lang]}
          className="w-full h-48 object-cover rounded-md"
        />
        <h2 className="text-xl font-semibold mt-2 text-gray-800">{product.title[lang]}</h2>
        <p className="text-gray-600">{product.description[lang]}</p>
      </div>
      {isModalOpen && (
        <ProductModal product={product} closeModal={() => setIsModalOpen(false)} />
      )}
    </>
  );
}

export default ProductCard;