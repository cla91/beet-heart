import { FaUser } from "react-icons/fa6";
import styles from "./Servings.module.scss";

export default function Servings({ servings }) {
  return (
    <span className={styles.span}>
      <FaUser />
      Servings: {servings}
    </span>
  );
}
