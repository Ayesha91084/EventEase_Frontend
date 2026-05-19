import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages Import
import Home from './Home';
import Login from './login';
import Signup from './Signup';
import AdminDashboard from './Admindashboard';
import Decorators from './Decorators';
import Vendors from './Vendors';

import ProtectedRoute from './ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/services" element={<Vendors />} />

        {/* Protected Routes */}
        <Route path="/admin-dashboard" element={
          <ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute>
        } />

        <Route path="/decorators" element={
          <ProtectedRoute>
            <Decorators />
          </ProtectedRoute>
        } />

        <Route path="/vendors" element={
          <ProtectedRoute>
            <Vendors />
          </ProtectedRoute>
        } />

      </Routes>
    </BrowserRouter>
  );
}

export default App;