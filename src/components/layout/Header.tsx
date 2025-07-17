import React from 'react';
import { Link, useLocation } from 'react-router-dom';

/**
 * Header principal de la aplicación
 * Navegación simplificada para mostrar servicios de catering (sin compras)
 * 
 * Funcionalidades:
 * - Logo y marca de la empresa
 * - Menú de navegación adaptativo según el rol
 * - Indicador de página activa
 * - Acceso rápido a carrito y perfil
 */
const Header: React.FC = () => {
  const location = useLocation();
  
  // Determinar si estamos en rutas de admin
  const isAdminRoute = location.pathname.startsWith('/admin');
  
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
                  alt="CateringPro Logo" 
                  className="h-10 w-10 object-contain"
                />
              </motion.div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent">
                  CateringPro
                </h1>
                <p className="text-xs text-orange-600">Servicios de Catering</p>
              </div>
            </Link>
          </motion.div>

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
                <Link 
                  to="/orders" 
                  className={`hover:text-blue-600 transition-colors ${
                    location.pathname === '/orders' ? 'text-blue-600 font-semibold' : 'text-gray-700'
                  }`}
                >
                  Mis Pedidos
                </Link>
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
            {!isAdminRoute && (
              /* Carrito para clientes */
              <Link 
                to="/cart" 
                className="relative hover:text-blue-600 transition-colors"
              >
                <span className="text-xl">🛒</span>
                {/* Badge de cantidad - se implementará con Context */}
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  3
                </span>
              </Link>
            </motion.div>
            
            {/* Login/Profile */}
            <Link 
              to="/auth/login" 
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Iniciar Sesión
            </Link>
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
              </div>
            </div>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
};

export default Header; 