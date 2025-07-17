import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  UsersIcon,
  MagnifyingGlassIcon,
  PlusIcon,
  EyeIcon,
  PencilIcon,
  TrashIcon,
  FunnelIcon,
  DocumentDuplicateIcon,
  PhoneIcon,
  MapPinIcon,
  EnvelopeIcon,
  CalendarDaysIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';

interface Client {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  company: string;
  status: 'Activo' | 'Inactivo';
  totalOrders: number;
  totalSpent: number;
  lastOrder: string;
  registeredAt: string;
}

const ClientManagement: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('Todos');
  const [showModal, setShowModal] = useState(false);

  // Datos mock de clientes
  const mockClients: Client[] = [
    {
      id: '1',
      name: 'Miguel Alejandro Zea Parraga',
      email: 'alejandrozea79@gmail.com',
      phone: '0986032246',
      address: 'Portoviejo',
      company: 'Empresa ABC',
      status: 'Activo',
      totalOrders: 15,
      totalSpent: 2850.00,
      lastOrder: '2025-01-15',
      registeredAt: '17/7/2025'
    },
    {
      id: '2',
      name: 'Usuario Test',
      email: 'test@test.com',
      phone: '0999999999',
      address: 'Ciudad Test',
      company: 'Test Company',
      status: 'Activo',
      totalOrders: 8,
      totalSpent: 1200.00,
      lastOrder: '2025-01-10',
      registeredAt: '17/7/2025'
    },
    {
      id: '3',
      name: 'Christian',
      email: 'christian_prueba@gmail.com',
      phone: '123456789',
      address: 'Calle 123, Ciudad',
      company: 'Innovación S.A.',
      status: 'Activo',
      totalOrders: 22,
      totalSpent: 4500.00,
      lastOrder: '2025-01-18',
      registeredAt: '17/7/2025'
    },
    {
      id: '4',
      name: 'Ana García',
      email: 'ana.garcia@empresa.com',
      phone: '0987654321',
      address: 'Av. Principal 456',
      company: 'Corporación XYZ',
      status: 'Inactivo',
      totalOrders: 5,
      totalSpent: 750.00,
      lastOrder: '2024-12-20',
      registeredAt: '15/6/2025'
    }
  ];

  const filteredClients = mockClients.filter(client => {
    const matchesSearch = client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         client.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         client.phone.includes(searchTerm);
    const matchesStatus = statusFilter === 'Todos' || client.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const stats = [
    {
      title: 'Total Clientes',
      value: mockClients.length.toString(),
      icon: UsersIcon,
      color: 'bg-blue-500',
      change: '+12% este mes'
    },
    {
      title: 'Clientes Activos',
      value: mockClients.filter(c => c.status === 'Activo').length.toString(),
      icon: ChartBarIcon,
      color: 'bg-green-500',
      change: '95% de retención'
    },
    {
      title: 'Pedidos Totales',
      value: mockClients.reduce((sum, c) => sum + c.totalOrders, 0).toString(),
      icon: DocumentDuplicateIcon,
      color: 'bg-orange-500',
      change: '+18% esta semana'
    },
    {
      title: 'Ingresos Clientes',
      value: `$${mockClients.reduce((sum, c) => sum + c.totalSpent, 0).toLocaleString()}`,
      icon: ChartBarIcon,
      color: 'bg-purple-500',
      change: '+25% mensual'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header con estadísticas */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-6 text-white">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-3xl font-bold flex items-center gap-3">
              <UsersIcon className="w-8 h-8" />
              Gestión de Clientes
            </h1>
            <p className="text-blue-100 mt-2">Administra y supervisa todos los clientes registrados</p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold">{mockClients.length}</div>
            <div className="text-blue-200 text-sm">Total Clientes</div>
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
                <p className="text-green-600 text-sm font-medium mt-1">{stat.change}</p>
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
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="flex flex-1 gap-4 w-full md:w-auto">
            {/* Búsqueda */}
            <div className="relative flex-1 max-w-md">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Buscar por nombre, email o teléfono..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Filtro por estado */}
            <div className="relative">
              <FunnelIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="pl-10 pr-8 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
              >
                <option value="Todos">Todos</option>
                <option value="Activo">Activos</option>
                <option value="Inactivo">Inactivos</option>
              </select>
            </div>
          </div>

          {/* Botón nuevo cliente */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setShowModal(true)}
            className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-200"
          >
            <PlusIcon className="w-5 h-5" />
            Nuevo Cliente
          </motion.button>
        </div>
      </motion.div>

      {/* Tabla de clientes */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white rounded-xl shadow-sm overflow-hidden"
      >
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cliente</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contacto</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Empresa</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Registro</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredClients.map((client, index) => (
                <motion.tr
                  key={client.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="hover:bg-gray-50 transition-colors duration-150"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                        {client.name.split(' ').map(n => n[0]).join('').substring(0, 2)}
                      </div>
                      <div className="ml-3">
                        <div className="text-sm font-medium text-gray-900">{client.name}</div>
                        <div className="flex items-center gap-1 text-sm text-gray-500">
                          <DocumentDuplicateIcon className="w-4 h-4" />
                          {client.totalOrders} pedidos · ${client.totalSpent.toLocaleString()}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-sm text-gray-900">
                        <EnvelopeIcon className="w-4 h-4 text-gray-400" />
                        {client.email}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <PhoneIcon className="w-4 h-4 text-gray-400" />
                        {client.phone}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <MapPinIcon className="w-4 h-4 text-gray-400" />
                        {client.address}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900">{client.company || '-'}</div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      client.status === 'Activo' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {client.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <CalendarDaysIcon className="w-4 h-4" />
                      {client.registeredAt}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                        <EyeIcon className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-orange-600 hover:bg-orange-50 rounded-lg transition-colors">
                        <PencilIcon className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                        <TrashIcon className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Paginación */}
        <div className="bg-gray-50 px-6 py-3 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-700">
              Mostrando <span className="font-medium">{filteredClients.length}</span> de <span className="font-medium">{mockClients.length}</span> clientes
            </div>
            <div className="flex gap-2">
              <button className="px-3 py-1 border border-gray-300 rounded-md text-sm hover:bg-gray-50">
                Anterior
              </button>
              <button className="px-3 py-1 bg-blue-600 text-white rounded-md text-sm">
                1
              </button>
              <button className="px-3 py-1 border border-gray-300 rounded-md text-sm hover:bg-gray-50">
                Siguiente
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ClientManagement; 