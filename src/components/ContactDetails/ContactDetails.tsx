"use client";

import LayoutWrapper from "../LayoutWrapper";
import styles from "./ContactDetails.module.css";
import Image from "next/image";
import Img from "../../../public/images/house24.png";
import SocialsContainer from "../SocialsContainer/SocialsContainer";
import { InlineWidget } from "react-calendly";
import Link from "next/link";

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
                <Link href='tel:+6236326780' className={styles.detail}>
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
            </div>
            <div className={styles.bottom}>
              <SocialsContainer />
            </div>
          </div>
        </div>
        <div className={styles.calBox} id='schedule'>
          <h2 className={styles.heading}>
            Calendly: Scehdule a Discovery Call with us
          </h2>
          <InlineWidget
            url='https://calendly.com/chris-ware-dev/discovery-call'
            styles={{
              height: "775px",
              borderRadius: "20px",
            }}
          />
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default ContactDetails;
