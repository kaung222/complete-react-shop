import React from "react";
import { BsHeart, BsFillHeartFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { addToCart, removeFromCart } from "../features/counter/cartSlice";

const ProductCard = ({ product }) => {
  const { title, description, image, price } = product;
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);
  // isExistInCart to remove
  const isExistInCart = cart.find((item) => item.id === product.id);
  const favItems = JSON.parse(localStorage.getItem("favItems"));

  const isFavorite = favItems.find((item) => item.id === product.id);

  const storeHandler = () => {
    favItems.push(product);
    localStorage.setItem("favItems", JSON.stringify(favItems));
    // console.log(product);
  };
  const removeStore = () => {
    favItems.pop(product);
    localStorage.setItem("favItems", JSON.stringify(favItems));
  };

  return (
    <div
      className={`w-[300px] flex flex-col justify-center items-center shadow-md hover:shadow-2xl hover:scale-95 duration-100 h-[340px] bg-white p-7 rounded-lg text-slate-500 relative`}
    >
      <Link to={`/detail/${product.id}`} state={product}>
        <img src={image} alt="" className="w-[160px] object-cover h-[200px] " />
      </Link>
      <h1 className="text-sm">{title.substring(0, 15)}...</h1>
      <p className=" text-slate-700">${price}</p>
      {!isExistInCart ? (
        <button
          className=" btn-primary w-full rounded-md mt-3 py-[8px]"
          onClick={(e) => {
            product = { ...product, qty: 1 };
            dispatch(addToCart(product));
          }}
        >
          ADD TO CART
        </button>
      ) : (
        <button
          className=" btn-warning w-full rounded-md mt-3 py-[8px]"
          onClick={() => {
            dispatch(removeFromCart(product));
          }}
        >
          REMOVE FROM CART
        </button>
      )}
      <button className=" absolute top-1 right-1 p-2 " onClick={storeHandler}>
        <BsHeart />
      </button>
      {isFavorite ? (
        <button className=" absolute top-1 right-1 p-2 " onClick={removeStore}>
          <BsFillHeartFill />
        </button>
      ) : (
        <button className=" absolute top-1 right-1 p-2 " onClick={storeHandler}>
          <BsHeart />
        </button>
      )}
    </div>
  );
};

export default ProductCard;
