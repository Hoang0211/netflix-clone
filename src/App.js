import React, { useContext } from "react";

import { Route, Routes } from "react-router-dom";

import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Browse from "./pages/browse/Browse";
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute";

import FirebaseContext from "./store/firebase-context";

const App = () => {
  const firebaseCtx = useContext(FirebaseContext);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<Login type="signin" />} />
      <Route path="/signup" element={<Login type="signup" />} />
      <Route
        path="/browse"
        element={
          <ProtectedRoute>
            <Browse />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default App;
