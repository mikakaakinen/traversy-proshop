import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({ baseUrl: '' });

// Define a base API service that others will inject into
export const apiSlice = createApi({
  reducerPath: 'apiSlice',
  baseQuery,
  tagTypes: ['Product', 'Order', 'User'],
  endpoints: () => ({}), // Empty - endpoints will be injected
});
