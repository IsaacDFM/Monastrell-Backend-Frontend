import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Account from '../pages/Account'; // Ajusta la ruta si es necesario

const StoreLayout = ({ children }) => {
  const [accountOpen, setAccountOpen] = useState(false);
  const user = JSON.parse(localStorage.getItem('user') || 'null');

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    setAccountOpen(false);
    window.location.reload();
  };

  return (
    <div className="bg-white min-h-screen">
      <input type="checkbox" id="cartToggle" className="hidden peer" />

      {/* Header */}
      <header className="w-full bg-white shadow-md p-4 fixed top-0 left-0 z-20">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Desktop */}
          <div className="hidden md:flex w-full justify-between items-center">
            <div className="text-lg font-bold">Monastrell</div>
            <nav className="flex space-x-4">
              <Link to="/" className="text-gray-700 hover:text-gray-900">Inicio</Link>
              <a href="#" className="text-gray-700 hover:text-gray-900">Tienda</a>
              <a href="#" className="text-gray-700 hover:text-gray-900">Información</a>
            </nav>
            <div className="flex space-x-4 items-center">
              {/* Cuenta */}
              {user ? (
                <div className="flex items-center space-x-2">
                  <span className="text-gray-700">Hola, {user.name}</span>
                  <button onClick={handleLogout} className="text-blue-500 underline">Cerrar sesión</button>
                </div>
              ) : (
                <button
                  onClick={() => setAccountOpen(true)}
                  className="text-gray-700 hover:text-gray-900"
                >
                  Cuenta
                </button>
              )}

              {/* Carrito */}
              <label htmlFor="cartToggle" className="cursor-pointer text-gray-700 hover:text-gray-900">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-2 8h14l-2-8m-5 0V5m0 10a1 1 0 101 1m-5-5a1 1 0 101 1" />
                </svg>
              </label>
            </div>
          </div>

          {/* Mobile */}
          <div className="md:hidden flex items-center justify-between w-full">
            <button className="text-gray-700 hover:text-gray-900">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
            <div className="text-lg font-bold">Monastrell</div>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="mt-16 md:mt-20 p-4 max-w-7xl mx-auto">
        {children}
      </main>

      {/* Footer Mobile */}
      <footer className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t shadow-md">
        <div className="flex justify-around items-center p-2">
          <a href="#" className="text-gray-700 hover:text-gray-900 flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12h18M3 6h18M3 18h18" />
            </svg>
            <span className="text-xs">Menu</span>
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900 flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5v14" />
            </svg>
            <span className="text-xs">Shop</span>
          </a>
          {/* Cuenta mobile */}
          {user ? (
            <div className="text-xs text-gray-700 flex flex-col items-center">
              <span>{user.name}</span>
              <button onClick={handleLogout} className="text-blue-500 underline text-xs">Salir</button>
            </div>
          ) : (
            <button
              onClick={() => setAccountOpen(true)}
              className="text-gray-700 hover:text-gray-900 flex flex-col items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              <span className="text-xs">Account</span>
            </button>
          )}
          {/* Carrito mobile */}
          <label htmlFor="cartToggle" className="cursor-pointer text-gray-700 hover:text-gray-900 flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7h18M3 12h18m-7 6h7" />
            </svg>
            <span className="text-xs">Basket</span>
          </label>
        </div>
      </footer>

      {/* Overlay Carrito */}
      <div id="cartOverlay" className="fixed inset-0 z-30 bg-black bg-opacity-50 opacity-0 pointer-events-none peer-checked:opacity-100 peer-checked:pointer-events-auto transition-opacity duration-300 ease-in-out" />

      {/* Drawer Carrito */}
      <div id="cartDrawer" className="fixed top-0 right-0 h-full w-80 md:w-96 bg-white shadow-lg transform translate-x-full peer-checked:translate-x-0 transition-transform duration-300 ease-in-out z-40 p-4 md:max-w-xs">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold">Carrito de Compras</h2>
          <label htmlFor="cartToggle" className="cursor-pointer text-gray-500 hover:text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </label>
        </div>
        <p className="text-gray-700">Tu carrito esta vacio</p>
      </div>

      {/* Modal de Cuenta */}
      {accountOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="relative">
            <Account onLogin={() => setAccountOpen(false)} />
            <button
              className="absolute top-2 right-2 text-gray-600 text-2xl"
              onClick={() => setAccountOpen(false)}
              aria-label="Cerrar"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default StoreLayout;


