import LayoutWrapper from "../LayoutWrapper";
import styles from "./AboutUs.module.css";
import Image from "next/image";
import House2 from "../../../public/images/house17.png";
import Button from "../Button/Button";

const AboutUs = () => {
  return (
    <section className={styles.parent}>
      <LayoutWrapper>
        <div className={styles.bottom}>
          <div className={styles.left}>
            <div className={styles.headingContainerii}>
              <h2 className={styles.heading}>Who are we?</h2>
            </div>
            <div className={styles.imgContainer}>
              <Image src={House2} alt='image' fill className={styles.img} />
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.headingContainer}>
              <h2 className={styles.heading}>Who are we?</h2>
            </div>
            <p className={styles.copy}>
              We are Fonts and Footers™, an award-winning digital design agency focusing
              on branding, web design, and Product designing in the heart of
              Phoenix, AZ. We design creative brands, websites, and product that
              deliver results.
            </p>
            <div className={styles.btnContainer}>
              <Button
                text='Jump Into Our World'
                href='/about'
                btnType='primaryii'
                arrow
              />
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default AboutUs;
