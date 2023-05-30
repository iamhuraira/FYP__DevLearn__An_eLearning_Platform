import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import ChooseUs from "../components/ChooseUs/ChooseUs";
import CourseCard from "../components/CourseCard/CourseCard";
import OurLearningPath from "../components/OurLearningPath/OurLearningPath";
import CourseSlider from "../components/CourseSlider/CourseSlider";



const LandingPage = () => {
  return (
    <>
      <Header />
      <Hero />
      <ChooseUs />
      <OurLearningPath />
      {/* <CourseSlider title="Popular Courses" /> */}
      <Footer />
    </>
  );
};

export default LandingPage;
