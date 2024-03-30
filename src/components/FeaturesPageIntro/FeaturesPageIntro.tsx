import LayoutWrapper from "../LayoutWrapper";
import styles from "./FeaturesPageIntro.module.css";
import Image from "next/image";
import Img from "../../../public/images/house23.png";
import House from "../../../public/icons/house.svg";
import ArrowCluster from "../ArrowCluster/ArrowCluster";

const FeaturesPageIntro = () => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.top}>
          <div className={styles.box1}>
            <div className={styles.arrowContainerii}>
              <ArrowCluster />
            </div>
            <h1 className={styles.heading}>
              {" "}
              <span className={styles.span}>Features</span> of our Direct
              Booking Websites
            </h1>
          </div>
          <div className={styles.box2}>
            <div className={styles.arrowContainer}>
              <ArrowCluster />
            </div>
            <p className={styles.copy}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias,
              quia porro. Porro, error dolore iure accusamus nulla nisi eaque1
              quaerat magni adipisci minima pariatur ducimus. Debitis illo alias
              officia minus.
            </p>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.bottomLeft}>
            <div className={styles.imgContainer}>
              <Image src={Img} alt='image' fill className={styles.img} />
            </div>
          </div>
          <div className={styles.bottomRight}>
            <div className={styles.br1}>
              Feature One
              <div className={styles.iconContainer}>
                <House width={20} height={20} className={styles.icon} />
              </div>
            </div>
            <div className={styles.br1}>
              <div className={styles.iconContainer}>
                <House width={20} height={20} className={styles.icon} />
              </div>
              Feature Two
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default FeaturesPageIntro;
