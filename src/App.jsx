import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminRoutes from './routes/AdminRoutes';
import ClientRoutes from './routes/ClientRoutes';

const App = () => {
  const environment = import.meta.env.VITE_ENV; // Using Vite environment variable

  // Determine which routes to load based on environment
  const routes = environment === 'admin' ? AdminRoutes : ClientRoutes;

  // Use useEffect to change the document title dynamically
  useEffect(() => {
    if (environment === 'admin') {
      document.title = 'Admin - ASAB';
    } else {
      document.title = 'Client - ASAB';
    }
  }, [environment]); // Dependency array includes environment

  const renderRoutes = (routes) => {
    return routes.map((route, index) => {
      if (route.children) {
        return (
          <Route key={index} path={route.path} element={route.element}>
            {renderRoutes(route.children)} {/* Recursively render child routes */}
          </Route>
        );
      }

      return <Route key={index} path={route.path} element={route.element} />;
    });
  };

  return (
    <Router>
      <Routes>{renderRoutes(routes)}</Routes>
    </Router>
  );
};

export default App;
