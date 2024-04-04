"use client";

import { benefits } from "@/lib/data";
import LayoutWrapper from "../LayoutWrapper";
import SectionHeading from "../SectionHeading/SectionHeading";
import styles from "./Benefits.module.css";
import Button from "../Button/Button";
import { motion } from "framer-motion";
import { fadeIn } from "../../../animation/variants";

const Benefits = () => {
  return (
    <section>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.top}>
            <SectionHeading text='Benefits of having your own Direct Booking Website' />
          </div>
          <div className={styles.bottom}>
            {benefits.slice(0, 3).map((benefit, i) => (
              <div key={i} className={styles.benefitContainer}>
                <div className={styles.headingContainer}>
                  <motion.h3
                    variants={fadeIn("right", 0.3)}
                    initial='hidden'
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.3 }}
                    className={styles.heading}
                  >
                    {benefit.heading}
                  </motion.h3>
                </div>
                <motion.p
                  variants={fadeIn("left", 0.3)}
                  initial='hidden'
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.3 }}
                  className={styles.description}
                >
                  {benefit.description}
                </motion.p>
              </div>
            ))}
          </div>
          <div className={styles.btnContainer}>
            <Button
              text='see all benefits'
              href='/benefits'
              btnType='primaryii'
              arrow
            />
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default Benefits;
