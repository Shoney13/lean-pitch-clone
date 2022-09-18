import React from "react";
import Conference from "./Conference";
import CoursesInfo from "./CoursesInfo";
import IndexPanel from "./IndexPanel";
import styles from "./LandingPage.module.css";
import WhyWeMatter from "./WhyWeMatter";
const LandingPage = () => {
  return (
    <>
      <IndexPanel />
      <WhyWeMatter />
      <CoursesInfo />
      <Conference/>
    </>
  );
};

export default LandingPage;
