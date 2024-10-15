import React from 'react'; 
import NavBar from '../components/ui/navbar/Navbar';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import { publicRoutes, privateRoutes } from '../routes/routes';

const AppRouter = () => {
  const isAuth = true;

  return (
    <BrowserRouter>
      <NavBar/> 
      <Routes>
        {isAuth
          ? (
            <>
              {privateRoutes.map(route => (
                <Route 
                  key={route.path}  
                  path={route.path} 
                  element={<route.component />}  
                  exact={route.exact}
                />
              ))}
              <Route path="*" element={<Navigate to="/posts" />} /> 
            </>
          )
          : (
            <>
              {publicRoutes.map(route => (
                <Route 
                  key={route.path}  
                  path={route.path} 
                  element={<route.component />}  
                  exact={route.exact}
                />
              ))}
              <Route path="*" element={<Navigate to="/login" />} /> 
            </>
          )
        } 
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
