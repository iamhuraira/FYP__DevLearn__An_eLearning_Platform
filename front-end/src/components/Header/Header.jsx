import React, { useRef } from 'react'
import logo from '../../assets/img/logo.png'
import { useNavigate } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa';
const Header = (props) => {
  const navigate = useNavigate();
  const navref = useRef();
  const showNavBar = () => {
    navref.current.classList.toggle('show')
  }
  const ShowLandingPage = () => {
    navigate("/");
  }
  return (
    <div className='header'>
      <div className="logo">
        <img src={logo} alt="logo" onClick={ShowLandingPage} />

        <nav className='' ref = {navref}>
          
        <ul>
            <li onClick={() => { navigate("/courses")}}> Courses</li>
            <li onClick={() => { navigate("/price") }}>Pricing</li>
        </ul>
        <button className=' btn-nav btn-times'  onClick={showNavBar}><FaTimes/></button>
      </nav>

      </div>
      <div className='btns'>
        
      <button className='p-btn'
          onClick={() => navigate(props.signup ? '/SignUp': '/Login' )}>
          {props.signup ? 'Sign Up' : 'Login'}
      </button>
      <button className=' btn-nav btn-bar' onClick={showNavBar}>
        <FaBars/>
      </button>
          </div>

    </div>
  )
}

export default Header