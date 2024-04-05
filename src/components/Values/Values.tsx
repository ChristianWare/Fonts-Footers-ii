"use client";

import LayoutWrapper from "../LayoutWrapper";
import styles from "./Values.module.css";
import Image from "next/image";
import House from "../../../public/icons/house.svg";
import Img1 from "../../../public/images/house17.png";
import Img2 from "../../../public/images/aboutHouse.png";
import { motion } from "framer-motion";
import { fadeIn } from "../../../animation/variants";
import FalseButton from "../FalseButton/FalseButton";

const Values = () => {
  const data = [
    {
      title: "Client Focus",
      description: "Client success is our unwavering commitment.",
      features: [
        {
          icon: <House width={50} height={50} className={styles.icon} />,
          detail: "We prioritize deep understanding",
        },
        {
          icon: <House width={50} height={50} className={styles.icon} />,
          detail: "We deliver solutions that exceed expectations",
        },
      ],
      src: Img1,
    },
    {
      title: "Integrity",
      description:
        "Integrity is our business's bedrock, guiding us with unwavering ethical standards.",
      features: [
        {
          icon: <House width={50} height={50} className={styles.icon} />,
          detail:
            "Transparency, honesty, and accountability shape our interactions",
        },
        {
          icon: <House width={50} height={50} className={styles.icon} />,
          detail:
            "We foster a positive work culture, and establish enduring credibility",
        },
      ],
      src: Img2,
    },
  ];
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.top}>
          <FalseButton text='CORE PRINCIPLES AND BELIEFS' btnType='primary' />
          <h2 className={styles.heading}>Our Values</h2>
          <p className={styles.topCopy}>
            Our values act as a set of guiding principles and fundamental
            beliefs that influence the behaviors we demonstrate, which shape the
            decisions we collectively make as a team.
          </p>
        </div>
        <div className={styles.bottom}>
          {data.map((x, index) => (
            <div key={index} className={styles.box}>
              <motion.div
                variants={fadeIn(index % 2 === 0 ? "up" : "left", 0.3)}
                initial='hidden'
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                className={styles.left}
              >
                <h3>{x.title}</h3>
                <p>{x.description}</p>
                {x.features.map((y, index) => (
                  <div key={index} className={styles.featuresBox}>
                    {y.icon}
                    <p className={styles.detail}>{y.detail}</p>
                  </div>
                ))}
              </motion.div>
              <div className={styles.right}>
                <div className={styles.imgContainer}>
                  <Image src={x.src} alt='image' fill className={styles.img} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default Values;
