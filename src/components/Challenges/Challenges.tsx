"use client";

import LayoutWrapper from "../LayoutWrapper";
import styles from "./Challenges.module.css";
import Algorithm from "../../../public/icons/algorithm.svg";
import Brand from "../../../public/icons/brand.svg";
import Crowd from "../../../public/icons/crowd.svg";
import Fees from "../../../public/icons/fees.svg";
import { motion } from "framer-motion";
import { fadeIn } from "../../../animation/variants";

const Challenges = () => {
  const data = [
    {
      title: "Relying on OTA's and their unpredictable algorithms",
      description:
        "This can leave businesses vulnerable to sudden changes in visibility and booking opportunities. Diversifying marketing strategies and investing in a direct booking website can help mitigate the risks associated with OTA dependency.",
      icon: <Algorithm width={75} height={75} />,
    },
    {
      title: "High commission fees that eat into your profits",
      description:
        "High commission fees from third-party platforms can significantly diminish your profits. Exploring alternative distribution channels and optimizing direct bookings can help maximize your revenue potential.",
      icon: <Fees width={75} height={75} />,
    },
    {
      title: "No control over your company branding",
      description:
        "Struggling with limited control over bookings and brand representation can hinder business autonomy. Investing in a robust booking management system and prioritizing direct customer interactions can enhance control and brand consistency.",
      icon: <Brand width={75} height={75} />,
    },
    {
      title: "Struggling to standout in a crowded rental market",
      description:
        "Facing challenges in standing out amidst a saturated market can hinder business growth. Implementing unique branding strategies and emphasizing distinctive value propositions can help overcome this obstacle.",
      icon: <Crowd width={75} height={75} />,
    },
  ];
  return (
    <LayoutWrapper>
      <div className={styles.content}>
        <div className={styles.top}>
          <h2 className={styles.heading}>
            Have you encountered any of these challenges?
          </h2>
          <p className={styles.copy}>
            As a short-term rental owner, you may be experiencing these common
            issues:
          </p>
        </div>
        <div className={styles.middle}>
          {data.map((x, index) => (
            <motion.div
              variants={fadeIn(index % 2 === 0 ? "right" : "left", 0.3)}
              initial='hidden'
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              key={index}
              className={styles.box}
            >
              {x.icon}
              <h3 className={styles.title}>{x.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </LayoutWrapper>
  );
};
export default Challenges;
