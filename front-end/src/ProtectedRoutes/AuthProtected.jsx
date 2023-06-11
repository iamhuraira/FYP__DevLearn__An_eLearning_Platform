import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const AuthProtected = (props) => {
  const { Component } = props;
  const navigate = useNavigate();
  const [validAdmin, setValidAdmin] = React.useState(false);
  useEffect(() => {
    let token = localStorage.getItem('token');

      if (!token) {
          console.log('validAdminToken', validAdmin);
          navigate('/Login');
      }
      else { 
            setValidAdmin(true);
      }
  }, []);
  return (
    <>
      {validAdmin ? <Component /> : ' '}
      {/* <Component /> */}
    </>
  );
}

export default AuthProtected