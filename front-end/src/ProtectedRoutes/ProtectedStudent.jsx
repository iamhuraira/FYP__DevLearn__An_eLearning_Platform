/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ProtectedStudent = (props) => {
  const { Component } = props;
  const navigate = useNavigate();
  const [validAdmin, setValidAdmin] = React.useState(false);
  useEffect(() => {
    let token = localStorage.getItem('token');
    let role = localStorage.getItem('role');

    if (!token) {
      console.log('validAdminToken', validAdmin);
      navigate('/Login');
    }
    if (role !== 'student') {
      if (role === 'teacher') {
        navigate('/teacherdashboard');
      } else if (role === 'admin') {
        navigate('/admindashboard');
      } else {
            navigate('/Login');
          
      }

    } else {
      setValidAdmin(true);
    }
  }, []);
  return (
    <>
      {validAdmin ? <Component /> : ' '}
      {/* <Component /> */}
    </>
  );
};

export default ProtectedStudent;
