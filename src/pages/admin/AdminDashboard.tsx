import React from 'react';

/**
 * Dashboard Principal de Administración
 * Panel de control con métricas principales del negocio
 * 
 * Métricas incluidas:
 * - Total de pedidos realizados
 * - Pedidos por día/semana/mes
 * - Menú más solicitado
 * - Clientes recurrentes
 * - Ingresos totales
 */
const AdminDashboard: React.FC = () => {
  // Datos mock para demostración
  const metrics = {
    totalOrders: 156,
    todayOrders: 12,
    totalRevenue: 45250,
    activeClients: 89,
    popularDish: 'Pollo a la Plancha'
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          📊 Dashboard Administrativo
        </h1>
        <p className="text-lg text-gray-600">
          Panel de control y métricas del negocio
        </p>
      </div>

      {/* Métricas principales */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Total de Pedidos */}
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Pedidos</p>
              <p className="text-3xl font-bold text-gray-800">{metrics.totalOrders}</p>
            </div>
            <div className="text-4xl text-blue-500">📋</div>
          </div>
        </div>

        {/* Pedidos de Hoy */}
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Pedidos Hoy</p>
              <p className="text-3xl font-bold text-gray-800">{metrics.todayOrders}</p>
            </div>
            <div className="text-4xl text-green-500">🎯</div>
          </div>
        </div>

        {/* Ingresos Totales */}
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Ingresos Totales</p>
              <p className="text-3xl font-bold text-gray-800">${metrics.totalRevenue.toLocaleString()}</p>
            </div>
            <div className="text-4xl text-orange-500">💰</div>
          </div>
        </div>

        {/* Clientes Activos */}
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Clientes Activos</p>
              <p className="text-3xl font-bold text-gray-800">{metrics.activeClients}</p>
            </div>
            <div className="text-4xl text-purple-500">👥</div>
          </div>
        </div>
      </div>

      {/* Gráficos y estadísticas adicionales */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Plato más popular */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">🏆 Plato Más Popular</h3>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xl font-bold text-gray-800">{metrics.popularDish}</p>
              <p className="text-sm text-gray-600">45 pedidos este mes</p>
            </div>
            <div className="text-4xl">🍗</div>
          </div>
        </div>

        {/* Actividad reciente */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">📈 Tendencias</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Ventas este mes</span>
              <span className="text-green-600 font-semibold">+15%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Nuevos clientes</span>
              <span className="text-green-600 font-semibold">+8%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Satisfacción</span>
              <span className="text-green-600 font-semibold">4.8/5.0</span>
            </div>
          </div>
        </div>
      </div>

      {/* Acciones rápidas */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">⚡ Acciones Rápidas</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <button className="bg-blue-500 text-white p-4 rounded-lg hover:bg-blue-600 transition-colors">
            <div className="text-2xl mb-2">📊</div>
            <div className="text-sm font-medium">Ver Métricas</div>
          </button>
          <button className="bg-green-500 text-white p-4 rounded-lg hover:bg-green-600 transition-colors">
            <div className="text-2xl mb-2">📦</div>
            <div className="text-sm font-medium">Gestionar Inventario</div>
          </button>
          <button className="bg-orange-500 text-white p-4 rounded-lg hover:bg-orange-600 transition-colors">
            <div className="text-2xl mb-2">🚚</div>
            <div className="text-sm font-medium">Ver Entregas</div>
          </button>
          <button className="bg-purple-500 text-white p-4 rounded-lg hover:bg-purple-600 transition-colors">
            <div className="text-2xl mb-2">👥</div>
            <div className="text-sm font-medium">Gestionar Clientes</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard; 