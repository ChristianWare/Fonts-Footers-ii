import Image from "next/image";
import LayoutWrapper from "../LayoutWrapper";
import styles from "./Hero.module.css";
import Img1 from "../../../public/images/hero2.png";
import Arrow2 from "../../../public/icons/arrow2.svg";
import ArrowCluster from "../ArrowCluster/ArrowCluster";
import Button from "../Button/Button";
import Link from "next/link";

const Hero = () => {
  return (
    <LayoutWrapper>
      <section className={styles.container}>
        <div className={styles.left}>
          <h1 className={styles.heading}>
            <span className={styles.span}>Direct Booking</span> Solutions
          </h1>
          <div className={styles.arrowContainer}>
            <ArrowCluster />
          </div>
          <p className={styles.copy}>
            Tired of relying solely on platforms like Airbnb or VRBO? The Fonts
            & Footers web design agency empowers property owners to take control
            of their bookings with a custom website to showcase thier unique
            offerings.
          </p>
          <div className={styles.btnContainer}>
            <Button text='Schedule a call' href='/' btnType='primaryii' arrow />
            <Button text='view our work' href='/' btnType='secondary' arrow />
          </div>
          <div className={styles.leftBottom}>
            <Link
              href='https://www.linkedin.com/'
              target='_blank'
              className={styles.detail}
            >
              LinkedIn
            </Link>
            <Link
              href='https://www.facebook.com/'
              target='_blank'
              className={styles.detail}
            >
              Facebook
            </Link>
            <Link
              href='https://instagram.com/'
              target='_blank'
              className={styles.detail}
            >
              Instagram
            </Link>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.imgContainer}>
            <Image
              src={Img1}
              alt='Direct Booking Website'
              fill
              className={styles.img}
            />
          </div>
          {/* <div className={styles.infoBox}>
            <div className={styles.infoLeft}>
              <ul>
                <li>Elevate your rental business</li>
                <li>Stand out from the crowd</li>
                <li>Maximize your profits with our tailored solutions</li>
              </ul>
            </div>
            <Link href='/' className={styles.infoRight}>
              More Direct Booking Benefits
              <Arrow2 className={styles.icon2} />
            </Link>
          </div> */}
        </div>
      </section>
    </LayoutWrapper>
  );
};
export default Hero;
