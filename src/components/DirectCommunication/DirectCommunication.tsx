"use client";

import LayoutWrapper from "../LayoutWrapper";
import styles from "./DirectCommunication.module.css";
import Arrow from "../../../public/icons/arrow2.svg";
import { motion } from "framer-motion";
import { fadeIn } from "../../../animation/variants";

const DirectCommunication = () => {
  const data = [
    {
      title: "Personalized Guest Experience",
      description:
        "Personalize the guest experience by addressing individual preferences, special requests, and inquiries promptly.",
    },
    {
      title: "Building Relationships",
      description:
        "Foster relationships with guests by creating a sense of trust and rapport, encouraging repeat bookings, referrals, and positive reviews.",
    },
    {
      title: "Clarifying Expectations",
      description:
        "Eliminate misunderstandings by clearly communicating booking policies, house rules, check-in/check-out procedures, and property details.",
    },
    {
      title: "Handling Guest Feedback",
      description:
        "Get feedback directly from guests during their stay or post-stay. Address concerns promptly, and demonstrate responsiveness.",
    },
    {
      title: "Upselling Opportunities",
      description:
        "Upsell additional services, upgrades, or experiences directly to guests through personalized communication, thus increasing revenue per booking.",
    },
    {
      title: "Resolving Issues",
      description:
        "In the event of emergencies, maintenance issues, or unforeseen circumstances, direct communication enables owners to respond quickly, mitigate problems, and ensure guest comfort and safety.",
    },
  ] as const;
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.top}>
          <h2 className={styles.heading}>Direct Communication</h2>
          <p className={styles.copy}>
            Having a direct booking website that facilitates direct
            communication offers several benefits for vacation rental property
            owners:
          </p>
        </div>
        <div className={styles.bottom}>
          {data.map((x, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.iconContainer}>
                <Arrow className={styles.icon} width={25} height={25} />
              </div>
              <div>
                <motion.h3
                  variants={fadeIn(index % 2 === 0 ? "right" : "left", 0.3)}
                  initial='hidden'
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.3 }}
                  className={styles.title}
                >
                  {x.title}
                </motion.h3>
                <motion.p
                  variants={fadeIn(index % 2 === 0 ? "right" : "left", 0.3)}
                  initial='hidden'
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.3 }}
                  className={styles.desc}
                >
                  {x.description}
                </motion.p>
              </div>
            </div>
          ))}
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default DirectCommunication;
