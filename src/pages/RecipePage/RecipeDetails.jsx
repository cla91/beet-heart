import { useParams } from "react-router-dom";
import useRecipeId from "./../../hook/useRecipeId";
import Spinner from "./../../components/ui/Spinner";
import ReadyInMinutes from "./../../components/ui/ReadyInMinutes";
import Servings from "./../../components/ui/Servings";
import GlutenFreeTag from "./../../components/ui/GlutenFreeTag";
import Ingredients from "./Ingredients";
import Instructions from "./Instructions";
import styles from "./RecipeDetails.module.scss";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useEffect } from "react";

export default function RecipeDetails() {
  const { id } = useParams();
  const { recipe, isError, isPending, isSuccess, error } = useRecipeId(id);
  useEffect(() => {
    if (recipe) document.title = `${recipe.title} | BeetHeart`;
    return () => (document.title = "BeetHeart");
  }, [recipe]);
  if (isError) {
    return (
      <div className={styles.error}>
        <h1>Error</h1>
        <p>{error.message}</p>
      </div>
    );
  }
  if (isPending) {
    return (
      <p>
        <span className="sr-only">Loading...</span>
        <Spinner />
      </p>
    );
  }
  if (isSuccess) {
    const {
      title,
      image,
      readyInMinutes,
      servings,
      glutenFree,
      extendedIngredients,
      analyzedInstructions,
      sourceUrl,
      sourceName,
    } = recipe;

    return (
      <article className={styles.recipe}>
        <img
          src={image}
          alt={`${title} photo`}
          className={styles.recipe__image}
        />
        <div className={styles.recipe__content}>
          <h1 className={styles.recipe__title}>{title}</h1>
          <p className={styles.recipe__source}>
            Original source:{" "}
            <a href={sourceUrl} target="_blank" rel="noopener noreferrer">
              {sourceName} <FaExternalLinkAlt />
            </a>
          </p>
          <p className={styles.recipe__info}>
            <ReadyInMinutes readyInMinutes={readyInMinutes} />
            <Servings servings={servings} />
          </p>
          {glutenFree && <GlutenFreeTag />}
          <Ingredients ingredients={extendedIngredients} />
          <Instructions instructions={analyzedInstructions} />
        </div>
      </article>
    );
  }
}
