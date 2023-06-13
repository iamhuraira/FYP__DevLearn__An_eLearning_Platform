/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import HeaderDashboard from '../DashboardComponents/HeaderDashboard';
import Header from '../components/Header/Header';
import OfferHeading from '../components/OfferHeading';
import CourseSlider from '../components/CourseSlider/CourseSlider';
import CourseCard from '../components/CourseCard/CourseCard';
import Footer from '../components/Footer/Footer';
import { useGetAllCoursesQuery } from '../Redux/api/courseSlice';
import { useSelector } from 'react-redux';
import { InputAdornment, TextField } from '@mui/material';
import BiSearch from 'react-icons/bi';

const Courses = () => {
 

  // const [logedInUser, setLogedInUser] = useState(false)
  // const [courses, setCourses] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])
  const {
    data = [],
    isLoading,
    isFetching,
  } = useGetAllCoursesQuery({ refetchOnMountOrArgChange: true });
  const courseCount = data?.data?.length > 10 ? '10+' : data?.data?.length;

  const auth = localStorage.getItem('token');
  const user = useSelector((state) => state.user.userData);

  const [filteredList, setFilteredList] = new useState([]);
  const [search, setSearch] = new useState('');
  

  const filterBySearch = () => {
   
  };

  return (
    <div className="coursesPage">
      {auth ? <HeaderDashboard user={user} /> : <Header />}
      <OfferHeading />
      {/* <CourseSlider title="Popular Courses" data={data?.data} /> */}

      <div className="SearchBar">
        <TextField
          id="search"
          type="search"
          label="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={{ width: 600 }}
          InputProps={{
            endAdornment: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            ),
          }}
        />
      </div>
      <div className="allCourses">
        <h1>
          All Courses ({' '}
          <span style={{ color: '#1abbb1' }}>
            {data?.data?.filter((course) => {
              return search.toLowerCase() === ''
                ? course
                : course.courseName
                    .toLowerCase()
                    .includes(search.toLowerCase());
            }).length}
          </span>{' '}
          ){' '}
        </h1>
        <div className="courseLoop">
          {data?.data
            ?.filter((course) => {
              return search.toLowerCase() === ''
                ? course
                : course.courseName
                    .toLowerCase()
                    .includes(search.toLowerCase());
            })
            .map((course) => {
              return (
                <div className="courseCard">
                  <CourseCard course={course} />
                </div>
              );
            })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Courses;
