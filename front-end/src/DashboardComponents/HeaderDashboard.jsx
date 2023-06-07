import React, { useEffect, useState } from "react";
import logo from "../assets/img/logo.png";
import { useNavigate, Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { logoutuser } from "../Redux/slices/accountSlice";
import { useDeleteUserMutation } from "../Redux/api/courseSlice";

const HeaderDashboard = (props) => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const logout = () => {
    console.log("logout");
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("user");
    dispatch(logoutuser());
    navigate("/");
  };
 

  const handleChangePassword = () => {
    navigate("/dashboard/changepassword");
  };
  const [showLogout, setshowLogout] = useState(false);

  const name = props.user.name || "";

  const profileAvatar = props.user.profilePic || null;



  // console.log(profileAvatar);
  const showDashboard = () => {
    if (props.user.role === "admin") {
      navigate("/admindashboard");
    }
    if (props.user.role === "teacher") {
      navigate("/teacherdashboard");
    }
    if (props.user.role === "student") {
      navigate("/studentdashboard");
    }
  }

  const [showDeletePopup, setshowDeletePopup] = useState(false);

  const [deleteUser, response] = useDeleteUserMutation()
  
  // console.log("Delete User", response)
  useEffect(() => {
    if (response.status) {
      console.log("Delete User Data", response.status)

      logout();
    }
    if(response.error){
      console.log("Delete User Error", response.error.message)

    }
    // console.log('Delete User Response', response);
  }, [response]);

  // console.log("Delete User", resopnse.error)
  const handleDeleteAccount = () => {
   
   
    deleteUser()
    // console.log("Delete User", props.user._id)

    setshowDeletePopup(false);
    navigate("/");
    // logout();
  }
  return (
    <>
      {showDeletePopup && <div className='overLay'></div>}
      <div className="header">
        <div className="logo" >
          <img src={logo} alt="logo" onClick={showDashboard} />
        </div>
        <div className="userinfo">
          <h2>{name}</h2>
          <div className="dashboard-nav">
            <span
              className="user-icon"
              onClick={() => {
                setshowLogout(!showLogout);
              }}
            >
              {profileAvatar ? (
                <img
                  src={`${process.env.REACT_APP_BASE_URL}/public/img/users/${props.user.profilePic}`}
                  alt="profile"
                />
              ) : (
                <FaUser />
              )}
            </span>
            {showLogout && (
              <nav>
                <ul>
                  <li className="name">{name}</li>
                  <li className="Dashboard">
                    {props.user.role === "admin" && <Link to="/admindashboard">Dashboard</Link>}
                    {props.user.role === "teacher" && <Link to="/teacherdashboard">Dashboard</Link>}
                    {props.user.role === "student" && <Link to="/studentdashboard">Dashboard</Link>}

                  </li>
                  <li onClick={() => navigate("/courses")}>All Courses</li>
                  <li onClick={() => navigate("/price")}>All Package</li>
                  <li className="changePassword" onClick={handleChangePassword}>
                    Change Password
                  </li>
                  <li onClick={() => setshowDeletePopup(true)}>Delete Account</li>

                  <li className="logout" onClick={logout}>
                    Logout{" "}
                    <span>
                      <FiLogOut />{" "}
                    </span>
                  </li>
                </ul>
              </nav>
            )}
          </div>
        </div>
        {
          showDeletePopup && <div className="deletePopup">
            <h2>
              Are you sure you want to delete your account?
            </h2>
            <div className="confermButton">
              <button onClick={() => { setshowDeletePopup(false) }}>No</button>
              <button onClick={handleDeleteAccount}>Yes</button>
            </div>
          </div>
        }
      </div>
    </>
  );
};

export default HeaderDashboard;
