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
  return (
    <div className='header'>
      <div className="logo">
        <img src={logo} alt="logo" />

        <nav className='show' ref = {navref}>
          
        <ul>
          <li > Courses</li>
          <li>Pricing</li>
        </ul>
        <button className=' btn-nav btn-times'  onClick={showNavBar}><FaTimes/></button>
      </nav>

      </div>
      <div className='btns'>
        
      <button className='p-btn'
        onClick={() => navigate(props.login ? '/login' : '/signup')}>
        {props.login ? 'Log In' : 'Sign In'}
      </button>
      <button className=' btn-nav btn-bar' onClick={showNavBar}>
        <FaBars/>
      </button>
          </div>

    </div>
  )
}

export default Header