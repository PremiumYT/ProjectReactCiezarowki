import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css'
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import AllRoutes from "./components/AllRoutes";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <NavBar />
      <Container className="flex-grow-1">
        <AllRoutes />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
