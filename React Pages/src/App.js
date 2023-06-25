import React from 'react';
import './styles.css';
import ProductListingPage from './ProductListingPage';
import ProductDetailsPage from './ProductDetailsPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductListingPage />} />
        <Route path="/product-details" element={<ProductDetailsPage />} />
      </Routes>
    </Router>
  );
};

export default App;