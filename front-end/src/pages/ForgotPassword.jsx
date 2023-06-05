/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';


import { Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header/Header';
import { useGetForgetPasswordMutation } from "../Redux/api/courseSlice";






const ForgotPassword = () => {
    const [successMsg, setSuccessMsg] = useState("");
    const [showSuccess, setShowSuccess] = useState(false);
    const [msg, setMsg] = useState('');
    const [showAlert, setShowAlert] = useState(false);

    const [email, setEmail] = useState('')

    const navigate = useNavigate();
    const [sendEmail, { data, isSuccess, isError, error }] = useGetForgetPasswordMutation()

    // console.log(data)
    useEffect(() => {
        if (isError) {
            setMsg(error.data.message);
            setShowAlert(true);
        }
    }, [isError]);

    useEffect(() => {
        if (isSuccess) {
            if (data.status === 'success') {

                // setSuccessMsg("Password Changed Successfully");
                // setShowSuccess(true)
                // const { token, data: userdata } = data;
                // const { user } = userdata;

                // dispatch(setUserData(user));
                // localStorage.setItem("token", token);
                // const { role } = user;
                // localStorage.setItem("role", role);


                // setTimeout(() => {
                //     if (role === "admin") {
                //         navigate("/admindashboard");
                //     } else if (role === "student") {
                //         navigate("/studentdashboard");
                //     } else if (role === "teacher") {
                //         navigate("/teacherdashboard");
                //     }
                // }, 4000);



            }
        }
    }, [isSuccess]);




    const validateform = () => {
        setSuccessMsg("");
        setShowSuccess(false);
        if (email === '') {
            setMsg('Please Enter Email')
            setShowAlert(true)
        }
        else if (!email.includes('@')) {
            setMsg('Please Enter Valid Email')
            setShowAlert(true)
        }
        else if (!email.includes('.com')) {
            setMsg('Please Enter Valid Email')
            setShowAlert(true)
        }



        handleSubmit()
    }

    const handleSubmit = () => {


        sendEmail({
            email: email
        })
        console.log(email)
    }







    return (
        <>
            <Header />

            <div className="course-div" >
                {/* <form action=""> */}
                <div className="profile-info">
                    <h2>Forgot Password</h2>

                    {showAlert && <Alert variant="filled" severity="error">{msg}</Alert>}
                    {showSuccess && <Alert variant="filled" severity="success">{successMsg}</Alert>}
                    <div className="profile-input" style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',

                    }}>

                        <div className="profile-data" style={{
                            marginLeft: '0px',
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }} >
                            <TextField error={showAlert} id="outlined-basic" label="Email" name='email' onChange={(e) => setEmail(e.target.value)} variant="outlined" style={{ width: '735px' }} />


                        </div>
                        <div className='forgetpasswordButton' style={{
                            width: '735px',
                            display: 'flex',
                            justifyContent: 'flex-end',


                        }}>
                            <button onClick={validateform}>Send Email</button>
                        </div>



                    </div>
                </div>


                {/* </form> */}
            </div>
        </>
    )
}

export default ForgotPassword;