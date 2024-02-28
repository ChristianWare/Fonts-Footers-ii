import ArrowCluster from "../ArrowCluster/ArrowCluster";
import LayoutWrapper from "../LayoutWrapper";
import styles from "./PageIntro.module.css";

interface Props {
  text: string;
  copy: string;
  span: string;
  center?: string;
}

const PageIntro = ({ text, copy, span, center = "" }: Props) => {
  return (
    <section>
      <LayoutWrapper>
        <div className={`${styles.content} ${styles[center]}`}>
          <div className={styles.arrowContainer}>
            <ArrowCluster />
          </div>
          <h1 className={styles.heading}>
            {text}
            <span className={styles.span}>
              {" "}
              <br /> {span}
            </span>
          </h1>
          <p className={styles.copy}>{copy}</p>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default PageIntro;
