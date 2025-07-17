import api from './api';

// Tipos para las requests y responses
export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  nombre: string;
  email: string;
  telefono?: string;
  direccion?: string;
  password: string;
}

export interface AuthResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
  user: {
    id: number;
    nombre: string;
    email: string;
  };
}

export interface User {
  id: number;
  nombre: string;
  email: string;
  telefono?: string;
  direccion?: string;
  empresa?: string;
}

// Servicio de autenticación
export class AuthService {
  /**
   * Iniciar sesión
   */
  static async login(credentials: LoginRequest): Promise<AuthResponse> {
    console.log('AuthService.login - enviando credentials:', credentials);
    console.log('AuthService.login - URL de API:', 'http://localhost:3000/api/auth/login');
    
    try {
      const response = await api.post<AuthResponse>('/auth/login', credentials);
      console.log('AuthService.login - respuesta exitosa:', response.data);
      return response.data;
    } catch (error) {
      console.error('AuthService.login - error:', error);
      throw error;
    }
  }

  /**
   * Registrar nuevo usuario
   */
  static async register(userData: RegisterRequest): Promise<AuthResponse> {
    const response = await api.post<AuthResponse>('/auth/register', userData);
    return response.data;
  }

  /**
   * Obtener perfil del usuario
   */
  static async getProfile(): Promise<User> {
    const response = await api.get<User>('/auth/profile');
    return response.data;
  }

  /**
   * Cerrar sesión
   */
  static logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  /**
   * Guardar datos de autenticación en localStorage
   */
  static saveAuthData(authResponse: AuthResponse): void {
    localStorage.setItem('token', authResponse.access_token);
    localStorage.setItem('user', JSON.stringify(authResponse.user));
  }

  /**
   * Obtener token del localStorage
   */
  static getToken(): string | null {
    return localStorage.getItem('token');
  }

  /**
   * Obtener usuario del localStorage
   */
  static getUser(): User | null {
    const userStr = localStorage.getItem('user');
    return userStr ? JSON.parse(userStr) : null;
  }

  /**
   * Verificar si el usuario está autenticado
   */
  static isAuthenticated(): boolean {
    return !!this.getToken();
  }
}

export default AuthService;
