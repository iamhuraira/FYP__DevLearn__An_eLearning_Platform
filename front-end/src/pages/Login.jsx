import React, { useState } from "react";
import Header from "../components/Header/Header";
import { Link, useNavigate } from "react-router-dom";
import { Alert } from "@mui/material";

import { useDispatch } from "react-redux";
import { setUserData } from "../Redux/slices/accountSlice";
import { useGetLoginMutation } from "../Redux/api/courseSlice";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [getLogin, { data, isLoading, isSuccess }] = useGetLoginMutation();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(isSuccess);
  if (isSuccess) {
    console.log(data);
    const { token, data: userdata } = data;
    const { user } = userdata;
    // console.log(user)

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

  const login = () => {
    getLogin(user);
  };
  const [message, setMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleInputs = (e) => {
    // console.log(e);
    let nameofinput = e.target.name;
    let value = e.target.value;

    setUser({ ...user, [nameofinput]: value });
  };
  const validateform = (e) => {
    e.preventDefault();
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
              <Link to="/ForgetPassword" target="_blank">
                <span className="term fpass">Forget Password?</span>
              </Link>
            </div>
            <div className="form-group">
              <input type="submit" id="" value="Login" onClick={validateform} />
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
      </div>
    </div>
  );
};

export default Login;
