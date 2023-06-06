import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseurl = `${process.env.REACT_APP_BASE_URL}`;
console.log(baseurl);

export const courseApi = createApi({
  reducerPath: "courses",
  tagTypes: ["Courses", "adminCourse", "SingleCourse"],
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
    }),
    getAdminSignup: builder.mutation({
      query: (body) => ({
        url: "api/v1/users/adminSignup",
        method: "POST",
        body,
      }),
    }),

    getLogin: builder.mutation({
      query: (body) => {
        return {
          url: "api/v1/users/login",
          method: "POST",
          body,
        };
      },
      invalidatesTags: ["Courses", "adminCourse"],
    }),

    getForgetPassword: builder.mutation({
      query: (body) => {
        return {
          url: "api/v1/users/login", // change this url
          method: "POST",
          body,
        };
      },
    }),

    updateUserProfile: builder.mutation({
      query: (body) => ({
        url: "api/v1/users/updateMe",
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["Courses"],
    }),

    updateUserPassword: builder.mutation({
      query: (body) => ({
        url: `api/v1/users/updateMyPassword/`,
        method: "PATCH",
        body,
      }),
    }),

    deleteUser: builder.mutation({
      query: (id) => ({
        url: `api/v1/users/deleteMe/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Courses"],
    }),

    // Course Routes
    getAllCourses: builder.query({
      query: () => ({
        url: `api/v1/courses/viewAllCourses/`,
        Method: "GET",
      }),
      // invalidatesTags: ["SingleCourse"],
    }),

    createCourse: builder.mutation({
      query: (formData) => {
        return {
          url: "api/v1/courses/createCourse",
          method: "POST",
          body: formData,
        };
      },
      invalidatesTags: ["Courses", "adminCourse"],
    }),

    getTeacherCources: builder.query({
      query: () => ({
        url: "api/v1/courses/viewTeacherCourses/",
        Method: "GET",
      }),
      providesTags: ["Courses"],
    }),
    getCourseById: builder.query({
      query: (id) => ({
        url: `api/v1/courses/viewOneCourse/${id}`,
        Method: "GET",
      }),
      invalidatesTags: ["SingleCourse"],
    }),
    getAdminCourses: builder.query({
      query: () => ({
        url: `api/v1/courses/viewAdminCourses/`,
        Method: "GET",
      }),
      providesTags: ["adminCourse"],
    }),

    DeleteCourse: builder.mutation({
      query: (id) => ({
        url: `api/v1/courses/deleteCourse/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Courses"],
    }),
    updateCourse: builder.mutation({
      query: (body) => ({
        url: `api/v1/courses/updateCourse/${body.id}`,
        method: "PATCH",
        body: body.formData,
      }),
      invalidatesTags: ["SingleCourse", "adminCourse", "Courses"],
    }),

    quizResultSubmit: builder.mutation({
      // this is not working
      query: (body, id) => ({
        url: `api/v1/courses/quizResultSubmit/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["SingleCourse"],
    }),

    // Admin Routes
    courseApprove: builder.mutation({
      query: (body) => ({
        url: `api/v1/courses/adminCourseDecision/${body.id}`,
        method: "PATCH",
        body: {
          status: body.decision,
        },
      }),
      invalidatesTags: ["SingleCourse", "adminCourse", "Courses"],
    }),
  }),
});

export const {
  useGetAdminSignupMutation,
  useGetSignupMutation,
  useGetLoginMutation,
  useGetForgetPasswordMutation,
  useUpdateUserProfileMutation,
  useUpdateUserPasswordMutation,
  useDeleteUserMutation,
  useCourseApproveMutation,

  useCreateCourseMutation,
  useGetTeacherCourcesQuery,
  useGetCourseByIdQuery,
  useGetAllCoursesQuery,
  useDeleteCourseMutation,
  useUpdateCourseMutation,
  useGetAdminCoursesQuery,
} = courseApi;
