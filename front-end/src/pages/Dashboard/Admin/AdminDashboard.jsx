import React, { useEffect } from "react";
import HeaderDashboard from "../../../DashboardComponents/HeaderDashboard";
import { useSelector } from "react-redux";
import Welcome from "../../../DashboardComponents/Welcome";
import { Link } from "react-router-dom";
import { useGetStatQuery } from "../../../Redux/api/courseSlice";
import { CircularProgress } from "@mui/material";

const AdminDashboard = () => {
  const useDatar = useSelector((state) => state.user.userData);
  const { data, isLoading, isFetching, isSuccess } = useGetStatQuery({
    refetchOnMountOrArgChange: true,
    refetchOnReconnect: true,
  });

  useEffect(() => {
    if (isSuccess) {
      console.log(data);
    }
  }, [isSuccess]);

  return (
    <div className="adminPage">
      <HeaderDashboard user={useDatar} />
      {/* <Welcome name={useDatar.name} /> */}

      <div className="statSection">
        <div className="row">
          <div className="box">
            <h2>No. of Admins</h2>
            <h1>
              {isFetching ? (
                <CircularProgress disableShrink />
              ) : (
                <>{data?.admincount}</>
              )}
            </h1>
          </div>
          <div className="box">
            <h2 style={{ backgroundColor: "#0c3a53" }}>No. of Teachers</h2>
            <h1>
              {/* <CircularProgress disableShrink />{' '} */}
              {isFetching ? (
                <CircularProgress disableShrink />
              ) : (
                <> {data?.teachercount}</>
              )}
            </h1>
          </div>
          <div className="box">
            <h2 style={{ backgroundColor: "#0c3a53" }}>No. of Students</h2>
            <h1>
              {" "}
              {isFetching ? (
                <CircularProgress disableShrink />
              ) : (
                <> {data?.studentcount}</>
              )}
            </h1>
          </div>
        </div>
        <div className="row">
          <div className="box">
            <h2>Total Users</h2>
            <h1>
              {" "}
              {isFetching ? (
                <CircularProgress disableShrink />
              ) : (
                <> {data?.totalusers}</>
              )}
            </h1>
          </div>
          <div className="box">
            <h2>Verified Users</h2>
            <h1>
              {" "}
              {isFetching ? (
                <CircularProgress disableShrink />
              ) : (
                <> {data?.verifiedUsers}</>
              )}
            </h1>
          </div>
          <div className="box">
            <h2>Unverified Users</h2>
            <h1>
              {" "}
              {isFetching ? (
                <CircularProgress disableShrink />
              ) : (
                <> {data?.unverifiedusers}</>
              )}
            </h1>
          </div>
        </div>

        <div className="row">
          <div className="box">
            <h2>Total Courses</h2>
            <h1>
              {" "}
              {isFetching ? (
                <CircularProgress disableShrink />
              ) : (
                <> {data?.totalcourses}</>
              )}
            </h1>
          </div>
          <div className="box">
            <h2>Approved Courses</h2>
            <h1>
              {" "}
              {isFetching ? (
                <CircularProgress disableShrink />
              ) : (
                <> {data?.approvedcourses}</>
              )}
            </h1>
          </div>
          <div className="box">
            <h2>Disapproved Courses</h2>
            <h1>
              {" "}
              {isFetching ? (
                <CircularProgress disableShrink />
              ) : (
                <> {data?.othercourses}</>
              )}
            </h1>
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
};

export default AdminDashboard;
