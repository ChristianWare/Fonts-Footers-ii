import { projects } from "@/lib/data";
import LayoutWrapper from "../LayoutWrapper";
import styles from "./Projects.module.css";
import Image from "next/image";
import ArrowCluster from "../ArrowCluster/ArrowCluster";
import Link from "next/link";
import Button from "../Button/Button";

const Projects = () => {
  return (
    <section>
      <LayoutWrapper>
        <div className={styles.top}>
          <h2 className={styles.heading}>
            Our Portfolio of Direct Booking projects
          </h2>
          <ArrowCluster />
        </div>
        {projects.map((x) => (
          <div key={x.title} className={styles.content}>
            <div className={styles.left}>
              <div className={styles.imgContainer}>
                <Image src={x.src} alt={x.title} fill className={styles.img} />
              </div>
            </div>
            <div className={styles.right}>
              <div className={styles.rightTop}>
                <h3 className={styles.title}>{x.title}</h3>
                <p className={styles.desc}>{x.description}</p>
              </div>
              <div className={styles.rightBottom}>
                <div className={styles.rbLeft}>
                  <Link href='/' className={styles.titleii}>
                    More Details
                  </Link>
                </div>
                <div className={styles.rbRight}>
                  <Link
                    href={x.href}
                    target='_blank'
                    className={styles.titleii}
                  >
                    Live Site
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className={styles.btnContainer}>
          <Button text='see all projects' href='/' btnType='primaryii' arrow />
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default Projects;
