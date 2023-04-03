import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Favorites from "./components/Favorites";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import SingleProductDetail from "./pages/SingleProductDetail";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/detail/:id" element={<SingleProductDetail />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </>
  );
};

export default App;
