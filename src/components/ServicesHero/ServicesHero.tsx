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
              Spread <span className='span2'>your</span>{" "}
              <span className='span1'>wings</span> with us
            </h1>
          </div>
          <div className={styles.bottom}>
            <div className={styles.imgContainer}>
              <Image src={Img} alt='image' fill className={styles.img} />
            </div>
            <div className={styles.imgContainer}>
              <Image src={Img} alt='image' fill className={styles.img} />
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default ServicesHero;
