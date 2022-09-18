import React, { useState } from "react";
import styles from "./IndexPanel.module.css";
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
  const [currActiveIdx, setCurrActiveIdx] = useState();
  return (
    <div className={styles.index_panel_main}>
      <div className={styles.index_panel_inside}>
        <ul className={styles.index_list}>
          {indexArray.map((title, index) => (
            <li
              key={index}
              className={`${styles.index_list_item} ${currActiveIdx === index ? styles.active : ''}`}
              onMouseOver={() => {
                setCurrActiveIdx(index);
              }}
            >
              {title}
            </li>
          ))}
        </ul>
        <div className={`${styles.more_info} ${typeof currActiveIdx === 'number'? styles.active:''}`}>
          {/* TODO: Add Data for Each Index */}
        </div>
      </div>
    </div>
  );
};

export default IndexPanel;
