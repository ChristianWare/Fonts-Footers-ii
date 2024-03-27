import LayoutWrapper from "../LayoutWrapper";
import styles from "./Process.module.css";
import { process } from "@/lib/data";

import Button from "../Button/Button";

const Process = () => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            {process.map((x, index) => (
              <div key={x.id} className={styles.processContainer}>
                <h3 className={styles.processName}>
                  {x.processName.length >= 1 ? index + "." : ""} {x.processName}
                </h3>
                <p className={styles.processDescription}>
                  {x.processDescription}
                </p>
              </div>
            ))}
          </div>
          <div className={styles.right}>
            <h2 className={styles.heading}>Our Simple 4-step process</h2>
            <p className={styles.copy}>
              These are the steps we take to build your site. We keep you in the
              loop 100% of the way. 
            </p>
          </div>
        </div>
        <div className={styles.ctaContainer}>
          <h4 className={styles.cta}>ready to get started?</h4>
          <div className={styles.btnContainer}>
            <Button
              text='Schedule a call'
              href='/contact'
              btnType='primary'
              arrow
            />
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default Process;
