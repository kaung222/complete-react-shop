import React, { useContext } from "react";
import { GoSearch } from "react-icons/go";
import { StateContext } from "../context/StateContext";

const SearchBox = () => {
  const [mode, setMode ,search,setSearch] = useContext(StateContext);
  // console.log(search);
  
  return (
    <div>
      <div className="">
        <div className=" flex justify-center items-center my-5 bg-base-300 w-full rounded-xl px-5">
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-base-300 py-2 outline-none border-none"
          />
          <div className=" px-3 py-1" >
            <GoSearch className=" text-lg " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
