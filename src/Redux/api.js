import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const api = createApi({
  reducerPath: "myapi",
  baseQuery: fetchBaseQuery({
    // Backend URL
    baseUrl: "http://localhost:5000",
  }),
  tagTypes: ["Product"],
  endpoints: (builder) => ({
    createProduct: builder.mutation({
      query: (newProduct) => ({
        url: "/api/products",
        method: "POST",
        body: newProduct,
      }),
      invalidatesTags: ["Product"],
    }),
    getAllProduct: builder.query({
      query: () => "/api/products",
      providesTags: ["Product"],
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/api/products/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Product"],
    }),
    updateProduct: builder.mutation({
      query: ({ id, data }) => ({
        url: `api/products/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Product"],
    }),
  }),
});
// console.log(api);
export const {
  useCreateProductMutation,
  useGetAllProductQuery,
  useDeleteProductMutation,
  useUpdateProductMutation,
} = api;
export default api;
