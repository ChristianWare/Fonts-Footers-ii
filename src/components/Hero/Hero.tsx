"use client";

import LayoutWrapper from "../LayoutWrapper";
import styles from "./Hero.module.css";
import Button from "../Button/Button";
import { motion } from "framer-motion";
import FalseButton from "../FalseButton/FalseButton";
import animationData from "../../../public/lottie/hero.json";
import Lottie from "lottie-react";
import Image from "next/image";
import HeroImage from "../../../public/images/newHero.png";

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
              <FalseButton
                btnType='primary'
                text='Looking for an e-commerce website that drives results?'
              />
            </div>
            <h1 className={styles.heading}>
              We build interactive and immersive online stores
            </h1>
            <p className={styles.copy}>
              We create online stores that engage your customers from the first
              click to checkout. Our immersive designs and interactive features
              drive higher conversions and keep your business growing.
            </p>
            <div className={styles.btnContainer}>
              <Button
                text='Schedule Discovery Call'
                href='/#schedule'
                btnType='primaryiii'
              />
              <Button
                text='Our Services'
                href='/#services'
                btnType='primaryiii'
              />
            </div>
          </div>
          <div className={styles.right}>
            {/* <div className={styles.lottieBox}>
              <Lottie animationData={animationData} className={styles.lottie} />
            </div> */}
            <div className={styles.imgContainer}>
              <Image src={HeroImage} fill alt='img' className={styles.img} />
            </div>
          </div>
        </motion.div>
      </LayoutWrapper>
    </section>
  );
};
export default Hero;
