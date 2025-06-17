import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProductPage from './pages/ProductPage';
import ErrorBoundary from './components/ErrorBoundary';

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <Routes>
        <Route path="/" element={<ProductPage />} />
      </Routes>
    </ErrorBoundary>
  );
};

export default App; 