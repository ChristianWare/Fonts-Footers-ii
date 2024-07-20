import styles from "./Usp.module.css";
import Arrow from "../../../public/icons/arrow2.svg";
import LayoutWrapper from "../LayoutWrapper";
import ScrollHorizontalText from "../ScrollHorizontalText/ScrollHorizontalText";

const data = [
  {
    id: 1,
    usp: "Expert Team",
    desc: "Skilled professionals with a passion for web design and development.",
    icon: <Arrow className={styles.icon} width={60} height={60} />,
  },
  {
    id: 2,
    usp: "Personalized Attention",
    desc: "Building strong relationships with clients to understand their business, goals, and audience.",
    icon: <Arrow className={styles.icon} width={60} height={60} />,
  },
  {
    id: 3,
    usp: "Innovative Solutions",
    desc: "Combining the latest technology with creative ideas for top-notch results.",
    icon: <Arrow className={styles.icon} width={60} height={60} />,
  },
  {
    id: 4,
    usp: "Proven Track Record",
    desc: "A portfolio of successful projects and satisfied clients.",
    icon: <Arrow className={styles.icon} width={60} height={60} />,
  },
];

const Usp = () => {
  return (
    <>
      <ScrollHorizontalText text='What Choose Us?' bottomBorder={true} />
      <section className={styles.container}>
        <LayoutWrapper>
          <div className={styles.content}>
            <div className={styles.top}>
              <h2 className={styles.heading}>Why Choose Us?</h2>
              <p className={styles.copy}>What sets us apart is our...</p>
            </div>
            <div className={styles.bottom}>
              {data.map((x) => (
                <div key={x.id} className={styles.card}>
                  <div>
                    <h3 className={styles.usp}>{x.usp}</h3>
                    <p className={styles.desc}>{x.desc}</p>
                  </div>
                  {x.icon}
                </div>
              ))}
            </div>
          </div>
        </LayoutWrapper>
      </section>
      <ScrollHorizontalText text='What Choose Us?' bottomBorder={false} />
    </>
  );
};
export default Usp;
