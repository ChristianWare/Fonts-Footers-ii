import LayoutWrapper from "../LayoutWrapper";
import styles from "./BusinessHero.module.css";
import Business from "../../../public/icons/business.svg";

const data = [
  {
    id: 1,
    feature: "Unique Design",
    desc: "Each website is uniquely designed to match your brand’s personality and vision.",
  },
  {
    id: 2,
    feature: "User-Centered Approach",
    desc: "Our designs prioritize user experience, ensuring your visitors can easily navigate and find the information they need.",
  },
  {
    id: 3,
    feature: "Attention-Grabbing Designs",
    desc: "Our business websites are designed to capture attention and provide a online experience.",
  },
  {
    id: 4,
    feature: "Custom and Mobile-Friendly",
    desc: "We offer everything from custom designs to mobile-friendly options to ensure your site stands out in the digital marketplace.",
  },
];

const BusinessHero = () => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <h1 className={styles.heading}>
              <span className={styles.em}>Professional business websites</span>{" "}
              to elevate your online presence{" "}
            </h1>
            <p className={styles.copy}>
              Custom-designed websites that showcase your business and attract
              your target audience.
            </p>
          </div>
          <div className={styles.right}>
            <Business className={styles.icon} />
          </div>
        </div>
        <div className={styles.bottom}>
          {data.map((x) => (
            <div key={x.id} className={styles.card}>
              <span className={styles.index}>{x.id}</span>
              <div>
                <h2 className={styles.feature}>{x.feature}</h2>
                <p className={styles.desc}>{x.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default BusinessHero;
