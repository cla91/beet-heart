import { Link } from "react-router-dom";
import { useLastQuery } from "../../context/LastQueryContext";

export default function RecipesLink(props) {
  const { lastQuery } = useLastQuery();

  return (
    <Link
      to={
        lastQuery
          ? `/recipes?query=${encodeURIComponent(lastQuery)}`
          : `/recipes`
      }
      className={props.className || ""}
    >
      {props.children}
    </Link>
  );
}
