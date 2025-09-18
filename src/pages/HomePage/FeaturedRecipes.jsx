import styles from "./FeaturedRecipes.module.scss";
import RecipesList from "./../../components/common/RecipesList";
import { motion } from "motion/react";
export default function FeaturedRecipes() {
  return (
    <motion.section
      className={styles.featuredRecipes}
      initial={{ transform: "translateY(100%)" }}
      animate={{ transform: "translateY(0%)" }}
    >
      <div className={styles.featuredRecipes__content}>
        <h2 className={styles.featuredRecipes__title}>Featured recipes</h2>
        <RecipesList isRandom={true} />
      </div>
    </motion.section>
  );
}
