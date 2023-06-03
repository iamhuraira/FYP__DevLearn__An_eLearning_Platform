import React from 'react'
import { useSelector } from 'react-redux'
import HeaderDashboard from '../../../DashboardComponents/HeaderDashboard'
import py from '../../../assets/img/CourseImages/py.png'
import { useNavigate } from 'react-router-dom'

const ViewRequests = () => {
    const useDatar = useSelector(state => state.user.userData)
    const navigate = useNavigate()
    const handleViewCourse = (id) => { 
        navigate(`/coursedetails/${id}`);
    }
    return (
        <div>
            <HeaderDashboard user={useDatar} />
            <div className='course-div viewRequest'>

                <h1>Courses Needs Approvel</h1>
                <div className='viewRequestsCard'>
                    <div className='admin-courseLogo'>
                        <img src={py} alt="" />
                    </div>
                    <div className='admin-courseInfor'>
                        <h1>React JS- Complete Guide for Frontend Web Development</h1>
                        <h2>By: <span>John Doe</span></h2>
                    </div>
                    <button onClick={() => handleViewCourse(1)}>
                        View Course
                    </button>
                </div>
                <div className='viewRequestsCard'>
                    <div className='admin-courseLogo'>
                        <img src={py} alt="" />
                    </div>
                    <div className='admin-courseInfor'>
                        <h1>React JS- Complete Guide for Frontend Web Development</h1>
                        <h2>By: <span>John Doe</span></h2>
                    </div>
                    <button>
                        View Course
                    </button>
                </div>
                <div className='viewRequestsCard'>
                    <div className='admin-courseLogo'>
                        <img src={py} alt="" />
                    </div>
                    <div className='admin-courseInfor'>
                        <h1>React JS- Complete Guide for Frontend Web Development</h1>
                        <h2>By: <span>John Doe</span></h2>
                    </div>
                    <button>
                        View Course
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ViewRequests