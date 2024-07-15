"use client";
import Button from "../Button/Button";
import Calendly from "../Calendly/Calendly";
import Footerii from "../Footerii/Footerii";
import LayoutWrapper from "../LayoutWrapper";
import styles from "./CallToAction.module.css";

const CallToAction = () => {
  return (
    <section className={styles.parent}>
      <LayoutWrapper>
        <section className={styles.content}>
          <h2 className={styles.heading}>Ready to start a project?</h2>
          <p className={styles.copy}>
            Having your own direct booking website empowers you to establish a
            stronger online presence, enhance customer relationships, increase
            revenue, and maintain greater control over your operations and
            branding.
          </p>
          <div className={styles.btnContainer}>
            <Button text='Schedule a call' href='/' btnType='primary' arrow />
            <Button text='Contact Us' href='/' btnType='secondary' arrow />
          </div>
        </section>
      </LayoutWrapper>
      {/* <Calendly /> */}
      <Footerii />
    </section>
  );
};

export default CallToAction;
