import Image from "next/image";
import LayoutWrapper from "../LayoutWrapper";
import styles from "./Hero.module.css";
import Img1 from "../../../public/images/house8.png";
import ArrowCluster from "../ArrowCluster/ArrowCluster";
import Button from "../Button/Button";
import Link from "next/link";
import Insta from "../../../public/icons/instagram.svg";
import LinkedIn from "../../../public/icons/linkedin.svg";
import Facebook from "../../../public/icons/facebook.svg";

const Hero = () => {
  return (
    <LayoutWrapper>
      <section className={styles.container}>
        <div className={styles.left}>
          <h1 className={styles.heading}>
            Empower your property with a{" "}
            <span className={styles.span}>Direct Booking</span> Website
          </h1>
          <div className={styles.arrowContainer}>
            <ArrowCluster />
          </div>
          <p className={styles.copy}>
            Tired of using sites like Air BNB or VRBO for your short-term rental
            properties? Have your guests book directly with you to give them the
            best hospitality experience.
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
              <LinkedIn className={styles.icon} width={15} height={15} />
            </Link>
            <Link
              href='https://www.facebook.com/'
              target='_blank'
              className={styles.detail}
            >
              <Facebook className={styles.icon} width={15} height={15} />
            </Link>
            <Link
              href='https://instagram.com/'
              target='_blank'
              className={styles.detail}
            >
              <Insta className={styles.icon} width={15} height={15} />
            </Link>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.imgContainer}>
            <Image
              src={Img1}
              alt='Direct Booking Website'
              fill
              priority
              className={styles.img}
            />
          </div>
        </div>
      </section>
    </LayoutWrapper>
  );
};
export default Hero;
