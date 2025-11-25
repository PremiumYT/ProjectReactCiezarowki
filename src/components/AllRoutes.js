import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/HomePage";

function AllRoutes() {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/formularz" element={<div>Formularz</div>} />
        <Route path="/kierownictwo" element={<div>Kierownictwo</div>} />
        <Route path="/kandydaci" element={<div>Kandydaci</div>} />
        <Route path="/pracownicy" element={<div>Pracownicy</div>} />
        <Route path="/ciezarowki" element={<div>Ciężarówki</div>} />
      </Routes>
    );
}

export default AllRoutes;