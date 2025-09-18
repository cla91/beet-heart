import CallToAction from "./CallToAction";
import FeaturedRecipes from "./FeaturedRecipes";
import Hero from "./Hero";
import { motion } from "motion/react";
export default function Home() {
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Hero />
      <FeaturedRecipes />
      <CallToAction />
    </motion.main>
  );
}
