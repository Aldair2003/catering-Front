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
  ArrowTrendingUpIcon
} from '@heroicons/react/24/outline';
import {
  ChartBarIcon as ChartBarIconSolid,
  UsersIcon as UsersIconSolid,
  CubeIcon as CubeIconSolid,
  TruckIcon as TruckIconSolid
} from '@heroicons/react/24/solid';

/**
 * Dashboard Principal de Administración Profesional
 * Panel de control con métricas principales del negocio
 * Diseño moderno con gradientes, animaciones y gráficos
 */
const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();

  // Datos mock para demostración
  const metrics = {
    totalOrders: 156,
    todayOrders: 12,
    totalRevenue: 45250,
    activeClients: 89,
    popularDish: 'Pollo a la Plancha',
    monthlyGrowth: 15.8,
    satisfaction: 4.8,
    pendingDeliveries: 8
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

  const quickActions = [
    {
      title: 'Métricas',
      description: 'Ver reportes detallados',
      icon: ChartBarIconSolid,
      color: 'from-blue-500 to-blue-600',
      hoverColor: 'hover:from-blue-600 hover:to-blue-700',
      path: '/admin/metrics'
    },
    {
      title: 'Inventario',
      description: 'Gestionar productos',
      icon: CubeIconSolid,
      color: 'from-green-500 to-green-600',
      hoverColor: 'hover:from-green-600 hover:to-green-700',
      path: '/admin/inventory'
    },
    {
      title: 'Entregas',
      description: 'Seguimiento de pedidos',
      icon: TruckIconSolid,
      color: 'from-orange-500 to-orange-600',
      hoverColor: 'hover:from-orange-600 hover:to-orange-700',
      path: '/admin/delivery'
    },
    {
      title: 'Clientes',
      description: 'Administrar usuarios',
      icon: UsersIconSolid,
      color: 'from-purple-500 to-purple-600',
      hoverColor: 'hover:from-purple-600 hover:to-purple-700',
      path: '/admin/clients'
    }
  ];

  return (
    <motion.div
      className="space-y-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Header */}
      <motion.div variants={itemVariants} className="text-center">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4">
          Dashboard Administrativo
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Panel de control integral para gestionar y monitorear todas las operaciones de PortoCatering
        </p>
      </motion.div>

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
                <span className="text-sm font-medium">+12%</span>
              </div>
            </div>
            <p className="text-sm font-medium text-gray-600 mb-1">Total Pedidos</p>
            <p className="text-3xl font-bold text-gray-800">{metrics.totalOrders}</p>
          </div>
        </motion.div>

        {/* Pedidos de Hoy */}
        <motion.div 
          className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 relative overflow-hidden group hover:shadow-xl"
          whileHover={{ y: -5 }}
          transition={{ duration: 0.2 }}
        >
          <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-full transform translate-x-6 -translate-y-6 group-hover:scale-110 transition-transform duration-300"></div>
          <div className="relative">
            <div className="flex items-center justify-between mb-4">
                             <div className="p-3 bg-gradient-to-br from-green-500 to-green-600 rounded-lg">
                 <ArrowTrendingUpIcon className="h-6 w-6 text-white" />
               </div>
              <div className="flex items-center text-green-600">
                <ArrowUpIcon className="h-4 w-4 mr-1" />
                <span className="text-sm font-medium">+5%</span>
              </div>
            </div>
            <p className="text-sm font-medium text-gray-600 mb-1">Pedidos Hoy</p>
            <p className="text-3xl font-bold text-gray-800">{metrics.todayOrders}</p>
          </div>
        </motion.div>

        {/* Ingresos Totales */}
        <motion.div 
          className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 relative overflow-hidden group hover:shadow-xl"
          whileHover={{ y: -5 }}
          transition={{ duration: 0.2 }}
        >
          <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full transform translate-x-6 -translate-y-6 group-hover:scale-110 transition-transform duration-300"></div>
          <div className="relative">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg">
                <CurrencyDollarIcon className="h-6 w-6 text-white" />
              </div>
              <div className="flex items-center text-green-600">
                <ArrowUpIcon className="h-4 w-4 mr-1" />
                <span className="text-sm font-medium">+{metrics.monthlyGrowth}%</span>
              </div>
            </div>
            <p className="text-sm font-medium text-gray-600 mb-1">Ingresos Totales</p>
            <p className="text-3xl font-bold text-gray-800">${metrics.totalRevenue.toLocaleString()}</p>
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
                <span className="text-sm font-medium">+8%</span>
              </div>
            </div>
            <p className="text-sm font-medium text-gray-600 mb-1">Clientes Activos</p>
            <p className="text-3xl font-bold text-gray-800">{metrics.activeClients}</p>
          </div>
        </motion.div>
      </motion.div>

      {/* Estadísticas adicionales */}
      <motion.div 
        className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        variants={itemVariants}
      >
        
        {/* Plato más popular */}
        <motion.div 
          className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-800 flex items-center">
              <StarIcon className="h-5 w-5 text-yellow-500 mr-2" />
              Plato Más Popular
            </h3>
            <div className="text-4xl">🍗</div>
          </div>
          <div className="space-y-3">
            <div>
              <p className="text-xl font-bold text-gray-800">{metrics.popularDish}</p>
              <p className="text-sm text-gray-600">45 pedidos este mes</p>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 h-2 rounded-full" style={{width: '78%'}}></div>
            </div>
            <p className="text-xs text-gray-500">78% de popularidad</p>
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
            Métricas de Rendimiento
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
              <span className="text-gray-600">Entregas Pendientes</span>
              <span className="text-orange-600 font-semibold">{metrics.pendingDeliveries}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Crecimiento Mensual</span>
              <div className="flex items-center text-green-600">
                <ArrowUpIcon className="h-4 w-4 mr-1" />
                <span className="font-semibold">+{metrics.monthlyGrowth}%</span>
              </div>
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