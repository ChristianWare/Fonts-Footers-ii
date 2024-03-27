import LayoutWrapper from "../LayoutWrapper";
import styles from "./AboutUs.module.css";
import Image from "next/image";
import House2 from "../../../public/images/house17.png";
import Button from "../Button/Button";
import Focus from "../../../public/icons/focus.svg";

const AboutUs = () => {
  return (
    <section className={styles.parent}>
      <LayoutWrapper>
        <div className={styles.bottom}>
          <div className={styles.left}>
            <div className={styles.headingContainerii}>
              <h2 className={styles.heading}>
                Solution: Invest in a <span className={styles.span}>Direct Booking</span>{" "}
                Website
              </h2>
            </div>
            <div className={styles.imgContainer}>
              <Image src={House2} alt='image' fill className={styles.img} />
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.headingContainer}>
              <h2 className={styles.heading}>
                Solution: Invest in a <span className={styles.span}>Direct Booking</span>{" "}
                Website
              </h2>
            </div>
            <p className={styles.copy}>
              Here at Fonts & Footers, we build personalized direct booking
              sites designed to enhance your guests online booking experience.
              As experts, we ensure tailored solutions to maximize your
              property&apos;s potential. By choosing us, you gain a direct
              connection with guests, fostering trust and boosting bookings,
              unlocking the full potential of your vacation/STR business.
            </p>
            <div className={styles.detailDataBox}>
              {/* {detailData.map((x, index) => (
                <div key={index}>
                  <div className={styles.icon}>{x.icon}</div>
                  <h3>{x.title}</h3>
                  <p>{x.description}</p>
                </div>
              ))} */}
            </div>
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
