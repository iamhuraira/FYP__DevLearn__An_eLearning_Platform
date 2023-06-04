/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import ChooseUs from "../components/ChooseUs/ChooseUs";
import CourseCard from "../components/CourseCard/CourseCard";
import OurLearningPath from "../components/OurLearningPath/OurLearningPath";
import CourseSlider from "../components/CourseSlider/CourseSlider";
import HeaderDashboard from "../DashboardComponents/HeaderDashboard";
import { useSelector } from "react-redux";
import { useGetAllCoursesQuery } from "../Redux/api/courseSlice";
import { useNavigate } from "react-router-dom";




const LandingPage = () => {
  const useDatar = useSelector(state => state.user.userData)
  const auth = localStorage.getItem('token')
  const navigate = useNavigate()
  useEffect(() => { 
    if (auth) {
      if (useDatar.role === "admin") {
        navigate("/admindashboard");
      }
      if (useDatar.role === "teacher") {
        navigate("/teacherdashboard");
      }
      if (useDatar.role === "student") {
        navigate("/studentdashboard");
      }
    }
  }, [auth])
  const { data = [], isLoading, isFetching } = useGetAllCoursesQuery({ refetchOnMountOrArgChange: true })
  // console.log(data)

 
  return (
    <>
       <Header />
      <Hero />
      <ChooseUs />
      <OurLearningPath />
      <CourseSlider title="Available Courses" data={data.data} />
      <Footer />
    </>
  );
};

export default LandingPage;
