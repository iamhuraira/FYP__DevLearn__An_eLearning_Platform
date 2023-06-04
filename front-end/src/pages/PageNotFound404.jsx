import React, { useEffect } from 'react'
import ErrorImg from '../assets/img/404.png'
import { Link, useNavigate } from 'react-router-dom'


const PageNotFound404 = (props) => {

  // const location = props.location === undefined ? '/' : props.location;
  // const text = props.location === undefined ? 'Go to Home' : 'Go to Login';
  const loading = props.loading ? props.loading : false

  const navigate = useNavigate()

  useEffect(() => {

    console.log('loading')
    if (loading) {
      setTimeout(() => {
        navigate('/')
      }, 4000)
    }
  })
  // if (props.loading) { 
  //   console.log('loading')
  //   setTimeout(() => {
  //     navigate('/')
  //   }, 4000) 
  // }

  return (
    <>
      <div className="container" style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '80dvh'
      }}>
        <img src={ErrorImg} alt="" srcset=""
          style={{ width: '100%', height: '100%', objectFit: 'contain' }}

        />
        <button className='button-homePage'>
          <Link to="/">Go to Home</Link>
        </button>

      </div>
    </>
  )
}

export default PageNotFound404