"use client";

import LayoutWrapper from "../LayoutWrapper";
import styles from "./HigherMargins.module.css";
import Money from "../../../public/icons/money.svg";
import Control from "../../../public/icons/control.svg";
import Promotion from "../../../public/icons/promotion.svg";
import Repeat from "../../../public/icons/repeat.svg";
import Image from "next/image";
import Img from "../../../public/images/house18.png";
import Img2 from "../../../public/images/house4.png";
import { motion } from "framer-motion";
import { fadeIn } from "../../../animation/variants";

const HigherMargins = () => {
  const data = [
    {
      icon: <Money width={32} height={32} className={styles.icon} />,
      title: "Elimination of Third-Party Fees",
      description:
        "Bypass commission fees charged by third-party booking platforms and keep a larger portion of the rental income.",
    },
    {
      src: Img,
      icon: <Control width={30} height={30} className={styles.icon} />,
      title: "Control Over Pricing",
      description:
        "Set your own pricing without being constrained by platform fees or price restrictions imposed by third-party sites. Adjust prices based on demand, seasonality, and market conditions, maximizing revenue potential.",
    },
    {
      icon: <Promotion width={27} height={27} className={styles.icon} />,
      title: "Promotional Offers",
      description:
        "Create and promote special offers, discounts, and packages directly on your website to attract guests and increase bookings. Without third-party platform restrictions, you can implement targeted promotions that align with your marketing strategies and revenue goals.",
    },
    {
      icon: <Repeat width={30} height={30} className={styles.icon} />,
      title: "Repeat Bookings",
      description:
        "Direct communication with guests fosters stronger relationships and encourages repeat bookings. By offering excellent service, personalized experiences, and loyalty incentives, you can increase guest retention and generate recurring revenue without incurring additional booking fees.",
    },
    {
      src: Img2,
    },
  ];
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <h2 className={styles.heading}>Higher Margins</h2>
        <div className={styles.bottom}>
          {data.map((x, index) => (
            <>
              {x.src && (
                <motion.div
                  variants={fadeIn(index % 2 === 0 ? "up" : "left", 0.3)}
                  initial='hidden'
                  whileInView={"show"}
                  className={styles.imgContainer}
                >
                  <Image src={x.src} alt='image' fill className={styles.img} />
                </motion.div>
              )}
              {x.icon && x.title && x.description && (
                <motion.div
                  variants={fadeIn(index % 2 === 0 ? "up" : "left", 0.3)}
                  initial='hidden'
                  whileInView={"show"}
                  key={index}
                  className={styles.card}
                >
                  <div className={styles.iconContainer}>{x.icon}</div>
                  <h3 className={styles.title}>{x.title}</h3>
                  <p className={styles.desc}>{x.description}</p>
                </motion.div>
              )}
            </>
          ))}
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default HigherMargins;
