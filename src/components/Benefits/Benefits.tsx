import { benefits } from "@/lib/data";
import LayoutWrapper from "../LayoutWrapper";
import SectionHeading from "../SectionHeading/SectionHeading";
import styles from "./Benefits.module.css";
import Button from "../Button/Button";

const Benefits = () => {
  return (
    <section>
      <LayoutWrapper>
        <div className={styles.top}>
          <SectionHeading text='Direct Booking Benefits' />
        </div>
        <div className={styles.bottom}>
          {benefits.slice(0, 3).map((benefit, i) => (
            <div key={i} className={styles.benefitContainer}>
              <div className={styles.headingContainer}>
                <h3 className={styles.heading}>
                  <span className={styles.index}>{i + 1}. </span>{" "}
                  {benefit.heading}
                </h3>
              </div>
              <p className={styles.description}>{benefit.description}</p>
            </div>
          ))}
        </div>
        <div className={styles.btnContainer}>
          <Button
            text='see all benefits'
            href='/benefits'
            btnType='primaryii'
            arrow
          />
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default Benefits;
