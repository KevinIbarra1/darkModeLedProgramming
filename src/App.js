import React from 'react';
import {
  Routes,
  Route
} from 'react-router-dom';

import IndexPage from './pages/Index.js';
import AboutusPage from './pages/Aboutus.js';
import PricingPage from './pages/Pricing.js';
import ContactUs from './pages/ContactUs.js';

function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
         
      <Route path="/aboutus" element={<AboutusPage />} />
         
      <Route path="/pricing" element={<PricingPage />} />
         
      <Route path="/contactUs" element={<ContactUs />} />
    </Routes>
  );
}

export default App;
