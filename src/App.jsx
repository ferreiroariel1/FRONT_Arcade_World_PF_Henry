import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { About, Home, Store, Detail } from './views/index.js';
import Navbar from './components/navbar/navbar.jsx';
import Cart from './components/cart/cart.jsx';
import Summary from './components/cart/summary.jsx';
import Failed from './components/cart/failed.jsx';
import Auth from './components/auth/Auth.jsx';
import Profile from './components/profile/Profile.jsx';
import AppdDash from './views/Dashboard/AppDash.jsx';
import Footer from './components/footer/Footer.jsx';
import { AuthProvider } from "./context/AuthContext.jsx";
import './App.css';

function App() {
  return (
    <div>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/store' element={<Store />} />
          <Route path='/detail/:id' element={<Detail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/cart/summary" element={<Summary />} />
          <Route path="/cart/failed" element={<Failed />} />
          <Route path="/auth" element={<Auth />} />
          <Route path='/user/profile' element={<Profile />} />
          <Route path='/Dashboard' element={<AppdDash />} />
          {/* Agregar redirecciones aquí */}
          <Route path='/old-route' element={<Navigate to='/new-route' />} />
        </Routes>
        <Footer />
      </AuthProvider>
    </div>
  );
}

export default App;
