import ArrowCluster from "../ArrowCluster/ArrowCluster";
import Button from "../Button/Button";
import LayoutWrapper from "../LayoutWrapper";
import styles from "./CallToAction.module.css";

const CallToAction = () => {
  return (
    <section>
      <LayoutWrapper>
        <section className={styles.content}>
          <div className={styles.arrowContainer}>
            <ArrowCluster />
          </div>
          <h2 className={styles.heading}>
            Fonts & Footers <br />
            <span className={styles.span}>
              Direct Booking Specialits
              <br />
            </span>
          </h2>
          <p className={styles.copy}>
            Having your own direct booking website empowers you to establish a
            stronger online presence, enhance customer relationships, increase
            revenue, and maintain greater control over your operations and
            branding.
          </p>
          <div className={styles.btnContainer}>
            <Button text='Schedule a call' href='/' btnType='primaryii' arrow />
            <Button text='Contact Us' href='/' btnType='secondary' arrow />
          </div>
        </section>
      </LayoutWrapper>
    </section>
  );
};
export default CallToAction;
