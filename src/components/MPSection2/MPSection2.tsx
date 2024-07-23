import Image, { StaticImageData } from "next/image";
import LayoutWrapper from "../LayoutWrapper";
import styles from "./MPSection2.module.css";
import { FC } from "react";

interface Props {
  heading: string;
  mapData: any;
  src: StaticImageData;
  flip?: string;
  bgColor?: string;
  textColor?: string;
}

const MPSection2: FC<Props> = ({
  bgColor = "",
  textColor = "",
  heading,
  mapData,
  src,
  flip = "",
}) => {
  return (
    <section className={styles[bgColor]}>
      <LayoutWrapper>
        <div className={`${styles.content} ${styles[flip]}`}>
          <div className={styles.left}>
            <div className={styles.imgContainer}>
              <Image src={src} alt='image' fill className={styles.img} />
            </div>
          </div>
          <div className={`${styles.right} ${styles[flip]}`}>
            <h2 className={`${styles.heading} ${styles[textColor]}`}>
              {heading}
            </h2>
            {mapData.map((x: any) => (
              <div key={x.id}>
                {x.h3 && <h3 className={`${styles[textColor]}`}>{x.h3}</h3>}
                {x.items && (
                  <ul>
                    {x.items.map((y: any) => (
                      <li key={y.id} className={styles[textColor]}>
                        {y.item}
                      </li>
                    ))}
                  </ul>
                )}
                <p className={`${styles.copy} ${styles[textColor]}`}>
                  {x.copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};

export default MPSection2;
