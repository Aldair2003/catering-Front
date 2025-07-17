import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Context
import { AuthProvider } from './contexts/AuthContext';

// Layout Components
import Layout from './components/layout/Layout';

// Public Pages
import HomePage from './pages/public/HomePage';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';

// Customer Pages
import MenuPage from './pages/customer/MenuPage';
import CartPage from './pages/customer/CartPage';
import OrdersPage from './pages/customer/OrdersPage';
import ProfilePage from './pages/customer/ProfilePage';

// Admin Pages
import AdminDashboard from './pages/admin/AdminDashboard';
import ClientManagement from './pages/admin/ClientManagement';
import InventoryPage from './pages/admin/InventoryPage';
import DeliveryPage from './pages/admin/DeliveryPage';
import MetricsPage from './pages/admin/MetricsPage';

/**
 * Componente principal de la aplicación
 * Configura el sistema de rutas para el proyecto de Catering Automatizado
 * 
 * Estructura de rutas:
 * - Públicas: Home, Login, Register
 * - Cliente: Menú, Carrito, Pedidos, Perfil
 * - Admin: Dashboard, Clientes, Inventario, Entregas, Métricas
 */
function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Routes>
            {/* Rutas Públicas */}
            <Route path="/" element={
              <Layout>
                <HomePage />
              </Layout>
            } />
            
            {/* Rutas de Autenticación */}
            <Route path="/auth/login" element={<LoginPage />} />
            <Route path="/auth/register" element={<RegisterPage />} />
            
            {/* Dashboard - redirige al menú por defecto */}
            <Route path="/dashboard" element={
              <Layout>
                <MenuPage />
              </Layout>
            } />
            
            {/* Rutas de Cliente */}
            <Route path="/menu" element={
              <Layout>
                <MenuPage />
              </Layout>
            } />
            <Route path="/cart" element={
              <Layout>
                <CartPage />
              </Layout>
            } />
            <Route path="/orders" element={
              <Layout>
                <OrdersPage />
              </Layout>
            } />
            <Route path="/profile" element={
              <Layout>
                <ProfilePage />
              </Layout>
            } />
            
            {/* Rutas de Administración */}
            <Route path="/admin" element={
              <Layout>
                <AdminDashboard />
              </Layout>
            } />
            <Route path="/admin/clients" element={
              <Layout>
                <ClientManagement />
              </Layout>
            } />
            <Route path="/admin/inventory" element={
              <Layout>
                <InventoryPage />
              </Layout>
            } />
            <Route path="/admin/delivery" element={
              <Layout>
                <DeliveryPage />
              </Layout>
            } />
            <Route path="/admin/metrics" element={
              <Layout>
                <MetricsPage />
              </Layout>
            } />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
