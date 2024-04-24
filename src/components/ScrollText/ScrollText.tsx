import styles from "./ScrollText.module.css";
import LayoutWrapper from "../LayoutWrapper";
import House from "../../../public/icons/house.svg";

const ScrollText = () => {
  return (
    <section className={styles.bgColor}>
      <LayoutWrapper color='green3'>
        <div className={styles.content}>
          <div className={styles.reveal}>
              <h2 className={styles.text}>
                While online travel authorities can boost your property&apos;s
                exposure, you should also consider developing your own direct
                booking website. This can help you build a personalized online
                presence, and enhance the reservation process for your guests,
                making it easier for them to book their stay directly with you.
              </h2>
          </div>
          <div className={styles.bottom}>
            <div className={styles.houseContainer}>
              <House className={styles.icon} />
              <House className={styles.icon} />
              <House className={styles.icon} />
            </div>
            <p className={styles.copy}>
              A customized website for your vacation rental home acts as your
              unique digital storefront, enhancing guest experience and brand
              visibility. By enabling direct bookings, you attract guests who
              prefer booking directly, avoiding commission fees. Having your own
              website that optimizes functionality and aesthetic appeal will set
              your property apart in the competitive market.
            </p>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default ScrollText;
