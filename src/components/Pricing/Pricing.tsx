import { pricing } from "@/lib/data";
import LayoutWrapper from "../LayoutWrapper";
import styles from "./Pricing.module.css";
import Button from "../Button/Button";

const Pricing = () => {
  return (
    <section>
      <LayoutWrapper>
        <div className={styles.top}>
          <h2 className={styles.heading}>Affordable Pricing</h2>
        </div>
        <div className={styles.bottom}>
          {pricing.map((x) => (
            <div key={x.id} className={styles.priceContainer}>
              <div className={styles.pcTop}>
                <h3 className={styles.planName}>{x.plan}</h3>
                <span className={styles.for}>{x.for}</span>
              </div>
              <div className={styles.pcBottom}>
                <span className={styles.kFTitile}>Key Features</span>
                <ul className={styles.features}>
                  {x.includes.slice(0, 3).map((y) => (
                    <li key={y.id} className={styles.feature}>
                      {y.feature}
                    </li>
                  ))}
                </ul>
                <p className={styles.description}>{x.description}</p>
                <span className={styles.price}>$ {x.price}</span>
                <div className={styles.btnContainer}>
                  <Button text='Exploire Plan' href='/' btnType='primary' />
                </div>
              </div>
            </div>
          ))}
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default Pricing;
