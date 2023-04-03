import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shopApi = createApi({
  reducerPath: "shopApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com" }),
  endpoints: (builder) => ({
    getProductData: builder.query({
      query: () => "/products",
      providesTags: ["shopApi"],
    }),
    getProductsByCate: builder.query({
      query: (categ) => `/products/category/${categ}`,
      providesTags: ["shopApi"],
    }),
  }),
});

export const { useGetProductDataQuery, useGetProductsByCateQuery } = shopApi;
