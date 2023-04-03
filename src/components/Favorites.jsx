import React, { useContext } from "react";
import { BsFillHeartFill } from "react-icons/bs";
import { StateContext } from "../context/StateContext";
import Footer from "./home/Footer";
import Navbar from "./Navbar";
import ProductCard from "./ProductCard";

const Favorites = () => {
  const products = JSON.parse(localStorage.getItem("favItems"));
  const [mode] = useContext(StateContext);
  return (
    <div data-theme={`${mode && "light"}`}>
      <Navbar />
      <h1 className="my-3 p-5">
        Your Favorites Listing
        <span>
          <BsFillHeartFill />
        </span>
      </h1>
      <div className="flex flex-wrap justify-center gap-5 items-center mt-5">
        {products?.map((product) => {
          return <ProductCard key={product?.id} product={product} />;
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Favorites;
