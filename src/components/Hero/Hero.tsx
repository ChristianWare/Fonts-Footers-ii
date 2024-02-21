import Image from "next/image";
import LayoutWrapper from "../LayoutWrapper";
import styles from "./Hero.module.css";
import Img1 from "../../../public/images/hero.jpg";
import Arrow from "../../../public/icons/arrow.svg";
import Arrow2 from "../../../public/icons/arrow2.svg";

const Hero = () => {
  return (
    <section className={styles.bgColor}>
      <LayoutWrapper>
        <div className={styles.top}>
          <div className={styles.topLeft}>
            <div className={styles.arrowContainer}>
              <Arrow className={styles.icon} />
              <Arrow className={styles.icon} />
              <Arrow className={styles.icon} />
            </div>
            <p className={styles.copy}>
              Tired of relying solely on platforms like Airbnb or VRBO? We
              empower property owners to take control of their bookings with a
              custom website to showcase thier unique offerings.
            </p>
          </div>
          <div className={styles.topRight}>
          <div className={styles.arrowContainerii}>
            <Arrow className={styles.icon} />
            <Arrow className={styles.icon} />
            <Arrow className={styles.icon} />
          </div>
            <h1 className={styles.heading}>
              <span className={styles.span}>Direct Booking</span> Solutions
            </h1>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.imgContainer}>
            <Image src={Img1} alt='hero' fill className={styles.img} />
          </div>
          <div className={styles.bottomRight}>
            <div className={styles.bottomRight1}>
              <Arrow2 className={styles.icon2} />
              CTA One
            </div>
            <div className={styles.bottomRight2}>
              <Arrow2 className={styles.icon2} />
              CTA Two
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default Hero;
