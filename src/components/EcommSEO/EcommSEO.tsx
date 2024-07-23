import Image from "next/image";
import LayoutWrapper from "../LayoutWrapper";
import styles from "./EcommSEO.module.css";
import Img from "../../../public/images/mission.png";

const EcommSEO = () => {
  const data = [
    {
      title: "On-Page SEO",
      description:
        "We optimize your website’s content, meta tags, and structure to improve search engine rankings.",
    },
    {
      title: "Content Marketing",
      description:
        "Our team creates engaging content that attracts and retains customers, helping to build your brand’s online presence.",
    },
    {
      title: "Social Media Integration",
      description:
        "We integrate social media platforms to enhance your marketing efforts and reach a wider audience.",
    },
  ] as const;
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.imgContainer}>
              <Image src={Img} alt='image' fill className={styles.img} />
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.rightTop}>
              <div className={styles.box}>
                <h2 className={styles.heading}>SEO & Digital Marketing</h2>
                <p className={styles.copy}>
                  Our SEO and digital marketing services ensure that your
                  e-commerce website attracts and retains customers. We
                  implement strategies that improve your site’s visibility in
                  search engine results, drive organic traffic, and increase
                  sales.
                </p>
              </div>
              <div className={styles.imgContainerii}>
                <Image src={Img} alt='image' fill className={styles.img} />
              </div>
            </div>
            <div className={styles.rightBottom}>
              {data.map((x, index) => (
                <div key={index} className={styles.card}>
                  <h3 className={styles.title}>{x.title}</h3>
                  <p className={styles.desc}>{x.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default EcommSEO;
