"use client";

import LayoutWrapper from "../LayoutWrapper";
import styles from "./BrandPresence.module.css";
import Unique from "../../../public/icons/unique.svg";
import Brand from "../../../public/icons/brand.svg";
import Personalization from "../../../public/icons/personalization.svg";
import Review from "../../../public/icons/reviewii.svg";
import OnlineVis from "../../../public/icons/onlineVis.svg";

const BrandPresence = () => {
  const data = [
    {
      icon: <Brand width={30} height={30} className={styles.icon} />,
      title: "Branding Control",
      description:
        "You have complete control over the branding elements - logos, colors, and messaging - ensuring consistency with your brand identity.",
    },
    {
      icon: <Unique width={30} height={30} className={styles.icon} />,
      title: "Unique Content",
      description:
        "Showcase you property's unique features, amenities, and attractions through compelling visual content, descriptions, and virtual tours.",
    },
    {
      icon: <Personalization width={30} height={30} className={styles.icon} />,
      title: "Personalization",
      description:
        "Greet visitors by name, and offer customized packages or promotions, enhancing brand loyalty and satisfaction.",
    },
    {
      icon: "",
      title: "",
      description: "",
    },
    {
      icon: <Review width={30} height={30} className={styles.icon} />,
      title: "Guest Reviews",
      description:
        "This provides social proof and builds credibility, enhancing trust and encouraging new visitors to book directly with confidence.",
    },
    {
      icon: <OnlineVis width={30} height={30} className={styles.icon} />,
      title: "Online Visibility",
      description:
        "Improve your online visibility and attract organic traffic with SEO. Target relevant keywords to attract more visitors.",
    },
  ];
  return (
    <section>
      <LayoutWrapper>
        <div className={styles.top}>
          <h2 className={styles.heading}>
            <span className='span2'>Brand</span>{" "}
            <span className='span1'> Presence</span>
          </h2>
          <p className={styles.copy}>
            A well-designed and strategically optimized direct booking website
            serves as a powerful tool for building and strengthening brand
            presence, attracting guests, and fostering long-term brand loyalty
            in the vacation rental industry.
          </p>
        </div>
        <div className={styles.bottom}>
          {data.map((x, index) => (
            <div className={styles.card} key={index}>
              {x.icon && <div className={styles.iconContainer}>{x.icon}</div>}
              <h3 className={styles.title}>{x.title}</h3>
              <p className={styles.desc}>{x.description}</p>
            </div>
          ))}
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default BrandPresence;
