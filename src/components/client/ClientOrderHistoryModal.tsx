import React, { useState, useEffect } from 'react';
import { ClientOrderHistory } from '../../types/client';
import { clientService } from '../../services/client.service';

interface ClientOrderHistoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  clientId: number;
  clientName: string;
}

const ClientOrderHistoryModal: React.FC<ClientOrderHistoryModalProps> = ({
  isOpen,
  onClose,
  clientId,
  clientName
}) => {
  const [orders, setOrders] = useState<ClientOrderHistory[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen && clientId) {
      fetchOrderHistory();
    }
  }, [isOpen, clientId]);

  const fetchOrderHistory = async () => {
    setLoading(true);
    setError(null);
    try {
      const history = await clientService.getClientOrderHistory(clientId);
      setOrders(history);
    } catch (err) {
      setError('Error al cargar el historial de pedidos');
      console.error('Error fetching order history:', err);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: 'EUR'
    }).format(amount);
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'pendiente':
        return 'bg-yellow-100 text-yellow-800';
      case 'en_preparacion':
        return 'bg-blue-100 text-blue-800';
      case 'listo':
        return 'bg-green-100 text-green-800';
      case 'entregado':
        return 'bg-gray-100 text-gray-800';
      case 'cancelado':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status.toLowerCase()) {
      case 'pendiente':
        return 'Pendiente';
      case 'en_preparacion':
        return 'En Preparación';
      case 'listo':
        return 'Listo';
      case 'entregado':
        return 'Entregado';
      case 'cancelado':
        return 'Cancelado';
      default:
        return status;
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-4xl max-h-screen overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            📋 Historial de Pedidos - {clientName}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            ×
          </button>
        </div>

        {loading && (
          <div className="flex justify-center items-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            <span className="ml-2 text-gray-600">Cargando historial...</span>
          </div>
        )}

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        {!loading && !error && orders.length === 0 && (
          <div className="text-center py-8">
            <div className="text-6xl mb-4">📭</div>
            <p className="text-gray-600 text-lg">
              Este cliente aún no ha realizado pedidos
            </p>
          </div>
        )}

        {!loading && !error && orders.length > 0 && (
          <div className="space-y-4">
            {orders.map((order) => (
              <div key={order.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      Pedido #{order.numeroOrden}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {formatDate(order.fechaPedido)}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.estado)}`}>
                      {getStatusText(order.estado)}
                    </span>
                    <p className="text-lg font-bold text-gray-800 mt-2">
                      {formatCurrency(order.total)}
                    </p>
                  </div>
                </div>

                {/* Items del pedido */}
                <div className="border-t pt-3">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Items del pedido:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {order.items?.map((item) => (
                      <div key={item.id} className="flex justify-between items-center text-sm">
                        <span className="text-gray-600">
                          {item.cantidad}x {item.nombre}
                        </span>
                        <span className="font-medium">
                          {formatCurrency(item.subtotal)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Resumen */}
            <div className="bg-gray-50 rounded-lg p-4 mt-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Resumen</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold text-blue-600">{orders.length}</p>
                  <p className="text-sm text-gray-600">Total de Pedidos</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-green-600">
                    {formatCurrency(orders.reduce((sum, order) => sum + order.total, 0))}
                  </p>
                  <p className="text-sm text-gray-600">Total Gastado</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-purple-600">
                    {formatCurrency(orders.reduce((sum, order) => sum + order.total, 0) / orders.length)}
                  </p>
                  <p className="text-sm text-gray-600">Promedio por Pedido</p>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="flex justify-end mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClientOrderHistoryModal;
