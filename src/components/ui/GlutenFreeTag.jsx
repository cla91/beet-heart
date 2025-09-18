import styles from "./GlutenFreeTag.module.scss";

export default function GlutenFreeTag({ className }) {
  return <p className={`${styles.tag} ${className || ""}`}>Gluten Free</p>;
}
