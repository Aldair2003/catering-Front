import React from 'react';

/**
 * Métricas y Reportes
 * Análisis detallado del negocio
 * 
 * Métricas incluidas:
 * - Total de pedidos realizados
 * - Pedidos por día/semana/mes
 * - Menú más solicitado
 * - Clientes recurrentes
 * - Ingresos totales
 */
const MetricsPage: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          📈 Métricas y Reportes
        </h1>
        <p className="text-lg text-gray-600">
          Análisis detallado del negocio
        </p>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-md">
        <p className="text-center text-gray-600">
          Módulo de métricas en desarrollo.
        </p>
      </div>
    </div>
  );
};

export default MetricsPage; 