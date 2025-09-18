import styles from "./SearchForm.module.scss";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useLastQuery } from "../../context/LastQueryContext";

export default function SearchForm() {
  const navigate = useNavigate();
  const { lastQuery, setLastQuery } = useLastQuery();
  const [input, setInput] = useState(lastQuery || "");
  const [isInvalid, setIsInvalid] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const query = input.trim();

    if (!query) {
      setIsInvalid(true);
      return;
    }
    setIsInvalid(false);
    setLastQuery(query);
    navigate(`/recipes?query=${encodeURIComponent(query)}`);
  }
  useEffect(() => {
    setInput(lastQuery || "");
  }, [lastQuery]);
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label className={styles.form__query}>
        <FaSearch />
        <input
          type="text"
          placeholder="Search by name or ingredient..."
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            if (isInvalid) setIsInvalid(false);
          }}
          aria-invalid={isInvalid}
          aria-required="true"
          name="query"
          id="query"
        />
        {isInvalid && (
          <span aria-live="assertive" className={styles.form__errMessage}>
            Missing search term
          </span>
        )}
      </label>
      <button type="submit" className={styles.form__submitBtn}>
        Search
      </button>
    </form>
  );
}
