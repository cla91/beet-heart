import { SpinnerImg } from "../../assets/images/images";
import styles from "./Spinner.module.scss";

export default function Spinner() {
  return <img src={SpinnerImg} alt="" className={styles.spinner} />;
}
