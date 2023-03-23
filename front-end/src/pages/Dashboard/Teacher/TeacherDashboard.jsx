import React from 'react'
import HeaderDashboard from '../../../DashboardComponents/HeaderDashboard'
import Welcome from '../../../DashboardComponents/Welcome'
import { Link, useNavigate } from 'react-router-dom'

const TeacherDashboard = () => {

  const navigate = useNavigate()



  return (
      <>
      <HeaderDashboard />
      <Welcome />

      <div className='teacher-btn'>
          <button>View Profile</button>
        <button>Update Profile</button>
        <Link to='/teacherdashboard/createcourse'><button >Create Course</button></Link>

        
        
          <button>View Courses</button>
      </div>

      </>
  )
}

export default TeacherDashboard