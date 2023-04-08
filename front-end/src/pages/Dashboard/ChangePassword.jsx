import React, { useState } from 'react'
import HeaderDashboard from '../../DashboardComponents/HeaderDashboard'
import TextField from '@mui/material/TextField';


import { Alert } from '@mui/material';




const ChangePassword = () => {

    const [changePassword, setChangePassword] = useState({
        oldPassword: '',
        newPassword: '',
        confirmPassword: '',
    })
    const handleInputs = (e) => {
        let nameofinput = e.target.name;
        let value = e.target.value;

        setChangePassword({ ...changePassword, [nameofinput]: value });

    }

    const [oldPasswordE, setOldPasswordE] = useState(false);
    const [newPasswordE, setNewPasswordE] = useState(false);
    const [confirmPasswordE, setConfirmPasswordE] = useState(false);
    const [msg, setMsg] = useState('');
    const [showAlert, setShowAlert] = useState(false);

    const validateform = () => { 
        const { oldPassword, newPassword, confirmPassword } = changePassword;
        if (oldPassword === '' || newPassword === '' || confirmPassword === '') {
            if (oldPassword === '') {
                setOldPasswordE(true);
            }
            else {
                setOldPasswordE(false);
            }
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
            setOldPasswordE(false);
            setNewPasswordE(false);
            setConfirmPasswordE(false);
            setShowAlert(false);
        }

        if (oldPassword.length < 5 || oldPassword.length > 10) {
            setOldPasswordE(true);
            setMsg('Password Length Should Be Between 5 To 10');
            setShowAlert(true);
            return false  
        } else {
            setOldPasswordE(false);
            setShowAlert(false);
        }
        if (newPassword.length < 5 || newPassword.length > 10) {
            setNewPasswordE(true);
            setMsg('Password Length Should Be Between 5 To 10');
            setShowAlert(true);
            return false
        } else {
            setNewPasswordE(false);
            setShowAlert(false);
        }
        if (confirmPassword.length < 5 || confirmPassword.length > 10) {
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
        else{
            setConfirmPasswordE(false);
            setShowAlert(false);
        }


       
    }







    return (
        <>
            <HeaderDashboard />

            <div className="course-div" >
                {/* <form action=""> */}
                <div className="profile-info">
                    <h2>Change Password</h2>

                    {showAlert && <Alert variant="filled" severity="error">{msg}</Alert>}

                    <div className="profile-input">

                        <div className="profile-data">
                            <TextField error={oldPasswordE} id="outlined-basic" label="Old Password" name='oldPassword' onChange={handleInputs} variant="outlined" style={{ width: '735px' }} />
                            <TextField error={newPasswordE} id="outlined-basic" label="New Password" name='newPassword' onChange={handleInputs}  variant="outlined" style={{ width: '735px' }} />
                            <TextField error={confirmPasswordE} id="outlined-basic" label="Confirm Password" name='confirmPassword' onChange={handleInputs} variant="outlined" style={{ width: '735px' }} />


                            <button style={{ width: '735px' }} onClick={validateform}>Change Password</button>
                        </div>




                    </div>
                </div>


                {/* </form> */}
            </div>
        </>
    )
}

export default ChangePassword;