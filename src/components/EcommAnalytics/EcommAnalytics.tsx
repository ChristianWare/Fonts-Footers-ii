import LayoutWrapper from "../LayoutWrapper";
import styles from "./EcommAnalytics.module.css";

const data = [
  {
    heading: "Performance Metrics",
    description:
      "Track key performance indicators (KPIs) such as sales, conversion rates, and customer behavior.",
  },
  {
    heading: "Custom Reports",
    description:
      "Receive custom reports that highlight important trends and opportunities for growth.",
  },
  {
    heading: "Custom Reports",
    description:
      "Use insights from our analytics to refine your marketing strategies and improve your online store.",
  },
] as const;

const EcommAnalytics = () => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.top}>
            <h2 className={styles.heading}>
              E-commerce Analytics and Reporting
            </h2>
            <p className={styles.copy}>
              We provide comprehensive analytics and reporting to help you
              understand your e-commerce performance and make data-driven
              decisions.
            </p>
          </div>
          <div className={styles.bottom}>
            {data.map((x, i) => (
              <div key={i} className={styles.benefitContainer}>
                <div className={styles.headingContainer}>
                  <h3 className={styles.heading2}>{x.heading}</h3>
                </div>
                <p className={styles.description}>{x.description}</p>
              </div>
            ))}
          </div>
          {/* <div className={styles.btnContainer}>
            <Button
              text='see all benefits'
              href='/benefits'
              btnType='primaryii'
              arrow
            />
          </div> */}
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default EcommAnalytics;
