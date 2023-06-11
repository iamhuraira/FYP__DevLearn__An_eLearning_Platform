/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const UnAuthProtected = (props) => {
  const { Component } = props;
  const navigate = useNavigate();
  const [validAdmin, setValidAdmin] = React.useState(false);
  useEffect(() => {
    let token = localStorage.getItem('token');
    let role = localStorage.getItem('role');

    if (!token) {
      //   console.log('validAdminToken', validAdmin);
      setValidAdmin(true);
    } else {
      if (role === 'admin') {
        navigate('/admindashboard');
      } else if (role === 'teacher') {
        navigate('/teacherdashboard');
      } else if (role === 'student') {
        navigate('/studentdashboard');
      } else {
        navigate('/Login');
      }
    }
  }, []);
  return (
    <>
      {validAdmin ? <Component /> : ' '}
      {/* <Component /> */}
    </>
  );
};

export default UnAuthProtected;
