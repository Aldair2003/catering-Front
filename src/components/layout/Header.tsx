import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

/**
 * Header principal de la aplicación
 * Incluye navegación para usuarios públicos, clientes y administradores
 * 
 * Funcionalidades:
 * - Logo y marca de la empresa
 * - Menú de navegación adaptativo según el rol
 * - Indicador de página activa
 * - Acceso rápido a carrito y perfil
 * - Autenticación de usuario
 */
const Header: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout, isAuthenticated } = useAuth();
  
  // Determinar si estamos en rutas de admin
  const isAdminRoute = location.pathname.startsWith('/admin');

  const handleLogout = () => {
    logout();
    navigate('/');
  };
  
  return (
    <header className="bg-white shadow-md border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo y marca */}
          <div className="flex items-center space-x-2">
            <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <span className="text-2xl">🍽️</span>
              <h1 className="text-xl font-bold text-gray-800">CateringPro</h1>
            </Link>
          </div>

          {/* Navegación principal */}
          <nav className="hidden md:flex items-center space-x-6">
            {!isAdminRoute ? (
              /* Navegación para clientes */
              <>
                <Link 
                  to="/" 
                  className={`hover:text-blue-600 transition-colors ${
                    location.pathname === '/' ? 'text-blue-600 font-semibold' : 'text-gray-700'
                  }`}
                >
                  Inicio
                </Link>
                <Link 
                  to="/menu" 
                  className={`hover:text-blue-600 transition-colors ${
                    location.pathname === '/menu' ? 'text-blue-600 font-semibold' : 'text-gray-700'
                  }`}
                >
                  Menú
                </Link>
                {isAuthenticated && (
                  <Link 
                    to="/orders" 
                    className={`hover:text-blue-600 transition-colors ${
                      location.pathname === '/orders' ? 'text-blue-600 font-semibold' : 'text-gray-700'
                    }`}
                  >
                    Mis Pedidos
                  </Link>
                )}
              </>
            ) : (
              /* Navegación para admin */
              <>
                <Link 
                  to="/admin" 
                  className={`hover:text-blue-600 transition-colors ${
                    location.pathname === '/admin' ? 'text-blue-600 font-semibold' : 'text-gray-700'
                  }`}
                >
                  Dashboard
                </Link>
                <Link 
                  to="/admin/clients" 
                  className={`hover:text-blue-600 transition-colors ${
                    location.pathname === '/admin/clients' ? 'text-blue-600 font-semibold' : 'text-gray-700'
                  }`}
                >
                  Clientes
                </Link>
                <Link 
                  to="/admin/inventory" 
                  className={`hover:text-blue-600 transition-colors ${
                    location.pathname === '/admin/inventory' ? 'text-blue-600 font-semibold' : 'text-gray-700'
                  }`}
                >
                  Inventario
                </Link>
                <Link 
                  to="/admin/delivery" 
                  className={`hover:text-blue-600 transition-colors ${
                    location.pathname === '/admin/delivery' ? 'text-blue-600 font-semibold' : 'text-gray-700'
                  }`}
                >
                  Entregas
                </Link>
              </>
            )}
          </nav>

          {/* Acciones del usuario */}
          <div className="flex items-center space-x-4">
            {!isAdminRoute && isAuthenticated && (
              /* Carrito para clientes autenticados */
              <Link 
                to="/cart" 
                className="relative hover:text-blue-600 transition-colors"
              >
                <span className="text-xl">🛒</span>
                {/* Badge de cantidad - se implementará con Context */}
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  0
                </span>
              </Link>
            )}
            
            {/* Login/Profile/Logout */}
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <span className="text-gray-700">
                  Hola, {user?.nombre}
                </span>
                <Link 
                  to="/profile" 
                  className="text-blue-600 hover:text-blue-700 transition-colors"
                >
                  Perfil
                </Link>
                <button
                  onClick={handleLogout}
                  className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
                >
                  Cerrar Sesión
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Link 
                  to="/auth/login" 
                  className="text-blue-600 hover:text-blue-700 transition-colors"
                >
                  Iniciar Sesión
                </Link>
                <Link 
                  to="/auth/register" 
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Registrarse
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 