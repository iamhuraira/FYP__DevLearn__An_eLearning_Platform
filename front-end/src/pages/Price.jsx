import React from 'react'
import HeaderDashboard from '../DashboardComponents/HeaderDashboard'
import Header from '../components/Header/Header'
import { useSelector } from 'react-redux'



const Price = () => {
  const auth = localStorage.getItem('token')
  const user = useSelector(state => state.user.userData)

  return (
    <>
      {auth ? <HeaderDashboard user={user} /> : <Header />} 
     
    </>
  )
}

export default Price