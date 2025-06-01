import React, { useState, useEffect } from "react";
import StoreLayout from "/src/components/StoreLayout";
import SocialButtons from "/src/components/SocialButtons";
import ProductModal from "/src/components/ProductModal";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:4000/api/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const handleOpenModal = (product) => {
    setSelectedProduct(product);
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setSelectedProduct(null);
  };

  return (
    <StoreLayout>
      <div className="pb-24">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Productos</h2>
        <div className="relative mt-4">
          <div className="relative -mb-6 w-full overflow-x-auto pb-4">
            {loading ? (
              <div className="text-center py-10 text-gray-500">Cargando productos...</div>
            ) : (
              <ul role="list" className="mx-4 inline-flex space-x-8 sm:mx-6 lg:mx-0 lg:grid lg:grid-cols-5 lg:gap-x-8 lg:space-x-0 lg:w-full">
                {products.map((product) => (
                  <li key={product.id} className="inline-flex w-full flex-col text-center">
                    <div className="group relative">
                      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="h-full w-full object-cover object-center group-hover:opacity-75"
                        />
                      </div>
                      <div className="mt-6">
                        <p className="text-sm text-gray-500">{product.description}</p>
                        <h3 className="mt-1 font-semibold text-gray-900">
                          <a href="#" onClick={() => handleOpenModal(product)}>
                            <span className="absolute inset-0"></span>
                            {product.name}
                          </a>
                        </h3>
                        <p className="mt-1 text-gray-900">{product.price}</p>
                        <button
                          onClick={() => handleOpenModal(product)}
                          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                        >
                          Ver más
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      {/* Modal */}
      {isOpen && selectedProduct && (
        <ProductModal
          isOpen={isOpen}
          product={selectedProduct}
          onClose={handleCloseModal}
        />
      )}

      <div className="fixed bottom-0 right-0 z-50 p-4">
        <SocialButtons />
      </div>
    </StoreLayout>
  );
};

export default Products;





