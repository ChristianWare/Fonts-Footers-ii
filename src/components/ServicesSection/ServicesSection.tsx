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
          <div className={styles.right}>
            <h2 className={styles.heading}>What we Build</h2>
          </div>
          <div className={styles.left}>
            {services.map((x) => (
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
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default ServicesSection;
