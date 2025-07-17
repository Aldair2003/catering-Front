import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { HomeIcon, ClipboardDocumentListIcon, UserIcon, ArrowLeftOnRectangleIcon } from '@heroicons/react/24/outline';

const navItems = [
  { name: 'Menú', path: '/menu', icon: HomeIcon },
  { name: 'Mis Pedidos', path: '/orders', icon: ClipboardDocumentListIcon },
  { name: 'Perfil', path: '/profile', icon: UserIcon },
];

const Sidebar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate('/auth/login');
  };

  return (
    <aside className="fixed top-0 left-0 h-full w-56 bg-white border-r border-gray-200 shadow-lg flex flex-col z-40">
      <div className="px-6 py-4 border-b border-gray-100">
        <span className="text-xl font-bold text-orange-600">PortoCatering</span>
      </div>
      <nav className="flex-1 px-2 py-4 space-y-2">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center gap-3 px-4 py-2 rounded-lg text-gray-700 hover:bg-orange-50 transition-colors ${location.pathname === item.path ? 'bg-orange-100 text-orange-700 font-semibold' : ''}`}
          >
            <item.icon className="h-5 w-5" />
            <span>{item.name}</span>
          </Link>
        ))}
      </nav>
      <button
        className="flex items-center gap-3 px-4 py-2 m-4 rounded-lg text-red-600 hover:bg-red-50 transition-colors border-t border-gray-100"
        onClick={handleLogout}
      >
        <ArrowLeftOnRectangleIcon className="h-5 w-5" />
        <span>Cerrar Sesión</span>
      </button>
    </aside>
  );
};

export default Sidebar; 