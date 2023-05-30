import React, { useState } from "react";
import logo from "../assets/img/logo.png";
import { useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { logoutuser } from "../Redux/slices/accountSlice";

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

  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="logo" />
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
                <li className="changePassword" onClick={handleChangePassword}>
                  Change Password
                </li>
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
    </div>
  );
};

export default HeaderDashboard;
