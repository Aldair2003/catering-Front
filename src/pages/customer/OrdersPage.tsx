import React from 'react';

/**
 * Página de Pedidos del Cliente
 * Historial y estado de pedidos realizados
 */
const OrdersPage: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          📋 Mis Pedidos
        </h1>
        <p className="text-lg text-gray-600">
          Historial y estado de tus pedidos
        </p>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-md">
        <p className="text-center text-gray-600">
          Aún no has realizado ningún pedido.
        </p>
      </div>
    </div>
  );
};

export default OrdersPage; 