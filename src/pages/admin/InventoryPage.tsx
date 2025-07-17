import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  CubeIcon,
  MagnifyingGlassIcon,
  PlusIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  ClockIcon,
  AdjustmentsHorizontalIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  PencilIcon,
  TrashIcon
} from '@heroicons/react/24/outline';

interface InventoryItem {
  id: string;
  name: string;
  category: string;
  quantity: number;
  unit: string;
  minStock: number;
  maxStock: number;
  supplier: string;
  lastRestocked: string;
  cost: number;
  status: 'En Stock' | 'Stock Bajo' | 'Agotado';
}

const InventoryPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('Todos');
  const [statusFilter, setStatusFilter] = useState('Todos');

  // Datos mock de inventario
  const mockInventory: InventoryItem[] = [
    {
      id: '1',
      name: 'Arroz Blanco',
      category: 'Granos',
      quantity: 5,
      unit: 'kg',
      minStock: 10,
      maxStock: 100,
      supplier: 'Distribuidora Central',
      lastRestocked: '2025-01-10',
      cost: 2.50,
      status: 'Stock Bajo'
    },
    {
      id: '2',
      name: 'Pollo Fresco',
      category: 'Carnes',
      quantity: 25,
      unit: 'kg',
      minStock: 10,
      maxStock: 50,
      supplier: 'Avícola del Valle',
      lastRestocked: '2025-01-18',
      cost: 4.80,
      status: 'En Stock'
    },
    {
      id: '3',
      name: 'Aceite de Oliva',
      category: 'Aceites',
      quantity: 0,
      unit: 'litros',
      minStock: 5,
      maxStock: 30,
      supplier: 'Gourmet Import',
      lastRestocked: '2024-12-15',
      cost: 12.00,
      status: 'Agotado'
    },
    {
      id: '4',
      name: 'Tomates Frescos',
      category: 'Vegetales',
      quantity: 15,
      unit: 'kg',
      minStock: 8,
      maxStock: 40,
      supplier: 'Huerta Orgánica',
      lastRestocked: '2025-01-17',
      cost: 1.80,
      status: 'En Stock'
    },
    {
      id: '5',
      name: 'Queso Mozzarella',
      category: 'Lácteos',
      quantity: 8,
      unit: 'kg',
      minStock: 5,
      maxStock: 25,
      supplier: 'Lácteos Premium',
      lastRestocked: '2025-01-15',
      cost: 8.50,
      status: 'En Stock'
    }
  ];

  const categories = ['Todos', 'Granos', 'Carnes', 'Aceites', 'Vegetales', 'Lácteos'];
  const statuses = ['Todos', 'En Stock', 'Stock Bajo', 'Agotado'];

  const filteredInventory = mockInventory.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.supplier.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'Todos' || item.category === categoryFilter;
    const matchesStatus = statusFilter === 'Todos' || item.status === statusFilter;
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const stats = [
    {
      title: 'Total Productos',
      value: mockInventory.length.toString(),
      icon: CubeIcon,
      color: 'bg-blue-500',
      change: '+3 nuevos productos'
    },
    {
      title: 'Stock Bajo',
      value: mockInventory.filter(i => i.status === 'Stock Bajo').length.toString(),
      icon: ExclamationTriangleIcon,
      color: 'bg-yellow-500',
      change: 'Requiere reposición'
    },
    {
      title: 'Agotados',
      value: mockInventory.filter(i => i.status === 'Agotado').length.toString(),
      icon: ClockIcon,
      color: 'bg-red-500',
      change: 'Acción inmediata'
    },
    {
      title: 'En Stock',
      value: mockInventory.filter(i => i.status === 'En Stock').length.toString(),
      icon: CheckCircleIcon,
      color: 'bg-green-500',
      change: 'Stock óptimo'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'En Stock': return 'bg-green-100 text-green-800';
      case 'Stock Bajo': return 'bg-yellow-100 text-yellow-800';
      case 'Agotado': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStockLevel = (item: InventoryItem) => {
    const percentage = (item.quantity / item.maxStock) * 100;
    return Math.max(0, Math.min(100, percentage));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-xl p-6 text-white">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-3xl font-bold flex items-center gap-3">
              <CubeIcon className="w-8 h-8" />
              Gestión de Inventario
            </h1>
            <p className="text-green-100 mt-2">Control y administración de insumos para catering</p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold">{mockInventory.length}</div>
            <div className="text-green-200 text-sm">Productos Totales</div>
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
            {/* Búsqueda */}
            <div className="relative flex-1 max-w-md">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Buscar productos o proveedores..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            {/* Filtro por categoría */}
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>

            {/* Filtro por estado */}
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white"
            >
              {statuses.map(status => (
                <option key={status} value={status}>{status}</option>
              ))}
            </select>
          </div>

          {/* Botón nuevo producto */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-200"
          >
            <PlusIcon className="w-5 h-5" />
            Nuevo Producto
          </motion.button>
        </div>
      </motion.div>

      {/* Tabla de inventario */}
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
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Producto</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stock</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Proveedor</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Última Reposición</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredInventory.map((item, index) => (
                <motion.tr
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="hover:bg-gray-50 transition-colors duration-150"
                >
                  <td className="px-6 py-4">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{item.name}</div>
                      <div className="text-sm text-gray-500">{item.category} · ${item.cost}/{item.unit}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-900">
                          {item.quantity} {item.unit}
                        </span>
                        <span className="text-xs text-gray-500">
                          Max: {item.maxStock}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${
                            getStockLevel(item) > 50 ? 'bg-green-500' :
                            getStockLevel(item) > 20 ? 'bg-yellow-500' : 'bg-red-500'
                          }`}
                          style={{ width: `${getStockLevel(item)}%` }}
                        />
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900">{item.supplier}</div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(item.status)}`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-500">{item.lastRestocked}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                        <ArrowUpIcon className="w-4 h-4" />
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
      </motion.div>
    </div>
  );
};

export default InventoryPage; 