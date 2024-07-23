import LayoutWrapper from "../LayoutWrapper";
import styles from "./EcommUSP.module.css";

const services = [
  {
    id: 82,
    processName: "",
    processDescription: "",
  },
  {
    id: 83,
    processName: "Expert Team",
    processDescription:
      "Our team of skilled designers, developers, and marketers bring years of experience and a passion for e-commerce. ",
  },
  {
    id: 85,
    processName: "Client-Centric Approach",
    processDescription:
      "We prioritize your business goals and tailor our solutions to meet your specific needs.",
  },
  {
    id: 86,
    processName: "Innovative Solutions",
    processDescription:
      "We stay ahead of industry trends to provide cutting-edge solutions that give you a competitive edge.",
  },
  {
    id: 87,
    processName: "Proven Results",
    processDescription:
      "Our portfolio of successful e-commerce projects speaks for itself. We help businesses like yours achieve their online sales goals.",
  },
] as const;

const EcommUSP = () => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.right}>
            <h2 className={styles.heading}>
              Why Choose Us for Your E-commerce Needs?
            </h2>
            <p className={styles.copy}>
              Partnering with Fonts & Footers means working with a team
              dedicated to your success. Here’s why you should choose us for
              your e-commerce website development:
            </p>
          </div>
          <div className={styles.left}>
            {services.map((x) => (
              <div key={x.id} className={styles.processContainer}>
                <div className={styles.processTop}></div>
                <div className={styles.processBottom}>
                  {x.processName.length >= 1 && (
                    <h3 className={styles.processName}>{x.processName}</h3>
                  )}

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

export default EcommUSP;
