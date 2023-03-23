import React from "react";
import styles from "@/styles/UsersReview.module.css";
import { UserReview } from "./UserReview";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStarHalf, faStar } from "@fortawesome/free-solid-svg-icons";

export const UsersReview = () => {
  return (
    <div className={styles.content}>
      <FontAwesomeIcon icon={faStar} className={styles.icon} />
      <input className={styles.inputreview} placeholder="Digite sua review" />
      <UserReview />
      <UserReview />
      <UserReview />
      <UserReview />
      <UserReview />
    </div>
  );
};
