import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full mx-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            🍽️ Catering App
          </h1>
          <p className="text-gray-600 mb-6">
            ¡TailwindCSS configurado correctamente!
          </p>
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
            ✅ Proyecto listo para desarrollo
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
