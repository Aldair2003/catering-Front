import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requireAuth?: boolean;
}

/**
 * Componente para proteger rutas que requieren autenticación
 * Redirige a login si el usuario no está autenticado
 */
const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ 
  children, 
  requireAuth = true 
}) => {
  const { isAuthenticated, loading } = useAuth();
  const location = useLocation();

  // Mostrar loading mientras se verifica la autenticación
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
          <p className="mt-4 text-gray-600">Cargando...</p>
        </div>
      </div>
    );
  }

  // Si se requiere autenticación y el usuario no está autenticado
  if (requireAuth && !isAuthenticated) {
    // Guardar la ubicación actual para redirigir después del login
    return <Navigate to="/auth/login" state={{ from: location }} replace />;
  }

  // Si el usuario está autenticado y trata de acceder a login/register
  if (!requireAuth && isAuthenticated && 
      (location.pathname === '/auth/login' || location.pathname === '/auth/register')) {
    return <Navigate to="/dashboard" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
