import React from 'react'
import HeaderDashboard from '../../../DashboardComponents/HeaderDashboard'
import { useSelector } from 'react-redux'
import Welcome from '../../../DashboardComponents/Welcome'
import { Link } from 'react-router-dom'



const AdminDashboard = () => {
    const useDatar = useSelector(state => state.user.userData)

    return (
        <div className='adminPage'>
            <HeaderDashboard user={useDatar} />
            <Welcome name={useDatar.name} />

            <div className='teacher-btn admin-btn'>
                <Link to='/dashboard/updateprofile'><button>Update Profile</button></Link>
                <Link to='/admin/viewrequests'><button>View Requests</button></Link>
                <Link to='/dashboard/changepassword'><button>Change Password</button></Link>



            </div>
        </div>
    )
}

export default AdminDashboard