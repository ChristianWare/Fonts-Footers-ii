import Image from "next/image";
import FalseButton from "../FalseButton/FalseButton";
import LayoutWrapper from "../LayoutWrapper";
import styles from "./ServicesHero.module.css";
import Img from "../../../public/images/house10.png";

const ServicesHero = () => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.falseBtnContainer}>
              <FalseButton text='Services' btnType='primary' />
            </div>
            <h1 className={styles.heading}>
              Transform Your Business with our Web Solutions
            </h1>
          </div>
          <div className={styles.right}>
            <div className={styles.imgContainer}>
              <Image src={Img} alt='' fill className={styles.img} />
            </div>
            <p className={styles.copy}>
              Welcome to Fonts & Footers, your source for high-performance,
              custom websites specializing in booking systems, e-commerce
              platforms, and business sites. We enhance user experience and SEO,
              delivering tailored solutions for your needs.
            </p>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default ServicesHero;
