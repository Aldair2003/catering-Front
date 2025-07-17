export interface Client {
  id: number;
  nombre: string;
  apellido?: string;
  email: string;
  telefono?: string;
  direccion?: string;
  empresa?: string;
  notas?: string;
  activo: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface CreateClientDto {
  nombre: string;
  apellido: string;
  email: string;
  telefono: string;
  direccion: string;
  empresa?: string;
  notas?: string;
  activo?: boolean;
}

export interface UpdateClientDto extends Partial<CreateClientDto> {}

export interface ClientSearchParams {
  nombre?: string;
  email?: string;
  telefono?: string;
}

export interface ClientsResponse {
  clientes: Client[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface ClientOrderHistory {
  id: number;
  numeroOrden: string;
  fechaPedido: string;
  estado: string;
  total: number;
  items: OrderItem[];
}

export interface OrderItem {
  id: number;
  nombre: string;
  cantidad: number;
  precio: number;
  subtotal: number;
}
