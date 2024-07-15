import Button from "../Button/Button";
import LayoutWrapper from "../LayoutWrapper";
import styles from "./ServicesHero.module.css";
import Img from "../../../public/images/elite.png";
import Image from "next/image";

const ServicesHero = () => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.top}>
            <h1 className={styles.heading}>
              We’re a digital marketing agency with expertise
            </h1>
          </div>
          <div className={styles.bottom}>
            <p className={styles.copy}>
              We bring our passion for good design to brave brands and deliver
              something you can shout about.
            </p>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default ServicesHero;

