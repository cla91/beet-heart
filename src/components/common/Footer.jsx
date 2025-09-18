import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Made by Claudia Cantiani</p>
      <p>
        Credits:{" "}
        <a href="https://www.svgbackgrounds.com/elements/svg-plants-and-leaves/">
          SVG Plants and Leaves by SVGBackgrounds.com
        </a>
      </p>
    </footer>
  );
}
