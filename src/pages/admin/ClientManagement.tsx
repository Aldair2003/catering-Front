import React, { useState, useEffect } from 'react';
import { Client, ClientSearchParams } from '../../types/client';
import { clientService } from '../../services/client.service';
import ClientModal from '../../components/client/ClientModal';
import ClientOrderHistoryModal from '../../components/client/ClientOrderHistoryModal';

/**
 * Gestión de Clientes
 * Administración completa de clientes registrados
 * 
 * Funcionalidades:
 * - Lista de clientes registrados
 * - Edición de información de cliente
 * - Historial de pedidos por cliente
 * - Estadísticas de clientes recurrentes
 */
const ClientManagement: React.FC = () => {
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [total, setTotal] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);
  const [isHistoryModalOpen, setIsHistoryModalOpen] = useState(false);
  const [selectedClientForHistory, setSelectedClientForHistory] = useState<{ id: number; name: string } | null>(null);
  const [isDeleting, setIsDeleting] = useState<number | null>(null);

  const limit = 10;

  useEffect(() => {
    fetchClients();
  }, [currentPage]);

  const fetchClients = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await clientService.getClients(currentPage, limit);
      setClients(response.clientes || []); // Usar clientes en lugar de data
      setTotalPages(response.totalPages);
      setTotal(response.total);
    } catch (err) {
      setError('Error al cargar los clientes');
      console.error('Error fetching clients:', err);
      setClients([]); // Asegurar que clients nunca sea undefined
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async () => {
    if (!searchTerm.trim()) {
      fetchClients();
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const searchParams: ClientSearchParams = {};
      if (searchTerm.includes('@')) {
        searchParams.email = searchTerm;
      } else if (/^\d+/.test(searchTerm)) {
        searchParams.telefono = searchTerm;
      } else {
        searchParams.nombre = searchTerm;
      }

      const results = await clientService.searchClients(searchParams);
      setClients(results || []); // Asegurar que nunca sea undefined
      setTotalPages(1);
      setTotal((results || []).length);
    } catch (err) {
      setError('Error al buscar clientes');
      console.error('Error searching clients:', err);
      setClients([]); // Establecer array vacío en caso de error
    } finally {
      setLoading(false);
    }
  };

  const handleCreateClient = () => {
    setSelectedClient(null);
    setIsModalOpen(true);
  };

  const handleEditClient = (client: Client) => {
    setSelectedClient(client);
    setIsModalOpen(true);
  };

  const handleSaveClient = async (clientData: any) => {
    try {
      if (selectedClient) {
        await clientService.updateClient(selectedClient.id, clientData);
      } else {
        await clientService.createClient(clientData);
      }
      fetchClients();
      setIsModalOpen(false);
    } catch (err) {
      console.error('Error saving client:', err);
      throw err;
    }
  };

  const handleDeleteClient = async (id: number) => {
    if (!window.confirm('¿Estás seguro de que quieres eliminar este cliente?')) {
      return;
    }

    setIsDeleting(id);
    try {
      await clientService.deleteClient(id);
      fetchClients();
    } catch (err) {
      setError('Error al eliminar el cliente');
      console.error('Error deleting client:', err);
    } finally {
      setIsDeleting(null);
    }
  };

  const handleViewHistory = (client: Client) => {
    setSelectedClientForHistory({
      id: client.id,
      name: `${client.nombre} ${client.apellido || ''}`.trim()
    });
    setIsHistoryModalOpen(true);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('es-ES');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-6 text-white">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <h1 className="text-3xl font-bold mb-2">
              👥 Gestión de Clientes
            </h1>
            <p className="text-blue-100">
              Administra y supervisa todos los clientes registrados
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <div className="bg-white bg-opacity-20 rounded-lg p-4 text-center">
              <p className="text-2xl font-bold">{total}</p>
              <p className="text-sm text-blue-100">Total Clientes</p>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Actions */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="flex-1 max-w-md">
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar por nombre, email o teléfono..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
          
          <div className="flex gap-2">
            <button
              onClick={handleSearch}
              className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              🔍 Buscar
            </button>
            <button
              onClick={() => {
                setSearchTerm('');
                fetchClients();
              }}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              Limpiar
            </button>
            <button
              onClick={handleCreateClient}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              ➕ Nuevo Cliente
            </button>
          </div>
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      )}

      {/* Loading */}
      {loading && (
        <div className="flex justify-center items-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          <span className="ml-2 text-gray-600">Cargando clientes...</span>
        </div>
      )}

      {/* Clients Table */}
      {!loading && Array.isArray(clients) && (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {clients.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">👤</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                No hay clientes registrados
              </h3>
              <p className="text-gray-600 mb-4">
                Comienza agregando tu primer cliente
              </p>
              <button
                onClick={handleCreateClient}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                ➕ Crear Primer Cliente
              </button>
            </div>
          ) : (
            <>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Cliente
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Contacto
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Empresa
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Estado
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Registro
                      </th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Acciones
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {clients.map((client) => (
                      <tr key={client.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div>
                            <div className="text-sm font-medium text-gray-900">
                              {client.nombre} {client.apellido}
                            </div>
                            <div className="text-sm text-gray-500">{client.email}</div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{client.telefono}</div>
                          <div className="text-sm text-gray-500">{client.direccion}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {client.empresa || '-'}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                            client.activo 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-red-100 text-red-800'
                          }`}>
                            {client.activo ? 'Activo' : 'Inactivo'}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {formatDate(client.createdAt)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <div className="flex justify-end space-x-2">
                            <button
                              onClick={() => handleViewHistory(client)}
                              className="text-blue-600 hover:text-blue-900 text-sm"
                              title="Ver historial"
                            >
                              📋
                            </button>
                            <button
                              onClick={() => handleEditClient(client)}
                              className="text-indigo-600 hover:text-indigo-900 text-sm"
                              title="Editar"
                            >
                              ✏️
                            </button>
                            <button
                              onClick={() => handleDeleteClient(client.id)}
                              disabled={isDeleting === client.id}
                              className="text-red-600 hover:text-red-900 text-sm disabled:opacity-50"
                              title="Eliminar"
                            >
                              {isDeleting === client.id ? '⏳' : '🗑️'}
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="bg-white px-4 py-3 border-t border-gray-200 sm:px-6">
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-gray-700">
                      Mostrando página {currentPage} de {totalPages} ({total} clientes)
                    </div>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                        disabled={currentPage === 1}
                        className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50"
                      >
                        Anterior
                      </button>
                      <button
                        onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                        disabled={currentPage === totalPages}
                        className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50"
                      >
                        Siguiente
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      )}

      {/* Modals */}
      <ClientModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveClient}
        client={selectedClient}
      />

      {selectedClientForHistory && (
        <ClientOrderHistoryModal
          isOpen={isHistoryModalOpen}
          onClose={() => setIsHistoryModalOpen(false)}
          clientId={selectedClientForHistory.id}
          clientName={selectedClientForHistory.name}
        />
      )}
    </div>
  );
};

export default ClientManagement; 