import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import FirebaseContext from '../../store/firebase-context';

const ProtectedRoute = (props) => {
  const firebaseCtx = useContext(FirebaseContext);
  if (!firebaseCtx.user) {
    return <Navigate to='/' />;
  }

  return <>{props.children}</>;
};

export default ProtectedRoute;
