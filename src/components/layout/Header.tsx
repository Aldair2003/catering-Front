import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  HomeIcon, 
  CubeIcon, 
  ShoppingCartIcon, 
  ClipboardDocumentListIcon,
  UserIcon,
  Bars3Icon,
  XMarkIcon
} from '@heroicons/react/24/outline';
import { 
  HomeIcon as HomeIconSolid, 
  CubeIcon as CubeIconSolid, 
  ShoppingCartIcon as ShoppingCartIconSolid, 
  ClipboardDocumentListIcon as ClipboardDocumentListIconSolid
} from '@heroicons/react/24/solid';
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Determinar si estamos en rutas de admin
  const isAdminRoute = location.pathname.startsWith('/admin');

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  // Configuración de navegación
  const navigation = [
    { name: 'Inicio', path: '/', icon: HomeIcon, iconSolid: HomeIconSolid },
    ...(isAuthenticated ? [
      { name: 'Mis Pedidos', path: '/orders', icon: ClipboardDocumentListIcon, iconSolid: ClipboardDocumentListIconSolid },
      { name: 'Carrito', path: '/cart', icon: ShoppingCartIcon, iconSolid: ShoppingCartIconSolid }
    ] : [])
  ];

  const isActivePath = (path: string) => {
    return location.pathname === path;
  };
  
  return (
    <motion.header 
      className="bg-white shadow-lg border-b border-orange-100"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo y marca */}
          <motion.div 
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
              <motion.div
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <img 
                  src="/logo/logoCatemini.png" 
                  alt="PortoCatering Logo" 
                  className="h-10 w-10 object-contain"
                />
              </motion.div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent">
                  PortoCatering
                </h1>
                <p className="text-xs text-orange-600">Servicios de Catering</p>
              </div>
            </Link>
          </motion.div>

          {/* Navegación principal - Desktop */}
          <nav className="hidden md:flex items-center space-x-6">
            {!isAdminRoute ? (
              /* Navegación para clientes */
              <>
                <Link 
                  to="/" 
                  className={`hover:text-orange-600 transition-colors ${
                    location.pathname === '/' ? 'text-orange-600 font-semibold' : 'text-gray-700'
                  }`}
                >
                  Inicio
                </Link>
                {isAuthenticated && (
                  <Link 
                    to="/orders" 
                    className={`hover:text-orange-600 transition-colors ${
                      location.pathname === '/orders' ? 'text-orange-600 font-semibold' : 'text-gray-700'
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
                  className={`hover:text-orange-600 transition-colors ${
                    location.pathname === '/admin' ? 'text-orange-600 font-semibold' : 'text-gray-700'
                  }`}
                >
                  Dashboard
                </Link>
                <Link 
                  to="/admin/clients" 
                  className={`hover:text-orange-600 transition-colors ${
                    location.pathname === '/admin/clients' ? 'text-orange-600 font-semibold' : 'text-gray-700'
                  }`}
                >
                  Clientes
                </Link>
                <Link 
                  to="/admin/inventory" 
                  className={`hover:text-orange-600 transition-colors ${
                    location.pathname === '/admin/inventory' ? 'text-orange-600 font-semibold' : 'text-gray-700'
                  }`}
                >
                  Inventario
                </Link>
                <Link 
                  to="/admin/delivery" 
                  className={`hover:text-orange-600 transition-colors ${
                    location.pathname === '/admin/delivery' ? 'text-orange-600 font-semibold' : 'text-gray-700'
                  }`}
                >
                  Entregas
                </Link>
              </>
            )}
          </nav>

          {/* Acciones del usuario */}
          <div className="flex items-center space-x-4">
            {/* Carrito para clientes autenticados */}
            {!isAdminRoute && isAuthenticated && (
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  to="/cart" 
                  className="relative hover:text-orange-600 transition-colors"
                >
                  <span className="text-xl">🛒</span>
                  {/* Badge de cantidad */}
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    0
                  </span>
                </Link>
              </motion.div>
            )}
            
            {/* Menú móvil toggle */}
            <button
              className="md:hidden p-2 text-gray-700 hover:text-orange-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>

            {/* Login/Profile/Logout - Desktop */}
            <div className="hidden md:flex items-center space-x-4">
              {isAuthenticated ? (
                <>
                  <span className="text-gray-700">
                    Hola, {user?.nombre}
                  </span>
                  <Link 
                    to="/profile" 
                    className="text-orange-600 hover:text-orange-700 transition-colors"
                  >
                    Perfil
                  </Link>
                  <motion.button
                    onClick={handleLogout}
                    className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Cerrar Sesión
                  </motion.button>
                </>
              ) : (
                <>
                  <Link 
                    to="/auth/login" 
                    className="text-orange-600 hover:text-orange-700 transition-colors"
                  >
                    Iniciar Sesión
                  </Link>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link 
                      to="/auth/register" 
                      className="bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700 transition-colors"
                    >
                      Registrarse
                    </Link>
                  </motion.div>
                </>
              )}
            </div>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.nav
            className="md:hidden py-4 border-t border-orange-100"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="space-y-1">
              {navigation.map((item) => {
                const isActive = isActivePath(item.path);
                const Icon = isActive ? item.iconSolid : item.icon;
                
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center space-x-3 px-3 py-3 rounded-lg transition-colors ${
                      isActive 
                        ? 'text-orange-700 bg-orange-50 font-semibold' 
                        : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Icon className="h-5 w-5" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
              
              {/* Mobile auth buttons */}
              <div className="pt-4 border-t border-orange-100 space-y-2">
                {isAuthenticated ? (
                  <>
                    <div className="px-3 py-2 text-gray-600">
                      Hola, {user?.nombre}
                    </div>
                    <Link
                      to="/profile"
                      className="flex items-center space-x-3 px-3 py-3 rounded-lg text-orange-600 hover:bg-orange-50 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <UserIcon className="h-5 w-5" />
                      <span>Perfil</span>
                    </Link>
                    <button
                      onClick={() => {
                        handleLogout();
                        setIsMobileMenuOpen(false);
                      }}
                      className="w-full flex items-center space-x-3 px-3 py-3 rounded-lg bg-red-600 text-white hover:bg-red-700 transition-colors"
                    >
                      <span>Cerrar Sesión</span>
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      to="/auth/login"
                      className="flex items-center space-x-3 px-3 py-3 rounded-lg text-orange-600 hover:bg-orange-50 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <UserIcon className="h-5 w-5" />
                      <span>Iniciar Sesión</span>
                    </Link>
                    <Link
                      to="/auth/register"
                      className="flex items-center space-x-3 px-3 py-3 rounded-lg bg-orange-600 text-white hover:bg-orange-700 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span>Registrarse</span>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
};

export default Header; 