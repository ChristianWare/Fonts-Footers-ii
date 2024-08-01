"use client";

import { projects } from "@/lib/data";
import LayoutWrapper from "../LayoutWrapper";
import styles from "./Projects.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";

import { motion, useScroll, useTransform } from "framer-motion";
import Button from "../Button/Button";
import { usePathname } from "next/navigation";

interface Props {
  borderBottom?: string;
}

const Projects = ({ borderBottom = "" }: Props) => {
  const container = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();

  return (
    <section className={`${styles.container} ${styles[borderBottom]}`}>
      <LayoutWrapper>
        <div className={styles.contentParent} ref={container}>
          <div className={styles.top}>
            {pathname === "/" && (
              <h2 className={`${styles.heading} h2v3`}>Projects</h2>
            )}
          </div>
          <div className={styles.mapContainer}>
            {projects
              .slice(0, pathname === "/" ? 3 : projects.length)
              .map((x: any, index: number) => (
                <article key={index} className={styles.article}>
                  <div className={styles.miscContainer}>
                    <svg
                      width='0'
                      height='0'
                      xmlns='http://www.w3.org/2000/svg'
                      version='1.1'
                    >
                      <defs>
                        <filter id='goo'>
                          <feGaussianBlur
                            in='SourceGraphic'
                            stdDeviation='5'
                            result='blur'
                          />
                          <feColorMatrix
                            in='blur'
                            mode='matrix'
                            values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9'
                            result='goo'
                          />
                          <feComposite
                            in='SourceGraphic'
                            in2='goo'
                            operator='atop'
                          />
                        </filter>
                      </defs>
                    </svg>
                    <div className={styles.imgContainer}>
                      <Image
                        src={x.src}
                        alt=''
                        layout='fill'
                        objectFit='cover'
                        className={styles.img}
                      />
                    </div>
                  </div>
                  <div className={styles.bottomCard}>
                    <h3 className={styles.title}>{x.title}</h3>
                    <p className={styles.desc}>{x.description}</p>
                    <Link href={x.href} className={styles.btn} target='_blank'>
                      Live Site
                    </Link>
                  </div>
                </article>
              ))}
          </div>

          {pathname === "/" && (
            <div className={styles.btnContainer}>
              <Button
                btnType='primaryii'
                href='/projects'
                text='All Projects'
                arrow
              />
            </div>
          )}
        </div>
      </LayoutWrapper>
    </section>
  );
};

export default Projects;
