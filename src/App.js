import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css'
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import AllRoutes from "./components/AllRoutes";

function App() {
  return (
    <>
      <NavBar />
      <AllRoutes />
      <Footer />
    </>
  );
}

export default App;
