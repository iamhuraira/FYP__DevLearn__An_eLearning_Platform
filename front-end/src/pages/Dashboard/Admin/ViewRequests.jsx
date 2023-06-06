import React from 'react'
import { useSelector } from 'react-redux'
import HeaderDashboard from '../../../DashboardComponents/HeaderDashboard'
import py from '../../../assets/img/CourseImages/py.png'
import { useNavigate } from 'react-router-dom'
import { useGetAdminCoursesQuery } from '../../../Redux/api/courseSlice'

const ViewRequests = () => {
    const useDatar = useSelector(state => state.user.userData)
    const navigate = useNavigate()
    const { data = [], isLoading, isFetching } = useGetAdminCoursesQuery()
    const handleViewCourse = (id) => {
        navigate(`/coursedetails/${id}`);
        // console.log(data.data.length)
    }
    const courseCount = data.data?.length > 10 ? '10+' : data.data?.length
    const ImgUrl = `${process.env.REACT_APP_BASE_URL}/public/img/courses`;
    return (
        <div>
            <HeaderDashboard user={useDatar} />
            <div className='course-div viewRequest'>

                <h1> Courses Needs Approval ( <span style={{ color: "#1abbb1" }}>{courseCount}</span> )</h1>
                {
                    data.data?.map((course, index) => (
                        <div className='viewRequestsCard' key={index}>
                            <div className='course-info-logo'>

                                <div className='admin-courseLogo'>
                                    <img src={`${ImgUrl}/${course.selectLogo}`} alt="" />
                                </div>
                                <div className='admin-courseInfor'>
                                    <h1>{course.courseName}</h1>
                                    <h2>By: <span>{course.teacher.name}</span></h2>
                                </div>
                            </div>
                            <button onClick={() => handleViewCourse(course._id)}>
                                View Course
                            </button>
                        </div>
                    ))
                }
                {/* <div className='viewRequestsCard'>
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
                </div> */}
            </div>
        </div>
    )
}

export default ViewRequests