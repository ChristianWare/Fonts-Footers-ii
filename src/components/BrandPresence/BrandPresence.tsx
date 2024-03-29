import LayoutWrapper from "../LayoutWrapper";
import styles from "./BrandPresence.module.css";
import House from "../../../public/icons/house.svg";

const BrandPresence = () => {
  const data = [
    {
      icon: <House width={30} height={30} className={styles.icon} />,
      title: "Branding Control",
      description:
        "With a direct booking website, you have complete control over the branding elements, including logos, colors, fonts, and messaging. This ensures consistency with the overall brand identity and creates a cohesive experience for visitors.",
    },
    {
      icon: <House width={30} height={30} className={styles.icon} />,
      title: "Unique Content",
      description:
        "Owners can showcase their property's unique features, amenities, and attractions through compelling visual content, descriptions, and virtual tours. This helps differentiate the brand from competitors and highlights the property's value proposition.",
    },
    {
      icon: <House width={30} height={30} className={styles.icon} />,
      title: "Personalization",
      description:
        "Direct booking websites enable personalized communication and experiences for guests. Owners can greet visitors by name, recommend tailored recommendations based on their preferences, and offer customized packages or promotions, enhancing brand loyalty and satisfaction.",
    },
    {
      icon: "",
      title: "",
      description: "",
    },
    {
      icon: <House width={30} height={30} className={styles.icon} />,
      title: "Guest Reviews",
      description:
        "Integrating guest reviews and testimonials on the website provides social proof and builds credibility. Positive reviews from satisfied guests enhance trust and encourage new visitors to book directly with confidence.",
    },
    {
      icon: <House width={30} height={30} className={styles.icon} />,
      title: "Online Visibility",
      description:
        "Optimizing the direct booking website for search engines improves online visibility and attracts organic traffic. By targeting relevant keywords, creating valuable content, and implementing SEO best practices, owners can increase brand exposure and reach a broader audience.",
    },
  ];
  return (
    <section>
      <LayoutWrapper>
        <div className={styles.top}>
          <h2 className={styles.heading}>Brand Presence</h2>
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
