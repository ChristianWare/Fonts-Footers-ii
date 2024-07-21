"use client";

import ContactForm from "../ContactForm/ContactForm";
import Footer from "../Footer/Footer";
import styles from "./FinalCTA.module.css";

const FinalCta = () => {
  return (
    <section className={styles.container}>
      <div className={styles.layoutWrapper}>
        <div className={styles.content}>
          <div className={styles.bottom}>
            <div className={styles.left}>
              <h2 className={styles.heading}>Let&apos;s Have a conversation</h2>
              <p className={styles.topText}>
                Choosing Fonts & Foooters means your site is in good hands.
                We&apos;re known for delivering top-notch websites that help
                businesses meet their online goals.
              </p>
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
