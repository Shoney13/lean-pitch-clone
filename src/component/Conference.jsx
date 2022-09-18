import React, { useState } from "react";
import commonStyles from "../assets/common/common.module.css";
import { ArrowRight } from "react-bootstrap-icons";
import styles from "./Conference.module.css";
const Conference = () => {
  const [webinarSelected, setWebinarSelected] = useState("upcoming");

  return (
    <div className={styles.conference_main}>
      <h1 className={styles.conference_title}>Our Conference</h1>
      <div className={styles.conference_button_container}>
        <span
          className={`${commonStyles.box_button} ${
            webinarSelected === "upcoming" ? styles.active : ""
          } ${styles.conference_box_button}`}
          onClick={() => {
            setWebinarSelected("upcoming");
          }}
        >
          Upcoming
        </span>
        <span
          className={`${commonStyles.box_button} ${
            webinarSelected === "past" ? styles.active : ""
          } ${styles.conference_box_button}`}
          onClick={() => {
            setWebinarSelected("past");
          }}
        >
          Past
        </span>
      </div>
      <p className={styles.conference_description}>
        Conferences are not just about learning from the speakers. It's also
        about meeting new people, learning from attendees, making connections,
        getting to know each other and being part of a community.
        <br />
        <br />
        Having hosted the conference online last year and after close
        consultation with the community, speakers, exhibitors and event
        partners, we have decided to host our next conference in person to make
        it more effective.
        <br />
        <br />
        We will be back with more information once COVID subsides
      </p>
      <button
        className={`${commonStyles.pill_button} ${commonStyles.pill_button_labs}`}
      >
        Notify Me <ArrowRight />
      </button>
    </div>
  );
};

export default Conference;
