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
          <div key={index} className={styles.text}>
            {textWithArrows}
            {textWithArrows}
            {textWithArrows}
            {textWithArrows}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollHorizontalText;
