import React, { useEffect, useState } from 'react'
import Header from '../components/Header/Header'
import { useNavigate } from 'react-router-dom';
import { Link, Navigate } from 'react-router-dom';
import { Alert } from '@mui/material';

import { useGetSignupMutation } from '../Redux/api/signupSlice';


const SignUp = () => {
  // const [show, setShow] = useState(false);
  const [show, setShow] = useState(false);
  const [term, setTerm] = useState(false);
  const [getSignup, response] = useGetSignupMutation();
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    cpassword: '',
    role: 'student'
    
  });
  const [message, setMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();
 


  const handleInputs = (e) => {
    // console.log(e);
    let nameofinput = e.target.name;
    let value = e.target.value;

    setUser({ ...user, [nameofinput]: value });

  }
  const signup = () => {
    // alert('signup called before validation');
    getSignup(user);
    navigate('/login');
    // if (validate) {
    //   alert('success! Validation is true sign up called');
    //   // getSignup(user)
    // }
    
    
    
  }

  const validateform = (e) => {
    e.preventDefault();
    const { name, email, password, cpassword } = user;

    if (name === '' || email === '' || password === '' || cpassword === '') {
      // setShowAlert(true);

      if (name === '') {
        const parent = document.getElementById('name').parentNode;
        parent.classList.add('error');
      }
      else {
        const parent = document.getElementById('name').parentNode;
        parent.classList.remove('error');

      }
      if (email === '') {
        const parent = document.getElementById('email').parentNode;
        parent.classList.add('error');
      } else {
        const parent = document.getElementById('email').parentNode;
        parent.classList.remove('error');
      }

      if (password === '') {
        const parent = document.getElementById('password').parentNode;
        parent.classList.add('error');
      } else {
        const parent = document.getElementById('password').parentNode;
        parent.classList.remove('error');
      }

      if (cpassword === '') {
        const parent = document.getElementById('cpassword').parentNode;
        parent.classList.add('error');
      } else {
        const parent = document.getElementById('cpassword').parentNode;
        parent.classList.remove('error');

      }
     



      setMessage('Please fill all the fields');
      // const baseurl = `${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_JSPORT}`
      // setMessage(baseurl);
      setShowAlert(true);
      return false;
    }
    else {
      document.getElementById('name').parentNode.classList.remove('error');
      document.getElementById('email').parentNode.classList.remove('error');
      document.getElementById('password').parentNode.classList.remove('error');
      document.getElementById('cpassword').parentNode.classList.remove('error');
      setShowAlert(false);
    }
    if (password.length < 5 && password.length > 10) { 
      const parent = document.getElementById('password').parentNode;
      parent.classList.add('error');
      setMessage('Password must be 5 to 10 characters');
      setShowAlert(true);
      return false;
    }
    else {
      const parent = document.getElementById('password').parentNode;
      parent.classList.remove('error');
      setShowAlert(false);
    }



    if (password !== cpassword) {
      const parent = document.getElementById('cpassword').parentNode;
      parent.classList.add('error');
      setMessage('Password and Confirm Password must be same');
      setShowAlert(true);
      return false;
    }
    else {
      const parent = document.getElementById('cpassword').parentNode;
      parent.classList.remove('error');
      setShowAlert(false);

    }


    if (term === false) { 
     setMessage('Please accept Terms & Conditions');
      setShowAlert(true);
      return false;
    }

    signup();

    
    


  }




  return (
    <div>
      <Header login />
      <div className='background'>


        {!show && <div className="roleContainer ">
          <div class="wrapper">

            <input type="radio" name="role" id="student" checked
              value='student' onChange={handleInputs} onClick={() => setShow(true)} />
            <input type="radio" name="role" id="teacher"
              value='teacher' onChange={handleInputs} onClick={() => setShow(true)} />
            <label for="student" class="option student" >
              <div class="dot"></div>
              <span>Student</span>
            </label>
            <label for="teacher" class="option teacher">
              <div class="dot"></div>
              <span>Teacher</span>
            </label>
          </div>
        </div>
        }

        {show && <div className="formContainer">

          <form action="" >
            <div className='heading'>
              <span>Sign Up</span>
              {showAlert && <Alert variant="filled" severity="error">{message}</Alert>}
              {/* <Alert variant="filled" severity="warning">
                This is a warning alert — check it out!
              </Alert>
              <Alert variant="filled" severity="info">
                This is an info alert — check it out!
              </Alert>
              <Alert variant="filled" severity="success">
                This is a success alert — check it out!
              </Alert> */}
            </div>
            <div className="form-group">
              <input type="text" name="name" id="name" placeholder='Name'
                value={user.name} onChange={handleInputs}  />
            </div>
            <div className="form-group">
              <input type="email" name="email" id="email" placeholder='Email'
                value={user.email} onChange={handleInputs}  />

            </div>
            <div className="form-group">
              <input type="password" name="password" id="password" placeholder='Password'
                value={user.password} onChange={handleInputs}  />
            </div>
            <div className="form-group">
              <input type="password" name="cpassword" id="cpassword" placeholder='Confirm Password'
                value={user.cpassword} onChange={handleInputs}  />
            </div>
            <div className="checkbox">

              <input type="checkbox" name="term" id="term" value='' onClick={() => setTerm(!term)}  />
              <span>Creating your account and you accepting <Link to="/Terms" target="_blank"><span className="term" >Terms & Conditions</span></Link>.</span>
            </div>
            <div className="form-group">
              <input type="submit" id="" value='Sign Up' onClick={validateform} />
            </div>
            <div className="text">
              <span>Already have an account? <Link to="/Login" ><span className="login" >Login</span></Link></span>
            </div>
          </form>
        </div>}
      </div>

    </div>
  )
}

export default SignUp