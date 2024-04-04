"use client";

import LayoutWrapper from "../LayoutWrapper";
import styles from "./GlossarySlugIntro.module.css";
import { FC } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../../animation/variants";

interface Props {
  heading: string;
  description: string;
  date: string;
  category: string;
}

const GlossarySlugIntro: FC<Props> = ({ heading, description }) => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial='hidden'
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className={styles.left}
          >
            <h1 className={styles.heading}>{heading}</h1>
            <p className={styles.copy}>{description}</p>
          </motion.div>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default GlossarySlugIntro;
