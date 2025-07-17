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
  ArrowTrendingUpIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
} from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';

// Registrar componentes de Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();

  // Datos simplificados
  const stats = [
    {
      title: 'Pedidos Hoy',
      value: '18',
      change: '+12%',
      icon: ClipboardDocumentListIcon,
      color: 'bg-blue-500',
      trend: 'up'
    },
    {
      title: 'Ingresos',
      value: '$34,200',
      change: '+8.2%',
      icon: CurrencyDollarIcon,
      color: 'bg-green-500',
      trend: 'up'
    },
    {
      title: 'Clientes',
      value: '142',
      change: '+5.1%',
      icon: UsersIcon,
      color: 'bg-purple-500',
      trend: 'up'
    },
    {
      title: 'Entregas',
      value: '8',
      change: '2 urgentes',
      icon: TruckIcon,
      color: 'bg-orange-500',
      trend: 'urgent'
    }
  ];

  const quickActions = [
    {
      title: 'Gestión de Clientes',
      description: 'Ver y administrar clientes',
      icon: UsersIcon,
      path: '/admin/clients',
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Inventario',
      description: 'Control de stock',
      icon: CubeIcon,
      path: '/admin/inventory',
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Entregas',
      description: 'Planificar rutas',
      icon: TruckIcon,
      path: '/admin/delivery',
      color: 'from-orange-500 to-orange-600'
    },
    {
      title: 'Métricas',
      description: 'Análisis y reportes',
      icon: ChartBarIcon,
      path: '/admin/metrics',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  const recentActivity = [
    { id: 1, text: 'Nuevo pedido de María González', time: 'Hace 5 min', type: 'order' },
    { id: 2, text: 'Stock bajo: Arroz blanco', time: 'Hace 15 min', type: 'warning' },
    { id: 3, text: 'Entrega completada: Evento Corporativo', time: 'Hace 30 min', type: 'success' },
    { id: 4, text: 'Nuevo cliente registrado', time: 'Hace 1 hora', type: 'info' }
  ];

  // Datos para el gráfico de ventas semanales
  const weeklyData = {
    labels: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
    datasets: [
      {
        label: 'Ventas ($)',
        data: [2400, 3200, 2800, 4100, 3800, 5200, 4600],
        borderColor: 'rgb(249, 115, 22)', // orange-500
        backgroundColor: 'rgba(249, 115, 22, 0.1)',
        tension: 0.4,
        fill: true,
      },
      {
        label: 'Pedidos',
        data: [8, 12, 10, 15, 14, 18, 16],
        borderColor: 'rgb(59, 130, 246)', // blue-500
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        tension: 0.4,
        fill: true,
        yAxisID: 'y1',
      }
    ],
  };

  // Opciones del gráfico
  const chartOptions = {
    responsive: true,
    interaction: {
      mode: 'index' as const,
      intersect: false,
    },
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: false,
      },
    },
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: 'Días de la Semana'
        }
      },
      y: {
        type: 'linear' as const,
        display: true,
        position: 'left' as const,
        title: {
          display: true,
          text: 'Ventas ($)'
        },
      },
      y1: {
        type: 'linear' as const,
        display: true,
        position: 'right' as const,
        title: {
          display: true,
          text: 'Pedidos'
        },
        grid: {
          drawOnChartArea: false,
        },
      },
    },
  };

  // Datos para gráfico de barras de productos más vendidos
  const topProductsData = {
    labels: ['Pollo a la Plancha', 'Ensalada César', 'Pasta Alfredo', 'Salmón Grillado', 'Tarta de Chocolate'],
    datasets: [
      {
        label: 'Unidades Vendidas',
        data: [45, 38, 32, 28, 22],
        backgroundColor: [
          'rgba(249, 115, 22, 0.8)', // orange
          'rgba(59, 130, 246, 0.8)', // blue
          'rgba(16, 185, 129, 0.8)', // green
          'rgba(139, 92, 246, 0.8)', // purple
          'rgba(236, 72, 153, 0.8)', // pink
        ],
        borderColor: [
          'rgba(249, 115, 22, 1)',
          'rgba(59, 130, 246, 1)',
          'rgba(16, 185, 129, 1)',
          'rgba(139, 92, 246, 1)',
          'rgba(236, 72, 153, 1)',
        ],
        borderWidth: 2,
        borderRadius: 6,
      },
    ],
  };

  const barOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Productos'
        }
      },
      y: {
        title: {
          display: true,
          text: 'Unidades Vendidas'
        }
      },
    },
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard Administrativo</h1>
        <p className="text-gray-600">Bienvenido a PortoCatering - Gestión integral de catering</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
              </div>
              <div className={`p-3 rounded-lg ${stat.color}`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="flex items-center mt-3">
              {stat.trend === 'up' && <ArrowTrendingUpIcon className="w-4 h-4 text-green-500 mr-1" />}
              {stat.trend === 'urgent' && <ExclamationTriangleIcon className="w-4 h-4 text-red-500 mr-1" />}
              <span className={`text-sm font-medium ${
                stat.trend === 'up' ? 'text-green-600' : 
                stat.trend === 'urgent' ? 'text-red-600' : 'text-gray-600'
              }`}>
                {stat.change}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Quick Actions */}
        <div className="lg:col-span-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-xl p-6 shadow-sm"
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Acciones Rápidas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {quickActions.map((action, index) => (
                <motion.button
                  key={action.title}
                  onClick={() => navigate(action.path)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`p-4 rounded-lg bg-gradient-to-r ${action.color} text-white text-left transition-all duration-200 hover:shadow-lg`}
                >
                  <div className="flex items-center space-x-3">
                    <action.icon className="w-8 h-8" />
                    <div>
                      <h3 className="font-semibold">{action.title}</h3>
                      <p className="text-sm opacity-90">{action.description}</p>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-xl p-6 shadow-sm"
        >
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Actividad Reciente</h2>
          <div className="space-y-4">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-start space-x-3">
                <div className={`w-2 h-2 rounded-full mt-2 ${
                  activity.type === 'order' ? 'bg-blue-500' :
                  activity.type === 'warning' ? 'bg-yellow-500' :
                  activity.type === 'success' ? 'bg-green-500' : 'bg-gray-500'
                }`} />
                <div className="flex-1">
                  <p className="text-sm text-gray-900">{activity.text}</p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Charts Section */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Weekly Sales Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-xl p-6 shadow-sm"
        >
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Ventas Semanales</h2>
          <div className="h-80">
            <Line data={weeklyData} options={chartOptions} />
          </div>
        </motion.div>

        {/* Top Products Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white rounded-xl p-6 shadow-sm"
        >
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Productos Más Vendidos</h2>
          <div className="h-80">
            <Bar data={topProductsData} options={barOptions} />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AdminDashboard; 