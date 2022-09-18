import React from "react";
import styles from "./BlogCard.module.css";
const BlogCard = (props) => {
  const { image, title, writer } = props;
  return (
    <div
      className={styles.blog_card_main}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${image})`,
      }}
    >
      <div className={styles.blog_card_title_container}>
        <span className={styles.blog_title}>{title}</span>
        <span className={styles.blog_writer}>By {writer}</span>
      </div>
    </div>
  );
};

export default BlogCard;
