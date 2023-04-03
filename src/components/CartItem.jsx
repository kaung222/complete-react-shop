import React from "react";
import { useDispatch } from "react-redux";
import {
  decreaseQty,
  increaseQty,
  removeFromCart,
} from "../features/counter/cartSlice";


const CartItem = ({ product }) => {
  const dispatch = useDispatch();
  const subTotal = product.qty * product.price;
  return (
    <div className="w-full md:w-3/4 md:mx-auto">
      <div className=" flex px-5 w-full py-3 bg-base-300 rounded  items-center  justify-between">
        <div className="flex gap-1">
          <img
            src={product.image}
            alt="...."
            className=" w-[40px] h-[40px] md:w-[60px] md:h-[60px]"
          />
          {/* <h2>{product.title.substring(0, 10)}...</h2> */}
          <span
            className="text-xs text-red-500 mt-6 px-2 py-1 cursor-pointer"
            onClick={() => dispatch(removeFromCart(product))}
          >
            remove
          </span>
        </div>
        <div className=" flex gap-3 items-center">
          <button
            className=" px-2 py-1 text-2xl"
            onClick={() => dispatch(increaseQty(product))}
          >
            +
          </button>
          <span>{product.qty}</span>
          <button
            className=" px-2 py-1 text-2xl"
            onClick={() => dispatch(decreaseQty(product))}
          >
            -
          </button>
        </div>
        <div className="">
          <span className=" font-bold text- w-[200px]">
            $ {subTotal.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
