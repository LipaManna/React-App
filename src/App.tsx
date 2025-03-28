import { Component } from "react";
import { Provider } from "./components/ui/provider";
import { Route, Routes } from "react-router-dom";
import "./assets/custom.css";
import React from "react";
import Login from "./pages/resgistration/Login";
import SignUp from "./pages/resgistration/SignUp";

function App() {
  return (
    <Provider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
              
      </Routes>
    </Provider>
  );
}

export default App;
