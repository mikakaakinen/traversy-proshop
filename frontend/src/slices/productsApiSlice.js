import { PRODUCTS_URL } from '../constants';
import { apiSlice } from './apiSlice';

export const productsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => PRODUCTS_URL, // uses baseUrl + '/api/products'
    }),
    keepUnusedDataFor: 5,
    getProductDetails: builder.query({
      query: (productId) => ({
        url: `${PRODUCTS_URL}/${productId}`,
      }),
      keepUnusedDataFor: 5,
    }),
  }),
});

// Export hooks for use in components
export const { useGetProductsQuery, useGetProductDetailsQuery } = productsApi;
