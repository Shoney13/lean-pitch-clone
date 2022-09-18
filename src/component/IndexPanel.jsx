import React, { useState } from "react";
import CourseCard from "./CourseCard";
import styles from "./IndexPanel.module.css";
import { trainingData } from "./trainingData";
import img1 from "../assets/CSPO.png";
import img2 from "../assets/csm.png";
import img3 from "../assets/logo-icp-acc.png";
import img4 from "../assets/A-CSPO.png";
const IndexPanel = () => {
  const indexArray = [
    "Trainings",
    "Meetups",
    "Webinars",
    "Conference",
    "Videos",
    "PM Speak Series",
    "Blogs",
    "Podcasts",
    "Be A Speaker",
    "Be A Volunteer",
    "About Us",
  ];
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
  const [currActiveIdx, setCurrActiveIdx] = useState();
  return (
    <div
      className={styles.index_panel_main}
      onMouseLeave={() => {
        setCurrActiveIdx();
      }}
    >
      <div className={styles.index_panel_inside}>
        <ul className={styles.index_list}>
          {indexArray.map((title, index) => (
            <li
              key={index}
              className={`${styles.index_list_item} ${
                currActiveIdx === index ? styles.active : ""
              }`}
              onMouseOver={() => {
                setCurrActiveIdx(index);
              }}
            >
              {title}
            </li>
          ))}
        </ul>
        <div
          className={`${styles.more_info} ${
            typeof currActiveIdx === "number" ? styles.active : ""
          }`}
        >
          {currActiveIdx === 0 && (
            <div className={styles.index_panel_course_card_container}>
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
          )}
          {currActiveIdx === 1 && (
            <div className={styles.index_panel_subtitle}>
              Awesome meetups will be here soon!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default IndexPanel;
