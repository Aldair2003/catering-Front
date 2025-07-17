import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import AuthService, { User } from '../services/auth.service';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Verificar si hay un usuario autenticado al cargar la aplicación
    const initAuth = async () => {
      try {
        if (AuthService.isAuthenticated()) {
          const userData = AuthService.getUser();
          setUser(userData);
        }
      } catch (error) {
        console.error('Error al inicializar autenticación:', error);
        AuthService.logout();
      } finally {
        setLoading(false);
      }
    };

    initAuth();
  }, []);

  const login = async (email: string, password: string): Promise<void> => {
    try {
      const authResponse = await AuthService.login({ email, password });
      
      // Guardar datos en localStorage
      AuthService.saveAuthData(authResponse);
      
      // Actualizar estado local
      setUser(authResponse.user);
    } catch (error) {
      console.error('Error en login:', error);
      throw error;
    }
  };

  const logout = (): void => {
    AuthService.logout();
    setUser(null);
  };

  const value: AuthContextType = {
    user,
    loading,
    login,
    logout,
    isAuthenticated: !!user
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth debe ser usado dentro de un AuthProvider');
  }
  return context;
};

export default AuthContext;
