import React, { useContext } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import Navbar from "../components/Navbar";
import { StateContext } from "../context/StateContext";
import { emptyCart } from "../features/counter/cartSlice";

const CartPage = () => {
  const dispatch = useDispatch();
  const [mode] = useContext(StateContext);
  const { cart } = useSelector((state) => state.cart);
  const total = cart.reduce((pv, cv) => pv + cv.price * cv.qty, 0);
  return (
    <div data-theme={`${mode ? "light" : ""}`} className=" h-screen">
      <Navbar />
      <div className=" p-2 flex items-center justify-between">
        <Link to="/shop">
          <button className="px-2 py-1 bg-base-300 flex items-center rounded gap-2">
            <span>
              <AiOutlineArrowLeft />
            </span>
            <span>Continue Shopping</span>
          </button>
        </Link>
        <button
          className="px-2 py-1 bg-base-300"
          onClick={() => dispatch(emptyCart())}
        >
          Clear Cart
        </button>
      </div>
      {cart.length < 1 ? (
          
            
        <div className="py-7">
          <p className="text-center">Your Cart is empty</p>
        </div>

         
      ) : (
        <div className="flex items-center justify-between px-5 md:px-[150px]">
              <span>Item</span>
              <span className="ml-[100px]">Quantity</span>
              <span>Subtotal</span>
            </div>
      )}
      <div
        className={` mt-5 flex flex-col items-center justify-center gap-2 text-sm `}
      >
        {cart.map((product) => {
          return <CartItem key={product.id} product={product} />;
        })}
      </div>
      <div className="flex justify-between px-12 mt-5 md:px-[150px]">
        <span>Total</span>
        <span className="font-bold">$ {total.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default CartPage;
