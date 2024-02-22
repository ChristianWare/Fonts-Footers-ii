import LayoutWrapper from "../LayoutWrapper";
import styles from "./Features.module.css";
import { features } from "@/lib/data";
import Image from "next/image";
import Button from "../Button/Button";
import House2 from "../../../public/images/house2.png";


const Features = () => {
  return (
    <section>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.lTop}>
              <h2 className={styles.heading}>
                Features of our direct booking websites
              </h2>
              {features.slice(0, 4).map((x, index) => (
                <div key={index} className={styles.featureContainer}>
                  <div className={styles.iconContainer}>
                    <Image src={x.icon} alt='icon' width={30} height={30} />
                  </div>
                  <div className={styles.box}>
                    <h3 className={styles.service}>{x.service}</h3>
                    <p className={styles.description}>{x.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.left}>
            <div className={styles.box1}>
              <Image
                src={House2}
                alt='Direct Booking Website'
                fill
                className={styles.img}
              />
              
            </div>
            <div className={styles.box2}>
              <h4>Lorem ipsum dolor sit amet earum illo</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo necessitatibus voluptatem perferendis aperiam aliquid
                dolor optio harum obcaecati nesciunt nihil aut earum illo ipsum
                nobis quo cum eveniet quasi tempore, vero sapiente quos beatae
                provident accusantium similique.
              </p>
              <div className={styles.btnContainer}>
                <Button
                  text=' all features'
                  href='/features'
                  btnType='primary'
                />
              </div>
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default Features;
