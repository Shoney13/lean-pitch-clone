import React from "react";
import styles from "./WhyWeMatter.module.css";
import labImage from "../assets/pt_lab_image.png";
import growthArrow from "../assets/red_arrow.png";
import { ArrowRight } from 'react-bootstrap-icons';
const WhyWeMatter = () => {
  return (
    <div className={styles.why_we_matter_main}>
      <div className={styles.first_panel}>
        <h1 className={styles.first_panel_title}>Why We Matter?</h1>
        <img src={growthArrow} alt="" className={styles.growth_arrow} />
        <div className={styles.inside_first_panel}>
          <div className={styles.first_panel_text_container}>
            <h2 className={styles.inside_first_panel_title}>
              Creative Thinking for creating an impact!
            </h2>
            <p className={styles.inside_first_panel_passage}>
              Leanpitch is problem solving. Whether it's your kid asking for a
              solution to his day to day problems or the rise in threats of
              Global Warming, it's evident that the whole human kind needs to be
              product thinkers. We, at Product Thinking community, strive to
              provide such a platform for practitioners to come together and
              learn from each other about the craft of building products. This
              Platform is run by the community for the community. We are a
              community with 46k+ product thinkers hosting various events across
              India: Webinars every week, meet-ups every month in every city,
              two conference a year.
            </p>
          </div>
            <iframe
              className={styles.first_panel_iframe}
              width="560"
              height="315"
              src="https://www.youtube.com/embed/S8KwpKxRmsc"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
        </div>
        <button className={`${styles.button} ${styles.button_community}`}>Join Our Community <ArrowRight/></button>
      </div>
      <div className={styles.second_panel}>
        <div>
          <h1>Leanpitch Thinking Labs</h1>
          <p>{/* TODO:  */}</p>
          <button>View Details</button>
          <button>Register Now</button>
        </div>
      </div>
      <img src={labImage} alt="" />
    </div>
  );
};

export default WhyWeMatter;
