import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  DocumentTextIcon,
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
 * Footer de la aplicación
 * Incluye información de la empresa, enlaces útiles y contacto
 * Diseño elegante con colores naranja
 * 
 * Secciones:
 * - Información de la empresa
 * - Servicios destacados  
 * - Información de contacto
 * - Copyright
 */
const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Información de la empresa */}
          <div className="space-y-4">
            <motion.div 
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-3 rounded-xl">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div>
                <h2 className="text-xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                  CateringPro
                </h2>
                <p className="text-sm text-gray-400">Experiencias Culinarias Únicas</p>
              </div>
            </motion.div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Creamos experiencias gastronómicas memorables para tus eventos más especiales. 
              Calidad, sabor y presentación excepcional en cada servicio.
            </p>
          </div>

          {/* Servicios rápidos */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-orange-400">Nuestros Servicios</h3>
            <div className="space-y-3">
              <motion.div 
                className="flex items-center space-x-2 text-gray-400 hover:text-orange-400 transition-colors"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <BuildingOfficeIcon className="h-4 w-4" />
                <span className="text-sm">Eventos Corporativos</span>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-2 text-gray-400 hover:text-orange-400 transition-colors"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <HeartIcon className="h-4 w-4" />
                <span className="text-sm">Bodas & Celebraciones</span>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-2 text-gray-400 hover:text-orange-400 transition-colors"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <UsersIcon className="h-4 w-4" />
                <span className="text-sm">Eventos Sociales</span>
              </motion.div>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-orange-400">Enlaces Rápidos</h3>
            <div className="space-y-3">
              <Link 
                to="/" 
                className="flex items-center space-x-2 text-gray-400 hover:text-orange-400 transition-colors group"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <DocumentTextIcon className="h-4 w-4" />
                </motion.div>
                <span className="text-sm group-hover:translate-x-1 transition-transform">Inicio</span>
              </Link>
              <Link 
                to="/menu" 
                className="flex items-center space-x-2 text-gray-400 hover:text-orange-400 transition-colors group"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <ClipboardDocumentListIcon className="h-4 w-4" />
                </motion.div>
                <span className="text-sm group-hover:translate-x-1 transition-transform">Servicios</span>
              </Link>
              <Link 
                to="/auth/login" 
                className="flex items-center space-x-2 text-gray-400 hover:text-orange-400 transition-colors group"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <UserIcon className="h-4 w-4" />
                </motion.div>
                <span className="text-sm group-hover:translate-x-1 transition-transform">Admin</span>
              </Link>
            </div>
          </div>

          {/* Contacto */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-orange-400">Contacto</h3>
            <div className="space-y-3">
              <motion.div 
                className="flex items-center space-x-2 text-gray-400"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <EnvelopeIcon className="h-4 w-4 text-orange-500" />
                <span className="text-sm">contacto@cateringpro.com</span>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-2 text-gray-400"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <PhoneIcon className="h-4 w-4 text-orange-500" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-2 text-gray-400"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <MapPinIcon className="h-4 w-4 text-orange-500" />
                <span className="text-sm">Calle Principal #123, Ciudad</span>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-2 text-gray-400"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <ClockIcon className="h-4 w-4 text-orange-500" />
                <span className="text-sm">Lun-Vie: 8AM-6PM</span>
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
            © 2024 CateringPro. Todos los derechos reservados. 
            <span className="text-orange-400"> Experiencias culinarias excepcionales</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 