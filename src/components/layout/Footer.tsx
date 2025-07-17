import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  HomeIcon,
  ClipboardDocumentListIcon,
  UserIcon,
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ClockIcon,
  BuildingOfficeIcon,
  HeartIcon,
  UsersIcon
} from '@heroicons/react/24/outline';

/**
 * Footer de la aplicación PortoCatering
 * Incluye información de la empresa, enlaces útiles y contacto
 * Diseño elegante con colores naranja y responsive
 * 
 * Secciones:
 * - Información de la empresa con logo
 * - Servicios destacados  
 * - Enlaces de navegación
 * - Información de contacto
 * - Copyright
 */
const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          
          {/* Información de la empresa */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <motion.div 
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <img 
                  src="/logo/logoCatemini.png" 
                  alt="PortoCatering Logo" 
                  className="h-12 w-12 object-contain"
                />
              </motion.div>
              <div>
                <h2 className="text-xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                  PortoCatering
                </h2>
                <p className="text-sm text-gray-400">Experiencias Culinarias Únicas</p>
              </div>
            </motion.div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Creamos experiencias gastronómicas memorables para tus eventos más especiales. 
              Calidad, sabor y presentación excepcional en cada servicio.
            </p>
          </div>

          {/* Servicios destacados */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-orange-400">Nuestros Servicios</h3>
            <div className="space-y-3">
              <motion.div 
                className="flex items-center space-x-2 text-gray-400 hover:text-orange-400 transition-colors cursor-pointer"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <BuildingOfficeIcon className="h-4 w-4 flex-shrink-0" />
                <span className="text-sm">Eventos Corporativos</span>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-2 text-gray-400 hover:text-orange-400 transition-colors cursor-pointer"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <HeartIcon className="h-4 w-4 flex-shrink-0" />
                <span className="text-sm">Bodas & Celebraciones</span>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-2 text-gray-400 hover:text-orange-400 transition-colors cursor-pointer"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <UsersIcon className="h-4 w-4 flex-shrink-0" />
                <span className="text-sm">Eventos Sociales</span>
              </motion.div>
            </div>
          </div>

          {/* Enlaces de navegación */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-orange-400">Navegación</h3>
            <div className="space-y-3">
              <Link 
                to="/" 
                className="flex items-center space-x-2 text-gray-400 hover:text-orange-400 transition-colors group"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <HomeIcon className="h-4 w-4 flex-shrink-0" />
                </motion.div>
                <span className="text-sm group-hover:translate-x-1 transition-transform">Inicio</span>
              </Link>

              <Link 
                to="/auth/login" 
                className="flex items-center space-x-2 text-gray-400 hover:text-orange-400 transition-colors group"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <UserIcon className="h-4 w-4 flex-shrink-0" />
                </motion.div>
                <span className="text-sm group-hover:translate-x-1 transition-transform">Iniciar Sesión</span>
              </Link>
            </div>
          </div>

          {/* Contacto */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-orange-400">Contacto</h3>
            <div className="space-y-3">
              <motion.div 
                className="flex items-start space-x-2 text-gray-400"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <EnvelopeIcon className="h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm">contacto@portocatering.com</span>
              </motion.div>
              <motion.div 
                className="flex items-start space-x-2 text-gray-400"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <PhoneIcon className="h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm">+593 991767957</span>
              </motion.div>
              <motion.div 
                className="flex items-start space-x-2 text-gray-400"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <MapPinIcon className="h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Portoviejo, Ecuador</span>
              </motion.div>
              <motion.div 
                className="flex items-start space-x-2 text-gray-400"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <ClockIcon className="h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Lun-Dom: 7AM-10PM</span>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <motion.div 
          className="border-t border-gray-700 mt-8 pt-6 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-sm">
            © 2024 PortoCatering. Todos los derechos reservados. 
            <span className="text-orange-400"> Experiencias culinarias excepcionales</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 