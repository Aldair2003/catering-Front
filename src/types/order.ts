import { MenuItem } from './menu';
import { User } from './auth';

export type OrderStatus = 
  | 'pending'
  | 'confirmed'
  | 'preparing'
  | 'ready'
  | 'delivered'
  | 'cancelled';

export interface OrderItem {
  id: string;
  menuItem: MenuItem;
  quantity: number;
  specialInstructions?: string;
  price: number;
}

export interface Order {
  id: string;
  customer: User;
  items: OrderItem[];
  status: OrderStatus;
  totalAmount: number;
  deliveryAddress: string;
  deliveryDate: Date;
  specialInstructions?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface OrderFilter {
  status?: OrderStatus;
  startDate?: Date;
  endDate?: Date;
  customerId?: string;
} 