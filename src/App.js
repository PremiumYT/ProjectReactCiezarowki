import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/HomePage";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/formularz" element={<div>Formularz</div>} />
        <Route path="/kierownictwo" element={<div>Kierownictwo</div>} />
        <Route path="/kandydaci" element={<div>Kandydaci</div>} />
        <Route path="/pracownicy" element={<div>Pracownicy</div>} />
        <Route path="/ciezarowki" element={<div>Ciężarówki</div>} />
        <Route path="/login" element={<div>Logowanie</div>} />
        <Route path="/rejestracja" element={<div>Rejestracja</div>} />
      </Routes>
    </>
  );
}

export default App;
