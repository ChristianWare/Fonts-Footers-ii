"use client";
import Image from "next/image";
import Button from "../Button/Button";
import ContactForm from "../ContactForm/ContactForm";
import Footerii from "../Footerii/Footerii";
import LayoutWrapper from "../LayoutWrapper";
import styles from "./CallToAction.module.css";
import { usePathname } from "next/navigation";
import img from "../../../public/images/house10.png";

const CallToAction = () => {
  const pathname = usePathname();

  return (
    <section className={styles.parent}>
      <LayoutWrapper>
        <section className={styles.content}>
          <div className={styles.miscContainer}>
            <div className={styles.imgContainer}>
              <Image
                src={img}
                alt=''
                layout='fill'
                objectFit='cover'
                className={styles.img}
              />
            </div>
          </div>
          <div className={styles.right}>
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
          </div>
        </section>
        {/* <div className={styles.formContainer}>
          <ContactForm />
        </div> */}
      </LayoutWrapper>
      <Footerii />
    </section>
  );
};

export default CallToAction;
