import React, { useState } from 'react'
import Header from '../components/Header/Header'

const SignUp = () => {
  const [show, setShow] = useState(false);
  return (
      <div>
          <Header login />
      <div className='background'>
      

        {!show && <div className="roleContainer ">
          <div class="wrapper">
          
              <input type="radio" name="role" id="student" checked />
                <input type="radio" name="role" id="teacher" />
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
            <div>
              <h2>Sign Up</h2>
            </div>
            <form action="">
              <div className="form-group">
                <input type="text" name="name" id="" placeholder='Name' />
              </div>
              <div className="form-group">
                <input type="email" name="email" id="" placeholder='Email' />

              </div>
              <div className="form-group">
                <input type="password" name="password" id="" placeholder='Password' />
              </div>
              <div className="form-group">
                <input type="password" name="c-password" id="" placeholder='Confirm Password' />
              </div>
            </form>
          </div>}
        </div>

      </div>
  )
}

export default SignUp