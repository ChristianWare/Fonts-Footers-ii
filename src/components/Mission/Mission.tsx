import LayoutWrapper from "../LayoutWrapper";
import styles from "./Mission.module.css";
import House from "../../../public/icons/house.svg";

const Mission = () => {
  const data = [
    {
      icon: <House width={50} height={50} className={styles.icon} />,
      title: "Analysis",
      description:
        "World productive that buy-in driver's. Enable decisions dangerous rundown.",
    },
    {
      icon: <House width={50} height={50} className={styles.icon} />,
      title: "Research",
      description:
        "World productive that buy-in driver's. Enable decisions dangerous rundown.",
    },
    {
      icon: <House width={50} height={50} className={styles.icon} />,
      title: "Resource",
      description:
        "World productive that buy-in driver's. Enable decisions dangerous rundown.",
    },
    {
      icon: <House width={50} height={50} className={styles.icon} />,
      title: "Management",
      description:
        "World productive that buy-in driver's. Enable decisions dangerous rundown.",
    },
  ];
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.top}>
          <span>OUR MISSION</span>
          <h2 className={styles.heading}>
            Your business will be transformed into a memorable brand when you
            work with us.
          </h2>
        </div>
        <div className={styles.bottom}>
          <div className={styles.left}>
            <span className={styles.span}>PROCESS OF WORK</span>
            <h3 className={styles.headingii}>
              Well make your brand memorable.
            </h3>
            <p className={styles.leftCopy}>
              World productive that buy-in drivers. Enable decisions dangerous
              rundown opportunity files.
            </p>
          </div>
          <div className={styles.right}>
            {data.map((x, index) => (
              <div key={index} className={styles.card}>
                {x.icon}
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
export default Mission;
