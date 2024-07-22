"use client";

import LayoutWrapper from "../LayoutWrapper";
import styles from "./Mission.module.css";
import Trust from "../../../public/icons/trust.svg";
import User from "../../../public/icons/user.svg";
import Grow from "../../../public/icons/grow.svg";
import Unique from "../../../public/icons/unique.svg";
// import { motion } from "framer-motion";
// import { fadeIn } from "../../../animation/variants";
import FalseButton from "../FalseButton/FalseButton";
import Image from "next/image";
import Author from "../../../public/images/author.png";

const Mission = () => {
  const data = [
    {
      icon: <Trust width={50} height={50} className={styles.icon} />,
      title: "Personal Story",
      description:
        "Chris' passion for design and technology began in college, where he built her first website. This passion has driven him to create a successful digital agency that focuses on innovation and client success.",
    },
    {
      icon: <User width={50} height={50} className={styles.icon} />,
      title: "Vision and Goals",
      description:
        "Chris envisions Fonts and Footers as a leader in the digital space, dedicated to delivering innovative solutions and exceptional client service.",
    },
    {
      icon: <Grow width={53} height={53} className={styles.icon} />,
      title: "Personal Interests",
      description:
        "When he's not working, Chris enjoys hiking in the Arizona mountains, playing pick up basketball, and spending time with his family.",
    },
    {
      icon: <Unique width={50} height={50} className={styles.icon} />,
      title: "Contact Information",
      description:
        "Connect with Chris on LinkedIn or reach out via email at chris@fontsandfooters.com.",
    },
  ];
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.top}>
          <h2 className={styles.heading}>Meet The Owner</h2>
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
              <FalseButton text='Chris Ware' btnType='primary' />
              <p className={styles.leftCopy}>
                Meet Chris Ware, the visionary founder and CEO of Fonts and
                Footers. With over 10 years of experience in web development and
                digital marketing, Chris has a proven track record of helping
                businesses achieve their online goals.
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
