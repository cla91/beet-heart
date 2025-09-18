import styles from "./RecipesList.module.scss";
import RecipeCard from "./RecipeCard";
import Spinner from "./../ui/Spinner";
import useRandomRecipes from "./../../hook/useRandomRecipes";
import useSearchRecipes from "./../../hook/useSearchRecipes";

export default function RecipesList({ query, isRandom, filterId }) {
  const { isPending, isError, recipes, isSuccess, error } = isRandom
    ? useRandomRecipes()
    : useSearchRecipes(query);

  if (isPending) {
    return (
      <p>
        <span className="sr-only">Loading...</span>
        <Spinner />
      </p>
    );
  }
  if (isError) {
    return <p className={styles.error}>{error.message}</p>;
  }
  if (!isSuccess) return null;

  if (recipes.length === 0) {
    return <p>No results for your search term, try again.</p>;
  }
  let filteredRecipes = filterId
    ? recipes.filter((recipe) => recipe.id !== filterId).slice(0, 3)
    : recipes;
  return (
    <ul className={styles.recipesList}>
      {filteredRecipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </ul>
  );
}
