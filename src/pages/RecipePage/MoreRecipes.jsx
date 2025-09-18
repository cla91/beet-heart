import RecipesList from "./../../components/common/RecipesList";
import { useLastQuery } from "../../context/LastQueryContext";
import RecipesLink from "../../components/ui/RecipesLink";
import { useParams } from "react-router-dom";
import styles from "./MoreRecipes.module.scss";

export default function MoreRecipes() {
  const { lastQuery } = useLastQuery();
  const { id } = useParams();
  return (
    <section className={styles.moreRecipes}>
      <h2>More recipes</h2>
      {lastQuery ? (
        <RecipesList query={lastQuery} filterId={id} />
      ) : (
        <>
          <p>No search results yet. </p>
          <RecipesLink className={styles.ctaBtn}>Start searching</RecipesLink>
        </>
      )}
    </section>
  );
}
