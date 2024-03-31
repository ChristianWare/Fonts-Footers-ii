import LayoutWrapper from "../LayoutWrapper";
import styles from "./IndividualFeature.module.css";
import Image from "next/image";
import Img from "../../../public/images/house23.png";

const IndividualFeature = () => {
  const data = [
    {
      image: Img,
      title: "Feature Title Here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, quia porro. Porro, error dolore iure accusamus nulla nisi eaque1 quaerat magni adipisci minima pariatur ducimus. Debitis illo alias officia minus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, quia porro. Porro, error dolore iure accusamus nulla nisi eaque1 quaerat magni adipisci minima pariatur ducimus. Debitis illo alias officia minus.",
      whyImportant:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, quia porrt.",
    },
  ];
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        {data.map((x, index) => (
          <div key={index}>
            <div className={styles.content}>
              <div className={styles.left}>
                <div className={styles.imgContainer}>
                  <Image
                    src={x.image}
                    alt='image'
                    fill
                    className={styles.img}
                  />
                </div>
              </div>
              <div className={styles.right}>
                <h3 className={styles.title}>{x.title}</h3>
                <p className={styles.desc}>{x.description}</p>
                {/* <span>{x.whyImportant}</span> */}
              </div>
            </div>
          </div>
        ))}
      </LayoutWrapper>
    </section>
  );
};
export default IndividualFeature;
