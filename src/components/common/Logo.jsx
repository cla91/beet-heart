import { Link } from "react-router-dom";
import { LogoImg } from "../../assets/images/images";
import styles from "./Logo.module.scss";

export default function Logo() {
  return (
    <Link to="/" className={styles.logo} aria-label="Go Home">
      <img src={LogoImg} alt="Logo Beet Heart" className={styles.logo__img} />
      <span className={styles.colorRed}>Beet </span>
      <span className={styles.colorGreen}>Heart</span>
    </Link>
  );
}
