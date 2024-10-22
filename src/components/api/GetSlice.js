import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const GetSlice = createApi({
  reducerPath: "CustomerApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://firstroadapi.echopus.com/api/" }), // Update the base URL as per your API
  endpoints: (builder) => ({
    getBranches: builder.query({
      query: () => "/branch", // Example query
    }),
    getServiceCategory: builder.query({
      query: () => "/service-category", // Example query
    }),
    getServiceInCategory: builder.query({
      query: (id) => `/service-category/service/${id}`, // Example query
    }),
  }),
});

export const { useGetBranchesQuery , useGetServiceCategoryQuery , useGetServiceInCategoryQuery } = GetSlice;
