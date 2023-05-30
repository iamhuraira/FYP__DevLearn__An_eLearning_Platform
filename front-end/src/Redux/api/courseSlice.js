import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseurl = `${process.env.REACT_APP_BASE_URL}`;
console.log(baseurl);

export const courseApi = createApi({
  reducerPath: "courses",
  baseQuery: fetchBaseQuery({
    baseUrl: baseurl,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      // If we have a token set in local storage, let's assume that we should be passing it.
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),

  endpoints: (builder) => ({
    createCourse: builder.mutation({
      query: (formData) => {
        return {
          url: "api/v1/courses/createCourse",
          method: "POST",
          body: formData,
        };
      },
    }),
 
    getTeacherCources: builder.mutation({
      query: () => ({
        url: "/api/v1/signup",
        Method: "GET",
      }),
    }),
    // getCourseById: builder.mutation({
    //   query: (id) => ({
    //     url: `/api/v1/course/${id}`,
    //   }),
    // }),
  }),
});

export const { useCreateCourseMutation, useGetTeacherCourcesMutation } = courseApi;
