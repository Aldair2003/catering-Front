import React from 'react';
import ChatSidebar from '../../components/chatbot/ChatSidebar';

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
            <div className="text-4xl text-green-500">📅</div>
          </div>
        </div>

        {/* Ingresos Totales */}
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-yellow-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Ingresos Totales</p>
              <p className="text-3xl font-bold text-gray-800">${metrics.totalRevenue}</p>
            </div>
            <div className="text-4xl text-yellow-500">💰</div>
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

      {/* Sección de accesos rápidos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Gestión de Clientes */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="text-center">
            <div className="text-5xl mb-4">👥</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Gestión de Clientes
            </h3>
            <p className="text-gray-600 mb-4">
              Administra clientes, edita información y ve historial de pedidos
            </p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
              Ir a Clientes
            </button>
          </div>
        </div>

        {/* Inventario */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="text-center">
            <div className="text-5xl mb-4">📦</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Inventario
            </h3>
            <p className="text-gray-600 mb-4">
              Control básico de insumos y stock disponible
            </p>
            <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors">
              Ver Inventario
            </button>
          </div>
        </div>

        {/* Planificación de Entregas */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="text-center">
            <div className="text-5xl mb-4">🚚</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Entregas
            </h3>
            <p className="text-gray-600 mb-4">
              Planifica y gestiona las entregas programadas
            </p>
            <button className="bg-yellow-600 text-white px-4 py-2 rounded-md hover:bg-yellow-700 transition-colors">
              Planificar
            </button>
          </div>
        </div>
      </div>

      {/* Información adicional */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          📈 Resumen del Día
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-gray-600">
              <span className="font-semibold">Plato más pedido:</span> {metrics.popularDish}
            </p>
          </div>
          <div>
            <p className="text-gray-600">
              <span className="font-semibold">Estado del sistema:</span> 
              <span className="text-green-600 ml-2">✅ Operativo</span>
            </p>
          </div>
        </div>
      </div>
      {/* ChatBot sidebar solo en dashboard */}
      <ChatSidebar />
    </div>
  );
};

export default AdminDashboard; 