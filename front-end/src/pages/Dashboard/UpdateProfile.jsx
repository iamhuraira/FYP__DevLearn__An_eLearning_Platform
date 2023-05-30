import React, { useState } from "react";
import HeaderDashboard from "../../DashboardComponents/HeaderDashboard";
import TextField from "@mui/material/TextField";
import avatarImg from "../.././assets/img/avatar.png";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { useDispatch, useSelector } from "react-redux";
import Image from "./Teacher/Image";
import { MdOutlineDoubleArrow } from "react-icons/md";
import dayjs from "dayjs";
import { useUpdateUserProfileMutation } from "../../Redux/api/signupSlice";
import { setUserData } from "../../Redux/slices/accountSlice";

const UpdateProfile = () => {
  const useDatar = useSelector((state) => state.user.userData);
  // const date = new Date("2014-12-23")

  const [getUpdateMe, { data, isSuccess }] = useUpdateUserProfileMutation();
  const dispatch = useDispatch();

  if (isSuccess) {
    console.log(data);
    const { data: userdata } = data;
    const { user } = userdata;

    dispatch(setUserData(user));
    // localStorage.setItem("user", JSON.stringify(user));
  }

  // console.log(date)

  const [name, setName] = useState(useDatar.name || "");
  const [email, setEmail] = useState(useDatar.email || "");
  const [phone, setPhone] = useState(useDatar.phone || "");
  const [userdescription, setUserdescription] = useState(
    useDatar.userdescription || ""
  );
  const [gender, setgender] = React.useState(useDatar.gender || "");
  const [country, setCountry] = React.useState(useDatar.country || "");
  const [date, setDate] = React.useState(useDatar.dob || "");

  const handleChange = (event) => {
    setgender(event.target.value);
  };
  const handleChangeCountry = (event) => {
    setCountry(event.target.value);
  };
  const setFechaDesde = (x) => {
    setDate(x);
    //    console.log(x.target.value)
  };

  const country_list = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antigua &amp; Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia",
    "Bosnia &amp; Herzegovina",
    "Botswana",
    "Brazil",
    "British Virgin Islands",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cambodia",
    "Cameroon",
    "Cape Verde",
    "Cayman Islands",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Congo",
    "Cook Islands",
    "Costa Rica",
    "Cote D Ivoire",
    "Croatia",
    "Cruise Ship",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Estonia",
    "Ethiopia",
    "Falkland Islands",
    "Faroe Islands",
    "Fiji",
    "Finland",
    "France",
    "French Polynesia",
    "French West Indies",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Gibraltar",
    "Greece",
    "Greenland",
    "Grenada",
    "Guam",
    "Guatemala",
    "Guernsey",
    "Guinea",
    "Guinea Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hong Kong",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Isle of Man",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jersey",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kuwait",
    "Kyrgyz Republic",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macau",
    "Macedonia",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Montserrat",
    "Morocco",
    "Mozambique",
    "Namibia",
    "Nepal",
    "Netherlands",
    "Netherlands Antilles",
    "New Caledonia",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "Norway",
    "Oman",
    "Pakistan",
    "Palestine",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Puerto Rico",
    "Qatar",
    "Reunion",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Pierre &amp; Miquelon",
    "Samoa",
    "San Marino",
    "Satellite",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "South Africa",
    "South Korea",
    "Spain",
    "Sri Lanka",
    "St Kitts &amp; Nevis",
    "St Lucia",
    "St Vincent",
    "St. Lucia",
    "Sudan",
    "Suriname",
    "Swaziland",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Timor L'Este",
    "Togo",
    "Tonga",
    "Trinidad &amp; Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Turks &amp; Caicos",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "Uruguay",
    "Uzbekistan",
    "Venezuela",
    "Vietnam",
    "Virgin Islands (US)",
    "Yemen",
    "Zambia",
    "Zimbabwe",
  ];
  const [courseLogo, setCourseLogo] = React.useState(null);
  const courseLogoRef = React.useRef(null);

  // const profilePic = courseLogo || avatarImg;
  // const profileImg = useDatar.profilePic !== avatarImg ? useDatar.profilePic : " ";

  // let userProfile = {
  //     name,
  //     userdescription,
  //     gender,
  //     country,
  //     dob: date,
  //     phone,
  //     profilePic,
  // }

  const ImgUrl = `${process.env.REACT_APP_BASE_URL}/public/img/users/${useDatar.profilePic}`;

  console.log(ImgUrl);
  console.log(useDatar.profilePic);
  // console.log(useDatar);

  const HandleSubmit = () => {
    let formdata = new FormData();
    formdata.append("name", name);
    formdata.append("userdescription", userdescription);
    formdata.append("gender", gender);
    formdata.append("country", country);
    formdata.append("dob", date);
    formdata.append("phone", phone);
    formdata.append("profilePic", courseLogo || useDatar.profilePic);
    // alert('Profile Updated', userProfile)
    console.log(formdata);
    // getUpdateMe(formdata);
  };

  return (
    <>
      <HeaderDashboard user={useDatar} />

      <div className="course-div">
        {/* <form action=""> */}
        <div className="profile-info">
          <h2>Profile Info</h2>

          <div className="profile-input">
            <div className="profile-pic">
              {/* <img src={img} alt="" srcset="" style={{ border: '2px solid red' }} /> */}

              <img
                src={`${process.env.REACT_APP_BASE_URL}/public/img/users/${useDatar.profilePic}`}
                alt=""
                srcset=""
                onClick={() => {
                  courseLogoRef.current.click();
                }}
              />
              <input
                ref={courseLogoRef}
                type="file"
                hidden
                onChange={(e) => {
                  setCourseLogo(e.target.files[0]);
                }}
                id="courseLogo"
              />
              <div className="imgcourse">
                {courseLogo && (
                  <div className="imgcourseDiv">
                    <div className="imgcoursearrow">
                      <MdOutlineDoubleArrow />
                      <MdOutlineDoubleArrow />
                    </div>
                    <Image file={courseLogo} height={80} width={80} />
                  </div>
                )}
              </div>
            </div>

            <div className="profile-data">
              <TextField
                id="outlined-basic"
                label="Name"
                name="name"
                defaultValue={name}
                onChange={(e) => setName(e.target.value)}
                variant="outlined"
                style={{ width: "735px" }}
              />
              <TextField
                id="outlined-basic"
                label="Email"
                name="email"
                defaultValue={email}
                variant="outlined"
                style={{ width: "735px" }}
                InputProps={{
                  readOnly: true,
                }}
              />
              <TextField
                id="outlined-basic"
                label="User Description"
                name="userdescription"
                defaultValue={userdescription}
                onChange={(e) => setUserdescription(e.target.value)}
                variant="outlined"
                style={{ width: "735px" }}
              />

              <FormControl>
                <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={gender}
                  label="Gender"
                  onChange={handleChange}
                  defaultValue={gender}
                >
                  <MenuItem value={"Male"} style={{ fontSize: "1.9rem" }}>
                    Male
                  </MenuItem>
                  <MenuItem value={"Female"} style={{ fontSize: "1.9rem" }}>
                    Female
                  </MenuItem>
                  <MenuItem value={"Other"} style={{ fontSize: "1.9rem" }}>
                    Other
                  </MenuItem>
                </Select>
              </FormControl>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <MobileDatePicker
                  label={date && "Date-of-Birth"}
                  defaultValue={dayjs(date)}
                  onChange={(x) => setFechaDesde(x)}
                />
              </LocalizationProvider>

              <TextField
                id="outlined-basic"
                label="Phone"
                name="phone"
                defaultValue={phone}
                onChange={(e) => setPhone(e.target.value)}
                variant="outlined"
              />
              <FormControl>
                <InputLabel id="demo-simple-select-label">Country</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={country}
                  label="Country"
                  onChange={handleChangeCountry}
                  defaultValue={country}
                >
                  {country_list.map((item, index) => (
                    <MenuItem value={item} style={{ fontSize: "1.9rem" }}>
                      {item}
                    </MenuItem>
                  ))}
                  {/*                                     
                                    <MenuItem value={'Pakistan'} style={{ fontSize: '1.9rem' }}  >Pakistan</MenuItem>
                                    <MenuItem value={'India'} style={{ fontSize: '1.9rem' }} >India</MenuItem>
                                    <MenuItem value={'Afganistan'} style={{ fontSize: '1.9rem' }} >Afganistan</MenuItem> */}
                </Select>
              </FormControl>

              <button style={{ width: "735px" }} onClick={HandleSubmit}>
                Update Profile
              </button>
            </div>
          </div>
        </div>

        {/* </form> */}
      </div>
    </>
  );
};

export default UpdateProfile;
