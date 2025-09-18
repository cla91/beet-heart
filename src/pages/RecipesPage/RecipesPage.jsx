import { useSearchParams } from "react-router-dom";
import { useLastQuery } from "../../context/LastQueryContext";
import { useEffect } from "react";
import styles from "./RecipesPage.module.scss";
import SearchForm from "../../components/common/SearchForm";
import RecipesList from "./../../components/common/RecipesList";
import { motion } from "motion/react";
export default function Recipes() {
  const { lastQuery, setLastQuery } = useLastQuery();
  const [params] = useSearchParams();
  const currentQuery = params.get("query") || lastQuery;

  useEffect(() => {
    if (currentQuery) setLastQuery(currentQuery);
  }, [currentQuery, setLastQuery]);
  useEffect(() => {
    if (currentQuery)
      document.title = `Search for "${currentQuery}" | BeetHeart`;
    return () => (document.title = "BeetHeart");
  });
  return (
    <motion.main>
      <header className={styles.header}>
        <h1>Recipes</h1>
        <SearchForm />
      </header>
      <section className={styles.recipes__container}>
        <h2>
          {currentQuery
            ? `Search results for "${currentQuery}"`
            : "Start a search to discover vegetarian recipes"}
        </h2>
        {currentQuery ? (
          <RecipesList query={currentQuery} />
        ) : (
          <p>Enter an ingredient or dish above to see recipes.</p>
        )}
      </section>
    </motion.main>
  );
}
