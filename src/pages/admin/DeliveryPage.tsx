import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  TruckIcon,
  MapPinIcon,
  CalendarDaysIcon,
  ClockIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  PhoneIcon,
  UserIcon,
  ChartBarIcon,
  MagnifyingGlassIcon,
  AdjustmentsHorizontalIcon,
  PlusIcon
} from '@heroicons/react/24/outline';

interface Delivery {
  id: string;
  orderId: string;
  customerName: string;
  customerPhone: string;
  address: string;
  date: string;
  time: string;
  status: 'Programada' | 'En Ruta' | 'Entregada' | 'Retrasada';
  driver: string;
  items: string[];
  priority: 'Alta' | 'Media' | 'Baja';
  estimatedDuration: number;
}

const DeliveryPage: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [statusFilter, setStatusFilter] = useState('Todas');
  const [searchTerm, setSearchTerm] = useState('');

  // Datos mock de entregas
  const mockDeliveries: Delivery[] = [
    {
      id: '1',
      orderId: 'PED-001',
      customerName: 'Miguel Alejandro Zea',
      customerPhone: '0986032246',
      address: 'Av. Principal 123, Portoviejo',
      date: '2025-01-20',
      time: '10:00',
      status: 'Programada',
      driver: 'Carlos López',
      items: ['Pollo a la Plancha x15', 'Ensalada César x10'],
      priority: 'Alta',
      estimatedDuration: 45
    },
    {
      id: '2',
      orderId: 'PED-002',
      customerName: 'Ana García',
      customerPhone: '0987654321',
      address: 'Calle 10 de Agosto 456, Manta',
      date: '2025-01-20',
      time: '14:30',
      status: 'En Ruta',
      driver: 'Roberto Silva',
      items: ['Menú Ejecutivo x25'],
      priority: 'Media',
      estimatedDuration: 60
    },
    {
      id: '3',
      orderId: 'PED-003',
      customerName: 'Christian Prueba',
      customerPhone: '123456789',
      address: 'Zona Industrial, Bloque 5',
      date: '2025-01-20',
      time: '08:00',
      status: 'Entregada',
      driver: 'María Rodríguez',
      items: ['Catering Corporativo x50'],
      priority: 'Alta',
      estimatedDuration: 90
    },
    {
      id: '4',
      orderId: 'PED-004',
      customerName: 'Corporación XYZ',
      customerPhone: '0999999999',
      address: 'Centro Empresarial Torre 2',
      date: '2025-01-20',
      time: '12:00',
      status: 'Retrasada',
      driver: 'Luis Mendoza',
      items: ['Lunch Corporativo x30'],
      priority: 'Alta',
      estimatedDuration: 30
    }
  ];

  const drivers = ['Carlos López', 'Roberto Silva', 'María Rodríguez', 'Luis Mendoza'];
  const statuses = ['Todas', 'Programada', 'En Ruta', 'Entregada', 'Retrasada'];

  const filteredDeliveries = mockDeliveries.filter(delivery => {
    const matchesDate = delivery.date === selectedDate;
    const matchesStatus = statusFilter === 'Todas' || delivery.status === statusFilter;
    const matchesSearch = delivery.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         delivery.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         delivery.orderId.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesDate && matchesStatus && matchesSearch;
  });

  const stats = [
    {
      title: 'Entregas Hoy',
      value: mockDeliveries.filter(d => d.date === selectedDate).length.toString(),
      icon: TruckIcon,
      color: 'bg-blue-500',
      change: '8 programadas'
    },
    {
      title: 'En Ruta',
      value: mockDeliveries.filter(d => d.status === 'En Ruta').length.toString(),
      icon: ClockIcon,
      color: 'bg-yellow-500',
      change: 'Tiempo promedio: 45min'
    },
    {
      title: 'Completadas',
      value: mockDeliveries.filter(d => d.status === 'Entregada').length.toString(),
      icon: CheckCircleIcon,
      color: 'bg-green-500',
      change: '95% puntualidad'
    },
    {
      title: 'Retrasadas',
      value: mockDeliveries.filter(d => d.status === 'Retrasada').length.toString(),
      icon: ExclamationTriangleIcon,
      color: 'bg-red-500',
      change: 'Requiere atención'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Programada': return 'bg-blue-100 text-blue-800';
      case 'En Ruta': return 'bg-yellow-100 text-yellow-800';
      case 'Entregada': return 'bg-green-100 text-green-800';
      case 'Retrasada': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'Alta': return 'bg-red-100 text-red-800';
      case 'Media': return 'bg-yellow-100 text-yellow-800';
      case 'Baja': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-600 to-orange-700 rounded-xl p-6 text-white">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-3xl font-bold flex items-center gap-3">
              <TruckIcon className="w-8 h-8" />
              Planificación de Entregas
            </h1>
            <p className="text-orange-100 mt-2">Gestión y seguimiento de entregas de catering</p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold">{mockDeliveries.length}</div>
            <div className="text-orange-200 text-sm">Entregas Programadas</div>
          </div>
        </div>
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
                <p className="text-sm font-medium mt-1 text-gray-500">{stat.change}</p>
              </div>
              <div className={`p-3 rounded-lg ${stat.color}`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Controles y filtros */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white rounded-xl p-6 shadow-sm"
      >
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
          <div className="flex flex-1 gap-4 w-full lg:w-auto">
            {/* Selector de fecha */}
            <div className="relative">
              <CalendarDaysIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white"
              />
            </div>

            {/* Búsqueda */}
            <div className="relative flex-1 max-w-md">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Buscar por cliente, dirección o pedido..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>

            {/* Filtro por estado */}
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white"
            >
              {statuses.map(status => (
                <option key={status} value={status}>{status}</option>
              ))}
            </select>
          </div>

          {/* Botón nueva entrega */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 bg-gradient-to-r from-orange-600 to-orange-700 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-200"
          >
            <PlusIcon className="w-5 h-5" />
            Nueva Entrega
          </motion.button>
        </div>
      </motion.div>

      {/* Lista de entregas */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white rounded-xl shadow-sm overflow-hidden"
      >
        <div className="grid gap-4 p-6">
          {filteredDeliveries.length === 0 ? (
            <div className="text-center py-12">
              <TruckIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No hay entregas programadas</h3>
              <p className="text-gray-500">Para la fecha seleccionada no se encontraron entregas</p>
            </div>
          ) : (
            filteredDeliveries.map((delivery, index) => (
              <motion.div
                key={delivery.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-lg ${
                      delivery.status === 'Entregada' ? 'bg-green-500' :
                      delivery.status === 'En Ruta' ? 'bg-yellow-500' :
                      delivery.status === 'Retrasada' ? 'bg-red-500' : 'bg-blue-500'
                    }`}>
                      <TruckIcon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{delivery.orderId}</h3>
                      <p className="text-gray-600">{delivery.customerName}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getPriorityColor(delivery.priority)}`}>
                      {delivery.priority}
                    </span>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(delivery.status)}`}>
                      {delivery.status}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <MapPinIcon className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{delivery.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ClockIcon className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{delivery.time} ({delivery.estimatedDuration}min)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <UserIcon className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{delivery.driver}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <PhoneIcon className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{delivery.customerPhone}</span>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-3 mb-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Productos:</h4>
                  <div className="flex flex-wrap gap-2">
                    {delivery.items.map((item, itemIndex) => (
                      <span key={itemIndex} className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-200 text-gray-700">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-end gap-2">
                  <button className="px-4 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    Ver Mapa
                  </button>
                  <button className="px-4 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    Contactar
                  </button>
                  {delivery.status === 'Programada' && (
                    <button className="px-4 py-2 text-sm bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors">
                      Iniciar Entrega
                    </button>
                  )}
                  {delivery.status === 'En Ruta' && (
                    <button className="px-4 py-2 text-sm bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                      Marcar Entregado
                    </button>
                  )}
                </div>
              </motion.div>
            ))
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default DeliveryPage; 