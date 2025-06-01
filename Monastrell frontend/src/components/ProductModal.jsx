import React from "react";

const ProductModal = ({ isOpen, product, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 w-96">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-900">{product.name}</h2>
          <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Cerrar
        </button>
        </div>
        <img
          src={product.image}
          alt={product.name}
          className="mt-4 w-full h-48 object-cover rounded-md"
        />
        <p className="mt-4 text-gray-600">{product.extraDetails}</p>
        <p className="mt-4 text-lg font-semibold text-gray-900">{product.price}</p>
      </div>
    </div>
  );
};

export default ProductModal;






