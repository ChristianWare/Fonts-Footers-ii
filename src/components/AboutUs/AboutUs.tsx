import LayoutWrapper from "../LayoutWrapper";
import styles from "./AboutUs.module.css";
import Image from "next/image";
import House2 from "../../../public/images/house2.png";
import Arrow from "../../../public/icons/arrow.svg";
import Button from "../Button/Button";

const AboutUs = () => {
  const detailData = [
    {
      text: "Tailored Solutions for Your Property",
    },
    {
      text: "Maximize Revenue with Direct Bookings",
    },
    {
      text: "Professional Guidance Every Step of the Way",
    },
  ];

  return (
    <section>
      <LayoutWrapper>
        <div className={styles.bottom}>
          <div className={styles.left}>
            <div className={styles.headingContainerii}>
              <h2 className={styles.heading}>
                About <br />
                <span className={styles.span}>Fonts & Footers</span>
              </h2>
            </div>
            <div className={styles.imgContainer}>
              <Image src={House2} alt='image' fill className={styles.img} />
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.headingContainer}>
              <h2 className={styles.heading}>
                About <br />
                <span className={styles.span}>Fonts & Footers</span>
              </h2>
            </div>
            <p className={styles.copy}>
              Here at Fonts & Footers, we revolutionize vacation rental property
              management with personalized, direct booking websites designed to
              enhance the overall rental experience. Our expertise in the
              vacation rental industry ensures tailored solutions to maximize
              your property&apos;s potential. By choosing us, you gain a direct
              connection with guests, fostering trust and boosting bookings,
              unlocking the full potential of your vacation rental business.
            </p>
            <div className={styles.btnContainer}>
              <Button
                text='More About us'
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
