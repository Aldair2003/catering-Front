import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Context
import { AuthProvider } from './contexts/AuthContext';

// Layout Components
import Layout from './components/layout/Layout';
import DashboardLayout from './components/layout/DashboardLayout';

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
 * Componente principal de la aplicación PortoCatering
 * Configura el sistema de rutas con layouts apropiados
 * 
 * Estructura de rutas:
 * - Públicas: Home (con Layout normal)
 * - Auth: Login, Register (sin Layout)
 * - Dashboard: Admin dashboard con sidebar
 * - Cliente: Páginas con DashboardLayout
 * - Admin: Páginas administrativas con DashboardLayout
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
            
            {/* Rutas de Autenticación (sin layout) */}
            <Route path="/auth/login" element={<LoginPage />} />
            <Route path="/auth/register" element={<RegisterPage />} />
            
            {/* Dashboard Principal */}
            <Route path="/dashboard" element={
              <DashboardLayout>
                <AdminDashboard />
              </DashboardLayout>
            } />
            
            {/* Rutas de Cliente con Dashboard Layout */}
            <Route path="/menu" element={
              <DashboardLayout>
                <MenuPage />
              </DashboardLayout>
            } />
            <Route path="/cart" element={
              <DashboardLayout>
                <CartPage />
              </DashboardLayout>
            } />
            <Route path="/orders" element={
              <DashboardLayout>
                <OrdersPage />
              </DashboardLayout>
            } />
            <Route path="/profile" element={
              <DashboardLayout>
                <ProfilePage />
              </DashboardLayout>
            } />
            
            {/* Rutas de Administración con Dashboard Layout */}
            <Route path="/admin" element={
              <DashboardLayout>
                <AdminDashboard />
              </DashboardLayout>
            } />
            <Route path="/admin/clients" element={
              <DashboardLayout>
                <ClientManagement />
              </DashboardLayout>
            } />
            <Route path="/admin/inventory" element={
              <DashboardLayout>
                <InventoryPage />
              </DashboardLayout>
            } />
            <Route path="/admin/delivery" element={
              <DashboardLayout>
                <DeliveryPage />
              </DashboardLayout>
            } />
            <Route path="/admin/metrics" element={
              <DashboardLayout>
                <MetricsPage />
              </DashboardLayout>
            } />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
