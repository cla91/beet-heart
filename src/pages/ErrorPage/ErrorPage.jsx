import Layout from "../../components/common/Layout";
import styles from "./ErrorPage.module.scss";
import { Link, useRouteError } from "react-router-dom";
import { useEffect } from "react";

export default function ErrorPage() {
  const error = useRouteError();
  useEffect(() => {
    document.title = `Error | BeetHeart`;
    return () => (document.title = "BeetHeart");
  });
  return (
    <Layout>
      <main>
        <div className={styles.errorMain}>
          <h1>Error {error.status}</h1>
          <p>{error.data}</p>
          <p>Check the URL or go back home.</p>
          <Link to="/" className={styles.ctaBtn}>
            Go home
          </Link>
        </div>
      </main>
    </Layout>
  );
}
