import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStarHalf, faStar } from "@fortawesome/free-solid-svg-icons";
import styles from "@/styles/UserReview.module.css";

export const UserReview = () => {
  return (
    <div className={styles.content}>
      <h1 className={styles.username}>Username</h1>
      <span className={styles.rating}>
        <FontAwesomeIcon icon={faStar} className={styles.icon} />
        <FontAwesomeIcon icon={faStar} className={styles.icon} />
        <FontAwesomeIcon icon={faStar} className={styles.icon} />
        <FontAwesomeIcon icon={faStar} className={styles.icon} />
        <FontAwesomeIcon icon={faStarHalf} className={styles.icon} />
      </span>
      <p className={styles.review}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac
        convallis dolor, ut aliquam tellus. Maecenas porta volutpat vehicula.
        Curabitur sit amet eros rutrum, finibus lacus sit amet, interdum magna.
        Etiam pulvinar erat gravida neque porta vestibulum. Proin eu tempus
        nisl. Praesent at ultrices velit. Proin ac ex vitae quam imperdiet
        eleifend porta in nunc.
      </p>
    </div>
  );
};
