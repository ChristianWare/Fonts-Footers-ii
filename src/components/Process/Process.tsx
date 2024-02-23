import LayoutWrapper from "../LayoutWrapper";
import styles from "./Process.module.css";
import { process } from "@/lib/data";
import Image from "next/image";
import House from "../../../public/icons/house.svg";

const Process = () => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            {process.map((x, index) => (
              <div key={x.id} className={styles.processContainer}>
                {x.icon && (
                  <div className={styles.houseContainer}>
                    <House className={styles.icon} />
                  </div>
                )}
                <h3 className={styles.processName}>
                  {x.processName.length >= 1 ? index + "." : ""} {x.processName}
                </h3>
                <p className={styles.processDescription}>
                  {x.processDescription}
                </p>
              </div>
            ))}
          </div>
          <div className={styles.right}>
            <h2 className={styles.heading}>
              Our Process for building direct booking websites
            </h2>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default Process;
