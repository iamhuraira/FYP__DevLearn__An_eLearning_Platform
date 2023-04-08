import React from 'react'
import HeaderDashboard from '../../../DashboardComponents/HeaderDashboard'
import Welcome from '../../../DashboardComponents/Welcome'
import { Link } from 'react-router-dom'

const TeacherDashboard = (props) => {

  const navigate = useNavigate()

  // useEffect(() => {
  //   if (props.user === false) {
      
  //     navigate('/Login')
  //   }
  // })



  return (
    <>
      <HeaderDashboard name="Abu Huraira" />
      <Welcome />

      <div className='teacher-btn'>
        <Link to='/dashboard/updateprofile'><button>Update Profile</button></Link>
        <Link to='/teacherdashboard/createcourse'><button >Create Course</button></Link>
        <Link to='#'><button>View Course</button></Link>
        <Link to='/dashboard/changepassword'><button>Change Password</button></Link>

        
        
          <button>View Courses</button>
      </div>

    </>
  )
}

export default TeacherDashboard