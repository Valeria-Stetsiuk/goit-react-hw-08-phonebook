import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from 'pages/HomePage/HomePage';
import { ContactPage } from '../pages/ContactPage/ContactPage';
import { PrivateRoute } from 'HOCs/PrivateRoute';

import { LoginPage } from 'pages/LoginPage/LoginPage';
import { RegisterPage } from '../pages/RegisterPage/RegisterPage';
import { Layout } from './Layout/Layout';

import { PublicRoute } from 'HOCs/PublicRoute';
import { fetchCurrentUser } from 'redux/auth/auth-operations';
import { selectIsFetchingCurrentUser } from 'redux/auth/auth-selectors';

export const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(selectIsFetchingCurrentUser);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      {!isFetchingCurrentUser && (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                <PublicRoute>
                  <HomePage />
                </PublicRoute>
              }
            />
            <Route
              path="contacts"
              element={
                <PrivateRoute>
                  <ContactPage />
                </PrivateRoute>
              }
            />
            <Route
              path="register"
              element={
                <PublicRoute restricted>
                  <RegisterPage />
                </PublicRoute>
              }
            />
            <Route
              path="login"
              element={
                <PublicRoute restricted>
                  <LoginPage />
                </PublicRoute>
              }
            />
          </Route>
        </Routes>
      )}
    </>
  );
};
