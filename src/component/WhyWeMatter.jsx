import React from "react";
import styles from "./WhyWeMatter.module.css";
import growthArrow from "../assets/red_arrow.png";
import { ArrowRight } from "react-bootstrap-icons";
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
        <button className={`${styles.button} ${styles.button_community}`}>
          Join Our Community <ArrowRight />
        </button>
      </div>
      <div className={styles.second_panel}>
        <div className={styles.inside_second_panel}>
          <h1 className={styles.second_panel_title}>Leanpitch Thinking Labs</h1>
          <p className={styles.second_panel_passage}>
            Product Thinking Community introduces PT Labs powered by Leanpitch.
            Product Managers are creative thinkers and life long researchers.
            Their curiosity to understand the problem, persistence to solve
            them, and empathy to make the solutions easy makes them resourceful
            in solving Social Problems. <br />
            <br />
            If you have it in you and are looking for an opportunity to
            contribute back to society, join PT Labs. Become part of a product
            team of volunteers, pickup a social problem, swarm together, design,
            and run experiments to find a problem/solution fit. Present your
            discovery and be recognized at next Product Thinking Conference.
            Product Thinking community will pursue further on implementing a
            solution in the subsequent cohorts, which you can again be part of.{" "}
            <br />
            <br />
            Share your interest by submitting your details. We will get back to
            you with more information.
          </p>
          <div className={styles.labs_buttons_container}>
            <button className={`${styles.button} ${styles.button_labs}`}>
              View Details <ArrowRight />
            </button>
            <button className={`${styles.button} ${styles.button_labs}`}>
              Register Now <ArrowRight />
            </button>
          </div>
        </div>
        <div className={styles.second_panel_image} />
      </div>
    </div>
  );
};

export default WhyWeMatter;
