import LayoutWrapper from "../LayoutWrapper";
import styles from "./Values.module.css";
import Image from "next/image";
import House from "../../../public/icons/house.svg";
import Img1 from "../../../public/images/house17.png";
import Img2 from "../../../public/images/aboutHouse.png";

const Values = () => {
  const data = [
    {
      title: "Client Focus",
      description:
        "Our values act as a set of guiding principles and fundamental beliefs that influence the behaviors we demonstrate, which shape the decisions we collectively make as a team.",
      features: [
        {
          icon: <House width={50} height={50} className={styles.icon} />,
          detail: "Our values act as a set of guiding principles",
        },
        {
          icon: <House width={50} height={50} className={styles.icon} />,
          detail: "Our values act as a set of guiding principles",
        },
      ],
      src: Img1,
    },
    {
      title: "Client Focus",
      description:
        "Our values act as a set of guiding principles and fundamental beliefs that influence the behaviors we demonstrate, which shape the decisions we collectively make as a team.",
      features: [
        {
          icon: <House width={50} height={50} className={styles.icon} />,
          detail: "Our values act as a set of guiding principles",
        },
        {
          icon: <House width={50} height={50} className={styles.icon} />,
          detail: "Our values act as a set of guiding principles",
        },
      ],
      src: Img2,
    },
  ];
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.top}>
          <span className={styles.span}>CORE PRINCIPLES AND BELIEFS</span>
          <h2 className={styles.heading}>Our Values</h2>
          <p className={styles.topCopy}>
            Our values act as a set of guiding principles and fundamental
            beliefs that influence the behaviors we demonstrate, which shape the
            decisions we collectively make as a team.
          </p>
        </div>
        <div className={styles.bottom}>
          {data.map((x, index) => (
            <div key={index} className={styles.box}>
              <div className={styles.left}>
                <h3>{x.title}</h3>
                <p>{x.description}</p>
                {x.features.map((y, index) => (
                  <div key={index} className={styles.featuresBox}>
                    {y.icon}
                    <p className={styles.detail}>{y.detail}</p>
                  </div>
                ))}
              </div>
              <div className={styles.right}>
                <div className={styles.imgContainer}>
                  <Image src={x.src} alt='image' fill className={styles.img} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default Values;
