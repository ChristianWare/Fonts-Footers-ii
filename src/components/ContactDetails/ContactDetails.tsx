"use client";

import LayoutWrapper from "../LayoutWrapper";
import styles from "./ContactDetails.module.css";
import Image from "next/image";
import Img from "../../../public/images/house25.png";
import SocialsContainer from "../SocialsContainer/SocialsContainer";
import { motion } from "framer-motion";
import { fadeIn } from "../../../animation/variants";

const ContactDetails = () => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial='hidden'
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className={styles.left}
          >
            <div className={styles.imgContainer}>
              <Image src={Img} className={styles.img} alt='image' fill />
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial='hidden'
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className={styles.right}
          >
            <div className={styles.top}>
              <div className={styles.box}>
                <h2 className={styles.title}>Phone</h2>
                <p className={styles.detail}>623-632-6780</p>
              </div>
              <div className={styles.box}>
                <h2 className={styles.title}>Email</h2>
                <p className={styles.detail}>hello@fontsandfooters.com</p>
              </div>
              <div className={styles.box}>
                <h2 className={styles.title}>Calendly</h2>
                <p className={styles.detail}>calendly.com/fontsandfooters</p>
              </div>
            </div>
            <div className={styles.bottom}>
              <SocialsContainer />
            </div>
          </motion.div>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default ContactDetails;
