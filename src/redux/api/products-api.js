import { api } from "./index";

export const productsApi = api.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query({
      query: (params) => ({
        url: "/products",
        params,
      }),
      providesTags: ["Products"],
    }),
    getProduct: build.query({
      query: ({ id }) => ({
        url: `/products/${id}`,
        body,
      }),
      providesTags: ["Products"],
    }),
    updateProduct: build.mutation({
      query: ({ id, body }) => ({
        url: `/products/${id}`,
        method: "PUT",
        body,
      }),
    }),
    deleteProduct: build.mutation({
      query: ({ id }) => ({
        url: `/products/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Products"],
    }),
  }),
});
export const {
  useGetProductsQuery,
  useGetProductQuery,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = productsApi;
