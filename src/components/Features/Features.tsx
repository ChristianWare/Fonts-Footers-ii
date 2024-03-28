import LayoutWrapper from "../LayoutWrapper";
import styles from "./Features.module.css";
import { features } from "@/lib/data";
import Image from "next/image";
import Button from "../Button/Button";
import House from "../../../public/images/hero2.png";

const Features = () => {
  return (
    <section className={styles.parent}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.lTop}>
              <h2 className={styles.heading}>
                Our direct booking websites include:
              </h2>
              <div className={styles.test}>
                {features.slice(0, 4).map((x, index) => (
                  <div key={index} className={styles.featureContainer}>
                    <Image src={x.icon} alt='icon' width={30} height={30} />
                    <h3 className={styles.service}>{x.service}</h3>
                    <p className={styles.description}>{x.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.left}>
            <div className={styles.box1}>
              <Image
                src={House}
                alt='Direct Booking Website'
                fill
                className={styles.img}
              />
            </div>
            <div className={styles.box2}>
              <h4>Our Features</h4>
              <p>
                Having certain expected features on your direct booking site is
                crucial for ensuring a positive user experience and maximizing
                conversions. Meeting these expectations not only enhances
                customer satisfaction but also establishes credibility and
                fosters repeat business.
              </p>
              <div className={styles.btnContainer}>
                <Button
                  text=' all features'
                  href='/features'
                  btnType='primary'
                  arrow
                />
              </div>
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default Features;
