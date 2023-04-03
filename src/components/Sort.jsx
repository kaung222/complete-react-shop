import React from "react";

const Sort = ({}) => {
  return (
    <div className="flex flex-col text-sm gap-2 absolute top-[110px] right-3 z-10 bg-base-100 p-3 rounded">
      <button
        className="px-2 py-1 bg-base-300 rounded"
        onClick={() => filterCategories("all")}
      >
        Price under 50
      </button>
      <button
        className="px-2 py-1 bg-base-300 rounded"
        onClick={() => filterCategories("men's clothing")}
      >
        Price under 100
      </button>
      <button
        className="px-2 py-1 bg-base-300 rounded"
        onClick={() => filterCategories("women's clothing")}
      >
        Latest
      </button>
      <button
        className="px-2 py-1 bg-base-300 rounded"
        onClick={() => filterCategories("jewelery")}
      >
        Popular
      </button>
      <button
        className="px-2 py-1 bg-base-300 rounded"
        onClick={() => filterCategories("electronics")}
      >
        Discount
      </button>
    </div>
  );
};

export default Sort;
