import Image from "next/image";
import LayoutWrapper from "../LayoutWrapper";
import styles from "./BusinessLeadGen.module.css";
import Author from "../../../public/images/elite.png";

const BusinessLeadGen = () => {
  const data = [
    {
      title: "Contact Forms",
      description:
        "Custom contact forms to capture visitor information and inquiries.",
    },
    {
      title: "Call-to-Action Buttons",
      description: "Strategically placed CTAs to encourage visitor engagement.",
    },
    {
      title: "Landing Pages",
      description:
        "Dedicated landing pages designed to convert traffic into leads.",
    },
    {
      id: 6,
      title: "Social Media Integration",
      description: "Broaden your reach and attracting more leads.",
    },
  ];
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.top}>
          <h2 className={styles.heading}>
            Effective Contact and Lead Generation
          </h2>
        </div>
        <div className={styles.bottom}>
          <div className={styles.left}>
            <div className={styles.imgOverlay}></div>
            <Image
              src={Author}
              alt='image'
              fill
              className={styles.img}
              priority
              sizes='(max-width: 768px) 50vw, (max-width: 1200px) 100vw'
              quality={100}
            />
            <div className={styles.z3}>
              <p className={styles.leftCopy}>
                We design websites that not only inform but also convert
                visitors into leads, helping you grow your business.
              </p>
            </div>
          </div>
          <div className={styles.right}>
            {data.map((x, index) => (
              <div
                // variants={fadeIn(index % 2 === 0 ? "up" : "left", 0.3)}
                // initial='hidden'
                // whileInView={"show"}
                // viewport={{ once: false, amount: 0.3 }}
                key={index}
                className={styles.card}
              >
                <h4 className={styles.title}>{x.title}</h4>
                <p className={styles.description}>{x.description}</p>
              </div>
            ))}
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};

export default BusinessLeadGen;
