import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  HomeIcon, 
  ClipboardDocumentListIcon, 
  UserIcon, 
  ArrowLeftOnRectangleIcon,
  ChartBarIcon,
  UsersIcon,
  CubeIcon,
  TruckIcon,
  XMarkIcon,
  CalendarDaysIcon,
  ShoppingCartIcon,
  BuildingOfficeIcon
} from '@heroicons/react/24/outline';
import {
  HomeIcon as HomeIconSolid,
  ClipboardDocumentListIcon as ClipboardDocumentListIconSolid,
  UserIcon as UserIconSolid,
  ChartBarIcon as ChartBarIconSolid,
  UsersIcon as UsersIconSolid,
  CubeIcon as CubeIconSolid,
  TruckIcon as TruckIconSolid,
  CalendarDaysIcon as CalendarDaysIconSolid,
  ShoppingCartIcon as ShoppingCartIconSolid,
} from '@heroicons/react/24/solid';
import { useSidebar } from '../../contexts/SidebarContext';

// Definir interfaces para los tipos
interface BaseNavItem {
  name: string;
  path: string;
  icon: React.ForwardRefExoticComponent<React.SVGProps<SVGSVGElement>>;
  iconSolid: React.ForwardRefExoticComponent<React.SVGProps<SVGSVGElement>>;
  description: string;
  category: string;
  urgent?: boolean;
  badge?: string;
}

/**
 * Sidebar PortoCatering - Navegación especializada para catering
 * Diseño adaptativo según tipo de usuario (Cliente/Admin)
 * Incluye métricas en tiempo real y accesos rápidos
 */
