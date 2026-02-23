import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Download from './pages/Download';
import Size from './pages/Size.jsx'
import Support from './pages/Support.jsx';
import CartPage from './pages/CartPage.jsx';
import Account from './pages/Account';
import NavBar from './components/NavBar';
import Footer from './components/Footer.jsx';
import ImageDetails from './components/ImageDetails';
import { CartProvider } from './components/CartContext';

function MainApp() {
  const [category, setCategory] = useState('All');

  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar setCategory={setCategory} />
        <Routes>
          <Route path="/" element={<App category={category} setCategory={setCategory} />} />
          <Route path="/image/:imageId" element={<ImageDetails />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/account" element={<Account />} />
          <Route path="/support" element={<Support />} />
          <Route path="/size" element={<Size />} />
          <Route path="/image/:imageId" element={<ImageDetails />} /> {/* Dynamic route */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MainApp />
  </React.StrictMode>
);
