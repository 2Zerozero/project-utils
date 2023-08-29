import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../pages/Main";
import CarouselFuntion from "../pages/CarouselFuntion/CarouselFuntion";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/carousel" element={<CarouselFuntion />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
