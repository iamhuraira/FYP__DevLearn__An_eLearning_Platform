import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CourseCard from "../../../components/CourseCard/CourseCard";
import HeaderDashboard from "../../../DashboardComponents/HeaderDashboard";
import { useGetTeacherCourcesQuery } from "../../../Redux/api/courseSlice";

const ViewCourseT = () => {
  const {
    data = [],
    isLoading,
    isFetching,
    isError,
    
  } = useGetTeacherCourcesQuery();

 
  useEffect(() => { 
    
  }, [data]);
  
  const useDatar = useSelector((state) => state.user.userData);
  return (
    <div>
      <HeaderDashboard user={useDatar} />
      <div className="allCourses">
        <div className="courseLoop">
          {data.data?.map((course) => {
            return (
              <div className="courseCard">
                <CourseCard course={course} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ViewCourseT;
