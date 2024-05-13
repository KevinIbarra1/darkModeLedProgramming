import React from 'react';
import {
  Routes,
  Route
} from 'react-router-dom';

import IndexPage from './pages/Index.js';
import AboutusPage from './pages/Aboutus.js';
import ServiciosPage from './pages/Pricing.js';
import ContactoPage from './pages/ContactUs.js';

function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
         
      <Route path="/aboutus" element={<AboutusPage />} />
         
      <Route path="/pricing" element={<ServiciosPage />} />
         
      <Route path="/contactUs" element={<ContactoPage />} />
    </Routes>
  );
}

export default App;
