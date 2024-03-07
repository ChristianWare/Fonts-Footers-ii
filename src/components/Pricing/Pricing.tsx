"use client";

import { pricing } from "@/lib/data";
import LayoutWrapper from "../LayoutWrapper";
import styles from "./Pricing.module.css";
import Button from "../Button/Button";
import { useState } from "react";

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(false);

  return (
    <section>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.top}>
            <h2 className={styles.heading}>Pricing</h2>
            <p className={styles.copy}>
              Subscription based pricing. No contracts. Pause or cancel whenever you&rsquo;d
              like.
            </p>
            <div className={styles.optionsBox}>
              <span className={styles.option}>Monthly</span>
              <div className={styles.toggleContainer}>
                <label className={styles.switch}>
                  <input type='checkbox' className={styles.checkBox} />
                  <span
                    onClick={() => setIsMonthly(!isMonthly)}
                    className={styles.slider}
                  ></span>
                </label>
              </div>
              <span className={styles.option}>Annually</span>
            </div>
          </div>
          <div className={styles.bottom}>
            {pricing.map((x) => (
              <div key={x.id} className={styles.priceContainer}>
                <div className={styles.pcTop}>
                  <h3 className={styles.planName}>{x.plan}</h3>
                  <span className={styles.for}>{x.for}</span>
                </div>
                <div className={styles.pcBottom}>
                  {/* <span className={styles.kFTitile}>Key Features</span> */}
                  <ul className={styles.features}>
                    {x.includes.slice(0, 3).map((y) => (
                      <li key={y.id} className={styles.feature}>
                        {y.feature}
                      </li>
                    ))}
                  </ul>
                  <p className={styles.description}>{x.description}</p>
                  <span className={styles.price}>
                    ${!isMonthly ? x.prices[0].price : x.prices[1].price}
                  </span>
                  <div className={styles.btnContainer}>
                    <Button
                      text='Explore Plan'
                      href='/'
                      btnType='primaryii'
                      arrow
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default Pricing;
