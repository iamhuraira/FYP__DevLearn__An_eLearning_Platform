import React from 'react'
import HeaderDashboard from '../../../DashboardComponents/HeaderDashboard'
import Welcome from '../../../DashboardComponents/Welcome'
import { useSelector } from 'react-redux'

const StudentDashboard = () => {
    const useDatar = useSelector(state => state.user.userData)

    return (
        <>
            <HeaderDashboard user={useDatar} />
            <Welcome name={useDatar.name}/>
        </>
    )
}

export default StudentDashboard