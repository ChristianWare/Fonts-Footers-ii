"use client";

import Image from "next/image";
import LayoutWrapper from "../LayoutWrapper";
import styles from "./BookingService.module.css";
import Img from "../../../public/images/hero2.png";

const BookingService = () => {
  const data = [
    {
      title: "Scalable Solutions",
      description:
        "Our booking systems are designed to grow with your business, accommodating increased traffic and new features.",
    },
    {
      title: "Secure Transactions",
      description:
        "We implement robust security measures to protect user data and ensure secure transactions.",
    },
    {
      title: "",
      description: "",
    },
    {
      title: "",
      description: "",
    },
    {
      title: "",
      description: "",
    },
    {
      title: "Performance Optimization",
      description:
        "Our platforms are optimized for speed and performance, providing a seamless user experience.",
    },
  ] as const;

  return (
    <section className={styles.container}>
      <div className={styles.imgOverlay}></div>
      <Image
        src={Img}
        alt='image'
        fill
        className={styles.img}
        priority
        sizes='s100vw'
        quality={100}
      />
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.top}>
            <h2 className={styles.heading}>
              Tailored Booking System Development
            </h2>
            <p className={styles.copy}>
              We develop custom booking systems that cater to the unique needs
              of your business, ensuring a smooth and hassle-free reservation
              process for your clients
            </p>
          </div>
          <div className={styles.bottom}>
            {data.map((x, index) => (
              <div key={index} className={styles.card}>
                <h3 className={styles.title}>{x.title}</h3>
                <p className={styles.desc}>{x.description}</p>
              </div>
            ))}
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default BookingService;
