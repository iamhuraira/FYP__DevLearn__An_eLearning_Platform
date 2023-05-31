import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CourseCard from "../../../components/CourseCard/CourseCard";
import HeaderDashboard from "../../../DashboardComponents/HeaderDashboard";
import { useGetTeacherCourcesQuery } from "../../../Redux/api/courseSlice";
import LoadingOverlay from 'react-loading-overlay';

const ViewCourseT = () => {
  const {
    data = [],
    isLoading,
    isFetching,
    isError,

  } = useGetTeacherCourcesQuery();


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

      <LoadingOverlay
        active={loading || isLoading || isFetching}
        spinner
        text='Loading your Courses...'
      >
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
      </LoadingOverlay>
    </div>
  );
};

export default ViewCourseT;
