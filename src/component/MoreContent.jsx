import React, { useState } from "react";
import styles from "./CoursesInfo.module.css";
const MoreContent = () => {
  return (
    <div className={styles.courses_info_main}>
      <div className={styles.courses_info_panel}>
        <h1 className={styles.courses_info_title}>Videos</h1>
        <div className={styles.courses_course_Card_container}>
          {/* TODO: Map Videos Cards */}
        </div>
      </div>
      <div className={styles.courses_info_panel}>
        <h1 className={styles.courses_info_title}>PM Speak Series</h1>
        <div className={styles.courses_course_Card_container}>
          {/* TODO: Map Videos Cards */}
        </div>
      </div>
      <div className={styles.courses_info_panel}>
        <h1 className={styles.courses_info_title}>Blogs</h1>
        <div className={styles.courses_course_Card_container}>
          {/* TODO: Map Videos Cards */}
        </div>
      </div>
      <div className={styles.courses_info_panel}>
        <h1 className={styles.courses_info_title}>Podcasts</h1>
        <div className={styles.courses_course_Card_container}>
          {/* TODO: Map Videos Cards */}
        </div>
      </div>
    </div>
  );
};

export default MoreContent;
