"use client";

import ContactForm from "../ContactForm/ContactForm";
import Footer from "../Footer/Footer";
import styles from "./FinalCTA.module.css";
import { motion } from "framer-motion";
import { fadeIn } from "../../../animation/variants";

const FinalCta = () => {
  return (
    <section className={styles.container}>
      <div className={styles.layoutWrapper}>
        <div className={styles.content}>
          <div className={styles.bottom}>
            <div className={styles.left}>
              <motion.h2
                variants={fadeIn("right", 0.3)}
                initial='hidden'
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                className={styles.heading}
              >
                Let&apos;s Chat
              </motion.h2>
              <motion.p
                variants={fadeIn("right", 0.3)}
                initial='hidden'
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                className={styles.topText}
              >
                Reach out to us today to see how you can begin to take advantage
                of the benefits of having your own website for your rental
                property.
              </motion.p>
            </div>
            <div className={styles.right}>
              <div>
                <ContactForm />
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </section>
  );
};
export default FinalCta;
