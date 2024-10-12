"use client";

import { projects } from "@/lib/data";
import LayoutWrapper from "../LayoutWrapper";
import styles from "./Projects.module.css";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface Project {
  src: StaticImageData;
  title: string;
  description: string;
  href: string;
  github?: string;
  techStack?: { title: string }[];
}

const Projects = () => {
  return (
    <section className={styles.container} id='projects'>
      <LayoutWrapper>
        <h2 className={`${styles.heading} h2v2`}>Projects</h2>
        <div className={styles.dataContainer}>
          {projects.map((x, index) => (
            <div key={index} className={styles.parent}>
              <div className={styles.content}>
                <div className={styles.left}>
                  <h3 className={styles.titleMobile}>{x.title}</h3>
                  <div className={styles.imgContainer}>
                    <Image src={x.src} alt='' fill className={styles.img} />
                  </div>
                </div>
                <div className={styles.right}>
                  <h3 className={styles.title}>{x.title}</h3>
                  <p className={styles.desc}>{x.description}</p>
                  <br />
                  <span className={styles.span}>Features:</span>
                  <ul className={styles.box}>
                    {x.techStack.map((y: any, index: number) => (
                      <li key={index}>
                        <h4 className={styles.reasonnTitle}>{y.title}</h4>
                      </li>
                    ))}
                  </ul>
                  <div className={styles.links}>
                    <Link href={x.href} target='_blank' className={styles.link}>
                      Live Site <span className={styles.arrow}>→</span>
                    </Link>
                    <Link href={x.href} target='_blank' className={styles.link}>
                      More details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </LayoutWrapper>
    </section>
  );
};

export default Projects;
