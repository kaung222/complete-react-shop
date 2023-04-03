import React, { useContext } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { GoSearch } from "react-icons/go";
import { useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { StateContext } from "../context/StateContext";
import SearchBox from "./SearchBox";

const Navbar = () => {
  const [mode, setMode] = useContext(StateContext);
  const { cart } = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const total = cart.reduce((pv, cv) => pv + cv.price * cv.qty, 0);

  return (
    <div data-theme={`${mode ? "light" : ""}`}>
      <div className="navbar bg-base-300 rounded">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu bg-base-300 menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-[250px]"
            >
              <li>
                <NavLink to="/">
                  <button>
                    <div className="form-control w-[200px]">
                      <label className="cursor-pointer label">
                        <span className="label-text">Home</span>
                        <AiOutlineArrowRight className="text-lg" />
                      </label>
                    </div>
                  </button>
                </NavLink>
              </li>
              <li>
                <NavLink to="/shop">
                  <button>
                    <div className="form-control w-[200px]">
                      <label className="cursor-pointer label">
                        <span className="label-text">All Products</span>
                        <AiOutlineArrowRight className="text-lg" />
                      </label>
                    </div>
                  </button>
                </NavLink>
              </li>
              <li>
                <NavLink to="/favorites">
                  <button>
                    <div className="form-control w-[200px]">
                      <label className="cursor-pointer label">
                        <span className="label-text">Favorites</span>
                        <AiOutlineArrowRight className="text-lg" />
                      </label>
                    </div>
                  </button>
                </NavLink>
              </li>
              <li>
                <button>
                  <div className="form-control w-[200px]">
                    <label className="cursor-pointer label">
                      <span className="label-text">About Us</span>
                      <AiOutlineArrowRight className="text-lg" />
                    </label>
                  </div>
                </button>
              </li>
              <li>
                <button>
                  <div className="form-control w-[200px]">
                    <label className="cursor-pointer label">
                      <span className="label-text">Night Mode</span>
                      <input
                        type="checkbox"
                        className="toggle toggle-primary"
                        checked={!mode}
                        onChange={() => setMode(!mode)}
                      />
                    </label>
                  </div>
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="">
          <Link to="/">
            <span className=" font-bold text-blue-500 text-xl">Foodie</span>
          </Link>
        </div>
        <div className="navbar-end">
          <button className="">
            {/* The button to open modal */}
            <label
              htmlFor="my-modal-3"
              className="btn btn-ghost btn-circle text-lg"
            >
              <GoSearch />
            </label>
            {/* pp */}
            {/* Put this part before </body> tag */}
            <input
              type="checkbox"
              id="my-modal-3"
              className="modal-toggle"
              onChange={() => console.log("check")}
            />
            <div className="modal">
              <div className="modal-box relative">
                <label
                  htmlFor="my-modal-3"
                  className="btn btn-sm btn-circle absolute right-2 top-2"
                >
                  ✕
                </label>
                <SearchBox />
              </div>
            </div>
          </button>
          <div className="flex-none">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="badge bg-primary badge-sm indicator-item">
                    {cart.length}
                  </span>
                </div>
              </label>
              <div
                tabIndex={0}
                className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
              >
                <div className="card-body">
                  <span className="font-bold text-lg">{cart.length} Items</span>
                  <span className="text-info">Total: ${total.toFixed(2)}</span>
                  <Link to="/cart">
                    <div className="card-actions">
                      <button className="btn btn-primary w-full">
                        View cart
                      </button>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
