import React from 'react'
import HeaderDashboard from '../../../DashboardComponents/HeaderDashboard'


const AdminDashboard = () => {
    const getAllUser = async () => {
        const baseurl = `${process.env.REACT_APP_BASE_URL}`

        console.log(baseurl)
        const response = await fetch(baseurl);
        // waits until the request completes...
       
        console.log(response);

    }
    return (
        <>
            <HeaderDashboard name="Abu Huraira" />

            <button onClick={getAllUser}>Get All User</button>
        </>
    )
}

export default AdminDashboard