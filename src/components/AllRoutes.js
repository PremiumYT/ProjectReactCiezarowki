import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/HomePage";
import FormPage from "../pages/FormPage";
import FirmPeoplePage from "../pages/FirmPeoplePage";

function AllRoutes() {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/formularz" element={<FormPage />} />
        <Route path="/osoby-w-firmie" element={<FirmPeoplePage />} />
      </Routes>
    );
}

export default AllRoutes;