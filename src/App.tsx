import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Context
import { AuthProvider } from './contexts/AuthContext';
import { SidebarProvider } from './contexts/SidebarContext';
import ProtectedRoute from './components/ProtectedRoute';

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
    <Router>
      <AuthProvider>
        <SidebarProvider>
          <div className="App">
            <Routes>
              {/* Rutas públicas con Layout normal */}
              <Route path="/" element={<Layout><div /></Layout>}>
                <Route index element={<HomePage />} />
                <Route path="auth/login" element={<LoginPage />} />
                <Route path="auth/register" element={<RegisterPage />} />
              </Route>

              {/* Rutas del dashboard con DashboardLayout */}
              <Route path="/" element={
                <ProtectedRoute>
                  <DashboardLayout><div /></DashboardLayout>
                </ProtectedRoute>
              }>
                {/* Rutas de cliente */}
                <Route path="dashboard" element={<AdminDashboard />} />
                <Route path="menu" element={<MenuPage />} />
                <Route path="cart" element={<CartPage />} />
                <Route path="orders" element={<OrdersPage />} />
                <Route path="profile" element={<ProfilePage />} />

                {/* Rutas de admin */}
                <Route path="admin" element={<AdminDashboard />} />
                <Route path="admin/clients" element={<ClientManagement />} />
                <Route path="admin/inventory" element={<InventoryPage />} />
                <Route path="admin/delivery" element={<DeliveryPage />} />
                <Route path="admin/metrics" element={<MetricsPage />} />
              </Route>
            </Routes>
          </div>
        </SidebarProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
