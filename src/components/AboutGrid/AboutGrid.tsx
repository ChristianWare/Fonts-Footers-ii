import LayoutWrapper from "../LayoutWrapper";
import styles from "./AboutGrid.module.css";
import House from "../../../public/images/house5.png";
import House2 from "../../../public/images/house4.png";
import House3 from "../../../public/images/house3.png";
import Image from "next/image";

const AboutGrid = () => {
  return (
    <section className={styles.parent}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.grid}>
            <div className={styles.section1}>
              <div className={styles.infoBox}>
                <h3>2019</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Enim, et.
                </p>
              </div>
              <div className={styles.imgContainer}>
                <Image src={House} alt='image' fill className={styles.img1} />
              </div>
            </div>
            <div className={styles.section2}>
              <div className={styles.imgContainer2}>
                <Image src={House2} alt='image' fill className={styles.img2} />
              </div>
            </div>
            <div className={styles.section3}>
              <div className={styles.infoBox2}>
                <h3>2019</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Enim, et.
                </p>
              </div>
              <div className={styles.imgContainer}>
                <Image src={House3} alt='image' fill className={styles.img3} />
              </div>
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default AboutGrid;
