import React from 'react'
import HeaderDashboard from '../../../DashboardComponents/HeaderDashboard'
import Welcome from '../../../DashboardComponents/Welcome'
import { useSelector } from 'react-redux'
import Footer from '../../../components/Footer/Footer'
import CourseSlider from '../../../components/CourseSlider/CourseSlider'
import { useGetAllCoursesQuery, useStudentEnrolledCourseQuery } from '../../../Redux/api/courseSlice'

const StudentDashboard = () => {
    const useDatar = useSelector(state => state.user.userData)
      const {
        data = [],
        isLoading,
        isFetching,
    } = useGetAllCoursesQuery({ refetchOnMountOrArgChange: true });
      const {
        data: enrolledCourse = [],
        isLoading: EnrollCourseLoading,
        isFetching: EnrollCourseFetching,
      } = useStudentEnrolledCourseQuery({ refetchOnMountOrArgChange: true });
    



        // console.log(enrolledCourse?.data?.courses);    
        // console.log(enrolledCourse);    
    return (
      <>
        <HeaderDashboard user={useDatar} />
        <Welcome name={useDatar.name} />
        <CourseSlider title="Available Courses" data={data?.data} />
        <CourseSlider
          title="Enrolled Courses"
          data={enrolledCourse?.data?.courses}
        />
        {/* <CourseSlider title="Completed" /> */}
        <Footer />
      </>
    );
}

export default StudentDashboard