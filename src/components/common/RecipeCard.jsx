import { Link } from "react-router-dom";
import styles from "./RecipeCard.module.scss";
import GlutenFreeTag from "../ui/GlutenFreeTag";
import Servings from "../ui/Servings";
import ReadyInMinutes from "../ui/ReadyInMinutes";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

export default function RecipeCard({ recipe }) {
  const { id, title, glutenFree, readyInMinutes, servings, imageType } = recipe;
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <motion.li
      id={id}
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
    >
      <article className={styles.recipeCard}>
        <img
          className={styles.recipeCard__image}
          src={`https://img.spoonacular.com/recipes/${id}-480x360.${imageType}`}
          alt={`${title} photo`}
        />
        <h3 className={styles.recipeCard__title}>{title}</h3>
        {glutenFree && <GlutenFreeTag className={styles.recipeCard__tag} />}
        <p className={styles.recipeCard__details}>
          <ReadyInMinutes readyInMinutes={readyInMinutes} />
          <Servings servings={servings} />
        </p>

        <Link to={`/recipe/${id}`} className={styles.recipeCard__link}>
          View recipe
        </Link>
      </article>
    </motion.li>
  );
}
