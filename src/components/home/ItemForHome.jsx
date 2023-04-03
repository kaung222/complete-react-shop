import React from "react";
import ProductCard from "../ProductCard";
import { useGetProductDataQuery } from "../../features/counter/api_service";

const ItemForHome = () => {
  const { data: products } = useGetProductDataQuery();
  console.log(products)
  let items = [];
  for (var i = 0; i < 6; i++) {
    items.push(products[Math.floor(Math.random() * 20)]);
    // [...items,products[Math.floor(Math.random() * 20)]]
  }
  console.log(items);
  return (
    <div>
      <div className="flex flex-wrap justify-center gap-5 items-center mt-5">
        {items?.map((product) => {
          return <ProductCard key={product?.id} product={product} />;
        })}
      </div>
    </div>
  );
};

export default ItemForHome;
