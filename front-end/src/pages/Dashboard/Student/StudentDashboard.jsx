import React from 'react'
import HeaderDashboard from '../../../DashboardComponents/HeaderDashboard'
import Welcome from '../../../DashboardComponents/Welcome'
import { useSelector } from 'react-redux'
import Footer from '../../../components/Footer/Footer'
import { Slider } from '@mui/material'
import CourseSlider from '../../../components/CourseSlider/CourseSlider'

const StudentDashboard = () => {
    const useDatar = useSelector(state => state.user.userData)

    return (
        <>
            <HeaderDashboard user={useDatar} />
            <Welcome name={useDatar.name} />
            <CourseSlider title="Courses"  />
            <CourseSlider title="In Progress"  />
            <CourseSlider title="Completed"  />
            <Footer />
        </>
    )
}

export default StudentDashboard