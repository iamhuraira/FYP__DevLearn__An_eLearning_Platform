import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const baseurl = `${process.env.REACT_APP_BASE_URL}`
console.log(baseurl)

export const signupApi = createApi({
    reducerPath: 'signup',
    baseQuery: fetchBaseQuery({
        baseUrl: baseurl,
        prepareHeaders: (headers) => {
            const token = localStorage.getItem("token")
            // If we have a token set in local storage, let's assume that we should be passing it.
            if (token) {
                headers.set('authorization', `Bearer ${token}`)
            }
            return headers
        },
    }),


    endpoints: (builder) => ({
        getSignup: builder.mutation({
            query: (body) => {
                return {
                    url: 'api/v1/users/signup',
                    method: 'POST',
                    body
                }
            },
            // invalidatesTags: ['accounts']
        }),
        getLogin: builder.mutation({
            query: (body) => {
                return {
                    url: 'api/v1/users/login',
                    method: 'POST',
                    body
                }
            },
        }),

        getAdminSignup: builder.mutation({
            query: (body) => ({
                url: 'api/v1/users/adminSignup',
                method: 'POST',
                body
            }),
            invalidatesTags: ['accounts']
        }),

        updateUserProfile: builder.mutation({
            query: (body) => ({
                url: 'api/v1/users/updateMe', // this is the url for the update profile
                method: 'PATCH',
                body
            }),
        }),


        getUserByID: builder.mutation({
            query: (id) => ({
                url: `/api/v1/user/${id}`,
            }),
        }),
    }),
});


export const { useGetSignupMutation, useGetLoginMutation, useGetAdminSignupMutation, useUpdateUserProfileMutation,  useGetUserByIDMutation } = signupApi;