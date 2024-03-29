import Image from "next/image";
import LayoutWrapper from "../LayoutWrapper";
import styles from "./LongTermRelationships.module.css";
import Img from "../../../public/images/house22.png";

const LongTermRelationships = () => {
  const data = [
    {
      title: "Targeted Advertising",
      description:
        "Utilize data analytics and guest insights to create targeted advertising campaigns. Segment your audience based on demographics, preferences, and booking behaviors to deliver personalized messages that resonate with potential guests.",
    },
    {
      title: "Content Marketing",
      description:
        "Create compelling content such as blog posts, videos, and guides related to your destination or property. Share valuable information, travel tips, and local insights to engage visitors and establish your expertise in the industry.",
    },
    {
      title: "Email Marketing",
      description:
        "Build an email subscriber list through direct bookings and use email marketing campaigns to nurture relationships with past guests and prospects. Send personalized offers, newsletters, and updates to encourage repeat bookings and drive revenue.",
    },
  ] as const; 

  return (
    <section className={styles.container}>
      <div className={styles.imgOverlay}></div>
      <Image
        src={Img}
        alt='image'
        fill
        className={styles.img}
        priority
        sizes='s100vw'
        quality={100}
      />
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.top}>
            <h2 className={styles.heading}>Long Term Relationships</h2>
          </div>
          <div className={styles.bottom}>
            {data.map((x, index) => (
              <div key={index} className={styles.card}>
                <h3 className={styles.title}>{x.title}</h3>
                <p className={styles.desc}>{x.description}</p>
              </div>
            ))}
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default LongTermRelationships;
