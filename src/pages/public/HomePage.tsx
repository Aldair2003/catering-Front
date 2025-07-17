import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Página de inicio - Landing Page
 * Primera impresión para usuarios que visitan la aplicación
 * 
 * Secciones:
 * - Hero section con llamada a la acción
 * - Servicios principales
 * - Características destacadas
 * - Call-to-action para registro
 */
const HomePage: React.FC = () => {
  return (
    <div className="space-y-16">
      
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-r from-blue-50 to-indigo-100 rounded-xl">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            🍽️ Catering <span className="text-blue-600">Automatizado</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Gestiona tu servicio de catering de manera profesional. 
            Desde pedidos personalizados hasta entrega programada.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/menu" 
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold"
            >
              Ver Menú
            </Link>
            <Link 
              to="/auth/register" 
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors text-lg font-semibold"
            >
              Registrarse
            </Link>
          </div>
        </div>
      </section>

      {/* Servicios Principales */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Nuestros Servicios
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Gestión de Clientes */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Gestión de Clientes
              </h3>
              <p className="text-gray-600">
                Registro completo de clientes con historial de pedidos 
                y preferencias personalizadas.
              </p>
            </div>

            {/* Pedidos Personalizados */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Pedidos Personalizados
              </h3>
              <p className="text-gray-600">
                Creación de pedidos adaptados a necesidades específicas 
                con opciones de personalización.
              </p>
            </div>

            {/* Planificación de Entregas */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🚚</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Entrega Programada
              </h3>
              <p className="text-gray-600">
                Sistema de planificación de entregas con seguimiento 
                en tiempo real y notificaciones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Características Destacadas */}
      <section className="py-16 bg-gray-50 rounded-xl">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            ¿Por qué elegir CateringPro?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Panel de Control</h3>
              <p className="text-gray-600 text-sm">Métricas en tiempo real</p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📦</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Gestión Inventario</h3>
              <p className="text-gray-600 text-sm">Control de insumos básico</p>
            </div>

            <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⏰</span>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Automatización</h3>
            <p className="text-gray-600 text-sm">Procesos optimizados</p>
          </div>

          <div className="text-center">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📱</span>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Interfaz Moderna</h3>
            <p className="text-gray-600 text-sm">Fácil de usar</p>
          </div>
        </div>
      </section>

      {/* Call to Action Final */}
      <section className="text-center py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            ¿Listo para comenzar?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Únete a CateringPro y transforma la gestión de tu servicio de catering
          </p>
          <Link 
            to="/auth/register" 
            className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold inline-block"
          >
            Crear Cuenta Gratis
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage; 