import styles from "./ArrowCluster.module.css";
import Arrow from "../../../public/icons/arrow.svg";

const ArrowCluster = () => {
  return (
    <div className={styles.arrowContainer}>
      <Arrow className={styles.icon} />
      <Arrow className={styles.icon} />
      <Arrow className={styles.icon} />
    </div>
  );
};
export default ArrowCluster;
