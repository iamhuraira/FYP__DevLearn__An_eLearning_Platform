import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import CourseCard from "../components/CourseCard/CourseCard";
import Hero from "../components/Hero/Hero";
import ChooseUs from "../components/ChooseUs/ChooseUs";
import OurLearningPath from "../components/OurLearningPath/OurLearningPath";


const LandingPage = () => {
  return (
    <>
      <Header />
      <Hero />
      <ChooseUs />
      <OurLearningPath />
      <Footer />
    </>
  );
};

export default LandingPage;
