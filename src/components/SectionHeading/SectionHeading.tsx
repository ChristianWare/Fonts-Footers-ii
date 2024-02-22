import { FC } from "react";
import styles from "./SectionHeading.module.css";
import ArrowCluster from "../ArrowCluster/ArrowCluster";

interface Props {
  text: string;
}

const SectionHeading: FC<Props> = ({ text }) => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <ArrowCluster />
      </div>
      <div className={styles.right}>
        <h2 className={styles.heading}>{text}</h2>
      </div>
    </div>
  );
};
export default SectionHeading;
