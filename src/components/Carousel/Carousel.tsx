"use client";

import Button from "../Button/Button";
import LayoutWrapper from "../LayoutWrapper";
import styles from "./Carousel.module.css";
import Image from "next/image";
import Img from "../../../public/images/house14.png";
import Img2 from "../../../public/images/house15.png";
import Img3 from "../../../public/images/house20.png";
import Arrow from "../../../public/icons/arrow2.svg";
import { motion } from "framer-motion";
import { useState } from "react";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [transitionDirection, setTransitionDirection] = useState("next");

  // function to handle next button click
  const handleNext = () => {
    setTransitionDirection("next");
    setActiveIndex((prevIndex) =>
      prevIndex === 2 ? prevIndex : prevIndex + 1
    );
  };

  // function to handle previous button click
  const handlePrevious = () => {
    setTransitionDirection("previous");
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? prevIndex : prevIndex - 1
    );
  };

  const texts = [
    {
      title: "Immersive Gaming Experience",
      description:
        "slfgsfljgh slfgh klsjfghlks jfh lsakjhfg lajgfd;g'bh ;dkb. dgj lfsgib jlsd;fib",
    },
    {
      title: "Title 2",
      description:
        "slfgsfljgh slfgh klsjfghlks jfh lsakjhfg lajgfd;g'bh ;dkb. dgj lfsgib jlsd;fib",
    },
    {
      title: "Title 3",
      description:
        "slfgsfljgh slfgh klsjfghlks jfh lsakjhfg lajgfd;g'bh ;dkb. dgj lfsgib jlsd;fib",
    },
  ];

  const textVariants = {
    hidden: {
      opacity: 0,
      x: transitionDirection === "next" ? 100 : -100,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  const textContainerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1 },
    },
  };

  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <motion.div
          className={styles.content}
          key={activeIndex}
          variants={textContainerVariants}
          initial='hidden'
          animate='visible'
        >
          <div className={styles.left}>
            <motion.h2 variants={textVariants} className={styles.heading}>
              {texts[activeIndex].title}
            </motion.h2>
            <motion.p variants={textVariants} className={styles.copy}>
              {texts[activeIndex].description}
            </motion.p>
            <div className={styles.btnContainer}>
              <Button
                text='Schedule a call'
                href='/contact/#schedule'
                btnType='primaryii'
                arrow
              />
            </div>
          </div>
          <div className={styles.right}>
            <motion.div
              animate={{
                opacity: activeIndex === 0 ? 1 : activeIndex === 1 ? 0 : 0,
                x:
                  activeIndex === 0
                    ? "0px"
                    : activeIndex === 1
                    ? "96px"
                    : "96px",
                scale: activeIndex === 0 ? 1 : activeIndex === 1 ? 1.2 : 1.2,
              }}
              transition={{
                duration: 0.5,
                delay: 0,
                ease: "easeInOut",
              }}
              className={styles.imgContainer1}
            >
              <Image src={Img} alt='image' fill className={styles.img} />
            </motion.div>
            <motion.div
              animate={{
                opacity: activeIndex === 0 ? 0.66 : activeIndex === 1 ? 1 : 0,
                x:
                  activeIndex === 0
                    ? "-96px"
                    : activeIndex === 1
                    ? "0"
                    : "96px",
                scale: activeIndex === 0 ? 0.8 : activeIndex === 1 ? 1 : 1.2,
              }}
              transition={{
                duration: 0.5,
                delay: 0,
                ease: "easeInOut",
              }}
              className={styles.imgContainer2}
            >
              <Image src={Img2} alt='image' fill className={styles.img} />
            </motion.div>
            <motion.div
              animate={{
                opacity:
                  activeIndex === 0 ? 0.33 : activeIndex === 1 ? 0.66 : 1,
                x:
                  activeIndex === 0
                    ? "-192px"
                    : activeIndex === 1
                    ? "-96px"
                    : "0",
                scale: activeIndex === 0 ? 0.6 : activeIndex === 1 ? 0.8 : 1,
              }}
              transition={{
                duration: 0.5, // Animation duration in seconds
                delay: 0, // Delay before the animation starts in seconds
                ease: "easeInOut", // Easing function for the animation
              }}
              className={styles.imgContainer3}
            >
              <Image src={Img3} alt='image' fill className={styles.img} />
            </motion.div>
          </div>
        </motion.div>
        <div className={styles.controls}>
          <button
            className={
              activeIndex !== 0
                ? `${styles.prevContainer}`
                : `${styles.disabledPrev}`
            }
            onClick={handlePrevious}
          >
            <Arrow className={styles.icon} width={25} height={25} />
          </button>
          <button
            className={
              activeIndex !== 2
                ? `${styles.nextContainer}`
                : `${styles.disabled}`
            }
            onClick={handleNext}
          >
            <Arrow className={styles.icon} width={25} height={25} />
          </button>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default Carousel;
