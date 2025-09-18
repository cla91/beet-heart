import styles from "./Header.module.scss";

import NavBar from "./NavBar";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
        <Logo />
        <NavBar />
      </div>
    </header>
  );
}
