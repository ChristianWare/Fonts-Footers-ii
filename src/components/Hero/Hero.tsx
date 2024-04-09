"use client";

import Image from "next/image";
import LayoutWrapper from "../LayoutWrapper";
import styles from "./Hero.module.css";
import Img1 from "../../../public/images/house8.png";
import ArrowCluster from "../ArrowCluster/ArrowCluster";
import Button from "../Button/Button";
import { motion } from "framer-motion";
import { fadeIn } from "../../../animation/variants";

const Hero = () => {
  return (
    <LayoutWrapper>
      <section className={styles.container}>
        <div className={styles.left}>
          <motion.h1
            variants={fadeIn("down", 0.3)}
            initial='hidden'
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className={styles.heading}
          >
            Empower your property with a{" "}
            <span className={styles.span}>Direct Booking</span> Website
          </motion.h1>
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial='hidden'
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className={styles.arrowContainer}
          >
            <ArrowCluster />
          </motion.div>
          <motion.p
            variants={fadeIn("down", 0.6)}
            initial='hidden'
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
            className={styles.copy}
          >
            Stop depending on sites like Air BNB or VRBO for short-term rental
            listings. Enhance guest satisfaction, get repeat stays, and
            eliminate all commission fees by having guests book directly with
            you.
          </motion.p>
          <motion.div
            variants={fadeIn("down", 0.9)}
            initial='hidden'
            whileInView={"show"}
            viewport={{ once: false, amount: 0.9 }}
            className={styles.btnContainer}
          >
            <Button
              text='Schedule a call'
              href='/contact/#schedule'
              btnType='primaryii'
              arrow
            />
            <Button text='view our work' href='/' btnType='secondary' arrow />
          </motion.div>
        </div>
        <div className={styles.right}>
          <motion.div
            variants={fadeIn("down", 0.3)}
            initial='hidden'
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className={styles.imgContainer}
          >
            <Image
              src={Img1}
              alt='Direct Booking Website'
              fill
              priority
              className={styles.img}
            />
          </motion.div>
        </div>
      </section>
    </LayoutWrapper>
  );
};
export default Hero;
