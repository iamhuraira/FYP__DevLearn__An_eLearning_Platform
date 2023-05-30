import React, { useState } from "react";
import { useSelector } from "react-redux";
import CourseCard from "../../../components/CourseCard/CourseCard";
import HeaderDashboard from "../../../DashboardComponents/HeaderDashboard";
import { useGetTeacherCourcesQuery } from "../../../Redux/api/courseSlice";

const ViewCourseT = () => {
  const { data, isLoading, isFetching, isError } = useGetTeacherCourcesQuery();
  // const { course } = data;
  console.log(typeof data);
  console.log(data.data.course);
  const [courses, setCourses] = useState(data.data.course);
  const useDatar = useSelector((state) => state.user.userData);
  return (
    <div>
      <HeaderDashboard user={useDatar} />
      <div className="allCourses">
        <div className="courseLoop">
          {courses.map((course) => {
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
