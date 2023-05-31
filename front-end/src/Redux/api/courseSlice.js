import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseurl = `${process.env.REACT_APP_BASE_URL}`;
console.log(baseurl);

export const courseApi = createApi({
  reducerPath: "courses",
  tagTypes: ["Courses"],
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
  refetchOnFocus: true,
  refetchOnReconnect: true,
  // refetchOnMountOrArgChange: 30,

  endpoints: (builder) => ({
    createCourse: builder.mutation({
      query: (formData) => {
        return {
          url: "api/v1/courses/createCourse",
          method: "POST",
          body: formData,
        };
      },
      invalidatesTags: ["Courses"],
    }),

    getTeacherCources: builder.query({
      query: () => ({
        url: "api/v1/courses/viewTeacherCourses/",
        Method: "GET",
      }),
      providesTags: ["Courses"],
    }),


  }),
});

export const { useCreateCourseMutation, useGetTeacherCourcesQuery } = courseApi;
