import Breadcrumb from "./Breadcrumb";
import RecipeDetails from "./RecipeDetails";
import MoreRecipes from "./MoreRecipes";
import styles from "./RecipePage.module.scss";
import { motion } from "motion/react";

export default function RecipePage() {
  return (
    <motion.main
      className={styles.main}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Breadcrumb />
      <RecipeDetails />
      <hr />
      <MoreRecipes />
    </motion.main>
  );
}
