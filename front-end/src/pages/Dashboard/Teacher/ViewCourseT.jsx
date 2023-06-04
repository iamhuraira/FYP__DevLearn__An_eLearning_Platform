/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CourseCard from "../../../components/CourseCard/CourseCard";
import HeaderDashboard from "../../../DashboardComponents/HeaderDashboard";
import { useGetTeacherCourcesQuery } from "../../../Redux/api/courseSlice";
import LoadingOverlay from 'react-loading-overlay';
import CourseSlider from "../../../components/CourseSlider/CourseSlider";

const ViewCourseT = () => {
  const {
    data = [],
    isLoading,
    isFetching,

  } = useGetTeacherCourcesQuery();
  console.log(data)
  const useDatar = useSelector((state) => state.user.userData);

  const approvedCourse = data.data?.filter((item) => item.status === "approved");
  const pendingCourse = data.data?.filter((item) => item.status === "pending");
  const rejectedCourse = data.data?.filter((item) => item.status === "rejected");


  return (
    <div>
      <HeaderDashboard user={useDatar} />
      <div className="teacherCourses">
        {
          approvedCourse && approvedCourse.length > 0 && <CourseSlider title="Approved Courses" data={approvedCourse} />
        }

        {
          pendingCourse && pendingCourse.length > 0 && <CourseSlider title="Pending Approval" data={pendingCourse} />

        }
        {
          rejectedCourse && rejectedCourse.length > 0 && <CourseSlider title="Rejected Courses" data={rejectedCourse} />
        }

      </div>
    </div>
  );
};

export default ViewCourseT;
