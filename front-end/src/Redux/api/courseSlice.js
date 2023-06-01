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
  refetchOnMountOrArgChange: 30,

  endpoints: (builder) => ({
    getSignup: builder.mutation({
      query: (body) => {
        return {
          url: "api/v1/users/signup",
          method: "POST",
          body,
        };
      },
      invalidatesTags: ["Courses"],
     
    }),
    getAdminSignup: builder.mutation({
      query: (body) => ({
        url: "api/v1/users/adminSignup",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Courses"],
    }),




    getLogin: builder.mutation({
      query: (body) => {
        return {
          url: "api/v1/users/login",
          method: "POST",
          body,
        };
      },
      invalidatesTags: ["Courses"],
    }),

    updateUserProfile: builder.mutation({
      query: (body) => ({
        url: "api/v1/users/updateMe", // this is the url for the update profile
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["Courses"],
    }),

    updateUserPassword: builder.mutation({
      query: (body) => ({
        url: `/api/v1/user/`, // this is the url for the update profile
        method: "PATCH",
        body,
      }),
    }),


    // Course Routes

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

export const { useGetAdminSignupMutation, useGetSignupMutation, useGetLoginMutation, useUpdateUserProfileMutation, useUpdateUserPasswordMutation, useCreateCourseMutation, useGetTeacherCourcesQuery } = courseApi;
