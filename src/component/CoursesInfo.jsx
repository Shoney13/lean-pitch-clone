import React, { useState } from "react";
import styles from "./CoursesInfo.module.css";
import commonStyles from "../assets/common/common.module.css";
import { FunnelFill } from "react-bootstrap-icons";
import { trainingData } from "./trainingData";
import CourseCard from "./CourseCard";
import img1 from "../assets/CSPO.png";
import img2 from "../assets/csm.png";
import img3 from "../assets/logo-icp-acc.png";
import img4 from "../assets/A-CSPO.png";
const CoursesInfo = () => {
  const [meetupSelected, setMeetupSelected] = useState("upcoming");
  const [webinarSelected, setWebinarSelected] = useState("upcoming");
  const getImage = (index) => {
    switch (index) {
      case 0:
        return img1;

      case 1:
        return img2;

      case 2:
        return img3;

      case 3:
        return img4;

      default:
        break;
    }
  };
  return (
    <div className={styles.courses_info_main}>
      <div className={styles.courses_info_panel}>
        <h1 className={styles.courses_info_title}>Our Trainings</h1>
        <div className={styles.courses_course_Card_container}>
          {trainingData.map((course, index) => (
            <CourseCard
              title={course.long_title}
              image={getImage(index)}
              date={course?.trainings?.start_date}
              themeColor={course?.theme_color}
              key={index}
            />
          ))}
        </div>
      </div>
      <div className={styles.courses_info_panel}>
        <h1 className={styles.courses_info_title}>Our Meetups</h1>
        <div className={styles.meetups_button_container}>
          <span
            className={`${commonStyles.box_button} ${
              meetupSelected === "upcoming" ? commonStyles.active : ""
            }`}
            onClick={() => {
              setMeetupSelected("upcoming");
            }}
          >
            Upcoming
          </span>
          <span
            className={`${commonStyles.box_button} ${
              meetupSelected === "past" ? commonStyles.active : ""
            }`}
            onClick={() => {
              setMeetupSelected("past");
            }}
          >
            Past
          </span>
          {/* TODO: Add select below */}
          <span className={styles.city_select}>
            <FunnelFill /> Filter by City
          </span>
        </div>
        <h3 className={styles.courses_info_subtitle}>
          Awesome meetups will be here soon!
        </h3>
      </div>
      <div className={styles.courses_info_panel}>
        <h1 className={styles.courses_info_title}>Our Webinars</h1>
        <div className={styles.webinar_button_container}>
          <span
            className={`${commonStyles.box_button} ${
              webinarSelected === "upcoming" ? commonStyles.active : ""
            }`}
            onClick={() => {
              setWebinarSelected("upcoming");
            }}
          >
            Upcoming
          </span>
          <span
            className={`${commonStyles.box_button} ${
              webinarSelected === "past" ? commonStyles.active : ""
            }`}
            onClick={() => {
              setWebinarSelected("past");
            }}
          >
            Past
          </span>
        </div>
        {/* TODO: Add Webinar Card */}
      </div>
    </div>
  );
};

export default CoursesInfo;
