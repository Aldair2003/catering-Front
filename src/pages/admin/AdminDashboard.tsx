import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  ChartBarIcon,
  UsersIcon,
  CubeIcon,
  TruckIcon,
  CurrencyDollarIcon,
  ClipboardDocumentListIcon,
  StarIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  ArrowTrendingUpIcon,
  ExclamationTriangleIcon,
  ClockIcon,
  CalendarDaysIcon,
  BellAlertIcon
} from '@heroicons/react/24/outline';
import {
  ChartBarIcon as ChartBarIconSolid,
  UsersIcon as UsersIconSolid,
  CubeIcon as CubeIconSolid,
  TruckIcon as TruckIconSolid
} from '@heroicons/react/24/solid';

/**
 * Dashboard Principal de Administración PortoCatering
 * Panel de control integral para gestión de catering automatizado
 * 
 * Funcionalidades específicas de catering:
 * - Métricas de pedidos y eventos
 * - Control de inventario de insumos
 * - Planificación de entregas
 * - Análisis de satisfacción del cliente
 * - Alertas de stock bajo y entregas urgentes
 */
const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();

  // Datos realistas para servicio de catering
  const metrics = {
    // Métricas principales
    totalOrders: 234,
    todayOrders: 18,
    weeklyOrders: 67,
    totalRevenue: 128450,
    monthlyRevenue: 34200,
    activeClients: 142,
    
    // Métricas específicas de catering
    upcomingEvents: 12,
    pendingDeliveries: 8,
    lowStockItems: 5,
    satisfaction: 4.7,
    avgOrderValue: 548,
    popularCategory: 'Eventos Corporativos',
    topDish: 'Menú Ejecutivo Completo',
    
    // Estadísticas de crecimiento
    monthlyGrowth: 18.5,
    clientRetention: 87.3,
    onTimeDelivery: 94.2,
    
    // Alertas y pendientes
    urgentDeliveries: 3,
    expiringSoon: 7,
    newOrders: 5
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  // Acciones rápidas específicas para catering
  const quickActions = [
    {
      title: 'Nuevo Evento',
      description: 'Crear pedido de catering',
      icon: CalendarDaysIcon,
      color: 'from-emerald-500 to-emerald-600',
      hoverColor: 'hover:from-emerald-600 hover:to-emerald-700',
      path: '/admin/orders/new',
      urgent: false
    },
    {
      title: 'Inventario',
      description: 'Gestionar insumos',
      icon: CubeIconSolid,
      color: 'from-amber-500 to-amber-600',
      hoverColor: 'hover:from-amber-600 hover:to-amber-700',
      path: '/admin/inventory',
      urgent: metrics.lowStockItems > 0,
      badge: metrics.lowStockItems
    },
    {
      title: 'Entregas Hoy',
      description: 'Planificar rutas',
      icon: TruckIconSolid,
      color: 'from-blue-500 to-blue-600',
      hoverColor: 'hover:from-blue-600 hover:to-blue-700',
      path: '/admin/delivery',
      urgent: metrics.urgentDeliveries > 0,
      badge: metrics.todayOrders
    },
    {
      title: 'Métricas',
      description: 'Reportes detallados',
      icon: ChartBarIconSolid,
      color: 'from-purple-500 to-purple-600',
      hoverColor: 'hover:from-purple-600 hover:to-purple-700',
      path: '/admin/metrics',
      urgent: false
    }
  ];

  // Próximos eventos importantes
  const upcomingEvents = [
    {
      id: 1,
      title: 'Conferencia Tech Summit',
      date: 'Hoy 14:00',
      guests: 150,
      status: 'En preparación',
      priority: 'high'
    },
    {
      id: 2,
      title: 'Boda Jardín Botánico',
      date: 'Mañana 18:00',
      guests: 80,
      status: 'Confirmado',
      priority: 'medium'
    },
    {
      id: 3,
      title: 'Reunión Ejecutiva',
      date: '15 Dic 12:00',
      guests: 25,
      status: 'Pendiente confirmación',
      priority: 'low'
    }
  ];

  // Alertas del sistema
  const systemAlerts = [
    {
      type: 'warning',
      title: 'Stock Bajo',
      message: `${metrics.lowStockItems} ingredientes requieren reposición`,
      action: () => navigate('/admin/inventory')
    },
    {
      type: 'urgent',
      title: 'Entregas Urgentes',
      message: `${metrics.urgentDeliveries} entregas programadas en las próximas 2 horas`,
      action: () => navigate('/admin/delivery')
    },
    {
      type: 'info',
      title: 'Nuevos Pedidos',
      message: `${metrics.newOrders} pedidos nuevos requieren confirmación`,
      action: () => navigate('/admin/orders')
    }
  ];

  return (
    <motion.div
      className="space-y-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Header con información del día */}
      <motion.div variants={itemVariants} className="text-center relative">
        <div className="absolute top-0 right-0 flex items-center space-x-2">
          <div className="text-sm text-gray-600">
            <span className="font-medium">Portoviejo, Ecuador</span>
          </div>
          <div className="text-sm text-gray-600">
            {new Date().toLocaleDateString('es-ES', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </div>
        </div>
        
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent mb-4">
          Dashboard PortoCatering
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Centro de control para automatización de catering - Gestiona eventos, inventario y entregas desde un solo lugar
        </p>
        
        {/* Resumen rápido del día */}
        <div className="mt-6 flex justify-center space-x-8 text-sm">
          <div className="text-center">
            <span className="block text-2xl font-bold text-orange-600">{metrics.todayOrders}</span>
            <span className="text-gray-600">Pedidos Hoy</span>
          </div>
          <div className="text-center">
            <span className="block text-2xl font-bold text-green-600">{metrics.upcomingEvents}</span>
            <span className="text-gray-600">Eventos Próximos</span>
          </div>
          <div className="text-center">
            <span className="block text-2xl font-bold text-blue-600">{metrics.pendingDeliveries}</span>
            <span className="text-gray-600">Entregas Pendientes</span>
          </div>
        </div>
      </motion.div>

      {/* Alertas del sistema */}
      {systemAlerts.length > 0 && (
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {systemAlerts.map((alert, index) => (
            <motion.div
              key={index}
              className={`p-4 rounded-lg border-l-4 cursor-pointer transition-all hover:shadow-md ${
                alert.type === 'urgent' 
                  ? 'bg-red-50 border-red-500 hover:bg-red-100' 
                  : alert.type === 'warning'
                  ? 'bg-yellow-50 border-yellow-500 hover:bg-yellow-100'
                  : 'bg-blue-50 border-blue-500 hover:bg-blue-100'
              }`}
              onClick={alert.action}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center">
                <ExclamationTriangleIcon className={`h-5 w-5 mr-3 ${
                  alert.type === 'urgent' ? 'text-red-600' : 
                  alert.type === 'warning' ? 'text-yellow-600' : 'text-blue-600'
                }`} />
                <div>
                  <h4 className="font-semibold text-gray-800">{alert.title}</h4>
                  <p className="text-sm text-gray-600">{alert.message}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}

      {/* Métricas principales */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        variants={itemVariants}
      >
        
        {/* Total de Pedidos */}
        <motion.div 
          className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 relative overflow-hidden group hover:shadow-xl"
          whileHover={{ y: -5 }}
          transition={{ duration: 0.2 }}
        >
          <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full transform translate-x-6 -translate-y-6 group-hover:scale-110 transition-transform duration-300"></div>
          <div className="relative">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg">
                <ClipboardDocumentListIcon className="h-6 w-6 text-white" />
              </div>
              <div className="flex items-center text-green-600">
                <ArrowUpIcon className="h-4 w-4 mr-1" />
                <span className="text-sm font-medium">+{metrics.monthlyGrowth}%</span>
              </div>
            </div>
            <p className="text-sm font-medium text-gray-600 mb-1">Total Pedidos</p>
            <p className="text-3xl font-bold text-gray-800">{metrics.totalOrders}</p>
            <p className="text-xs text-gray-500 mt-1">{metrics.weeklyOrders} esta semana</p>
          </div>
        </motion.div>

        {/* Ingresos Mensuales */}
        <motion.div 
          className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 relative overflow-hidden group hover:shadow-xl"
          whileHover={{ y: -5 }}
          transition={{ duration: 0.2 }}
        >
          <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-full transform translate-x-6 -translate-y-6 group-hover:scale-110 transition-transform duration-300"></div>
          <div className="relative">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-gradient-to-br from-green-500 to-green-600 rounded-lg">
                <CurrencyDollarIcon className="h-6 w-6 text-white" />
              </div>
              <div className="flex items-center text-green-600">
                <ArrowUpIcon className="h-4 w-4 mr-1" />
                <span className="text-sm font-medium">+15.2%</span>
              </div>
            </div>
            <p className="text-sm font-medium text-gray-600 mb-1">Ingresos del Mes</p>
            <p className="text-3xl font-bold text-gray-800">${metrics.monthlyRevenue.toLocaleString()}</p>
            <p className="text-xs text-gray-500 mt-1">Promedio: ${metrics.avgOrderValue}/pedido</p>
          </div>
        </motion.div>

        {/* Clientes Activos */}
        <motion.div 
          className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 relative overflow-hidden group hover:shadow-xl"
          whileHover={{ y: -5 }}
          transition={{ duration: 0.2 }}
        >
          <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full transform translate-x-6 -translate-y-6 group-hover:scale-110 transition-transform duration-300"></div>
          <div className="relative">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg">
                <UsersIcon className="h-6 w-6 text-white" />
              </div>
              <div className="flex items-center text-green-600">
                <ArrowUpIcon className="h-4 w-4 mr-1" />
                <span className="text-sm font-medium">+8.7%</span>
              </div>
            </div>
            <p className="text-sm font-medium text-gray-600 mb-1">Clientes Activos</p>
            <p className="text-3xl font-bold text-gray-800">{metrics.activeClients}</p>
            <p className="text-xs text-gray-500 mt-1">Retención: {metrics.clientRetention}%</p>
          </div>
        </motion.div>

        {/* Entregas del Día */}
        <motion.div 
          className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 relative overflow-hidden group hover:shadow-xl"
          whileHover={{ y: -5 }}
          transition={{ duration: 0.2 }}
        >
          <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full transform translate-x-6 -translate-y-6 group-hover:scale-110 transition-transform duration-300"></div>
          <div className="relative">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg">
                <TruckIcon className="h-6 w-6 text-white" />
              </div>
              <div className="flex items-center text-green-600">
                <ClockIcon className="h-4 w-4 mr-1" />
                <span className="text-sm font-medium">{metrics.onTimeDelivery}%</span>
              </div>
            </div>
            <p className="text-sm font-medium text-gray-600 mb-1">Entregas Hoy</p>
            <p className="text-3xl font-bold text-gray-800">{metrics.todayOrders}</p>
            <p className="text-xs text-gray-500 mt-1">{metrics.pendingDeliveries} pendientes</p>
          </div>
        </motion.div>
      </motion.div>

      {/* Sección de información detallada */}
      <motion.div 
        className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        variants={itemVariants}
      >
        
        {/* Próximos eventos */}
        <motion.div 
          className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-800 flex items-center">
              <CalendarDaysIcon className="h-5 w-5 text-orange-500 mr-2" />
              Próximos Eventos
            </h3>
            <span className="text-sm text-gray-500">{upcomingEvents.length} programados</span>
          </div>
          <div className="space-y-4">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="flex items-center justify-between p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                <div>
                  <p className="font-medium text-gray-800">{event.title}</p>
                  <p className="text-sm text-gray-600">{event.date} • {event.guests} invitados</p>
                </div>
                <div className="text-right">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    event.priority === 'high' 
                      ? 'bg-red-100 text-red-800' 
                      : event.priority === 'medium'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-green-100 text-green-800'
                  }`}>
                    {event.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Métricas de rendimiento */}
        <motion.div 
          className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <h3 className="text-lg font-semibold text-gray-800 mb-6 flex items-center">
            <ChartBarIcon className="h-5 w-5 text-blue-500 mr-2" />
            Rendimiento del Negocio
          </h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Satisfacción del Cliente</span>
              <div className="flex items-center">
                <div className="flex text-yellow-400 mr-2">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className={`h-4 w-4 ${i < Math.floor(metrics.satisfaction) ? 'fill-current' : ''}`} />
                  ))}
                </div>
                <span className="text-green-600 font-semibold">{metrics.satisfaction}/5.0</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Categoría Más Popular</span>
              <span className="text-orange-600 font-semibold">{metrics.popularCategory}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Plato Estrella</span>
              <span className="text-blue-600 font-semibold">{metrics.topDish}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Entregas Puntuales</span>
              <div className="flex items-center text-green-600">
                <ArrowUpIcon className="h-4 w-4 mr-1" />
                <span className="font-semibold">{metrics.onTimeDelivery}%</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Ingredientes por Reponer</span>
              <span className={`font-semibold ${metrics.lowStockItems > 0 ? 'text-red-600' : 'text-green-600'}`}>
                {metrics.lowStockItems} items
              </span>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Acciones rápidas */}
      <motion.div 
        className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
        variants={itemVariants}
      >
        <h3 className="text-lg font-semibold text-gray-800 mb-6">Acciones Rápidas</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickActions.map((action, index) => {
            const Icon = action.icon;
            return (
              <motion.button
                key={action.title}
                onClick={() => navigate(action.path)}
                className={`p-6 rounded-xl bg-gradient-to-br ${action.color} ${action.hoverColor} text-white transition-all duration-200 group relative overflow-hidden`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Badge de notificación */}
                {action.badge && action.badge > 0 && (
                  <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center">
                    {action.badge}
                  </div>
                )}

                {/* Indicador de urgencia */}
                {action.urgent && (
                  <div className="absolute top-2 right-2">
                    <BellAlertIcon className="h-4 w-4 text-yellow-300 animate-pulse" />
                  </div>
                )}

                <div className="absolute top-0 right-0 w-16 h-16 bg-white bg-opacity-10 rounded-full transform translate-x-4 -translate-y-4 group-hover:scale-110 transition-transform duration-300"></div>
                <div className="relative">
                  <Icon className="h-8 w-8 mb-3 mx-auto" />
                  <div className="text-sm font-medium mb-1">{action.title}</div>
                  <div className="text-xs opacity-90">{action.description}</div>
                </div>
              </motion.button>
            );
          })}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AdminDashboard; 