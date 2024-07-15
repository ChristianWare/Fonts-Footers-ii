"use client";

import LayoutWrapper from "../LayoutWrapper";
import styles from "./ContactDetails.module.css";
import Image from "next/image";
import Img from "../../../public/images/house24.png";
import SocialsContainer from "../SocialsContainer/SocialsContainer";
import { InlineWidget } from "react-calendly";
import Link from "next/link";
import ScrollHorizontalText from "../ScrollHorizontalText/ScrollHorizontalText";

const ContactDetails = () => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.imgContainer}>
              <Image src={Img} className={styles.img} alt='image' fill />
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.top}>
              <div className={styles.box}>
                <h2 className={styles.title}>Phone</h2>
                <Link href='tel:+62363267800' className={styles.detail}>
                  623-632-6780
                </Link>
              </div>
              <div className={styles.box}>
                <h2 className={styles.title}>Email</h2>
                <Link
                  href='mailto:fontsandfooters@gmail.com'
                  className={styles.detail}
                >
                  fontsandfooters@gmail.com
                </Link>
              </div>
              <div className={styles.box}>
                <h2 className={styles.title}>Calendly</h2>
                <Link
                  href='https://calendly.com/fontsandfooters'
                  target='_blank'
                  className={styles.detail}
                >
                  https://calendly.com/fontsandfooters
                </Link>
              </div>
              <div className={styles.box}>
                <h2 className={styles.title}>Facebook</h2>
                <Link
                  href='https://www.facebook.com/fontsandfooters'
                  target='_blank'
                  className={styles.detail}
                >
                  facebook.com/fontsandfooters
                </Link>
              </div>
            </div>
            <div className={styles.bottom}>
              <SocialsContainer />
            </div>
          </div>
        </div>
        
      </LayoutWrapper>
    </section>
  );
};
export default ContactDetails;
