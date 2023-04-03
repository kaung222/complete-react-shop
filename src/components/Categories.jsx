import React from "react";

const Categories = ({ filterCategories }) => {
  return (
    <div className="text-sm">
      <div className="flex flex-col gap-2 absolute top-[110px] left-3 z-10 bg-base-100 p-3 rounded">
        <button
          className="px-2 py-1 bg-base-300 rounded"
          onClick={() => filterCategories("all")}
        >
          All
        </button>
        <button
          className="px-2 py-1 bg-base-300 rounded"
          onClick={() => filterCategories("men's clothing")}
        >
          men's clothing
        </button>
        <button
          className="px-2 py-1 bg-base-300 rounded"
          onClick={() => filterCategories("women's clothing")}
        >
          women's clothing
        </button>
        <button
          className="px-2 py-1 bg-base-300 rounded"
          onClick={() => filterCategories("jewelery")}
        >
          jewelery
        </button>
        <button
          className="px-2 py-1 bg-base-300 rounded"
          onClick={() => filterCategories("electronics")}
        >
          electronics
        </button>
        {/* <button className="px-2 py-1 bg-base-300 rounded"></button> */}
      </div>
    </div>
  );
};

export default Categories;
