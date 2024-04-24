import LayoutWrapper from "../LayoutWrapper";
import styles from "./GlossarySlugIntro.module.css";
import { FC } from "react";

interface Props {
  heading: string;
  description: string;
  date: string;
  category: string;
}

const GlossarySlugIntro: FC<Props> = ({ heading, description }) => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <h1 className={styles.heading}>{heading}</h1>
            <p className={styles.copy}>{description}</p>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default GlossarySlugIntro;
