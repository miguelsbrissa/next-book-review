import React from "react";
import styles from "@/styles/BookCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStarHalf, faStar } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
export const BookCard = () => {
  return (
    <>
      <div className={styles.card}>
        <h1 className={styles.title}>Titulo</h1>
        <span className={styles.rating}>
          <FontAwesomeIcon icon={faStar} className={styles.icon} />
          <FontAwesomeIcon icon={faStar} className={styles.icon} />
          <FontAwesomeIcon icon={faStar} className={styles.icon} />
          <FontAwesomeIcon icon={faStar} className={styles.icon} />
          <FontAwesomeIcon icon={faStarHalf} className={styles.icon} />
        </span>
        <Image src={'/images/eurobo.jpg'} alt={'Livro'} width={200} height={300}/>
        <p className={styles.review}>Veja Review</p>
      </div>
    </>
  );
};
