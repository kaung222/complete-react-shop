import React, { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import { StateContext } from "../context/StateContext";
import { FaAngleDown } from "react-icons/fa";
import { BsFilter } from "react-icons/bs";
import {
  useGetProductDataQuery,
  useGetProductsByCateQuery,
} from "../features/counter/api_service";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Footer from "../components/home/Footer";

const ShopPage = () => {
  const [mode, setMode, search, setSearch] = useContext(StateContext);
  // const [products, setProducts] = useState([]);
  const { data: products } = useGetProductDataQuery();
  const filterCategories = (categ) => {
    if (categ === "all") {
      // const { data: products } = useGetProductDataQuery();
      // setProducts(products);
      console.log(categ);
    } else {
      // const { data: products } = useGetProductsByCateQuery(categ);
      // setProducts(products);
      console.log(categ);
    }
  };
  const [showCategories, setShowCategories] = useState(false);
  const [showSort, setShowSort] = useState(false);
  window.addEventListener("scroll", () => {
    setShowCategories(false);
    setShowSort(false);
  });
  return (
    <div data-theme={`${mode && "light"}`} className="">
      <Navbar />
      <div className="flex items-center justify-between p-3">
        <button
          className="flex items-center gap-2 px-3 py-1 rounded bg-base-300"
          onClick={() => setShowCategories(!showCategories)}
        >
          <span>Sort by Categories</span>
          <span>
            <FaAngleDown />
          </span>
        </button>
        {showCategories ? (
          <Categories filterCategories={filterCategories} />
        ) : (
          ""
        )}
        <button
          className="flex items-center gap-2 px-2 py-1 rounded bg-base-300"
          onClick={() => setShowSort(!showSort)}
        >
          <span>Sort By</span>
          <span>
            <BsFilter />
          </span>
        </button>
        {showSort ? <Sort /> : ""}
      </div>
      <div className="flex flex-wrap justify-center gap-5 items-center mt-5">
        {products
          ?.filter((product) => {
            return search === ""
              ? product
              : product.title.toLowerCase().includes(search.toLowerCase());
          })
          ?.map((product) => {
            return <ProductCard key={product?.id} product={product} />;
          })}
      </div>
      <Footer />
    </div>
  );
};

export default ShopPage;
