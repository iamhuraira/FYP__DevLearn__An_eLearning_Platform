import React from 'react'
import HeaderDashboard from '../../../DashboardComponents/HeaderDashboard'
import { useSelector } from 'react-redux'



const AdminDashboard = () => {
    const useDatar = useSelector(state => state.user.userData)
   
    return (
        <>
            <HeaderDashboard user={useDatar} />
        </>
    )
}

export default AdminDashboard