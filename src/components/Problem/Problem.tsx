"use client";

import styles from "./Problem.module.css";
import LayoutWrapper from "../LayoutWrapper";
import Design from "../../../public/icons/designii.svg";
import Reminders from "../../../public/icons/seo.svg";
import Clock from "../../../public/icons/clock.svg";
import Card from "../../../public/icons/payment.svg";
import { motion } from "framer-motion";
import { fadeIn } from "../../../animation/variants";
import Image from "next/image";
import ProblemImage from "../../../public/images/problem.png";

const Problem = () => {
  const data = [
    {
      icon: <Clock width={50} height={50} className={styles.icon} />,
      title: "Real-Time Availability",
      description:
        "Clients can view real-time availability and book appointments instantly.",
    },
    {
      icon: <Reminders width={50} height={50} className={styles.icon} />,
      title: "Automated Reminders",
      description:
        "Automated email and SMS reminders reduce no-shows and keep clients informed.",
    },
    {
      icon: <Design width={50} height={50} className={styles.icon} />,
      title: "Intuitive Interface",
      description:
        "A simple and intuitive interface makes it easy for clients to navigate and book services.",
    },
    {
      icon: <Card width={50} height={50} className={styles.icon} />,
      title: "Integrated Payment Systems",
      description:
        "Accept payments from any major credit card with our payment services.",
    },
  ];
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.top}>
          <h1 className={`${styles.heading} h2v2`}>
            Are you <span className={styles.em}>unhappy</span> with your current
            website, or do you not have one{" "}
            <span className={styles.em}> at all?</span>
          </h1>
          <p className={styles.leftCopy}>
            If so, then these problems probably sound familiar to you:
          </p>
        </div>
        <div className={styles.bottom}>
          <div className={styles.left}>
            <div className={styles.imgContainer}>
              <Image
                src={ProblemImage}
                alt=''
                layout='fill'
                objectFit='cover'
                className={styles.img}
              />
            </div>
          </div>
          <div className={styles.right}>
            {data.map((x: any, index) => (
              <motion.div
                variants={fadeIn(index % 2 === 0 ? "up" : "left", 0.3)}
                initial='hidden'
                whileInView={"show"}
                viewport={{ once: true, amount: 0.3 }}
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

export default Problem;
