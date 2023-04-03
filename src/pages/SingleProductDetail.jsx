import React, { useContext, useState } from "react";
import { BsCart } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import { StateContext } from "../context/StateContext";
import { addToCart, removeFromCart } from "../features/counter/cartSlice";

const SingleProductDetail = () => {
  const [mode] = useContext(StateContext);
  const location = useLocation();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  let product = location.state;
  const { cart } = useSelector((state) => state.cart);

  const isExistInCart = cart.find((item) => item.id === product.id);
  // console.log(isExistInCart);
  return (
    <div data-theme={`${mode && "light"}`}>
      <Navbar />
      <div className=" p-3">
        <div className="">
          <Link to="/shop">
            <span className="bg-base-300 px-2 py-1">Back</span>
          </Link>
        </div>
        <div className=" p-2">
          <div className="hero min-h-screen bg-base-100">
            <div className="hero-content flex-col lg:flex-row">
              <img
                src={product.image}
                className="w-full max-w-sm rounded-lg shadow-md hover:shadow-2xl"
              />
              <div>
                <h1 className="text-3xl font-bold">{product.title}</h1>
                <p className="py-6">{product.description}</p>
                <div className="flex items-center justify-start gap-4 my-3">
                  <button
                    className="px-2 rounded bg-base-300"
                    onClick={() => setQuantity(quantity - 1)}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    className="w-[40px] bg-base-100 px-2"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                  />
                  <button
                    className="px-2 rounded bg-base-300"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </button>
                </div>
                {isExistInCart ? (
                  <button
                    className=" px-2 py-1 rounded bg-warning flex items-center gap-2 my-4"
                    onClick={() => {
                      dispatch(removeFromCart(product));
                    }}
                  >
                    <span>Remove From Cart</span>
                    <span></span>
                  </button>
                ) : (
                  <button
                    className=" px-2 py-1 rounded bg-base-300 flex items-center gap-2 my-4"
                    onClick={() => {
                      product = { ...product, qty: quantity };
                      dispatch(addToCart(product));
                    }}
                  >
                    <span>Add To Cart</span>
                    <span>
                      <BsCart />
                    </span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductDetail;
