import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import DegreePrograms from "../components/DegreePrograms";
import LeadershipSection from "../components/LeadershipSection";
import ProjectsSection from "../components/ProjectsSection";
import FacultyNewsSection from "../components/FacultyNewsSection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <DegreePrograms />
      <LeadershipSection />
      <ProjectsSection />
      <FacultyNewsSection />
      <Footer />
    </>
  );
};

export default Home;
