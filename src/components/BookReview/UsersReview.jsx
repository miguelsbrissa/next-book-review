import React from "react";
import styles from "@/styles/UsersReview.module.css";
import { UserReview } from "./UserReview";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStarHalf, faStar } from "@fortawesome/free-solid-svg-icons";

export const UsersReview = () => {
  return (
    <div className={styles.content}>
      <textarea rows="7" cols="50" className={styles.inputReview} placeholder="Digite sua review" />
      <input type="button" value="Enviar" className={styles.btnReview}/>
      <UserReview />
      <UserReview />
      <UserReview />
      <UserReview />
      <UserReview />
    </div>
  );
};
