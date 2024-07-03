"use client";

import Image from "next/image";
import LayoutWrapper from "../LayoutWrapper";
import styles from "./Hero.module.css";
import Img1 from "../../../public/images/house8.png";
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
              We build <span className={styles.span1}>interactive</span> and{" "}
              <span className={styles.span2}> immersive</span> websites
              <span className={styles.span3}>.</span>
            </h1>

            <p className={styles.copy}>
              Stop depending on sites like Air BNB or VRBO for short-term rental
              listings. Enhance guest satisfaction, get repeat stays, and
              eliminate all commission fees by having guests book directly with
              you.
            </p>
            <div className={styles.btnContainer}>
              <Button
                text='Schedule a call'
                href='/contact/#schedule'
                btnType='primaryii'
                arrow
              />
              {/* <Button
              text='Direct Booking Benefits'
              href='/benefits'
              btnType='secondary'
              arrow
            /> */}
            </div>
          </div>
          <div className={styles.right}>
            {/* <div className={styles.imgContainer}>
            <Image
              src={Img1}
              alt='Direct Booking Website'
              fill
              priority
              sizes='(max-width: 768px) 50vw, (max-width: 1200px) 100vw'
              className={styles.img}
            />
          </div> */}
            <ShuffleHero />
          </div>
        </motion.section>
      </LayoutWrapper>
    </section>
  );
};
export default Hero;
