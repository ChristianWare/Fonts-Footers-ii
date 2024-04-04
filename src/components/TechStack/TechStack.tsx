"use client";

import LayoutWrapper from "../LayoutWrapper";
import styles from "./TechStack.module.css";
import NextJS from "../../../public/icons/next.svg";
import NextAuth from "../../../public/icons/nextAuth.svg";
import Node from "../../../public/icons/node.svg";
import Stripe from "../../../public/icons/stripe.svg";
import Vercel from "../../../public/icons/vercel.svg";
import GoogleAnalytics from "../../../public/icons/googleAnalytics.svg";
import { motion } from "framer-motion";
import { fadeIn } from "../../../animation/variants";
import FalseButton from "../FalseButton/FalseButton";

const TechStack = () => {
  const data = [
    {
      icon: <NextJS width={50} height={50} />,
      name: "Next Js",
      description:
        "Aframework that allows developers to build server-side rendered and statically generated web applications.",
    },
    {
      icon: <Vercel width={100} height={100} />,
      name: "Vercel",
      description:
        "A cloud platform that enables developers to deploy, host, and scale websites and applications with ease.",
    },
    {
      icon: <NextAuth width={50} height={50} />,
      name: "Next Auth",
      description:
        "A cloud platform that enables developers to deploy, host, and scale websites and applications with ease.",
    },
    {
      icon: <Node width={50} height={50} />,
      name: "Node",
      description:
        "A cloud platform that enables developers to deploy, host, and scale websites and applications with ease.",
    },
    {
      icon: <GoogleAnalytics width={50} height={50} />,
      name: "Google Analytics",
      description:
        "A cloud platform that enables developers to deploy, host, and scale websites and applications with ease.",
    },
    {
      icon: <Stripe width={50} height={50} />,
      name: "Stripe",
      description:
        "A cloud platform that enables developers to deploy, host, and scale websites and applications with ease.",
    },
  ] as const;

  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.top}>
          <FalseButton text='Our Technical Stack' btnType='primary' />

          <h2 className={styles.heading}>
            Tools we use to build the perfect website
          </h2>
          <p className={styles.copy}>
            We use cutting-edge technology to craft websites that outperform
            those built on platforms like Wordpress, Wix, or Godaddy, which
            often rely on older, slower, and outdated technology. Our approach
            involves using pure HTML, CSS, and Javascript code, ensuring a sleek
            and efficient website tailored specifically for your vacation rental
            homes.
          </p>
        </div>
        <div className={styles.bottom}>
          {data.map((x, index) => (
            <motion.div
              variants={fadeIn(index % 2 === 0 ? "up" : "left", 0.3)}
              initial='hidden'
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              key={index}
              className={styles.box}
            >
              {x.icon}
              <h3>{x.name}</h3>
              <p className={styles.desc}>{x.description}</p>
            </motion.div>
          ))}
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default TechStack;
