/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import ChooseUs from "../components/ChooseUs/ChooseUs";
import CourseCard from "../components/CourseCard/CourseCard";
import OurLearningPath from "../components/OurLearningPath/OurLearningPath";
import CourseSlider from "../components/CourseSlider/CourseSlider";
import HeaderDashboard from "../DashboardComponents/HeaderDashboard";
import { useSelector } from "react-redux";



const LandingPage = () => {
  const useDatar = useSelector(state => state.user.userData)
  const auth = localStorage.getItem('token')
 
  return (
    <>
      {/* <Header /> */}
      {auth ? <HeaderDashboard user={useDatar} /> : <Header />}
      <Hero />
      <ChooseUs />
      <OurLearningPath />
      {/* <CourseSlider title="Popular Courses" /> */}
      <Footer />
    </>
  );
};

export default LandingPage;
