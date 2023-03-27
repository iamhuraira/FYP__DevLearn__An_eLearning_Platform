import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import CourseCard from "../components/CourseCard/CourseCard";
import Hero from "../components/Hero/Hero";
import ChooseUs from "../components/ChooseUs/ChooseUs";


const LandingPage = () => {
  return (
    <>
      <Header />
      <Hero />
      <ChooseUs />
      <Footer />
    </>
  );
};

export default LandingPage;
