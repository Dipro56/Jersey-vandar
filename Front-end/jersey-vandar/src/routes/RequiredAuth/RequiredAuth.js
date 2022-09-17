import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import app from '../../firebase.init';

const auth = getAuth(app);

export const RequiredAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  console.log('required auth', user);
  console.log('required auth', children);
  const location = useLocation();

  if (loading) {
    return (
      <div class="text-center">
        <div class="spinner-grow m-5" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};
