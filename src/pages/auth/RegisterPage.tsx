import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  UserIcon,
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  LockClosedIcon,
  EyeIcon,
  EyeSlashIcon,
  CheckCircleIcon,
  ExclamationCircleIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';
import AuthService from '../../services/auth.service';

/**
 * Página de registro moderna con diseño responsive
 * Layout horizontal para desktop, vertical para mobile
 * Tema naranja y animaciones suaves
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
  const [showPassword, setShowPassword] = useState(false);
  
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
          className="w-full max-w-6xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Header simple solo para móviles */}
          <motion.div 
            className="lg:hidden text-center mb-8"
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
            <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent">
              Crear Cuenta
            </h2>
            <p className="mt-2 text-gray-600 text-base">
              Únete a <Link to="/" className="text-orange-600 font-semibold hover:text-orange-700 transition-colors cursor-pointer">PortoCatering</Link>
            </p>
          </motion.div>
          
          {/* Alerts */}
          {error && (
            <motion.div 
              className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg mb-6 max-w-2xl mx-auto"
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
          
          {success && (
            <motion.div 
              className="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg mb-6 max-w-2xl mx-auto"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center">
                <CheckCircleIcon className="h-5 w-5 text-green-400 mr-2" />
                <p className="text-green-700 text-sm">{success}</p>
              </div>
            </motion.div>
          )}
          
          {/* Formulario - Layout responsive */}
          <motion.div
            className="bg-white rounded-2xl shadow-xl border border-orange-100 overflow-hidden"
            variants={itemVariants}
          >
            {/* Layout horizontal para desktop, vertical para móvil */}
            <div className="flex flex-col lg:flex-row">
              
              {/* Panel izquierdo - Header y información (solo desktop) */}
              <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-orange-500 to-orange-600 p-8 flex-col justify-center items-center">
                <div className="text-center text-white w-full max-w-sm">
                  {/* Header con logo dentro del panel naranja */}
                  <motion.div 
                    className="mb-8"
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
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                      Crear Cuenta
                    </h2>
                    <p className="text-orange-100 text-base">
                      Únete a <Link to="/" className="text-white font-semibold hover:text-orange-100 transition-colors cursor-pointer underline">PortoCatering</Link>
                    </p>
                  </motion.div>

                  {/* Información adicional */}
                  <div>
                    <h3 className="text-xl font-bold mb-4">¡Bienvenido!</h3>
                    <p className="text-orange-100 leading-relaxed mb-6">
                      Únete a nuestra comunidad y disfruta de experiencias gastronómicas únicas. 
                      Comienza a planificar eventos memorables.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center text-orange-100">
                        <CheckCircleIcon className="h-5 w-5 mr-3 flex-shrink-0" />
                        <span>Eventos personalizados</span>
                      </div>
                      <div className="flex items-center text-orange-100">
                        <CheckCircleIcon className="h-5 w-5 mr-3 flex-shrink-0" />
                        <span>Calidad garantizada</span>
                      </div>
                      <div className="flex items-center text-orange-100">
                        <CheckCircleIcon className="h-5 w-5 mr-3 flex-shrink-0" />
                        <span>Servicio profesional</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Panel derecho - Formulario */}
              <div className="lg:w-1/2 p-6 sm:p-8 flex items-center justify-center">
                <div className="w-full max-w-md">
                  <form onSubmit={handleSubmit} className="space-y-5">
                    
                    {/* Nombre */}
                    <motion.div variants={itemVariants}>
                      <label htmlFor="nombre" className="block text-sm font-semibold text-gray-700 mb-2">
                        Nombre Completo
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <UserIcon className="h-5 w-5 text-orange-400" />
                        </div>
                        <input
                          id="nombre"
                          name="nombre"
                          type="text"
                          required
                          value={formData.nombre}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 bg-gray-50 focus:bg-white"
                          placeholder="Tu nombre completo"
                          disabled={loading}
                        />
                      </div>
                    </motion.div>
                    
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
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 bg-gray-50 focus:bg-white"
                          placeholder="tu@email.com"
                          disabled={loading}
                        />
                      </div>
                    </motion.div>
                    
                    {/* Teléfono y Dirección en fila para desktop */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Teléfono */}
                      <motion.div variants={itemVariants}>
                        <label htmlFor="telefono" className="block text-sm font-semibold text-gray-700 mb-2">
                          Teléfono <span className="text-gray-400 font-normal">(Opcional)</span>
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <PhoneIcon className="h-5 w-5 text-orange-400" />
                          </div>
                          <input
                            id="telefono"
                            name="telefono"
                            type="tel"
                            value={formData.telefono}
                            onChange={handleChange}
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 bg-gray-50 focus:bg-white"
                            placeholder="Tu número"
                            disabled={loading}
                          />
                        </div>
                      </motion.div>
                      
                      {/* Dirección */}
                      <motion.div variants={itemVariants}>
                        <label htmlFor="direccion" className="block text-sm font-semibold text-gray-700 mb-2">
                          Dirección <span className="text-gray-400 font-normal">(Opcional)</span>
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <MapPinIcon className="h-5 w-5 text-orange-400" />
                          </div>
                          <input
                            id="direccion"
                            name="direccion"
                            type="text"
                            value={formData.direccion}
                            onChange={handleChange}
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 bg-gray-50 focus:bg-white"
                            placeholder="Tu dirección"
                            disabled={loading}
                          />
                        </div>
                      </motion.div>
                    </div>
                    
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
                          value={formData.password}
                          onChange={handleChange}
                          className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 bg-gray-50 focus:bg-white"
                          placeholder="••••••••"
                          disabled={loading}
                          minLength={6}
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
                      <p className="mt-2 text-xs text-gray-500">
                        Mínimo 6 caracteres
                      </p>
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
                              <span>Creando cuenta...</span>
                            </>
                          ) : (
                            <>
                              <span>Crear Cuenta</span>
                              <ArrowRightIcon className="h-5 w-5" />
                            </>
                          )}
                        </div>
                      </motion.button>
                    </motion.div>
                  </form>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Link a login */}
          <motion.div 
            className="text-center mt-6"
            variants={itemVariants}
          >
            <p className="text-sm text-gray-600">
              ¿Ya tienes cuenta?{' '}
              <Link 
                to="/auth/login" 
                className="font-semibold text-orange-600 hover:text-orange-700 transition-colors"
              >
                Inicia sesión aquí
              </Link>
            </p>
          </motion.div>
        </motion.div>
    </div>
  );
};

export default RegisterPage; 