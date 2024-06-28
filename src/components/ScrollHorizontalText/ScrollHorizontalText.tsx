import styles from "./ScrollHorizontalText.module.css";
import Arrow from "../../../public/icons/arrow.svg";

interface Props {
  text: string;
  bottomBorder?: boolean;
}

const ScrollHorizontalText = ({ text, bottomBorder = false }: Props) => {
  const textWithArrows = (
    <>
      {text}{" "}
      <span>
        <Arrow className={styles.icon2} />
      </span>
    </>
  );

  return (
    <div
      className={`${styles.slider} ${bottomBorder ? styles.bottomBorder : ""}`}
    >
      <div className={styles.track}>
        {[...Array(20)].map((_, index) => (
          <h2 key={index} className={styles.text}>
            {textWithArrows}
            {textWithArrows}
            {textWithArrows}
            {textWithArrows}
          </h2>
        ))}
      </div>
    </div>
  );
};

export default ScrollHorizontalText;
