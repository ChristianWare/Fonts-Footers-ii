"use client";

import { projects } from "@/lib/data";
import LayoutWrapper from "../LayoutWrapper";
import styles from "./Projects.module.css";
import Image from "next/image";
import ArrowCluster from "../ArrowCluster/ArrowCluster";
import Link from "next/link";
import Button from "../Button/Button";
import { motion } from "framer-motion";
import { fadeIn } from "../../../animation/variants";
import { useState } from "react";
import Modal from "../Modal/Modal";
import FalseButton from "../FalseButton/FalseButton";

const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section>
      <LayoutWrapper>
        <div className={styles.contentParent}>
          <div className={styles.top}>
            <h2 className={styles.heading}>Recent Projects</h2>
            <ArrowCluster />
          </div>
          {projects.map((x) => (
            <div key={x.title} className={styles.content}>
              <motion.div
                variants={fadeIn("right", 0.3)}
                initial='hidden'
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                className={styles.left}
              >
                <div className={styles.imgContainer}>
                  <Image
                    src={x.src}
                    alt={x.title}
                    fill
                    className={styles.img}
                  />
                </div>
              </motion.div>
              <motion.div
                variants={fadeIn("left", 0.3)}
                initial='hidden'
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                className={styles.right}
              >
                <div className={styles.rightTop}>
                  <h3 className={styles.title}>{x.title}</h3>
                  <p className={styles.desc}>{x.description}</p>
                </div>
                <div className={styles.rightBottom}>
                  <div
                    className={styles.rbLeft}
                    onClick={() => setIsModalOpen(true)}
                  >
                    More Details
                  </div>
                  <Link
                    href={x.href}
                    target='_blank'
                    className={styles.rbRight}
                  >
                    Live Site
                  </Link>
                </div>
              </motion.div>
              <Modal
                isOpen={isModalOpen}
                onClose={() => {
                  setIsModalOpen(false);
                }}
              >
                <p>{x.moreDetails}</p>
                <div className={styles.falseBtnContainer}>
                  <FalseButton
                    text='Close'
                    btnType='primary'
                    onClose={() => {
                      setIsModalOpen(false);
                    }}
                  />
                </div>
              </Modal>
            </div>
          ))}
          {/* <div className={styles.btnContainer}>
            <Button
              text='see all projects'
              href='/'
              btnType='primaryii'
              arrow
            />
          </div> */}
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default Projects;
