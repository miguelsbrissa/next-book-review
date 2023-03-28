import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "@/styles/Navbar.module.css";
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";

export const Navbar = () => {
  return (
    <>
      <div className={styles.nav}>
        <Link href={"/"} className={styles.logo}>
          BookReview
        </Link>
        <input className={styles.searchBar} placeholder="Pesquise um livro" />
        <Link href={"/"}>
          <FontAwesomeIcon icon={faUserCircle} className={styles.user} />
        </Link >
      </div>
    </>
  );
};
