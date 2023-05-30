import React, { useState } from 'react'
import CourseCard from '../../../components/CourseCard/CourseCard'

const ViewCourseT = () => {
  const [courses, setCourses] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])
  return (
    <div>
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
    </div>
  )
}

export default ViewCourseT