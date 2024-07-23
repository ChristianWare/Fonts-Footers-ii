"use client";

import { pricing } from "@/lib/data";
import LayoutWrapper from "../LayoutWrapper";
import styles from "./Pricing.module.css";
import Button from "../Button/Button";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface Props {
  bgColor?: string;
}

const Pricing = ({ bgColor = "" }: Props) => {
  const [isMonthly, setIsMonthly] = useState(false);

  const pathname = usePathname();

  return (
    <section className={`${styles.container} ${styles[bgColor]}`}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.top}>
            {pathname === "/pricing" ? (
              <h1 className={styles.heading}>Pricing</h1>
            ) : (
              <h2 className={styles.heading}>Pricing</h2>
            )}

            <p className={styles.copy}>
              Subscription based pricing. No contracts. Pause or cancel whenever
              you&rsquo;d like.
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
              <span className={styles.option}>
                Annually <small>(Save 20%)</small>
              </span>
            </div>
          </div>
          <div className={styles.bottom}>
            {pricing.map((x) => (
              <div
                key={x.id}
                className={styles.priceContainer}
                style={{
                  opacity:
                    pathname === "/services/business-websites" &&
                    x.href !== "/services/business-websites"
                      ? 0.5
                      : 1,
                }}
              >
                <div className={styles.contentParent}>
                  <div className={styles.pcTop}>
                    <h3 className={styles.planName}>{x.plan}</h3>
                  </div>
                  <div className={styles.pcBottom}>
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
                  </div>
                </div>
                <Link href={x.href} className={styles.moreDetails}>
                  More Details
                </Link>
              </div>
            ))}
          </div>
          {pathname !== "/pricing" && (
            <div className={styles.btnContainer}>
              <Button
                text='More Details'
                href='/pricing'
                btnType='primaryii'
                arrow
              />
            </div>
          )}
        </div>
      </LayoutWrapper>
    </section>
  );
};

export default Pricing;
