"use client";

import LayoutWrapper from "../LayoutWrapper";
import styles from "./Values.module.css";
import Image from "next/image";
import SEO from "../../../public/icons/seo.svg";
import Design from "../../../public/icons/designii.svg";
import Cart from "../../../public/icons/cart.svg";
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
      src: Img1,
      icon: <Card className={styles.icon} />,
      detail: "Secure Payment Gateways",
    },
    {
      title: "Optimized E-commerce Platforms",
      icon: <Cart className={styles.icon} />,
      detail: "Custom Product Pages",
      src: Img2,
    },
  ];

  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.top}>
          <FalseButton text=' E-commerce Details' btnType='primary' />
          <h1 className={`${styles.heading}`}>
            Custom <span className={styles.em}> E-Commerce Solutions </span>
            For Your Business
          </h1>
          <p className={styles.topCopy}>
            Boost your online sales with secure, user-friendly, and scalable
            e-commerce websites.
          </p>
        </div>
        <div className={styles.bottom}>
          {data.map((x, index) => (
            <div key={index} className={styles.box}>
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
              <div className={styles.miscContainer}>
                <div className={styles.imgContainer}>
                  <Image
                    src={x.src}
                    alt=''
                    layout='fill'
                    objectFit='cover'
                    className={styles.img}
                  />
                  <div className={styles.info}>
                    {/* {x.icon} */}
                    <p className={styles.detail}>~ {x.detail} ~</p>
                  </div>
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
