"use client";

import Image from "next/image";
import LayoutWrapper from "../LayoutWrapper";
import styles from "./Hero.module.css";
import Img1 from "../../../public/images/house8.png";
import Button from "../Button/Button";
import { motion } from "framer-motion";
import { fadeIn } from "../../../animation/variants";

const Hero = () => {
  return (
    <LayoutWrapper>
      <section className={styles.container}>
        <div className={styles.left}>
          <h1 className={styles.heading}>
            Empower your property with a{" "}
            <span className={styles.span}>Direct Booking</span> Website
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
            <Button
              text='Direct Booking Benefits'
              href='/benefits'
              btnType='secondary'
              arrow
            />
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.imgContainer}>
            <Image
              src={Img1}
              alt='Direct Booking Website'
              fill
              priority
              className={styles.img}
            />
          </div>
        </div>
      </section>
    </LayoutWrapper>
  );
};
export default Hero;
