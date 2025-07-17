import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthService from '../../services/auth.service';

/**
 * Página de registro
 * Formulario para crear nuevas cuentas de usuario
 */
const RegisterPage: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    direccion: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const authResponse = await AuthService.register(formData);
      
      // Guardar datos de autenticación
      AuthService.saveAuthData(authResponse);
      
      setSuccess('Cuenta creada exitosamente. Redirigiendo...');
      
      // Redirigir al dashboard después de 2 segundos
      setTimeout(() => {
        navigate('/dashboard');
      }, 2000);
      
    } catch (err: any) {
      console.error('Error de registro:', err);
      setError(
        err.response?.data?.message || 
        'Error al crear la cuenta. Inténtalo de nuevo.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Crear Cuenta
          </h2>
          <p className="mt-2 text-gray-600">
            Únete a CateringPro
          </p>
        </div>
        
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md">
            {error}
          </div>
        )}
        
        {success && (
          <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-md">
            {success}
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">
                Nombre Completo
              </label>
              <input
                id="nombre"
                name="nombre"
                type="text"
                required
                value={formData.nombre}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Tu nombre completo"
                disabled={loading}
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="tu@email.com"
                disabled={loading}
              />
            </div>
            
            <div>
              <label htmlFor="telefono" className="block text-sm font-medium text-gray-700">
                Teléfono (Opcional)
              </label>
              <input
                id="telefono"
                name="telefono"
                type="tel"
                value={formData.telefono}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Tu número de teléfono"
                disabled={loading}
              />
            </div>
            
            <div>
              <label htmlFor="direccion" className="block text-sm font-medium text-gray-700">
                Dirección (Opcional)
              </label>
              <input
                id="direccion"
                name="direccion"
                type="text"
                value={formData.direccion}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Tu dirección"
                disabled={loading}
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Contraseña
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                value={formData.password}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="••••••••"
                disabled={loading}
                minLength={6}
              />
              <p className="mt-1 text-xs text-gray-500">
                Mínimo 6 caracteres
              </p>
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Creando cuenta...' : 'Crear Cuenta'}
            </button>
          </div>
        </form>

        <div className="text-center">
          <p className="text-sm text-gray-600">
            ¿Ya tienes cuenta?{' '}
            <Link to="/auth/login" className="font-medium text-blue-600 hover:text-blue-500">
              Inicia sesión
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage; 