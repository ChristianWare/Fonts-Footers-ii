import { projects } from "@/lib/data";
import LayoutWrapper from "../LayoutWrapper";
import styles from "./Projects.module.css";
import Image from "next/image";
import ArrowCluster from "../ArrowCluster/ArrowCluster";
import Button from "../Button/Button";

const Projects = () => {
  return (
    <section>
      <LayoutWrapper>
        <div className={styles.top}>
          <h2 className={styles.heading}>
            Our Portfolio of Direct Booking projects
          </h2>
          <div className={styles.arrowContainwr}>
            <ArrowCluster />
          </div>
        </div>
        <div className={styles.bottom}>
          {projects.map((x) => (
            <div key={x.title} className={styles.contianer}>
              <h3 className={styles.projectTitle}>{x.title}</h3>
              <div className={styles.stats}>
                <div className={styles.imgContainer}>
                  <Image
                    src={x.src}
                    alt={x.title}
                    fill
                    className={styles.img}
                  />
                </div>
                <div className={styles.figures}>
                  {x.status.map((y) => (
                    <div key={y.id} className={styles.box}>
                      <h4 className={styles.statTitle}>{y.statTitle}</h4>
                      <p>{y.statDetails}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className={styles.details}>
                <div className={styles.detailsLeft}>
                  <h4 className={styles.statTitle}>The Client</h4>
                  <p>{x.client}</p>
                </div>
                <div className={styles.detailsRight}>
                  <h4 className={styles.statTitle}>The Project</h4>
                  <p>{x.description}</p>
                </div>
              </div>
              {/* <div className={styles.detailsBottom}>
                <div className={styles.detailsRight}>
                  <h4 className={styles.statTitle}>The Result</h4>
                  <p>{x.description}</p>
                </div>
              </div> */}
              <div className={styles.btnContainer}>
                <Button text='live site' href='/' btnType='primary' arrow />
                <Button
                  text='more details'
                  href='/'
                  btnType='secondary'
                  arrow
                />
              </div>
            </div>
          ))}
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default Projects;
