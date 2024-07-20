"use client";

import LayoutWrapper from "../LayoutWrapper";
import styles from "./Hero.module.css";
import Button from "../Button/Button";
import { motion } from "framer-motion";
import ShuffleHero from "../ShuffleHero/ShuffleHero";

const Hero = () => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <motion.section
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className={styles.content}
        >
          <div className={styles.left}>
            <h1 className={styles.heading}>
              We build interactive and immersive websites
            </h1>

            <p className={styles.copy}>
              Are you looking for a web designer to make your business shine  
              online? Our digital marketing agency is here to help. We create
              beautiful, responsive websites that meet your specific needs and
              goals.
            </p>
            <div className={styles.btnContainer}>
              <Button
                text='Schedule a Call'
                href='/contact/#schedule'
                btnType='primaryii'
              />
            </div>
          </div>
          <div className={styles.right}>
            <ShuffleHero />
          </div>
        </motion.section>
      </LayoutWrapper>
    </section>
  );
};
export default Hero;
