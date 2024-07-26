"use client";

import { useState } from "react";
import LayoutWrapper from "../LayoutWrapper";
import styles from "./Experience.module.css";
import Image from "next/image";
import Img from "../../../public/images/house11.png";
import Arrow2 from "../../../public/icons/arrow2.svg";
// import { motion } from "framer-motion";
// import { fadeIn } from "../../../animation/variants";
import FalseButton from "../FalseButton/FalseButton";

const Experience = () => {
  const [selected, setSelected] = useState<null | number>(null);

  const toggle = (i: any) => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  };

  const faqs = [
    {
      question: "Industry Knowledge",
      answer:
        "With a background in hospitality and technology, we have a comprehensive understanding of the unique challenges and opportunities in the vacation rental market. Our team stays updated on industry trends, best practices, and innovative solutions to deliver results that exceed your expectations.",
    },
    {
      question: "Proven Track Record",
      answer:
        "We have successfully worked with numerous vacation rental property owners, helping them launch and optimize their direct booking websites. Our track record of delivering quality solutions and achieving measurable results speaks for itself.",
    },
    {
      question: "Tailored Solutions",
      answer:
        "We understand that every property is unique, and we tailor our services to fit your specific needs and goals. Whether you have a single property or a portfolio of rentals, we design custom direct booking websites that showcase your properties and drive bookings.",
    },
    {
      question: "Technology Expertise",
      answer:
        "Our team consists of experienced developers, designers, and digital marketers who specialize in building user-friendly, responsive websites with advanced booking engines, secure payment gateways, and seamless integrations. We leverage cutting-edge technology to enhance the guest experience and streamline your operations.",
    },
  ];

  return (
    <section className={styles.parentContainer}>
      <LayoutWrapper>
        <div className={styles.container}>
          <div className={styles.left}>
            <FalseButton text='OUR STORY' btnType='primary' />
            <h1 className={styles.heading}>About Fonts & Footers</h1>
            <p className={styles.copy}>
              At Fonts & Footers, we bring years of expertise and a deep
              understanding of the vacation rental industry to help property
              owners like you succeed. Here&lsquo;s why our experience sets us
              apart:
            </p>
            {faqs.map((x, index) => (
              <div
                key={index}
                className={styles.qaContainer}
                onClick={() => toggle(index)}
              >
                <div className={styles.headingArrowContainer}>
                  <div
                    // variants={fadeIn("right", 0.3)}
                    // initial='hidden'
                    // whileInView={"show"}
                    // viewport={{ once: false, amount: 0.3 }}
                    className={styles.h3Container}
                  >
                    <h3 className={styles.question} lang='en'>
                      {x.question}
                    </h3>
                  </div>
                  {selected === index ? (
                    <div className={styles.iconBox}>
                      <Arrow2
                        className={styles.iconFlip}
                        width={25}
                        height={25}
                      />
                    </div>
                  ) : (
                    <div className={styles.iconBox}>
                      <Arrow2 className={styles.icon} width={25} height={25} />
                    </div>
                  )}
                </div>
                <div
                  className={
                    selected === index
                      ? styles.answerContainer + " " + styles.show
                      : styles.answerContainer
                  }
                >
                  <p className={styles.answer} lang='en'>
                    {x.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div
            // variants={fadeIn("left", 0.3)}
            // initial='hidden'
            // whileInView={"show"}
            // viewport={{ once: false, amount: 0.3 }}
            className={styles.right}
          >
            <div className={styles.imgContainer}>
              <Image src={Img} alt='image' fill className={styles.img} />
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default Experience;
