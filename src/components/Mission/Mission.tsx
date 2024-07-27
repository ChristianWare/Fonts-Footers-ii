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
          <FalseButton text='Booking Details' btnType='secondary' />
          <h1 className={styles.heading}>
            Custom Booking Platforms For Seemless Reservations
          </h1>
        </div>
        <div className={styles.bottom}>
          <div className={styles.left}>
            <div className={styles.imgOverlay}></div>
            <Image
              src={Author}
              alt='image'
              fill
              className={styles.img}
              priority
              sizes='(max-width: 768px) 50vw, (max-width: 1200px) 100vw'
              quality={100}
            />
            <div className={styles.z3}>
              <p className={styles.leftCopy}>
                Empower your business with efficient and user-friendly booking
                systems.
              </p>
            </div>
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
