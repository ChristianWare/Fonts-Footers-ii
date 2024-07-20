import LayoutWrapper from "../LayoutWrapper";
import styles from "./ServicesSection.module.css";
import { services } from "@/lib/data";
import Arrow2 from "../../../public/icons/arrow2.svg";
import Features from "../Features/Features";
import FalseButton from "../FalseButton/FalseButton";

const ServicesSection = () => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.right}>
            {/* <div className={styles.falseBtnContainer}>
              <FalseButton btnType='primary' text='Services & Features' />
            </div> */}
            <h2 className={styles.heading}>What we build</h2>
          </div>
          <div className={styles.left}>
            {services.map((x) => (
              <div key={x.id} className={styles.processContainer}>
                <div className={styles.processTop}>
                  {x.processName.length >= 1 && (
                    <Arrow2 className={styles.icon2} />
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
          </div>
        </div>
        <Features />
      </LayoutWrapper>
    </section>
  );
};
export default ServicesSection;
