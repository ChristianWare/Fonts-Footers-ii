"use client";

import LayoutWrapper from "../LayoutWrapper";
import styles from "./Hero.module.css";
import Button from "../Button/Button";
import { motion } from "framer-motion";
import ShuffleHero from "../ShuffleHero/ShuffleHero";
import FalseButton from "../FalseButton/FalseButton";
import Image from "next/image";
import img from "../../../public/images/house10.png";

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
              <FalseButton btnType='primary' text='Digital Agency' />
            </div>
            <h1 className={styles.heading}>
              We build <em className={styles.em}>interactive</em> and{" "}
              <em className={styles.em}> immersive </em>
              websites
            </h1>
            <p className={styles.copy}>
              Are you looking for a web designer to make your business shine
              online? Our digital agency is here to help. We create beautiful,
              responsive websites that meet your specific needs and goals.
            </p>
            <div className={styles.btnContainer}>
              <Button
                text='Schedule a Call'
                href='/contact/#schedule'
                btnType='primaryii'
              />
              <Button
                text='Our Services'
                href='/services'
                btnType='secondary'
              />
            </div>
          </div>
          <div className={styles.right}>
            <ShuffleHero />
          </div>
        </motion.div>
      </LayoutWrapper>
    </section>
  );
};
export default Hero;