const Sidebar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isOpen, closeSidebar, isMobile } = useSidebar();

  // Determinar si estamos en rutas de admin
  const isAdminRoute = location.pathname.startsWith('/admin') || location.pathname === '/dashboard';

  // Navegación para clientes - Enfocada en pedidos de catering
  const customerNavItems: BaseNavItem[] = [
    { 
      name: 'Mi Dashboard', 
      path: '/dashboard', 
      icon: ChartBarIcon, 
      iconSolid: ChartBarIconSolid,
      description: 'Resumen de mis pedidos',
      category: 'main',
      urgent: false
    },
    { 
      name: 'Catálogo de Menús', 
      path: '/menu', 
      icon: HomeIcon, 
      iconSolid: HomeIconSolid,
      description: 'Explorar opciones de catering',
      badge: 'Nuevo',
      category: 'main',
      urgent: false
    },
    { 
      name: 'Mis Pedidos', 
      path: '/orders', 
      icon: ClipboardDocumentListIcon, 
      iconSolid: ClipboardDocumentListIconSolid,
      description: 'Historial y seguimiento',
      category: 'main',
      urgent: false
    },
    { 
      name: 'Carrito', 
      path: '/cart', 
      icon: ShoppingCartIcon, 
      iconSolid: ShoppingCartIconSolid,
      description: 'Revisar selección',
      badge: '3',
      category: 'main',
      urgent: false
    },
    { 
      name: 'Mi Perfil', 
      path: '/profile', 
      icon: UserIcon, 
      iconSolid: UserIconSolid,
      description: 'Datos personales',
      category: 'main',
      urgent: false
    }
  ];

  // Navegación para admin - Gestión completa de catering
  const adminNavItems: BaseNavItem[] = [
    { 
      name: 'Dashboard Principal', 
      path: '/admin', 
      icon: ChartBarIcon, 
      iconSolid: ChartBarIconSolid,
      description: 'Métricas del negocio',
      category: 'principal'
    },
    { 
      name: 'Eventos y Pedidos', 
      path: '/admin/orders', 
      icon: CalendarDaysIcon, 
      iconSolid: CalendarDaysIconSolid,
      description: 'Gestión de catering',
      category: 'operaciones',
      badge: '12'
    },
    { 
      name: 'Gestión de Clientes', 
      path: '/admin/clients', 
      icon: UsersIcon, 
      iconSolid: UsersIconSolid,
      description: 'Base de datos de clientes',
      category: 'operaciones'
    },
    { 
      name: 'Inventario de Insumos', 
      path: '/admin/inventory', 
      icon: CubeIcon, 
      iconSolid: CubeIconSolid,
      description: 'Control de stock',
      category: 'operaciones',
      urgent: true,
      badge: '5'
    },
    { 
      name: 'Planificación de Entregas', 
      path: '/admin/delivery', 
      icon: TruckIcon, 
      iconSolid: TruckIconSolid,
      description: 'Rutas y logística',
      category: 'operaciones',
      badge: '8'
    },
    { 
      name: 'Métricas y Reportes', 
      path: '/admin/metrics', 
      icon: ChartBarIcon, 
      iconSolid: ChartBarIconSolid,
      description: 'Análisis de rendimiento',
      category: 'analisis'
    }
  ];

  const navItems = isAdminRoute ? adminNavItems : customerNavItems;

  // Agrupar items por categoría si es admin
  const groupedItems = isAdminRoute ? 
    navItems.reduce((acc: Record<string, BaseNavItem[]>, item: BaseNavItem) => {
      const category = item.category || 'otros';
      if (!acc[category]) acc[category] = [];
      acc[category].push(item);
      return acc;
    }, {} as Record<string, BaseNavItem[]>) 
    : { main: navItems };

  const categoryTitles: Record<string, string> = {
    principal: 'Panel Principal',
    operaciones: 'Operaciones Diarias',
    analisis: 'Análisis y Reportes',
    main: ''
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate('/auth/login');
  };

  const isActivePath = (path: string) => {
    if (path === '/dashboard') {
      return location.pathname === '/dashboard';
    }
    if (path === '/admin') {
      return location.pathname === '/admin';
    }
    return location.pathname === path;
  };

  const handleNavClick = () => {
    if (isMobile) {
      closeSidebar();
    }
  };

  // Métricas rápidas para mostrar en el sidebar
  const quickStats = isAdminRoute ? {
    todayOrders: 18,
    pendingDeliveries: 8,
    lowStock: 5,
    satisfaction: 4.7
  } : {
    activeOrders: 2,
    upcomingEvents: 1,
    cartItems: 3
  };


  
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.aside 
          className="fixed top-0 left-0 h-full w-64 bg-white border-r border-gray-200 shadow-lg flex flex-col z-40"
          initial={{ x: -256 }}
          animate={{ x: 0 }}
          exit={{ x: -256 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {/* Header del Sidebar */}
          <motion.div 
            className="px-6 py-6 border-b border-gray-100 relative"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            {/* Botón cerrar para móvil */}
            {isMobile && (
              <button
                onClick={closeSidebar}
                className="absolute top-4 right-4 p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <XMarkIcon className="h-5 w-5 text-gray-500" />
              </button>
            )}

            <div className="flex items-center space-x-3">
              <img 
                src="/logo/logoCatemini.png" 
                alt="PortoCatering Logo" 
                className="h-8 w-8 object-contain"
              />
              <div>
                <span className="text-xl font-bold bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent block">
                  PortoCatering
                </span>
                <span className="text-xs text-gray-500">
                  {isAdminRoute ? 'Panel Administrativo' : 'Portal Cliente'}
                </span>
              </div>
            </div>
            
            {/* Badge de rol */}
            <div className="mt-3 flex items-center justify-between">
              {isAdminRoute && (
                <span className="text-xs text-orange-600 font-semibold bg-orange-50 px-2 py-1 rounded-full">
                  ADMINISTRADOR
                </span>
              )}
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs text-gray-500">En línea</span>
              </div>
            </div>
          </motion.div>

          {/* Métricas rápidas */}
          <motion.div 
            className="px-4 py-4 border-b border-gray-100 bg-gray-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-3">
              {isAdminRoute ? 'Resumen del Día' : 'Mi Actividad'}
            </h4>
            <div className="grid grid-cols-2 gap-3">
              {isAdminRoute ? (
                <>
                  <div className="text-center p-2 bg-white rounded-lg">
                    <span className="block text-lg font-bold text-orange-600">{quickStats.todayOrders}</span>
                    <span className="text-xs text-gray-600">Pedidos Hoy</span>
                  </div>
                  <div className="text-center p-2 bg-white rounded-lg">
                    <span className="block text-lg font-bold text-blue-600">{quickStats.pendingDeliveries}</span>
                    <span className="text-xs text-gray-600">Entregas</span>
                  </div>
                                     <div className="text-center p-2 bg-white rounded-lg">
                     <span className={`block text-lg font-bold ${(quickStats as any).lowStock > 0 ? 'text-red-600' : 'text-green-600'}`}>
                       {(quickStats as any).lowStock}
                     </span>
                     <span className="text-xs text-gray-600">Stock Bajo</span>
                   </div>
                  <div className="text-center p-2 bg-white rounded-lg">
                    <span className="block text-lg font-bold text-yellow-600">{quickStats.satisfaction}</span>
                    <span className="text-xs text-gray-600">Rating</span>
                  </div>
                </>
              ) : (
                <>
                  <div className="text-center p-2 bg-white rounded-lg">
                    <span className="block text-lg font-bold text-green-600">{quickStats.activeOrders}</span>
                    <span className="text-xs text-gray-600">Pedidos Activos</span>
                  </div>
                  <div className="text-center p-2 bg-white rounded-lg">
                    <span className="block text-lg font-bold text-orange-600">{quickStats.upcomingEvents}</span>
                    <span className="text-xs text-gray-600">Próximo Evento</span>
                  </div>
                </>
              )}
            </div>
          </motion.div>

          {/* Navegación */}
          <nav className="flex-1 px-4 py-6 overflow-y-auto">
            {Object.entries(groupedItems).map(([category, items]) => (
              <div key={category} className="mb-6">
                {categoryTitles[category] && (
                  <h4 className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-3 px-2">
                    {categoryTitles[category]}
                  </h4>
                )}
                <ul className="space-y-2">
                  {items.map((item, index) => {
                    const isActive = isActivePath(item.path);
                    const Icon = isActive ? item.iconSolid : item.icon;
                    
                    return (
                      <motion.li 
                        key={item.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          to={item.path}
                          onClick={handleNavClick}
                          className={`flex items-center px-3 py-3 text-sm font-medium rounded-lg transition-all duration-200 group relative ${
                            isActive
                              ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-md'
                              : 'text-gray-700 hover:bg-orange-50 hover:text-orange-600'
                          }`}
                        >
                          <Icon className={`h-5 w-5 transition-transform group-hover:scale-110 ${
                            isActive ? 'text-white' : 'text-gray-500 group-hover:text-orange-600'
                          }`} />
                          
                          <div className="ml-3 flex-1">
                            <span className="block">{item.name}</span>
                            {item.description && (
                              <span className={`text-xs ${
                                isActive ? 'text-orange-100' : 'text-gray-500'
                              }`}>
                                {item.description}
                              </span>
                            )}
                          </div>

                          {/* Badges y notificaciones */}
                          <div className="flex items-center space-x-1">
                            {item.urgent && (
                              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                            )}
                            {item.badge && (
                              <span className={`px-2 py-1 text-xs font-bold rounded-full ${
                                isActive 
                                  ? 'bg-white text-orange-600' 
                                  : item.urgent
                                  ? 'bg-red-100 text-red-700'
                                  : item.badge === 'Nuevo'
                                  ? 'bg-green-100 text-green-700'
                                  : 'bg-orange-100 text-orange-700'
                              }`}>
                                {item.badge}
                              </span>
                            )}
                            {isActive && (
                              <motion.div
                                className="w-2 h-2 bg-white rounded-full"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.2 }}
                              />
                            )}
                          </div>
                        </Link>
                      </motion.li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </nav>

          {/* Footer con información adicional */}
          <motion.div 
            className="px-4 py-4 border-t border-gray-100 bg-gray-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {/* Información de contacto rápido */}
            <div className="mb-3 p-3 bg-white rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-gray-600">Soporte 24/7</span>
                <BuildingOfficeIcon className="h-4 w-4 text-orange-500" />
              </div>
              <div className="text-xs text-gray-600">
                <p>📍 Portoviejo, Ecuador</p>
                <p>📞 +593 991767957</p>
              </div>
            </div>

            {/* Botón de logout */}
            <button
              onClick={() => {
                handleLogout();
                handleNavClick();
              }}
              className="flex items-center w-full px-3 py-3 text-sm font-medium text-gray-700 rounded-lg hover:bg-red-50 hover:text-red-600 transition-all duration-200 group"
            >
              <ArrowLeftOnRectangleIcon className="h-5 w-5 text-gray-500 group-hover:text-red-600 transition-transform group-hover:scale-110" />
              <span className="ml-3">Cerrar Sesión</span>
            </button>
          </motion.div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
};

export default Sidebar; 