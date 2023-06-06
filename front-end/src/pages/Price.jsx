import React from 'react'
import HeaderDashboard from '../DashboardComponents/HeaderDashboard'
import Header from '../components/Header/Header'
import { useSelector } from 'react-redux'
import Footer from '../components/Footer/Footer'



const Price = () => {
  const auth = localStorage.getItem('token')
  const user = useSelector(state => state.user.userData)

  return (
    <>
      {auth ? <HeaderDashboard user={user} /> : <Header />} 

      <div className='pricePage'>
        <h2>Choose the plan that suits you best</h2>
      </div>

      <Footer />
     
    </>
  )
}

export default Price