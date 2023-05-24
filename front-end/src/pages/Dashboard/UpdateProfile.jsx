import React, { useState } from 'react'
import HeaderDashboard from '../../DashboardComponents/HeaderDashboard'
import TextField from '@mui/material/TextField';
// import { MdDeleteForever } from 'react-icons/md';
// import { IoMdAdd } from 'react-icons/io';
// import { FaUser, } from 'react-icons/fa';
import { IoCloseSharp } from 'react-icons/io5';
import avatarImg from '../.././assets/img/avatar.png'
import Avatar from 'react-avatar-edit';
// import Cropper from 'react-easy-crop'

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

// import dayjs from "dayjs";
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';




const UpdateProfile = () => {


    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');


    const [avatarPreviw, setAvatarPreviw] = useState(avatarImg);

    const [dialogBox, setDialogBox] = useState(false);
    // eslint-disable-next-line
    const [imgCrop, setImgCrop] = useState(false);
    const [saveImg, setSaveImg] = useState([]);

    const [gender, setgender] = React.useState('');
    const [country, setCountry] =   React.useState('');
    const [date, setDate] = React.useState();

  
    const handleSaveImg = () => {
        // console.log('OnSaveClicked')
        setSaveImg([...saveImg, { imgCrop }])
        setDialogBox(!dialogBox)
    }

    const handleChange = (event) => { 
        setgender(event.target.value);
    }
    const handleChangeCountry = (event) => { 
        setCountry(event.target.value);
    }
    const setFechaDesde = (x) => {
        setDate(x)
        //    console.log(x.target.value)
    }


    const country_list = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua &amp; Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia &amp; Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Cape Verde", "Cayman Islands", "Chad", "Chile", "China", "Colombia", "Congo", "Cook Islands", "Costa Rica", "Cote D Ivoire", "Croatia", "Cruise Ship", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Polynesia", "French West Indies", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Kyrgyz Republic", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Mauritania", "Mauritius", "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Namibia", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Pierre &amp; Miquelon", "Samoa", "San Marino", "Satellite", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "South Africa", "South Korea", "Spain", "Sri Lanka", "St Kitts &amp; Nevis", "St Lucia", "St Vincent", "St. Lucia", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor L'Este", "Togo", "Tonga", "Trinidad &amp; Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks &amp; Caicos", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "Uruguay", "Uzbekistan", "Venezuela", "Vietnam", "Virgin Islands (US)", "Yemen", "Zambia", "Zimbabwe"];


    let userProfile = {
        name,
        email,
        gender,
        country,
        dob: date,
        phone,
        profilePic : avatarPreviw,
    }

    const img = new Image();
    img.src = avatarPreviw;
    img.onload = function () {
        // Access the image dimensions
        console.log("Image width:", img.width);
        console.log("Image height:", img.height);
        console.log("Image Name:", img);
    };

    const HandleSubmit = () => { 
        // alert('Profile Updated', userProfile)
        // console.log(userProfile)
       
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

                        <div className="profile-data">
                            <TextField id="outlined-basic" label="Name" name='name' onChange={(e)=>setName(e.target.value)}  variant="outlined" style={{width:'735px'}} />
                            <TextField id="outlined-basic" label="Email" name='email' onChange={(e) => setEmail(e.target.value)} variant="outlined" style={{ width: '735px' }} />

                            <FormControl >
                                <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={gender}
                                    label="Gender"
                                    onChange={handleChange}
                                   
                                >
                                    <MenuItem value={'Male'}  style={{ fontSize: '1.9rem' }}  >Male</MenuItem>
                                    <MenuItem value={'Female'}  style={{ fontSize: '1.9rem' }} >Female</MenuItem>
                                    <MenuItem value={'Other'}  style={{ fontSize: '1.9rem' }} >Other</MenuItem>
                                </Select>
                            </FormControl>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                
                                <MobileDatePicker label="Date-of-Birth" onChange={(x) => setFechaDesde(x)} />
                            </LocalizationProvider>

                            <TextField id="outlined-basic" label="Phone" name='phone' onChange={(e) => setPhone(e.target.value)} variant="outlined" />
                            <FormControl >
                                <InputLabel id="demo-simple-select-label">Country</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={country}
                                    label="Country"
                                    onChange={handleChangeCountry}

                                >
                                    {
                                        country_list.map((item, index) => <MenuItem value={item} style={{ fontSize: '1.9rem' }}  >{item}</MenuItem>

                                        )
                                    }
{/*                                     
                                    <MenuItem value={'Pakistan'} style={{ fontSize: '1.9rem' }}  >Pakistan</MenuItem>
                                    <MenuItem value={'India'} style={{ fontSize: '1.9rem' }} >India</MenuItem>
                                    <MenuItem value={'Afganistan'} style={{ fontSize: '1.9rem' }} >Afganistan</MenuItem> */}
                                </Select>
                            </FormControl>

                            <button style={{ width: '735px' }} onClick={HandleSubmit} >Update Profile</button>
                        </div>




                    </div>
                </div>


                {/* </form> */}
            </div>
        </>
    )
}

export default UpdateProfile