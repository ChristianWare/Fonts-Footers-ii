"use client";

import LayoutWrapper from "../LayoutWrapper";
import styles from "./Carousel.module.css";
import Image from "next/image";
import Img from "../../../public/images/house14.png";
import Img2 from "../../../public/images/house15.png";
import Img3 from "../../../public/images/house4.png";
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
      title: "Reduced Dependency",
      description:
        "By reducing reliance on third-party platforms like Airbnb or VRBO, you can lower booking fees, maintain autonomy over business decisions, and mitigate risks associated with policy changes on external platforms.",
    },
    {
      title: "Customization and Innovation",
      description:
        "You can innovate with features like interactive maps, virtual tours, loyalty programs, and targeted marketing campaigns, enhancing the overall guest experience and attracting a wider audience.",
    },
    {
      title: "Flexibility in Offerings",
      description:
        "You can easily showcase multiple properties, offer add-on services, and create customized packages to meet diverse guest preferences and market demands.",
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
        <h2 className={styles.title}>Competitive Advantage</h2>
        <motion.div
          className={styles.content}
          key={activeIndex}
          variants={textContainerVariants}
          initial='hidden'
          animate='visible'
        >
          <div className={styles.left}>
            <motion.h3 variants={textVariants} className={styles.heading}>
              {texts[activeIndex].title}
            </motion.h3>
            <motion.p variants={textVariants} className={styles.copy}>
              {texts[activeIndex].description}
            </motion.p>
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
