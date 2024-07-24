
import LayoutWrapper from "../LayoutWrapper";
import styles from "./BusinessSEO.module.css";

const data = [
  {
    id: 1,
    feature: "On-Page SEO",
    desc: "Optimized content, meta tags, and site structure to improve search engine visibility.",
  },
  {
    id: 2,
    feature: "Keyword Research",
    desc: "Thorough keyword research to target the terms your potential customers are searching for.",
  },
  {
    id: 3,
    feature: "Performance Monitoring",
    desc: "Regular performance reports to track your website’s SEO progress.",
  },
  {
    id: 4,
    feature: "Link Building",
    desc: "Strategic link-building campaigns to increase your website’s authority and improve search engine rankings.",
  },
];


const BusinessSEO = () => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        {/* <h2>Ecomm Integrations</h2> */}
        <div className={styles.top}>
            <h2 className={styles.heading}>Search Engine Optimization (SEO)</h2>
            <p className={styles.copy}>
              Our websites are built with SEO best practices to ensure that your
              business ranks well in search engine results, driving organic
              traffic to your site.
            </p>
        </div>
        <div className={styles.bottom}>
          {data.map((x) => (
            <div key={x.id} className={styles.card}>
              <span className={styles.index}>{x.id}</span>
              <div>
                <h3 className={styles.feature}>{x.feature}</h3>
                <p className={styles.desc}>{x.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default BusinessSEO;
