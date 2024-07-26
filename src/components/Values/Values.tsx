"use client";

import LayoutWrapper from "../LayoutWrapper";
import styles from "./Values.module.css";
import Image from "next/image";
import SEO from "../../../public/icons/seo.svg";
import Design from "../../../public/icons/designii.svg";
import Multiple from "../../../public/icons/multiple.svg";
import Card from "../../../public/icons/payment.svg";
import Img1 from "../../../public/images/house17.png";
import Img2 from "../../../public/images/aboutHouse.png";

// import { motion } from "framer-motion";
// import { fadeIn } from "../../../animation/variants";
import FalseButton from "../FalseButton/FalseButton";

const Values = () => {
  const data = [
    {
      title: "User-Friendly Interfaces",
      description: "Seamless and secure booking experiences.",
      features: [
        {
          icon: <Design width={50} height={50} className={styles.icon} />,
          detail: "Intuitive design for easy navigation",
        },
        {
          icon: <Card width={50} height={50} className={styles.icon} />,
          detail: "Secure payment gateways",
        },
      ],
      src: Img1,
    },
    {
      title: "Optimized E-commerce Platforms",
      description: "Boost your sales and online visibility.",
      features: [
        {
          icon: <Multiple width={50} height={50} className={styles.icon} />,
          detail: "Custom product pages with variants",
        },
        {
          icon: <SEO width={50} height={50} className={styles.icon} />,
          detail: "SEO-friendly design and content",
        },
      ],
      src: Img2,
    },
  ];

  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.top}>
          <FalseButton text=' E-commerce' btnType='primary' />
          <h1 className={styles.heading}>
            CUSTOM E-COMMERCE SOLUTIONS FOR YOUR BUSINESS
          </h1>
          <p className={styles.topCopy}>
            Boost your online sales with secure, user-friendly, and scalable
            e-commerce websites.
          </p>
        </div>
        <div className={styles.bottom}>
          {data.map((x, index) => (
            <div key={index} className={styles.box}>
              <div
                // variants={fadeIn(index % 2 === 0 ? "up" : "left", 0.3)}
                // initial='hidden'
                // whileInView={"show"}
                // viewport={{ once: false, amount: 0.3 }}
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
              </div>
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
