import Button from "../Button/Button";
import LayoutWrapper from "../LayoutWrapper";
import styles from "./ServicesSection.module.css";
import { services } from "@/lib/data";
import Arrow2 from "../../../public/icons/arrow2.svg";
import Link from "next/link";

const ServicesSection = () => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            {services.map((x, index) => (
              <div key={x.id} className={styles.processContainer}>
                <div className={styles.processTop}>
                  {x.processName.length >= 1 && (
                    <Link href='/'>
                      <Arrow2 className={styles.icon2} />
                    </Link>
                  )}
                </div>
                <div className={styles.processBottom}>
                  {x.processName.length >= 1 && (
                    <h3 className={styles.processName}>{x.processName}</h3>
                  )}

                  <p className={styles.processDescription}>
                    {x.processDescription}
                  </p>
                </div>
              </div>
            ))}
            <div className={styles.btnContainer}>
              <Button
                text='See All Services'
                href='/contact/#schedule'
                btnType='primary'
                arrow
              />
            </div>
          </div>
          <div className={styles.right}>
            <h2 className={styles.heading}>Services We Offer</h2>
            {/* <p className={styles.copy}>
              These are the steps we take to build your site. We keep you in the
              loop 100% of the way.
            </p> */}
          </div>
        </div>
        <div className={styles.ctaContainer}>
          {/* <h4 className={styles.cta}>ready to get started?</h4> */}
          {/* <div className={styles.btnContainer}>
            <Button
              text='See All Services'
              href='/contact/#schedule'
              btnType='primary'
              arrow
            />
          </div> */}
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default ServicesSection;
