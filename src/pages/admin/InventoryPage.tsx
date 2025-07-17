import React from 'react';

/**
 * Gestión de Inventario
 * Control básico de insumos y stock
 * 
 * Funcionalidades:
 * - Lista de insumos disponibles
 * - Control de stock básico
 * - Alertas de stock bajo
 * - Registro de entradas y salidas
 */
const InventoryPage: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          📦 Gestión de Inventario
        </h1>
        <p className="text-lg text-gray-600">
          Control básico de insumos y stock
        </p>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-md">
        <p className="text-center text-gray-600">
          Módulo de inventario en desarrollo.
        </p>
      </div>
    </div>
  );
};

export default InventoryPage; 