"use client";

import { pricing } from "@/lib/data";
import LayoutWrapper from "../LayoutWrapper";
import styles from "./Pricing.module.css";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface Props {
  bgColor?: string;
  borderTop?: string;
}

const Pricing = ({ bgColor = "", borderTop = "" }: Props) => {
  const [isMonthly, setIsMonthly] = useState(false);

  const pathname = usePathname();

  const isSpecificServicePage =
    pathname === "/services/business-websites" ||
    pathname === "/services/ecommerce-stores" ||
    pathname === "/services/booking-platforms";

  return (
    <section
      className={`${styles.container} ${styles[bgColor]} ${styles[borderTop]}`}
    >
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.top}>
            {pathname === "/pricing" ? (
              <h1 className={`${styles.headingh1} h2v3`}>Pricing</h1>
            ) : (
              <h2 className={`${styles.heading} h2v3`}>Pricing</h2>
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
                  opacity: isSpecificServicePage
                    ? pathname === x.href
                      ? 1
                      : 0.5
                    : 1,
                }}
              >
                <div className={styles.contentParent}>
                  <div className={styles.pcTop}>
                    <h3 className={styles.planName}>{x.plan}</h3>
                  </div>
                  <div className={styles.pcBottom}>
                    <ul className={styles.features}>
                      {x.includes.map((y) => (
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
                <Link href='/' className={styles.moreDetails}>
                  More Details
                </Link>
              </div>
            ))}
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};

export default Pricing;
