import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/registration/Login";
import Signup from "./pages/registration/Signup";
import Profile from "./pages/Profile";
import { ProtectedRoute } from "./pages/protected/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} ></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/profile" element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        } ></Route>
        <Route></Route>
        {/* <Route path="*" element={<Error />} ></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
