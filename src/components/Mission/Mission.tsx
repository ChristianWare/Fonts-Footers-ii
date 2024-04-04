"use client";

import LayoutWrapper from "../LayoutWrapper";
import styles from "./Mission.module.css";
import House from "../../../public/icons/house.svg";
import { motion } from "framer-motion";
import { fadeIn } from "../../../animation/variants";
import FalseButton from "../FalseButton/FalseButton";

const Mission = () => {
  const data = [
    {
      icon: <House width={50} height={50} className={styles.icon} />,
      title: "Analysis",
      description:
        "World productive that buy-in driver's. Enable decisions dangerous rundown.",
    },
    {
      icon: <House width={50} height={50} className={styles.icon} />,
      title: "Research",
      description:
        "World productive that buy-in driver's. Enable decisions dangerous rundown.",
    },
    {
      icon: <House width={50} height={50} className={styles.icon} />,
      title: "Resource",
      description:
        "World productive that buy-in driver's. Enable decisions dangerous rundown.",
    },
    {
      icon: <House width={50} height={50} className={styles.icon} />,
      title: "Management",
      description:
        "World productive that buy-in driver's. Enable decisions dangerous rundown.",
    },
  ];
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.top}>
          <FalseButton text='OUR MISSION' btnType='primary' />

          <h2 className={styles.heading}>
            Your business will be transformed into a memorable brand when you
            work with us.
          </h2>
        </div>
        <div className={styles.bottom}>
          <div className={styles.left}>
            <span className={styles.span}>PROCESS OF WORK</span>
            <h3 className={styles.headingii}>
              Well make your brand memorable.
            </h3>
            <p className={styles.leftCopy}>
              World productive that buy-in drivers. Enable decisions dangerous
              rundown opportunity files.
            </p>
          </div>
          <div className={styles.right}>
            {data.map((x, index) => (
              <motion.div
                variants={fadeIn(index % 2 === 0 ? "up" : "left", 0.3)}
                initial='hidden'
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                key={index}
                className={styles.card}
              >
                {x.icon}
                <h4 className={styles.title}>{x.title}</h4>
                <p className={styles.description}>{x.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default Mission;
