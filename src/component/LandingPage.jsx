import React from "react";
import Conference from "./Conference";
import CoursesInfo from "./CoursesInfo";
import IndexPanel from "./IndexPanel";
import styles from "./LandingPage.module.css";
import MoreContent from "./MoreContent";
import WhyWeMatter from "./WhyWeMatter";
const LandingPage = () => {
  return (
    <>
      <IndexPanel />
      <WhyWeMatter />
      <CoursesInfo />
      <Conference/>
      <MoreContent/>
    </>
  );
};

export default LandingPage;
