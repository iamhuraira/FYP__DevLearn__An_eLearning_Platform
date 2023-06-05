import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import { Link, useNavigate } from "react-router-dom";
import { Alert } from "@mui/material";

import { useDispatch } from "react-redux";
import { setUserData } from "../Redux/slices/accountSlice";
import { useGetLoginMutation } from "../Redux/api/courseSlice";
import CircularProgress from '@mui/material/CircularProgress';



const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const [getLogin, { data, error, isError, isLoading, isSuccess }] = useGetLoginMutation();

  const dispatch = useDispatch();
  const navigate = useNavigate();


  useEffect(() => {
    if (isError) {
      console.log(error);
      setMessage(error.data?.message);
      setShowAlert(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isError]);

  useEffect(() => {
    if (isSuccess) {
      if (data.status === "tokensuccess") {

        // console.log(data);
        setSuccessMsg(data.message);
        setShowSuccess(true);

        setTimeout(() => {
          setSuccessMsg("");
          setShowSuccess(false);
        }, 8000);
      }
      if (data.status === "success") {




        const { token, data: userdata } = data;
        const { user } = userdata;
        dispatch(setUserData(user));
        localStorage.setItem("token", token);
        const { role } = user;
        localStorage.setItem("role", role);

        if (role === "admin") {
          navigate("/admindashboard");
        } else if (role === "student") {
          navigate("/studentdashboard");
        } else if (role === "teacher") {
          navigate("/teacherdashboard");
        }
      }
    }
  }, [isSuccess]);


  const login = () => {
    getLogin(user);
  };
  // const [message, setMessage] = useState("");
  // const [showAlert, setShowAlert] = useState(false);

  const handleInputs = (e) => {
    // console.log(e);
    let nameofinput = e.target.name;
    let value = e.target.value;

    setUser({ ...user, [nameofinput]: value });
  };
  const validateform = (e) => {
    e.preventDefault();
    setSuccessMsg("");
    setShowSuccess(false);
    const { email, password } = user;

    if (email === "" || password === "") {
      // setShowAlert(true);
      if (email === "") {
        const parent = document.getElementById("email").parentNode;
        parent.classList.add("error");
      } else {
        const parent = document.getElementById("email").parentNode;
        parent.classList.remove("error");
      }

      if (password === "") {
        const parent = document.getElementById("password").parentNode;
        parent.classList.add("error");
      } else {
        const parent = document.getElementById("password").parentNode;
        parent.classList.remove("error");
      }
      setMessage("Please fill all the fields");
      setShowAlert(true);
      return false;
    } else {
      document.getElementById("email").parentNode.classList.remove("error");
      document.getElementById("password").parentNode.classList.remove("error");
      setShowAlert(false);
    }
    if (password.length < 5 && password.length > 10) {
      const parent = document.getElementById("password").parentNode;
      parent.classList.add("error");
      setMessage("Password must be 5 to 10 characters");
      setShowAlert(true);
      return false;
    } else {
      const parent = document.getElementById("password").parentNode;
      parent.classList.remove("error");
      setShowAlert(false);
    }

    login();
  };

  return (
    <div>
      <Header signup />
      <div className="background">
        <div className="formContainer ">
          <form action="">
            <div className="heading">
              <span>Login</span>
              {showAlert && (
                <Alert variant="filled" severity="error">
                  {message}
                </Alert>
              )}
              {showSuccess && <Alert variant="filled" severity="success">{successMsg}</Alert>}
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                value={user.email}
                onChange={handleInputs}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                value={user.password}
                onChange={handleInputs}
              />
            </div>
            <div className="checkbox forget">
              <Link to="/forgotpassword" target="_blank">
                <span className="term fpass">Forget Password?</span>
              </Link>
            </div>
            <div className="form-group">
              <button type="submit" id="" value="Login" onClick={validateform} >
                {isLoading ? <CircularProgress disableShrink /> : "Login"}
                {/* <CircularProgress disableShrink /> */}
              </button>
            </div>
            <div className="text">
              <span>
                Don't have an account?{" "}
                <Link to="/SignUp">
                  <span className="login">Sign up</span>
                </Link>{" "}
                here!
              </span>
            </div>
          </form>
        </div>
      </div >
    </div >
  );
};

export default Login;
