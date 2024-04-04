"use client";

import ArrowCluster from "../ArrowCluster/ArrowCluster";
import Button from "../Button/Button";
import LayoutWrapper from "../LayoutWrapper";
import styles from "./CallToAction.module.css";
import { motion } from "framer-motion";
import { fadeIn } from "../../../animation/variants";

const CallToAction = () => {
  return (
    <section className={styles.parent}>
      <LayoutWrapper>
        <section className={styles.content}>
          <motion.div
            variants={fadeIn("down", 0.3)}
            initial='hidden'
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className={styles.arrowContainer}
          >
            <ArrowCluster />
          </motion.div>
          <motion.h2
            variants={fadeIn("down", 0.3)}
            initial='hidden'
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className={styles.heading}
          >
            Fonts & Footers <br />
            <span className={styles.span}>
              Direct Booking Specialits
              <br />
            </span>
          </motion.h2>
          <motion.p
            variants={fadeIn("down", 0.5)}
            initial='hidden'
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className={styles.copy}
          >
            Having your own direct booking website empowers you to establish a
            stronger online presence, enhance customer relationships, increase
            revenue, and maintain greater control over your operations and
            branding.
          </motion.p>
          <motion.div
            variants={fadeIn("down", 0.9)}
            initial='hidden'
            whileInView={"show"}
            viewport={{ once: false, amount: 0.9 }}
            className={styles.btnContainer}
          >
            <Button text='Schedule a call' href='/' btnType='primaryii' arrow />
            <Button text='Contact Us' href='/' btnType='secondary' arrow />
          </motion.div>
        </section>
      </LayoutWrapper>
    </section>
  );
};
export default CallToAction;
