import React, { useState } from 'react';

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
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  
  // Datos mock para demostración
  const categories = ['Todos', 'Entrantes', 'Platos Principales', 'Postres', 'Bebidas'];
  
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

  const filteredItems = selectedCategory === 'Todos' 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          🍽️ Nuestro Menú
        </h1>
        <p className="text-lg text-gray-600">
          Selecciona los productos para tu evento de catering
        </p>
      </div>

      {/* Filtros por categoría */}
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === category
                ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg'
                : 'bg-white text-gray-700 border border-gray-300 hover:bg-orange-50 hover:text-orange-600'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grid de productos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200">
            <div className="p-6">
              <div className="text-4xl text-center mb-4">{item.image}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.name}</h3>
              <p className="text-gray-600 text-sm mb-4">{item.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-orange-600">${item.price}</span>
                <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all shadow-md hover:shadow-lg">
                  Agregar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No hay productos en esta categoría</p>
        </div>
      )}
    </div>
  );
};

export default MenuPage; 