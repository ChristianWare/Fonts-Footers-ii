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
        <div className={styles.contentParent}>
          <div className={styles.top}>
            <h2 className={styles.heading}>Recent Work</h2>
            <ArrowCluster />
          </div>
          {projects.map((x) => (
            <div key={x.title} className={styles.content}>
              <div className={styles.left}>
                <div className={styles.imgContainer}>
                  <Image
                    src={x.src}
                    alt={x.title}
                    fill
                    className={styles.img}
                  />
                </div>
              </div>
              <div className={styles.right}>
                <div className={styles.rightTop}>
                  <h3 className={styles.title}>{x.title}</h3>
                  <p className={styles.desc}>{x.description}</p>
                </div>
                <div className={styles.rightBottom}>
                  <Link href='/' className={styles.rbLeft}>
                    More Details
                  </Link>
                  <Link
                    href={x.href}
                    target='_blank'
                    className={styles.rbRight}
                  >
                    Live Site
                  </Link>
                </div>
              </div>
            </div>
          ))}
          <div className={styles.btnContainer}>
            <Button
              text='see all projects'
              href='/'
              btnType='primaryii'
              arrow
            />
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default Projects;
