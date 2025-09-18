import styles from "./Hero.module.scss";
import { HeroImgLarge, HeroImgSmall } from "../../assets/images/images";
import SearchForm from "../../components/common/SearchForm";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <motion.section
      className={styles.hero}
      initial={{ transform: "translateY(100%)" }}
      animate={{ transform: "translateY(0%)" }}
    >
      <div className={styles.hero__contentContainer}>
        <div className={styles.hero__content}>
          <h1 className={styles.hero__title}>
            Discover delicious <span className="underline">vegetarian</span>{" "}
            recipes
          </h1>
          <p>
            Welcome to a world of deliciousness. Explore our recipes and
            discover just how easy it is to fall in love with vegetarian food.
          </p>
        </div>
        <div className={styles.hero__searchBar}>
          <SearchForm />
        </div>
      </div>
      <picture>
        <source media="(min-width: 48rem)" srcSet={HeroImgLarge} />
        <img
          src={HeroImgSmall}
          alt="Salad with beets, nuts and marinated tofu"
          className={styles.hero__img}
        />
      </picture>
    </motion.section>
  );
}
