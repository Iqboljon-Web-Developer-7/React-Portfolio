import { api } from "./index";

// Define the structure for a Product
interface Product {
  id: number;
  name: string;
  price: number;
  description?: string;
  imageUrl?: string;
}

// Define the parameters for fetching products (if any)
interface GetProductsParams {
  category?: string;
  search?: string;
}

// Define the body for updating a product
interface UpdateProductBody {
  name?: string;
  price?: number;
  description?: string;
  imageUrl?: string;
}

export const productsApi = api.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query<Product[], GetProductsParams>({
      query: (params) => ({
        url: "/products",
        params,
      }),
      providesTags: ["Products"],
    }),
    getProduct: build.query({
      query: ({ id }) => ({
        url: `/products/${id}`,
      }),
      providesTags: ["Products"],
    }),
    updateProduct: build.mutation<
      Product,
      { id: number; body: UpdateProductBody }
    >({
      query: ({ id, body }) => ({
        url: `/products/${id}`,
        method: "PUT",
        body,
      }),
    }),
    deleteProduct: build.mutation<void, { id: number }>({
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
