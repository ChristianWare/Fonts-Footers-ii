import LayoutWrapper from "../LayoutWrapper";
import styles from "./Processii.module.css";
import { process } from "@/lib/data";
import Discover from "../../../public/images/discover.png";
import Image from "next/image";

const Processii = () => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.top}>
          <h2 className={styles.heading}>
            Our team will transform your business into a memorable brand.
          </h2>
        </div>
        <div className={styles.bottom}>
          <div>
            {process.map((x, index) => (
              <div key={index} className={styles.mapBox}>
                <div className={styles.left}>
                  <div className={styles.imgContainer}>
                    <Image
                      src={Discover}
                      alt='discover'
                      fill
                      className={styles.img}
                    />
                  </div>
                </div>
                <div className={styles.right}>
                  <h3 className={styles.processName}>{x.processName}</h3>
                  <p className={styles.processDescription}>
                    {x.processDescription}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default Processii;
