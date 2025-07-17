import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  UsersIcon,
  HeartIcon,
  StarIcon,
  SparklesIcon,
  GlobeAltIcon,
  ClockIcon,
  UserIcon,
  BuildingOfficeIcon,
  FireIcon,
  BeakerIcon
} from '@heroicons/react/24/outline';

/**
 * Página de inicio - Landing Page Naranja
 * Exhibición hermosa de servicios de catering profesional
 * 
 * Secciones:
 * - Hero section con gradientes naranja
 * - Galería de servicios visual
 * - Menú y platos destacados
 * - Especialidades del chef
 * - Testimonios y experiencia
 * - Información de contacto elegante
 */
const HomePage: React.FC = () => {
  // Configuración de animaciones para iconos
  const iconHoverVariants = {
    hover: { 
      scale: 1.2,
      rotate: 10,
      transition: { duration: 0.3 }
    }
  };

  // Datos de servicios con iconos
  const services = [
    {
      icon: BuildingOfficeIcon,
      title: "Eventos Corporativos",
      description: "Servicios profesionales para reuniones de empresa, conferencias y celebraciones corporativas.",
      color: "from-orange-400 to-red-500"
    },
    {
      icon: HeartIcon,
      title: "Bodas & Celebraciones",
      description: "Menús especiales y presentación exquisita para los momentos más importantes de tu vida.",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: UsersIcon,
      title: "Eventos Sociales",
      description: "Catering personalizado para fiestas familiares, reuniones y eventos especiales.",
      color: "from-orange-600 to-orange-700"
    }
  ];

  // Datos del menú destacado
  const menuItems = [
    {
      name: "Ensalada César Gourmet",
      description: "Lechuga romana, crutones artesanales, parmesano añejo y aderezo César casero",
      price: "$12.99",
      category: "Entrantes",
      image: "🥗",
      popular: true
    },
    {
      name: "Pollo a la Plancha con Hierbas",
      description: "Pechuga de pollo orgánico con hierbas frescas y vegetales de temporada",
      price: "$18.99",
      category: "Platos Principales",
      image: "🍗",
      popular: false
    },
    {
      name: "Risotto de Champiñones",
      description: "Arroz arborio con champiñones silvestres, parmesano y vino blanco",
      price: "$16.99",
      category: "Platos Principales",
      image: "🍚",
      popular: true
    },
    {
      name: "Tarta de Chocolate Belga",
      description: "Chocolate belga 70% con crema chantilly y frutos rojos",
      price: "$9.99",
      category: "Postres",
      image: "🍰",
      popular: false
    },
    {
      name: "Cóctel de Frutas Tropicales",
      description: "Mezcla de frutas frescas con jugo de naranja y menta",
      price: "$6.99",
      category: "Bebidas",
      image: "🍹",
      popular: true
    },
    {
      name: "Vino Tinto Reserva",
      description: "Selección especial de vinos tintos de la región",
      price: "$24.99",
      category: "Bebidas",
      image: "🍷",
      popular: false
    }
  ];

  const specialties = [
    {
      icon: UserIcon,
      title: "Chef Profesional",
      description: "15 años de experiencia en alta cocina"
    },
    {
      icon: SparklesIcon,
      title: "Ingredientes Premium",
      description: "Solo los mejores ingredientes frescos y locales"
    },
    {
      icon: GlobeAltIcon,
      title: "Cocina Internacional",
      description: "Fusión de sabores del mundo entero"
    },
    {
      icon: ClockIcon,
      title: "Servicio Puntual",
      description: "Entrega perfecta en tiempo y forma"
    }
  ];

  return (
    <div className="min-h-screen">
      
      {/* Hero Section - Gradiente Naranja Hermoso */}
      <motion.section 
        className="relative py-20 px-4 text-center overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #ff6b35 0%, #f7931e 25%, #ffb347 50%, #ff8c42 75%, #ff6b35 100%)"
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Decoración de fondo */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute -top-40 -right-40 w-80 h-80 bg-white bg-opacity-10 rounded-full"
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360] 
            }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              ease: "linear" 
            }}
          />
          <motion.div 
            className="absolute -bottom-32 -left-32 w-64 h-64 bg-white bg-opacity-5 rounded-full"
            animate={{ 
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0] 
            }}
            transition={{ 
              duration: 15,
              repeat: Infinity,
              ease: "linear" 
            }}
          />
        </div>

        <div className="relative max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <motion.div 
              className="inline-flex items-center space-x-4 mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src="/logo/logoCatemini.png" 
                  alt="CateringPro Logo" 
                  className="h-20 w-20 object-contain"
                />
              </motion.div>
              <div className="text-left">
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-2">
                  CateringPro
                </h1>
                <p className="text-xl text-orange-100">Experiencias Culinarias Únicas</p>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.p 
            className="text-2xl md:text-3xl text-white mb-8 leading-relaxed font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Transformamos tus eventos en experiencias gastronómicas
            <br />
            <span className="font-semibold text-orange-100">memorables e irrepetibles</span>
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Link 
                to="/menu" 
                className="inline-flex items-center space-x-3 bg-white text-orange-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-50 transition-all duration-300 shadow-2xl"
              >
                <span>Ver Nuestros Servicios</span>
                <motion.svg 
                  className="h-5 w-5" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </motion.svg>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Servicios Principales - Cards Elegantes */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent">
                Nuestros Servicios
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cada evento es único y merece un servicio excepcional. 
              Descubre cómo podemos hacer tu celebración perfecta.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="group relative bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                {/* Gradiente de fondo */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                <div className="relative p-8">
                  <motion.div 
                    className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.color} text-white mb-6`}
                    variants={iconHoverVariants}
                    whileHover="hover"
                  >
                    <service.icon className="h-8 w-8" />
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-orange-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Menú Destacado - Nueva Sección */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent">
                Nuestro Menú Destacado
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Una selección de nuestros platos más populares y bebidas especiales
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.name}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-100"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="p-6">
                  {/* Badge popular */}
                  {item.popular && (
                    <motion.div 
                      className="inline-flex items-center space-x-1 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold mb-4"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: 0.5, type: "spring" }}
                      viewport={{ once: true }}
                    >
                      <FireIcon className="h-3 w-3" />
                      <span>Popular</span>
                    </motion.div>
                  )}

                  {/* Emoji del plato */}
                  <div className="text-6xl mb-4 text-center group-hover:scale-110 transition-transform duration-300">
                    {item.image}
                  </div>

                  {/* Categoría */}
                  <div className="text-sm text-orange-600 font-medium mb-2 text-center">
                    {item.category}
                  </div>

                  {/* Nombre del plato */}
                  <h3 className="text-xl font-bold text-gray-800 mb-3 text-center group-hover:text-orange-700 transition-colors">
                    {item.name}
                  </h3>

                  {/* Descripción */}
                  <p className="text-gray-600 text-sm text-center mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Precio */}
                  <div className="text-center">
                    <span className="text-2xl font-bold text-orange-600">
                      {item.price}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>


        </div>
      </section>

      {/* Especialidades del Chef */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent">
                Nuestra Experiencia
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Lo que nos hace únicos en el mundo del catering profesional
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialties.map((specialty, index) => (
              <motion.div
                key={specialty.title}
                className="text-center group"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="inline-flex p-6 rounded-full bg-gradient-to-br from-orange-100 to-orange-200 text-orange-600 mb-4 group-hover:from-orange-500 group-hover:to-orange-600 group-hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <specialty.icon className="h-8 w-8" />
                </motion.div>
                <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-orange-700 transition-colors">
                  {specialty.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {specialty.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Final - Elegante */}
      <motion.section 
        className="py-20 bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 text-white relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {/* Decoración de fondo */}
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-10 right-10 w-32 h-32 bg-white bg-opacity-10 rounded-full"
            animate={{ scale: [1, 1.3, 1], rotate: [0, 180, 360] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-10 left-10 w-24 h-24 bg-white bg-opacity-5 rounded-full"
            animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="inline-flex items-center space-x-2 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <StarIcon className="h-8 w-8 text-yellow-300" />
              <StarIcon className="h-8 w-8 text-yellow-300" />
              <StarIcon className="h-8 w-8 text-yellow-300" />
              <StarIcon className="h-8 w-8 text-yellow-300" />
              <StarIcon className="h-8 w-8 text-yellow-300" />
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              ¿Listo para crear algo extraordinario?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Contacta con nosotros y descubre cómo podemos hacer tu evento inolvidable
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Link 
                to="/auth/register" 
                className="inline-flex items-center space-x-3 bg-white text-orange-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-50 transition-all duration-300 shadow-2xl"
              >
                <span>Contactar Ahora</span>
                <motion.svg 
                  className="h-5 w-5" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </motion.svg>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default HomePage; 