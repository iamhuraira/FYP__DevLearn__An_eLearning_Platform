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

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
  }, []);





  setTimeout(() => {
    setLoading(false);
  }, 3000);

  const useDatar = useSelector((state) => state.user.userData);

  return (
    <div>
      <HeaderDashboard user={useDatar} />
      <div className="teacherCourses">
          {/* <div className="allCourses">
          <div className="courseLoop">
            {data.data?.map((course) => {
              return (
                <div className="courseCard">
                  <CourseCard course={course} />
                </div>
              );
            })}
          </div>
        </div> */}
          <CourseSlider title="Your Courses" data={data.data} />
          <CourseSlider title="Pending Approvel" data={data.data} />
          <CourseSlider title="Rejected" data={data.data} />
      </div>
    </div>
  );
};

export default ViewCourseT;
