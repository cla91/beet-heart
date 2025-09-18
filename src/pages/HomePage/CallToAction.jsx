import styles from "./CallToAction.module.scss";

import RecipesLink from "../../components/ui/RecipesLink";

export default function CallToAction() {
  return (
    <section className={styles.callToAction}>
      <div className={styles.callToAction__container}>
        <div className={styles.callToAction__details}>
          <h2>Ready to cook?</h2>
          <p>Hit the button, start searching and get the meal on the table.</p>
        </div>
        <RecipesLink className={styles.ctaBtn}>Start Searching</RecipesLink>
      </div>
    </section>
  );
}
