"use client";

import styles from "./FalseButton.module.css";
import { motion } from "framer-motion";
import { fadeIn } from "../../../animation/variants";

interface Props {
  text: string;
  btnType: string;
  onClose?: () => void;
}

const FalseButton = ({ text, btnType, onClose }: Props) => {
  return (
    <motion.div
      variants={fadeIn("left", 0.3)}
      initial='hidden'
      whileInView={"show"}
      viewport={{ once: false, amount: 0.3 }}
      className={`${styles.btn} ${styles[btnType]}`}
      onClick={onClose}
    >
      {text}
    </motion.div>
  );
};
export default FalseButton;
