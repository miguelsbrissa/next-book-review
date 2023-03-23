import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "@/styles/Navbar.module.css";
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";

export const Navbar = () => {
  return (
    <>
      <div className={styles.nav}>
        <div className={styles.logo}>BookReview</div>
        <input className={styles.searchBar} placeholder="Pesquise um livro" />
        <span>
          <FontAwesomeIcon icon={faUserCircle} className={styles.icon} />
        </span>
      </div>
    </>
  );
};
