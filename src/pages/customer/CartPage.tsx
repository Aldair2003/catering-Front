import React from 'react';

/**
 * Página del Carrito de Compras
 * Resumen de productos seleccionados y proceso de checkout
 */
const CartPage: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          🛒 Mi Carrito
        </h1>
        <p className="text-lg text-gray-600">
          Revisa tu pedido antes de confirmar
        </p>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-md">
        <p className="text-center text-gray-600">
          Tu carrito está vacío. ¡Agrega algunos productos desde el menú!
        </p>
      </div>
    </div>
  );
};

export default CartPage; 