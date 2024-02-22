import Image from "next/image";
import LayoutWrapper from "../LayoutWrapper";
import styles from "./Hero.module.css";
import Img1 from "../../../public/images/hero2.png";
import Arrow2 from "../../../public/icons/arrow2.svg";
import ArrowCluster from "../ArrowCluster/ArrowCluster";

const Hero = () => {
  return (
    <section className={styles.bgColor}>
      <LayoutWrapper>
        <div className={styles.top}>
          <div className={styles.topLeft}>
            <div className={styles.arrowContainer}>
              <ArrowCluster />
            </div>
            <p className={styles.copy}>
              Tired of relying solely on platforms like Airbnb or VRBO? The
              Fonts & Footers web design agency empowers property owners to take
              control of their bookings with a custom website to showcase thier
              unique offerings.
            </p>
          </div>
          <div className={styles.topRight}>
            <div className={styles.arrowContainerii}>
              <ArrowCluster />
            </div>
            <h1 className={styles.heading}>
              <span className={styles.span}>Direct Booking</span> Solutions
            </h1>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.imgContainer}>
            <Image src={Img1} alt='Direct Booking Website' fill className={styles.img} />
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
