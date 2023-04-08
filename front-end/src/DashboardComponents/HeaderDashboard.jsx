import React, {  useState } from 'react'
import logo from '../assets/img/logo.png'
import { useNavigate } from 'react-router-dom'
import { FaUser } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi'


const HeaderDashboard = (props) => {
  const navigate = useNavigate();

  const handleChangePassword = () => { 
    navigate('/dashboard/changepassword')
  }
  const [showLogout, setshowLogout] = useState(false)
  return (
    <div className='header'>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className='userinfo'>

        <h2>Abu Huraira</h2>
        <div className='dashboard-nav'>
          <span className='user-icon' onClick={()=>{setshowLogout(!showLogout)}}>
            {
              props.ProfileImg ? <img src={props.ProfileImg} alt="profile" /> : <FaUser />
           }
           

          </span>
          {showLogout && <nav >
            <ul>
              <li className='name'>Abu Huraira</li>
              <li className='changePassword' onClick={handleChangePassword}>Change Password</li>
              <li className='logout'>Logout <span><FiLogOut /> </span></li>
            </ul>
          </nav>}
        </div>


          
      </div>

    </div>
  )
}

export default HeaderDashboard 