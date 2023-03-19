import React, { useState } from 'react'
import Header from '../components/Header/Header'
// import { useNavigate } from 'react-router-dom';
import { Link, Navigate } from 'react-router-dom';

const SignUp = () => {
  // const navigate = useNavigate();
  // const [show, setShow] = useState(false);
  const [show, setShow] = useState(false);
  const [validate, setValidate] = useState(false);
  const [term, setTerm] = useState(false);
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    cpassword: '',
    role: 'student',

  });
  const handleInputs = (e) => {
    console.log(e);
    let nameofinput = e.target.name;
    let value = e.target.value;

    setUser({ ...user, [nameofinput]: value });

  }
  const validateform = () => { 
    const { name, email, password, cpassword, role } = user;

      if(name === '' || email === '' || password === '' || cpassword === '' || role === ''){
        alert('Please fill all the fields');
        setValidate(false);
        // return false;
      }
    if (password !== cpassword) {
      // const child = document.getElementById('cpassword');
      const parent = document.getElementById('cpassword').parentNode;
      parent.classList.add('error');
      // child.style.border = '1px solid red';
      // child.style.color = 'red';
      // alert('Password and Confirm Password should be same');
      setValidate(false);
      return false;
    }
    else { 
      const parent = document.getElementById('cpassword').parentNode;
      parent.classList.remove('error');
    
    }
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

          <form action="">
            <div className='heading'>
              <span>Sign Up</span>
            </div>
            <div className="form-group">
              <input type="text" name="name" id="name" placeholder='Name'
                value={user.name} onChange={handleInputs}  required/>
            </div>
            <div className="form-group">
              <input type="email" name="email" id="email" placeholder='Email'
                value={user.email} onChange={handleInputs}  required/>

            </div>
            <div className="form-group">
              <input type="password" name="password" id="password" placeholder='Password'
                value={user.password} onChange={handleInputs}  required/>
            </div>
            <div className="form-group">
              <input type="password" name="cpassword" id="cpassword" placeholder='Confirm Password'
                value={user.cpassword} onChange={handleInputs}  required/>
            </div>
            <div className="checkbox">

              <input type="checkbox" name="term" id="term" value='' onClick={() => setTerm(!term)}  required/>
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