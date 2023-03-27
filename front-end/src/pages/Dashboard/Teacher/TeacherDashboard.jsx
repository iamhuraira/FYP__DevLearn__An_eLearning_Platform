import React, { useEffect } from 'react'
import HeaderDashboard from '../../../DashboardComponents/HeaderDashboard'
import Welcome from '../../../DashboardComponents/Welcome'
import { Link, useNavigate } from 'react-router-dom'

const TeacherDashboard = (props) => {

  const navigate = useNavigate()

  useEffect(() => {
    if (props.user === false) {
      
      navigate('/Login')
    }
  })



  return (
      <>
      <HeaderDashboard />
      <Welcome />

      <div className='teacher-btn'>
        <Link to='/dashboard/updateprofile'><button>View & Update Profile</button></Link>
        <Link to='/teacherdashboard/createcourse'><button >Create Course</button></Link>

        
        
          <button>View Courses</button>
      </div>

      </>
  )
}

export default TeacherDashboard