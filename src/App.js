import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/registration/Login";
import Signup from "./pages/registration/Signup";
import Profile from "./pages/Profile";
import { ProtectedRoute } from "./pages/protected/ProtectedRoute";
import { Slide, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter basename="/authentication-react-firebase">
      <Routes>
        <Route path="/" element={<Login />} ></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/profile" element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        } ></Route>
        <Route></Route>
        {/* <Route path="*" element={<Error />} ></Route> */}
      </Routes>
      <ToastContainer
        transition={Slide}
        position="top-right"
        autoClose={5000}
      />
    </BrowserRouter>
  );
}

export default App;
