import styles from "./RectangleText.module.css";
import { FC } from "react";

interface Props {
  text: string;
}

const RectangleText: FC<Props> = ({ text }) => {
  return (
    <div className={styles.container}>
      <h2>
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
      </h2>
    </div>
  );
};
export default RectangleText;
