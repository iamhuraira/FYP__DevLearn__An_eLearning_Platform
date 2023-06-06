/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import HeaderDashboard from '../DashboardComponents/HeaderDashboard'
import Header from '../components/Header/Header'
import OfferHeading from '../components/OfferHeading'
import CourseSlider from '../components/CourseSlider/CourseSlider'
import CourseCard from '../components/CourseCard/CourseCard'
import Footer from '../components/Footer/Footer'
import { useGetAllCoursesQuery } from '../Redux/api/courseSlice'
import { useSelector } from 'react-redux'

const Courses = () => {
  // const [logedInUser, setLogedInUser] = useState(false)
  // const [courses, setCourses] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])
  const { data = [], isLoading, isFetching } = useGetAllCoursesQuery({ refetchOnMountOrArgChange: true })
  const courseCount = data?.data?.length > 10 ? '10+' : data?.data?.length

  const auth = localStorage.getItem('token')
  const user = useSelector(state => state.user.userData)

  return (
    <div className='coursesPage'>
      {auth ? <HeaderDashboard user={user} /> : <Header />}
      <OfferHeading />
      <CourseSlider title="Popular Courses" data={data?.data} />

      <div className='allCourses'>
        <h1>All Courses  ( <span style={{ color: "#1abbb1" }}>{courseCount}</span> ) </h1>
        <div className='courseLoop'>

          {
            data?.data.map(( course ) => {
              return(
              <div className='courseCard'>
                  <CourseCard course={course} />
              </div>)
            })
          }
        </div>
      </div>
      <Footer />  
    </div>
  )
}

export default Courses