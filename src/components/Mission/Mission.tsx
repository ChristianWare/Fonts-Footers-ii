"use client";

import LayoutWrapper from "../LayoutWrapper";
import styles from "./Mission.module.css";
import Design from "../../../public/icons/designii.svg";
import Reminders from "../../../public/icons/seo.svg";
import Clock from "../../../public/icons/clock.svg";
import Card from "../../../public/icons/payment.svg";
// import { motion } from "framer-motion";
// import { fadeIn } from "../../../animation/variants";
import FalseButton from "../FalseButton/FalseButton";
import Image from "next/image";
import Author from "../../../public/images/house13.png";

const Mission = () => {
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
          <FalseButton text='Booking Details' btnType='primary' />
          <h1 className={`${styles.heading} h2v2`}>
            Custom Booking Platforms For Seemless Reservations
          </h1>
          <p className={styles.leftCopy}>
            Empower your business with efficient and user-friendly booking
            systems.
          </p>
        </div>
        <div className={styles.bottom}>
          <div className={styles.left}>
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
                  src={Author}
                  alt=''
                  layout='fill'
                  objectFit='cover'
                  className={styles.img}
                />
              </div>
            </div>
            <div className={styles.z3}></div>
          </div>
          <div className={styles.right}>
            {data.map((x, index) => (
              <div
                // variants={fadeIn(index % 2 === 0 ? "up" : "left", 0.3)}
                // initial='hidden'
                // whileInView={"show"}
                // viewport={{ once: false, amount: 0.3 }}
                key={index}
                className={styles.card}
              >
                {x.icon}
                <h4 className={styles.title}>{x.title}</h4>
                <p className={styles.description}>{x.description}</p>
              </div>
            ))}
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default Mission;
