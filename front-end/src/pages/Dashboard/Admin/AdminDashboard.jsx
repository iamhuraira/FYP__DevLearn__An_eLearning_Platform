import React from 'react'
import HeaderDashboard from '../../../DashboardComponents/HeaderDashboard'
import { useSelector } from 'react-redux'
import Welcome from '../../../DashboardComponents/Welcome'
import { Link } from 'react-router-dom'



const AdminDashboard = () => {
    const useDatar = useSelector(state => state.user.userData)

    return (
      <div className="adminPage">
        <HeaderDashboard user={useDatar} />
        {/* <Welcome name={useDatar.name} /> */}

        <div className="statSection">
          <div className="row">
            <div className="box">
              <h2>No. of Admins</h2>
              <h1>10</h1>
            </div>
            <div className="box">
              <h2 style={{ backgroundColor: '#0c3a53' }}>No. of Teachers</h2>
              <h1>10</h1>
            </div>
            <div className="box">
              <h2 style={{ backgroundColor: '#0c3a53' }}>No. of Students</h2>
              <h1>10</h1>
            </div>
          </div>
          <div className="row">
            <div className="box">
              <h2>Total Users</h2>
              <h1>10</h1>
            </div>
            <div className="box">
              <h2>Verified Users</h2>
              <h1>10</h1>
            </div>
            <div className="box">
              <h2>Unverified Users</h2>
              <h1>10</h1>
            </div>
          </div>

          <div className="row">
            <div className="box">
              <h2>Total Courses</h2>
              <h1>10</h1>
            </div>
            <div className="box">
              <h2>Approved Courses</h2>
              <h1>10</h1>
            </div>
            <div className="box">
              <h2>Disapproved Courses</h2>
              <h1>10</h1>
            </div>
          </div>
        </div>

        <div className="teacher-btn admin-btn">
          <Link to="/dashboard/updateprofile">
            <button>Update Profile</button>
          </Link>
          <Link to="/admin/viewrequests">
            <button>View Requests</button>
          </Link>
          {/* <Link to="/dashboard/changepassword">
            <button>Change Password</button>
          </Link> */}
        </div>
      </div>
    );
}

export default AdminDashboard