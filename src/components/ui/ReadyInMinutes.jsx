import { FaClock } from "react-icons/fa";
import styles from "./ReadyInMinutes.module.scss";
export default function ReadyInMinutes({ readyInMinutes }) {
  return (
    <span className={styles.span}>
      <FaClock />
      Ready in: {readyInMinutes} mins
    </span>
  );
}
