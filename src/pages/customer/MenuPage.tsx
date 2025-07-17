import React from 'react';

/**
 * Página del Menú
 * Catálogo de productos disponibles para pedidos de catering
 * 
 * Funcionalidades:
 * - Visualización de productos por categorías
 * - Filtros y búsqueda
 * - Agregar productos al carrito
 */
const MenuPage: React.FC = () => {
  // Datos mock para demostración
  const categories = ['Entrantes', 'Platos Principales', 'Postres', 'Bebidas'];
  
  const menuItems = [
    {
      id: '1',
      name: 'Ensalada César',
      description: 'Lechuga fresca, crutones, parmesano y aderezo César',
      price: 12.99,
      category: 'Entrantes',
      image: '🥗'
    },
    {
      id: '2',
      name: 'Pollo a la Plancha',
      description: 'Pechuga de pollo con vegetales al vapor',
      price: 18.99,
      category: 'Platos Principales',
      image: '🍗'
    },
    {
      id: '3',
      name: 'Tarta de Chocolate',
      description: 'Deliciosa tarta de chocolate con crema',
      price: 8.99,
      category: 'Postres',
      image: '🍰'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Nuestro Menú
        </h1>
        <p className="text-lg text-gray-600">
          Selecciona los productos para tu evento de catering
        </p>
      </div>

      {/* Filtros */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex flex-wrap gap-4 justify-center">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
            Todos
          </button>
          {categories.map((category) => (
            <button
              key={category}
              className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Productos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {menuItems.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="p-6 text-center">
              <div className="text-6xl mb-4">{item.image}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {item.name}
              </h3>
              <p className="text-gray-600 mb-4">
                {item.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-blue-600">
                  ${item.price}
                </span>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                  Agregar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuPage; 