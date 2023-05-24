import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const baseurl = `${process.env.REACT_APP_BASE_URL}`
console.log(baseurl)

export const courseApi = createApi({
    reducerPath: 'courses',
    baseQuery: fetchBaseQuery({ baseUrl: baseurl }),


    endpoints: (builder) => ({
        getAllCources: builder.mutation({
            query: () => ({
                url: '/api/v1/signup',
            }),
            invalidatesTags: ['accounts']
        }),
        getCourseById: builder.mutation({
            query: (id) => ({
                url: `/api/v1/course/${id}`,
            }),
        }),
        createCourse: builder.mutation({
            query: (body) => ({
                url: '/api/v1/course',
                method: 'POST',
                body
            }),
        }),
    }),
});


export const { useCreateCourseMutation, useGetAllCourcesMutation, useGetCourseByIdMutation } = courseApi;