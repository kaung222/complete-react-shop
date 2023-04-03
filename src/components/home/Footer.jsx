import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="flex p-9 items-start justify-around flex-wrap gap-5">
        <div className="flex flex-col w-[250px] text-sm gap-3">
          <h1 className="text-lg my-3">Quick Links</h1>
          <Link to="/">
            <span>Home</span>
          </Link>
          <Link to="/shop">
            <span>Shop</span>
          </Link>
          <Link to="/about">
            <span>About</span>
          </Link>
          <Link to="/cart">
            <span>Your Cart</span>
          </Link>
        </div>
        <div className="flex flex-col w-[250px] text-sm gap-3">
          <h1 className="text-lg my-3">Contact</h1>
          <span>Customer Services</span>
          <span>Help</span>
          <span>FAQs</span>
          <span>Address</span>
        </div>
        <div className="flex gap-3 flex-col w-[250px] text-sm">
          <h1 className="text-lg my-3">Socials</h1>
          <span>
            <FaFacebook />
          </span>
          <span>
            <FaInstagram />
          </span>
          <span>
            <FaTwitter />
          </span>
          <span>
            <FaYoutube />
          </span>
        </div>
      </div>
      <div className="w-full text-center py-4">
        <h2>All Rights Reserved .</h2>
        <p>Copyright 2023</p>
      </div>
    </div>
  );
};

export default Footer;
