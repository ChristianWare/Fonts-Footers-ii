"use client";

import { projects } from "@/lib/data";
import LayoutWrapper from "../LayoutWrapper";
import styles from "./Projects.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import Modal from "../Modal/Modal";
import FalseButton from "../FalseButton/FalseButton";
import { motion, useScroll, useTransform } from "framer-motion";
import Experienceii from "../Experienceii/Experienceii";
import Button from "../Button/Button";
import { usePathname } from "next/navigation";

interface Project {
  title: string;
  src: string;
  description: string;
  href: string;
  moreDetails: string;
}

interface ContentItemProps {
  project: Project;
  index: number;
  scrollYProgress: any;
  isModalOpen: boolean;
  setIsModalOpen: (isOpen: boolean) => void;
}

const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const container = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

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
              .map((project: any, index: number) => (
                <ContentItem
                  key={project.title}
                  project={project}
                  index={index}
                  scrollYProgress={scrollYProgress}
                  isModalOpen={isModalOpen}
                  setIsModalOpen={setIsModalOpen}
                />
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

const ContentItem = ({
  project,
  isModalOpen,
  setIsModalOpen,
}: ContentItemProps) => {
  return (
    <div className={styles.content}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image
            src={project.src}
            alt={project.title}
            fill
            className={styles.img}
          />
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.rightTop}>
          <div className={styles.falseBtnContainer1}>
            <FalseButton
              text='Landing Page'
              btnType='primary'
              onClose={() => {
                setIsModalOpen(false);
              }}
            />
          </div>
          <h3 className={styles.title}>{project.title}</h3>
          <p className={styles.desc}>{project.description}</p>
        </div>
        <div className={styles.rightBottom}>
          <div className={styles.rbLeft} onClick={() => setIsModalOpen(true)}>
            More Details
          </div>
          <Link href={project.href} target='_blank' className={styles.rbRight}>
            Live Site
          </Link>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
        }}
      >
        <div className={styles.modalDetails}>
          <p>{project.moreDetails}</p>
          <div className={styles.falseBtnContainer}>
            <FalseButton
              text='Close'
              btnType='primary'
              onClose={() => {
                setIsModalOpen(false);
              }}
            />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Projects;
