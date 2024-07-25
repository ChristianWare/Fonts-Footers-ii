"use client";
import Button from "../Button/Button";
import ContactForm from "../ContactForm/ContactForm";
import Footerii from "../Footerii/Footerii";
import LayoutWrapper from "../LayoutWrapper";
import styles from "./CallToAction.module.css";
import { usePathname } from "next/navigation";

const CallToAction = () => {
  const pathname = usePathname();

  return (
    <section className={styles.parent}>
      <LayoutWrapper>
        <section className={styles.content}>
          <h2 className={styles.heading}>
            {pathname === "/services/ecommerce-stores"
              ? "Ready to Elevate Your E-commerce Business?"
              : "Ready to Transform Your Online Presence?"}
          </h2>
          <p className={styles.copy}>
            We create beautiful, responsive websites that meet your specific
            needs and goals.
          </p>
          <div className={styles.btnContainer}>
            <Button
              text='See All Services'
              href='/services'
              btnType='primary'
              arrow
            />
            <Button
              text='Contact Us'
              href='/contact'
              btnType='secondary'
              arrow
            />
          </div>
        </section>
        <div className={styles.formContainer}>
          <ContactForm />
        </div>
      </LayoutWrapper>
      <Footerii />
    </section>
  );
};

export default CallToAction;
