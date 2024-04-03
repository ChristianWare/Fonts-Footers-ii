import ArrowCluster from "../ArrowCluster/ArrowCluster";
import LayoutWrapper from "../LayoutWrapper";
import styles from "./PageIntro.module.css";
import Image, { StaticImageData } from "next/image";

interface Props {
  h1Color?: string;
  h1OutlineColor?: string;
  text: string;
  copy?: string;
  copyColor?: string;
  span?: string;
  orientation?: string;
  src?: StaticImageData;
}

const PageIntro = ({
  h1Color = "",
  h1OutlineColor = "",
  text,
  copy,
  copyColor = "",
  span,
  orientation = "",
  src,
}: Props) => {
  return (
    <section className={styles.container}>
      {src && (
        <>
          <div className={styles.imgOverlay}></div>
          <Image
            src={src}
            alt='image'
            fill
            className={styles.img}
            priority
            sizes='s100vw'
            quality={100}
          />
        </>
      )}
      <LayoutWrapper>
        <div className={`${styles.content} ${styles[orientation]}`}>
          <div className={styles.arrowContainer}>
            <ArrowCluster />
          </div>
          <h1 className={`${styles.heading} ${styles[h1Color]}`}>
            {text}
            <span className={`${styles.span} ${styles[h1OutlineColor]}`}>
              {" "}
              <br /> {span}
            </span>
          </h1>
          <p className={`${styles.copy} ${styles[copyColor]}`}>{copy}</p>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default PageIntro;
