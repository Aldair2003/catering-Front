import api from './api';
import { 
  Client, 
  CreateClientDto, 
  UpdateClientDto, 
  ClientSearchParams, 
  ClientsResponse,
  ClientOrderHistory 
} from '../types/client';

export const clientService = {
  // Obtener todos los clientes con paginación
  async getClients(page: number = 1, limit: number = 10): Promise<ClientsResponse> {
    const response = await api.get(`/clientes?page=${page}&limit=${limit}`);
    return response.data;
  },

  // Buscar clientes por criterios
  async searchClients(params: ClientSearchParams): Promise<Client[]> {
    const queryParams = new URLSearchParams();
    if (params.nombre) queryParams.append('nombre', params.nombre);
    if (params.email) queryParams.append('email', params.email);
    if (params.telefono) queryParams.append('telefono', params.telefono);
    
    const response = await api.get(`/clientes/buscar?${queryParams.toString()}`);
    return response.data;
  },

  // Obtener un cliente por ID
  async getClientById(id: number): Promise<Client> {
    const response = await api.get(`/clientes/${id}`);
    return response.data;
  },

  // Crear un nuevo cliente
  async createClient(clientData: CreateClientDto): Promise<Client> {
    const response = await api.post('/clientes', clientData);
    return response.data;
  },

  // Actualizar un cliente
  async updateClient(id: number, clientData: UpdateClientDto): Promise<Client> {
    const response = await api.patch(`/clientes/${id}`, clientData);
    return response.data;
  },

  // Eliminar un cliente (soft delete)
  async deleteClient(id: number): Promise<void> {
    await api.delete(`/clientes/${id}`);
  },

  // Obtener historial de pedidos de un cliente
  async getClientOrderHistory(id: number): Promise<ClientOrderHistory[]> {
    const response = await api.get(`/clientes/${id}/historial-pedidos`);
    return response.data;
  }
};
