import React, { useState, useCallback } from 'react'
import HeaderDashboard from '../../DashboardComponents/HeaderDashboard'
import TextField from '@mui/material/TextField';
import { MdDeleteForever } from 'react-icons/md';
import { IoMdAdd } from 'react-icons/io';
import { FaUser, } from 'react-icons/fa';
import { IoCloseSharp } from 'react-icons/io5';
import avatarImg from '../.././assets/img/avatar.png'
import Avatar from 'react-avatar-edit';
import Cropper from 'react-easy-crop'



const UpdateProfile = () => {



    const [avatarPreviw, setAvatarPreviw] = useState(avatarImg);
    const [dialogBox, setDialogBox] = useState(false);

    const [imgCrop, setImgCrop] = useState(false);
    const [saveImg, setSaveImg] = useState([]);


    const handleSaveImg = () => {
        // console.log('OnSaveClicked')
        setSaveImg([...saveImg, { imgCrop }])
        setDialogBox(!dialogBox)
        console.log(avatarPreviw)
    }





        return (
            <>
                <HeaderDashboard ProfileImg={avatarPreviw} />

                <div className="course-div" >
                    {/* <form action=""> */}
                    <div className="profile-info">
                        <h2>Profile Info</h2>

                        <div className="profile-input">
                            <div className='profile-pic'>
                                {/* <img src={img} alt="" srcset="" style={{ border: '2px solid red' }} /> */}

                                <img src={avatarPreviw} alt="" srcset="" onClick={() => setDialogBox(!dialogBox)} />
                                {
                                    dialogBox && <div className="dialog-box">
                                        <h3>Select Profile Picture</h3>
                                        <Avatar
                                            width={140}
                                            height={140}
                                            onCrop={(preview) => setAvatarPreviw(preview)}
                                            onClose={() => setAvatarPreviw(avatarImg)}
                                        />
                                        <button onClick={handleSaveImg}>Save</button>
                                        <div className='close'>
                                            < IoCloseSharp onClick={() => setDialogBox(!dialogBox)} />
                                        </div>
                                    </div>
                                }


                            </div>

                            
                        </div>
                    </div>


                    {/* </form> */}
                </div>
            </>
        )
    }

export default UpdateProfile