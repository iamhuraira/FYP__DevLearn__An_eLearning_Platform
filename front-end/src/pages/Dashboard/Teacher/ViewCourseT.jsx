import React, { useState } from "react";
import { useSelector } from "react-redux";
import CourseCard from "../../../components/CourseCard/CourseCard";
import HeaderDashboard from "../../../DashboardComponents/HeaderDashboard";

const ViewCourseT = () => {
  const [courses, setCourses] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
  const useDatar = useSelector((state) => state.user.userData);
  return (
    <div>
      <HeaderDashboard user={useDatar} />
      <div className="allCourses">
        <div className="courseLoop">
          {courses.map(() => {
            return (
              <div className="courseCard">
                <CourseCard />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ViewCourseT;
