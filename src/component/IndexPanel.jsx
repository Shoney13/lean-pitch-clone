import React, { useState } from "react";
import CourseCard from "./CourseCard";
import styles from "./IndexPanel.module.css";
import { trainingData } from "./trainingData";
import img1 from "../assets/CSPO.png";
import img2 from "../assets/csm.png";
import img3 from "../assets/logo-icp-acc.png";
import img4 from "../assets/A-CSPO.png";
import { webinarData } from "./webinarData";
import BlogCard from "./BlogCard";
import Conference from "./Conference";
import { blogData } from "./blogData";
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
          {currActiveIdx === 2 && (
            <div className={styles.index_panel_course_card_container}>
              {webinarData.map((blog, index) => (
                <BlogCard
                  title={blog.title}
                  image={blog.image}
                  writer={blog.writer}
                  key={index}
                />
              ))}
            </div>
          )}
          {currActiveIdx === 3 && <Conference />}
          {currActiveIdx === 6 && (
            <div className={styles.index_panel_course_card_container}>
              {blogData.map((blog, index) => (
                <BlogCard
                  title={blog.title}
                  image={blog.image}
                  writer={blog.writer}
                  key={index}
                />
              ))}
            </div>
          )}
          {(currActiveIdx === 4||currActiveIdx === 5|| currActiveIdx === 7||currActiveIdx === 8||currActiveIdx === 9) && (
            <div className={styles.index_panel_subtitle}>
              More Information about {indexArray[currActiveIdx]} is not available right now.
            </div>
          )}
          {currActiveIdx === 10 && (
            <div className={styles.index_panel_subtitle}>
              We call ourselves curators of software development pitches. We got into this business in Sep 2011 with a goal to empower our customers to achieve greater values in whatever they do through tactical lean strategies. We believe that every human being is born with Agile Mindset and we would like to bring them back to apply empirical approach in every problem they solve. We develop products and provide services for both product discovery and product delivery cycles of Software Product Development.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default IndexPanel;
