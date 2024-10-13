"use client";

import LayoutWrapper from "../LayoutWrapper";
import styles from "./Hero.module.css";
import Button from "../Button/Button";
import { motion } from "framer-motion";
import FalseButton from "../FalseButton/FalseButton";
import animationData from "../../../public/lottie/hero.json";
import Lottie from "lottie-react";

const Hero = () => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className={styles.content}
        >
          <div className={styles.left}>
            <div className={styles.falseBtnContainer}>
              {/* <FalseButton btnType='primary' text='Digital Agency' /> */}
            </div>
            <h1 className={styles.heading}>
              We build interactive and immersive websites
            </h1>
            <p className={styles.copy}>
              Are you looking for a web designer to make your business shine
              online? Our digital agency is here to help. We create beautiful,
              responsive websites that meet your specific needs and goals.
            </p>
            <div className={styles.btnContainer}>
              <Button
                text='Schedule Discovery Call'
                href='/#schedule'
                btnType='secondary'
              />
              <Button
                text='Our Services'
                href='/#services'
                btnType='primaryiii'
              />
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.lottieBox}>
              <Lottie animationData={animationData} className={styles.lottie} />
            </div>
          </div>
        </motion.div>
      </LayoutWrapper>
    </section>
  );
};
export default Hero;
