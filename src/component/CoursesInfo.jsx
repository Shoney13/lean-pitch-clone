import React, { useState } from "react";
import styles from "./CoursesInfo.module.css";
import commonStyles from '../assets/common/common.module.css'
import { FunnelFill } from "react-bootstrap-icons";
const CoursesInfo = () => {
  const [meetupSelected, setMeetupSelected] = useState("upcoming");
  const [webinarSelected, setWebinarSelected] = useState("upcoming");
  return (
    <div className={styles.courses_info_main}>
      <div className={styles.courses_info_panel}>
        <h1 className={styles.courses_info_title}>Our Trainings</h1>
        <div>{/* TODO: Map Course Cards */}</div>
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
          <span className={styles.city_select}><FunnelFill/> Filter by City</span>
        </div>
        <h3 className={styles.courses_info_subtitle}>Awesome meetups will be here soon!</h3>
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
