import React, { useState, useEffect } from 'react';
import { auth } from '../firebase';
import {
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

const FirebaseContext = React.createContext({});

export const FirebaseContextProvider = (props) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const unsubscribe = onAuthStateChanged(auth, (res) => {
      res ? setUser(res) : setUser(null);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const signUpUser = (firstName, email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        return updateProfile(auth.currentUser, {
          displayName: firstName,
          photoURL: Math.floor(Math.random() * 5) + 1,
        });
      })
      .catch((err) => {
        alert(err.message);
        throw new Error(err.message);
      })
      .finally(() => setLoading(false));
  };

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
      .catch((err) => {
        alert(err.message);
        throw new Error(err.message);
      })
      .finally(() => setLoading(false));
  };

  const logOutUser = () => {
    signOut(auth);
  };

  const contextValue = {
    user,
    loading,
    signUpUser,
    signInUser,
    logOutUser,
  };

  return (
    <FirebaseContext.Provider value={contextValue}>
      {props.children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseContext;
