/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import HeaderDashboard from '../../DashboardComponents/HeaderDashboard'
import TextField from '@mui/material/TextField';


import { Alert } from '@mui/material';

import { useUpdateUserPasswordMutation } from '../../Redux/api/courseSlice';
import { useNavigate } from 'react-router-dom';
import { setUserData } from '../../Redux/slices/accountSlice';
import Header from '../components/Header/Header';






const ForgotPasswordChange = () => {
    const [successMsg, setSuccessMsg] = useState("");
    const [showSuccess, setShowSuccess] = useState(false);
    const [msg, setMsg] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [changePassword, setChangePassword] = useState({
        newPassword: '',
        confirmPassword: '',
    })
    const navigate = useNavigate();
    const [changePasswordUser, { data, isSuccess, isError, error }] = useUpdateUserPasswordMutation()

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



            }
        }
    }, [isSuccess]);




    const handleInputs = (e) => {
        let nameofinput = e.target.name;
        let value = e.target.value;

        setChangePassword({ ...changePassword, [nameofinput]: value });

    }


    const [newPasswordE, setNewPasswordE] = useState(false);
    const [confirmPasswordE, setConfirmPasswordE] = useState(false);


    const validateform = () => {
        setSuccessMsg("");
        setShowSuccess(false);
        const { newPassword, confirmPassword } = changePassword;
        if ( newPassword === '' || confirmPassword === '') {
           
            if (newPassword === '') {
                setNewPasswordE(true);
            }
            else {
                setNewPasswordE(false);
            }
            if (confirmPassword === '') {
                setConfirmPasswordE(true);
            }
            else {
                setConfirmPasswordE(false);
            }

            setShowAlert(true);
            setMsg('All Fields Are Required');
            return false
        }
        else {
            setNewPasswordE(false);
            setConfirmPasswordE(false);
            setShowAlert(false);
        }
        if (newPassword.length < 6 || newPassword.length > 10) {
            setNewPasswordE(true);
            setMsg('Password Length Should Be Between 5 To 10');
            setShowAlert(true);
            return false
        } else {
            setNewPasswordE(false);
            setShowAlert(false);
        }
        if (confirmPassword.length < 6 || confirmPassword.length > 10) {
            setConfirmPasswordE(true);
            setMsg('Password Length Should Be Between 5 To 10');
            setShowAlert(true);
            return false
        } else {
            setConfirmPasswordE(false);
            setShowAlert(false);
        }

        if (newPassword !== confirmPassword) {
            setConfirmPasswordE(true);
            setMsg('Password Does Not Match');
            setShowAlert(true);
            return false
        }
        else {
            setConfirmPasswordE(false);
            setShowAlert(false);
        }

        handleSubmit()
    }

    const handleSubmit = () => {


        changePasswordUser({
            password: changePassword.newPassword,
            cpassword: changePassword.confirmPassword
        })
        console.log(changePassword)
    }




    return (
        <>
            {/* <HeaderDashboard user={useDatar} / */}
            <Header />

            <div className="course-div" >
                {/* <form action=""> */}
                <div className="profile-info">
                    <h2>Create New Password</h2>

                    {showAlert && <Alert variant="filled" severity="error">{msg}</Alert>}
                    {showSuccess && <Alert variant="filled" severity="success">{successMsg}</Alert>}
                    <div className="profile-input">

                        <div className="profile-data">
                            <TextField error={newPasswordE} id="outlined-basic" label="New Password" name='newPassword' onChange={handleInputs} variant="outlined" style={{ width: '735px' }} />
                            <TextField error={confirmPasswordE} id="outlined-basic" label="Confirm Password" name='confirmPassword' onChange={handleInputs} variant="outlined" style={{ width: '735px' }} />


                            <button style={{ width: '735px' }} onClick={validateform}>Create New Password</button>
                        </div>




                    </div>
                </div>


                {/* </form> */}
            </div>
        </>
    )
}

export default ForgotPasswordChange;