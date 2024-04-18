import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const Auth = createApi({
  reducerPath: "Auth",
  baseQuery: fetchBaseQuery({ baseUrl: "https://whygobankdigitalworldclassscholars.org/api" }),
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (userData) => ({
        url: '/register',
        method: 'POST',
        body: userData
      })
    }),
    login: builder.mutation({
      query: (userData) => ({
        url: '/login',
        method: 'POST',
        body: userData
      })
    })
  })
});

export const { useRegisterMutation, useLoginMutation } = Auth