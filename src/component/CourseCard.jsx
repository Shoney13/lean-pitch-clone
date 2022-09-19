import moment from "moment";
import React from "react";
import commonStyles from "../assets/common/common.module.css";
import styles from "./CourseCard.module.css";
const CourseCard = (props) => {
  const { image, title, date, themeColor } = props;
  return (
    <div
      className={`${styles.course_card_main}`}
      style={{ backgroundColor: themeColor }}
    >
      <img src={image ?? ""} alt="" className={`${styles.course_card_image}`} />
      <div className={`${styles.course_card_title}`}>{title}</div>
      <div className={`${styles.course_card_date_container}`}>
        <span className={`${styles.course_card_subtitle}`}>
          {" "}
          Upcoming Training
        </span>
        <span className={`${styles.course_card_date}`}>{moment(date).format("Do MMM, YYYY")}</span>
      </div>
      <button
        className={`${commonStyles.pill_button} ${commonStyles.button_register}`}
      >
        Register
      </button>
    </div>
  );
};

export default CourseCard;
