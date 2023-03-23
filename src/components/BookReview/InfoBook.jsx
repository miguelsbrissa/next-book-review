import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStarHalf, faStar } from "@fortawesome/free-solid-svg-icons";
import styles from "@/styles/InfoBook.module.css";
import Image from "next/image";
import React from "react";

export const InfoBook = () => {
  return (
    <>
      <div className={styles.content}>
        <div className={styles.left}>
          <h1>Titulo</h1>
          <Image
            src={"/images/eurobo.jpg"}
            alt={"Livro"}
            width={300}
            height={500}
          />
        </div>
        <div className={styles.right}>
          <h1>Rating</h1>
          <span className={styles.rating}>
            <FontAwesomeIcon icon={faStar} className={styles.icon} />
            <FontAwesomeIcon icon={faStar} className={styles.icon} />
            <FontAwesomeIcon icon={faStar} className={styles.icon} />
            <FontAwesomeIcon icon={faStar} className={styles.icon} />
            <FontAwesomeIcon icon={faStarHalf} className={styles.icon} />
          </span>
          <h1>Sinopse</h1>
          <p className={styles.synopisis}>
            Um dos maiores clássicos da literatura de ficção científica, Eu,
            Robô, escrito pelo Bom Doutor, Isaac Asimov foi publicado
            originalmente em 1950. Eu, Robô é um conjunto de nove contos que
            relatam a evolução dos autômatos através do tempo. É neste livro que
            são apresentadas as célebres Três Leis da Robótica: os princípios
            que regem o comportamento dos robôs e que mudaram definitivamente a
            percepção que se tem sobre eles na própria ciência. Eu, Robô
            inicia-se com uma entrevista com a Dra. Susan Calvin, uma psicóloga
            roboticista da U.S Robots & Mechanical. Ela é o fio condutor da
            obra, responsável por contar os relatos de seu trabalho e também da
            evolução dos autômatos. Algumas histórias são mais leves e
            emocionantes como Robbie, o robô baba, outras, como Razão, levam o
            leitor a refletir sobre religião e até sobre sua condição humana.
          </p>
        </div>
      </div>
    </>
  );
};
