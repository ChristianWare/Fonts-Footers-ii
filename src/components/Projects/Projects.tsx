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

interface Project {
  title: string;
  src: string;
  description: string;
  href: string;
  moreDetails: string;
}

const Projects = () => {
  const container = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();

  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.contentParent} ref={container}>
          <div className={styles.top}>
            {pathname === "/" && <h2 className={styles.heading}>Projects</h2>}
          </div>
          <div className={styles.mapContainer}>
            {projects
              .slice(0, pathname === "/" ? 3 : projects.length)
              .map((x: any, index: number) => (
                <article key={index} className={styles.card}>
                  <div className={styles.imgContainer}>
                    <Image src={x.src} fill alt='' className={styles.img} />
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
