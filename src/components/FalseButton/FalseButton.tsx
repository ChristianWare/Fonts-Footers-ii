import styles from "./FalseButton.module.css";

interface Props {
  text: string;
  btnType: string;
}

const FalseButton = ({ text, btnType }: Props) => {
  return <div className={`${styles.btn} ${styles[btnType]}`}>{text}</div>;
};
export default FalseButton;
