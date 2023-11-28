import { Route, Routes } from 'react-router-dom';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/authOperations';
import { lazy, useEffect } from 'react';
import { Layout } from './Layout';

const Home = lazy(() => import('pages/Home'));
const Register = lazy(() => import('pages/Register'));
const Login = lazy(() => import('pages/Login'));
const PhoneBook = lazy(() => import('pages/PhoneBook'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route
            path="/phoneBook"
            element={
              <PrivateRoute redirectTo="/login" component={<PhoneBook />} />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/phoneBook" component={<Login />} />
            }
          />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/phoneBook"
                component={<Register />}
              />
            }
          />
        </Route>
      </Routes>
    </>
  );
};
