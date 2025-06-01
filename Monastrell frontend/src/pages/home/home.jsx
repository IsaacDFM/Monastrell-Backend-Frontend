import React from "react";
import { Link } from "react-router-dom";
import StoreLayout from "/src/components/StoreLayout";
import SocialButtons from "/src/components/SocialButtons";

const Home = () => {
  return (
    <StoreLayout>
      <div className="flex justify-center items-center min-h-screen">
        <div className="max-w-[720px] mx-auto">
          <div
            className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40"
          >
            <img
              src="https://csaconsultores.com/wp-content/uploads/2022/09/peligros-alimentarios-en-la-reposteria.png" // Reemplaza con tu imagen de fondo
              alt="Imagen de repostería"
              className="w-full h-full object-cover object-center"
            />
          </div>

          <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
            <div className="p-6">
              <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                Bienvenido a Monastrell
              </h5>
              <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                Monastrell es tu lugar ideal para descubrir los mejores postres
                caseros. En nuestro sitio podrás encontrar una variedad de deliciosas
                opciones de repostería, desde pasteles, galletas, cupcakes y mucho más.
                Nos especializamos en productos frescos y hechos con amor para
                endulzar tu día.
              </p>
            </div>

            <div className="p-6 pt-0">
              <Link
                to="/productos"
                className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
              >
                Ver productos
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 right-0 z-50 p-4">
        <SocialButtons />
      </div>
    </StoreLayout>
  );
};

export default Home;






