import React from "react";
import { Route, Routes } from "react-router-dom";
import Shop from "../Pages/Shop";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Shop />} />
    </Routes>
  );
};
