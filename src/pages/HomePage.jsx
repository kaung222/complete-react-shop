import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import heroImage from "../assets/heroImage.png";
import { StateContext } from "../context/StateContext";
import { AiOutlineArrowRight } from "react-icons/ai";
import WhyUs from "../components/home/WhyUs";
import ItemForHome from "../components/home/ItemForHome";
import Footer from "../components/home/Footer";

const HomePage = () => {
  const [mode] = useContext(StateContext);
  return (
    <div className="" data-theme={mode ? "light" : ""}>
      <Navbar />


      {/* hero section start  */}
      <div className="h-[90vh] w-screen flex justify-center items-center">
        <img
          src={heroImage}
          alt="..."
          className="absolute  w-full md:w-1/5 md:ml-[300px]"
        />
        <p className="absolute w-screen lg:w-[300px] px-5 md:mr-[400px]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque maxime
          nihil soluta recusandae sapiente iure consequuntur fuga dolores
          consequatur laudantium!
        </p>
        <button className=" absolute bg-base-300 px-2 py-1 z-10 w-[150px] mt-[200px]  md:mt-[200px] md:mr-[500px]">
          <span>Explore shop</span>
          <span>
            <AiOutlineArrowRight className="inline ml-3" />
          </span>
        </button>
      </div>

      {/* hero section section end */}

      <div className="">
        <WhyUs/>
      </div>
      <ItemForHome/>
      <Footer/>
    </div>
  );
};

export default HomePage;
