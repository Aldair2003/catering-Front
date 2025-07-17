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
  ShoppingCartIcon
} from '@heroicons/react/24/outline';
import {
  HomeIcon as HomeIconSolid,
  ClipboardDocumentListIcon as ClipboardDocumentListIconSolid,
  UserIcon as UserIconSolid,
  ChartBarIcon as ChartBarIconSolid,
  UsersIcon as UsersIconSolid,
  CubeIcon as CubeIconSolid,
  TruckIcon as TruckIconSolid,
  ShoppingCartIcon as ShoppingCartIconSolid,
} from '@heroicons/react/24/solid';
import { useSidebar } from '../../contexts/SidebarContext';

interface NavItem {
  name: string;
  path: string;
  icon: React.ForwardRefExoticComponent<React.SVGProps<SVGSVGElement>>;
  iconSolid: React.ForwardRefExoticComponent<React.SVGProps<SVGSVGElement>>;
}

const Sidebar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isOpen, closeSidebar, isMobile } = useSidebar();

  const isAdminRoute = location.pathname.startsWith('/admin');

  // Navegación simple para clientes
  const customerNavItems: NavItem[] = [
    { 
      name: 'Dashboard', 
      path: '/dashboard', 
      icon: ChartBarIcon, 
      iconSolid: ChartBarIconSolid
    },
    { 
      name: 'Menú', 
      path: '/menu', 
      icon: HomeIcon, 
      iconSolid: HomeIconSolid
    },
    { 
      name: 'Mis Pedidos', 
      path: '/orders', 
      icon: ClipboardDocumentListIcon, 
      iconSolid: ClipboardDocumentListIconSolid
    },
    { 
      name: 'Carrito', 
      path: '/cart', 
      icon: ShoppingCartIcon, 
      iconSolid: ShoppingCartIconSolid
    },
    { 
      name: 'Perfil', 
      path: '/profile', 
      icon: UserIcon, 
      iconSolid: UserIconSolid
    }
  ];

  // Navegación simple para admin
  const adminNavItems: NavItem[] = [
    { 
      name: 'Dashboard', 
      path: '/admin', 
      icon: ChartBarIcon, 
      iconSolid: ChartBarIconSolid
    },
    { 
      name: 'Clientes', 
      path: '/admin/clients', 
      icon: UsersIcon, 
      iconSolid: UsersIconSolid
    },
    { 
      name: 'Inventario', 
      path: '/admin/inventory', 
      icon: CubeIcon, 
      iconSolid: CubeIconSolid
    },
    { 
      name: 'Entregas', 
      path: '/admin/delivery', 
      icon: TruckIcon, 
      iconSolid: TruckIconSolid
    },
    { 
      name: 'Métricas', 
      path: '/admin/metrics', 
      icon: ChartBarIcon, 
      iconSolid: ChartBarIconSolid
    }
  ];

  const navItems = isAdminRoute ? adminNavItems : customerNavItems;

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

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay para móvil */}
          {isMobile && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              onClick={closeSidebar}
            />
          )}

          {/* Sidebar */}
          <motion.aside
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ type: "spring", damping: 25, stiffness: 200, duration: 0.3 }}
            className={`
              ${isMobile 
                ? 'fixed top-0 left-0 h-full w-64 bg-white shadow-xl z-50' 
                : 'relative h-screen w-64 bg-white shadow-lg border-r border-gray-200'
              }
            `}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <div className="flex items-center space-x-3">
                <img 
                  src="/logo/logoCatemini.png" 
                  alt="PortoCatering" 
                  className="w-8 h-8"
                />
                <span className="text-xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                  PortoCatering
                </span>
              </div>
              {isMobile && (
                <button
                  onClick={closeSidebar}
                  className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <XMarkIcon className="w-5 h-5 text-gray-500" />
                </button>
              )}
            </div>

            {/* Navegación */}
            <nav className="flex-1 p-4">
              <ul className="space-y-2">
                {navItems.map((item, index) => {
                  const isActive = isActivePath(item.path);
                  const Icon = isActive ? item.iconSolid : item.icon;
                  
                  return (
                    <motion.li
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.03, duration: 0.2 }}
                    >
                      <Link
                        to={item.path}
                        onClick={handleNavClick}
                        className={`
                          flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200
                          ${isActive 
                            ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg' 
                            : 'text-gray-600 hover:bg-gray-50 hover:text-orange-500'
                          }
                        `}
                      >
                        <Icon className="w-5 h-5" />
                        <span className="font-medium">{item.name}</span>
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
            </nav>

            {/* Footer */}
            <div className="p-4 border-t border-gray-100">
              <button
                onClick={handleLogout}
                className="flex items-center space-x-3 w-full px-4 py-3 text-gray-600 hover:bg-red-50 hover:text-red-600 rounded-xl transition-all duration-200"
              >
                <ArrowLeftOnRectangleIcon className="w-5 h-5" />
                <span className="font-medium">Cerrar Sesión</span>
              </button>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};

export default Sidebar; 