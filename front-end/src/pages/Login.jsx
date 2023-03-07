import React, { useState} from 'react'
import Header from '../components/Header/Header'
import { Link } from 'react-router-dom';


const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',

  });
  const handleInputs = (e) => {
    console.log(e);
    let nameofinput = e.target.name;
    let value = e.target.value;

    setUser({ ...user, [nameofinput]: value });

  }
  return (
      <div>
      <Header />
      <div className='background'>
      <div className="formContainer ">

        <form action="">
          <div className='heading'>
            <span>Login</span>
          </div>
          <div className="form-group">
            <input type="email" name="email" id="" placeholder='Email'
              value={user.email} onChange={handleInputs} />

          </div>
          <div className="form-group">
            <input type="password" name="password" id="" placeholder='Password'
              value={user.password} onChange={handleInputs} />
          </div>
          <div className="checkbox forget">
            <Link to="/ForgetPassword" target="_blank"><span className="term fpass" >Forget Password?</span></Link>
          </div>
          <div className="form-group">
            <input type="submit" id="" value='Login' />
          </div>
          <div className="text">
              <span>Don't have an account?  <Link to="/SignUp" ><span className="login" >Sign up</span></Link>  here!</span>
          </div>
        </form>
      </div>
      </div>
    </div>
  )
}

export default Login