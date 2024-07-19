import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/registration/Login";
import Signup from "./pages/registration/Signup";
import Profile from "./pages/Profile";
import Error from "./pages/Error";
import { ProtectedRoute } from "./pages/protected/ProtectedRoute";
import { Slide, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    // BrowserRouter is the router component for web applications
    // basename sets the base URL for all locations
    <BrowserRouter basename="/authentication-react-firebase">
      <Routes>
        {/* Route for the login page */}
        <Route path="/" element={<Login />} ></Route>

        {/* Route for the signup page */}
        <Route path="/signup" element={<Signup />}></Route>

        {/* Protected route for the profile page */}
        <Route path="/profile" element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
        ></Route>

        {/* Catch-all route for undefined paths, displaying the Error component */}
        <Route path="*" element={<Error />} />
      </Routes>

      {/* ToastContainer to show toast notifications */}
      <ToastContainer
        transition={Slide}          
        position="top-right"        
        autoClose={5000}            
      />
    </BrowserRouter>
  );
}

export default App;
