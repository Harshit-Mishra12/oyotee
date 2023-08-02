import React from "react";
import { Route, Routes } from "react-router-dom";
import Shop from "../Pages/Shop";
import PlantCare from "../Pages/PlantCare";
import ProductsDetails from "../Pages/ProductsDetails";


export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Shop />} />
      <Route path="/PlantCare" element={<PlantCare />} />
      <Route path="/PlantDetail/:slug" element={<ProductsDetails />} />
    </Routes>
  );
};
