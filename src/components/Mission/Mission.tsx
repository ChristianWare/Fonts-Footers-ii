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

const Mission = () => {
  const data = [
    {
      icon: <Trust width={50} height={50} className={styles.icon} />,
      title: "Trust & Transparency",
      description:
        "We prioritize trust and transparency, building a reliable and secure environment for vacation rental owners.",
    },
    {
      icon: <User width={50} height={50} className={styles.icon} />,
      title: "User-Friendly",
      description:
        "We strive to offer a personalized and user-friendly experience, tailoring our services to meet the unique needs of each host.",
    },
    {
      icon: <Grow width={53} height={53} className={styles.icon} />,
      title: "Growth",
      description:
        "Our mission is to contribute to the growth of vacation rental businesses, enabling hosts to thrive in a competitive marketplace.",
    },
    {
      icon: <Unique width={50} height={50} className={styles.icon} />,
      title: "Personalization",
      description:
        "Continuously enhance user experience by offering personalized solutions that cater to the specific requirements of each vacation rental owner.",
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
            <FalseButton text='Mission Statement' btnType='primary' />
            <p className={styles.leftCopy}>
              Empowering vacation rental owners with personalized and
              user-friendly direct booking websites, our mission is to liberate
              hosts from intermediary platforms, fostering independence, trust,
              and growth in their businesses, as we redefine the vacation rental
              experience away from Airbnb. Here are the four ways we plan on
              accomplishing that goal:
            </p>
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
