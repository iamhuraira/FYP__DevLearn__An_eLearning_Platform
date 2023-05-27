import React, { useState } from 'react'
import HeaderDashboard from '../DashboardComponents/HeaderDashboard'
import Header from '../components/Header/Header'
import OfferHeading from '../components/OfferHeading'
import CourseSlider from '../components/CourseSlider/CourseSlider'
import CourseCard from '../components/CourseCard/CourseCard'
import Footer from '../components/Footer/Footer'

const Courses = () => {
  const [logedInUser, setLogedInUser] = useState(false)
  const [courses, setCourses] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])

  return (
    <div className='coursesPage'>
      {logedInUser ? <HeaderDashboard /> : <Header />}
      <OfferHeading />
      <CourseSlider title="Popular Courses" />

      <div className='allCourses'>
        <div className='courseLoop'>

          {
            courses.map(() => {
              return(
              <div className='courseCard'>
                <CourseCard />
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