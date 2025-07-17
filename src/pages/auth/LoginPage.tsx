import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  EnvelopeIcon,
  LockClosedIcon,
  EyeIcon,
  EyeSlashIcon,
  CheckCircleIcon,
  ExclamationCircleIcon,
  ArrowRightIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';
import { useAuth } from '../../contexts/AuthContext';

/**
 * Página de login moderna con diseño responsive
 * Formulario elegante de autenticación para usuarios registrados
 * Tema naranja y animaciones suaves
 */
const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // Obtener la ruta a la que el usuario quería acceder antes del login
  const from = (location.state as any)?.from?.pathname || '/dashboard';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Iniciando login con:', { email, password });
    setLoading(true);
    setError('');

    try {
      console.log('Llamando a AuthService.login...');
      await login(email, password);
      console.log('Login exitoso, redirigiendo...');
      // Redirigir a la página que el usuario quería acceder o al dashboard
      navigate(from, { replace: true });
    } catch (err: any) {
      console.error('Error de login completo:', err);
      console.error('Error response:', err.response);
      console.error('Error message:', err.message);
      setError(
        err.response?.data?.message || 
        'Error al iniciar sesión. Verifica tus credenciales.'
      );
    } finally {
      setLoading(false);
    }
  };

  // Animaciones para los elementos
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100 flex items-center justify-center py-8 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="max-w-md w-full space-y-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header con logo */}
        <motion.div 
          className="text-center"
          variants={itemVariants}
        >
          <motion.div
            className="mx-auto h-16 w-16 mb-4"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
          >
            <img 
              src="/logo/logoCatemini.png" 
              alt="PortoCatering Logo" 
              className="h-16 w-16 object-contain mx-auto"
            />
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent">
            Iniciar Sesión
          </h2>
          <p className="mt-2 text-gray-600 text-base">
            Accede a tu cuenta de <Link to="/" className="text-orange-600 font-semibold hover:text-orange-700 transition-colors cursor-pointer">PortoCatering</Link>
          </p>
        </motion.div>
        
        {/* Alert de error */}
        {error && (
          <motion.div 
            className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center">
              <ExclamationCircleIcon className="h-5 w-5 text-red-400 mr-2" />
              <p className="text-red-700 text-sm">{error}</p>
            </div>
          </motion.div>
        )}
        
        {/* Formulario */}
        <motion.div
          className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-orange-100"
          variants={itemVariants}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Email */}
            <motion.div variants={itemVariants}>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                Correo Electrónico
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <EnvelopeIcon className="h-5 w-5 text-orange-400" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 bg-gray-50 focus:bg-white"
                  placeholder="tu@email.com"
                  disabled={loading}
                />
              </div>
            </motion.div>
            
            {/* Contraseña */}
            <motion.div variants={itemVariants}>
              <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
                Contraseña
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <LockClosedIcon className="h-5 w-5 text-orange-400" />
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 bg-gray-50 focus:bg-white"
                  placeholder="••••••••"
                  disabled={loading}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeSlashIcon className="h-5 w-5 text-gray-400 hover:text-orange-500 transition-colors" />
                  ) : (
                    <EyeIcon className="h-5 w-5 text-gray-400 hover:text-orange-500 transition-colors" />
                  )}
                </button>
              </div>
            </motion.div>

            {/* Opciones adicionales */}
            <motion.div 
              className="flex items-center justify-between text-sm"
              variants={itemVariants}
            >
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 text-gray-600">
                  Recordarme
                </label>
              </div>
              <Link 
                to="/auth/forgot-password" 
                className="text-orange-600 hover:text-orange-700 font-medium transition-colors"
              >
                ¿Olvidaste tu contraseña?
              </Link>
            </motion.div>

            {/* Botón de envío */}
            <motion.div
              variants={itemVariants}
              className="pt-4"
            >
              <motion.button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 px-6 rounded-xl font-semibold text-base hover:from-orange-600 hover:to-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg hover:shadow-xl"
                whileHover={{ scale: loading ? 1 : 1.02 }}
                whileTap={{ scale: loading ? 1 : 0.98 }}
              >
                <div className="flex items-center justify-center space-x-2">
                  {loading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Ingresando...</span>
                    </>
                  ) : (
                    <>
                      <ShieldCheckIcon className="h-5 w-5" />
                      <span>Iniciar Sesión</span>
                      <ArrowRightIcon className="h-5 w-5" />
                    </>
                  )}
                </div>
              </motion.button>
            </motion.div>
          </form>


        </motion.div>

        {/* Link a registro */}
        <motion.div 
          className="text-center"
          variants={itemVariants}
        >
          <p className="text-sm text-gray-600">
            ¿No tienes cuenta?{' '}
            <Link 
              to="/auth/register" 
              className="font-semibold text-orange-600 hover:text-orange-700 transition-colors"
            >
              Regístrate aquí
            </Link>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LoginPage; 