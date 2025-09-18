import { FaArrowLeft } from "react-icons/fa";
import styles from "./Breadcrumb.module.scss";
import RecipesLink from "../../components/ui/RecipesLink";

export default function Breadcrumb() {
  return (
    <nav aria-label="breadcrumb" className={styles.nav}>
      <ol>
        <li>
          <RecipesLink>
            <FaArrowLeft />
            Go Back to Recipes
          </RecipesLink>
        </li>
      </ol>
    </nav>
  );
}
