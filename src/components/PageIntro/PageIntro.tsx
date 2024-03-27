import ArrowCluster from "../ArrowCluster/ArrowCluster";
import LayoutWrapper from "../LayoutWrapper";
import styles from "./PageIntro.module.css";
import Image, { StaticImageData } from "next/image";

interface Props {
  text: string;
  copy: string;
  span: string;
  center?: string;
  src?: StaticImageData;
}

const PageIntro = ({ text, copy, span, center = "", src }: Props) => {
  return (
    <section className={styles.container}>
      {src && (
        <>
          <div className={styles.imgOverlay}></div>
          <Image
            src={src}
            alt='Nier Transportation'
            fill
            className={styles.img}
            priority
            sizes='s100vw'
            quality={100}
          />
        </>
      )}
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
