import React from 'react';

/**
 * Página de Perfil del Usuario
 * Información personal y configuración de cuenta
 */
const ProfilePage: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          👤 Mi Perfil
        </h1>
        <p className="text-lg text-gray-600">
          Gestiona tu información personal
        </p>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-md">
        <p className="text-center text-gray-600">
          Configuración de perfil en desarrollo.
        </p>
      </div>
    </div>
  );
};

export default ProfilePage; 