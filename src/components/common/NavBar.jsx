import styles from "./NavBar.module.scss";

import RecipesLink from "../ui/RecipesLink";

export default function NavBar() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <RecipesLink className={styles.ctaBtn}>Start Searching</RecipesLink>
        </li>
      </ul>
    </nav>
  );
}
