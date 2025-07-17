import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Footer de la aplicación
 * Incluye información de la empresa, enlaces útiles y contacto
 * 
 * Secciones:
 * - Información de la empresa
 * - Enlaces rápidos
 * - Información de contacto
 * - Copyright
 */
const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Información de la empresa */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🍽️</span>
              <h2 className="text-xl font-bold">CateringPro</h2>
            </div>
            <p className="text-gray-400 text-sm">
              Servicio de catering automatizado para eventos y empresas. 
              Comida de calidad, entrega puntual.
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Enlaces Rápidos</h3>
            <div className="space-y-2">
              <Link to="/menu" className="block text-gray-400 hover:text-white transition-colors">
                Nuestro Menú
              </Link>
              <Link to="/orders" className="block text-gray-400 hover:text-white transition-colors">
                Mis Pedidos
              </Link>
              <Link to="/profile" className="block text-gray-400 hover:text-white transition-colors">
                Mi Perfil
              </Link>
            </div>
          </div>

          {/* Servicios */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Servicios</h3>
            <div className="space-y-2">
              <p className="text-gray-400 text-sm">• Catering para eventos</p>
              <p className="text-gray-400 text-sm">• Menús personalizados</p>
              <p className="text-gray-400 text-sm">• Entrega programada</p>
              <p className="text-gray-400 text-sm">• Gestión de inventario</p>
            </div>
          </div>

          {/* Contacto */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contacto</h3>
            <div className="space-y-2 text-gray-400 text-sm">
              <p>📧 contacto@cateringpro.com</p>
              <p>📞 +1 (555) 123-4567</p>
              <p>📍 Calle Principal #123, Ciudad</p>
              <p>🕒 Lun-Vie: 8AM-6PM</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 CateringPro. Todos los derechos reservados. 
            Desarrollado para Desafío Senior - Catering Automatizado
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 