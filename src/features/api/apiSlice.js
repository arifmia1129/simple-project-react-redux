import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://raw.githubusercontent.com/mir-hussain/moon-tech-starter-pack/version-2/public/products.json'
    }),
    tagTypes: ['Product'],
    endpoints: (builder) => ({
        getProduct: builder.query({
            query: () => ({
                url: ''
            }),
            providesTags: ['Product']
        }),
        addProduct: builder.mutation({
            query: (product) => ({
                url: "/product",
                method: 'POST',
                body: product
            }),
            invalidatesTags: ['Product']
        }),
        deleteProduct: builder.mutation({
            query: (id) => ({
                url: `/product/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Product']
        }),
    })
})

export const { useGetProductQuery, useAddProductMutation, useDeleteProductMutation } = productApi;