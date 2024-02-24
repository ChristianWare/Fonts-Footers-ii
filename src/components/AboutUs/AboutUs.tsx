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
      <div className={styles.content}>
        <LayoutWrapper>
          <div className={styles.imgContainer}>
            <Image
              src={House2}
              alt='Direct Booking Website'
              fill
              className={styles.img}
            />
            <div className={styles.copyContainer}>
              <h3 className={styles.heading}>Who are Fonts & Footers?</h3>
              <p className={styles.copy}>
                Here at Fonts & Footers, we revolutionize vacation rental
                property management with personalized, direct booking websites
                designed to enhance the overall rental experience. Our expertise
                in the vacation rental industry ensures tailored solutions to
                maximize your property&apos;s potential. By choosing us, you
                gain a direct connection with guests, fostering trust and
                boosting bookings, unlocking the full potential of your vacation
                rental business.
              </p>
              {detailData.map((x, index) => (
                <div key={index} className={styles.detailContainer}>
                  <Arrow className={styles.icon} />
                  <p className={styles.detail}>{x.text}</p>
                </div>
              ))}
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
      </div>
    </section>
  );
};
export default AboutUs;
