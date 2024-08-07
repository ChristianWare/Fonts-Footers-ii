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
        "We have a comprehensive understanding of the unique challenges and opportunities in web development. Our team stays updated on industry trends, best practices, and innovative solutions to deliver results that exceed your expectations.",
    },
    {
      question: "Proven Track Record",
      answer:
        "We have successfully worked with numerous business owners, helping them launch and optimize all sorts of websites. Our track record of delivering quality solutions and achieving measurable results speaks for itself.",
    },
    {
      question: "Tailored Solutions",
      answer:
        "We understand that every business is unique, and we tailor our services to fit your specific needs and goals. Whether you need a simple landing page or a multipage ecommerce site, we've got you covered.",
    },
  ];

  return (
    <section className={styles.parentContainer}>
      <LayoutWrapper>
        <div className={styles.container}>
          <div className={styles.left}>
            <FalseButton text='Our Story' btnType='primary' />
            <h1 className={styles.heading}>
              About <br /> <span className={styles.em}>Fonts & Footers</span>
            </h1>
            <p className={styles.copy}>
              Welcome to Fonts & Footers! We are a dedicated team of web
              development experts specializing in custom-coded booking websites,
              e-commerce platforms, and business websites. Here&lsquo;s why our
              experience sets us apart:
            </p>
            <div className={styles.mapContainer}>
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
                        <Arrow2
                          className={styles.icon}
                          width={25}
                          height={25}
                        />
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
          </div>
          <div
            // variants={fadeIn("left", 0.3)}
            // initial='hidden'
            // whileInView={"show"}
            // viewport={{ once: false, amount: 0.3 }}
            className={styles.right}
          >
            <div className={styles.miscContainer}>
              <svg
                width='0'
                height='0'
                xmlns='http://www.w3.org/2000/svg'
                version='1.1'
              >
                <defs>
                  <filter id='goo'>
                    <feGaussianBlur
                      in='SourceGraphic'
                      stdDeviation='5'
                      result='blur'
                    />
                    <feColorMatrix
                      in='blur'
                      mode='matrix'
                      values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9'
                      result='goo'
                    />
                    <feComposite in='SourceGraphic' in2='goo' operator='atop' />
                  </filter>
                </defs>
              </svg>
              <div className={styles.imgContainer}>
                <Image
                  src={Img}
                  alt=''
                  layout='fill'
                  objectFit='cover'
                  className={styles.img}
                />
              </div>
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default Experience;
