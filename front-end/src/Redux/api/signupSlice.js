import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


 const baseurl = `${process.env.REACT_APP_BASE_URL}`
console.log(baseurl)

export const signupApi = createApi({
    reducerPath: 'signup',
    baseQuery: fetchBaseQuery({ baseUrl: baseurl}),

    endpoints: (builder) => ({
        getSignup: builder.mutation({
            query: (body) => ({
                url: '/accounts',
                method: 'POST',
                body
                // body: {id,name, email, passeord, role}
            }),
            invalidatesTags:['accounts']
        }), 
    }),
});


export const {useGetSignupMutation} = signupApi;